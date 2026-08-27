import React from 'react';
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaDocker,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiExpress, SiRedis, SiTerraform } from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  CertBody,
  CertCard,
  CertGrid,
  CertIcon,
  CertId,
  CertIssuer,
  CertMeta,
  CertTitle,
} from './CertificationsStyles';

const certifications = [
  {
    title: 'Cutshort Certified NodeJS - Basic',
    issuer: 'Cutshort',
    date: 'May 2023',
    credentialId: '81800',
    icon: <FaNodeJs size="2.5rem" />,
  },
  {
    title: 'Learning Terraform',
    issuer: 'LinkedIn',
    date: 'Apr 2023',
    icon: <SiTerraform size="2.5rem" />,
  },
  {
    title: 'Docker, Docker SWARM and Kubernetes Crash Course for DevOps',
    issuer: 'Udemy',
    date: 'Aug 2022',
    icon: <FaDocker size="2.5rem" />,
  },
  {
    title: 'Data Mining',
    issuer: 'Great Learning',
    date: 'Jul 2022',
    icon: <FaDatabase size="2.5rem" />,
  },
  {
    title: 'Redis',
    issuer: 'Programming Hub',
    date: 'May 2022',
    credentialId: '1652621596323',
    icon: <SiRedis size="2.5rem" />,
  },
  {
    title: 'AWS Services for Solutions Architect Associate [2021]',
    issuer: 'Udemy',
    date: 'May 2022',
    credentialId: 'UC-3dfa7b58-9246-4155-b645-ad3ed544b895',
    icon: <FaAws size="2.5rem" />,
  },
  {
    title: 'Laravel',
    issuer: 'Programming Hub',
    date: 'Jan 2022',
    icon: <FaLaravel size="2.5rem" />,
  },
  {
    title: 'React & Redux',
    issuer: 'Sololearn',
    date: 'Oct 2021',
    credentialId: '1097-21011445/',
    icon: <FaReact size="2.5rem" />,
  },
  {
    title: 'React JS',
    issuer: 'HackerRank',
    date: 'Aug 2021',
    credentialId: 'AE766581EEB8',
    icon: <FaReact size="2.5rem" />,
  },
  {
    title: 'Express JS',
    issuer: 'Programming Hub',
    date: 'Aug 2021',
    credentialId: '1628412295829',
    icon: <SiExpress size="2.5rem" />,
  },
  {
    title: 'Node JS',
    issuer: 'Programming Hub',
    date: 'Aug 2021',
    credentialId: '1628409535866',
    icon: <FaNodeJs size="2.5rem" />,
  },
  {
    title: 'Python',
    issuer: 'Programming Hub',
    date: 'Aug 2021',
    credentialId: '1628139383726',
    icon: <FaPython size="2.5rem" />,
  },
  {
    title: 'Building a Website',
    issuer: 'Programming Hub',
    date: 'Aug 2021',
    credentialId: '1627908671269',
    icon: <FaCode size="2.5rem" />,
  },
  {
    title: 'National Level Quiz on Python Programming',
    issuer: 'Sigma University India',
    date: 'Jul 2021',
    credentialId: 'C8AEO0-CE029390',
    icon: <FaPython size="2.5rem" />,
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    date: 'Jul 2021',
    credentialId: 'C7AE3421636E',
    icon: <FaPython size="2.5rem" />,
  },
  {
    title: 'JavaScript',
    issuer: 'Sololearn',
    date: 'May 2021',
    credentialId: '21011445-1024',
    icon: <FaJs size="2.5rem" />,
  },
  {
    title: 'Python for Beginners',
    issuer: 'Udemy',
    date: 'May 2021',
    credentialId: 'UC-70deb17c-7a34-4f96-a775-c188af156c6e',
    icon: <FaPython size="2.5rem" />,
  },
  {
    title: 'Mastering HTML5',
    issuer: 'Udemy',
    date: 'Oct 2020',
    credentialId: 'UC-db66e01d-ab20-4e3d-8f96-eae0fe8e4cb6',
    icon: <FaHtml5 size="2.5rem" />,
  },
];

const Certifications = () => (
  <Section id="certifications">
    <SectionDivider />
    <SectionTitle>Licenses & Certifications</SectionTitle>
    <SectionText>
      A collection of credentials I've earned across backend, cloud, DevOps, and web development.
    </SectionText>
    <CertGrid>
      {certifications.map((cert, index) => (
        <CertCard key={index}>
          <CertIcon>{cert.icon}</CertIcon>
          <CertBody>
            <CertTitle>{cert.title}</CertTitle>
            <CertIssuer>{cert.issuer}</CertIssuer>
            <CertMeta>Issued {cert.date}</CertMeta>
            {cert.credentialId && <CertId>ID: {cert.credentialId}</CertId>}
          </CertBody>
        </CertCard>
      ))}
    </CertGrid>
  </Section>
);

export default Certifications;
