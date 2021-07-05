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
  }
`

export const SSection = styled.section`
  width: 100%;
  height: 400px;

  @media (max-width: 420px) {
    height: 350px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 350px;
    z-index: -1;
    background: url("/static/images/docs_background.jpg") no-repeat center center / 100%;
  }

  .titleBox {
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 40px 0;

    h1 {
      font-size: 36px;
      font-weight: 400;
      color: #FFFFFF;
      margin-bottom: 30px;
    }

    p {
      width: 50%;
      font-size: 28px;
      font-weight: 400;
      color: #F2F2F2;
    }
  }

  @media (max-width: 850px) {
    .titleBox {
      p {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 780px) {
    .titleBox {
      h1 {
        font-size: 26px;
      }

      p {
        width: 100%;
        font-size: 18px;
      }
    }
  }
`

export const SMenu = styled.div`
  position: absolute;
  width: 100%;
  top: 400px;

  @media (max-width: 1000px) {
    top: 380px;
  }

  ul {
    width: 50%;
    display: flex;
    margin: 0 auto;
    list-style: none;
    align-items: flex-start;
  }

  li {
    text-align: center;
    font-size: 16px;
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
    align-items: center;
    z-index: 10;
    background-color: #FFFFFF;
    box-shadow: 0 1px 1px rgb(0 0 0 / 15%);

    li {
      color: #455D82;
    }
  }

  @media (max-width: 1300px) {
    .newmenu {
      padding: 0 250px;
    }
  }

  @media (max-width: 1000px) {
    ul {
      width: 70%;
    }

    .newmenu {
      padding: 0 100px;
    }
  }

  @media (max-width: 780px) {
    ul {
      width: 100%;
      padding: 0 0 10px;
    }
    ul, li {
      font-size: 14px;
    }

    .newmenu {
      display: flex;
      padding: 10px;
    }
  }
  
  @media (max-width: 450px) {
    ul {
      display: none;
    }
  }
`

export const SShowBox = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 40px;

  @media (max-width: 420px) {
    padding-top: 20px;
  }

  .sectionBox:last-child {
    border-bottom: none;
  }
  
  h3 {
    font-size: 24px;
    color: #455D82;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .sectionBox {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 40px;
    border-bottom: 2px solid #BDBDBD;

    h2 {
      padding-top: 70px;
      margin-top: -70px;
    }
  }

  .itemBox {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .itemBoxList {
    width: 33%;
    color: #68747F;
    padding-right: 30px;
    margin-top: 40px;
    margin-bottom: 50px;

    ul {
      list-style-type: none;

      li {
        line-height: 1.8;
        ::before {
          content: "";
          width: 6px;
          height: 6px;
          display: inline-block;
          border-radius: 50%;
          background: #7a79a1;
          vertical-align: middle;
          margin-right: 14px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .itemBox {
      display: block;


      ul {
        width: 100%;
      }
    }

    h2 {
      font-size: 20px;
    }

    .itemBoxList {
      width: 100%;
      margin: 20px 0;

      h3 {
        font-size: 18px;
        margin: 20px 0 10px;
      }
    }
  }

  @media (max-width: 420px) {
    .sectionBox {
      padding-bottom: 0;
      margin-bottom: 20px;
    }
  }
`
