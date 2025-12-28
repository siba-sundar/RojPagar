import Image from "next/image"

function LandingContact(): JSX.Element {
    return (
        <>
            <div 
                className="w-screen h-screen bg-[#F4F2EC] text-black" 
                style={{ backgroundImage: "url('/assets/contactBackground.svg')" }}
            >
                <div className="flex">
                    <div className="w-[50vw] h-screen flex">
                        <div className="bg-[#FFFDF6] h-[12vw] w-[25vw] ml-[3vw] mt-[10vh] rounded-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.6)] flex flex-col pl-[2vw]">
                            <div className="flex mt-2.5 gap-[0.8vw]">
                                <Image 
                                    src="/assets/icons/bxs-envelope.svg" 
                                    alt="email" 
                                    width={24} 
                                    height={24} 
                                />
                                <p>rojPagar@gmails.com</p>
                            </div>
                            <div className="flex mt-[4vh] gap-[0.8vw]">
                                <Image 
                                    src="/assets/icons/bxs-phone.svg" 
                                    alt="phone" 
                                    width={24} 
                                    height={24} 
                                />
                                <p>+91- 445356443</p>
                            </div>
                            <div className="flex pt-[2vh] gap-[0.5vw] mt-[5px] pl-[2vw]">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src="/assets/icons/bxl-facebook-square.svg" 
                                        alt="facebook" 
                                        width={32} 
                                        height={32} 
                                    />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src="/assets/icons/bxl-linkedin-square.svg" 
                                        alt="linkedin" 
                                        width={32} 
                                        height={32} 
                                    />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src="/assets/icons/bxl-instagram-alt.svg" 
                                        alt="instagram" 
                                        width={32} 
                                        height={32} 
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-[#FFFDF6] flex-col ml-[20vw] h-[70vh] w-[25vw] rounded-b-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.6)] p-[1.5vw] gap-[4vh]">
                        <h3 className="mt-[-1vh] pl-[2vw]">Get In Touch</h3>
                        <div className="flex flex-col mt-[-3vh] gap-[3vh]">
                            <input 
                                type="text" 
                                className="h-[5vh] rounded-[20px] border border-black pl-[1vw] bg-[#FFFDF6]" 
                                placeholder="Name" 
                            />
                            <input 
                                type="text" 
                                className="h-[5vh] rounded-[20px] border border-black pl-[1vw] bg-[#FFFDF6]" 
                                placeholder="Email" 
                            />
                            <input 
                                type="text" 
                                className="h-[5vh] rounded-[20px] border border-black pl-[1vw] bg-[#FFFDF6]" 
                                placeholder="Phone Number" 
                            />
                            <label htmlFor="messageText" className="ml-[1vw]">Message</label>
                            <input 
                                type="text" 
                                id="messageText"
                                className="mt-[-2vh] h-[20vh] rounded-[20px] border border-black pl-[1vw] bg-[#FFFDF6]"
                            />
                        </div>
                        <button className="w-[9vw] ml-[30%] py-[0.7vw] px-[0.7vw] rounded-[30px] bg-black text-white font-semibold">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingContact