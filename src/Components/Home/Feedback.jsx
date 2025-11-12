import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpeg";
import user3 from "../../assets/user3.jpeg";
import user4 from "../../assets/user4.jpeg";
const Feedback = () => {
  return (
    <div className="pt-4  bg-base-100 w-full mb-10">
      <div className="text-center md:  lg:max-w-6xl md:max-w-[700px]  max-w-11/12 mx-auto mb-10">
        <h2 className="text-3xl font-semibold text-base-content">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from people who built lasting habits and transformed
          their daily routines.
        </p>
      </div>

      <div className="md:  lg:max-w-6xl md:max-w-[700px]  max-w-11/12 mx-auto px-4 h-[324px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative  rounded-2xl shadow-md p-6 text-center  hover:shadow-xl  duration-300 w-[350px] h-[320px] mx-auto bg-white flex flex-col justify-center">
              <FaQuoteRight className="absolute top-4 right-4 text-primary text-3xl" />
              <img
                src={user1}
                alt="client"
                className="w-16 h-16 rounded-full object-cover overflow-hidden mx-auto mb-4 border-2 border-primary"
              />
              <p className="text-gray-700   mb-3">
                “Habit Tracker helped me stay consistent with my morning
                routine. Now I start every day productively!”
              </p>
              <h4 className="font-semibold text-base-content">Salah Ahmed</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-center  hover:shadow-xl  duration-300 w-[350px] h-[320px] mx-auto justify-center flex flex-col ">
              <FaQuoteRight className="absolute top-4 right-4 text-primary text-3xl" />
              <img
                src={user2}
                alt="client"
                className="w-16 h-16 rounded-full object-cover overflow-hidden mx-auto mb-4 border-2 border-primary"
              />
              <p className="text-gray-700   mb-3">
                “I’ve built a 30-day streak thanks to the reminder. The clean UI
                and animations make it fun to use!”
              </p>
              <h4 className="font-semibold text-base-content">
                Jhony Englinsh
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white rounded-2xl mx-auto shadow-md p-6 text-center  hover:shadow-xl  duration-300 w-[350px] h-[320px]  flex flex-col justify-center">
              <FaQuoteRight className="absolute top-4 right-4 text-primary text-3xl" />
              <img
                src={user3}
                alt="client"
                className="w-16 h-16 rounded-full object-cover overflow-hidden mx-auto mb-4 border-2 border-primary"
              />
              <p className="text-gray-700   mb-3">
                “Seeing my progress visually keeps me motivated to stay on track
                every single day.”
              </p>
              <h4 className="font-semibold text-base-content">
                Cristina Vale{" "}
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-center  hover:shadow-xl  duration-300 w-[350px] h-[320px] mx-auto flex flex-col justify-center">
              <FaQuoteRight className=" top-4 right-4 absolute text-3xl text-primary " />
              <img
                src={user4}
                alt="client"
                className="w-16 h-16 rounded-full object-cover overflow-hidden mx-auto mb-4 border-2 border-primary"
              />
              <p className="text-gray-700   mb-3">
                “This app made it easy to create healthy habits and actually
                stick to them — love it!”
              </p>
              <h4 className="text-base-content font-semibold ">Mehedi Hasan</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
