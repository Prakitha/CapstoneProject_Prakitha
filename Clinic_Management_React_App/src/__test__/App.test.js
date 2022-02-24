//import { render, screen } from '@testing-library/react';
import { shallow,configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import App from '../App';

test('two plus two is 4',()=>{
expect(2+2).toBe(4)
})
describe(' app test cases',()=>{
  test('checking app if it doesnot have errors',()=>{
    shallow(<App/>)
  } )
})