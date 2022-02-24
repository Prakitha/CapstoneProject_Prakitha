import { useState } from 'react'
import { useLocation } from 'react-router';
import '../Styles/Table.css'
const EditDoctor = (props) => {
    const doctorNumber = new URLSearchParams(useLocation().search).get('doctorNumber');
    const name = new URLSearchParams(useLocation().search).get('name');
    const id = new URLSearchParams(useLocation().search).get('id');
    const qualification = new URLSearchParams(useLocation().search).get('qualification');
    const speciality = new URLSearchParams(useLocation().search).get('speciality');

    const [localState, setLocalState] = useState({ _id: id, doctorNumber: doctorNumber, name: name, qualification: qualification, speciality: speciality });
    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };

    const editDoctor = (e) => {
        e.preventDefault();

        props.editDoctor(localState);

    }
    return (
        <div>
            <form style={{ border: "1px solid blue ", textAlign: "center" }}>
                <h3>Edit the details to add Doctor</h3>
                <label >Doctor Number:</label><input type="text" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange} disabled /><br />
                <label >Name:</label><input type="text" name="name" value={localState.name} onChange={handleChange} disabled /><br />
                <label >Qualification:</label><input type="text" name="qualification" value={localState.qualification} onChange={handleChange} /><br />
                <label >Speciality:</label><input type="text" name="speciality" value={localState.speciality} onChange={handleChange} disabled /><br />
                &nbsp;

                <button onClick={editDoctor} >Submit</button><br></br>
                {props.doctorData.editDoctorSuccess ? props.doctorData.editDoctorSuccess : ""}
            </form>
        </div>
    );
}
export default EditDoctor;