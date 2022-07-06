import styled, { css } from "styled-components";

export const Header = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
    font-weight: 400;
    font-size: 1.4rem;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const RTBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.colors.primary};
    width: max-content;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    margin-right: 1rem;

    svg {
      font-size: ${theme.fontSize.large};
      color: ${theme.colors.primary};
      margin-right: 0.5rem;
    }
  `}
`;

export const FavoriteButton = styled.button<{ active: boolean }>`
  align-items: center;
  background-color: transparent;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.gray.lightGray};
  display: flex;
  padding: 0.5rem;
  transition: color 200ms ease, border-color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  > svg {
    margin-right: 0.5rem;
  }

  ${({ active }) => {
    return (
      active &&
      css`
        &,
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          border-color: ${({ theme }) => theme.colors.primary};
        }
      `
    );
  }}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
  `}
`;

export const InfoTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray.silver};
    display: flex;
    font-size: ${theme.fontSize.normal};
    margin: 1rem 0;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    line-height: 1.25rem;
    font-size: ${theme.fontSize.medium};
  `}
`;

export const ProducerInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 1rem;

    span + span::before {
      content: "•";
      font-size: ${theme.fontSize.medium};
      margin: 0rem 0.75rem;

      @media screen and (max-width: 576px) {
        content: "";
        margin: 0;
      }
    }

    span {
      font-size: ${theme.fontSize.medium};
    }

    strong {
      color: ${theme.colors.gray.platinum};
      font-size: ${theme.fontSize.normal};
    }

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    span + span {
      @media screen and (max-width: 576px) {
        margin-top: 0.5rem;
      }
    }
  `}
`;

export const Cast = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonInfo = styled.div`
  ${({ theme }) => css`
    margin-left: 1rem;

    p {
      font-size: ${theme.fontSize.normal};
      display: flex;
      align-items: center;
    }

    span {
      font-size: ${theme.fontSize.medium};
    }

    span + span::before {
      content: "•";
      font-size: ${theme.fontSize.medium};
      margin: 0rem 0.5rem;
    }
  `}
`;

export const PersonImage = styled.img`
  background-color: white;
  border-radius: 50%;
  width: 4rem;
`;
