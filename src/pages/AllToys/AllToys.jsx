import { useLoaderData } from "react-router-dom";
import ToyRow from "../../components/TableRow/ToyRow";

const AllToys = () => {
  const toysData = useLoaderData();

  return (
    <section className="toy-container">
      <h1 className="text-2xl font-bold mb-6">Total Toys: {toysData.length}</h1>

      <table className="table">
        <thead>
          <tr>
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
          {toysData.map((toy) => (
            <ToyRow key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllToys;
