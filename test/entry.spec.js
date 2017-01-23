import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Entry from '../src/entry';

describe('Entry', () => {

  it('should exist', () => {
    let wrapper = shallow(<Entry />);
    expect(wrapper).to.exist;
  });

  // it('should have a term and a definition', () => {
  //
  // });

});
