import { useEffect } from "react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";

interface SeoProps {
  /** Page title. Rendered as "{title} | ClienTech Solutions" unless it already contains the brand. */
  title: string;
  description?: string;
  /** Route path, e.g. "/about". Used to build the canonical + og:url. Defaults to the current path. */
  path?: string;
  /** Absolute or root-relative image URL for social sharing. */
  image?: string;
  /** Set true on pages that should not be indexed (e.g. dev/preview pages). */
  noindex?: boolean;
}

/**
 * Client-side head manager for per-route SEO. This is a SPA with no SSR, so
 * this sets document.title + meta/canonical tags on navigation. It upserts tags
 * (marking managed ones with data-managed-seo) so each route replaces the last.
 *
 * Note: crawlers that execute JS (Google) will read these; non-JS crawlers still
 * only see index.html's static tags. Full fidelity needs SSR/prerender.
 */
export const Seo = ({ title, description, path, image, noindex }: SeoProps) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = SITE_URL + (path ?? window.location.pathname);
    const img = image
      ? image.startsWith("http")
        ? image
        : SITE_URL + image
      : DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        el.setAttribute("data-managed-seo", "true");
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      upsertMeta('meta[name="description"]', "name", "description", description);
      upsertMeta('meta[property="og:description"]', "property", "og:description", description);
      upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    upsertMeta('meta[property="og:image"]', "property", "og:image", img);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", img);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // Canonical link
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("data-managed-seo", "true");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, image, noindex]);

  return null;
};

export default Seo;
