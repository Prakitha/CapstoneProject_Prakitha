import EditDoctor from "./EditDoctor"
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    return {
        doctorData: store.reducer3

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editDoctor: (doctorObj) => dispatch(
            { type: "EDITED_A_DOCTOR_TO_BACKEND",  doctor:doctorObj }
        ),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDoctor);