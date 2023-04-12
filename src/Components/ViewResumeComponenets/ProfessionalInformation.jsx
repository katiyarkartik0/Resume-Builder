import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../../store/slices/resumeSlice";
import { useState } from "react";

const ProfessionalInformation = ({ data, uniqueId }) => {
    const [editMode, setEditMode] = useState(false);
    const information = data[uniqueId];
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const dispatch = useDispatch();

    const [company, setCompany] = useState(information.company);
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
            <div className="">
                <p><span className="font-weight-light font-italic text-light">Company: </span><span className="font-weight-normal ">{company}</span></p>
                <p><span className="font-weight-light font-italic text-light">Year: </span><span className="font-weight-normal ">{year}</span></p>
                <p><span className="font-weight-light font-italic text-light">Designation: </span><span className="font-weight-normal ">{designation}</span></p>
            </div>
        </>
    )


    const editProfessionalDetails = () => {
        return (
            <div className="informationClub">
                <div className="informationField">
                    <label htmlFor="1">Company</label>
                    <input type="text" id="1" name="company"
                        className={`form-control w-100`}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter Company"
                    ></input>
                </div>
                <div className="informationField">
                    <label htmlFor="2">Year</label>
                    <input type="text" id="2" name="year"
                        className={`form-control w-100`}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Enter Year"
                    ></input>
                </div>
                <div className="informationField">
                    <label htmlFor="3">Designation</label>
                    <input type="text" id="3" name="designation"
                        className={`form-control w-100`}
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="Enter Designation"
                    ></input>
                </div>
            </div>
        )
    }

    return (
        <div className="displayInformation">
            {!editMode && renderProfessionalDetails()}
            <br></br>
            {!editMode && <button className="show btn btn-warning" onClick={handleEditButton}>Edit Information</button>}
            {editMode && editProfessionalDetails()}
            <br></br>
            {editMode && <button className="btn btn-warning" onClick={handleSaveButton}>Save Information</button>}
        </div>
    )
}

export default ProfessionalInformation;