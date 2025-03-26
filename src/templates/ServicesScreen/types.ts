export interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  cardHeight?: number;
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
