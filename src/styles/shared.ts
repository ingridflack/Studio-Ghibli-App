import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1020px;
  padding: 0 2rem 2rem;
  width: 100%;

  @media (max-width: 576px) {
    padding: 0 1rem 1rem;
  }
`;
