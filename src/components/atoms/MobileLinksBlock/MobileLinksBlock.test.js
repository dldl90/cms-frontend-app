import React from 'react';
import { mount } from 'enzyme';
import MobileLinksBlock from './MobileLinksBlock';
import { NavPill } from './MobileLinksBlock.style';

jest.mock('./scrollHelper');

describe('<MobileLinksBlock />', () => {
  const mockProps = {
    sidebar: {
      links: [{ title: 'link-1', href: '/link1' }, { title: 'link-2', href: '/link2' }],
    },
    currentPath: '/link1',
  };

  const component = mount(<MobileLinksBlock {...mockProps} />);

  it('should display a list of links', () => {
    const expectedLinkTitle = 'link-1';
    const Links = component.find(NavPill);

    expect(Links.length).toEqual(2);

    expect(
      Links.at(0)
        .find(NavPill)
        .text()
    ).toEqual(expectedLinkTitle);
  });

  it('should set selected to true if link href matches the current page', () => {
    const Links = component.find(NavPill);

    expect(
      Links.at(0)
        .find(NavPill)
        .prop('selected')
    ).toEqual(true);
    expect(
      Links.at(1)
        .find(NavPill)
        .prop('selected')
    ).toEqual(false);

    component.setProps({ currentPath: '/link2' });
    const UpdatedLinks = component.find(NavPill);

    expect(
      UpdatedLinks.at(0)
        .find(NavPill)
        .prop('selected')
    ).toEqual(false);
    expect(
      UpdatedLinks.at(1)
        .find(NavPill)
        .prop('selected')
    ).toEqual(true);
  });
});
