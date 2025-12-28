import Image from "next/image"

function AboutUs(): JSX.Element {
  return (
    <>
      <div className="bg-[#F4F2EC] text-black">
        {/* About Us Header Section */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[5vw]">About US</h1>
          <p className="mt-8 mx-[17vw]">
            At RojPagar, we are dedicated to revolutionizing the way daily laborers find employment opportunities. With our innovative platform, we aim to bridge the gap between employers and workers, ensuring a seamless and efficient process for both parties.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="flex pt-10">
          <div className="flex flex-col justify-center pl-[3vw] pr-[6vw]">
            <h2 className="text-[3.5vw]">Our Vision</h2>
            <p>
              At Roj Pagar, we envision a future where every individual, regardless of education level or background, has access to dignified and fulfilling employment opportunities. In a nation where a significant portion of the workforce relies on daily wages, traditional job portals often overlook this demographic. Our mission is to bridge this gap between daily wage earners and recruiters, revolutionizing the way job seekers find work and businesses connect with talent.
            </p>
          </div>
          <Image
            src="/assets/visionBanner.svg"
            alt="Vision Banner"
            width={600}
            height={400}
            className="p-[3vw]"
          />
        </div>

        {/* Our Approach Section */}
        <div className="flex pt-10">
          <Image
            src="/assets/approachBanner.svg"
            alt="Approach Banner"
            width={600}
            height={400}
            className="p-[3vw]"
          />
          <div className="flex flex-col justify-center pl-[3vw] pr-[6vw]">
            <h2 className="text-[3.5vw]">Our Approach</h2>
            <p>
              Roj Pagar seeks to change this narrative by providing a platform specifically designed to meet the requirements of daily wage workers. Through our innovative application, individuals can seamlessly navigate job listings posted by recruiters, selecting opportunities based on their availability, skills, and desired pay. Leveraging AI technology, our recommendation system analyses past preferences and company choices to offer tailored job suggestions, streamlining the job search process and enhancing user experience.
              <br /><br />
              By empowering daily wage earners with access to a diverse range of job opportunities and facilitating seamless connections between them and recruiters, Roj Pagar aims to uplift communities, drive economic growth, and foster a more inclusive society.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-[3.5vw]">Meet The Team</h2>
          <div className="flex gap-[5vw] justify-center mt-10">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center mt-10 pb-10">
              <Image
                src="/assets/Ellipse 5.png"
                alt="Sahil Sharma"
                width={150}
                height={150}
                className="w-[10vw]"
              />
              <div className="flex flex-col items-center">
                <p className="m-0">Sahil Sharma</p>
                <p className="m-0 italic">Team Lead</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center mt-10 pb-10">
              <Image
                src="/assets/Ellipse 6.svg"
                alt="Saksham Shrey"
                width={150}
                height={150}
                className="w-[10vw]"
              />
              <div className="flex flex-col items-center">
                <p className="m-0">Saksham Shrey</p>
                <p className="m-0 italic">Backend Developer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center mt-10 pb-10">
              <Image
                src="/assets/Ellipse 7.svg"
                alt="Siba Sundar"
                width={150}
                height={150}
                className="w-[10vw]"
              />
              <div className="flex flex-col items-center">
                <p className="m-0">Siba Sundar</p>
                <p className="m-0 italic">UI/UX and Frontend Developer</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center mt-10 pb-10">
              <Image
                src="/assets/Ellipse 8.svg"
                alt="Aryan Sheregar"
                width={150}
                height={150}
                className="w-[10vw]"
              />
              <div className="flex flex-col items-center">
                <p className="m-0">Aryan Sheregar</p>
                <p className="m-0 italic">Ai and Backend Developer</p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center mt-10 pb-10">
              <Image
                src="/assets/Ellipse 9.svg"
                alt="Harsh Singla"
                width={150}
                height={150}
                className="w-[10vw]"
              />
              <div className="flex flex-col items-center">
                <p className="m-0">Harsh Singla</p>
                <p className="m-0 italic">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs