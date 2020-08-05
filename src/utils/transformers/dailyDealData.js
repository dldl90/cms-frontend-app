import { seoData } from './global';
import heroBannerdata from '../../components/atoms/HeroBanner/heroBannerData';

const dailyDealsData = data => {
  return {
    pageTitle: data.title,
    endSale: data.end_sale,
    seo: seoData(data.seo, data.url),
    heroBlock: heroBannerdata(data.hero_banner),
    heading: data.heading_section,
    saleGroup: data.sale_group.map(sale => {
      return {
        productBlock: {
          saleDiscount: sale.product_block.sale_discount,
          productThumbnail: sale.product_block.product_thumbnail.url,
          productName: sale.product_block.product_name,
          partnerURL: sale.product_block.partner_url,
          partnerName: sale.product_block.partner_name,
          productCode: sale.product_block.product_code,
          originalPrice: sale.product_block.original_price,
          salePrice: sale.product_block.sale_price,
          productLink: sale.product_block.product_link,
        },
        copyGroup: {
          titleCopy: sale.copy_group.title_copy,
          bodyCopy: sale.copy_group.body_copy,
        },
      };
    }),
    saleEnded: {
      title: data.sale_ended.title,
      copy: data.sale_ended.body_copy,
      buttons: data.sale_ended.buttons_cta.map(button => {
        return {
          labelCta: button.label_cta,
          linkCta: button.link_cta,
        };
      }),
    },
  };
};

export default dailyDealsData;
