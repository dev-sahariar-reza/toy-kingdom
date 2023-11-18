import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddAToy = (event) => {
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

    const newToy = {
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
    console.log(newToy);

    // fetch all toys
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Successful!", "You Added A New Toy!", "success");
          form.reset();
        }
      });
  };

  return (
    <section className="toy-container">
      <h1 className="text-center text-primary text-3xl font-bold mb-7">
        Add A New Toy In The Toy Collection
      </h1>

      <form onSubmit={handleAddAToy}>
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
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Ratings:{" "}
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="rating"
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
            />
          </div>
        </div>

        <button className="btn btn-block btn-primary my-8">Submit</button>
      </form>
    </section>
  );
};

export default AddAToy;
