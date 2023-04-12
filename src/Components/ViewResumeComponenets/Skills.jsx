import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../../store/slices/resumeSlice";

const Skills = () => {
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const { skills } = resumeDetails || {};
    const [tags, setTags] = useState(skills || []);
    const [editSkills, setEditSkills] = useState(false);

    const dispatch = useDispatch()

    const handleKeyDown = (e) => {
        if (e.key !== 'Enter') {
            return;
        }
        const value = e.target.value;
        if (!value.trim()) {
            return;
        }
        setTags((prevTags) => [...prevTags, value]);
        e.target.value = '';
    }

    const removeTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index))
    }

    const handleSaveButton = () => {
        let updatedResume = { ...resumeDetails, skills: tags };
        dispatch(updateResume(updatedResume));
        setEditSkills(false);
    }




    return (
        <div className="displayInformation">
            <div className="informationClub">
                <div className={`tags-input-container ${editSkills?"edit-skills":""}`}>
                    {tags.map((tag, index) => {
                        return (
                            <div className="tag-item">
                                <span className="text text-light">{tag}</span>
                                {editSkills && <span className="close" onClick={() => removeTag(index)}>&times;</span>}
                            </div>
                        )
                    })}
                    {editSkills && <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder={editSkills?"Type Something":""}></input>}

                </div>

            </div>
            {!editSkills && <button className="show btn btn-warning" onClick={() => setEditSkills(true)}>Edit Skills</button>}
            {editSkills && <button onClick={handleSaveButton}>Save Skills</button>}
            </div>
    )
}

export default Skills;