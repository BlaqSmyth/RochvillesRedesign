import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, useFieldArray } from "react-hook-form";
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
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Service } from "@shared/schema";

const serviceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  features: z.array(z.string()).min(1, "At least one feature is required"),
  popular: z.boolean(),
  published: z.boolean(),
  displayOrder: z.number(),
});

type ServiceForm = z.infer<typeof serviceSchema>;

export default function AdminServicesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { toast } = useToast();

  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const form = useForm<ServiceForm>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      features: [""],
      popular: false,
      published: true,
      displayOrder: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "features",
  });

  const createMutation = useMutation({
    mutationFn: (data: ServiceForm) => apiRequest("POST", "/api/services", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service created successfully" });
      setIsDialogOpen(false);
      form.reset();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: ServiceForm }) =>
      apiRequest("PATCH", `/api/services/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service updated successfully" });
      setIsDialogOpen(false);
      setEditingService(null);
      form.reset();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/services/${id}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service deleted successfully" });
    },
  });

  function handleCreate() {
    setEditingService(null);
    form.reset({
      name: "",
      category: "",
      description: "",
      price: "",
      features: [""],
      popular: false,
      published: true,
      displayOrder: services.length,
    });
    setIsDialogOpen(true);
  }

  function handleEdit(service: Service) {
    setEditingService(service);
    form.reset({
      name: service.name,
      category: service.category,
      description: service.description,
      price: service.price,
      features: service.features,
      popular: service.popular,
      published: service.published,
      displayOrder: service.displayOrder,
    });
    setIsDialogOpen(true);
  }

  function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this service?")) {
      deleteMutation.mutate(id);
    }
  }

  function onSubmit(data: ServiceForm) {
    if (editingService) {
      updateMutation.mutate({ id: editingService.id, data });
    } else {
      createMutation.mutate(data);
    }
  }

  if (isLoading) {
    return <div>Loading services...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted-foreground mt-2">
            Manage services and pricing packages
          </p>
        </div>
        <Button onClick={handleCreate} data-testid="button-create-service">
          <Plus className="h-4 w-4 mr-2" />
          New Service
        </Button>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id} data-testid={`card-service-${service.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{service.category}</Badge>
                    {service.popular && <Badge variant="default">Popular</Badge>}
                    <Badge variant={service.published ? "default" : "secondary"}>
                      {service.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <p className="text-lg font-semibold text-primary mt-1">{service.price}</p>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                  <ul className="mt-3 space-y-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        +{service.features.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(service)}
                    data-testid={`button-edit-service-${service.id}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(service.id)}
                    data-testid={`button-delete-service-${service.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
        {services.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No services yet. Add your first service!</p>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingService ? "Edit Service" : "Create New Service"}
            </DialogTitle>
            <DialogDescription>
              {editingService ? "Update the service details" : "Add a new service or pricing package"}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Monthly Bookkeeping" data-testid="input-service-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Bookkeeping">Bookkeeping</SelectItem>
                          <SelectItem value="Tax Services">Tax Services</SelectItem>
                          <SelectItem value="Payroll">Payroll</SelectItem>
                          <SelectItem value="Compliance">Compliance</SelectItem>
                          <SelectItem value="Advisory">Advisory</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="From £150/month" data-testid="input-service-price" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Brief description of the service"
                        rows={3}
                        data-testid="input-service-description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <FormLabel>Features</FormLabel>
                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`features.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2">
                            <Input
                              {...field}
                              placeholder="Feature description"
                              data-testid={`input-service-feature-${index}`}
                            />
                            {fields.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() => remove(index)}
                                data-testid={`button-remove-feature-${index}`}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append("")}
                  data-testid="button-add-feature"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>

              <FormField
                control={form.control}
                name="displayOrder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Order</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                        data-testid="input-service-order"
                      />
                    </FormControl>
                    <FormDescription>
                      Lower numbers appear first
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="popular"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Popular</FormLabel>
                      <FormDescription>
                        Mark as a popular/featured service
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="switch-service-popular"
                      />
                    </FormControl>
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
                        Show this service on the website
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        data-testid="switch-service-published"
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
                  data-testid="button-cancel-service"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                  data-testid="button-save-service"
                >
                  {createMutation.isPending || updateMutation.isPending
                    ? "Saving..."
                    : editingService
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
