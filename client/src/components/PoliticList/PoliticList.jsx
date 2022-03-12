import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaRegTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

import "./PoliticList.css";
import axios from "axios";

const PoliticList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getlists = async () => {
      const res = await axios.get("http://localhost:5000/api/politic/");
      setList(res.data);
    };
    getlists();
  }, []);
  const deletePolitic = async (id) => {
    await axios.delete("hhttp://localhost:5000/api/politic/" + id);
  };
  return (
    <div className="row">
      {list.map((lista) => (
        <div className="col-md-4 p-2" key={lista._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {lista.name}</h5>
            </div>
            <div className="card-body">
              <p>Partido polític: {lista.politicalParty}</p>
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
