import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import validator from "../helper/validator";
const PersonalInformation = ({ updatePersonalInformation, allowSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [disableSubmit, setDisableSubmit] = useState(false);

    const [error, setError] = useState([]);


    const handleSubmit = () => {
        const uniqueId = uuid();
        const errorField = validator({ name, email, address,phone });
        if (errorField.length > 0) {
            setError(errorField);
            return;
        }
        const data = {
            [uniqueId]: { name, email, address, phone }
        }
        // const data ={name,email,address,phone}
        updatePersonalInformation(data)
        setDisableSubmit(true)
    }
    return (
        <>
            <label htmlFor="1">Name</label>
            <input type="text" id="1" name="name" className={error.includes("name") ? "error" : ""} value={name} onChange={(e) => setName(e.target.value)} ></input>
            <br></br>
            <label htmlFor="2">Email</label>
            <input type="text" id="2" name="email" className={error.includes("email") ? "error" : ""} value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label htmlFor="3">Address</label>
            <input type="text" id="3" name="address" className={error.includes("address") ? "error" : ""} value={address} onChange={(e) => setAddress(e.target.value)}></input>
            <br></br>
            <label htmlFor="4">Phone</label>
            <input type="text" id="4" name="phone" className={error.includes("phone") ? "error" : ""} value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <br></br>
            <button disabled={disableSubmit} onClick={handleSubmit}>Submit personalInformation</button>

        </>
    )
}

export default PersonalInformation;