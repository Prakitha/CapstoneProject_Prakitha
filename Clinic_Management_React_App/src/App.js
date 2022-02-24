import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import './App.css';
import SearchDoctorContainer from "./components/SearchDoctorContainer";
import EditDoctorContainer from "./components/EditDoctorContainer";
import AddDoctorContainer from "./components/AddDoctorContainer";
import store from "./Store/MyStore";
import { Provider } from 'react-redux';
function App() {
  return (  
    <Provider store={store}>
    <Routes >  
    <Route path="/" element={<Home />} /> 
     <Route path="/search" element={<SearchDoctorContainer />}/>
     <Route path="/addDoctor" element={<AddDoctorContainer/>}/>
     <Route path="/EditDoctor" element={<EditDoctorContainer/>}/>
    </Routes >
    </Provider>
    
  );
};

function Home() {
  return (
    <NavBar />
    )
  }
export default App;
