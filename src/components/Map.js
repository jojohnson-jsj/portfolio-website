import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map-with-pin.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;

  .container {
    position: relative;
    min-height: 400px;
  }

  .map__card {
    position: absolute;
    left: 42%;
    top: 35%;
    padding: 2rem;
    background-color: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }

  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    background-position: 50% center;
    .map__card {
      width: 60%;
      max-width: 250px;

      p {
        font-size: 1.5rem;
      }
    }

    .map__card__heading {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .map__card__link {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Location</h3>
          <PText>Seattle, Washington</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Seattle,+WA,+USA/@47.6131746,-122.482148,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
