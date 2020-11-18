const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import RelatedPurchase from '../client/RelatedPurchase.jsx';

describe('RelatedPurchase ', () => {
  const exampleData = {
    id: 0,
    cost: 123456,
    title: 'FedPibzHWT463hn4',
    image_url: 'f5eWryR9FVwYi6ir'
  };

  const relatedPurchaseComponent = mount(<RelatedPurchase data={exampleData}/>);

  it('Should render the RelatedPurchase React component.', () => {
    expect(relatedPurchaseComponent).toBeDefined();
  });

  it('Should have a an image for the related purchase.', () => {
    expect(relatedPurchaseComponent.find('img[data-testid="relatedPurchaseImg"]').length).toBeGreaterThan(0);
  });

  it('Should have a link for the related title.', () => {
    expect(relatedPurchaseComponent.find('a[data-testid="relatedPurchaseTitle"]').length).toBeGreaterThan(0);
  });

  it('Should have a list item the related cost.', () => {
    expect(relatedPurchaseComponent.find('li[data-testid="relatedPurchaseCost"]').length).toBeGreaterThan(0);
  });
});