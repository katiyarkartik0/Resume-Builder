import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <NavLink to="/createResume"><button>Create Resume</button></NavLink>
            <NavLink to="/viewResume"><button>View Resume</button></NavLink>
        </>
    )
}

export default HomePage;