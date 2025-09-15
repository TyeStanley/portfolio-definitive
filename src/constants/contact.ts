// Contact form fields configuration
export const contactFields = [
  {
    id: 'name',
    type: 'text' as const,
    label: 'Name',
    placeholder: 'First and Last Name',
    required: true,
  },
  {
    id: 'email',
    type: 'email' as const,
    label: 'Email',
    placeholder: 'Your email address',
    required: true,
  },
  {
    id: 'message',
    type: 'textarea' as const,
    label: 'Message',
    placeholder: 'What can I help you with?',
    required: true,
    rows: 5,
  },
] as const;

// Type for form field configuration
export type ContactField = (typeof contactFields)[number];
