import React from 'react';
import { shallow } from 'enzyme';
import Bar from '../components/Bar';

describe('Bar', () => {
  it('Should Render Bar Component', () => {
    const barWrapper = shallow(<Bar name={name}/>);
    expect(barWrapper.exists()).toBe(true);
  });

  it('Should Show Passed `name` Prop Value', () => {
    const name = 'Name';
    const barWrapper = shallow(<Bar name={name}/>);
    console.log(barWrapper.debug())
    expect(barWrapper.find('#barName')).toHaveLength(1);
    expect(barWrapper.find('#barName').text()).toBe(name);
  });
});