

export default function CapsuleTable({capsules, query, isLoading, currentCapsules}) {

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    const keys = ['status', 'type'];

    const search = (data) => {
        return data.filter(item =>
            keys.some(key => item[key].toLowerCase().includes(query))
            // item.original_launch ? item.original_launch.split('T')[0] : '')
        )
    }

    return <>
    <table className="table table-striped table-bordered">
    <thead>
        <tr>
            <th>
                Capsule_Serial
            </th>
            <th colSpan={2}>
                Original_Launch
            </th>
            <th>
                Status
            </th>
            <th colSpan={2}>
                Type
            </th>
        </tr>
    </thead>
    <tbody >
        {query ? search(capsules).map(capsule => {
            return <CapsuleTableRows key={capsule.capsule_serial} capsule={capsule} />
        }) : currentCapsules.map(capsule => {
            return <CapsuleTableRows key={capsule.capsule_serial} capsule={capsule} />
        })}
    </tbody>
    </table>
    </>
}

function CapsuleTableRows({capsule}) {
    return <tr id={capsule.capsule_serial}>
        <td>
            {capsule.capsule_serial}
        </td>
        <td colSpan={2}>
            {capsule.original_launch}
        </td>
        <td>
            {capsule.status}
        </td>
        <td colSpan={2}>
            {capsule.type}
        </td>
    </tr>
}