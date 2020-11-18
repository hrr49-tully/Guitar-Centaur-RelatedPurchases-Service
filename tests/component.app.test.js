const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/App.jsx';
import Details from '../client/Details.jsx';
import RelatedPurchases from '../client/RelatedPurchases.jsx';

describe('App ', () => {
  const wrapper = shallow(<App id={1}/>);

  it('Should render the App React component.', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render a single Details React component.', () => {
    expect(wrapper.find(Details).length).toEqual(1);
  });

  it('Should render a single RelatedPurchases React component.', () => {
    expect(wrapper.find(RelatedPurchases).length).toEqual(1);
  });
});