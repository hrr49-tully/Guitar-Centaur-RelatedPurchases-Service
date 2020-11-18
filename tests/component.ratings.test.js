const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Ratings from '../client/Ratings.jsx';

describe('Ratings ', () => {
  const itemIdExample = 1;
  const ratingsComponent = mount(<Ratings id={itemIdExample}/>);

  it('Should render the Ratings React component.', () => {
    expect(ratingsComponent).toBeDefined();
  });

  it('Should countain images for the stars.', () => {
    console.log('find: ', JSON.stringify(ratingsComponent.text()));
  });
});