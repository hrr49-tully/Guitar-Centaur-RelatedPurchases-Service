const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SliderStack from '../client/SliderStack.jsx';
import RelatedPurchase from '../client/RelatedPurchase.jsx';

describe('SliderStack ', () => {
  const exampleData = {
    relatedData: [0, 1, 2, 3, 4, 5, 6, 7],
    handleItemChange: function(){},
    resetStackPosition: function() {}
  };

  const sliderStackComponent = mount(<SliderStack relatedData={exampleData.relatedData} handleItemChange={exampleData.handleItemChange} resetStackPosition={exampleData.resetStackPosition}/>);

  it('Should render the SliderStack React component.', () => {
    expect(sliderStackComponent).toBeDefined();
  });

  it('Should contain at least one RelatedPurchase React component.', () => {
    expect(sliderStackComponent.find(RelatedPurchase).length).toBeGreaterThan(0);
  });
});