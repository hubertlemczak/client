import { css } from '@emotion/react';
import { ButtonProps } from './Button';

type TButtonStyle = Omit<ButtonProps, 'label' | 'onClick'>;

const font = {
  small: 12,
  medium: 14,
  large: 16,
};

export const buttonStyle = ({ primary, size, backgroundColor }: TButtonStyle) =>
  css({
    fontWeight: 'bold',
    border: 0,
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    padding: '0.75em 1.25em',
    color: primary ? 'white' : '#333',
    backgroundColor: backgroundColor
      ? backgroundColor
      : primary
      ? '#1ea7fd'
      : 'transparent',
    boxShadow: !primary ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px' : '',
    fontSize: size && font[size],
  });
