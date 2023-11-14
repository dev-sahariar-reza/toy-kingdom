import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <section className="toy-container">
      <div className="h-[420px] bg-cover bg-no-repeat bg-[url(https://i.ibb.co/Qf2VSKX/rsz-1banner-min.jpg)] rounded-lg py-16 px-14">
        <h1 className="text-3xl font-bold mb-3">Where Imagination Reigns:</h1>
        <h1 className="text-3xl font-bold mb-5">
          Your Ultimate Playground at Toy Kingdom!
        </h1>
        <p className="w-1/2 text-justify font-semibold mb-7">
          Toy Kingdom is not just a store; it's a magical realm where dreams
          come to life. Step into a wonderland of endless joy and discovery,
          where shelves are adorned with the latest toys, games, and novelties.
          From classic treasures to cutting-edge delights, Toy Kingdom is every
          child's and collector's paradise.
        </p>
        <button className="toy-button">
          Learn More <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default Banner;
