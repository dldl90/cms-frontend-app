import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { WrapperBox, Heading, SubHeading, OutlineButton, ButtonsWrapper } from './Dealended.style';
import RichTextEditor from '../../../components/atoms/RichTextEditor/RichTextEditor';
import { Seo } from '../../../components';

class DealEnd extends PureComponent {
  static propTypes = {
    saleEnded: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      buttons: PropTypes.arrayOf(PropTypes.object),
    }),
    seo: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    saleEnded: null,
  };

  render() {
    const { saleEnded, seo } = this.props;
    const { title, copy, buttons } = saleEnded;

    return (
      <WrapperBox data-testid="DealEnd">
        <Heading>{title}</Heading>
        <Seo {...seo} />
        <SubHeading>
          <RichTextEditor html={copy} data-testid="RichTextEditor" />
        </SubHeading>
        <ButtonsWrapper>
          {buttons.map(button => {
            return (
              <OutlineButton href={button.linkCta} key={button.labelCta}>
                {button.labelCta}
              </OutlineButton>
            );
          })}
        </ButtonsWrapper>
      </WrapperBox>
    );
  }
}

export default DealEnd;
