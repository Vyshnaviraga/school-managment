import styled from 'styled-components';
import { Button } from '@mui/material';

const commonStyle = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  border-radius: 6px;
  padding: 6px 14px;
`;

// Crimson Red
export const RedButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #c1121f;
    color: #fff;
    margin-left: 4px;
    &:hover {
      background-color: #d8474f;
      border-color: #c1121f;
      box-shadow: none;
    }
  }
`;

// Midnight Black
export const BlackButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #1a1a1a;
    color: #ffffff;
    margin-left: 4px;
    &:hover {
      background-color: #333;
      border-color: #1a1a1a;
      box-shadow: none;
    }
  }
`;

// Maroon
export const DarkRedButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #800000;
    color: #ffffff;
    &:hover {
      background-color: #a03c3c;
      border-color: #a03c3c;
      box-shadow: none;
    }
  }
`;

// Royal Blue
export const BlueButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #1d3557;
    color: #ffffff;
    &:hover {
      background-color: #2a4e96;
    }
  }
`;

// Deep Purple
export const PurpleButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #5a189a;
    color: #ffffff;
    &:hover {
      background-color: #7b2cbf;
    }
  }
`;

// Soft Lavender
export const LightPurpleButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #b799ff;
    color: #fff;
    &:hover {
      background-color: #9e70ff;
    }
  }
`;

// Forest Green
export const GreenButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #1b4332;
    color: #ffffff;
    &:hover {
      background-color: #2d6a4f;
    }
  }
`;

// Earth Brown
export const BrownButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #5c4033;
    color: white;
    &:hover {
      background-color: #7e5c47;
      border-color: #7e5c47;
      box-shadow: none;
    }
  }
`;

// Indigo Night
export const IndigoButton = styled(Button)`
  && {
    ${commonStyle}
    background-color: #3c096c;
    color: white;
    &:hover {
      background-color: #5a189a;
      border-color: #5a189a;
      box-shadow: none;
    }
  }
`;
