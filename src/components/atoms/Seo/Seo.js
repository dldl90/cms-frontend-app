import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class Seo extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    metaDesc: PropTypes.string.isRequired,
    metaTags: PropTypes.string.isRequired,
    metaRobots: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
  };

  render() {
    const { title, metaDesc, metaTags, metaRobots, canonical } = this.props;
    const seoTitle =
      title.length > 0
        ? title
        : 'Unique Gift Ideas and Personalised Gifts | notonthehighstreet.com';

    return (
      <Helmet>
        <title>{seoTitle}</title>
        {metaDesc.length > 0 && <meta name="description" content={metaDesc} />}
        {metaTags.length > 0 && <meta name="keywords" content={metaTags} />}
        {metaRobots.length > 0 && <meta name="robots" content={metaRobots} />}
        <meta name="apple-itunes-app" content="app-id=571641021" />
        {canonical.length > 0 && <link rel="canonical" href={canonical} />}
      </Helmet>
    );
  }
}

export default Seo;
