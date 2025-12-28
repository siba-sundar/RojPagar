"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation"

function LandingBar(): JSX.Element {


    const pathname = usePathname();

    return (
        <>
            <div className="w-full h-[50px] flex items-center bg-[#F4F2EC] pb-10 pt-5">
                <Image
                    src="/assets/logo.svg"
                    width={20}
                    height={20}
                    alt="logo"
                    className="h-[83px] w-[173px] ml-[2.5vw]"
                />

                <div className="flex items-center justify-center ml-[10vw] w-[45vw] h-full">
                    <ul className="flex gap-[4vw]">
                        <li className="list-none">
                            <Link
                                href="/"
                                className={`no-underline font-bold text-[1.5vw] ${pathname === "/" ? "text-red-600" : "text-black"
                                    }`}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link
                                href="/about"
                                className={`no-underline font-bold text-[1.5vw] ${pathname === "/aboutUs" ? "text-red-600" : "text-black"
                                    }`}
                            >
                                About Us
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link
                                href="/contact"
                                className={`no-underline font-bold text-[1.5vw] ${pathname === "/contacts" ? "text-red-600" : "text-black"
                                    }`}
                            >
                                Contacts
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="h-full flex items-center justify-end w-[21vw]">
                    <button className="h-[34px] w-[10vw] cursor-pointer relative px-6 py-2.5 text-lg text-white bg-[#FB8585] border-2 border-[#C11111] rounded-[34px] font-semibold text-base transition-all duration-300 ease-[cubic-bezier(0.23,1,0.320,1)] overflow-hidden flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(193,163,98,0.4)] active:scale-100 before:content-[''] before:absolute before:inset-0 before:m-auto before:w-[50px] before:h-[50px] before:rounded-[inherit] before:scale-0 before:-z-10 before:bg-[#C11111] before:transition-all before:duration-[600ms] before:ease-[cubic-bezier(0.23,1,0.320,1)] hover:before:scale-[3]">
                        <Link href="/login" className="no-underline text-inherit">
                            Login
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LandingBar