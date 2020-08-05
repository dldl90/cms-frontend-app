import styled from 'styled-components';
import { nothsTheme } from '../../styles/noths.theme';
import { media } from '../../styles/breakpoints';

export const BackgroundColor = styled.div`
  background: ${({ color, theme }) => color || theme.color.white};

  ${media.tablet`
    background: ${({ theme }) => theme.color.white};
  `}
`;

export const HeroBannerWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.space.S};
  ${media.tablet`
    margin-bottom: ${({ theme }) => theme.space.M};
  `};
`;

const defaultBottomMargin = nothsTheme.space.S;

export const SectionWrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  margin: 0 ${({ theme }) => theme.space.S};
  margin-bottom: ${defaultBottomMargin};
  padding: ${({ theme }) => `${theme.space.L} ${theme.space.S}`};

  ${media.tablet`
    margin: 0 auto;
    margin-bottom: ${defaultBottomMargin};
    padding: ${({ theme }) => theme.space.L};
  `};
`;

export const SectionTitleWrapper = styled(SectionWrapper)`
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;

  ${media.tablet`
    padding-top: ${({ theme }) => `${theme.space.L} `};
    margin-bottom: 0;
    padding-bottom: 0;
  `};
`;

export const QuoteBlockWrapper = styled(SectionWrapper)`
  background: none;
  padding: ${({ theme }) => `0 ${theme.space.S}`};

  ${media.tablet`
    margin-top: 24px;
    padding-bottom: 0;
    padding-top: 0;
  `};
`;

export const ImageGalleryWrapper = styled(SectionWrapper)`
  background: none;
  padding: 0;
`;

export const CtaButtonWrapper = styled(SectionWrapper)`
  text-align: center;
  padding-top: 0;
  margin-top: -${defaultBottomMargin};

  ${media.tablet`
    padding-top: 0;
  `};
`;
