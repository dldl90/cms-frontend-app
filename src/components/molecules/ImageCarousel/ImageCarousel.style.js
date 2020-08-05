import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 ${({ theme }) => theme.space.M};

  .slick-dots {
    position: relative;
    bottom: 0;
    padding: ${({ theme }) => `${theme.space.S} 0`};

    li {
      button {
        border-radius: 50%;
        height: ${({ theme }) => theme.space.S};
        width: ${({ theme }) => theme.space.S};
        font-size: 0;
        padding: 0;
        background-color: transparent;
        border: ${({ theme }) => ` 1px solid ${theme.color.accent}`};
        outline: none;

        &:before {
          content: '';
        }
      }

      &.slick-active button {
        background-color: ${({ theme }) => theme.color.accent};
      }
    }
  }
`;

export const ImageCardWrapper = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => `0 ${theme.space.S}`};
`;
