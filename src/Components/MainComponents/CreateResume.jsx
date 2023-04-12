import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addResume } from '../../store/slices/resumeSlice';

import EducationalInformation from '../FormComponents/EducationalInformation';
import PersonalInformation from '../FormComponents/PersonalInformation';
import ProfessionalInformation from '../FormComponents/ProfessionalInformation';
import Skills from '../FormComponents/Skills';

import "./styles.css"

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

  const [skills, setSkills] = useState([]);

  const [resumeData, setResumeData] = useState({})

  const [personalInformationSubmitted, setPersonalInformationSubmitted] = useState(false);
  const [educationalInformationSubmitted, setEducationalInformationSubmitted] = useState(false);
  const [professionalDataSubmitted, setProfessionalDataSubmitted] = useState(false);

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
    setResumeData((prevData) => ({ ...prevData, educationalData, personalInformation, professionalData, skills }))
  }, [educationalData, professionalData, personalInformation, skills])

  // console.log(resume)
  useEffect(() => {
    console.log(resumeData)
  }, [resumeData])

  const updateSkills = (info) => {
    setSkills(info);
  }

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
    <>
    <h1>CREATE RESUME</h1>
    <form className="App" onSubmit={(e) => {
      e.preventDefault()
    }}>
      <div className='form'>
        <h2>Personal Information</h2>
        <PersonalInformation updatePersonalInformation={updatePersonalInformation} />
        <br></br>
        <br></br>
        <h2>Educational Background</h2>
        {renderEducationInformation()}
        <br></br>
        <br></br>
        <button className='btn btn-outline-primary' onClick={() => setEducationFieldCount(educationFieldCount + 1)}>Add education</button>
        <br></br>
        <br></br>
        <h2>Professional Background</h2>
        {renderProfessionalInformation()}
        <br></br>
        <br></br>
        <button className='btn btn-outline-primary' onClick={() => setProfessionalFieldCount(professionalFieldCount + 1)}>Add experience</button>

        <br></br>
        <br></br>
        <h2>SKILLS</h2>
        <Skills updateSkills={updateSkills} />
        <br></br>
        <br></br>
        <button className='btn btn-primary' disabled={disableSubmit} onClick={() => {
          if (personalInformationSubmitted && educationalInformationSubmitted && professionalDataSubmitted) {
            dispatch(addResume(resumeData))
            setDisableSubmit(true)
            const params = "?resumeFilled=true"
            navigate(`${"/viewResume" + params}`)
          }
          else{
            alert("You might have missed to fill some fields")
          }
        }} >SUBMIT FORM</button>
      </div>
    </form>
    </>
  )
}

export default CreateResume
