import React from 'react';
import HeroImg from '../assets/images/hero.jpg';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hearo__heading">
          <span>Hello, This is</span>
          <span>Jo Johnson</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I'm a Senior finishing up my studies in Computer Science, and I'm
            looking forward to starting my software engineering job at Microsoft
            in Fall 2022.
          </PText>
          <Button
            btnLink="/projects"
            btnText="see my projects"
            outline={false}
          />
        </div>
        <div className="hero__social">
          <div className="hero__socia__indicator">
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
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
