import styled from "styled-components";

export const SSection1 = styled.section`
  background-color: #001b30 !important;
  overflow: hidden;
  max-width: 100vw;
  margin-top: 0;
  margin-bottom: 0;
  padding: 75px 0;
  position: relative;
  background-size: cover;
  background-position: center;
  display: block;
  box-sizing: inherit;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  
  .background {
    img {
      position: absolute;
      min-height: 100%;
      top: 0;
    }
  }

  .bigBox {
    width: 1300px;
  }
`

export const SContainer = styled.div`
  width: 1300px;
  position: relative;
  z-index: 9;
  padding-right: 16px;
  padding-left: 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;

  .row {
    margin-bottmo: 0;
    margin: 0 16px;
    display: flex;

    h2 {
      font-size: 24px;
      font-weight: 300;
      margin-top: 0;
      color: #1155cb;
    }
  }

  .box {
    text-align: center;
  }

  .inner2 {
    display: none;
  }

  @media (max-width: 1300px) {
    width: 1100px;
  }

  @media (max-width: 1100px) {
    width: 900px;
    .box {
      img {
        width: 400px;
        height: auto;
      }
    }
  }

  @media (max-width: 900px) {
    width: 700px;
    .box {
      img {
        width: 280px;
        height: auto;
      }
    }
  }

  @media (max-width: 770px) {
    width: 100%;

    .row {
      width: 100%;
      display: block;
      position: relative;
      justify-content: center;
      -webkit-box-pack: center;
      align-items: flex-start;
      margin: 0 !important;
    }

    .box {
      img {
        transform: translateX(0);
        position: initial;
      }
    }

    .inner {
      display: none;
    }

    .inner2 {
      display: block;
    }
  }
`

export const SCard = styled.div`
  width: 50%;
  display: block;
  padding: 30px 16px 0 16px;

  .title {
    text-transform: uppercase;
    font-size: 14px;
    color: #1195EC;
    line-height: 24px;
    margin: 0 0 16px;
    text-align: left;

    img {
      width: 260px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: auto;
    }
  }

  h1 {
    font-size: 40px;
    font-weight: 300;
    line-height: 47px;
    color: #FFFFFF;
    margin: 0 0 16px;
  }

  h4 {
    font-size: 21px;
    font-weight: 400;
    line-height: 28px;
    color: #FFFFFF;
    margin: 0 0 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    img {
      position: absolute;
      top: 50%;
      max-height: calc(100% + 50px);
      height: calc(100% + 50px);
      transform: translateX(-50%) translateY(-50%);
      z-index: -1;
      max-width: none;
      pointer-events: none;
      margin-top: -15px;
    }
  }

  div {
    position: relative;
    min-height: 100%;
    z-index: 9;
    width: 100%;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`

export const SSection2 = styled.section`
  max-width: 100vw;
  overflow: hidden;
  padding: 75px 0;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  display: block;
`

export const SWrapper = styled.div`
  padding: 0 16px;
  flex-basis: 0;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

  .title {
    font-size: 14px;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    color: #1195ec;
    margin-bottom: 1rem;
  }

  .logo {
    text-align: center;
    img {
      width: 92px;
      height: 92px;
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0px solid #eee;
  }

  div {
    display: flex;
    margin-top: 3rem;
    width: 100%;
    border: none;
  }

  .card {
    display: flex;
    width: 33.33%;
    padding-right: 16px;
    padding-left: 16px;

    img {
      display: block;
      max-width: 250px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media (max-width: 770px) {
    div {
      display: block;
      padding-top: 16px;
    }
    .card {
      display: block;
      margin: 0 auto;
      width: 100% !important;

      img {
        width: 100% !important;
        display: flex;
      }
    }
  }
`

export const SSection3 = styled.section`
  max-width: 100vw;
  overflow: hidden;
  background-color: #f4f6f9;
  padding: 50px 0;

  .title {
    margin-bottom: 0;
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: #1195EC;
    display: inline-block;
  }

  .row {
    display: flex;
    margin: 20px auto;
  }
`

export const SSection4 = styled.section`
  max-width: 100vw;
  overflow: hidden;
  background-color: #fff;
  padding: 75px 0;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: inherit;
  border-top: 1px solid #f4f6f9;
  border-bottom: 2px solid #f4f6f9;

  .background {
    img {
      width: 100%;
      position: absolute;
      min-height: 100%;
      top: 0;
    }
  }

  .col {
    display: block;

    h2 {
      font-size: 24px;
      font-weight: 300;
      margin-top: 0;
      color: #1155cb;
      position: relative;
      z-index: 2;
      line-height: 50px;
      text-align: center;
      max-width: 850px;
      display: block;
      margin: 20px auto 10px;
    }

    .button {
      display: inline-block;
      width: 100%;
      text-align: center;

      span {
        border-radius: 0;
        background: 0 0;
        border: 1px solid #1155cb;
        cursor: pointer;
        color: #fff;
        padding: 0;
        position: relative;
        z-index: 1;
        width: 160px;
        margin: 0 auto;
        display: block;

        :hover {
          background-color: #1155cb;

          a {
            color: #fff;
          }
        }
      }

      a {
        color: #1155cb;
        padding: 10px 16px;
        position: relative;
        display: block;
        z-index: 2;
        width: 100%;
        height: 100%;
        align-items: center;
        text-decoration: none;
      }
    }
  }
`
