import { Link } from "react-router-dom";

const ToyRow = ({ toy, deleteToy }) => {
  const {
    _id,
    seller,
    toy_name,
    sub_category,
    price,
    available_quantity,
    image,
  } = toy;

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
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-primary">View details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToyRow;
