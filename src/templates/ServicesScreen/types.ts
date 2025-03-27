export interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  shouldShowButton?: boolean;
  cardClassName?: string;
  imageClassName?: string;
  backgroundImageUrl?: string;
  healthServices?: Array<{
    id: number;
    slug?: string;
    serviceTitle: string;
    serviceDescription: string;
  }>;
  medicalServices?: Array<{
    id: number;
    serviceTitle: string;
    serviceDescription: string;
    actionButtonText?: string;
    subtitle?: string;
    imageUrl?: string;
  }>;
}
