import { TypesLibsSVG } from "./models";

import arrowNext from "../images/arrow-next.svg";
import arrowPrev from "../images/arrow-prev.svg";
import man from "../images/man.svg";
import women from "../images/women.svg";
import lore from "../images/Lore.jpg";
import circleArrow from "../images/circleArrow.svg";
import manLarge from "../images/manLarge.svg"
import play from "../images/play.svg"
import poster from "../images/poster.jpg"

export const LibsSVG = {
  arrowNext,
  arrowPrev,
  man,
  women,
  lore,
  circleArrow,
  manLarge,
  play,
  poster
};

export type TypesLibsSVG = keyof typeof LibsSVG;
