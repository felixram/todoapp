import styled from "styled-components";

const Wrapper = styled.main`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: var(--primary-500);
    font-weight: bold;
  }
  img {
    width: 700px;
    min-width: 500px;
    position: absolute;
    bottom: 0;
    right: 20px;
    opacity: 0.9;
    display: none;
  }

  @media (min-width: 960px) {
    img {
      display: block;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    max-width: 400px;
    max-height: 400px;
    margin-top: 100px;

    input {
      margin-bottom: 0.5rem;
    }

    button {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
    }
    h4 {
      margin: auto;
      padding-bottom: 1rem;
    }
    p {
      line-height: 2;
      color: var(--text-secondary-color);
      max-width: 35rem;
      font-size: small;
    }
  }
  .register-link {
    color: var(--text-color);
    font-size: small;
    text-decoration: underline;
  }
`;

export default Wrapper;
