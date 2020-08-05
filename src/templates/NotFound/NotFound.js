import React from 'react';
import { Route } from 'react-router-dom';

import { InfoHeading, BorderWrapper } from '../../styles/global';
import {
  PageWrapper,
  ContentContainer,
  DropShadowCard,
  GridWrapper,
  CategoryBlock,
} from './NotFound.style';
import BodyCopy from './BodyCopy/BodyCopy';
import SearchForm from './SearchForm/SearchForm';
import { Seo } from '../../components';
import { seoData } from '../../utils/transformers/global';

import { categoryBlocks } from './NotFoundUtils';

const seo = seoData({ title: 'page not found | notonthehighstreet.com' });

const NotFound = () => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          // set status on staticContext so when rendering on the server
          // we can access the status on the context object we passed
          // eslint-disable-next-line no-param-reassign
          staticContext.status = 404;
        }
        return <NotFoundComponent />;
      }}
    />
  );
};

export const NotFoundComponent = () => (
  <BorderWrapper>
    <Seo {...seo} />
    <PageWrapper>
      <ContentContainer>
        <InfoHeading data-testid="NotFound-InfoHeading">WELL, THIS IS AWKWARD</InfoHeading>
        <DropShadowCard data-testid="NotFound-DropShadowCard">
          <BodyCopy />
          <SearchForm />
        </DropShadowCard>
        <GridWrapper>
          {categoryBlocks.map(category => {
            const { href, image, id, name } = category;
            return (
              <CategoryBlock href={href} key={id} data-testid="NotFound-CategoryBlock">
                <img
                  src={`https://static-files.qa.noths.com/cms-frontend/img/${image}`}
                  alt={name}
                />
                <h3>
                  <span>{name}</span>
                </h3>
              </CategoryBlock>
            );
          })}
        </GridWrapper>
      </ContentContainer>
    </PageWrapper>
  </BorderWrapper>
);

export default NotFound;
