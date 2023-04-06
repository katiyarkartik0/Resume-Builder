import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateResume } from "./store/slices/resumeSlice";
import { cloneDeep, omit } from "lodash"
import EditEducationalInformation from "./EditComponents/EditEducationalInformation";
import EditPersonalInformation from "./EditComponents/EditPersonalInformation";
const ViewResume = () => {
    const dispatch = useDispatch()
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0] || {};
    let { educationalData,personalInformation, professionalData } = resumeDetails;

    const [editPersonalInfo, setEditPersonalInfo] = useState(false);
    const [editEducation, setEditEducation] = useState(false);

    const renderPersonalInformation = () => {

        return <>
            {editPersonalInfo && <EditPersonalInformation setEditPersonalInfo={setEditPersonalInfo} />}
            {!editPersonalInfo &&
                <>
                    {Object.keys(personalInformation).map((field) => {
                        return (
                            <>
                                <h2>{field}</h2>
                                <h3>{personalInformation[field]}</h3>
                            </>
                        )
                    })}
                </> &&
                <button onClick={() => {
                    setEditPersonalInfo(true);
                }}>Edit PersonalInformation</button>
            }
        </>
    }



    const renderEducationInformation = () => {
        let { educationalData } = resumeDetails;
        let updatedResume = resumeDetails;
        const updateEducationalData = (newInstitute,oldInstitute) => {
            educationalData = omit(educationalData, [`${oldInstitute}`]);
            educationalData= {...educationalData,...newInstitute};
            updatedResume = {...updatedResume,educationalData};
        }
        return <>
            {Object.keys(educationalData).map((field, index) => {
                if (!editEducation) {
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
                return <EditEducationalInformation
                    educationalData={educationalData} field={field}
                    updateEducationalData={updateEducationalData}
                />

            })}
            {!editEducation &&
                <button onClick={() => {
                    setEditEducation(true);
                }}>Edit Education</button>
            }
            {editEducation &&
                <button onClick={() => {
                    dispatch(updateResume(updatedResume))
                    setEditEducation(false);
                }}>SAVE CHANGES</button>
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