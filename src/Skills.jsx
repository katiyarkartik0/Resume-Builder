import { useState } from "react";

const Skills = () => {

    const [tags, setTags] = useState([]);

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

    const removeTag = (index) =>{
        setTags(tags.filter((tag,i)=>i!==index))
    }
    return (
        <div className="tags-input-container">

            {tags.map((tag, index) => {
                return (
                    <div className="tag-item">
                        <span className="text">{tag}</span>
                        <span className="close" onClick={()=>removeTag(index)}>&times;</span>
                    </div>
                )
            })}
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type Something"></input>

        </div>
    )
}

export default Skills;