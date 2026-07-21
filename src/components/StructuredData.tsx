import { useEffect } from 'react';

interface StructuredDataProps {
    type: 'Organization' | 'WebSite' | 'Service';
    data: Record<string, unknown>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type,
            ...data,
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [type, data]);

    return null;
};

// Organization structured data
export const organizationData = {
    name: 'ClienTech Solutions',
    url: 'https://clientech-solutions.com',
    logo: 'https://clientech-solutions.com/logo.png',
    description: 'ClienTech Solutions partners with organizations to build resilient digital foundations, implement scalable solutions, and drive meaningful transformation.',
    email: 'admin@clientech-solutions.com',
    telephone: '+1-530-609-3136',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '3422 Hacienda Rd',
        addressLocality: 'Cameron Park',
        addressRegion: 'CA',
        postalCode: '95682',
        addressCountry: 'US',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+1-530-609-3136',
        email: 'admin@clientech-solutions.com',
        availableLanguage: 'English',
    },
    sameAs: [
        // Add social media profile URLs here when available (LinkedIn, Facebook, etc.)
    ],
};

// Website structured data
export const websiteData = {
    url: 'https://clientech-solutions.com',
    name: 'ClienTech Solutions',
    description: 'Digital Transformation & Intelligent Solutions',
};

// Service structured data
export const serviceData = {
    serviceType: 'Digital Transformation Consulting',
    provider: {
        '@type': 'Organization',
        name: 'ClienTech Solutions',
    },
    areaServed: 'Worldwide',
    description: 'Comprehensive digital transformation services including cloud solutions, enterprise integration, and intelligent automation.',
};
