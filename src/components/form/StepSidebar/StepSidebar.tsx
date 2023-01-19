/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

import Step from '../step';

import React from 'react';

import SIDEBARSVG from '../../../../assets/images/bg-sidebar-desktop.svg';

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

  img: {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
  },
});

const StepSidebar = ({ steps }: IProps) => {
  const [isActive] = useState<number>(steps[0]?.stepNumber); // move to context

  return (
    <div css={[stepSidebarStyle]}>
      <img src={SIDEBARSVG} alt="" />
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
