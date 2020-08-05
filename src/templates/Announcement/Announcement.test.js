import React from 'react';
import { shallow } from 'enzyme';
import { Announcement } from './Announcement';

import { Button, RichTextEditor } from '../../components';

import { UnsubscribeWrapper, InfoHeading } from './Announcement.style';

const mockProps = {
  loading: false,
  page: {
    pageTitle: 'You have successfully unsubscribed',
    seo: {
      title: 'Unsubscribe Success',
      metaDesc: 'Unsubscribe Success page',
      canonical: 'https://www.notonthehighstreet.com/unsubscribe-success',
    },
    pageUrl: '/unsubscribe-success',
    contentBlock: {
      heading: 'You have successfully unsubscribed',
      copy: 'Your email address has been unsubscribed',
    },
    buttonBlock: [
      {
        ctaTitle: 'RETURN TO HOMEPAGE',
        ctaLink: 'https://www.notonthehighstreet.com',
      },
      {
        ctaTitle: 'Check Balance',
        ctaLink: 'https://giftcards.com/balance-check',
      },
    ],
  },
};

describe('When rendering the Unsubscribe Success page and data have loaded successfully', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Announcement {...mockProps} />);
  });

  it('should display', () => {
    expect(component.find(UnsubscribeWrapper)).toHaveLength(1);
  });
  it('should display the main title', () => {
    const expectedTitle = 'You have successfully unsubscribed';
    expect(component.find(InfoHeading)).toHaveLength(1);
    expect(component.find(InfoHeading).text()).toEqual(expectedTitle);
  });
  it('should display the paragraph', () => {
    const expectedText = 'Your email address has been unsubscribed';
    const Editor = component.find(RichTextEditor);
    expect(Editor.length).toEqual(1);
    expect(Editor.prop('html')).toEqual(expectedText);
  });
  it('should display multiple CTA Links', () => {
    const button = component.find(Button);
    expect(button.length).toEqual(2);
    expect(button.at(0).prop('title')).toEqual('RETURN TO HOMEPAGE');
    expect(button.at(1).prop('title')).toEqual('Check Balance');
  });
});
