import React from 'react';
import { shallow } from 'enzyme';
import DesktopLinksBlock from './DesktopLinksBlock';
import { Title, SidebarLink, Link } from './DesktopLinksBlock.style';

describe('<DesktopLinksBlock />', () => {
  const mockProps = {
    sidebar: {
      title: 'Test sidebar title',
      links: [{ title: 'link-1', href: '/link1' }, { title: 'link-2', href: '/link2' }],
    },
    currentPath: '/link1',
  };

  const component = shallow(<DesktopLinksBlock {...mockProps} />);

  it('should display a title', () => {
    const expectedTitle = 'Test sidebar title';
    const title = component.find(Title);

    expect(title.length).toEqual(1);
    expect(title.text()).toEqual(expectedTitle);
  });

  it('should display a list of links', () => {
    const expectedLinkTitle = 'link-1';
    const Links = component.find(SidebarLink);

    expect(Links.length).toEqual(2);

    expect(
      Links.at(0)
        .find(Link)
        .text()
    ).toEqual(expectedLinkTitle);
  });

  it('should set selected to true if link href matches the current page', () => {
    const Links = component.find(SidebarLink);

    expect(
      Links.at(0)
        .find(Link)
        .prop('selected')
    ).toEqual(true);
    expect(
      Links.at(1)
        .find(Link)
        .prop('selected')
    ).toEqual(false);

    component.setProps({ currentPath: '/link2' });
    const UpdatedLinks = component.find(SidebarLink);

    expect(
      UpdatedLinks.at(0)
        .find(Link)
        .prop('selected')
    ).toEqual(false);
    expect(
      UpdatedLinks.at(1)
        .find(Link)
        .prop('selected')
    ).toEqual(true);
  });
});
