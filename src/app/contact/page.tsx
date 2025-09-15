'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import { contactFields } from '@/constants/contact';

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be no more than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be no more than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const formData = watch();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', data);
      alert("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <PageWrapper title="Contact">
      <div className="">
        {/* Header */}
        <h1 className="text-base-content group mb-4 text-4xl font-bold">
          <span className="from-primary to-accent group-hover:from-accent group-hover:to-primary bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300">
            Get in Touch
          </span>
        </h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {contactFields.map((field) => (
            <div key={field.id} className="form-control text-left">
              <div
                className={`divider divider-start my-2 ${
                  errors[field.id as keyof ContactFormData]
                    ? 'divider-error'
                    : touchedFields[field.id as keyof ContactFormData] &&
                        !errors[field.id as keyof ContactFormData] &&
                        formData[field.id as keyof ContactFormData]
                      ? 'divider-success'
                      : 'divider-base-content'
                }`}
              >
                <span className="label-text font-medium">
                  {field.label} {field.required && <span className="text-error">*</span>}
                </span>
              </div>

              {field.type === 'textarea' ? (
                <textarea
                  {...register(field.id as keyof ContactFormData)}
                  placeholder={field.placeholder}
                  className={`textarea textarea-bordered w-full ${
                    errors[field.id as keyof ContactFormData] ? 'textarea-error' : ''
                  }`}
                  rows={field.rows || 4}
                />
              ) : (
                <input
                  type={field.type}
                  {...register(field.id as keyof ContactFormData)}
                  placeholder={field.placeholder}
                  className={`input input-bordered w-full ${
                    errors[field.id as keyof ContactFormData] ? 'input-error' : ''
                  }`}
                />
              )}

              {errors[field.id as keyof ContactFormData] && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors[field.id as keyof ContactFormData]?.message}
                  </span>
                </label>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Sending...
                </>
              ) : (
                <>
                  SEND
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}
