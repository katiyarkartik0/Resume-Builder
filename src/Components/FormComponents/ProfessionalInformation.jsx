import { useState } from "react";
import { v4 as uuid } from 'uuid';
import validator from "../../helper/validator";
const ProfessionalInformation = ({ updateProfessionalInformation, allowSubmit }) => {
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [designation, setDesignation] = useState("");

  const [error, setError] = useState([]);

  const [disableSubmit, setDisableSubmmit] = useState(false)
  const handleSubmit = () => {
    const uniqueId = uuid();
    const data = { [uniqueId]: { company, year, designation } }
    const errorField = validator({ company, year, designation });
    if (errorField.length > 0) {
      setError(errorField);
      return;
    }
    updateProfessionalInformation(data);
    setDisableSubmmit(true)
  }
  return (
    <>
      <div className="informationClub">
        <div className="informationField">
          <label htmlFor="1">Company</label>
          <input type="text" id="1" name="company"
            className={`form-control w-100 ${error.includes("company") ? "error" : ""} ${disableSubmit ? "valid" : ""}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter Company"
          ></input>
        </div>
        <div className="informationField">
          <label htmlFor="2">Year</label>
          <input type="text" id="2" name="year"
            className={`form-control w-100 ${error.includes("year") ? "error" : ""} ${disableSubmit ? "valid" : ""}`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter Year"
          ></input>
        </div>
        <div className="informationField">
          <label htmlFor="3">Designation</label>
          <input type="text" id="3" name="designation"
            className={`form-control w-100 ${error.includes("designation") ? "error" : ""} ${disableSubmit ? "valid" : ""}`}
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter Designation"
          ></input>
        </div>
      </div>
      <button className="btn btn-primary" disabled={disableSubmit} onClick={handleSubmit}>Submit Exp</button>
    </>
  )
}

export default ProfessionalInformation;