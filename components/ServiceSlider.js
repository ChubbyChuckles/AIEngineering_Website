// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxGear,
  RxDashboard,
  RxCube,
  RxBarChart,
  RxLightningBolt,
  RxCode,
  RxPencil2,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxGear />,
    title: "Task Automation",
    description:
      "Streamline workflows with custom automation solutions, enhancing efficiency using scripting and software integration.",
  },
  {
    icon: <RxDashboard />,
    title: "Research & Development",
    description:
      "Drive innovation through cutting-edge R&D, leveraging engineering and computational expertise to develop novel solutions.",
  },
  {
    icon: <RxCube />,
    title: "Simulation",
    description:
      "Perform advanced simulations for engineering and scientific applications using tools like ANSYS and MATLAB.",
  },
  {
    icon: <RxBarChart />,
    title: "Data Science",
    description:
      "Transform data into insights with statistical analysis, machine learning, and visualization using Python and Tableau.",
  },
  {
    icon: <RxLightningBolt />,
    title: "AI Integration",
    description:
      "Integrate AI models into applications for predictive analytics and intelligent automation using TensorFlow and PyTorch.",
  },
  {
    icon: <RxCode />,
    title: "Programming",
    description:
      "Develop robust software solutions with languages like Python, JavaScript, and C++ for diverse applications.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Create user-centric UI/UX and engineering designs using Figma, Adobe Suite, and CAD tools like AutoCAD.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] 
            transition-all duration-300"
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all
                duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;