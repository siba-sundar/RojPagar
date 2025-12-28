'use client'

import Image from "next/image"
import Link from "next/link"

function LoginPage(): JSX.Element {
    return (
        <>
            <div className='h-screen w-screen bg-[#F4F2EC] overflow-hidden font-roboto'>
                <div className="w-screen h-[10vh] flex items-center">
                    <Image 
                        src="/assets/logo.svg" 
                        alt="loginLogo" 
                        width={173} 
                        height={83} 
                        className="ml-[2.5vw]" 
                    />
                </div>

                <div 
                    className="flex items-center justify-center h-[90vh] bg-bottom bg-no-repeat relative"
                    style={{ 
                        backgroundImage: "url('/assets/loginBackground.png')",
                        backgroundSize: '104vw 72vh'
                    }}
                >
                    <div className='bg-white flex items-center justify-center flex-col h-[86%] w-[30%] rounded-[25px] shadow-[1px_9px_10px_rgba(0,0,0,0.5)] absolute top-1/2 -translate-y-1/2'>
                        <h1 className="text-[3vw] text-black">Log In</h1>

                        <div className="flex items-center flex-col mt-[4vh]">
                            <label htmlFor="username" className="mr-[15vw] text-black">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                className="w-[25vw] pl-5 h-8 border border-black text-black rounded-[20px] bg-white" 
                            />
                        </div>

                        <div className="flex items-center flex-col mt-[4vh]">
                            <label htmlFor="loginPassword" className="mr-[15vw] text-black">Password</label>
                            <input 
                                type="password" 
                                id="loginPassword"
                                className="w-[25vw] pl-5 h-8 border border-black text-black rounded-[20px] bg-white" 
                            />
                        </div>

                        <button className="mt-[33px] w-[12vw] h-10 border-2 border-black rounded-[20px] bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                            <Link href="/worker-home" className="no-underline text-inherit">
                                Login
                            </Link>
                        </button>

                        <div className="flex mt-4 gap-[5px] items-center justify-center font-gentium">
                            <p className="text-[1.2vw] text-black">Don't have an Account?</p>
                            <Link href="/signup" className="text-black no-underline font-black hover:underline">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage