import styled, { css } from "styled-components";
import NextImage from "next/image";

export const Container = styled.a`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.white};
  transition: transform 200ms ease-in-out;
  align-self: start;
  min-height: 28rem;
  position: relative;

  @media screen and (min-width: 576px) {
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const Image = styled(NextImage)`
  max-width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

export const TextContainer = styled.div`
  padding: 1.5rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.span`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSize.large};
    font-weight: 600;
    line-height: 1.75rem;
  `}
`;

export const OriginalTitle = styled.span`
  ${({ theme }) => css`
    color: rgba(20, 20, 20, 0.5);
    font-size: ${theme.fontSize.small};
    font-weight: 600;
  `}
`;

export const FavoriteBtn = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.75rem;
    color: ${theme.colors.primary};
    transition: color 300ms ease;
    position: relative;

    &:hover {
      color: ${theme.colors.secondary};
    }

    svg {
      font-size: 1.2rem;
    }
  `}
`;

export const Director = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.gray.dark};
    margin: 0.5rem 0;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    line-height: 1.5;
  `}
`;

export const ToggleDescriptionButton = styled.button`
  margin: 0;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  font-size: ${({ theme }) => theme.fontSize.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: color 300ms ease, background-color 300ms ease;
  border-radius: 0 0 1rem 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
