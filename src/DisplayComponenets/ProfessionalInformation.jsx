import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../store/slices/resumeSlice";
import { useState } from "react";

const ProfessionalInformation = ({ data, uniqueId }) => {
    const [editMode, setEditMode] = useState(false);
    const information = data[uniqueId];
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const dispatch = useDispatch();

    const [company, setComapany] = useState(information.company);
    const [year, setYear] = useState(information.year);
    const [designation, setDesignation] = useState(information.designation);

    const handleEditButton = () => {
        setEditMode(true);
    }

    const handleSaveButton = () => {
        let { professionalData } = resumeDetails;
        professionalData = { ...professionalData, [uniqueId]: { company, year, designation } };
        let updatedResume = { ...resumeDetails, professionalData };
        dispatch(updateResume(updatedResume));
        setEditMode(false);
    }

    const renderProfessionalDetails = () => (
        <>
            <div>Company</div>
            <h3>{company}</h3>
            <div>Year</div>
            <h3>{year}</h3>
            <div>Designation</div>
            <h3>{designation}</h3>
        </>
    )


    const editProfessionalDetails = () => {
        return (
            <>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company"
                    value={company}
                    onChange={(e) => setComapany(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="year">Year</label>
                <input type="text" id="year" name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                ></input>
                <br></br>
            </>
        )
    }

    return (
        <>
            {!editMode && renderProfessionalDetails()}
            {!editMode && <button onClick={handleEditButton}>Edit Information</button>}
            {editMode && editProfessionalDetails()}
            {editMode && <button onClick={handleSaveButton}>Save Information</button>}
        </>
    )
}

export default ProfessionalInformation;