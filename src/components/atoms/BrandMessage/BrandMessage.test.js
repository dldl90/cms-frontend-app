import React from 'react';
import { shallow } from 'enzyme';
import BrandMessage from './BrandMessage';
import { Image, Video, RichTextEditor, Button } from '../../index';
import * as campaignTracking from './brandMessageTracking';

jest.mock('../../../utils/tracking');
jest.mock('./brandMessageTracking');

const mockProps = {
  pageTitle: 'Campaign page',
  copy: 'Test copy block',
  cta: {
    title: 'Get yours now',
    link: 'noths.com',
    color: '#ff9269',
  },
  media: {
    filePath: 'test image url',
    fileType: 'image/jpg',
    altText: 'test image alt text',
  },
};

describe('When rendering the <BrandMessage />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<BrandMessage {...mockProps} />);
  });

  it('should display an image if page data does not include video content type', () => {
    const expectedUrl = 'test image url';
    expect(component.find(Image)).toHaveLength(1);
    expect(component.find(Image).prop('src')).toEqual(expectedUrl);
  });

  it('should display the page copy', () => {
    const expectedProps = { html: 'Test copy block', smallText: false, copyColor: '#686868' };

    expect(component.find(RichTextEditor)).toHaveLength(1);
    expect(component.find(RichTextEditor).props()).toEqual(expectedProps);
  });

  it('should trigger trackCampaignClick onMouseDown of CTA button', () => {
    const expectedArgs = {
      destinationUrl: 'noths.com',
      eventCategory: 'Campaign page',
      eventLabel: 'Get yours now',
    };

    const button = component.find(Button);
    button.prop('handleMouseDown')();
    expect(campaignTracking.trackCampaignClick).toHaveBeenCalledTimes(1);
    expect(campaignTracking.trackCampaignClick).toHaveBeenCalledWith(expectedArgs);
  });

  describe('When rendering a video', () => {
    const videoMockProps = {
      ...mockProps,
      media: {
        filePath: 'test video url',
        fileType: 'video/mp4',
        altText: 'test video alt text',
      },
    };

    beforeAll(() => {
      component = shallow(<BrandMessage {...videoMockProps} />);
    });

    it('should display a video if page data includes video content type', () => {
      const expectedUrl = 'test video url';

      expect(component.find(Video)).toHaveLength(1);
      expect(component.find(Video).prop('src')).toEqual(expectedUrl);
    });
  });
});
