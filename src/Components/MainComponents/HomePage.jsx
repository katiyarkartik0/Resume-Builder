import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div>Hi my name is Kartik Katiyar.</div>
            <ol>
                <li>This is a resume builder</li>
                <li>Click on create Resume and enter relavant information.</li>
                <li>For this project the following technologies are used
                    <ol>
                        <li>React JS</li>
                        <li>redux toolkit</li>
                        <li>bootstrap 4</li>
                    </ol>
                </li>
                <li>While viewing resume, hover over the field to edit information.</li>
            </ol>
            <div className="informationClub">
                <NavLink to="/createResume"><button className="btn btn-success">Create Resume</button></NavLink>
                <NavLink to="/viewResume"><button className="btn btn-success">View Resume</button></NavLink>
            </div>
        </>
    )
}

export default HomePage;