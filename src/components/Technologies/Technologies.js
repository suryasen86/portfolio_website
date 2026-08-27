import React from 'react';
import { DiNodejsSmall } from 'react-icons/di';
import { SiKubernetes } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work across the backend and infrastructure stack — from writing APIs to shipping them on
      Kubernetes in the cloud.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Node.js, Express, gRPC <br />
            MySQL, Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiKubernetes size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Docker, Kubernetes, Helm <br />
            Jenkins, GitHub Actions
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            AWS (S3, EC2, Lambda, SNS, Route53) <br />
            GCP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
