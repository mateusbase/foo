export interface InvitedMedicsSectionProps {
  physicians: {
    image: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };

    name: string;
    crm: string;
    attributions: string[];
  }[];
}
