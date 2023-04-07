import { useEffect, useState } from 'react'
import PersonalInformation from './Components/PersonalInformation'
import EducationalInformation from './Components/EducationalInformation'
import ProfessionalInformation from './Components/ProfessionalInformation'
import { useDispatch, useSelector } from 'react-redux';
import { addResume } from './store/slices/resumeSlice';
import { useNavigate } from 'react-router-dom';
import Skills from './Skills';
import "./styles.css"
//use taggit, bootstrap 4.d
function CreateResume() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [personalInformation, setPersonalInformation] = useState({});

  const [educationFieldCount, setEducationFieldCount] = useState(1);
  const [educationalData, setEducationalData] = useState({});

  const [professionalFieldCount, setProfessionalFieldCount] = useState(1);
  const [professionalData, setProfessionalData] = useState({});

  const [resumeData, setResumeData] = useState({})

  const [personalInformationSubmitted,setPersonalInformationSubmitted] = useState(false);
  const [educationalInformationSubmitted,setEducationalInformationSubmitted] = useState(false);
  const [professionalDataSubmitted,setProfessionalDataSubmitted] = useState(false);

  const updatePersonalInformation = (info) => {
    setPersonalInformation((prevData) => ({ ...prevData, ...info }));
    setPersonalInformationSubmitted(true);
  }
  const updateEducation = (info) => {
    setEducationalData((prevData) => ({ ...prevData, ...info }));
    setEducationalInformationSubmitted(true);
  }
  const updateProfessionalInformation = (info) => {
    setProfessionalData((prevData) => ({ ...prevData, ...info }));
    setProfessionalDataSubmitted(true);
  }
  useEffect(() => {
    setResumeData((prevData) => ({ ...prevData, educationalData, personalInformation, professionalData }))
  }, [educationalData, professionalData, personalInformation])

  // console.log(resume)
  useEffect(()=>{
    console.log(resumeData)
  },[resumeData])

  const renderEducationInformation = () => {
    const fields = [];
    for (let i = 0; i < educationFieldCount; i++) {
      fields.push(<EducationalInformation updateEducation={updateEducation} />);
    }
    return fields;
  }

  const renderProfessionalInformation = () => {
    const fields = [];
    for (let i = 0; i < professionalFieldCount; i++) {
      fields.push(<ProfessionalInformation updateProfessionalInformation={updateProfessionalInformation} />);
    }
    return fields;
  }

  return (
    <form className="App" onSubmit={(e) => {
      e.preventDefault()
    }}>
      <h2>Personal Information</h2>
      <PersonalInformation updatePersonalInformation={updatePersonalInformation} />

      <h2>Educational Background</h2>
      {renderEducationInformation()}
      <button onClick={() => setEducationFieldCount(educationFieldCount + 1)}>Add education</button>

      <h2>Professional Background</h2>
      {renderProfessionalInformation()}
      <button onClick={() => setProfessionalFieldCount(professionalFieldCount + 1)}>Add experience</button>

      <br></br>
      <br></br>
      <h2>SKILLS</h2>
      <Skills/>
      <button disabled={disableSubmit} onClick={() => {
        if(personalInformationSubmitted && educationalInformationSubmitted && professionalDataSubmitted){
          dispatch(addResume(resumeData))
          setDisableSubmit(true)
          navigate("/viewResume")
        }
        }} >SUBMIT</button>
    </form>
  )
}

export default CreateResume
