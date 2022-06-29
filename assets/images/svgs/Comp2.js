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
      d='m26.972 38.293-2.68 7.991c-3.535-1.11-17.458-1.11-17.9 3.551-.442-7.325 18.59-11.764 20.58-11.542Z'
      stroke='url(#a)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Path
      d='m30.48 38.515 2.21-16.87c-1.547 0-30.054 4.218-26.257 28.355-1.367-6.158 15.304-13.252 24.047-11.485Z'
      stroke='url(#b)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Path
      d='M6.171 49.392C-7.972 14.587 17.221 3.962 31.585 3l1.658 9.323 1.657 9.322C9.619 23.421 5.214 40.883 6.171 49.392Z'
      stroke='url(#c)'
      strokeOpacity={0.7}
      strokeWidth={4}
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={32.52}
        y1={38.838}
        x2={23.97}
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
        x1={39.861}
        y1={23.002}
        x2={14.187}
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
        x1={43.767}
        y1={5.22}
        x2={3.193}
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
