import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../store/slices/resumeSlice";

const EditPersonalInformation = ({setEditPersonalInfo}) => {
    const resume = useSelector((state) => state.resume);
    const dispatch = useDispatch()
    const resumeDetails = resume[0];
    let { personalInformation } = resumeDetails;
    let updatedResume = resumeDetails;
    const handleInputChange = (e, field) => {
        personalInformation = { ...personalInformation, [field]: e.target.value };
        updatedResume = { ...resumeDetails, personalInformation }
    }

    const handleClick = ()=>{
        dispatch(updateResume(updatedResume));
        setEditPersonalInfo(false);
    }

    return (
        <>
            {Object.keys(personalInformation).map((field) => {
                return (
                    <>
                        <label htmlFor={field}>{field}</label>
                        <input type="text" id={field} name={field} placeholder={personalInformation[field]} onChange={(e) => handleInputChange(e, field)}></input>
                        <br></br>
                    </>
                )
            })}
            {<button onClick={handleClick}>SAVE CHANGES</button>}
        </>
    )
}

export default EditPersonalInformation;