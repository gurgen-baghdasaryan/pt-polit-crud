import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";
const Politic = () => {
  // State where the politic is stored
  const [politic, setPolitic] = useState({});

  // Id of product
  const { id } = useParams();
   
  // The logic of this useEffect allows to find a specific politic by the id
  useEffect(() => {
    const getPoliticById = async () => {
      const res = await axios.get(`https://politicapp.herokuapp.com/api/politic/${id}`);
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
                {/* The profuct information part*/}
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
            {/* The edit button */}
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
