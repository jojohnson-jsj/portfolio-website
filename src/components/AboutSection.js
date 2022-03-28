import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.jpg';
import Resume from '../assets/files/resume.pdf';

const AboutSectionStyle = styled.div`
  padding: 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }

    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }

    .aboutSection__right {
      margin-top: 3rem;
    }

    .section-title {
      text-align: center;
    }

    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;

      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="let me introduce myself"
            heading="About me"
          />
          <PText>
            Born in Cuba and raised in Orlando, Florida, I've been passionate
            about tech for as long as I can remember. Wrapping up my studies in
            Computer Science and moving on to software development is a dream
            come true, and I'm excited to contribute towards well-polished,
            impactful projects.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="projects" />
            <Button btnLink={Resume} btnText="resume" outline file />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
