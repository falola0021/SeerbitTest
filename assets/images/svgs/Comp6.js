import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={24}
    height={33}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m17.698 24.278-1.791 5.271c-2.365-.732-11.674-.732-11.97 2.343-.295-4.832 12.432-7.76 13.761-7.614Z'
      stroke='url(#a)'
      strokeWidth={2}
    />
    <Path
      d='m20.044 24.425 1.478-11.127C20.488 13.298 1.425 16.08 3.964 32c-.913-4.061 10.234-8.74 16.08-7.575Z'
      stroke='url(#b)'
      strokeWidth={2}
    />
    <Path
      d='M3.79 31.599C-5.669 8.642 11.177 1.634 20.782 1l1.109 6.149L23 13.298C6.095 14.469 3.149 25.986 3.79 31.598Z'
      stroke='url(#c)'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={21.409}
        y1={24.638}
        x2={15.814}
        y2={35.572}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.24} stopColor='#A7C43C' />
        <Stop offset={0.469} stopColor='#0B7152' />
        <Stop offset={0.741} stopColor='#187751' />
        <Stop offset={1} stopColor='#6D9B4A' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={26.317}
        y1={14.193}
        x2={9.389}
        y2={31.611}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.24} stopColor='#A7C43C' />
        <Stop offset={0.469} stopColor='#0B7152' />
        <Stop offset={0.741} stopColor='#187751' />
        <Stop offset={1} stopColor='#6D9B4A' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={28.929}
        y1={2.464}
        x2={2.075}
        y2={23.349}
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
