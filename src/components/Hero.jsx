
import selfImage from "../assets/selfImage.jpg"
import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">

      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">

        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my Web <br /> Development Portofolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Tech-Savvy Professional with Global Experience in EdTech, Logistics, and E-Commerce

            Based between Paris and Dallas, I bring a unique international perspective to the tech industry. Having lived and worked across France—including Paris, Cannes, Nantes, and Tours—I have gained deep cross-cultural experience in both the American and French markets.

          My background spans higher education, where I worked with leading universities in both countries, as well as hands-on experience in logistics with a major American e-commerce company. This combination has fueled my passion for leveraging technology to drive innovation in EdTech, logistics technology, and e-commerce solutions.

          With a global outlook and a strong foundation in tech-driven industries, I’m eager to connect with forward-thinking teams shaping the future of software development in these spaces. Let’s build something impactful!.
        </Typography>

        <div className="grid">
          <Typography
            variant="small"
            className="mb-2 text-gray-900 font-medium"
          >
            Your email
          </Typography>

          <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
            {/* @ts-ignore */}
            <Input color="gray" label="Enter your email" size="lg" />
            <Button color="gray" className="w-full px-4 md:w-[12rem]">
              require offer
            </Button>
          </div>

        </div>
        
        <Typography variant="small" className="font-normal !text-gray-500">
          Read my{" "}
          <a href="#" className="font-medium underline transition-colors">
            Terms and Conditions
          </a>
        </Typography>
      </div>
      <Image
        width={1024}
        height={1024}
        alt="team work"
        src={selfImage}
        className="h-[36rem] w-full rounded-xl object-cover"
      />
    </div >
    </header >
  );
}

export default Hero;
