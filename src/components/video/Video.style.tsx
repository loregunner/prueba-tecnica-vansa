import {
  QuickSanSemiBold,
  QuickSandBold,
  primaryColor,
  whiteColor,
} from "@/utils/constants.style";
import styled from "styled-components";

export const WrapperVideo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  .title_video {
    font-family: ${QuickSandBold};
    font-size: 24px;
    color: ${primaryColor};
  }
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
    top: 9rem;
    right: 11.5rem;
    transform: rotateZ(45deg);
  }
  .container_video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .container_video_item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${whiteColor};
    border-radius: 24px;
    width: 14.875rem;
    height: 8.625rem;
    margin: 2rem 0;
  }
  .container_image_footer_button {
    display: flex;
    flex-direction: row;
    button {
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
  }
  @media (min-width: 768px) {
    margin-top: 0;
    .container_video {
      margin-top: 2.5rem;
    }
    .container_button_item:after {
      top: 9rem;
      right: 23.5rem;
    }
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container_video {
      margin-top: 0rem;
    }
    .title_video {
      font-size: 45px;
      margin-left: 35rem;
    }
    .container_button_item:after {
      top: 11rem;
      left: 30rem;
    }
    .container_video_item {
      width: 37.375rem;
      height: 21.625rem;
      border-radius: 14px;
    }
    .container_footer {
      display: flex;
      position: absolute;
      bottom: 0;
      right: 0;
      align-items: flex-end;
      .container_image_footer_button {
        position: absolute;
        bottom: 0;
        right: 10px;
      }
    }
  }
`;
