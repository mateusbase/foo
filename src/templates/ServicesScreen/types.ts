export interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  shouldShowButton?: boolean;
  cardClassName?: string;
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
    actionButtonText: string;
  }>;
}
