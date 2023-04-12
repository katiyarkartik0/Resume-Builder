import { useState } from "react";
import { v4 as uuid } from 'uuid';
import validator from "../../helper/validator";
const PersonalInformation = ({ updatePersonalInformation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [error, setError] = useState([]);


  const handleSubmit = () => {
    const uniqueId = uuid();
    const errorField = validator({ name, email, address, phone });
    if (errorField.length > 0) {
      setError(errorField);
      return;
    }
    const data = {
      [uniqueId]: { name, email, address, phone }
    }
    updatePersonalInformation(data)
    setDisableSubmit(true)
  }
  return (
    <>
      <div className="informationClub">
        <div className="informationField">
          <label htmlFor="1">Name</label>
          <input type="text" id="1" name="name"
            className={`form-control w-100 ${error.includes("name") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          ></input>
        </div>
        <div className="informationField">
          <label htmlFor="2">Email</label>
          <input type="text" id="2" name="email"
            className={`form-control w-100 ${error.includes("email") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          ></input>
        </div>
        <div className="informationField">
          <label htmlFor="3">Address</label>
          <input type="text" id="3" name="address"
            className={`form-control w-100 ${error.includes("address") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          ></input>
        </div>
        <div className="informationField">
          <label htmlFor="4">Phone</label>
          <input type="text" id="4" name="phone"
            className={`form-control w-100 ${error.includes("phone") ? "error" : ""} ${disableSubmit?"valid":""}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone"
          ></input>
        </div>
      </div>
      <button className="btn btn-primary" disabled={disableSubmit} onClick={handleSubmit}>Submit Personal Information</button>
    </>
  )
}

export default PersonalInformation;