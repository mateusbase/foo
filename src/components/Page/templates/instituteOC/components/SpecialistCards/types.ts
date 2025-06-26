export interface SpecialistCardProps {
  image: {
    alt: string;
    width: number;
    height: number;
    key: string;
    url: string;
  };

  title: string;
  date: string;
  signupButtonText: string;
  signupOverText: string;
  signupUrl: string;
  documentUrl: string;

  values: {
    image: {
      alt: string;
      width: number;
      height: number;
      key: string;
      url: string;
    };

    description: string;
  }[];
}
