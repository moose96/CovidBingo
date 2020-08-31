import React from 'react';
import { mount } from 'enzyme';

import BingoBoard from './BingoBoard';
import BingoElement from '../BingoElement';

describe('test BingoBoard', () => {
  it('should render 10x10 board', () => {
    const wrapper = mount(<BingoBoard size={10} />);
    const element = wrapper.find(BingoElement);
    expect(element.length).toBe(100);
  })
});
