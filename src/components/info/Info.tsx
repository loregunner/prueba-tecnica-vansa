import React, { useState } from "react";
import { WrapperInfo } from "./Info.style";
import Button from "@/ui/button/Button";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";
import { ContainerVansa } from "../home/Home.style";
import Link from "next/link";
import useMediaCustom from "@/hooks/useMediaCustom";

export const InfoDashborad = () => {
  const [showItem, setshowItem] = useState(false);
  const { isDesktop } = useMediaCustom();
  return (
    <ContainerVansa>
      <WrapperInfo>
        {isDesktop && (
          <Image src={LibsSVG.manLarge} alt="man" className="manLarge" width={450} />
        )}
        <div className="container_image">
          <div className="container_button_item">
            <span>¡Haz clic aquí!</span>
          </div>
          <div className="container_image_item">
            <Image
              src={LibsSVG.lore}
              alt="lore"
              className="lore"
              width={130}
              onClick={() => setshowItem(!showItem)}
            />
          </div>
          <Image
            src={LibsSVG.circleArrow}
            alt="arrow"
            className="circleArrow"
            onClick={() => setshowItem(!showItem)}
          />
          {showItem && (
            <div className="container_imagen_item_show">
              <p>
                Soy Lorena rippe desarrolladora front-end con experiencia en
                react, next, redux, microfronts, madre de dos niños, apasionada
                por el front, otaku c:
              </p>
            </div>
          )}
        </div>
        <div className="container_image_footer">
          {!isDesktop && (
            <Image src={LibsSVG.man} alt="man" className="man" width={150} />
          )}
          <div className="container_image_footer_button">
            <Button size={"extralarge"} type="button">
              <Image src={LibsSVG.arrowPrev} alt="arrow" className="arrow" />
              <Link className="name_option" href={`/`} legacyBehavior as={`/`}>
                <span>ANTERIOR</span>
              </Link>
            </Button>
            <Button size={"extralarge"} type="button">
              <Link
                className="name_option"
                href={`/video`}
                legacyBehavior
                as={`/video`}>
                <span>SIGUIENTE</span>
              </Link>
              <Image src={LibsSVG.arrowNext} alt="arrow" className="arrow" />
            </Button>
          </div>
        </div>
      </WrapperInfo>
    </ContainerVansa>
  );
};
