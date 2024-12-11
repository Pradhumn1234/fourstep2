import React, { useState } from "react";
import AboutSection from "@/Component/About/AboutSection";
import { Footer } from "@/Component/Footer/Footer";
import Team from "@/Component/Team/Team";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Image from "next/image";
import Nav from "@/Component/Header/Nav";
// import Breadcrumbs from "@/Component/About/Breadcrumbs";

const About = () => {
  const data = [
    {
      title: "Our Mission",
      content:
        "At FourSteps Digital, our mission is to provide comprehensive IT solutions that drive innovation and efficiency. We specialize in delivering tailored technology services that help businesses optimize their operations, enhance security, and scale with confidence. From cloud computing and cybersecurity to software development and IT consulting, we are dedicated to offering cutting-edge solutions that align with our clients' goals. With a focus on reliability, innovation, and customer success, FourSteps Digital is your trusted partner in navigating the complexities of today’s IT landscape. Together, we build a future where technology powers progress.",
    },
    {
      title: "Our Vision",
      content:
        "At FourSteps Digital, our vision is to be a global leader in IT solutions, driving digital innovation that empowers businesses to thrive in a rapidly evolving technological landscape. We aspire to create a world where cutting-edge technology is accessible, seamless, and transformative, enabling companies of all sizes to unlock their full potential. Through continuous innovation, exceptional service, and a commitment to excellence, we envision shaping a future where technology fuels success, fosters growth, and brings lasting positive impact to businesses and communities worldwide.",
    },
    {
      title: "Our Goal",
      content:
        "At FourSteps Digital, our goal is to deliver top-tier IT solutions that drive business success and digital transformation. We aim to provide innovative, reliable, and scalable technology services that meet the unique needs of our clients. By fostering strong partnerships, staying at the forefront of technological advancements, and maintaining a client-centric approach, we strive to empower businesses to achieve operational excellence, enhance productivity, and stay competitive in today’s dynamic market. Our ultimate goal is to be a trusted partner, guiding our clients toward sustainable growth and long-term success through strategic IT solutions.",
    },
  ];

  const [currentdata, setCurrentData] = useState(data[0]);
  const [fade, setFade] = useState(true); // State for fade-in effect

  const handleSectionClick = (newData) => {
    if (newData.title !== currentdata.title) {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentData(newData);
        setFade(true); // Start fade-in effect
      }, 300); // Wait for fade-out to complete
    }
  };

  const formatFirstFourWords = (content) => {
    const words = content.split(" ");
    const firstFourWords = words.slice(0, 3).join(" ");
    const remainingWords = words.slice(3).join(" ");
    return (
      <p className="text-md">
        <span className="font-bold italic">{firstFourWords}</span>{" "}
        {remainingWords}
      </p>
    );
  };

  return (
    <>
      <div className="">
        <Nav />
      </div>
      <div className="container">
        {/*  hero section  */}
        <div className="flex justify-center items-center w-full bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 bg-white rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
              <Image
                src="/image/yyy.png"
                alt="About Us"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded  object-cover"
                height={500}
                width={500}
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                About Us
              </h2>
              <p className="text-orange-500 text-sm sm:text-base font-medium">
                Tailored solutions to help your business thrive in the digital
                era.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Since 2020, we have been delivering cutting-edge digital
                consulting, website development, and branding strategies. At
                Four Steps Digital, we are more than consultants—we are your
                partners in transforming ideas into impactful results. Lets turn
                challenges into opportunities together.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-orange-500 text-white text-sm md:text-base font-medium py-2 px-4 rounded-md shadow-md hover:bg-orange-600 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* after hero section */}
        <div className="w-full bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {/* Text Section */}
            <div className="text-center md:text-left">
              {/* Highlighted Tag */}
              <div className="inline-block bg-red-100 text-red-500 px-3 py-2 rounded-md text-sm mb-4">
                4steps Digital
              </div>
              {/* Main Heading */}
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
                We are born to
                <br />
                <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  Develop Experience
                </span>
              </h1>
              {/* Paragraph Content */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Back in 2020, something exciting took shape in Greater Noida –
                an agency led by the enthusiastic Mr. Amarjeet Kumar Singh. They
                started off as <b>“4steps Marketing”</b> and quickly made a name
                for themselves with their innovative ideas. But guess what? They
                have grown even more since then! They recently revamped their
                identity and are now known as
                <b>“Four Steps Digital Consulting Pvt. Ltd.”</b> This new name
                shows they are not just about marketing anymore – they are all
                about helping folks navigate the digital world and offering
                top-notch advice.
                <br />
                <br />
                <span className="text-blue-500 font-semibold">
                  Zoho Consulting, HubSpot Consulting, Digital Marketing &
                  Branding, and Website Designing & Development
                </span>
              </p>
            </div>
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                alt="Four Steps Digital"
                src="/image/ab.webp"
                className="rounded-lg shadow-lg"
                height={500}
                width={500}
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <div className="w-full my-5  grid place-items-center">
            <div className="grid place-items-center">
              <h1 className="text-center text-md md:text-xl lg:text-3xl tracking-wide font-semibold">
                Work For Your
                <br />
                <span className="text-gradient">Incredible Success</span>
              </h1>
            </div>
          </div>

          <div className="flex px-1 justify-around md:max-w-4xl mx-auto border py-3 bg-white rounded-full shadow-xl">
            {data.map((data, index) => (
              <span
                key={index}
                onClick={() => handleSectionClick(data)}
                className={`cursor-pointer flex items-center ${
                  currentdata.title === data.title
                    ? "text-red-500"
                    : "text-zinc-800"
                }`}
              >
                <span className="text-3xl">•</span>
                <span className="ml-1 font-medium ">{data.title}</span>
              </span>
            ))}
          </div>

          <div
            className={`w-full md:max-w-4xl my-5 h-auto mx-auto grid place-items-center px-5 text-[13px] md:text-sm ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            {formatFirstFourWords(currentdata.content)}
          </div>
        </div>
        {/* Team Section */}
        <div>
          <Team />
        </div>

        {/* Extra Section */}
        <div className="w-full py-5 grid place-items-center">
          <div className="grid place-items-center">
            <h1 className="text-center text-md md:text-xl lg:text-2xl tracking-wide font-semibold">
              Access your business potentials
              <br /> today & find opportunity for
              <br />
              <span className="text-gradient">bigger success</span>
            </h1>
          </div>
        </div>
        {/* this is testimonial */}

        <div>
          <Testimonial />
        </div>
        {/*footer section  */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
