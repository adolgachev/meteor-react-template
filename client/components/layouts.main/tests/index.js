const { describe, it } = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../index.jsx';

describe('components.layouts.main', () => {

  it('should contain navigations', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains("root-content")).to.be.equal(true);
  });

});
