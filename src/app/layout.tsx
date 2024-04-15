/* eslint-disable @next/next/no-head-element */
"use client";

import { ReactNode, Suspense } from "react";

import "../styles/global.css";
import StyledComponentsRegistry from "@/config/register";
import Loading from "./loading";

interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="es">
      <head>
        <title>Vansa</title>
      </head>
      <body className="layout" translate="no">
        <Suspense fallback={<Loading />}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Suspense>
      </body>
    </html>
  );
}
