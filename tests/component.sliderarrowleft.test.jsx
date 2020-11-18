const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SliderArrowLeft from '../client/SliderArrowLeft.jsx';

describe('SliderArrowLeft ', () => {
  const exampleData = {
    clicksCount: 0,
    handleMove: function(e){ exampleData.clicksCount++; }
  };

  const sliderArrowLeftComponent = mount(<SliderArrowLeft handleMove={exampleData.handleMove}/>);

  it('Should render the SliderArrowLeft React component.', () => {
    expect(sliderArrowLeftComponent).toBeDefined();
  });

  it('Should have an arrow button.', () => {
    expect(sliderArrowLeftComponent.find('div[data-testid="arrowBtn"]').length).toBeGreaterThan(0);
  });

  it('Should have a click event and call the provided callback prop function "handleMove".', () => {
    const btn = sliderArrowLeftComponent.find('div[data-testid="arrowBtn"]');
    btn.simulate('click');
    expect(exampleData.clicksCount).toEqual(1);
    exampleData.clicksCount = 0;
  });
});