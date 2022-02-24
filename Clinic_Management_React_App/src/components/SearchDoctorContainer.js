import SearchDoctor from "./SearchDoctor";
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        doctorData: store.reducer1

    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        searchDoctor: (SpecialityValue) => dispatch({ type: "SEARCH_BY_SPECIALITY", speciality: SpecialityValue }) ,
       deleteDoctor:(doctorNumber)=>dispatch({type:"DELETED_A_DOCTOR_IN_BACKEND",doctorNumber:doctorNumber})       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);

            