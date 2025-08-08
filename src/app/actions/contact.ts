'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import type { Inquiry } from '@/components/ContactForm';

export async function submitInquiry(data: Inquiry) {
  try {
    await addDoc(collection(db, 'inquiries'), {
      ...data,
      submittedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error('Failed to submit inquiry.');
  }
}
