/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {

  it('should match snapshot', () => {
    const mockMovie = {
      episode: 'Episode IV',
      title: 'A New Hope',
      text: 'It is a period of civil war...'
    }
    const renderendComponent = shallow(<Welcome {...mockMovie} />)

    expect(renderendComponent).toMatchSnapshot()
  })

  it('should match snapshot when passed different props', () => {
    const mockMovie = {
      episode: 'Episode V',
      title: 'The Empire Strikes Back',
      text: 'After the ...'
    }
    const renderendComponent = shallow(<Welcome {...mockMovie} />)

    expect(renderendComponent).toMatchSnapshot()
  })

  it('should match snapshot when not passed props', () => {
    const renderendComponent = shallow(<Welcome />)

    expect(renderendComponent).toMatchSnapshot()
  })

})
