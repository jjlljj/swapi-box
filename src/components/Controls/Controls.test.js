/* eslint-disable */

import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {

  it('should exist', () => {
    const renderedComponent = shallow(<Controls />);

    expect(renderedComponent).toBeDefined();
  })

})
