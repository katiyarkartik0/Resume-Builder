import { omit } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../store/slices/resumeSlice";

const EditEducationalInformation = ({
    educationalData,
    field,
    updateEducationalData
}) => {
    const [institute, setInstitute] = useState(field);
    const [year, setYear] = useState(educationalData[field].year);
    const [degree, setDegree] = useState(educationalData[field].degree);

    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const dispatch = useDispatch();


    const handleInstituteChange = (e) => {
        setInstitute(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const handleDegreeChange = (e) => {
        setDegree(e.target.value)
    }

    const handleConfirm = () => {
        const instituteDetails = { [institute]: { year, degree } };
        updateEducationalData(instituteDetails,field);
    }




    return (
        <>
            <label htmlFor={field}>institute</label>
            <input type="text" id={field} name="institute" placeholder={field} value={institute}
                onChange={handleInstituteChange}></input>
            <br></br>
            <label htmlFor={educationalData[field].year}>year</label>
            <input type="text" id={educationalData[field].year} name="institute"
                value={year}
                onChange={handleYearChange}
            ></input>
            <br></br>
            <label htmlFor={educationalData[field].degree}>degree</label>
            <input type="text" id={educationalData[field].degree} name="institute"
                value={degree}
                onChange={handleDegreeChange}
            ></input>
            <br></br>
            <button onClick={handleConfirm}>Confirm Changes</button>
        </>)
}

export default EditEducationalInformation;