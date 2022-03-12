import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CreatePolitic = () => {
  const valueInitial = {
    name: "",
    politicalParty: "",
    Charge: "",
    ccaa: "",
    salary: 0,
    observations: "",
  };

  let { id } = useParams();

  const [politic, setPolitic] = useState(valueInitial);

  const [subId, setSubId] = useState(id);

  const dataCapture = (e) => {
    const { name, value } = e.target;
    setPolitic({ ...politic, [name]: value });
  };
  const dataSave = async (e) => {
    e.preventDefault();
    const newPolitic = {
      name: politic.name,
      politicalParty: politic.politicalParty,
      Charge: politic.Charge,
      ccaa: politic.ccaa,
      salary: politic.salary,
      observations: politic.observations,
    };
    await axios.post("http://localhost:5000/api/politic/", newPolitic);
    setPolitic({ ...valueInitial });
  };
  
  const updatePolitic = async (e) => {
    e.preventDefault();
    const newUser = {
      name: politic.name,
      politicalParty: politic.politicalParty,
      Charge: politic.Charge,
      ccaa: politic.ccaa,
      salary: politic.salary,
      observations: politic.observations,
    };
    await axios.put("http://localhost:5000/api/politic/" + subId, newUser);
    setPolitic({ ...valueInitial });
    setSubId("");
  };
  //logic to make the API request

  const editOne = async (idValue) => {
    const res = await axios.get(
      "http://localhost:5000/api/politic/" + idValue 
    );
    setPolitic({
      name: res.data.name,
      politicalParty: res.data.politicalParty,
      Charge: res.data.Charge,
      ccaa: res.data.ccaa,
      salary:res.data.salary, 
      observations:res.data.observations, 
    });

  };

  useEffect(() => {
    if (subId !== "") {
      editOne(subId);
    }
  }, [subId]);
  return (
    <div className="col-md-5 offset-md-3">
      <div className="card card-body">
        <form onSubmit={dataSave}>
          <h2 className="text-center">Nuevo perfil</h2>
          <div className="mb-3">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              required
              name="name"
              value={politic.name}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            <label>Partido polític:</label>
            <input
              type="text"
              className="form-control"
              placeholder="politicalParty"
              required
              name="politicalParty"
              value={politic.politicalParty}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            <label>Cargo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Charge"
              required
              name="Charge"
              value={politic.Charge}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            <label>ccaa:</label>
            <input
              type="text"
              className="form-control"
              placeholder="ccaa..."
              name="ccaa"
              value={politic.ccaa}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            <label>Salario:</label>
            <input
              type="text"
              className="form-control"
              placeholder="salary"
              required
              name="salary"
              value={politic.salary}
              onChange={dataCapture}
            />
          </div>
          <div className="mb-3">
            <label>Observación:</label>
            <input
              type="text"
              className="form-control"
              placeholder="observations"
              required
              name="observations"
              value={politic.observations}
              onChange={dataCapture}
            />
          </div>
          
          <button className="btn btn-primary form-control">Guardar perfil</button>
        </form>
        <form onSubmit={updatePolitic}>
          <button className="btn btn-primary form-control mt-1">
          Actualizar perfil
          </button>
        </form>
      </div>
    </div>
    );
};

export default CreatePolitic;
