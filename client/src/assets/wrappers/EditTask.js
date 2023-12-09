import { styled } from "styled-components";

const Wrapper = styled.main`
  /* min-height: calc(100vh - var(--nav-height)); */
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 6rem 0 0 0;
  }

  .buttons-container {
    button {
      margin-left: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;

export default Wrapper;
