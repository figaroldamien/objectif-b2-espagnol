import { siteConfig } from "@/lib/site";

export type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function buildCanonical(pathname = "/") {
  return new URL(pathname, siteConfig.siteUrl).toString();
}

export function buildSeo(props: SeoProps = {}) {
  const title = props.title ?? siteConfig.defaultTitle;
  const description = props.description ?? siteConfig.defaultDescription;
  const canonical = buildCanonical(props.pathname);
  const image = props.image
    ? props.image.startsWith("http")
      ? props.image
      : `${siteConfig.siteUrl}${props.image}`
    : `${siteConfig.siteUrl}/images/og-default.svg`;

  return {
    title,
    description,
    canonical,
    image,
    type: props.type ?? "website",
    noindex: props.noindex ?? false
  };
}

export function jsonLdScript(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  return JSON.stringify(data);
}
