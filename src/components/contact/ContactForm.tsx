
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("AumBokm380l5i1kQe");

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  inquiryType: z.string({
    required_error: "Please select what you're inquiring about.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || 'Not provided',
        inquiry_type: values.inquiryType,
        message: values.message,
        to_email: 'ephremnahusenay@gmail.com',
      };

      await emailjs.send(
        'service_6z6a6de',
        'template_mfkcyo9',
        templateParams,
        'AumBokm380l5i1kQe'
      );
      
      setIsSubmitted(true);
      form.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We've received your message and will contact you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="min-h-[48px] px-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className="min-h-[50px] text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" className="min-h-[50px] text-base" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base">Phone (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" className="min-h-[50px] text-base" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">What are you inquiring about?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="min-h-[50px] text-base">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-base">
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="industries">Industries</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  className="min-h-[120px] text-base resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full min-h-[50px] text-base font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
