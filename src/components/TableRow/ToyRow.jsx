const ToyRow = ({ toy }) => {
  const {
    _id,
    seller,
    seller_email,
    toy_name,
    sub_category,
    price,
    rating,
    available_quantity,
    image,
    description,
  } = toy;
  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
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
        <button className="btn btn-primary">View details</button>
      </td>
    </tr>
  );
};

export default ToyRow;
