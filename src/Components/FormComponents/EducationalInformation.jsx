import { useState } from "react";
import { v4 as uuid } from 'uuid';

import validator from "../../helper/validator";

const EducationalInformation = ({ updateEducation }) => {

  const [institute, setInstitute] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [error, setError] = useState([]);


  const handleSubmit = () => {
    const uniqueId = uuid();
    const errorField = validator({ institute, year, degree });
    if (errorField.length > 0) {
      setError(errorField);
      return;
    }
    const data = {
      [uniqueId]: {
        institute: institute,
        year: year,
        degree: degree
      }
    }
    updateEducation(data);
    setDisableSubmit(true)
  }


  return (
    <>
      <div className="informationClub">
        <div className="informationField">
          <label htmlFor="1">Institute</label>
          <input type="text" id="1" name="institute"
            className={`form-control w-100 ${error.includes("institute") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            placeholder="Enter Institute"></input>
        </div>
        <div className="informationField">
          <label htmlFor="2">Year</label>
          <input type="text" id="2" name="year"
            className={`form-control w-100 ${error.includes("year") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter Year"></input>
        </div>
        <div className="informationField">
          <label htmlFor="3">Degree</label>
          <input type="text" id="3" name="degree"
            className={`form-control w-100 ${error.includes("degree") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Enter degree"></input>
        </div>
      </div>
      <button className="btn btn-primary" disabled={disableSubmit} onClick={handleSubmit}>Submit Education</button>

    </>
  )
}

export default EducationalInformation;