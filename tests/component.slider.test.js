const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Slider from '../client/Slider.jsx';
import SliderStack from '../client/SliderStack.jsx';
import SliderArrowLeft from '../client/SliderArrowLeft.jsx';
import SliderArrowRight from '../client/SliderArrowRight.jsx';
import SliderDot from '../client/SliderDot.jsx';

describe('Slider ', () => {
  const exampleData = {
    relatedData: [1, 2, 3, 4, 5, 6, 7],
    handleItemChange: function(){}
  };

  const sliderComponent = mount(<Slider relatedData={exampleData.relatedData} handleItemChange={exampleData.handleItemChange}/>);

  it('Should render the Ratings React component.', () => {
    expect(sliderComponent).toBeDefined();
  });

  it('Should have some slider stacks.', () => {
    expect(sliderComponent.find(SliderStack).length).toBeGreaterThan(0);
  });

  it('Should have a single left slider arrow.', () => {
    expect(sliderComponent.find(SliderArrowLeft).length).toEqual(1);
  });

  it('Should have a single right slider arrow.', () => {
    expect(sliderComponent.find(SliderArrowRight).length).toEqual(1);
  });

  it('Should have at least one slider dot.', () => {
    expect(sliderComponent.find(SliderDot).length).toBeGreaterThan(0);
  });
});