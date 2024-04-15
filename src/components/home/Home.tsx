"use client";

import Button from "@/ui/button/Button";
import { ContainerVansa, WrapperHome } from "./Home.style";
import Image from "next/image";
import { LibsSVG } from "@/utils/libsSVG";
import useMediaCustom from "@/hooks/useMediaCustom";
import Link from "next/link";

const HomeInfo = () => {
  const { isTable, isDesktop } = useMediaCustom();
  return (
    <ContainerVansa>
      <WrapperHome>
        {isDesktop && (
          <Image
            src={LibsSVG.man}
            alt="man"
            className="man"
            width={!isDesktop ? (!isTable ? 150 : 200) : 260}
          />
        )}
        <div className="container_info">
          <p>Te damos la bienvenida a Vansa: </p>
          <span>Prueba técnica de:</span>
          <div className="container_name">Lorena Rippe</div>
          <div className="container_front">Vacante Front End</div>
          <Button size={isTable ? "extralarge" : "large"} type="button">
            <Link
              className="name_option"
              href={`/info`}
              legacyBehavior
              as={`/info`}>
              <span>INICIAR</span>
            </Link>
            <Image src={LibsSVG.arrowNext} alt="arrow" className="arrow" />
          </Button>
          {!isDesktop && (
            <div className="container_footer">
              <Image
                src={LibsSVG.man}
                alt="man"
                className="man"
                width={!isDesktop ? (!isTable ? 150 : 200) : 260}
              />
              <Image
                src={LibsSVG.women}
                alt="women"
                className="women"
                width={!isDesktop ? (!isTable ? 150 : 200) : 260}
              />
            </div>
          )}
        </div>
        {isDesktop && (
          <div className="container_women">
            <Image
              src={LibsSVG.women}
              alt="women"
              className="women"
              width={!isDesktop ? (!isTable ? 150 : 200) : 260}
            />
          </div>
        )}
      </WrapperHome>
    </ContainerVansa>
  );
};

export default HomeInfo;
