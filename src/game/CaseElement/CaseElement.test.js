import React from 'react';
import { shallow } from 'enzyme';

import CaseElement from './CaseElement';

describe('test CaseElement', () => {
  it('should render ok', () => {
    const wrapper = shallow(<CaseElement title="today" value="1000" />);
    const title = wrapper.find('h2');
    const value = wrapper.find('p');

    expect(title.text()).toBe('today');
    expect(value.text()).toBe('1000');
  })
});
