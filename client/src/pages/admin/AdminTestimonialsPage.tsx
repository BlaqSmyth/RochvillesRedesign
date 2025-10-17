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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Testimonial } from "@shared/schema";

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  content: z.string().min(1, "Content is required"),
  rating: z.number().min(1).max(5),
  published: z.boolean(),
});

type TestimonialForm = z.infer<typeof testimonialSchema>;

export default function AdminTestimonialsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const { toast } = useToast();

  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const form = useForm<TestimonialForm>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      content: "",
      rating: 5,
      published: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: TestimonialForm) => apiRequest("POST", "/api/testimonials", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({ title: "Testimonial created successfully" });
      setIsDialogOpen(false);
      form.reset();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: TestimonialForm }) =>
      apiRequest("PATCH", `/api/testimonials/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({ title: "Testimonial updated successfully" });
      setIsDialogOpen(false);
      setEditingTestimonial(null);
      form.reset();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/testimonials/${id}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({ title: "Testimonial deleted successfully" });
    },
  });

  function handleCreate() {
    setEditingTestimonial(null);
    form.reset({
      name: "",
      company: "",
      role: "",
      content: "",
      rating: 5,
      published: true,
    });
    setIsDialogOpen(true);
  }

  function handleEdit(testimonial: Testimonial) {
    setEditingTestimonial(testimonial);
    form.reset({
      name: testimonial.name,
      company: testimonial.company,
      role: testimonial.role,
      content: testimonial.content,
      rating: testimonial.rating,
      published: testimonial.published,
    });
    setIsDialogOpen(true);
  }

  function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteMutation.mutate(id);
    }
  }

  function onSubmit(data: TestimonialForm) {
    if (editingTestimonial) {
      updateMutation.mutate({ id: editingTestimonial.id, data });
    } else {
      createMutation.mutate(data);
    }
  }

  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground mt-2">
            Manage client testimonials and reviews
          </p>
        </div>
        <Button onClick={handleCreate} data-testid="button-create-testimonial">
          <Plus className="h-4 w-4 mr-2" />
          New Testimonial
        </Button>
      </div>

      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} data-testid={`card-testimonial-${testimonial.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant={testimonial.published ? "default" : "secondary"}>
                      {testimonial.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} at {testimonial.company}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(testimonial)}
                    data-testid={`button-edit-testimonial-${testimonial.id}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(testimonial.id)}
                    data-testid={`button-delete-testimonial-${testimonial.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        {testimonials.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No testimonials yet. Add your first testimonial!</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingTestimonial ? "Edit Testimonial" : "Create New Testimonial"}
            </DialogTitle>
            <DialogDescription>
              {editingTestimonial ? "Update the testimonial details" : "Add a new client testimonial"}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="John Doe" data-testid="input-testimonial-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Company Ltd" data-testid="input-testimonial-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="CEO" data-testid="input-testimonial-role" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Testimonial Content</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="What the client said..."
                        rows={6}
                        data-testid="input-testimonial-content"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating (1-5 stars)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        min={1}
                        max={5}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                        data-testid="input-testimonial-rating"
                      />
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
                        Show this testimonial on the website
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="switch-testimonial-published"
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
                  data-testid="button-cancel-testimonial"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                  data-testid="button-save-testimonial"
                >
                  {createMutation.isPending || updateMutation.isPending
                    ? "Saving..."
                    : editingTestimonial
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
