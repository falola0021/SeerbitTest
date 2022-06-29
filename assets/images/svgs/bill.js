import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={50}
    height={50}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M25 46.354a8.062 8.062 0 0 1-4.834-1.604L9.313 36.625a8.13 8.13 0 0 1-3.229-6.458v-26.5h37.833v26.5a8.13 8.13 0 0 1-3.229 6.458L29.833 44.75A8.063 8.063 0 0 1 25 46.354ZM9.208 6.771v23.375c0 1.542.75 3.02 1.98 3.958L22.04 42.23a4.969 4.969 0 0 0 5.938 0l10.854-8.125c1.23-.937 1.98-2.416 1.98-3.958V6.77H9.207Z'
      fill='url(#a)'
    />
    <Path
      d='M45.833 6.77H4.167a1.574 1.574 0 0 1-1.563-1.562c0-.854.709-1.562 1.563-1.562h41.666c.855 0 1.563.708 1.563 1.562 0 .855-.709 1.563-1.563 1.563Z'
      fill='url(#b)'
    />
    <Path
      d='M33.333 18.23H16.667a1.574 1.574 0 0 1-1.563-1.563c0-.854.709-1.563 1.563-1.563h16.666c.855 0 1.563.709 1.563 1.563s-.709 1.562-1.563 1.562Z'
      fill='url(#c)'
    />
    <Path
      d='M33.333 28.646H16.667a1.574 1.574 0 0 1-1.563-1.563c0-.854.709-1.562 1.563-1.562h16.666c.855 0 1.563.708 1.563 1.562 0 .855-.709 1.563-1.563 1.563Z'
      fill='url(#d)'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={25}
        y1={3.667}
        x2={25}
        y2={46.354}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.297} stopColor='#A8C43D' />
        <Stop offset={0.521} stopColor='#548E4E' />
        <Stop offset={0.688} stopColor='#548E4E' />
        <Stop offset={0.87} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={25}
        y1={3.646}
        x2={25}
        y2={6.771}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.297} stopColor='#A8C43D' />
        <Stop offset={0.521} stopColor='#548E4E' />
        <Stop offset={0.688} stopColor='#548E4E' />
        <Stop offset={0.87} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='c'
        x1={25}
        y1={15.104}
        x2={25}
        y2={18.229}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.297} stopColor='#A8C43D' />
        <Stop offset={0.521} stopColor='#548E4E' />
        <Stop offset={0.688} stopColor='#548E4E' />
        <Stop offset={0.87} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='d'
        x1={25}
        y1={25.521}
        x2={25}
        y2={28.646}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.297} stopColor='#A8C43D' />
        <Stop offset={0.521} stopColor='#548E4E' />
        <Stop offset={0.688} stopColor='#548E4E' />
        <Stop offset={0.87} stopColor='#A8C43D' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
