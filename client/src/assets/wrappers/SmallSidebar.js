import { styled } from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }

  @media (max-width: 991px) {
    text-transform: capitalize;
    .sidebar {
      display: none;
    }

    .sidebar-container {
      position: absolute;
      background-color: var(--grey-900);
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.6;
    }

    .sidebar-links-container {
      position: absolute;
      height: 50vh;
      left: 50%;
      top: 50%;
    }

    .sidebar-links {
      position: relative;
      left: -50%;
      top: -50%;
      width: 400px;
      height: 400px;
      background-color: var(--primary-500);
      display: flex;
      flex-direction: column;
      z-index: 1;
    }
    .sidebar-close {
      display: flex;
      justify-content: flex-end;

      button {
        background-color: transparent;
        padding: 0.5rem;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
        color: white;
        transition: 0.2s scale ease-in-out;
        &:hover {
          scale: 1.1;
        }
      }
    }
    span {
      color: #f0f0f0;
      line-height: 1.5;
      font-size: 1.2rem;
      display: inline-block;
      width: 100%;
      text-align: center;
      padding: 0.5rem 0;
      transition: 0.2s background-color ease-in-out;
      &:hover {
        background-color: var(--background-secondary-color);
        color: var(--primary-500);
      }
    }
  }
`;

export default Wrapper;
