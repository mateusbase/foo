import { GetServerSideProps } from "next";
import apiServer from "@/services/apiServer";

const BASE_URL = process.env.BASE_URL || "https://oncoclinicas.vercel.app";

type SitemapEntry = {
  loc: string;
  changefreq: string;
  priority: string;
  lastMod: string;
};

function generateSitemapXml(entries: SitemapEntry[]): string {
  const xmlUrls = entries.map((entry) => {
    const loc = `${BASE_URL}${entry.loc}`;
    const lastmod = new Date(entry.lastMod).toISOString();

    return `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority}</priority>
      </url>`.trim();
  });

  const urlEntries = xmlUrls.join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlEntries}
    </urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const sitemapRes = await apiServer.get("/api/pages/sitemap", {
      headers: { Authorization: process.env.PAGE_API_TOKEN! },
    });

    const entries: SitemapEntry[] = sitemapRes.data;

    const xml = generateSitemapXml(entries);

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.write(xml);
    res.end();
  } catch (error) {
    error;
    res.statusCode = 500;
    res.end();
  }

  return { props: {} };
};

export default function Sitemap(): JSX.Element | null {
  return null;
}
