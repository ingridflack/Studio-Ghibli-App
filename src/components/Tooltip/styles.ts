import styled, { css } from "styled-components";

export const Tooltip = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.small};
    background-color: rgba(178, 7, 16, 0.8);

    color: ${theme.colors.gray.white};
    padding: 0.5rem 0.7rem;
    font-weight: 400;
    line-height: 1;

    border-radius: 5px;
    font-size: ${theme.fontSize.tiny};
    pointer-events: none;

    opacity: 0;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    transition: opacity 300ms ease;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-top-color: rgba(178, 7, 16, 0.8);
    }
  `}
`;

export const Container = styled.div`
  position: relative;

  &:hover {
    ${Tooltip} {
      opacity: 1;
    }
  }
`;
