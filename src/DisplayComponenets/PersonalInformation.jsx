import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../store/slices/resumeSlice";

const PersonalInformation = ({ data, uniqueId }) => {
    const [editMode, setEditMode] = useState(false);
    const information = data[uniqueId];
    const resume = useSelector((state) => state.resume);
    const resumeDetails = resume[0];
    const dispatch = useDispatch();

    const [name, setName] = useState(information.name);
    const [email, setEmail] = useState(information.email);
    const [phone, setPhone] = useState(information.phone);
    const [address, setAddress] = useState(information.address);


    const handleEditButton = () => {
        setEditMode(true);
    }

    const handleSaveButton = () => {
        let { personalInformation } = resumeDetails;
        personalInformation = { ...personalInformation, [uniqueId]: { name, email, phone, address } };
        let updatedResume = { ...resumeDetails, personalInformation };
        dispatch(updateResume(updatedResume));
        setEditMode(false);
    }

    const renderPersonalInformation = () => (
        <>
            <div>Name</div>
            <h3>{name}</h3>
            <div>Email</div>
            <h3>{email}</h3>
            <div>Phone</div>
            <h3>{phone}</h3>
            <div>Address</div>
            <h3>{address}</h3>
        </>
    )


    const editPersonalInformation = () => {
        return (
            <>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                ></input>
                <br></br>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></input>
                <br></br>
            </>
        )
    }

    return (
        <>
            {!editMode && renderPersonalInformation()}
            {!editMode && <button onClick={handleEditButton}>Edit Information</button>}
            {editMode && editPersonalInformation()}
            {editMode && <button onClick={handleSaveButton}>Save Information</button>}
        </>
    )
}

export default PersonalInformation