import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

const FormStyle = styled.form`
  width: 100%;

  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }

  label {
    font-size: 1.8rem;
  }

  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }

  textarea {
    min-height: 250px;
    resize: vertical;
  }

  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map__card {
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    margin-top: 7rem;
  }

  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
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
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm('xjvjqykb');
  if (state.succeeded) {
    return (
      <FormStyle>
        <div className="right">
          <div className="map__card">
            <h3 className="map__card__heading">submitted succesfully!</h3>
          </div>
        </div>
      </FormStyle>
    );
  }

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />
          </label>
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </FormStyle>
    </div>
  );
}
