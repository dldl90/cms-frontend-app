/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import { GiftCards } from './GiftCards';

import { Image } from '../../components';

import { Container, Title, SubTitle, Paragraph, Button, MainImage } from './GiftCards.style';

const mockProps = {
  loading: false,
  page: {
    seo: {
      title: 'Gift Cards',
      metaDesc: 'Gift cards page',
      canonical: 'https://noths.com/',
    },
    pageTitle: 'Gift Cards',
    pageUrl: '/gift-cards',
    heading: {
      image: 'made_for_everyone.png',
      imageAlt: 'Made for everyone',
      contentType: 'img',
    },
    contentBlock: {
      copy: 'Not sure what they want?',
      buttonLinks: [
        {
          ctaTitle: 'Buy E-Gift Card',
          ctaLink: 'https://giftcards.com/digital',
        },
        {
          ctaTitle: 'Check Balance',
          ctaLink: 'https://giftcards.com/balance-check',
        },
      ],
      mainAsset: {
        asset:
          'https://images.contentstack.io/v3/assets/blt86ae12752df2eb1c/bltb8e084ae3f722e03/5c065ccf4d265a911904ea27/collage.jpg',
        altText: 'Gift Card Banner',
        contentType: 'img',
      },
    },
  },
};

describe('When rendering the GiftCards and page data have loaded successfully', () => {
  let component;

  beforeAll(() => {
    component = shallow(<GiftCards {...mockProps} />);
  });

  it('should display', () => {
    expect(component.find(Container)).toHaveLength(1);
  });
  it('should display the main title', () => {
    const expectedTitle = 'Gift Cards';
    expect(component.find(Title)).toHaveLength(1);
    expect(component.find(Title).text()).toEqual(expectedTitle);
  });
  it('should display subtitle as a image in <Image /> component', () => {
    expect(component.find(SubTitle).find(Image)).toHaveLength(1);
  });
  it('should display the paragraph', () => {
    const expectedText = 'Not sure what they want?';
    expect(component.find(Paragraph)).toHaveLength(1);
    expect(component.find(Paragraph).text()).toEqual(expectedText);
  });
  it('should display multiple CTA Links', () => {
    const expectedLinks = [
      {
        title: 'Buy E-Gift Card',
        link: 'https://giftcards.com/digital',
      },
      {
        title: 'Check Balance',
        link: 'https://giftcards.com/balance-check',
      },
    ];
    const button = component.find(Button);
    expect(button.length).toEqual(2);
    expect(button.at(0).text()).toEqual(expectedLinks[0].title);
    expect(button.at(0).prop('href')).toEqual(expectedLinks[0].link);
  });
  it('should display a banner in <Image /> component', () => {
    expect(component.find(MainImage).find(Image)).toHaveLength(1);
  });
});
