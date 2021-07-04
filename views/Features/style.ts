import styled from "styled-components";

export const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  font-family: Roboto;

  h2 {
    font-size: 28px;
    font-weight: 500;
    color: #3E464C;
    margin-bottom: 30px;
  }
`

export const SSection = styled.section`
  width: 100%;
  height: 400px;

  .background {
    position: absolute;
    width: 100%;
    height: 350px;
    z-index: -1;
    background: url("/static/images/docs_background.jpg") no-repeat center center / 100%;
  }

  .titleBox {
    max-width: 1300px;
    margin: 0 auto;
    padding: 80px 40px 0;

    h1 {
      font-size: 36px;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    p {
      width: 40%;
      font-size: 28px;
      font-weight: 400;
      color: #F2F2F2;
    }
  }
`

export const SMenu = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 90px;

  ul {
    width: 50%;
    display: flex;
    margin: 0 auto;
    list-style: none;
    align-items: center;
  }

  li {
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 400;
    width: 20%;
  }

  a:hover {
    text-decoration: none;
  }

  .newmenu {
    padding: 0 380px;
    top: 0;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 10;
    background-color: #FFFFFF;
    box-shadow: 0 1px 1px rgb(0 0 0 / 15%);

    li {
      color: #455D82;
    }
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
    &::after {
      position: absolute;
      margin: 0 auto;
      margin-top: 10px;
      width: 1300px;
      height: 2px;
      border: 1px solid #BDBDBD;
      content: '';
    }
  }

  .itemBox {
    display: flex;
    margin: 20px auto;
  }

  .itemBoxList {
    width: 25%;
    color: #68747F;

    ul {
      list-style-type: none;
    }
  }
`
