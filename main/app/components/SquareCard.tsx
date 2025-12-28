
import Link from "next/link"
import Image from "next/image"

interface JobDetail {
  job: string;
  detai: string;
  location: string;
  duration: string;
  salary: string;
}

interface SquareCardProps {
  details: JobDetail[];
}

function SquareCard({ details }: SquareCardProps): JSX.Element {
    return (
        <>
        {details.map((value, index) => (
        <div className="flex justify-center items-center flex-col rounded-3xl h-[296px] w-[22vw] bg-[#F4EFDD] text-black transition duration-400 delay-200 m-4" key={index}>
            <div className="pb-5 w-[85%]">
                <h1 className="text-[2vw]">{value.job || "Type of job"}</h1>
                <p className="mt-4 text-[1vw]">{value.detai}</p>
                <div className="flex gap-2 pt-3">
                    <div className="flex items-center justify-center rounded-3xl border border-black h-5 w-[8vw] py-3">
                        
                        <Image
                         src="/assets/icons/bx-loc.svg"
                        alt="" 
                        width={20}
                        height={20}
                        className=" h-[1.6vw]" />
                        <p className="flex text-[60%] mt-2.5 ml-1">{value.location}</p>
                    </div>
                    <div className="flex items-center justify-center rounded-3xl border border-black h-5 w-[8vw] py-3">
                        <Image src="/assets/icons/bxs-time.svg" alt="" width={20} height={20} className="w-[1.2vw] h-[1.6vw]" />
                        <p className="flex text-[60%] mt-2.5 ml-1">{value.duration}</p>
                    </div>
                    <div className="flex items-center justify-center rounded-3xl border border-black h-5 w-[8vw] py-3">
                        <Image src="/assets/icons/bxs-credit-card.svg" alt="" width={20} height={20} className="w-[1.2vw] h-[1.6vw]" />
                        <p className="flex text-[60%] mt-2.5 ml-1">{value.salary}</p>
                    </div>
                </div>

                <button className="h-[34px] w-[10vw] cursor-pointer relative py-2.5 px-5 text-black bg-[#F4EFDD] border border-black rounded-full font-extrabold text-[1vw] transition-all duration-300 overflow-hidden flex items-center justify-center mt-5 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(193,163,98,0.4)] active:scale-100 group">
                    <span className="relative z-10">
                        <Link href="/signup" className="no-underline text-inherit">Apply Now</Link>
                    </span>
                    <span className="absolute inset-0 m-auto w-[50px] h-[50px] rounded-full scale-0 bg-black transition-all duration-600 ease-[cubic-bezier(0.23,1,0.320,1)] group-hover:scale-[3] -z-[1]"></span>
                </button>
            </div>
        </div>
        ))}
        </>
    )
}

export default SquareCard