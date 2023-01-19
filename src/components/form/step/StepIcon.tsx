/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface IProps {
  stepNumber: number;
  isActive: boolean;
}

const stepIconStyle = (isActive: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: isActive ? 'black' : 'white',
    backgroundColor: isActive ? '#BEE2FB' : 'transparent',

    fontWeight: 'bold',
    fontSize: 14,

    width: 32,
    height: 32,

    border: isActive ? '' : '1px solid white',
    borderRadius: '50%',
  });

const StepIcon = ({ isActive, stepNumber }: IProps) => {
  return (
    <div css={[stepIconStyle(isActive)]}>
      <div>{stepNumber}</div>
    </div>
  );
};

export default StepIcon;
