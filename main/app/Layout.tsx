import LandingBar from "./components/LandingBar";

export default function LandingLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <>
        <LandingBar/>
        <main>{children}</main>
        </>
    )
}

