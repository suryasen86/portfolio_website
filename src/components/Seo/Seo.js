import Head from 'next/head';
import React from 'react';

import {
  AUTHOR,
  GOOGLE_SITE_VERIFICATION,
  KEYWORDS,
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '../../constants/site';

const certifications = [
  { name: 'Cutshort Certified NodeJS - Basic', issuer: 'Cutshort', date: '2023-05' },
  { name: 'Learning Terraform', issuer: 'LinkedIn', date: '2023-04' },
  { name: 'Docker, Docker SWARM and Kubernetes for DevOps', issuer: 'Udemy', date: '2022-08' },
  { name: 'Data Mining', issuer: 'Great Learning', date: '2022-07' },
  { name: 'Redis', issuer: 'Programming Hub', date: '2022-05' },
  { name: 'AWS Services for Solutions Architect Associate', issuer: 'Udemy', date: '2022-05' },
  { name: 'Laravel', issuer: 'Programming Hub', date: '2022-01' },
  { name: 'React & Redux', issuer: 'Sololearn', date: '2021-10' },
  { name: 'React JS', issuer: 'HackerRank', date: '2021-08' },
  { name: 'Express JS', issuer: 'Programming Hub', date: '2021-08' },
  { name: 'Node JS', issuer: 'Programming Hub', date: '2021-08' },
  { name: 'Python', issuer: 'Programming Hub', date: '2021-08' },
  { name: 'Python', issuer: 'HackerRank', date: '2021-07' },
  { name: 'JavaScript', issuer: 'Sololearn', date: '2021-05' },
  { name: 'Python for Beginners', issuer: 'Udemy', date: '2021-05' },
  { name: 'Mastering HTML5', issuer: 'Udemy', date: '2020-10' },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  email: `mailto:${AUTHOR.email}`,
  telephone: AUTHOR.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: AUTHOR.location.city,
    addressRegion: AUTHOR.location.region,
    addressCountry: AUTHOR.location.countryCode,
  },
  worksFor: {
    '@type': 'Organization',
    name: 'MOR (Stock Trading App)',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Chandigarh University',
      description: 'Master of Computer Applications - MCA, Cloud Computing & DevOps',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Nagindas Khandwala College',
      description: 'Bachelor of Science, Information Technology',
    },
  ],
  sameAs: [AUTHOR.github, AUTHOR.linkedin],
  knowsAbout: [
    'Node.js',
    'Express.js',
    'gRPC',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'Helm',
    'Amazon Web Services',
    'Google Cloud Platform',
    'Jenkins',
    'GitHub Actions',
    'Terraform',
    'Python',
    'Laravel',
    'JavaScript',
    'React',
    'DevOps',
    'Microservices',
    'CI/CD',
    'Backend Development',
  ],
  hasCredential: certifications.map((cert) => ({
    '@type': 'EducationalOccupationalCredential',
    name: cert.name,
    credentialCategory: 'certificate',
    dateCreated: cert.date,
    recognizedBy: {
      '@type': 'Organization',
      name: cert.issuer,
    },
  })),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: AUTHOR.name,
    url: SITE_URL,
  },
};

const Seo = ({
  title = SITE_TITLE,
  description = SITE_DESCRIPTION,
  path = '/',
  image = OG_IMAGE,
}) => {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}/`.replace(/\/+$/, '/');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS.join(', ')} />
      <meta name="author" content={AUTHOR.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#0f1624" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      )}

      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={`${AUTHOR.name} — ${AUTHOR.jobTitle}`} />
      <meta property="profile:first_name" content="Suryasen" />
      <meta property="profile:last_name" content="Vishwakarma" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${AUTHOR.name} — ${AUTHOR.jobTitle}`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </Head>
  );
};

export default Seo;
