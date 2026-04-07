import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContactForm, ContactFormBodyBudgetRange, ContactFormBodyTimeline } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, AlertCircle } from "lucide-react";

const BUDGET_OPTIONS = Object.values(ContactFormBodyBudgetRange) as [string, ...string[]];
const TIMELINE_OPTIONS = Object.values(ContactFormBodyTimeline) as [string, ...string[]];

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  websiteUrl: z.string().url("Must be a valid URL (e.g. https://example.com)"),
  budgetRange: z.enum(BUDGET_OPTIONS).optional(),
  timeline: z.enum(TIMELINE_OPTIONS).optional(),
  message: z.string().min(1, "Please tell us about your situation"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const submitMutation = useSubmitContactForm();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      websiteUrl: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitMutation.mutate({ 
      data: {
        ...data,
        budgetRange: data.budgetRange as ContactFormBodyBudgetRange | undefined,
        timeline: data.timeline as ContactFormBodyTimeline | undefined,
      } 
    }, {
      onSuccess: () => {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  return (
    <>
      <Helmet>
        <title>Get Help With Your ADA Demand Letter | Steadfast Accessibility</title>
        <meta name="description" content="Got an ADA demand letter or accessibility complaint? Tell us about your situation and we'll get back to you within one business day." />
        <meta property="og:title" content="Get Help With Your ADA Demand Letter | Steadfast Accessibility" />
        <meta property="og:description" content="Tell us about your situation. We respond within one business day. A 15-minute call costs you nothing. A lawsuit costs $60,000–$200,000+." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://steadfast-accessibility.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Help With Your ADA Demand Letter | Steadfast Accessibility" />
        <meta name="twitter:description" content="Tell us about your situation. We respond within one business day." />
      </Helmet>

      <section className="pt-20 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">Get Help Now</h1>
          <p className="text-xl text-muted-foreground">
            Whether you just received a demand letter or want to get ahead of the risk, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          {isSuccess ? (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-4">Thanks — we'll be in touch within one business day.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your information has been received securely. We are reviewing your website and will contact you shortly.
              </p>
              <Button variant="outline" onClick={() => {
                form.reset();
                setIsSuccess(false);
              }}>Submit another inquiry</Button>
            </div>
          ) : (
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-10">
              
              {submitMutation.isError && (
                <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">There was an error submitting the form</h4>
                    <p className="text-sm mt-1">Please try again or email us directly at dan@steadfast-accessibility.com.</p>
                  </div>
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL *</FormLabel>
                          <FormControl>
                            <Input type="url" placeholder="https://" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {BUDGET_OPTIONS.map((opt) => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TIMELINE_OPTIONS.map((opt) => (
                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your situation *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What's going on? Received a demand letter? Customer complaint? Just want to get ahead of it? The more context you share, the better we can help." 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={submitMutation.isPending}>
                    {submitMutation.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>

              <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center md:text-left">
                <div>dan@steadfast-accessibility.com</div>
                <div>We respond within one business day.</div>
                <div>Your information is confidential.</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
