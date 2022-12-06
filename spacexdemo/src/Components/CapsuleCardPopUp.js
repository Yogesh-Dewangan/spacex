import PopUp from "./PopUp";

export default function CapsuleCardPopUp({capsule, setTrigger}) {
    return <PopUp>
      <div className="card d-inline-block m-4" style={{width: '30rem'}}>
        <h2>{capsule.capsule_serial} Capsule Detailes</h2>
        <ul id={capsule.capsule_serial} className="list-group list-group-flush text-start">
          {capsule.details ? <li className="list-group-item"><b>Capsule Details:</b> {capsule.details}</li> : ''}
          <li className="list-group-item"><b>Capsule Id:</b> {capsule.capsule_id}</li>
          <li className="list-group-item"><b>Capsule Serial:</b> {capsule.capsule_serial}</li>
          <li className="list-group-item"><b>Capsule Original Launch:</b> {capsule.original_launch}</li>
          <li className="list-group-item"><b>Capsule Landing:</b> {capsule.landings}</li>
          <li className="list-group-item"><b>Capsule Reuse Count:</b> {capsule.reuse_count}</li>
          <li className="list-group-item"><b>Capsule Status:</b> {capsule.status}</li>
          <li className="list-group-item"><b>Capsule Type:</b> {capsule.type}</li>
          <li className="list-group-item"><b>Capsule Mission Name:</b> {capsule.missions[0].name}</li>
          <li className="list-group-item"><b>Capsule Mission Flight:</b> {capsule.missions[0].flight}</li>
        </ul>
        <div className="card-footer">{capsule.status}</div>
        <button className='btn btn-danger' onClick={() => setTrigger(false)}>Close</button>
      </div>
    </PopUp>
  }