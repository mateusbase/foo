import { BlockDataMap } from "@/components/RenderBlocks/types";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface ContentData {
  data: {
    title: string;
    description: string;
  };
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface PageComponent {
  id: string;
  type: string;
  props: Record<string, unknown>;
}

export interface PageData {
  slug: string;
  components: BlockDataMap[];
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}
