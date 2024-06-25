import { check, service1, service2, service3 } from "../assets";
import { futureServices } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Generating from "./design/Generating";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { futureMindServicesIcons } from "../constants";
export const Services = () => {
  return (
    <Section crosses id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI for Creators."
          text="Unlock the potential of AI  with FutureMind for applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center mb-5 p-8 h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                width={800}
                height={730}
                alt="Another AI Photo"
              />
            </div>
            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Another img created with the AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Stunting examples that why we should implement our technology in
                projects
              </p>
              <ul className="body-2 ">
                {futureServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-5  item-start border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="checkimg" />
                    <p className="ml-5">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:translate-x-1/2 " />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Photo editing </h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Automatically enhance your photos using AI app&apos;s photo
                    editing feature. Try it now!
                  </p>
                </div>

                <PhotChatMessage />
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8 ">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Powerful AI Photo and video art generation engine, what would
                  you like to create ?
                </p>
                <ul className="flex justify-between items-center">
                  {futureMindServicesIcons.map((item, index) => (
                    <li
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-15 md:h-15"
                          : "flex w-[3rem]  h-[3rem] bg-n-6 md:w-15 md:h-15"
                      }`}
                      key={index}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7  rounded-[1rem]"
                            : "w-ful"
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Robotron"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};
export default Services;
