import styled from "styled-components";

const Wrapper = styled.main`
  line-height: 1.5rem;
  padding: 0.5rem;
  width: 60%;
  margin-bottom: 0.75rem;
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-1);
  min-width: 550px;

  .cross-line {
    position: absolute;
    height: 1px;
    background-color: var(--grey-300);
    width: 100%;
    top: 50%;
  }

  .task-completed {
    color: var(--grey-300);
  }

  .task-row {
    position: relative;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 0 2rem;
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;

    p {
      width: 240px;
      min-width: 150px;
      text-align: center;
    }
  }

  .task-buttons {
    width: 75px;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1rem;
    margin-right: 0.25rem;
    border-style: none;
    background-color: transparent;
  }
  button:hover {
    cursor: pointer;
    scale: 1.2;
    box-shadow: var(--shadow-1);
  }

  .navigation-button {
    color: black;
  }
`;

export default Wrapper;
