/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

import Step from '../step/Step';

import useWindowSize from '../../../hooks/useWindowSize';

import DESKTOP_SIDEBARSVG from '../../../../assets/images/bg-sidebar-desktop.svg';
import MOBILE_SIDEBARSVG from '../../../../assets/images/bg-sidebar-mobile.svg';

export interface IStepTextProps {
  stepNumber: number;
  label: string;
}

interface IProps {
  steps: IStepTextProps[];
}

const stepSidebarStyle = css({
  position: 'relative',
  padding: 40,

  maxWidth: 274,
  maxHeight: 568,

  '@media (max-width: 760px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    maxWidth: 375,
    maxHeight: 172,
  },

  img: {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
  },
});

const StepSidebar = ({ steps }: IProps) => {
  const [isActive] = useState<number>(steps[0]?.stepNumber); // move to context

  const windowWidth = useWindowSize();

  return (
    <div css={[stepSidebarStyle]}>
      <img
        src={windowWidth < 760 ? MOBILE_SIDEBARSVG : DESKTOP_SIDEBARSVG}
        alt=""
      />
      {steps?.map((step, i) => (
        <Step
          key={i}
          isActive={isActive === step.stepNumber}
          stepNumber={step.stepNumber}
          label={step.label}
        />
      ))}
    </div>
  );
};

export default StepSidebar;
