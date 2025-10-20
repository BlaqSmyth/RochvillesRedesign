import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Article } from "@shared/schema";
import { RichTextEditor } from "@/components/RichTextEditor";

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  customCategory: z.string().optional(),
  excerpt: z.string().min(1, "Excerpt is required"),
  fullContent: z.string().min(1, "Content is required"),
  readTime: z.string().min(1, "Read time is required"),
  published: z.boolean(),
});

type ArticleForm = z.infer<typeof articleSchema>;

const PREDEFINED_CATEGORIES = [
  "Tax Planning",
  "Compliance",
  "Business",
  "Personal Tax",
  "VAT",
  "Capital Gains Tax",
  "Income Tax",
  "Corporation Tax",
  "Capital Allowances",
];

export default function AdminArticlesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const { toast } = useToast();

  const { data: articles = [], isLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const form = useForm<ArticleForm>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      category: "",
      customCategory: "",
      excerpt: "",
      fullContent: "",
      readTime: "2 min read",
      published: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: ArticleForm) => apiRequest("POST", "/api/articles", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: "Article created successfully" });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({ title: "Failed to create article", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: ArticleForm }) =>
      apiRequest("PATCH", `/api/articles/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: "Article updated successfully" });
      setIsDialogOpen(false);
      setEditingArticle(null);
      form.reset();
    },
    onError: () => {
      toast({ title: "Failed to update article", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/articles/${id}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/articles"] });
      toast({ title: "Article deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete article", variant: "destructive" });
    },
  });

  function handleCreate() {
    setEditingArticle(null);
    setShowCustomCategory(false);
    form.reset({
      title: "",
      category: "",
      customCategory: "",
      excerpt: "",
      fullContent: "",
      readTime: "2 min read",
      published: true,
    });
    setIsDialogOpen(true);
  }

  function handleEdit(article: Article) {
    setEditingArticle(article);
    const isCustomCategory = !PREDEFINED_CATEGORIES.includes(article.category);
    setShowCustomCategory(isCustomCategory);
    form.reset({
      title: article.title,
      category: isCustomCategory ? "Other" : article.category,
      customCategory: isCustomCategory ? article.category : "",
      excerpt: article.excerpt,
      fullContent: article.fullContent,
      readTime: article.readTime,
      published: article.published,
    });
    setIsDialogOpen(true);
  }

  function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteMutation.mutate(id);
    }
  }

  function onSubmit(data: ArticleForm) {
    const finalData = {
      ...data,
      category: data.category === "Other" ? (data.customCategory || "") : data.category,
    };
    
    // Validate custom category if "Other" is selected
    if (data.category === "Other" && !data.customCategory?.trim()) {
      toast({ 
        title: "Custom category required", 
        description: "Please enter a custom category name",
        variant: "destructive" 
      });
      return;
    }
    
    if (editingArticle) {
      updateMutation.mutate({ id: editingArticle.id, data: finalData });
    } else {
      createMutation.mutate(finalData);
    }
  }

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-muted-foreground mt-2">
            Manage tax tips and blog articles
          </p>
        </div>
        <Button onClick={handleCreate} data-testid="button-create-article">
          <Plus className="h-4 w-4 mr-2" />
          New Article
        </Button>
      </div>

      <div className="grid gap-4">
        {articles.map((article) => (
          <Card key={article.id} data-testid={`card-article-${article.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <Badge variant={article.published ? "default" : "secondary"}>
                      {article.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {article.excerpt}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {article.readTime}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(article)}
                    data-testid={`button-edit-article-${article.id}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(article.id)}
                    data-testid={`button-delete-article-${article.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        {articles.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No articles yet. Create your first article!</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingArticle ? "Edit Article" : "Create New Article"}
            </DialogTitle>
            <DialogDescription>
              {editingArticle ? "Update the article details" : "Add a new tax tip or blog article"}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Article title" data-testid="input-article-title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value);
                        setShowCustomCategory(value === "Other");
                        if (value !== "Other") {
                          form.setValue("customCategory", "");
                        }
                      }} 
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger data-testid="select-article-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {PREDEFINED_CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                        <SelectItem value="Other">Other (Custom)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {showCustomCategory && (
                <FormField
                  control={form.control}
                  name="customCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custom Category Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter custom category name" 
                          data-testid="input-custom-category"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter a custom category name for this article
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Brief summary of the article"
                        rows={3}
                        data-testid="input-article-excerpt"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Content</FormLabel>
                    <FormControl>
                      <RichTextEditor
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Write your article content here..."
                      />
                    </FormControl>
                    <FormDescription>
                      Use the toolbar to format your content. The editor will generate HTML automatically.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="readTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Read Time</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., 3 min read" data-testid="input-article-readtime" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Published</FormLabel>
                      <FormDescription>
                        Make this article visible on the website
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="switch-article-published"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-3 justify-end pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  data-testid="button-cancel-article"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                  data-testid="button-save-article"
                >
                  {createMutation.isPending || updateMutation.isPending
                    ? "Saving..."
                    : editingArticle
                    ? "Update"
                    : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
