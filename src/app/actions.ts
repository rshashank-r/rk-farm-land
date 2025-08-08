'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^\d{10,15}$/, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type State = {
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function submitInquiry(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to submit inquiry. Please check your inputs.',
      success: false,
    };
  }

  try {
    await addDoc(collection(db, 'inquiries'), {
      ...validatedFields.data,
      timestamp: serverTimestamp(),
      status: 'New',
    });
    return { 
      message: 'Thank you for your inquiry! We will get back to you soon.',
      success: true,
     };
  } catch (error) {
    console.error('Firestore Error:', error);
    return { 
      message: 'Database Error: Failed to submit inquiry.',
      success: false,
    };
  }
}
