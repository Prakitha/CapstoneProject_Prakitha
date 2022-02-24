import AddDoctor from "./AddDoctor"
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    return {
        doctorData: store.reducer2

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDoctor: (doctorObj) => dispatch(
            { type: "ADDED_A_DOCTOR_TO_BACKEND",  doctor:doctorObj }
        ),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);