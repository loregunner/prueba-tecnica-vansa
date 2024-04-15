/* eslint-disable @next/next/no-head-element */
import { ReactNode, Suspense } from "react";

import "../../styles/global.css";
import Loading from "../loading";

interface IProps {
  children: ReactNode;
}
export default function InfoLayout({ children }: IProps) {
  return (
    <section className="layout2" translate="no">
      <Suspense fallback={<Loading />}>
        <div>{children}</div>
      </Suspense>
    </section>
  );
}
