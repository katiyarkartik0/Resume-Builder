import { useSelector } from "react-redux";
import PersonalInformation from "./DisplayComponenets/PersonalInformation";
import EducationalInformation from "./DisplayComponenets/EducationalInformation";
import ProfessionalInformation from "./DisplayComponenets/ProfessionalInformation";
import Skills from "./DisplayComponenets/Skills";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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
        <>
            <h1>Personal</h1>
            {renderPersonalInformation()}
            <h1>Educational</h1>
            {renderEducationalInformation()}
            <h1>Professional</h1>
            {renderProfessionalInformation()}
            <h1>Skills</h1>
            {renderSkills()}
            <button> navigate("/createResume")</button>
        </>
    )
}

export default ViewResume