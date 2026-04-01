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
    url: 'https://clientech.solutions',
    logo: 'https://clientech.solutions/logo.png',
    description: 'ClienTech Solutions partners with organizations to build resilient digital foundations, implement scalable solutions, and drive meaningful transformation.',
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: 'English',
    },
    sameAs: [
        // Add social media URLs when available
    ],
};

// Website structured data
export const websiteData = {
    url: 'https://clientech.solutions',
    name: 'ClienTech Solutions',
    description: 'Digital Transformation & Intelligent Solutions',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://clientech.solutions/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
    },
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
