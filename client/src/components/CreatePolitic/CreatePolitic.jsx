import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CreatePolitic = () => {
  // The initial value of our states
  const valueInitial = {
    name: "",
    politicalParty: "",
    Charge: "",
    ccaa: "",
    salary: 0,
    observations: "",
  };

  //We can capture within the id the parameter that we are receiving from the URL
  let { id } = useParams();
  // State where the politic is stored
  const [politic, setPolitic] = useState(valueInitial);
  // State where the id is stored
  const [subId, setSubId] = useState(id);
  // Here is where we capture the data by value
  const dataCapture = (e) => {
    const { name, value } = e.target;
    setPolitic({ ...politic, [name]: value });
  };
  // Here we store the captured data and send it to our API
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
    // Here we create the post logic
    await axios.post("http://localhost:5000/api/politic", newPolitic);
    // Updating the initial value
    setPolitic({ ...valueInitial });
  };

  //The function to update the product
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
    //The put petition logic concatenated with subId
    await axios.put("http://localhost:5000/api/politic/" + subId, newUser);
    setPolitic({ ...valueInitial });
    // Clean up our state
    setSubId("");
  };
  //logic to make the API request
  const editOne = async (idValue) => {
    const res = await axios.get("http://localhost:5000/api/politic/" + idValue);
    setPolitic({
      name: res.data.name,
      politicalParty: res.data.politicalParty,
      Charge: res.data.Charge,
      ccaa: res.data.ccaa,
      salary: res.data.salary,
      observations: res.data.observations,
    });
  };

  // The logic of this useEffect is if the id has value, do a function where we get request
  useEffect(() => {
    if (subId !== "") {
      editOne(subId);
    }
  }, [subId]);
  return (
    <div className="col-md-5 offset-md-3">
      <div className="card card-body">
        {/* The event onSubmit allows us to send the information of saved data */}
        <form onSubmit={dataSave}>
          <h2 className="text-center">Nuevo perfil</h2>
          <div className="mb-3">
            {/* Enter politic name */}
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="..."
              required
              name="name"
              value={politic.name}
              onChange={dataCapture}
            />
          </div>
          {/* Enter politicalParty */}
          <div className="mb-3">
            <label>Partido político:</label>
            <input
              type="text"
              className="form-control"
              placeholder="..."
              required
              name="politicalParty"
              value={politic.politicalParty}
              onChange={dataCapture}
            />
          </div>
          {/* Enter Charge */}
          <div className="mb-3">
            <label>Cargo:</label>
            <input
              type="text"
              className="form-control"
              placeholder="..."
              required
              name="Charge"
              value={politic.Charge}
              onChange={dataCapture}
            />
          </div>
          {/* Enter CCAA */}
          <div className="mb-3">
            <label>CCAA:</label>
            <input
              type="text"
              className="form-control"
              placeholder="..."
              name="ccaa"
              value={politic.ccaa}
              onChange={dataCapture}
            />
          </div>
          {/* Enter salary */}
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
          {/* Enter observations */}
          <div className="mb-3">
            <label>Observación:</label>
            <input
              type="text"
              className="form-control"
              placeholder="..."
              required
              name="observations"
              value={politic.observations}
              onChange={dataCapture}
            />
          </div>
          {/* Our save  button */}
          <button className="btn btn-primary form-control">
            Guardar perfil
          </button>
        </form>
        {/* The event onSubmit allows us to send the information we want to update */}
        <form onSubmit={updatePolitic}>
          {/* Our Update  button */}
          <button className="btn btn-primary form-control mt-1">
            Actualizar perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePolitic;
