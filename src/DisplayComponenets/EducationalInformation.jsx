import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../store/slices/resumeSlice";

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
        let updatedResume = {...resumeDetails,educationalData};
        dispatch(updateResume(updatedResume));
        setEditMode(false);
    }

    const renderEducationalDetails = () => (
        <>
            <div>Institute</div>
            <h3>{institute}</h3>
            <div>Year</div>
            <h3>{year}</h3>
            <div>Degree</div>
            <h3>{degree}</h3>
        </>
    )


    const editEducation = () => {
        return (
            <>
                <label htmlFor="institute">Institute</label>
                <input type="text" id="institute" name="institute"
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="year">Year</label>
                <input type="text" id="year" name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                ></input>
                <br></br>
            </>
        )
    }

    return (
        <>
            {!editMode && renderEducationalDetails()}
            {!editMode && <button onClick={handleEditButton}>Edit Information</button>}
            {editMode && editEducation()}
            {editMode && <button onClick={handleSaveButton}>Save Information</button>}
        </>
    )
}

export default EducationalInformation;