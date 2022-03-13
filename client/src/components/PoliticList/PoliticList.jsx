import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imporing material ui
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//imporing React icons
import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
//imporing axios
import axios from "axios";

const PoliticList = () => {
  // State where the LIST of politics stored
  const [list, setList] = useState([]);
  const [show, setShow] = useState([]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //The logic to delete the product through an id
  const deletePolitic = async (id) => {
    await axios.delete("hhttp://localhost:5000/api/politic/" + id);
  };

  // This useEffect we will use as many times as necessary to render the value that we have in our API
  useEffect(() => {
    const getlists = async () => {
      // The logic of this useEffect is that every time there is a change in the list state, render the component to update the information.
      const res = await axios.get("http://localhost:5000/api/politic");
      // In setList we store what we receive from data
      setList(res.data);
      setShow(res.data.slice(1, 50));
    };
    getlists();
  }, []);

  // This useEffect is pagination logic
  useEffect(() => {
    const data = list.slice((page - 1) * 50, page * 50);
    setShow(data);
  }, [page]);

  return (
    <div className="row">
      {/* Pagination render box */}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(list.length / 50)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
      {/* Pagination box */}
      {console.log(page)}

      {/* We tell our state variable to iterate with map */}
      {show.map((lista) => (
        <div className="col-md-4 p-2 " key={lista._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {lista.name}</h5>
            </div>
            <div className="card-body">
              <p>Partido político: {lista.politicalParty}</p>
              <p>Sueldo: {lista.salary}$</p>
            </div>

            <div className="card-footer d-flex">
              {/* The Show more button */}
              <div className="card-body">
                <Link
                  className="btn btn-outline-success"
                  to={"/politic/" + lista._id}
                >
                  Ver más
                </Link>
              </div>
              <div className="card-body d-flex justify-content-around">
                {/* The Edit button */}

                <Link
                  className="btn btn-outline-dark"
                  to={"/edit/" + lista._id}
                >
                  <GrUpdate />
                </Link>
                {/* The delete button */}
                <button
                  className="btn btn-outline-dark "
                  onClick={() => deletePolitic(lista._id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoliticList;
