import React from 'react';

/**
 * SEO Component for setting page-specific meta tags and Schema markup
 * Usage: <SEO title="Page Title" description="Page description" schema={schemaObject} />
 */
export default function SEO({ 
  title = "Berk Visuals - Videoproductie Heusden",
  description = "Professionele videoproductie in Heusden",
  keywords = "videoproductie Heusden, video maken, TikTok, Instagram Reels",
  ogImage = "https://img.sanishtech.com/u/79902631170c4de75ad15182794b3ac1.png",
  schema = null,
  canonical = null
}) {
  React.useEffect(() => {
    // Set page title
    document.title = title;

    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);

    // Twitter
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Schema markup
    if (schema) {
      let schemaScript = document.getElementById('page-schema-data');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-schema-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup
    return () => {
      if (schema) {
        const schemaScript = document.getElementById('page-schema-data');
        if (schemaScript) schemaScript.remove();
      }
      if (canonical) {
        const link = document.querySelector('link[rel="canonical"]');
        if (link) link.remove();
      }
    };
  }, [title, description, keywords, ogImage, schema, canonical]);

  return null;
}
