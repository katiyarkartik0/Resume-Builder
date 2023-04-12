import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../../store/slices/resumeSlice";

const EducationalInformation = ({ data, uniqueId }) => {
    const [editMode, setEditMode] = useState(false);
    const information = data[uniqueId];
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const dispatch = useDispatch();

    const [institute, setInstitute] = useState(information.institute);
    const [year, setYear] = useState(information.year);
    const [degree, setDegree] = useState(information.degree);

    const handleEditButton = () => {
        setEditMode(true);
    }

    const handleSaveButton = () => {
        let { educationalData } = resumeDetails;
        educationalData = { ...educationalData, [uniqueId]: { institute, year, degree } };
        let updatedResume = { ...resumeDetails, educationalData };
        dispatch(updateResume(updatedResume));
        setEditMode(false);
    }

    const renderEducationalDetails = () => (
        <div className="">
            <p><span className="font-weight-light font-italic text-light">Institute: </span><span className="font-weight-normal ">{institute}</span></p>
            <p><span className="font-weight-light font-italic text-light">Year: </span><span className="font-weight-normal ">{year}</span></p>
            <p><span className="font-weight-light font-italic text-light">Degree: </span><span className="font-weight-normal ">{degree}</span></p>
        </div>
    )


    const editEducation = () => {
        return (
            <>
                <div className="informationClub">
                    <div className="informationField">
                        <label htmlFor="1">Institute</label>
                        <input type="text" id="1" name="institute"
                            className={`form-control w-100`}
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)}
                            placeholder="Enter Institute"></input>
                    </div>
                    <div className="informationField">
                        <label htmlFor="2">Year</label>
                        <input type="text" id="2" name="year"
                            className={`form-control w-100`}
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter Year"></input>
                    </div>
                    <div className="informationField">
                        <label htmlFor="3">Degree</label>
                        <input type="text" id="3" name="degree"
                            className={`form-control w-100`}
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                            placeholder="Enter degree"></input>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="displayInformation">
            {!editMode && renderEducationalDetails()}
            <br></br>
            {!editMode && <button className="show btn btn-warning" onClick={handleEditButton}>Edit Information</button>}
            {editMode && editEducation()}
            <br></br>
            {editMode && <button className="btn btn-warning" onClick={handleSaveButton}>Save Information</button>}
        </div>
    )
}

export default EducationalInformation;