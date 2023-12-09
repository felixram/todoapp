import styled from "styled-components";

const Wrapper = styled.main`
  .dashboard-page {
    min-height: calc(100vh - var(--nav-height));
  }

  @media (min-width: 992px) {
    .dashboard-page {
      min-height: calc(100vh - var(--nav-height));
      width: 75vw;
      margin-left: 25vw;
    }
  }
`;

export default Wrapper;
