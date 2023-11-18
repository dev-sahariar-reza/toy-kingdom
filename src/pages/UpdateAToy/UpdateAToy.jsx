import { useLoaderData } from "react-router-dom";

const UpdateAToy = () => {
  const toy = useLoaderData();
  const {
    _id,
    seller,
    email,
    rating,
    toy_name,
    sub_category,
    price,
    available_quantity,
    image,
    description,
  } = toy;
  return (
    <section className="toy-container">
      <h1 className="text-center text-primary text-3xl font-bold mb-7">
        Update Toy Data
      </h1>

      <form>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Toy Name
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="toyName"
              defaultValue={toy_name}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Seller Name
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              defaultValue={seller}
              name="sellerName"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Seller Email
              </span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              defaultValue={email}
              name="sellerEmail"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Toy Category
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="subCategory"
              defaultValue={sub_category}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">Price</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="price"
              defaultValue={price}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">Stock</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="stock"
              defaultValue={available_quantity}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Ratings:
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="rating"
              defaultValue={rating}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Photo Url:
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="image"
              defaultValue={image}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Description:
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered input-lg w-full"
              name="description"
              defaultValue={description}
            />
          </div>
        </div>

        <button className="btn btn-block btn-primary my-8">Submit</button>
      </form>
    </section>
  );
};

export default UpdateAToy;
