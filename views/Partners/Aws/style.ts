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
  text-align: center;

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
      display: block;
      position: absolute;
      left: 50%;
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
    max-width: 33.33%;
    padding-right: 16px;
    padding-left: 16px;

    img {
      display: block;
      max-width: 250px;
      width: 100%;
      margin: 0 auto;
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
  border-bottom: 1px solid #f4f6f9;

  // .background {
  //   img {
  //     width: 100%;
  //     position: absolute;
  //     min-height: 100%;
  //     top: 0;
  //   }
  }
`
