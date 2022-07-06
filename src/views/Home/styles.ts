import styled, { css } from "styled-components";

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border-radius: 0.75rem;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 2px solid transparent;
  outline: none;
  transition: border 0.3s ease;
  position: relative;
  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Form = styled.form`
  ${({ theme }) => css`
    grid-area: form;
    position: relative;

    svg {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSize.normal};
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
  `}
`;
