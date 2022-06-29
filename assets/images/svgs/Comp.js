import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={38}
    height={51}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m10.929 38.293 2.679 7.991c3.536-1.11 17.458-1.11 17.9 3.551.442-7.325-18.59-11.764-20.58-11.542Z'
      stroke='url(#a)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Path
      d='m7.42 38.515-2.21-16.87c1.547 0 30.055 4.218 26.258 28.355 1.366-6.158-15.305-13.252-24.048-11.485Z'
      stroke='url(#b)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Path
      d='M31.729 49.392C45.872 14.587 20.679 3.962 6.315 3l-1.657 9.323L3 21.645c25.282 1.776 29.687 19.238 28.729 27.747Z'
      stroke='url(#c)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={5.38}
        y1={38.838}
        x2={13.93}
        y2={55.321}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.24} stopColor='#A7C43C' />
        <Stop offset={0.469} stopColor='#0B7152' />
        <Stop offset={0.741} stopColor='#187751' />
        <Stop offset={1} stopColor='#6D9B4A' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={-1.96}
        y1={23.002}
        x2={23.713}
        y2={49.058}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.24} stopColor='#A7C43C' />
        <Stop offset={0.469} stopColor='#0B7152' />
        <Stop offset={0.741} stopColor='#187751' />
        <Stop offset={1} stopColor='#6D9B4A' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={-5.867}
        y1={5.22}
        x2={34.708}
        y2={36.344}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.24} stopColor='#A7C43C' />
        <Stop offset={0.469} stopColor='#0B7152' />
        <Stop offset={0.741} stopColor='#187751' />
        <Stop offset={1} stopColor='#6D9B4A' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
