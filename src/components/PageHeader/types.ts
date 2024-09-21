export type PageHeaderProps = {
  preTitle?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  showContactSection?: boolean;
  contactLinks?: {
    whatsappText: string;
    whatsappLink: string;
    phoneText: string;
    phoneLink: string;
    mapText: string;
    mapLink: string;
  };
};
