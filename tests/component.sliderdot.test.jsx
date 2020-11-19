const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SliderDot from '../client/SliderDot.jsx';

describe('SliderDot ', () => {
  const exampleData = {
    stackPosition: 0,
    currentIndex: 0,
    clicksCount: 0,
    handleMove: function(e){ exampleData.clicksCount++; }
  };

  const sliderDotComponent = mount(<SliderDot stackPosition={exampleData.stackPosition} index={exampleData.currentIndex} handleMove={exampleData.handleMove}/>);

  it('Should render the SliderDot React component.', () => {
    expect(sliderDotComponent).toBeDefined();
  });

  it('Should have an active button, when the index matches the stack position.', () => {
    expect(sliderDotComponent.find('button[data-testid="activeBtn"]').length).toBeGreaterThan(0);
  });

  it('Should have a click event and call the provided callback prop function "handleMove".', () => {
    const btn = sliderDotComponent.find('button[data-testid="activeBtn"]');
    btn.simulate('click');
    expect(exampleData.clicksCount).toEqual(1);
    exampleData.clicksCount = 0;
  });
});