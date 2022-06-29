import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={70}
    height={70}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M20.118 45.5a11.375 11.375 0 0 1-6.403-4.379c-3.67-5.11-2.505-12.308 2.622-15.99l8.46-6.078c5.11-3.67 12.32-2.488 15.991 2.622 3.67 5.11 2.505 12.308-2.622 15.99l-4.23 3.04'
      stroke='url(#a)'
      strokeWidth={4.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M49.661 24.279a11.375 11.375 0 0 1 6.403 4.379c3.67 5.11 2.505 12.308-2.621 15.99l-8.46 6.078c-5.11 3.67-12.321 2.488-15.992-2.622-3.67-5.11-2.505-12.308 2.622-15.99l4.23-3.04'
      stroke='url(#b)'
      strokeWidth={4.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={20.567}
        y1={22.092}
        x2={33.936}
        y2={40.704}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.286} stopColor='#A8C43D' />
        <Stop offset={0.516} stopColor='#1D7454' />
        <Stop offset={0.745} stopColor='#1D7454' />
        <Stop offset={1} stopColor='#A8C43D' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={35.843}
        y1={29.075}
        x2={49.212}
        y2={47.687}
        gradientUnits='userSpaceOnUse'
      >
        <Stop offset={0.286} stopColor='#A8C43D' />
        <Stop offset={0.516} stopColor='#1D7454' />
        <Stop offset={0.745} stopColor='#1D7454' />
        <Stop offset={1} stopColor='#A8C43D' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
