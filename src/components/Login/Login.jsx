import { useState } from "react";
import loginImage from "../../assets/images/login&register/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [control, setControl] = useState(false);
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
            Login Page
          </h1>

          <form>
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

            <button className="btn btn-primary font-bold mb-5">Login</button>
          </form>

          <Link to="/register">
            <button className="btn btn-active btn-link font-bold">
              Create an account.
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
