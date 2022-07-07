import styled, { css } from "styled-components";

export const Person = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
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
  flex-shrink: 0;
  background-color: white;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;
