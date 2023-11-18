import { Link } from "react-router-dom";

const MyToyRow = ({ toy, deleteToy }) => {
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
        <button className="btn btn-primary" onClick={() => deleteToy(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
