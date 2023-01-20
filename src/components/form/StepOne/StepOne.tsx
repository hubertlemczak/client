/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React, { useState } from 'react';
import SelectField from '../SelectField/SelectField';

import TextField from '../TextField/TextField';

const stepOneStyle = css({
  maxWidth: 450,

  h1: {
    margin: '30px 0 0 0',
    color: '#06254B',
    fontWeight: 700,
    fontSize: '1.8rem',
  },

  p: {
    color: 'GrayText',
    marginBlock: '15px 40px',
  },
});

const StepOne = () => {
  return (
    <div css={[stepOneStyle]}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <TextField
        name="name"
        label={{ id: 'name', name: 'name' }}
        placeholder="e.g. Stephen King"
      />
      <TextField
        name="email"
        label={{ id: 'email', name: 'email address' }}
        placeholder="e.g. stephenking@lorem.com"
      />
      <SelectField
        name="country"
        options={[
          { value: 'United Kingdom\n+44', label: 'United Kingdom' },
          { value: 'Switzerland\n+41', label: 'Switzerland' },
        ]}
        label={{ id: 'country', name: 'country' }}
      />
      <TextField
        name="phoneNumber"
        label={{ id: 'phoneNumber', name: 'phone number' }}
        placeholder="e.g. +123 4567 890"
      />
    </div>
  );
};

export default StepOne;
