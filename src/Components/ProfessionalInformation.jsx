import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const ProfessionalInformation = ({ updateProfessionalInformation, allowSubmit }) => {
    const [company, setCompany] = useState("");
    const [year, setYear] = useState("");
    const [designation, setDesignation] = useState("");

    const [disableSubmit, setDisableSubmmit] = useState(false)
    const handleSubmit = () => {
        const uniqueId = uuid();
        const data = { [uniqueId]: { company, year, designation } }
        // const data = { [company]: { year: year, designation: designation } }
        updateProfessionalInformation(data);
        setDisableSubmmit(true)
    }
    return (
        <>
            <label htmlFor="1">Company</label>
            <input type="text" id="1" name="company" value={company} onChange={(e) => setCompany(e.target.value)}></input>
            <br></br>
            <label htmlFor="2">Year</label>
            <input type="text" id="2" name="year" value={year} onChange={(e) => setYear(e.target.value)}></input>
            <br></br>
            <label htmlFor="3">Designation</label>
            <input type="text" id="3" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)}></input>
            <br></br>
            <button disabled={disableSubmit} onClick={handleSubmit}>Submit Exp</button>
        </>
    )
}

export default ProfessionalInformation;