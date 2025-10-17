import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { calculateQuote, formatPrice } from "@shared/quoteCalculator";
import type { BusinessType, PricingTier, PayrollPackage, AdditionalService } from "@shared/schema";
import { ChevronLeft, ChevronRight, Check, Calculator } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";

const step1Schema = z.object({
  businessTypeId: z.string().min(1, "Please select a business type"),
  turnover: z.string().min(1, "Please select your turnover range"),
  employeeCount: z.string().min(0),
});

const step2Schema = z.object({
  payrollPackageId: z.string().optional(),
  additionalServiceIds: z.array(z.string()).default([]),
});

const step3Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;

export default function QuoteWizardPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);

  const { data: businessTypes = [] } = useQuery<BusinessType[]>({
    queryKey: ["/api/business-types"],
  });

  const { data: pricingTiers = [] } = useQuery<PricingTier[]>({
    queryKey: ["/api/pricing-tiers"],
  });

  const { data: payrollPackages = [] } = useQuery<PayrollPackage[]>({
    queryKey: ["/api/payroll-packages"],
  });

  const { data: additionalServices = [] } = useQuery<AdditionalService[]>({
    queryKey: ["/api/additional-services"],
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/quotes", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you soon with your personalized quote.",
      });
      navigate("/");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      businessTypeId: "",
      turnover: "",
      employeeCount: "0",
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      payrollPackageId: "",
      additionalServiceIds: [],
    },
  });

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const handleStep1Submit = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: Step2Data) => {
    // Convert "none" to undefined for payroll package
    const cleanedData = {
      ...data,
      payrollPackageId: data.payrollPackageId === "none" ? undefined : data.payrollPackageId,
    };
    setStep2Data(cleanedData);
    setCurrentStep(3);
  };

  const handleFinalSubmit = (data: Step3Data) => {
    if (!step1Data || !step2Data) return;

    const businessType = businessTypes.find(bt => bt.id === parseInt(step1Data.businessTypeId));
    const payrollPackage = step2Data.payrollPackageId && step2Data.payrollPackageId !== "none" 
      ? payrollPackages.find(p => p.id === parseInt(step2Data.payrollPackageId!))
      : undefined;
    const selectedServices = additionalServices.filter(s => 
      step2Data.additionalServiceIds.includes(s.id.toString())
    );

    const calculation = calculateQuote(
      {
        businessTypeId: parseInt(step1Data.businessTypeId),
        turnover: step1Data.turnover,
        employeeCount: parseInt(step1Data.employeeCount),
        payrollPackageId: payrollPackage?.id,
        additionalServiceIds: selectedServices.map(s => s.id),
      },
      pricingTiers,
      payrollPackages,
      additionalServices
    );

    const quoteData = {
      businessTypeId: parseInt(step1Data.businessTypeId),
      businessTypeName: businessType?.type || "",
      turnover: step1Data.turnover,
      employeeCount: parseInt(step1Data.employeeCount),
      payrollPackageId: payrollPackage?.id || null,
      payrollPackageName: payrollPackage?.name || null,
      additionalServiceIds: selectedServices.map(s => s.id.toString()),
      additionalServiceNames: selectedServices.map(s => s.serviceName),
      basePrice: formatPrice(calculation.basePrice),
      payrollPrice: formatPrice(calculation.payrollPrice),
      additionalServicesTotal: formatPrice(calculation.additionalServicesTotal),
      subtotal: formatPrice(calculation.subtotal),
      vatAmount: formatPrice(calculation.vatAmount),
      grandTotal: formatPrice(calculation.grandTotal),
      ...data,
    };

    createQuoteMutation.mutate(quoteData);
  };

  const getTurnoverOptions = (businessTypeId: string) => {
    if (!businessTypeId) return [];
    const tiers = pricingTiers.filter(t => t.businessTypeId === parseInt(businessTypeId));
    return Array.from(new Set(tiers.map(t => t.turnover)));
  };

  const getQuoteCalculation = () => {
    if (!step1Data) return null;

    const calculation = calculateQuote(
      {
        businessTypeId: parseInt(step1Data.businessTypeId),
        turnover: step1Data.turnover,
        employeeCount: parseInt(step1Data.employeeCount),
        payrollPackageId: step2Data?.payrollPackageId ? parseInt(step2Data.payrollPackageId) : undefined,
        additionalServiceIds: step2Data?.additionalServiceIds.map(id => parseInt(id)) || [],
      },
      pricingTiers,
      payrollPackages,
      additionalServices
    );

    return calculation;
  };

  const calculation = getQuoteCalculation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="heading-quote-wizard">Get Your Free Quote</h1>
          <p className="text-muted-foreground">
            Answer a few questions to get an instant quote for our accounting services
          </p>
        </div>

        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                data-testid={`step-indicator-${step}`}
              >
                {currentStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div
                  className={`h-1 w-24 mx-2 ${
                    currentStep > step ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Business Details"}
              {currentStep === 2 && "Select Services"}
              {currentStep === 3 && "Contact Information"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your business"}
              {currentStep === 2 && "Choose the services you need"}
              {currentStep === 3 && "How can we reach you?"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <Form {...step1Form}>
                <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6">
                  <FormField
                    control={step1Form.control}
                    name="businessTypeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-business-type">
                              <SelectValue placeholder="Select your business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id.toString()}>
                                {type.type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {step1Form.watch("businessTypeId") && (
                    <FormField
                      control={step1Form.control}
                      name="turnover"
                      render={({ field }) => {
                        const businessTypeId = step1Form.watch("businessTypeId");
                        const turnoverOptions = getTurnoverOptions(businessTypeId);
                        
                        return (
                          <FormItem>
                            <FormLabel>Annual Turnover</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-turnover">
                                  <SelectValue placeholder="Select your turnover range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {turnoverOptions.map((turnover) => (
                                  <SelectItem key={turnover} value={turnover}>
                                    {turnover}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}

                  <FormField
                    control={step1Form.control}
                    name="employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="0"
                            {...field}
                            data-testid="input-employee-count"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button type="submit" data-testid="button-next-step1">
                      Next <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {currentStep === 2 && (
              <Form {...step2Form}>
                <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-6">
                  {parseInt(step1Data?.employeeCount || "0") > 0 && (
                    <FormField
                      control={step2Form.control}
                      name="payrollPackageId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payroll Package</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-payroll-package">
                                <SelectValue placeholder="Select a payroll package (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              {payrollPackages.map((pkg) => (
                                <SelectItem key={pkg.id} value={pkg.id.toString()}>
                                  {pkg.name} - £{pkg.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={step2Form.control}
                    name="additionalServiceIds"
                    render={() => (
                      <FormItem>
                        <FormLabel>Additional Services</FormLabel>
                        <div className="space-y-3">
                          {additionalServices.map((service) => (
                            <FormField
                              key={service.id}
                              control={step2Form.control}
                              name="additionalServiceIds"
                              render={({ field }) => (
                                <FormItem className="flex items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.id.toString())}
                                      onCheckedChange={(checked) => {
                                        const value = field.value || [];
                                        if (checked) {
                                          field.onChange([...value, service.id.toString()]);
                                        } else {
                                          field.onChange(
                                            value.filter((id) => id !== service.id.toString())
                                          );
                                        }
                                      }}
                                      data-testid={`checkbox-service-${service.id}`}
                                    />
                                  </FormControl>
                                  <div className="flex-1">
                                    <FormLabel className="font-normal cursor-pointer">
                                      {service.serviceName} - £{service.price} {service.period}
                                    </FormLabel>
                                    <p className="text-sm text-muted-foreground">
                                      {service.description}
                                    </p>
                                  </div>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      data-testid="button-back-step2"
                    >
                      <ChevronLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button type="submit" data-testid="button-next-step2">
                      Next <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                {calculation && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Your Quote Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Base Accounting Fees:</span>
                        <span data-testid="text-base-price">£{calculation.basePrice.toFixed(2)}</span>
                      </div>
                      {calculation.payrollPrice > 0 && (
                        <div className="flex justify-between">
                          <span>Payroll Services:</span>
                          <span data-testid="text-payroll-price">£{calculation.payrollPrice.toFixed(2)}</span>
                        </div>
                      )}
                      {calculation.additionalServicesTotal > 0 && (
                        <div className="flex justify-between">
                          <span>Additional Services:</span>
                          <span data-testid="text-additional-price">
                            £{calculation.additionalServicesTotal.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold pt-2 border-t">
                        <span>Subtotal:</span>
                        <span data-testid="text-subtotal">£{calculation.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>VAT (20%):</span>
                        <span data-testid="text-vat">£{calculation.vatAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold pt-2 border-t">
                        <span>Total:</span>
                        <span className="text-primary" data-testid="text-grand-total">
                          £{calculation.grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Form {...step3Form}>
                  <form onSubmit={step3Form.handleSubmit(handleFinalSubmit)} className="space-y-4">
                    <FormField
                      control={step3Form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step3Form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step3Form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step3Form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step3Form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any additional information or questions?"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        data-testid="button-back-step3"
                      >
                        <ChevronLeft className="mr-2 w-4 h-4" /> Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={createQuoteMutation.isPending}
                        data-testid="button-submit-quote"
                      >
                        {createQuoteMutation.isPending ? "Submitting..." : "Get My Quote"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
