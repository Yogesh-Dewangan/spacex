import { useState } from 'react';
import CapsuleCardPopUp from './CapsuleCardPopUp';

export default function CapsuleCard({capsule, capsules}) { //trigger, popupId, setTrigger, onClick

    const [trigger, setTrigger] = useState(false);
    const [popupId, setPopupId] = useState('');

    const onClick = (e) => {
        setPopupId(e.currentTarget.id);
        setTrigger(true);
    }

  return <>
    <div className="card d-inline-block m-4" id={capsule.capsule_serial} onClick={(e) => onClick(e)} style={{width: '10rem'}}>
      <ul className="list-group list-group-flush">
        {capsule.details ? <li className="list-group-item">{ capsule.details}</li> : ''}
        <li className="list-group-item">{capsule.capsule_id}</li>
        <li className="list-group-item">{capsule.capsule_serial}</li>
        <li className="list-group-item">{capsule.original_launch}</li>
      </ul>
      <div className="card-footer">{capsule.status}</div>
    </div>
     {trigger ? capsules.map(capsule => {
        if (capsule.capsule_serial === popupId) {
            // console.log('capsule.mission[0].name', capsule.missions[0].name);
            return <CapsuleCardPopUp key={capsule.capsule_serial} setTrigger={setTrigger} capsule={capsule} />
        }
      }) : ''}
  </>
}
