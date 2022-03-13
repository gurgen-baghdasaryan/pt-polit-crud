<div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Nombre: {politic.name}</h5>
    <p className="card-text">Partido político: {politic.politicalParty}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sueldo: {politic.salary}</li>
    <li className="list-group-item">Cargo: {politic.Charge}</li>
    <li className="list-group-item">CCAA: {politic.ccaa}</li>
    <li className="list-group-item">Observación: {politic.observations}</li>
    
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
