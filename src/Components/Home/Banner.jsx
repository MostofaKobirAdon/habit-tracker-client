import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "../../assets/slide1.webp";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";
import slide4 from "../../assets/slide4.png";
import { Cursor, Typewriter } from "react-simple-typewriter";

import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full md:h-[440px] h-180 shadow-lg"
      >
        <SwiperSlide className="h-full ">
          <div className="bg-blue-50 pb-15 pt-30 h-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto   lg:max-w-6xl md:max-w-[700px] max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0 flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-900">
                  Build Better Habits, One Day at a Time
                </h2>

                <div className="text-lg md:text-xl mb-6 h-4 text-gray-500 ">
                  <Typewriter
                    className=""
                    words={[
                      "Track your morning routine, workouts, reading, or meditation.",
                      "Streaks, charts, and progress reports at a glance.",
                      "Reminders and notifications to keep you on track.",
                      "Consistency beats perfection.",
                    ]}
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </div>
                <Link
                  to={"/add-habit"}
                  className="px-6 py-3 w-40 rounded-lg text-white font-semibold bg-primary hover:bg-blue-500"
                >
                  Start Tracking
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide1}
                  alt="Slide 1"
                  className="w-full  rounded-lg object-cover overflow-hidden h-75 "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full ">
          <div className="bg-gray-50 pb-15 pt-30 h-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto   lg:max-w-6xl md:max-w-[700px] max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0 flex flex-col w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-teal-800">
                  Easily Add Your Daily Habits
                </h2>

                <div className="text-lg md:text-xl mb-6 h-4 text-gray-500 ">
                  <Typewriter
                    className=""
                    words={[
                      "Track your morning routine, workouts, reading, or meditation.",
                      "Streaks, charts, and progress reports at a glance.",
                      "Reminders and notifications to keep you on track.",
                    ]}
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </div>
                <Link
                  to={"/add-habit"}
                  className="px-6 w-40 py-3 rounded-lg text-white font-semibold bg-[#368245] hover:bg-[#187c2c]"
                >
                  Start Tracking
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide2}
                  alt="Slide 1"
                  className="w-full  rounded-lg object-cover overflow-hidden h-75 "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full ">
          <div className="bg-green-50 pb-15 pt-30 h-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto   lg:max-w-6xl md:max-w-[700px] max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0 flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-teal-800">
                  See Your Growth Over Time
                </h2>

                <div className="text-lg md:text-xl mb-6 h-4 text-gray-500 ">
                  <Typewriter
                    className=""
                    words={[
                      "Create and track your daily habits easily.",
                      "Streaks, charts, and progress reports at a glance.",
                      "Reminders and notifications to keep you on track.",
                    ]}
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </div>
                <Link
                  to={"/add-habit"}
                  className="px-6 py-3 w-40 rounded-lg text-white font-semibold bg-[#368245] hover:bg-[#0c7d22]"
                >
                  Start Tracking
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide3}
                  alt="Slide 1"
                  className="w-full  rounded-lg object-cover overflow-hidden h-75 "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full ">
          <div className="bg-yellow-50 pb-15 pt-30 h-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto   lg:max-w-6xl md:max-w-[700px] max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-400">
                  Never Miss a Day
                </h2>

                <div className="text-lg md:text-xl mb-6 h-4 text-gray-500">
                  <Typewriter
                    className=" "
                    words={[
                      "Create and track your daily habits easily.",
                      "Visualize your progress with streaks and charts.",
                      "Reminders and notifications to keep you on track.",
                    ]}
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </div>

                <Link
                  to={"/add-habit"}
                  className="px-6 py-3 w-40 rounded-lg text-white font-semibold bg-yellow-400 hover:bg-yellow-500"
                >
                  Start Tracking
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={slide4}
                  alt="Slide 1"
                  className="w-full  rounded-lg object-cover overflow-hidden h-75 "
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
