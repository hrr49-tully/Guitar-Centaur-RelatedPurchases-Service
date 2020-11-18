const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Details from '../client/Details.jsx';

describe('Details ', () => {
  const detailExample = {
    coverage: '6KHB4eZhXZRRyeWb',
    overview: '7MWYoJYtdU7L2jKL',
    specifications: 'fspgMFvf3UUfJdgv'
  };

  const detailsComponent = shallow(<Details details={detailExample}/>);

  it('Should render the Details React component.', () => {
    expect(detailsComponent).toBeDefined();
  });

  it('Should render the given coverage content.', () => {
    expect(detailsComponent.text()).toContain(detailExample.coverage);
  });

  it('Should render the given overview content.', () => {
    expect(detailsComponent.text()).toContain(detailExample.overview);
  });

  it('Should render the given specifications content.', () => {
    expect(detailsComponent.text()).toContain(detailExample.specifications);
  });
});