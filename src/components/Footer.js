import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;

    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jo Johnson</h1>
          <PText>
            I'm passionate about software development and figuring out solutions
            to complicated problems.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'link',
              },
              {
                title: 'Resume',
                path: '/resume',
                type: 'link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(407) 274-6359',
                path: 'tel:4072746359',
              },
              {
                title: 'jojohnson.jsj@gmail.com',
                path: 'mailto:jojohnson.jsj@gmail.com',
              },
              {
                title: 'Seattle, Washington',
                path: 'https://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/jose-jo-johnson-159148191/',
              },
              {
                title: 'Github',
                path: 'https://github.com/jojohnson-jsj',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Jo Johnson</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
