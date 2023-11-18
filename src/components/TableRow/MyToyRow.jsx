import { Link } from "react-router-dom";

const MyToyRow = ({ toy }) => {
  const { _id, toy_name, sub_category, price, available_quantity } = toy;
  return (
    <tr>
      <td>{toy_name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{available_quantity}</td>
      <td>
        <Link>
          <button className="btn btn-primary">Update</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-primary">Delete</button>
      </td>
    </tr>
  );
};

export default MyToyRow;
