import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ratings from '../client/Ratings.jsx';

// TODO: move to config file
Enzyme.configure({adapter: new Adapter()});

describe('Ratings', () => {
  it('should show text', () => {
    const wrapper = shallow(<Ratings />);
    const star = wrapper.find('<div>');
    //expect(star).to.exist();
  });
});