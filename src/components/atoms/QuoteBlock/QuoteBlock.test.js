import React from 'react';
import { shallow } from 'enzyme';
import QuoteBlock from './QuoteBlock';
import { ContainerFluid } from '../../../styles/layout';
import { BlockQuote, QuoteWrapper, Author } from './QuoteBlock.style';
import Image from '../Image/Image';

describe('<QuoteBlock />', () => {
  const mockProps = {
    copy: 'test copy',
    copyColor: 'red',
    quotationColor: 'green',
    backgroundColor: 'blue',
  };

  it('should render without props', () => {
    const component = shallow(<QuoteBlock />);
    expect(component.find(ContainerFluid).length).toEqual(1);
  });

  it('should set the background color based on props', () => {
    const component = shallow(<QuoteBlock {...mockProps} />);

    expect(component.find(BlockQuote).prop('backgroundColor')).toEqual('blue');
  });
  it('should set the copy color based on props', () => {
    const component = shallow(<QuoteBlock {...mockProps} />);

    expect(component.find(BlockQuote).prop('copyColor')).toEqual('red');
  });
  it('should set the quotation mark color color based on props', () => {
    const component = shallow(<QuoteBlock {...mockProps} />);

    expect(component.find(QuoteWrapper).prop('quotationColor')).toEqual('green');
  });
  it('should include an author if required', () => {
    const newProps = {
      ...mockProps,
      copy: 'test copy',
      copyColor: 'red',
      author: 'test author',
    };

    const component = shallow(<QuoteBlock {...newProps} />);
    expect(component.find(Author).length).toEqual(1);
  });

  it('should include an image if required', () => {
    const newProps = {
      ...mockProps,
      image: {
        src: 'test image',
        alt: 'test alt text',
      },
    };

    const component = shallow(<QuoteBlock {...newProps} />);
    expect(component.find(Image).length).toEqual(1);
    expect(component.find(Image).prop('src')).toEqual('test image');
  });
});
