import ContactForm from '@/components/ContactForm';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to invest in your future? Send us your details and our team will contact you with availability and pricing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <a href="tel:+910000000000" className="text-lg hover:underline text-muted-foreground">+91 97*******28</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:info@rkfarmland.com" className="text-lg hover:underline text-muted-foreground">info@rkfarmland.com</a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xl">
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
