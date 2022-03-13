import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";

import axios from "axios";
const Politic = () => {
  const [politic, setPolitic] = useState({});


  const { id } = useParams();

  useEffect(() => {
    const getPoliticById = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/politic/${id}`
      );
      setPolitic(res.data);
    };
    getPoliticById();
  }, []);
  return (
    <>
      {
        <div className="card mb-3 d-flex flex-column" style={{ width: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4"></div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h5 className="card-title">Nombre: {politic.name}</h5>
                <p className="card-text">Partido polític: {politic.politicalParty}</p>
                <p className="card-text">Sueldo: {politic.salary}</p>
                <p className="card-text">Cargo: {politic.Charge}</p>
                <p className="card-text">CCAA: {politic.ccaa}</p>
                <p className="card-text">Observación: {politic.observations}</p>
                <div className="card-body d-flex justify-content-around">
                <Link
                className="btn btn-outline-dark"
                to={"/edit/" + politic._id}
                >
                <GrUpdate />
              </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Politic;
