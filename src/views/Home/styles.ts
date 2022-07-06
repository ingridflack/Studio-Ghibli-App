import styled from "styled-components";

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
