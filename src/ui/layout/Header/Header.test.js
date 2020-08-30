import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('test Header', () => {
  it('should render ok', () => {
    const wrapper = shallow(
      <Header>
        <p>test content</p>
      </Header>
    );
    const header = wrapper.find('header');
    const title = header.find('h1');
    const content = header.find('p');

    expect(title.text()).toBe('CovidBingo');
    expect(content.text()).toBe('test content');
  });
});
