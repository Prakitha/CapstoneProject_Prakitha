import { Route, Routes } from "react-router";
import { shallow,configure,mount} from 'enzyme';
import { render, screen } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import App from '../App';
import { Provider } from 'react-redux';
import SearchDoctorContainer from '../components/SearchDoctorContainer';
import store from '../Store/MyStore'
import AddDoctorContainer from '../components/AddDoctorContainer'
import EditDoctorContainer from '../components/EditDoctorContainer'
describe('test for search doctor by speciality',()=>{
    test("checking search doesnt have errors",()=>{
        render(<Provider store={store}><SearchDoctorContainer/></Provider>)
    })
    test("check the label tag",()=>{
        const wrapper=mount(<Provider store={store}><SearchDoctorContainer/></Provider>)
        const content= <label >Speciality : </label>
        expect(wrapper.contains(content)).toBe(true);
    })
})
describe('test for add doctor',()=>{
    test("checking add doesnt have errors",()=>{
        render(<Provider store={store}><AddDoctorContainer/></Provider>)
    })
    test("check the h3 tag",()=>{
        const wrapper=mount(<Provider store={store}><AddDoctorContainer/></Provider>)
        const content=<h3>Fill the details to add Doctor</h3>
        expect(wrapper.contains(content)).toBe(true);
    })
})
