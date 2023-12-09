import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  width: 100%;
  background-color: var(--primary-500);
  line-height: 2;

  .link {
    color: #f0f0f0;
    margin-right: 2rem;
  }

  .logo {
    margin-left: 3rem;
  }

  .nav-link {
    text-transform: capitalize;
    color: #f0f0f0;
  }
  p {
    text-transform: capitalize;
    color: #f0f0f0;
    font-weight: 500;
  }

  button {
    font-size: 1.75rem;
    background-color: transparent;
    color: #f0f0f0;
    cursor: pointer;
    margin-right: 1rem;
    margin-top: 0.5rem;
    border: none;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  @media (min-width: 992px) {
    .menu-button {
      display: none;
    }
  }
`;

export default Wrapper;
