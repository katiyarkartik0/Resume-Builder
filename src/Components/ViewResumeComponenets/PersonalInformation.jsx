import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResume } from "../../store/slices/resumeSlice";

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
        <div className="">
            <p><span className="font-weight-light font-italic text-light">Name: </span><span className="font-weight-normal ">{name}</span></p>
            <p><span className="font-weight-light font-italic text-light">Email: </span><span className="font-weight-normal ">{email}</span></p>
            <p><span className="font-weight-light font-italic text-light">Phone: </span><span className="font-weight-normal ">{phone}</span></p>
            <p><span className="font-weight-light font-italic text-light">Address: </span><span className="font-weight-normal ">{address}</span></p>
        </div>
    )


    const editPersonalInformation = () => {
        return (
            <div className="informationClub">
                <div className="informationField">
                    <label htmlFor="1">Name</label>
                    <input type="text" id="1" name="name"
                        className={`form-control w-100 `}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    ></input>
                </div>
                <div className="informationField">
                    <label htmlFor="2">Email</label>
                    <input type="text" id="2" name="email"
                        className={`form-control w-100`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    ></input>
                </div>
                <div className="informationField">
                    <label htmlFor="3">Address</label>
                    <input type="text" id="3" name="address"
                        className={`form-control w-100`}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                    ></input>
                </div>
                <div className="informationField">
                    <label htmlFor="4">Phone</label>
                    <input type="text" id="4" name="phone"
                        className={`form-control w-100`}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone"
                    ></input>
                </div>
            </div>
        )
    }

    return (
        <div className="displayInformation">
            {!editMode && renderPersonalInformation()}
            <br></br>
            {!editMode && <button className="show btn btn-warning" onClick={handleEditButton}>Edit Information</button>}
            {editMode && editPersonalInformation()}
            <br></br>
            {editMode && <button className="btn btn-warning" onClick={handleSaveButton}>Save Information</button>}
        </div>
    )
}

export default PersonalInformation