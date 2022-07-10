import styled, { css } from "styled-components";

interface IHeader {
  backgroundImage: string;
}
export const Header = styled.div<IHeader>`
  ${({ theme, backgroundImage }) => css`
    color: ${theme.colors.gray.white};
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 90%,
        rgba(0, 0, 0, 1) 100%
      ),
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${backgroundImage}) center no-repeat;
    background-size: cover;

    @media screen and (max-width: 576px) {
      background: radial-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 70%,
          rgba(0, 0, 0, 1) 100%
        ),
        linear-gradient(
          0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${backgroundImage}) center no-repeat;
    }
  `}
`;

export const HeaderContent = styled.div`
  margin-top: 10rem;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5;
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
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-right: 1rem;

    svg {
      color: ${theme.colors.primary};
      margin-right: 0.5rem;
    }
  `}
`;

export const FavoriteButton = styled.button<{ active: boolean }>`
  align-items: center;
  background-color: transparent;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.gray.white};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.gray.white};
  display: flex;
  padding: 0.5rem;
  transition: color 200ms ease, border-color 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  > svg {
    margin-right: 0.5rem;
  }

  ${({ active }) => {
    return (
      active &&
      css`
        svg {
          color: ${({ theme }) => theme.colors.primary};
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
    margin: 2rem 0 1rem;
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
