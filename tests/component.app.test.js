const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/App.jsx';

describe('App ', () => {
  it('Should render the App React component.', () => {
    const wrapper = shallow(<App id={1}/>);
    expect(wrapper).toBeDefined();
  });
});