import { useEffect, useRef, useState } from 'react';
import CapsuleTable from './CapsuleTable';
import Pagination from './Pagination';

export default function FormSection({capsules, isLoading, query, setQuery}) {

    const [currPage, setCutrrPage] = useState(1);
    const [capsulesPerPage, setCapsulesPerPage] = useState(5);
    const indexOfLastCapsule = currPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = capsules.slice(indexOfFirstCapsule, indexOfLastCapsule)

    const paginate = (pageNumber) => setCutrrPage(pageNumber)


    return <div className='container my-5'>
            <label htmlFor='capsule-status'>Select By Status</label>
            <select id='capsule-status' className="form-select mb-3" aria-label="Default select example"
                onChange={(e) => setQuery(e.target.value)}
            >   
                <option value=''>All</option>
                <option value="active">Active</option>
                <option value="retired">Retired</option>
                <option value="unknown">Unknown</option>
            </select>

            <label htmlFor='capsule-type'>Select By Type</label>
            <select id='capsule-type' className="form-select mb-3" aria-label="Default select example"
                onChange={(e) => setQuery(e.target.value)}
            >
                <option value=''>All</option>
                <option value="dragon 1.0">Dragon 1.0</option>
                <option value="dragon 1.1">Dragon 1.1</option>
                <option value="dragon 2.0">Dragon 2.0</option>
                
            </select>

            <input 
            className="form-control mb-3" 
            id="myInput" 
            ype="text" 
            placeholder="Search by Status or Type of Capsule..."
            value={query}
            onChange={(e) => {
                setQuery(e.target.value)
                // console.log('onKeyUp', query);
            }}
            hidden
        />
            <CapsuleTable capsules={capsules} query={query} isLoading={isLoading} currentCapsules={currentCapsules}/>
            <div className='container'>
                {query ?'' : <Pagination datasPerPage={capsulesPerPage} totalDatas={capsules.length} paginate={paginate}/>}
            </div>
        </div>
}