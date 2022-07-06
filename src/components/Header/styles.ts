import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const LinksContainer = styled.div``;

export const NavLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.white};
    transition: border-bottom, color 300ms ease;
    border-bottom: 1px solid black;
    padding: 0.25rem 0;

    & + & {
      margin-left: 1rem;
    }

    &:hover {
      color: ${theme.colors.gray.lightGray};
      border-color: ${theme.colors.gray.lightGray};
    }

    @media screen and (max-width: 576px) {
      justify-self: flex-end;
    }
  `}
`;
