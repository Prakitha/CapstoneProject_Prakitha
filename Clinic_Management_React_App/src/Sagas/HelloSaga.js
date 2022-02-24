

import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this
// my node app saga

function* searchDoctor(action) {
  const json = yield fetch("http://localhost:8000/doctors/search/speciality/" + action.speciality).then((response) =>
    response.json()

  );
  yield put({ type: "DOCTOR_DATA_RECEIVED", json: json });
}
function* actionWatcher() {
  yield takeLatest("SEARCH_BY_SPECIALITY", searchDoctor);
}

// my new player app

function* addNewDoctor(action) {
  var bodyContent = {
    doctorNumber: action.doctor.doctorNumber,
    name: action.doctor.name,
    qualification: action.doctor.qualification,
    speciality: action.doctor.speciality,
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/doctors/add", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
  yield put({ type: "ADD_DOCTOR_SERVER_RESPONSE", serverMsg: serverResponse.msg });
  console.log("added doctor sucessfully")
}
function* actionWatcher1() {
  yield takeLatest("ADDED_A_DOCTOR_TO_BACKEND", addNewDoctor);
}

function* deleteDoctor(action) {
  var bodyContent = {
    // _id:action.doctor._id,
     doctorNumber: action.doctorNumber,
    // name: action.doctor.name,
    //qualification: action.doctor.qualification,
    // speciality: action.doctor.speciality,
  };
//   console.log("inside delete saga")
// console.log(action)
  var stringifiedBody = JSON.stringify(bodyContent);
  const serverResponse = yield fetch("http://localhost:8000/doctors/delete/"+action.doctorNumber,{
  method: "POST",
  body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
}).then((response) =>
    response.json()

  );
  // console.log("inside delete saga")
  yield put({ type: "DOCTOR_DATA_DELETED",serverMsg: serverResponse.msg });
}
function* actionWatcher2() {
  yield takeLatest("DELETED_A_DOCTOR_IN_BACKEND", deleteDoctor);
}




function* editNewDoctor(action) {
  
  var bodyContent = {
    // _id:action.doctor._id,
    // doctorNumber: action.doctor.doctorNumber,
    // name: action.doctor.name,
    qualification: action.doctor.qualification,
    // speciality: action.doctor.speciality,
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/doctors/update/"+action.doctor._id ,{
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());
  yield put({ type: "EDIT_DOCTOR_SERVER_RESPONSE", serverMsg: serverResponse.msg });
  // console.log("edited doctor sucessfully")
}
function* actionWatcher3() {
  yield takeLatest("EDITED_A_DOCTOR_TO_BACKEND", editNewDoctor);
}

// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcher1(),
    actionWatcher2(),
    actionWatcher3()
  ]);
}
