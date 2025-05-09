
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";

interface ContactModalProps {
  trigger?: React.ReactNode;
  className?: string;
}

export function ContactModal({ trigger, className }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className={className} variant="default">
            Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] w-[calc(100%-2rem)] p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get In Touch</DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
