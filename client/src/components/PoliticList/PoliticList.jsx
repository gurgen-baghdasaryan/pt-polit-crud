import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

import axios from "axios";

const PoliticList = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState([]);

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const getlists = async () => {
      const res = await axios.get("http://localhost:5000/api/politic");
      setList(res.data);
      setShow(res.data.slice(1, 50));
    };
    getlists();
  }, []);

  useEffect(() => {
    const data = list.slice((page-1)*50, page*50)
    setShow(data)
    
  }, [page])
  
  const deletePolitic = async (id) => {
    await axios.delete("hhttp://localhost:5000/api/politic/" + id);
  };
  return (
    <div className="row">
    {/* Pagination box */}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={Math.ceil(list.length / 50)} page={page} onChange={handleChange} />
      </Stack>
    {/* Pagination box */}  
      {console.log(page)}
      {show.map((lista) => (
        <div className="col-md-4 p-2" key={lista._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {lista.name}</h5>
            </div>
            <div className="card-body">
              <p>Partido político: {lista.politicalParty}</p>
              <p>Sueldo: {lista.salary}$</p>
            </div>

            <div className="card-footer d-flex">
              <div className="card-body">
                <Link
                  className="btn btn-outline-success"
                  to={"/politic/" + lista._id}
                >
                  Ver mas
                </Link>
              </div>
              <div className="card-body d-flex justify-content-around">
                <Link
                  className="btn btn-outline-dark"
                  to={"/edit/" + lista._id}
                >
                  <GrUpdate />
                </Link>
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
