import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import EntryForm from '../src/entryForm.js';

describe('Entry Form', () => {

  it('EntryForm component should exist', () => {
    const wrapper = shallow(<EntryForm />);
    expect(wrapper).to.exist;
  });

});
