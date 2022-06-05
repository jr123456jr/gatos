
import {shallow} from 'enzyme';
import Form from '../components/UpdateForm'

describe('Pruebas en <UpdateForm/> contiene el label name',() => {
  test('tiene que tener un label name', () =>{
    const url = 'https://cdn2.thecatapi.com/images/rqIRpFc3V.jpg'
    const wrapper = shallow( <Form imageUrl={url}/>);
    expect(wrapper.contains(<label>name</label>)).toBe(true);
  })
})

describe('Pruebas en <UpdateForm/> contiene el label age',() => {
  test('tiene que tener un label age', () =>{
    const url = 'https://cdn2.thecatapi.com/images/rqIRpFc3V.jpg'
    const wrapper = shallow( <Form imageUrl={url}/>);
    expect(wrapper.contains(<label>age</label>)).toBe(true);
  })
})

describe('Pruebas en <UpdateForm/> contiene el label color',() => {
  test('tiene que tener un label color', () =>{
    const url = 'https://cdn2.thecatapi.com/images/rqIRpFc3V.jpg'
    const wrapper = shallow( <Form imageUrl={url}/>);
    expect(wrapper.contains(<label>color</label>)).toBe(true);
  })
})

describe('Pruebas en <UpdateForm/> contiene el button submit',() => {
  test('tiene que tener un submit', () =>{
    const url = 'https://cdn2.thecatapi.com/images/rqIRpFc3V.jpg'
    const wrapper = shallow( <Form imageUrl={url}/>);
    expect(wrapper.contains(<button type="submit">Update</button>)).toBe(true);
  })
})

describe('Pruebas en <UpdateForm/> contiene el button reset',() => {
  test('tiene que tener un reset', () =>{
    const url = 'https://cdn2.thecatapi.com/images/rqIRpFc3V.jpg'
    const wrapper = shallow( <Form imageUrl={url}/>);
    expect(wrapper.contains(<button type="reset">Reset</button>)).toBe(true);
  })
})

