import { Link } from "react-router-dom";
import { useState } from "react";
import '../Styles/Table.css'
const SearchDoctor = (props) => {


    const specialityTypes = ["Orthodontist", "Opthalmologist", "Paediatrician", "Gastroenrologist", "Cardiologist"]
    const [localState, setLocalState] = useState({ speciality: "" });
    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });

    };
    const searchDoctor = (e) => {
        e.preventDefault();
        props.searchDoctor(localState.speciality);

    };
    const [localState1, setLocalState1] = useState({ doctorNumber: "" })
    const handleChange1 = (e) => {
        e.preventDefault();
        setLocalState1({ ...localState1, [e.target.name]: e.target.value })
    }
    const deleteDoctor = (e,drNo) => {
        props.deleteDoctor(drNo)
    }
    return (
        <div>

            <h2>Search for Doctors</h2>
            <label >Speciality : </label>
            <select name="speciality" onChange={handleChange} value={localState.value}>
                <option value={specialityTypes[0]}>Orthodontist</option>
                <option value={specialityTypes[1]}>Opthalmologist</option>
                <option value={specialityTypes[2]}>Paediatrician</option>
                <option value={specialityTypes[3]}>Gastroentrologist</option>
                <option value={specialityTypes[4]}>Cardiologist</option>
            </select>&nbsp;
            <button onClick={searchDoctor} >submit</button>
            <table >
                <tr >
                    <td>Doctor Number</td>
                    <td>Name</td>
                    <td>Quallification</td>
                    <td>Speciality</td>
                    <td>Edit</td>
                    <td>Delete</td>

                </tr>
                {props.doctorData && props.doctorData.doctorSearchResults ? props.doctorData.doctorSearchResults.map((item, key) => <tr><td>{item.doctorNumber}</td><td>{item.name}</td>
                    <td>{item.qualification}</td><td>{item.speciality}</td><td>
                        <Link to={{pathname:'/EditDoctor?id='+item._id+'&doctorNumber='+item.doctorNumber+'&name='+item.name+'&qualification='+item.qualification+'&speciality='+item.speciality}}>Edit</Link></td><td><button onClick={(e) => deleteDoctor( e,item.doctorNumber )}>
         Delete</button></td></tr>) : ""}
            </table>


        </div>
    );
}

export default SearchDoctor
