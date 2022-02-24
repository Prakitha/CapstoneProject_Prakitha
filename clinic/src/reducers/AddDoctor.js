

const addDoctorReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_DOCTOR_SERVER_RESPONSE":
            // let drNo = action.Number;
            // let drName = action.Name;
            // let drQuali = action.Qualification;
            // let drSpeciali = action.Speciality;
            let newState3= {...state};
            newState3.addDoctorSuccess=action.serverMsg;
            return newState3;
        default:
            return state;
    };

}

export default addDoctorReducer;
