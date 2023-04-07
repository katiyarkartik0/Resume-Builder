import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const EducationalInformation = ({ updateEducation, allowSubmit }) => {

    const [institute, setInstitute] = useState("");
    const [year, setYear] = useState("");
    const [degree, setDegree] = useState("");

    const [disableSubmit, setDisableSubmit] = useState(false)

    const handleSubmit = () => {
        const uniqueId = uuid();
        const data = {
            [uniqueId]: {
                institute: institute,
                year: year,
                degree: degree
            }
        }
        // const data = { [institute]: { year: year, degree: degree } }
        updateEducation(data);
        setDisableSubmit(true)
    }


    return (
        <>
            <label htmlFor="1">Institute</label>
            <input type="text" id="1" name="institute" value={institute} onChange={(e) => setInstitute(e.target.value)}></input>
            <br></br>
            <label htmlFor="2">Year</label>
            <input type="text" id="2" name="year" value={year} onChange={(e) => setYear(e.target.value)}></input>
            <br></br>
            <label htmlFor="3">Degree</label>
            <input type="text" id="3" name="degree" value={degree} onChange={(e) => setDegree(e.target.value)}></input>
            <br></br>
            <button disabled={disableSubmit} onClick={handleSubmit}>Submit Education</button>
        </>
    )
}

export default EducationalInformation;