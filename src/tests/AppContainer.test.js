
import {shallow} from 'enzyme';
import AppContainer from '../components/AppContainer'

describe('Pruebas en <AppContainerr/> contiene el H2',() => {
  test('tiene que tener un h2 llamado Cat App', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<h2>Cat App</h2>)).toBe(true);
  })
})

describe('Pruebas en <AppContainerr/> contiene el P',() => {
  test('tiene que tener un h2 llamado Cat App', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<p>La idea de esta app es agregar gatos en una lista.</p>)).toBe(true);
  })
})

describe('Pruebas en <AppContainerr/> contiene el Cat container',() => {
  test('tiene que tener un h2 llamado Cat App', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<div className='container animate__animated animate__fadeIn animate__delay-2s' /> )).toBe(true);
  })
})

describe('Pruebas en <AppContainerr/> contiene el H2 con text',() => {
  test('tiene que tener un h2 llamado Cat App', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<h2 className='text'>Estos son los gatos que has agregado en la lista</h2> )).toBe(true);
  })
})

describe('Pruebas en <AppContainerr/> contiene el H2 con texto diferente',() => {
  test('tiene que tener un h2 llamado Cat App', () =>{
    const wrapper = shallow( <AppContainer />);
    expect(wrapper.contains(<h2 className='text'>Estos es un texto diferente</h2> )).toBe(false);
  })
})