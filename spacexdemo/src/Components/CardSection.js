import { useState } from "react";
import CapsuleCard from "./CapsuleCard";
import Pagination from "./Pagination";

export default function CardSection({ capsules, isLoading, query }) {
    const [currPage, setCutrrPage] = useState(1);
    const [capsulesPerPage, setCapsulesPerPage] = useState(5);
    const indexOfLastCapsule = currPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = capsules.slice(
        indexOfFirstCapsule,
        indexOfLastCapsule
    );

    const paginate = (pageNumber) => setCutrrPage(pageNumber);

    const keys = ["status", "type"];

    const search = (data) => {
        return data.filter(
            (item) => keys.some((key) => item[key].toLowerCase().includes(query))
            // item.original_launch ? item.original_launch.split('T')[0] : '')
        );
    };

    return (
        <div className="container my-5">
            <h4 className="h4 text-center text-info">Click on Card to know more about the Capsule</h4>
            {query
                ? search(capsules).map((capsule) => {
                    return (
                        <CapsuleCard key={capsule.capsule_serial} capsule={capsule} />
                    );
                })
                : currentCapsules.map((capsule) => {
                    return (
                        <CapsuleCard
                            key={capsule.capsule_serial}
                            capsules={capsules}
                            isLoading={isLoading}
                            currentCapsules={currentCapsules}
                            capsule={capsule}
                        />
                    ); // trigger={trigger} popupId={popupId} onClick={onClick} setTrigger={setTrigger} setPopupId={setPopupId}
                })}
            <div className="container">
                {query ? '' : <Pagination
                    datasPerPage={capsulesPerPage}
                    totalDatas={capsules.length}
                    paginate={paginate}
                />}
            </div>
            {/* <Pagination datasPerPage={capsulesPerPage} totalDatas={capsules.length} paginate={paginate}/> */}
        </div>
    );
}
