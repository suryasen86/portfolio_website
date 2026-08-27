import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const scrollToAbout = () => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle as="h1" main center>
          Hi, I'm Suryasen Vishwakarma <br />
          Backend Engineer
        </SectionTitle>
        <SectionText>
          I'm a backend engineer based in Mumbai, India with 5+ years of experience building
          scalable, cloud-native systems. I specialize in Node.js, Express, and gRPC — backed by
          MySQL and Redis — and ship them on Docker, Kubernetes, and Helm across AWS and GCP,
          with automated CI/CD via Jenkins and GitHub Actions.
        </SectionText>
        <Button onClick={scrollToAbout}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
