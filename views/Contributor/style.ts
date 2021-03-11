import styled from "styled-components";

export const SWrapper = styled.div`
  iframe {
    width: 100%;
    min-height: 870px;
    border: none;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    iframe {
      min-height: 920px !important;
    }
  }
`
