import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const Logo = styled.img`
  height: 4.5rem;
  width: 8rem;
  cursor: pointer;
`;

const navLinkActiveStyle = ({ colors }: Theme) => css`
  border-color: ${colors.primary};
`;

export const NavLink = styled.a<{ active: boolean }>`
  ${({ theme, active }) => css`
    color: ${theme.colors.gray.white};
    transition: border-bottom 300ms ease, color 300ms ease;
    border-bottom: 2px solid transparent;
    padding: 0.25rem 0 0.5rem;

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
