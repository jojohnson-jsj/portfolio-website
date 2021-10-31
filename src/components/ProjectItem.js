import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);

    img {
      height: 100%;
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }

  .projectItem__title {
    font-size: 2.2rem;
  }

  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .projecItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({ link, img, name, desc }) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        className="projectItem__img"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <Link to="#" alt="">
          <h3 className="projectItem__title">{name}</h3>
          <p className="projectItem__desc">{desc}</p>
        </Link>
      </div>
    </ProjectItemStyles>
  );
}
