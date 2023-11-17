import { useLoaderData } from "react-router-dom";
import ToyRow from "../../components/TableRow/ToyRow";
import { useState } from "react";
import Swal from "sweetalert2";

const AllToys = () => {
  const toysData = useLoaderData();
  const [toys, setToys] = useState(toysData);

  // delete a toy from all toy collection
  const deleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This toy has been deleted.",
                icon: "success",
              });

              const remaining = toys.filter((toy) => toy._id !== id);
              console.log(remaining);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="toy-container">
      <h1 className="text-2xl font-bold mb-6">Total Toys: {toys.length}</h1>

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
            <ToyRow key={toy._id} toy={toy} deleteToy={deleteToy} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllToys;
