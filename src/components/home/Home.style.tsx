import {
  QuickSandBold,
  QuickSandRegular,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export const ContainerVansa = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: unset;
  grid-gap: 16px;
  padding: 0 16px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
    padding: 0 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
    padding: 0 32px;
  }
`;

export const WrapperHome = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: column;
  p {
    font-family: ${QuickSandBold};
    font-size: 24px;
    color: ${primaryColor};
  }
  span {
    font-family: ${QuickSandRegular};
    font-weight: 600;
    font-size: 24px;
    color: ${secondaryColor};
    margin-bottom: 1rem;
  }
  .container_info {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container_name {
    width: 100%;
    background-color: ${secondaryColor};
    height: 62px;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    color: ${whiteColor};
    font-size: 24px;
    font-family: ${QuickSandBold};
  }
  .container_front {
    width: 215px;
    background-color: ${whiteColor};
    height: 56px;
    border-radius: 48px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${secondaryColor};
    font-size: 20px;
    font-family: ${QuickSandBold};
  }
  button {
    margin: 0 4.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    span {
      text-align: center;
      font-family: ${QuickSandBold};
      font-size: 15px;
      letter-spacing: 4px;
      color: white;
      margin-bottom: 0 !important;
    }
  }
  .container_footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
  }
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    grid-column: 1 / 9;
    p {
      font-size: 36px;
    }
    span {
      font-size: 40px;
    }
    .container_info {
      margin: 2rem 5rem;
    }
    .container_name {
      width: 533px;
      font-size: 45px;
    }
    .container_front {
      width: 268px;
      height: 114px;
      border-radius: 24px;
      font-size: 34px;
      text-align: center;
      text-wrap: balance;
    }
    .container_footer {
      width: 100%;
      margin: 3rem 0 0 0;
      justify-content: space-between;
    }
  }
  @media (min-width: 1280px) {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    p {
      font-size: 45px;
      margin-right: 10rem;
    }
    span {
      font-size: 70px;
    }
    .container_info {
      margin: 2rem 25rem 0 20rem;
      align-items: flex-start;
    }
    .container_name {
      width: 620px;
      font-size: 45px;
    }
    .container_front {
       margin-left: auto;
       margin-top: 2rem;
    }
    .man {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .women {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    button {
      margin-left: auto;
      margin-right: -14rem;
    }
  }
`;
