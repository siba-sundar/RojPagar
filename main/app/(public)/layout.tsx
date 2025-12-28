import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


import LandingBar from "../components/LandingBar";

export default function LandingLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
        <html>
          <body>
            <LandingBar/>
        <main>{children}</main>
          </body>
        </html>
        </>
    )
}

