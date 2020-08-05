import React from 'react';
import { shallow } from 'enzyme';
import BasicCampaignTemplate from './BasicCampaignTemplate';
import { Image, Video, RichTextEditor, Button } from '../../components';
import { Heading } from './BasicCampaignTemplate.style';
import * as campaignTracking from './basicCampaignTracking';

jest.mock('../../utils/contentstack');
jest.mock('../../utils/tracking');
jest.mock('./basicCampaignTracking');

const mockProps = {
  page: {
    seo: {
      title: 'Campaign seo title',
      metaDescription: 'description',
    },
    pageTitle: 'Campaign page',
    pageUrl: '/campaign',
    heading: {
      image: 'test image url',
      imageAlt: 'We love Birchbox',
      contentType: 'image/png',
    },
    contentBlock: {
      copy: 'Test copy block',
      ctaLink: 'https://www.birchbox.co.uk/box',
      ctaTitle: 'Get yours now',
      ctaColor: '#ff9269',
      mainAsset: {
        asset: 'test video url',
        altText: 'test video alt text',
        contentType: 'video/mp4',
      },
    },
  },
  location: { pathname: '/path' },
};

describe('When rendering the Campaign template with ContentStack', () => {
  let component;

  beforeAll(() => {
    component = shallow(<BasicCampaignTemplate {...mockProps} />);
  });

  it('should display the main title with the correct image', () => {
    const expectedUrl = 'test image url';
    expect(component.find(Heading)).toHaveLength(1);
    expect(component.find(Image)).toHaveLength(1);
    expect(component.find(Image).prop('src')).toEqual(expectedUrl);
  });

  it('should display a video if page data includes video content type', () => {
    const expectedUrl = 'test video url';

    expect(component.find(Video)).toHaveLength(1);
    expect(component.find(Video).prop('src')).toEqual(expectedUrl);
  });

  it('should display an image if page data does not include video content type', () => {
    const mainAssetProps = {
      asset: 'test image url',
      altText: 'test image alt text',
      contentType: 'image/jpg',
    };

    const expectedUrl = 'test image url';
    component.setState({ ...mockProps, mainAssetProps });
    expect(component.find(Image)).toHaveLength(1);
    expect(component.find(Image).prop('src')).toEqual(expectedUrl);
  });

  it('should display the page copy', () => {
    const expectedProps = { html: 'Test copy block', smallText: false, copyColor: '#000' };

    expect(component.find(RichTextEditor)).toHaveLength(1);
    expect(component.find(RichTextEditor).props()).toEqual(expectedProps);
  });

  it('should trigger trackCampaignClick onMouseDown of CTA button', () => {
    const expectedArgs = {
      destinationUrl: 'https://www.birchbox.co.uk/box',
      eventCategory: 'Campaign page',
      eventLabel: 'Get yours now',
    };

    const button = component.find(Button);
    button.prop('handleMouseDown')();
    expect(campaignTracking.trackCampaignClick).toHaveBeenCalledTimes(1);
    expect(campaignTracking.trackCampaignClick).toHaveBeenCalledWith(expectedArgs);
  });
});
