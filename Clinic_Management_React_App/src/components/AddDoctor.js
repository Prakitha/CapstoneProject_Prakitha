import '../Styles/Table.css'
import {useState} from 'react'
const AddDoctor =(props)=>  {
    const specialityTypes=["Orthodontist","Opthalmologist","Paediatrician","Gastroenrologist","Cardiollogist"]
    const [localState, setLocalState] = useState({doctorNumber:"",name:"",qualification:"",speciality:"" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };

    const addDoctor = (e) => {
        e.preventDefault();
        
        props.addDoctor(localState);
        
    }

    return (
        <div>Hello Welcome to doctors page
            
          
            <form >
                <h3>Fill the details to add Doctor</h3>
                <label >Doctor Number:</label><input type="text"  name="doctorNumber"  value={localState.doctorNumber} onChange={handleChange}/><br />
                <label >Name:</label><input type="text" name="name" value={localState.name} onChange={handleChange}/><br />
                <label >Qualification:</label><input type="text" name="qualification" value={localState.qualification} onChange={handleChange}/><br />
                
                <label>Speciality:</label>
                <select name="speciality" onChange={handleChange} value={localState.speciality}>
                    <option value={specialityTypes[0]}>Orthodontist</option>
                    <option value={specialityTypes[1]}>Opthalmologist</option>
                    <option value={specialityTypes[2]}>Paediatrician</option>
                    <option value={specialityTypes[3]}>Gastroentrologist</option>
                    <option value={specialityTypes[4]}>Cardiologist</option>
                </select>&nbsp;
                
                <button onClick={addDoctor} >Submit</button><br></br>
                {props.doctorData.addDoctorSuccess ? props.doctorData.addDoctorSuccess:""}
            </form> </div>
    );
}
export default AddDoctor;