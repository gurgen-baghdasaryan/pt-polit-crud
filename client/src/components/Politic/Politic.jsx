import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";
const Politic = () => {
  const [politic, setPolitic] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getPoliticById = async () => {
      const res = await axios.get(`http://localhost:5000/api/politic/${id}`);
      setPolitic(res.data);
    };
    getPoliticById();
  }, []);
  return (
    <>
      {
        <div
          className="card bg-light d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nombre: {politic.name}</h5>
              <p className="card-text">
                Partido político: {politic.politicalParty}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Sueldo: {politic.salary}</li>
              <li className="list-group-item">Cargo: {politic.Charge}</li>
              <li className="list-group-item">CCAA: {politic.ccaa}</li>
              <li className="list-group-item">
                Observación: {politic.observations}
              </li>
            </ul>
            <div className="card-body">
              <Link
                className="btn btn-outline-dark"
                to={"/edit/" + politic._id}
              >
                Editar
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Politic;
