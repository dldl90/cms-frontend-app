import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, NavWrapper, NavPill } from './MobileLinksBlock.style';
import getWrapperCenter from './scrollHelper';

class MobileLinksBlock extends Component {
  static propTypes = {
    sidebar: PropTypes.shape({
      links: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    }).isRequired,
    currentPath: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.navItem = React.createRef();
    this.currentItem = React.createRef();
  }

  componentDidMount() {
    const navWrapper = this.navItem.current;
    const currentItem = this.currentItem.current;
    const moveTo = getWrapperCenter(navWrapper, currentItem);

    if (navWrapper.scroll) {
      navWrapper.scroll({
        left: moveTo,
        behavior: 'smooth',
      });
    } else {
      navWrapper.scrollLeft = moveTo;
    }
  }

  renderLinks(links) {
    return links.map(link => {
      const { currentPath } = this.props;
      const isCurrentPage = link.href === currentPath;

      const navPillProps = {
        selected: isCurrentPage,
        href: link.href,
        key: link.title,
        ...(isCurrentPage && { ref: this.currentItem }),
      };

      return (
        <NavPill {...navPillProps} data-testid="MobileLinksBlock-NavPill">
          {link.title}
        </NavPill>
      );
    });
  }

  render() {
    const {
      sidebar: { links },
    } = this.props;

    return (
      <Wrapper data-testid="MobileLinksBLock">
        <NavWrapper ref={this.navItem}>{this.renderLinks(links)}</NavWrapper>
      </Wrapper>
    );
  }
}

export default MobileLinksBlock;
