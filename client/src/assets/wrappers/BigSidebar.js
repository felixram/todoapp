import { styled } from "styled-components";

const Wrapper = styled.section`
  display: none;
  position: absolute;
  flex-direction: column;
  text-transform: capitalize;
  @media (min-width: 992px) {
    top: calc(var(--nav-height));
    min-height: calc(100vh - var(--nav-height));
    background-color: var(--primary-400);
    width: 25vw;
    color: #f0f0f0;
    padding-top: 4rem;
    display: flex;

    span {
      color: #f0f0f0;
      line-height: 1.5;
      font-size: 1.2rem;
      display: inline-block;
      width: 100%;
      text-align: center;
      padding: 0.5rem 0;
      transition: 0.2s background-color ease-in-out;
      background-color: var(--primary-400);
      &:hover {
        background-color: var(--background-secondary-color);
        color: var(--primary-500);
      }
    }
  }
`;

export default Wrapper;
