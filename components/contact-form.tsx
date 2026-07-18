'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactSchema, ContactFormValues } from '@/lib/schemas/contact';

export function ContactForm() {
  const searchParams = useSearchParams();
  const isApplyEnquiry = searchParams.get('apply') === 'true';
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Auto-fill subject/message if user clicked "Apply Now"
  React.useEffect(() => {
    if (isApplyEnquiry) {
      setValue('subject', 'Enrollment Application Enquiry (Fall Academic Session)');
      setValue('message', 'Dear Admissions Board,\n\nI am interested in applying to Venite University for the upcoming academic session. Please provide me with further instructions regarding entry requirements, tuition structure, and the submission portal.\n\nThank you.');
    }
  }, [isApplyEnquiry, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resBody = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setSubmitMessage("Message sent. We'll reply within two business days.");
        reset();
      } else {
        setIsSuccess(false);
        setSubmitMessage(resBody.error || "That didn't send. Check your connection and try again.");
      }
    } catch (err) {
      setIsSuccess(false);
      setSubmitMessage("That didn't send. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess && submitMessage) {
    return (
      <div className="bg-veil dark:bg-void border-2 border-marigold p-8 text-center space-y-6 max-w-lg mx-auto shadow-xl">
        <div className="mx-auto w-16 h-16 bg-marigold flex items-center justify-center text-void">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-black text-void dark:text-veil">
            Transmission Completed
          </h3>
          <p className="text-sm text-void/85 dark:text-veil/85 font-sans leading-relaxed font-light">
            {submitMessage}
          </p>
        </div>
        <button
          onClick={() => {
            setIsSuccess(false);
            setSubmitMessage(null);
          }}
          className="font-grotesque text-xs font-bold uppercase tracking-widest px-8 py-3.5 bg-cobalt hover:bg-crimson text-veil transition-colors duration-300 rounded-none cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form-element"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-veil dark:bg-void/40 p-6 sm:p-8 border border-dusk/35 shadow-md"
    >
      <div className="space-y-1.5">
        <h3 className="font-serif text-2xl font-black text-void dark:text-veil">
          Send a Direct Inquiry
        </h3>
        <p className="text-xs text-dusk font-mono uppercase tracking-wider">
          Registry Desk Queue
        </p>
      </div>

      {submitMessage && !isSuccess && (
        <div className="p-4 bg-crimson/10 border border-crimson text-crimson flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-xs font-medium">{submitMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name-input" className="text-[10px] font-bold text-void/80 dark:text-veil/80 uppercase tracking-[0.15em] font-grotesque">
            Your Full Name
          </label>
          <input
            id="name-input"
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className={`w-full bg-void/5 dark:bg-veil/5 border py-3.5 px-4 text-sm text-void dark:text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold focus:border-transparent transition-all rounded-none ${
              errors.name ? 'border-crimson ring-1 ring-crimson' : 'border-dusk/20'
            }`}
          />
          {errors.name && (
            <p className="flex items-center text-crimson text-xs font-medium mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email-input" className="text-[10px] font-bold text-void/80 dark:text-veil/80 uppercase tracking-[0.15em] font-grotesque">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={`w-full bg-void/5 dark:bg-veil/5 border py-3.5 px-4 text-sm text-void dark:text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold focus:border-transparent transition-all rounded-none ${
              errors.email ? 'border-crimson ring-1 ring-crimson' : 'border-dusk/20'
            }`}
          />
          {errors.email && (
            <p className="flex items-center text-crimson text-xs font-medium mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="subject-input" className="text-[10px] font-bold text-void/80 dark:text-veil/80 uppercase tracking-[0.15em] font-grotesque">
          Inquiry Subject
        </label>
        <input
          id="subject-input"
          type="text"
          placeholder="e.g. Scholarship Admissions, Academic Transfer"
          {...register('subject')}
          className={`w-full bg-void/5 dark:bg-veil/5 border py-3.5 px-4 text-sm text-void dark:text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold focus:border-transparent transition-all rounded-none ${
            errors.subject ? 'border-crimson ring-1 ring-crimson' : 'border-dusk/20'
          }`}
        />
        {errors.subject && (
          <p className="flex items-center text-crimson text-xs font-medium mt-1 font-mono">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message-input" className="text-[10px] font-bold text-void/80 dark:text-veil/80 uppercase tracking-[0.15em] font-grotesque">
          Detailed Message
        </label>
        <textarea
          id="message-input"
          rows={5}
          placeholder="Please describe your inquiry in detail..."
          {...register('message')}
          className={`w-full bg-void/5 dark:bg-veil/5 border py-3.5 px-4 text-sm text-void dark:text-veil placeholder-dusk focus:outline-hidden focus:ring-1 focus:ring-marigold focus:border-transparent transition-all resize-none rounded-none ${
            errors.message ? 'border-crimson ring-1 ring-crimson' : 'border-dusk/20'
          }`}
        />
        {errors.message && (
          <p className="flex items-center text-crimson text-xs font-medium mt-1 font-mono">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 justify-center flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-marigold text-void hover:bg-cobalt hover:text-veil disabled:opacity-50 transition-colors duration-300 rounded-none cursor-pointer font-grotesque"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Transmitting Inquiry...
          </>
        ) : (
          'Submit Inquiry Form'
        )}
      </button>
    </form>
  );
}
