

const editDoctorReducer = (state = {}, action) => {
    // console.log(action);
    // console.log(state);
    switch (action.type) {
        case "EDIT_DOCTOR_SERVER_RESPONSE":
            
            let newState4= {...state};
            newState4.editDoctorSuccess=action.serverMsg;
            return newState4;
        default:
            return state;
    };

}

export default editDoctorReducer;
