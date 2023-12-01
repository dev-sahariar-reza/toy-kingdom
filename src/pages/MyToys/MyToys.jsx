import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "../../components/TableRow/MyToyRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const navigate = useNavigate();

  const url = `https://tk-server-2.onrender.com/toy?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyToys(data);
        } else {
          navigate("/");
        }
      });
  }, []);

  // delete one toy of my toy collection
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
        fetch(`https://tk-server-2.onrender.com/toys/${id}`, {
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

              const remaining = myToys.filter((toy) => toy._id !== id);
              console.log(remaining);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="toy-container">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToyRow key={toy._id} toy={toy} deleteToy={deleteToy} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
