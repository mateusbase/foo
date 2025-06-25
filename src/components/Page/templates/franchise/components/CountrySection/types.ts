type CMSImage = {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
};

type LocationData = {
  title: string;
  description: string;
  map: CMSImage;
  sideText: string;
};

type CardData = {
  image: CMSImage;
  title: string;
  description: string;
};

export interface CountrySectionProps {
  location: LocationData;

  cards: {
    cards: CardData[];

    link: {
      target: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      text: string;
    };
  };
}
