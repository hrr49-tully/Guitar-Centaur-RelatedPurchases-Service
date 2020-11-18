const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SliderArrowRight from '../client/SliderArrowRight.jsx';

describe('SliderArrowRight ', () => {
  const exampleData = {
    clicksCount: 0,
    handleMove: function(e){ exampleData.clicksCount++; }
  };

  const sliderArrowRightComponent = mount(<SliderArrowRight handleMove={exampleData.handleMove}/>);

  it('Should render the SliderArrowRight React component.', () => {
    expect(sliderArrowRightComponent).toBeDefined();
  });

  it('Should have an arrow button.', () => {
    expect(sliderArrowRightComponent.find('div[data-testid="arrowBtn"]').length).toBeGreaterThan(0);
  });

  it('Should have a click event and call the provided callback prop function "handleMove".', () => {
    const btn = sliderArrowRightComponent.find('div[data-testid="arrowBtn"]');
    btn.simulate('click');
    expect(exampleData.clicksCount).toEqual(1);
    exampleData.clicksCount = 0;
  });
});