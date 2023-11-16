import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toyData = useLoaderData();
  const {
    _id,
    seller,
    seller_email,
    toy_name,
    sub_category,
    price,
    rating,
    available_quantity,
    image,
    description,
  } = toyData;

  return (
    <section className="toy-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center shadow-xl w-4/5 mx-auto rounded-xl p-6">
        <div>
          <img
            src={image}
            alt="toy image"
            loading="lazy"
            className="w-full lg:w-[550px] h-full lg:h-[550px] rounded-xl"
          />
        </div>
        <div className="ml-0 lg:ml-6">
          <h1 className="text-2xl font-bold mb-6">{toy_name}</h1>
          <p className="mb-4 text-lg">
            <span className="font-bold">Sub-Category:</span> {sub_category}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-bold">Stock:</span> {available_quantity}
          </p>
          <p className="mb-4 text-lg text-justify">
            <span className="font-bold">Details:</span> {description}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-bold">Seller:</span> {seller}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-bold">Seller Email:</span> {seller_email}
          </p>
          <div className="mb-6 text-lg flex items-center">
            <span className="font-bold mr-5">Ratings:</span>
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
          </div>
          <div className="flex items-center mb-5">
            <Link>
              <button className="btn btn-primary mr-5">Add to Cart</button>
            </Link>
            <Link to="/allToys">
              <button className="btn btn-outline btn-primary">
                Back To All Toys
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
