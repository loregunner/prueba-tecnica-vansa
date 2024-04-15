import useMediaCustom from "@/hooks/useMediaCustom";
import Button from "@/ui/button/Button";
import { LibsSVG } from "@/utils/libsSVG";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { WrapperVideo } from "./Video.style";
import VideoPlayer from "./videoPlayer/VideoPlayer";

const VideoDashboard = () => {
  const [showVideo, setshowVideo] = useState<boolean>(false);
  const { isDesktop, isTable } = useMediaCustom();
  return (
    <WrapperVideo>
      <div className="container_video">
        <p className="title_video">Veamos este video</p>
        <div className="container_button_item">
          <span>¡Haz clic en el botón!</span>
        </div>
        <div className="container_video_item">
          <Image
            src={LibsSVG.play}
            alt="play"
            className="play"
            onClick={() => setshowVideo(true)}
          />
        </div>
      </div>
      <div className="container_footer">
        <Image
          src={LibsSVG.women}
          alt="women"
          className="women"
          width={!isDesktop ? (!isTable ? 150 : 200) : 260}
        />
        <Image
          src={LibsSVG.man}
          alt="man"
          className="man"
          width={!isDesktop ? (!isTable ? 150 : 200) : 260}
        />
        <div className="container_image_footer_button">
          <Button size={"extralarge"} type="button">
            <Image src={LibsSVG.arrowPrev} alt="arrow" className="arrow" />
            <Link
              className="name_option"
              href={`/info`}
              legacyBehavior
              as={`/info`}>
              <span>ANTERIOR</span>
            </Link>
          </Button>
          <Button size={"extralarge"} type="button">
            <Link
              className="name_option"
              href={`/redes`}
              legacyBehavior
              as={`/redes`}>
              <span>SIGUIENTE</span>
            </Link>
            <Image src={LibsSVG.arrowNext} alt="arrow" className="arrow" />
          </Button>
        </div>
      </div>
      <VideoPlayer showVideo={showVideo} />
    </WrapperVideo>
  );
};

export default VideoDashboard;
