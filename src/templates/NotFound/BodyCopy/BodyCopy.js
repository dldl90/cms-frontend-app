import React from 'react';
import { CopyWrapper, CopyText, SubHeading } from './BodyCopy.style';

const BodyCopy = () => {
  return (
    <CopyWrapper>
      <SubHeading>We can&apos;t find the page you&apos;re looking for</SubHeading>
      <CopyText>
        It may have been moved, taken down or entered incorrectly.
        <br />
        Sorry. All hope is not lost, though. Try searching for it again here, or go to one of the
        links below.
      </CopyText>
    </CopyWrapper>
  );
};

export default BodyCopy;
