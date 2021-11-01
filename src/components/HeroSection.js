import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import HeroImg from '../assets/images/hero.jpg';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    position: relative;

    span {
      display: inline-block;
      width: 100%;
    }

    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: white;
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .hero__info {
    margin-top: -50rem;

    .hero__info__button {
      margin-top: 55rem;
    }
  }

  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }

  .hero__social {
    left: 50px;
    bottom: 30%;
  }

  .hero__scrollDown {
    right: 50px;
    bottom: 150px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        letter-spacing: 5px;
        margin-bottom: 1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;

      .hero__name {
        font-size: 4.5rem;
      }
    }

    .hero__img {
      height: 300px;
    }

    .hero__info {
      margin-top: 3rem;

      .hero__info__button {
        margin-top: 2rem;
      }
    }
    .hero__social {
      left: 0px;
      bottom: 10%;
      width: 20px;

      .hero__social__indicator {
        width: 20px;

        p {
          font-size: 1.2rem;
        }

        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;

      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>hey there, i'm</span>
            <span className="hero__name">Jo Johnson</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Links</p>
              <img src={SocialMediaArrow} alt=" " />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jose-jo-johnson-159148191/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      path={mdiLinkedin}
                      title="LinkedIn"
                      size={2}
                      horizontal
                      vertical
                      rotate={-90}
                      color="#BCB4B4"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jojohnson-jsj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      path={mdiGithub}
                      title="Github"
                      size={2}
                      horizontal
                      vertical
                      rotate={-90}
                      color="#BCB4B4"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
