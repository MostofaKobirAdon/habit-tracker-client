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

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full md:h-[440px] h-200 shadow-lg"
      >
        <SwiperSlide className="h-full ">
          <div className="bg-blue-50 pb-15 pt-30 h-full">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto  md:max-w-6xl max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
                  Build Better Habits, One Day at a Time
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-500">
                  Consistency beats perfection.
                </p>
                <button className="px-6 py-3 rounded-lg text-white font-semibold bg-primary hover:bg-blue-500">
                  Start Tracking
                </button>
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto  md:max-w-6xl max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-teal-800">
                  Easily Add Your Daily Habits
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-500">
                  Track your morning routine, workouts, reading, or meditation
                </p>
                <button className="px-6 py-3 rounded-lg text-white font-semibold bg-[#368245] hover:bg-[#28843b]">
                  Start Tracking
                </button>
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto  md:max-w-6xl max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 mt-3 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-teal-800">
                  See Your Growth Over Time
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-500">
                  Streaks, charts, and progress reports at a glance.
                </p>
                <button className="px-6 py-3 rounded-lg text-white font-semibold bg-[#368245] hover:bg-[#28843b]">
                  Start Tracking
                </button>
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full mx-auto  md:max-w-6xl max-w-11/12  ">
              <div className="md:w-1/2 mb-6 md:mb-0 ">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-400">
                  Never Miss a Day
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-500">
                  Reminders and notifications to keep you on track.
                </p>
                <button className="px-6 py-3 rounded-lg text-white font-semibold bg-yellow-400 hover:bg-yellow-500">
                  Start Tracking
                </button>
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
