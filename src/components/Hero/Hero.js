import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Suryasen <br />
          Backend Engineer
        </SectionTitle>
        <SectionText>
          I build scalable, cloud-native backends with Node.js, Express, and gRPC — powered by
          MySQL, Redis, Docker, Kubernetes, and AWS/GCP. Passionate about clean APIs, reliable
          infrastructure, and automated CI/CD.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
