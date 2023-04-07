import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const PersonalInformation = ({ updatePersonalInformation, allowSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [disableSubmit, setDisableSubmit] = useState(false)

    const handleSubmit = () => {
        const uniqueId = uuid();
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
            <input type="text" id="1" name="name" value={name} onChange={(e) => setName(e.target.value)} ></input>
            <br></br>
            <label htmlFor="2">Email</label>
            <input type="text" id="2" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label htmlFor="3">Address</label>
            <input type="text" id="3" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
            <br></br>
            <label htmlFor="4">Phone</label>
            <input type="text" id="4" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <br></br>
            <button disabled={disableSubmit} onClick={handleSubmit}>Submit personalInformation</button>

        </>
    )
}

export default PersonalInformation;