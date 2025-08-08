'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwpqwjoz");

  if (state.succeeded) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Thank you!</h3>
        <p className="text-muted-foreground">Your inquiry has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-sm font-medium text-destructive"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
           className="text-sm font-medium text-destructive"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
           className="text-sm font-medium text-destructive"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
           className="text-sm font-medium text-destructive"
        />
      </div>

      <Button type="submit" disabled={state.submitting} size="lg" className="w-full">
        {state.submitting ? 'Submitting...' : 'Submit Inquiry'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
