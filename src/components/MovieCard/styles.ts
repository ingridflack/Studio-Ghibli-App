import styled, { css } from "styled-components";

export const Container = styled.a`
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.white};
  overflow: hidden;
  transition: transform 200ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TextContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fontSize.large};
    font-weight: 600;
  `}
`;

export const OriginalTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray.silver};
    font-size: ${theme.fontSize.small};
    font-weight: 600;
  `}
`;

export const FavoriteBtn = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: 0.5rem;
    display: flex;
    align-items: flex-start;

    svg {
      font-size: 1.2rem;
      color: ${theme.colors.primary};
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;
