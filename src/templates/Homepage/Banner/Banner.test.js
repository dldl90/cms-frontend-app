import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';
import mockedHomepageProps from '../../../utils/tests/mockedHomepageProps';
import { SubTitle, Title } from '../../../styles/global';
import { Image } from '../../../components';

describe('<Banner />', () => {
  const mockProps = {
    sectionId: '6',
    ...mockedHomepageProps.banner,
  };

  const component = shallow(<Banner {...mockProps} />);

  it('should display a link on the banner', () => {
    const expectedLink = '/birchbox';
    expect(component.length).toEqual(1);
    expect(component.prop('href')).toEqual(expectedLink);
  });

  it('should display a banner image', () => {
    const expectedDesktopImage = 'test desktop image';
    const expectedMobileImage = 'test mobile image';
    expect(component.find(Image).length).toEqual(2);
    expect(
      component
        .find(Image)
        .at(0)
        .prop('src')
    ).toEqual(expectedDesktopImage);
    expect(
      component
        .find(Image)
        .at(1)
        .prop('src')
    ).toEqual(expectedMobileImage);
  });

  it('should display a title', () => {
    const expectedTitle = "We've partnerd with Birchbox!";
    expect(component.find(Title).length).toEqual(1);
    expect(component.find(Title).text()).toEqual(expectedTitle);
  });
  it('should display a CTA Title', () => {
    const expectedSubtitle = 'Get your first box for £5';
    expect(component.find(SubTitle).length).toEqual(1);
    expect(component.find(SubTitle).text()).toContain(expectedSubtitle);
  });
});
