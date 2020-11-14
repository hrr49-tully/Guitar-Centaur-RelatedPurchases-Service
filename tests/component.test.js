import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '../client/test';

// TODO: move to config file
Enzyme.configure({adapter: new Adapter()});

describe('Component', () => {
  it('should show text', () => {
    const wrapper = shallow(<Component />);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('Text goes here');
  });
});