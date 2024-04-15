import {
  QuickSanSemiBold,
  QuickSandBold,
  QuickSandMedium,
  grayPrimary,
  primaryColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperInfo = styled.section`
  grid-column: 1 / 7;
  .container_button_item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 37px;
    border: none;
    cursor: pointer;
    border-radius: 24px;
    background-color: ${primaryColor};
    font-size: 14px;
    font-family: ${QuickSanSemiBold};
    margin: 0 5px;
    box-shadow: 0px 4px 4px 0px #00000040;
    span {
      color: white;
      font-family: ${QuickSandBold};
    }
  }
  .container_button_item:after {
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    background: ${primaryColor};
    top: 40px;
    right: 6.8rem;
    transform: rotateZ(45deg);
  }
  .container_image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-left: 8rem;
    .container_image_item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      width: 160px;
      height: 130px;
      background-color: white;
      border-radius: 24px;
      margin-top: 15px;
      cursor: pointer;
    }
  }
  .circleArrow {
    margin-top: -30px;
  }
  .container_imagen_item_show {
    background-color: ${grayPrimary};
    border-radius: 24px;
    font-family: ${QuickSandMedium};
    padding: 1rem;
    opacity: 50%;
  }
  button {
    margin: 0;
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
  .container_image_footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
  }
  .container_image_footer_button {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 9;
    .container_image {
      margin-top: 4rem;
      margin-left: 20rem;
    }
    .container_button_item:after {
      top: 5.8rem;
      right: 13.5rem;
    }
    .container_image_footer {
      width: -webkit-fill-available;
    }
    .container_image_footer_button {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 8rem;
    }
  }
  @media (min-width: 1280px) {
    grid-column: 1 /13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container_image {
      margin-left: 53rem;
    }
    .container_imagen_item_show {
      width: 400px;
      position: absolute;
      margin-top: 23rem;
    }
    .container_button_item:after {
      top: 5.8rem;
      right: 29rem;
    }
    .container_image_footer {
      position: absolute;
      bottom: 0;
    }
    .manLarge {
      margin-top: 1rem;
      position: absolute;
      bottom: 0;
    }
    .container_image_footer_button {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: end;
      position: absolute;
      bottom: 0;
    }
  }
`;
