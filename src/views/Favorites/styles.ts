import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
    font-weight: 400;
    font-size: 1.4rem;
  `}
`;
