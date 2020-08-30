import React from 'react';
import { mount } from 'enzyme';

import BingoElement from './BingoElement';

describe('test BingoElement', () => {
  it('should render correct value', () => {
    const handleChange = () => {};

    const wrapper = mount(<BingoElement index={3} value="13" onChange={handleChange} />);
    const input = wrapper.find('input');

    expect(input.prop('index')).toBe(3);
    expect(input.prop('value')).toBe('13');
  });

  it('should change value', () => {
    let resultId = 0;
    const handleChange = (id, value) => resultId = id;

    const wrapper = mount(<BingoElement index={3} value="13" onChange={handleChange} />);
    const input = wrapper.find('input');
    const target = {
      value: '50'
    }

    input.simulate('change', { target });
    expect(resultId).toBe('50');
  })
});
