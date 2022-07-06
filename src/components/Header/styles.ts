import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 8rem;
  cursor: pointer;
`;

const navLinkActiveStyle = ({ colors }: any) => css`
  color: ${colors.gray.lightGray};
  border-color: ${colors.gray.lightGray};
`;

export const NavLink = styled.a<{ active: boolean }>`
  ${({ theme, active }) => css`
    color: ${theme.colors.gray.white};
    transition: border-bottom, color 300ms ease;
    border-bottom: 1px solid black;
    padding: 0.25rem 0;

    & + & {
      margin-left: 1rem;
    }

    &:hover {
      ${navLinkActiveStyle(theme)}
    }

    ${!!active && navLinkActiveStyle(theme)}

    @media screen and (max-width: 576px) {
      justify-self: flex-end;
    }
  `}
`;
