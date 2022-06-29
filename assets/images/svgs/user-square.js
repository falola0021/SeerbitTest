import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={28}
    height={28}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M21.163 25.223c-1.026.304-2.24.444-3.663.444h-7c-1.423 0-2.637-.14-3.663-.444.256-3.033 3.371-5.425 7.163-5.425 3.792 0 6.907 2.392 7.163 5.425Z'
      stroke='url(#a)'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M17.5 2.333h-7c-5.833 0-8.167 2.334-8.167 8.167v7c0 4.41 1.33 6.825 4.504 7.723.256-3.033 3.371-5.425 7.163-5.425 3.792 0 6.907 2.392 7.163 5.425 3.174-.898 4.504-3.313 4.504-7.723v-7c0-5.833-2.334-8.167-8.167-8.167ZM14 16.532a4.182 4.182 0 0 1-4.177-4.189A4.172 4.172 0 0 1 14 8.167a4.172 4.172 0 0 1 4.177 4.176A4.182 4.182 0 0 1 14 16.532Z'
      stroke='url(#b)'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M18.177 12.343A4.182 4.182 0 0 1 14 16.532a4.182 4.182 0 0 1-4.177-4.189A4.173 4.173 0 0 1 14 8.167a4.173 4.173 0 0 1 4.177 4.176Z'
      stroke='url(#c)'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={14}
        y1={19.798}
        x2={14}
        y2={25.667}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.25} stopColor='#A8C43D' />
        <Stop offset={0.443} stopColor='#1D7454' />
        <Stop offset={0.646} stopColor='#1D7454' />
        <Stop offset={0.948} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={14}
        y1={2.333}
        x2={14}
        y2={25.223}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.25} stopColor='#A8C43D' />
        <Stop offset={0.443} stopColor='#1D7454' />
        <Stop offset={0.646} stopColor='#1D7454' />
        <Stop offset={0.948} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={14}
        y1={8.167}
        x2={14}
        y2={16.532}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.25} stopColor='#A8C43D' />
        <Stop offset={0.443} stopColor='#1D7454' />
        <Stop offset={0.646} stopColor='#1D7454' />
        <Stop offset={0.948} stopColor='#A8C43D' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
