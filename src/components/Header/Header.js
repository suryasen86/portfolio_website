import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech" legacyBehavior passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#certifications" legacyBehavior passHref>
          <NavLink>Certifications</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/suryasen86" target="_blank" rel="noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/suryasen-vishwakarma"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:vishwakarmasuryasen@gmail.com">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
