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

  it('Should have a container for the stars.', () => {
    expect(ratingsComponent.find('div[data-testid="starAvg"]').length).toBeGreaterThan(0);
  });

  it('Should have a container for the rating count.', () => {
    expect(ratingsComponent.find('div[data-testid="starAvg"]').length).toBeGreaterThan(0);
  });
});