import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import "./models/doctor.js";
import "./models/appointments.js"
import "./models/patientHistory.js"
import "./models/patients.js"
import "./models/specialities.js";
import "./models/timeSlot.js"

const connectionStr = `mongodb://localhost:27017/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    log.info(`connected to the mongodb database`);
  })
  .catch((err) => {
    log.info(err.message);
  });

  import SimpleNodeLogger from 'simple-node-logger'
	const opts = {
		logFilePath:'mylogfile.log',
		timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
	},
 log = SimpleNodeLogger.createSimpleLogger( opts );

  // doctor is the collection
  const Doctor = mongoose.model("doctors");
//appointments is collection
const Appointments = mongoose.model("appointments");
//patientHistory is collection
const PatientHistory = mongoose.model("patientHistory");
//patients is collection
const Patients = mongoose.model("patients");
//specialities is collection
const Specialities = mongoose.model("specialities");
//timeSlot is collection
const TimeSlot = mongoose.model("timeSlot");


//

var app = express();

app.use(express.static('public'));

import bodyParser from 'body-parser';
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});
//  get /doctors
app.get('/doctors', (req, res) => {
  log.info("connected to doctors")
    Doctor.find({}, function (err, docs) {
            res.json(docs);
        
    });
});

// get appointments
app.get('/appointments', (req, res) => {
    Appointments.find({}, function (err, docs) {
            res.json(docs);
        
    });
});
// get patientHistory
app.get('/patientHistory', (req, res) => {
    PatientHistory.find({}, function (err, docs) {
            res.json(docs);
        
    });
});
// get patients
app.get('/patients', (req, res) => {
    Patients.find({}, function (err, docs) {
            res.json(docs);
        
    });
});
// get specialities
app.get('/specialities', (req, res) => {
    Specialities.find({}, function (err, docs) {
            res.json(docs);
        
    });
});
// get timeSlot
app.get('/timeSlot', (req, res) => {
    TimeSlot.find({}, function (err, docs) {
            res.json(docs);
        
    });
});
app.get('/doctors/name/:name', (req, res) => {
    const dName = req.params.name;
    Doctor.find({name:dName}, function (err, docs) {
            res.json(docs);
        
    });
});

app.get('/doctors/search/speciality/:speciality', (req, res) => {
    const dSpeciality = req.params.speciality;
    Doctor.find({speciality:dSpeciality}, function (err, docs) {
            res.json(docs);
        
    });
});


app.post('/doctors/add',(req,res) => {  
    Doctor.create(req.body).then((ans) => {
        log.info("New Doctor Inserted")
        res.status(200).send({msg:"Doctor added successfully"});
      }).catch((err) => {
        log.info(err);
        res.status(400).send({msg:"Doctor add failed"});
      });
});

app.post('/doctors/update/:id',(req,res) => {  
  Doctor.findByIdAndUpdate(req.params.id,req.body)
    .then((ans) => {
      log.info(" Doctor updated")
      res.status(200).send({msg:"Doctor updated successfully"});
    }).catch((err) => {
      log.info(err);
      res.status(400).send({msg:"Doctor UPDATE failed"});
    });
});

app.post('/doctors/delete/:doctorNumber',(req,res) => {
    
    Doctor.deleteOne({doctorNumber:req.params.doctorNumber}).then((ans) => {
        log.info("one doctor deleted")
        res.status(200).send({msg:"Doctor removed successfully"});
      }).catch((err) => {
        log.info(err.Message);
        res.status(400).send({msg:"Doctor delete failed"});
      });
      

});

  export default app;


