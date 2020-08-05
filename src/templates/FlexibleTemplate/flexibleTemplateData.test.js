/* eslint-disable camelcase */
import flexibleTemplateData from './flexibleTemplateData';

describe('flexibleTemplateData', () => {
  const title = 'page title';
  const url = '/page-url';

  const seo = {
    title: 'seo title',
    meta_description: 'meta desc',
    meta_tags: 'meta tags',
    meta_desc: 'meta desc',
    meta_robots: 'meta robots',
  };

  it('defaults any missing data', () => {
    const expectedData = {
      componentSections: [],
      pageTitle: '',
      pageUrl: '',
      heroBanner: undefined,
      seo: {
        canonical: 'https://www.notonthehighstreet.com',
        metaDesc: '',
        metaRobots: '',
        metaTags: '',
        title: '',
      },
    };

    expect(flexibleTemplateData({})).toEqual(expectedData);
  });

  it('returns the correct page data', () => {
    const expectedData = {
      componentSections: [],
      pageTitle: 'page title',
      pageUrl: '/page-url',
      seo: {
        canonical: 'https://www.notonthehighstreet.com/page-url',
        metaDesc: '',
        metaRobots: '',
        metaTags: '',
        title: '',
      },
    };

    expect(flexibleTemplateData({ title, url })).toEqual(expectedData);
  });

  it('returns the correct seo data', () => {
    const expectedData = {
      componentSections: [],
      pageTitle: '',
      pageUrl: '/page-url',
      seo: {
        canonical: 'https://www.notonthehighstreet.com/page-url',
        metaDesc: 'meta desc',
        metaRobots: 'meta robots',
        metaTags: 'meta tags',
        title: 'seo title',
      },
    };

    expect(flexibleTemplateData({ seo, url })).toEqual(expectedData);
  });

  it('returns the correct heroBanner data', () => {
    const hero_banner = {
      hero_banner_option: 'Solid Background Color',
      solid_background_color: 'blue',
      hero_content: {
        copy: 'test copy',
        content_alignment: 'left',
        title_image: {
          mobile_image: {
            url: 'title-image-mobile',
          },
          desktop_image: {
            url: 'title-image-desktop',
          },
          alt_text: 'title image alt',
        },
      },
    };

    const expectedData = {
      backgroundColor: 'blue',
      backgroundImage: '',
      overlay: null,
      alignment: 'left',
      titleImage: {
        mobile: 'title-image-mobile',
        desktop: 'title-image-desktop',
        alt: 'title image alt',
      },
      copy: 'test copy',
      copyColor: undefined,
    };

    const returnedData = flexibleTemplateData({ hero_banner });

    expect(returnedData.heroBanner).toEqual(expectedData);
  });

  describe('returning the correct component data', () => {
    describe('when the component key exists in flexibleComponents.js', () => {
      it('returns the correctly formatted component name and data', () => {
        const sections = [{ section_title: { header: 'test copy' } }];

        const returnedData = flexibleTemplateData({ sections });
        const expectedCamelCaseKey = 'sectionTitle';

        expect(returnedData.componentSections[0].sectionKey).toEqual(expectedCamelCaseKey);
        expect(returnedData.componentSections[0].data).toEqual({ header: 'test copy' });
      });
    });

    describe('when the component key does not exist in flexibleComponents.js', () => {
      const sections = [
        { non_existing_component: { data: null } },
        { section_title: { header: 'test copy' } },
        { non_existing_component_2: { data: null } },
      ];

      const returnedData = flexibleTemplateData({ title, url, seo, sections });

      it('handles any keys that arent in flexible components', () => {
        expect(returnedData.componentSections.length).toEqual(1);
      });

      it('strips out any null values from componentSections data', () => {
        expect(returnedData.componentSections).not.toContain(null);
      });
    });
  });
});
