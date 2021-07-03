import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-family: Roboto;

  h2 {
    font-size: 30px;
    font-weight: 500;
    color: #3E464C;
    margin-bottom: 30px;
  }
`

export const SShowBox = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1300px;
  
  h3 {
    font-size: 24px;
    color: #455D82;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .sectionBox {
    width: 100%;
    margin-bottom: 40px;
    padding: 20px 40px;
  }

  .itemBox {
    display: flex;
    margin: 20px auto;
  }

  .itemBoxList {
    width: 25%;
  }
`
