import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactImage from "@assets/stock_images/business_handshake_p_845ce2ca.jpg";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        toast({
          title: "Message Sent!",
          description: data.message,
          duration: 5000,
        });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0208 514 4953",
      href: "tel:02085144953",
      testId: "link-contact-phone"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rochvilles.co.uk",
      href: "mailto:info@rochvilles.co.uk",
      testId: "link-contact-email"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Ilford, Essex\nServing London and surrounding areas",
      href: null,
      testId: null
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9:00 AM - 5:30 PM\nSaturday - Sunday: Closed",
      href: null,
      testId: null
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to take control of your finances? Contact us today for a free, no-obligation consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    data-testid="input-name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="company" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    data-testid="input-company"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-background resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    data-testid="input-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group shadow-lg hover:shadow-xl transition-all" 
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mt-2 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"></div>
                  <img 
                    src={contactImage} 
                    alt="Business partnership" 
                    className="relative w-full h-64 object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="hover-elevate transition-all duration-300 border-2 hover:border-primary/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="text-muted-foreground hover:text-foreground transition-colors" 
                              data-testid={info.testId || undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <h3 className="font-semibold">Why Contact Us?</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Free initial consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Quick response times
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Expert guidance tailored to your needs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      No obligation to proceed
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
