import { useContext, useState } from "react";
import loginImage from "../../assets/images/login&register/login.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  // registration with email & password
  const handleRegistration = (event) => {
    // prevent form loading
    event.preventDefault();

    // get data from client
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        Swal.fire({
          title: "Congratulations!",
          text: "Your registration is successful!",
          icon: "success",
        });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <section className="toy-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
        <div>
          <img
            src={loginImage}
            alt="login poster image"
            loading="lazy"
            className="w-full"
          />
        </div>

        <div>
          <h1 className="text-primary text-3xl text-center font-extrabold mb-8">
            Register Page
          </h1>

          <form onSubmit={handleRegistration}>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Harry Potter"
                name="name"
              />
            </div>

            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Your Photo URL
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Photo of Profile Picture"
                name="photo"
              />
            </div>

            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Your Email
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="harry-potter@hogwarts.com"
                name="email"
              />
            </div>

            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Your Password
                </span>
              </label>
              {control ? (
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Password"
                  name="password"
                />
              ) : (
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Your Password"
                  name="password"
                />
              )}
            </div>

            <div className="form-control w-full mb-6">
              <label className="cursor-pointer label">
                {control ? (
                  <span className="label-text text-base font-bold">
                    Hide Password
                  </span>
                ) : (
                  <span className="label-text text-base font-bold">
                    Show Password
                  </span>
                )}
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  onClick={() => setControl(!control)}
                />
              </label>
            </div>

            <button className="toy-button mb-5">Register</button>
          </form>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card rounded-box place-items-center">
              <Link to="/login">
                <button className="btn btn-active btn-link font-bold">
                  Already have an account? Please Login
                </button>
              </Link>
            </div>

            <div className="divider">OR</div>

            <div className="grid h-20 card rounded-box place-items-center">
              <button className="toy-button">Register with Google</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
