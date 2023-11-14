import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/images/404/404-error.jpg";
import { FaArrowRight } from "react-icons/fa6";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="toy-container">
      <div className="text-center mb-5">
        <img
          src={errorImage}
          alt="error-picture"
          className="w-1/2 mx-auto mb-5"
        />
        <h3 className="font-bold text-4xl text-primary mb-5">
          {error?.message}
        </h3>
        <Link to="/">
          <button className="toy-button">
            Return to home <FaArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
