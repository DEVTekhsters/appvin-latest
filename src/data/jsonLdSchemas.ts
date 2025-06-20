export const jsonLdSchemas: Record<string, any> = {
  "sap-integration": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SAP Integration Services",
    "description": "Seamlessly connect SAP systems with modern applications using AppVinTech’s robust integration architecture.",
    "url": "https://appvintech.com/services/sap-integration/",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "SAP Integration Consulting and Implementation"
  },

  "celonis-system-integrator": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Celonis System Integrator",
    "description": "Drive intelligent process mining and automation with AppVinTech’s Celonis integration services.",
    "url": "https://appvintech.com/services/celonis-system-integrator/",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "Celonis Implementation & Consulting"
  },

  "cross-platform-development": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cross-Platform App Development",
    "description": "Build high-performance applications that run seamlessly on iOS, Android, and web with AppVinTech’s cross-platform development.",
    "url": "https://appvintech.com/services/cross-platform-development",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "Cross-Platform Mobile and Web App Development"
  },

  "data-governance": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Governance Solutions",
    "description": "Ensure compliance, improve data quality, and streamline access controls with AppVinTech’s end-to-end data governance frameworks.",
    "url": "https://appvintech.com/services/data-governance",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "Data Governance and Compliance Services"
  },

  "enterprise-app-development": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Enterprise App Development",
    "description": "From ERP systems to CRM platforms—build scalable and secure enterprise applications with AppVinTech.",
    "url": "https://appvintech.com/services/enterprise-app-development",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "Custom Enterprise Application Development"
  },

  "custom-ai-solutions": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom AI Solutions",
    "description": "Design and deploy intelligent AI solutions tailored to your business—from NLP and computer vision to predictive analytics.",
    "url": "https://appvintech.com/services/custom-ai-solutions",
    "provider": {
      "@type": "Organization",
      "name": "AppVinTech",
      "url": "https://appvintech.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": "AI Software Development and Consulting"
  },

  // Services listing page schema
  "services": {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AppVinTech Services",
    "description": "Comprehensive AI-native digital services, business process automation, SAP integration, and custom solutions.",
    "url": "https://appvintech.com/services",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "Service",
        "name": "SAP Integration Services",
        "url": "https://appvintech.com/services/sap-integration"
      },
      {
        "@type": "Service",
        "name": "Celonis System Integrator",
        "url": "https://appvintech.com/services/celonis-system-integrator"
      },
      {
        "@type": "Service",
        "name": "Cross-Platform App Development",
        "url": "https://appvintech.com/services/cross-platform-development"
      },
      {
        "@type": "Service",
        "name": "Data Governance Solutions",
        "url": "https://appvintech.com/services/data-governance"
      },
      {
        "@type": "Service",
        "name": "Enterprise App Development",
        "url": "https://appvintech.com/services/enterprise-app-development"
      },
      {
        "@type": "Service",
        "name": "Custom AI Solutions",
        "url": "https://appvintech.com/services/custom-ai-solutions"
      }
    ]
  },

  "blog": {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AppVinTech Blog",
    "url": "https://appvintech.com/blog/",
    "description": "Stay updated with the latest in AI, app development, data governance, and enterprise technology with AppVinTech's expert insights.",
    "publisher": {
      "@type": "Organization",
      "name": "AppVinTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://appvintech.com/images/appvin-logo.png"
      }
    },
    "inLanguage": "en",
    "about": [
      { "@type": "Thing", "name": "AI Solutions" },
      { "@type": "Thing", "name": "App Development" },
      { "@type": "Thing", "name": "Enterprise Technology" }
    ]
  }
};
