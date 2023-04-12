import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import PersonalInformation from "../ViewResumeComponenets/PersonalInformation";
import EducationalInformation from "../ViewResumeComponenets/EducationalInformation";
import ProfessionalInformation from "../ViewResumeComponenets/ProfessionalInformation";
import Skills from "../ViewResumeComponenets/Skills";

const ViewResume = () => {
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const resumeFilled = searchParams.get('resumeFilled') || false;

    useEffect(()=>{
        if(!resumeFilled){
            alert("you have not filled the resume yet, please go back and get it filled")
            navigate("/createResume");
        }
    },[resumeFilled])



    
    const { educationalData={}, personalInformation={}, professionalData={} } = resumeDetails || {};
    const renderPersonalInformation = () => {
        return Object.keys(personalInformation).map((uniqueId) => {
            return <PersonalInformation data={personalInformation} uniqueId={uniqueId} />
        })
    }
    const renderEducationalInformation = () => {
        return Object.keys(educationalData).map((uniqueId) => {
            return <EducationalInformation data={educationalData} uniqueId={uniqueId} />
        })
    }
    const renderProfessionalInformation = () => {
        return Object.keys(professionalData).map((uniqueId) => {
            return <ProfessionalInformation data={professionalData} uniqueId={uniqueId} />
        })
    }
    const renderSkills = () => <Skills />


    return (
        <div className="resumeView">
            <p className="h3 font-italic">Personal Information</p>
            <hr></hr>
            {renderPersonalInformation()}
            <hr></hr>
            <p className="h3 font-italic">Educational Information</p>
            <hr></hr>
            {renderEducationalInformation()}
            <hr></hr>
            <p className="h3 font-italic">Professional Information</p>
            <hr></hr>
            {renderProfessionalInformation()}
            <hr></hr>
            <p className="h3 font-italic">Skills</p>
            <hr></hr>
            {renderSkills()}
        </div>
    )
}

export default ViewResume