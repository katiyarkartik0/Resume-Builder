import { useSelector } from "react-redux";
import PersonalInformation from "./DisplayComponenets/PersonalInformation";
import EducationalInformation from "./DisplayComponenets/EducationalInformation";
import ProfessionalInformation from "./DisplayComponenets/ProfessionalInformation";

const ViewResume = () => {
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const { educationalData, personalInformation, professionalData } = resumeDetails;
    const renderPersonalInformation = () => {
        return Object.keys(personalInformation).map((uniqueId) => {
            return <PersonalInformation data={personalInformation} uniqueId={uniqueId}/>
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
    return (
        <>
            <h1>Personal</h1>
            {renderPersonalInformation()}
            <h1>Educational</h1>
            {renderEducationalInformation()}
            <h1>Professional</h1>
            {renderProfessionalInformation()}
        </>
    )
}

export default ViewResume