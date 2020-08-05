import React from 'react';
import { shallow } from 'enzyme';
import {
  PartnersBlock,
  PartnersLargeImage,
  PartnersSmallImage,
  PartnerSubTitle,
} from './PartnerBlock.style';
import { Heading, SubTitle, Title } from '../../../styles/global';
import PartnerBlock from './PartnerBlock';
import mockedHomepageProps from '../../../utils/tests/mockedHomepageProps';

describe('when rendering <PartnerBlock />', () => {
  const mockProps = {
    sectionId: '5',
    ...mockedHomepageProps.partners,
  };

  let partnersBlock;
  const component = shallow(<PartnerBlock {...mockProps} />);

  beforeAll(() => {
    partnersBlock = component.find(PartnersBlock);
  });

  it('should display a heading', () => {
    const expectedHeading = 'GIVE HAPPY, SHOP SMALL';
    expect(component.find(Heading).length).toEqual(1);
    expect(component.find(Heading).text()).toEqual(expectedHeading);
  });

  it('should display a sub title', () => {
    const expectedHeading = 'Shopping small brings joy to artisans like these...';
    expect(component.find(PartnerSubTitle).text()).toEqual(expectedHeading);
  });

  it('should display 2 partner columns', () => {
    expect(partnersBlock.length).toEqual(2);
  });

  it('should display a title in each partners column', () => {
    const expectedTitle = 'Ruth at Hello Ruth';
    expect(
      partnersBlock
        .at(0)
        .find(Title)
        .text()
    ).toEqual(expectedTitle);
  });

  it('should display a sub title in each partners column', () => {
    const expectedSubtitle = 'Who creates bespoke art from photographs';
    expect(
      partnersBlock
        .at(0)
        .find(SubTitle)
        .text()
    ).toEqual(expectedSubtitle);
  });

  it('should display 1 large image in each partners column', () => {
    const expectedDesktopImage = 'test desktop main image 1';
    const expectedMobileImage = 'test mobile main image 1';
    expect(
      partnersBlock
        .at(0)
        .find(PartnersLargeImage)
        .prop('bgDesktop')
    ).toEqual(expectedDesktopImage);

    expect(
      partnersBlock
        .at(0)
        .find(PartnersLargeImage)
        .prop('bgMobile')
    ).toEqual(expectedMobileImage);
  });

  it('should display 2 small image in each partners column', () => {
    const expectedTopImage = 'test top image 1';
    const expectedBottomImage = 'test bottom image 1';
    expect(partnersBlock.at(0).find(PartnersSmallImage).length).toEqual(2);
    expect(
      partnersBlock
        .at(0)
        .find(PartnersSmallImage)
        .at(0)
        .prop('background')
    ).toEqual(expectedTopImage);
    expect(
      partnersBlock
        .at(0)
        .find(PartnersSmallImage)
        .at(1)
        .prop('background')
    ).toEqual(expectedBottomImage);
  });
});
