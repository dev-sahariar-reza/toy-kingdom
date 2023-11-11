import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../assets/css/SwiperCSS/Gallery.css";

const Gallery = () => {
  return (
    <section className="toy-container">
      <h1 className="text-center font-extrabold  text-white text-4xl bg-[#7743DB] p-5 rounded-lg mb-8">
        GALLERY
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/K9kFd5T/gallery-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FBL6vX8/gallery-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/TgNQqVd/gallery-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ckGvMbX/gallery-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SXdgQ88/gallery-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/RTZ2FrR/gallery-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/zmHw67b/gallery-7.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;

/*







*/
