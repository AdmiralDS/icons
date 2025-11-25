export type IconCategoryConfig = {
  label: string;
  value:
    | 'cards'
    | 'category'
    | 'communication'
    | 'documents'
    | 'finance'
    | 'flags'
    | 'payment'
    | 'redact'
    | 'location'
    | 'logo'
    | 'security'
    | 'service'
    | 'system'
    | 'bank';
};

export const ICON_CATEGORY_CONFIG: Array<IconCategoryConfig> = [
  { label: 'Cards', value: 'cards' },
  { label: 'Category', value: 'category' },
  { label: 'Communication', value: 'communication' },
  { label: 'Documents', value: 'documents' },
  { label: 'Finance', value: 'finance' },
  { label: 'Flags', value: 'flags' },
  { label: 'Payment', value: 'payment' },
  { label: 'Redact', value: 'redact' },
  { label: 'Location', value: 'location' },
  { label: 'Logo', value: 'logo' },
  { label: 'Security', value: 'security' },
  { label: 'Service', value: 'service' },
  { label: 'System', value: 'system' },
  { label: 'Bank', value: 'bank' },
];
