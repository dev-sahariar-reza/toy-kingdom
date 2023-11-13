import { useLoaderData } from "react-router-dom";
import ToyRow from "../../components/TableRow/ToyRow";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <section className="toy-container">
      <h1 className="text-2xl font-bold mb-6">Total Toys: {toys.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl text-primary"></th>
              <th className="text-xl text-primary">Toy Image</th>
              <th className="text-xl text-primary">Toy Name</th>
              <th className="text-xl text-primary">Seller Name</th>
              <th className="text-xl text-primary">Sub Category</th>
              <th className="text-xl text-primary">Price</th>
              <th className="text-xl text-primary">Quantity</th>
              <th className="text-xl text-primary"></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
