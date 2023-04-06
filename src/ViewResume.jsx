import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "./store/slices/resumeSlice";
import { cloneDeep, omit } from "lodash"
const ViewResume = () => {
    const resume = useSelector((state) => state.resume);
    const dispatch = useDispatch();
    const [editModeActive, setEditModeActive] = useState(false);
    const resumeDetails = resume[0] || {};
    let { educationalData, professionalData } = resumeDetails;
    console.log(educationalData, professionalData);

    const renderPersonalInformation = () => {
        let { personalInformation } = resumeDetails;
        let updatedResume = {};
        const handleChange = (e, field) => {
            personalInformation = { ...personalInformation, [field]: e.target.value };
            updatedResume = { ...resumeDetails, personalInformation }
        }
        return <> {
            Object.keys(personalInformation).map((field, index) => {
                if (editModeActive) {
                    return (
                        <>
                            <label htmlFor={field}>{field}</label>
                            <input type="text" id={field} name={field} placeholder={personalInformation[field]} onChange={(e) => handleChange(e, field)}></input>
                            <br></br>
                        </>
                    )
                }
                return (
                    <>
                        <h2>{field}</h2>
                        <h3>{personalInformation[field]}</h3>
                    </>
                )


            })}
            {editModeActive &&
                <button onClick={() => {
                    setEditModeActive(false);
                    if (Object.keys(updateResume).length !== 0) {
                        dispatch(updateResume(updatedResume));
                    }
                }}>Save changes</button>
            }
        </>
    }

    const renderEducationInformation = () => {
        let { educationalData } = resumeDetails;
        let updatedResume = {}
        const handleInstituteChange = (e, field) => {
            const educationalDataClone = cloneDeep(educationalData);
            const detailsOfField = educationalDataClone[field];
            const newField = e.target.value;
            educationalDataClone[newField] = detailsOfField;
            delete educationalDataClone[field]
            updatedResume = { ...resumeDetails, educationalData: educationalDataClone };
            dispatch(updateResume(updatedResume));
        }
        const handleInstituteDetailsChange = (e, field, attribute) => {
            const educationalDataClone = cloneDeep(educationalData);
            let educationalDataField = educationalDataClone[field];
            educationalDataField = { ...educationalDataField, [attribute]: e.target.value };
            educationalDataClone[field] = educationalDataField;
            updatedResume = { ...resumeDetails, educationalData: educationalDataClone }
        }
        return <>
            {Object.keys(educationalData).map((field, index) => {
                if (!editModeActive) {
                    return (
                        <>
                            <h2>institute</h2>
                            <h3>{field}</h3>
                            <h2>year</h2>
                            <h3>{educationalData[field].year}</h3>
                            <h2>degree</h2>
                            <h3>{educationalData[field].degree}</h3>
                        </>
                    )
                }
                return (
                    <>
                        <label htmlFor={field}>institute</label>
                        <input type="text" id={field} name="institute" placeholder={field}
                            onChange={(e) => handleInstituteChange(e, field)}></input>
                        <br></br>
                        <label htmlFor={educationalData[field].year}>year</label>
                        <input type="text" id={educationalData[field].year} name="institute"
                            placeholder={educationalData[field].year}
                            onChange={(e) => handleInstituteDetailsChange(e, field, "year")}
                        ></input>
                        <br></br>
                        <label htmlFor={educationalData[field].degree}>degree</label>
                        <input type="text" id={educationalData[field].degree} name="institute"
                            placeholder={educationalData[field].degree}
                            onChange={(e) => handleInstituteDetailsChange(e, field, "degree")}
                        ></input>
                        <br></br>
                    </>
                )
            })}
            {editModeActive &&
                <button onClick={() => {
                    setEditModeActive(false);
                    if (Object.keys(updateResume).length !== 0) {
                        dispatch(updateResume(updatedResume));
                    }
                }}>Save changes</button>
            }
        </>

    }



    return (
        <>
            <button onClick={() => setEditModeActive(true)}>Edit resume</button>
            <h1>Personal Information</h1>
            {resume.length > 0 && renderPersonalInformation()}

            <h1>Educational Information</h1>
            {resume.length > 0 && renderEducationInformation()}
            <h1>Professional Information</h1>
            {resume.length > 0 && Object.keys(professionalData).map((field, index) => {
                return (
                    <>
                        <h3>Comapny</h3>
                        <h4>{field}</h4>
                        <h3>year</h3>
                        <h4>{professionalData[field].year}</h4>
                        <h3>Designation</h3>
                        <h4>{professionalData[field].designation}</h4>
                    </>
                )

            })}
        </>
    )
}

export default ViewResume