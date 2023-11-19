import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext } from "react";

const ToyRow = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    seller,
    toy_name,
    sub_category,
    price,
    available_quantity,
    image,
  } = toy;

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Alert!!!",
        text: "You have to login to see the toy details!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Successful!",
            text: "Navigate to Login Page.",
            icon: "success",
          });
          navigate(`/toyDetails/${_id}`);
        }
      });
    }
  };

  return (
    <tr>
      <td>
        <div className="mask mask-squircle w-20 h-20">
          <img src={image} alt="Toy Picture" loading="lazy" />
        </div>
      </td>
      <td className="font-bold text-base text-primary">{toy_name}</td>
      <td className="font-bold text-base text-primary">{seller}</td>
      <td className="font-bold text-base text-primary">{sub_category}</td>
      <td className="font-bold text-base text-primary">${price}.00</td>
      <td className="font-bold text-base text-primary">
        {available_quantity} pc
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleViewDetails}>
          View details
        </button>
      </td>
    </tr>
  );
};

export default ToyRow;
