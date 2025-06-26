export interface Image {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

export interface Link {
  external: boolean;
  url: string;
  openOnNewTab: boolean;
}

export interface CTA {
  text: string;
  link: Link;
}

export interface CTACard {
  text: string;
  variant: "border" | "filled";
  cta: CTA;
}

export interface FeatureCard {
  title: string;
  description: string;
  image: Image;
}

export interface BannerSide {
  image: Image;
  title: string;
  description: string;
  link: {
    target: Link;
    text: string;
  };
}

export interface WorkWithUsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    alert: {
      title: string;
      icon: Image;
      description: string;
      link: Link;
    };

    mainBanner: {
      title: string;
      subtitle: string;
      image: Image;
      target: Link;
      text: string;
    };

    secondaryBanner: {
      text: string;
      image: Image;
      values: string[];
    };

    ctaCards: CTACard[];

    featureCards: {
      title: string;
      description: string;
      cards: FeatureCard[];
    };

    banner: {
      left: BannerSide;
      right: BannerSide;
    };
  };
}
