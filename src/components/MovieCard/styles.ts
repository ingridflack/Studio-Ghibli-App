import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.white};
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
    font-weight: 600;
  `}
`;

export const Director = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    color: ${theme.colors.gray.silver};
    margin: 0.25rem 0;
  `}
`;

export const Description = styled.p``;
