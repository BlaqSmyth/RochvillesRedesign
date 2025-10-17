import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertPayrollPackageSchema, insertBusinessTypeSchema, insertPricingTierSchema, insertAdditionalServiceSchema } from "@shared/schema";
import type { PayrollPackage, BusinessType, PricingTier, AdditionalService } from "@shared/schema";
import type { z } from "zod";

type PayrollPackageForm = z.infer<typeof insertPayrollPackageSchema>;
type BusinessTypeForm = z.infer<typeof insertBusinessTypeSchema>;
type PricingTierForm = z.infer<typeof insertPricingTierSchema>;
type AdditionalServiceForm = z.infer<typeof insertAdditionalServiceSchema>;

export default function AdminPricingPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("payroll");

  // Payroll Packages state
  const [isPayrollDialogOpen, setIsPayrollDialogOpen] = useState(false);
  const [editingPayroll, setEditingPayroll] = useState<PayrollPackage | null>(null);

  // Business Types state
  const [isBusinessTypeDialogOpen, setIsBusinessTypeDialogOpen] = useState(false);
  const [editingBusinessType, setEditingBusinessType] = useState<BusinessType | null>(null);

  // Pricing Tiers state
  const [isPricingTierDialogOpen, setIsPricingTierDialogOpen] = useState(false);
  const [editingPricingTier, setEditingPricingTier] = useState<PricingTier | null>(null);

  // Additional Services state
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<AdditionalService | null>(null);

  // Fetch data
  const { data: payrollPackages = [] } = useQuery<PayrollPackage[]>({
    queryKey: ["/api/admin/payroll-packages"],
  });

  const { data: businessTypes = [] } = useQuery<BusinessType[]>({
    queryKey: ["/api/admin/business-types"],
  });

  const { data: pricingTiers = [] } = useQuery<PricingTier[]>({
    queryKey: ["/api/admin/pricing-tiers"],
  });

  const { data: additionalServices = [] } = useQuery<AdditionalService[]>({
    queryKey: ["/api/admin/additional-services"],
  });

  // Payroll Package Form
  const payrollForm = useForm<PayrollPackageForm>({
    resolver: zodResolver(insertPayrollPackageSchema),
    defaultValues: {
      name: "",
      employeeRange: "",
      price: "",
      features: [],
      displayOrder: 0,
      published: true,
    },
  });

  // Business Type Form
  const businessTypeForm = useForm<BusinessTypeForm>({
    resolver: zodResolver(insertBusinessTypeSchema),
    defaultValues: {
      type: "",
      icon: "",
      popular: false,
      displayOrder: 0,
      published: true,
    },
  });

  // Pricing Tier Form
  const pricingTierForm = useForm<PricingTierForm>({
    resolver: zodResolver(insertPricingTierSchema),
    defaultValues: {
      businessTypeId: 0,
      turnover: "",
      price: "",
      displayOrder: 0,
    },
  });

  // Additional Service Form
  const serviceForm = useForm<AdditionalServiceForm>({
    resolver: zodResolver(insertAdditionalServiceSchema),
    defaultValues: {
      serviceName: "",
      price: "",
      period: "",
      description: "",
      icon: "",
      displayOrder: 0,
      published: true,
    },
  });

  // Payroll Package Mutations
  const createPayrollMutation = useMutation({
    mutationFn: (data: PayrollPackageForm) => apiRequest("POST", "/api/admin/payroll-packages", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/payroll-packages"] });
      toast({ title: "Payroll package created successfully" });
      setIsPayrollDialogOpen(false);
      payrollForm.reset();
    },
  });

  const updatePayrollMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: PayrollPackageForm }) =>
      apiRequest("PATCH", `/api/admin/payroll-packages/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/payroll-packages"] });
      toast({ title: "Payroll package updated successfully" });
      setIsPayrollDialogOpen(false);
      setEditingPayroll(null);
      payrollForm.reset();
    },
  });

  const deletePayrollMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/payroll-packages/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/payroll-packages"] });
      toast({ title: "Payroll package deleted successfully" });
    },
  });

  // Business Type Mutations
  const createBusinessTypeMutation = useMutation({
    mutationFn: (data: BusinessTypeForm) => apiRequest("POST", "/api/admin/business-types", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/business-types"] });
      toast({ title: "Business type created successfully" });
      setIsBusinessTypeDialogOpen(false);
      businessTypeForm.reset();
    },
  });

  const updateBusinessTypeMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: BusinessTypeForm }) =>
      apiRequest("PATCH", `/api/admin/business-types/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/business-types"] });
      toast({ title: "Business type updated successfully" });
      setIsBusinessTypeDialogOpen(false);
      setEditingBusinessType(null);
      businessTypeForm.reset();
    },
  });

  const deleteBusinessTypeMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/business-types/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/business-types"] });
      toast({ title: "Business type deleted successfully" });
    },
  });

  // Pricing Tier Mutations
  const createPricingTierMutation = useMutation({
    mutationFn: (data: PricingTierForm) => apiRequest("POST", "/api/admin/pricing-tiers", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pricing-tiers"] });
      toast({ title: "Pricing tier created successfully" });
      setIsPricingTierDialogOpen(false);
      pricingTierForm.reset();
    },
  });

  const updatePricingTierMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: PricingTierForm }) =>
      apiRequest("PATCH", `/api/admin/pricing-tiers/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pricing-tiers"] });
      toast({ title: "Pricing tier updated successfully" });
      setIsPricingTierDialogOpen(false);
      setEditingPricingTier(null);
      pricingTierForm.reset();
    },
  });

  const deletePricingTierMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/pricing-tiers/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/pricing-tiers"] });
      toast({ title: "Pricing tier deleted successfully" });
    },
  });

  // Additional Service Mutations
  const createServiceMutation = useMutation({
    mutationFn: (data: AdditionalServiceForm) => apiRequest("POST", "/api/admin/additional-services", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/additional-services"] });
      toast({ title: "Service created successfully" });
      setIsServiceDialogOpen(false);
      serviceForm.reset();
    },
  });

  const updateServiceMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: AdditionalServiceForm }) =>
      apiRequest("PATCH", `/api/admin/additional-services/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/additional-services"] });
      toast({ title: "Service updated successfully" });
      setIsServiceDialogOpen(false);
      setEditingService(null);
      serviceForm.reset();
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/admin/additional-services/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/additional-services"] });
      toast({ title: "Service deleted successfully" });
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pricing Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage payroll packages, business types, pricing tiers, and additional services
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="payroll" data-testid="tab-payroll">Payroll Packages</TabsTrigger>
          <TabsTrigger value="business" data-testid="tab-business">Business Types</TabsTrigger>
          <TabsTrigger value="tiers" data-testid="tab-tiers">Pricing Tiers</TabsTrigger>
          <TabsTrigger value="services" data-testid="tab-services">Additional Services</TabsTrigger>
        </TabsList>

        <TabsContent value="payroll" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Payroll Packages</h2>
            <Button
              onClick={() => {
                setEditingPayroll(null);
                payrollForm.reset({
                  name: "",
                  employeeRange: "",
                  price: "",
                  features: [],
                  displayOrder: 0,
                  published: true,
                });
                setIsPayrollDialogOpen(true);
              }}
              data-testid="button-add-payroll"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Package
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {payrollPackages.map((pkg) => (
              <Card key={pkg.id} data-testid={`card-payroll-${pkg.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{pkg.name}</CardTitle>
                      <CardDescription>{pkg.employeeRange}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingPayroll(pkg);
                          payrollForm.reset(pkg);
                          setIsPayrollDialogOpen(true);
                        }}
                        data-testid={`button-edit-payroll-${pkg.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deletePayrollMutation.mutate(pkg.id)}
                        data-testid={`button-delete-payroll-${pkg.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">{pkg.price}</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx}>• {feature}</div>
                      ))}
                    </div>
                    <Badge variant={pkg.published ? "default" : "secondary"}>
                      {pkg.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Business Types</h2>
            <Button
              onClick={() => {
                setEditingBusinessType(null);
                businessTypeForm.reset({
                  type: "",
                  icon: "",
                  popular: false,
                  displayOrder: 0,
                  published: true,
                });
                setIsBusinessTypeDialogOpen(true);
              }}
              data-testid="button-add-business-type"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Business Type
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {businessTypes.map((type) => (
              <Card key={type.id} data-testid={`card-business-type-${type.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {type.type}
                        {type.popular && <Badge variant="default">Popular</Badge>}
                      </CardTitle>
                      <CardDescription>Icon: {type.icon}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingBusinessType(type);
                          businessTypeForm.reset(type);
                          setIsBusinessTypeDialogOpen(true);
                        }}
                        data-testid={`button-edit-business-type-${type.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteBusinessTypeMutation.mutate(type.id)}
                        data-testid={`button-delete-business-type-${type.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant={type.published ? "default" : "secondary"}>
                    {type.published ? "Published" : "Draft"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tiers" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Pricing Tiers</h2>
            <Button
              onClick={() => {
                setEditingPricingTier(null);
                pricingTierForm.reset({
                  businessTypeId: 0,
                  turnover: "",
                  price: "",
                  displayOrder: 0,
                });
                setIsPricingTierDialogOpen(true);
              }}
              data-testid="button-add-pricing-tier"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Pricing Tier
            </Button>
          </div>

          <div className="grid gap-4">
            {pricingTiers.map((tier) => {
              const businessType = businessTypes.find(bt => bt.id === tier.businessTypeId);
              return (
                <Card key={tier.id} data-testid={`card-pricing-tier-${tier.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{tier.turnover}</CardTitle>
                        <CardDescription>
                          {businessType?.type}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingPricingTier(tier);
                            pricingTierForm.reset(tier);
                            setIsPricingTierDialogOpen(true);
                          }}
                          data-testid={`button-edit-pricing-tier-${tier.id}`}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deletePricingTierMutation.mutate(tier.id)}
                          data-testid={`button-delete-pricing-tier-${tier.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{tier.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Additional Services</h2>
            <Button
              onClick={() => {
                setEditingService(null);
                serviceForm.reset({
                  serviceName: "",
                  price: "",
                  period: "",
                  description: "",
                  icon: "",
                  displayOrder: 0,
                  published: true,
                });
                setIsServiceDialogOpen(true);
              }}
              data-testid="button-add-service"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {additionalServices.map((service) => (
              <Card key={service.id} data-testid={`card-service-${service.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{service.serviceName}</CardTitle>
                      <CardDescription>Icon: {service.icon}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingService(service);
                          serviceForm.reset(service);
                          setIsServiceDialogOpen(true);
                        }}
                        data-testid={`button-edit-service-${service.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteServiceMutation.mutate(service.id)}
                        data-testid={`button-delete-service-${service.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">{service.price} {service.period}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <Badge variant={service.published ? "default" : "secondary"}>
                      {service.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Payroll Package Dialog */}
      <Dialog open={isPayrollDialogOpen} onOpenChange={setIsPayrollDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPayroll ? "Edit Payroll Package" : "Create Payroll Package"}</DialogTitle>
            <DialogDescription>
              {editingPayroll ? "Update the payroll package details" : "Add a new payroll package"}
            </DialogDescription>
          </DialogHeader>
          <Form {...payrollForm}>
            <form
              onSubmit={payrollForm.handleSubmit((data) => {
                if (editingPayroll) {
                  updatePayrollMutation.mutate({ id: editingPayroll.id, data });
                } else {
                  createPayrollMutation.mutate(data);
                }
              })}
              className="space-y-4"
            >
              <FormField
                control={payrollForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Name</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-payroll-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={payrollForm.control}
                name="employeeRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee Range</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Up to 10 employees" data-testid="input-payroll-range" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={payrollForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., £45" data-testid="input-payroll-price" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={payrollForm.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0">
                    <div>
                      <FormLabel>Published</FormLabel>
                      <FormDescription>Make this package visible on the website</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-payroll-published" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsPayrollDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" data-testid="button-save-payroll">
                  {editingPayroll ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Business Type Dialog */}
      <Dialog open={isBusinessTypeDialogOpen} onOpenChange={setIsBusinessTypeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingBusinessType ? "Edit Business Type" : "Create Business Type"}</DialogTitle>
            <DialogDescription>
              {editingBusinessType ? "Update the business type details" : "Add a new business type"}
            </DialogDescription>
          </DialogHeader>
          <Form {...businessTypeForm}>
            <form
              onSubmit={businessTypeForm.handleSubmit((data) => {
                if (editingBusinessType) {
                  updateBusinessTypeMutation.mutate({ id: editingBusinessType.id, data });
                } else {
                  createBusinessTypeMutation.mutate(data);
                }
              })}
              className="space-y-4"
            >
              <FormField
                control={businessTypeForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type Name</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-business-type-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={businessTypeForm.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Briefcase" data-testid="input-business-type-icon" />
                    </FormControl>
                    <FormDescription>Lucide icon name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={businessTypeForm.control}
                name="popular"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0">
                    <div>
                      <FormLabel>Popular</FormLabel>
                      <FormDescription>Mark as most popular choice</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-business-type-popular" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={businessTypeForm.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0">
                    <div>
                      <FormLabel>Published</FormLabel>
                      <FormDescription>Make this business type visible on the website</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-business-type-published" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsBusinessTypeDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" data-testid="button-save-business-type">
                  {editingBusinessType ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Pricing Tier Dialog */}
      <Dialog open={isPricingTierDialogOpen} onOpenChange={setIsPricingTierDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPricingTier ? "Edit Pricing Tier" : "Create Pricing Tier"}</DialogTitle>
            <DialogDescription>
              {editingPricingTier ? "Update the pricing tier details" : "Add a new pricing tier"}
            </DialogDescription>
          </DialogHeader>
          <Form {...pricingTierForm}>
            <form
              onSubmit={pricingTierForm.handleSubmit((data) => {
                if (editingPricingTier) {
                  updatePricingTierMutation.mutate({ id: editingPricingTier.id, data });
                } else {
                  createPricingTierMutation.mutate(data);
                }
              })}
              className="space-y-4"
            >
              <FormField
                control={pricingTierForm.control}
                name="businessTypeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type ID</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                        data-testid="input-tier-business-type-id"
                      />
                    </FormControl>
                    <FormDescription>Select from Business Types tab</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={pricingTierForm.control}
                name="turnover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Turnover Range</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., Up to £85k" data-testid="input-tier-turnover" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={pricingTierForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., £150" data-testid="input-tier-price" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsPricingTierDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" data-testid="button-save-tier">
                  {editingPricingTier ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Additional Service Dialog */}
      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingService ? "Edit Service" : "Create Service"}</DialogTitle>
            <DialogDescription>
              {editingService ? "Update the service details" : "Add a new additional service"}
            </DialogDescription>
          </DialogHeader>
          <Form {...serviceForm}>
            <form
              onSubmit={serviceForm.handleSubmit((data) => {
                if (editingService) {
                  updateServiceMutation.mutate({ id: editingService.id, data });
                } else {
                  createServiceMutation.mutate(data);
                }
              })}
              className="space-y-4"
            >
              <FormField
                control={serviceForm.control}
                name="serviceName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Name</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-service-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={serviceForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., £75" data-testid="input-service-price" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={serviceForm.control}
                name="period"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Period</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., per quarter" data-testid="input-service-period" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={serviceForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} data-testid="input-service-description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={serviceForm.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="e.g., FileText" data-testid="input-service-icon" />
                    </FormControl>
                    <FormDescription>Lucide icon name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={serviceForm.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between space-y-0">
                    <div>
                      <FormLabel>Published</FormLabel>
                      <FormDescription>Make this service visible on the website</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} data-testid="switch-service-published" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsServiceDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" data-testid="button-save-service">
                  {editingService ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
