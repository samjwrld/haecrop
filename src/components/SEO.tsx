import React, { useEffect } from 'react';
import { siteConfig } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
  structuredData,
}) => {
  const metaTitle = title
    ? `${title} | ${siteConfig.branding.companyName}`
    : siteConfig.seo.title;
  const metaDescription = description || siteConfig.seo.description;
  const metaKeywords = keywords || siteConfig.seo.keywords;
  const metaOgImage = ogImage || siteConfig.seo.ogImage;
  const currentUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // Document Title
    document.title = metaTitle;

    // Helper to update or create meta tag
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic Meta
    updateMetaTag('meta[name="description"]', 'name', 'description', metaDescription);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', metaKeywords);
    updateMetaTag('meta[name="author"]', 'name', 'author', siteConfig.branding.companyName);

    // Open Graph / Facebook
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', metaTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', metaOgImage);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metaTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', metaOgImage);

    // Canonical
    updateLinkTag('canonical', currentUrl);

    // JSON-LD Structured Data for Organization
    const socialLinks = Object.values(siteConfig.socialLinks).filter(Boolean);

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.branding.companyName,
      legalName: siteConfig.branding.companyName,
      alternateName: siteConfig.branding.shortName,
      slogan: siteConfig.branding.tagline,
      url: currentUrl,
      logo: metaOgImage,
      description: metaDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address,
        addressCountry: 'IN',
      },
      contactPoint: siteConfig.contact.phoneNumbers.map((phone, index) => ({
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: index === 0 ? 'customer service' : 'sales',
        email: siteConfig.contact.emailAddresses[0] || undefined,
        areaServed: 'IN',
        availableLanguage: ['English', 'Telugu'],
      })),
      sameAs: socialLinks,
      ...structuredData,
    };

    let scriptElement = document.querySelector('#json-ld-organization') as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'json-ld-organization';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(organizationSchema, null, 2);

  }, [metaTitle, metaDescription, metaKeywords, metaOgImage, currentUrl, structuredData]);

  return null;
};
