import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

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

  //   update my toy data
  const handleUpdate = (event) => {
    // prevent form loading
    event.preventDefault();

    // get data
    const form = event.target;
    const seller = form.sellerName.value;
    const email = form.sellerEmail.value;
    const toy_name = form.toyName.value;
    const sub_category = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.stock.value;
    const image = form.image.value;
    const description = form.description.value;

    const updatedToy = {
      seller,
      email,
      toy_name,
      sub_category,
      price,
      rating,
      available_quantity,
      image,
      description,
    };

    // fetch data
    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Successful!", "You updated your toy data!", "success");
        }
      });
  };

  return (
    <section className="toy-container">
      <h1 className="text-center text-primary text-3xl font-bold mb-7">
        Update Toy Data
      </h1>

      <form onSubmit={handleUpdate}>
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
