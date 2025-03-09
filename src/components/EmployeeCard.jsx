import React from "react";

const EmployeeCard =({ EmployeePhoto, FullName, JobPosition, Department, Email })=>{

    return(
        <>
        <div className="border rounded-1g shadow-1g bg-tomato">
            <img className="border rounded-2g" src = {EmployeePhoto} alt = {FullName} />
            <h2>{FullName}</h2>
            <p>{JobPosition}</p>
            <p>{Department}</p>
            <p>{Email}</p>
        </div>
        </>
    )

}

export default EmployeeCard