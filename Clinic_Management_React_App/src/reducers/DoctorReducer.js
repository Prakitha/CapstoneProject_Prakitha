

const doctorReducer = (state = {}, action) => {
    //console.log(action);
    //console.log(state);
    switch (action.type) {
        case "DOCTOR_DATA_RECEIVED":
            let newState = { ...state, doctorSearchResults: action.json };
            newState.searchMessage = "SUCCESSFULLY SEARCHED THE DOCTOR";
            //console.log(newState)
            return newState;

        case "DOCTOR_DATA_DELETED":
            //let dNo = action.doctorNumber;
            let newState2 = {...state,deleteResults:action.json};
            //newState2 = newState2.filter(item => item.doctorNumber !== dNo);
            newState2.searchMessage = "SUCCESSFULLY DELETED THE DOCTOR";
            return newState2;

        default:
            return state;
    };

}

export default doctorReducer;
