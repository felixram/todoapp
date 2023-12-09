import { styled } from "styled-components";

const Wrapper = styled.main`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 0.5rem;
  }
  h4 {
    padding-bottom: 1rem;
    text-align: center;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    max-width: 35rem;
    font-size: small;
  }

  .login-link {
    color: var(--text-color);
    font-size: small;
    text-decoration: underline;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
  }
`;

export default Wrapper;
