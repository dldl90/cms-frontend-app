import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, SidebarLink, SidebarLinks, Link } from './DesktopLinksBlock.style';

class DesktopLinksBlock extends PureComponent {
  static propTypes = {
    sidebar: PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    }).isRequired,
    currentPath: PropTypes.string.isRequired,
  };

  renderLinks = links => {
    return links.map(link => {
      const { currentPath } = this.props;
      const isCurrentPage = link.href === currentPath;

      return (
        <SidebarLink key={link.title}>
          <Link selected={isCurrentPage} href={link.href}>
            {link.title}
          </Link>
        </SidebarLink>
      );
    });
  };

  render() {
    const {
      sidebar: { title, links },
    } = this.props;
    return (
      <Wrapper data-testid="DesktopLinksBlock">
        <Title>{title}</Title>
        <SidebarLinks>{this.renderLinks(links)}</SidebarLinks>
      </Wrapper>
    );
  }
}

export default DesktopLinksBlock;
