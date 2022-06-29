import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={10}
    height={10}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <Path fill='url(#a)' d='M0 0h10v10H0z' />
    <Defs>
      <Pattern
        id='a'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}
      >
        <Use xlinkHref='#b' transform='scale(.01111)' />
      </Pattern>
      <Image
        id='b'
        width={90}
        height={90}
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACT0lEQVR4nO3cMU4cMQCF4R+CAk3oSei4Ax0FDRXXoANRcpBwBS4ASJwAEBXQpE2BqNIFEGyVFCuKSPFgG/zs9bxPmmbRzNg/w+6s0S6YmZmZ9WwJ2AeugEfgj2CbAOfAumB+TVgFbtHE/d/2DGwVn2VlS9SNPJrY+9SPPIrYV9QPPIrYD9QJ+jTwsy5j17pyNxj+Jb8A2wXnLVcrNIwsds3QMKLYtUPDSGK3EBpGELuV0NB57JZCQ8exWwsNncZuMTQ0HntoqTOk1dAAmzT4DvKtpc6QlkNDY7FjljpDWg8NcbEl/zyIWeoMqRX6a+Ic34p9nni8LDFLnSG1Qh9kzHMo9iTjeMliljpDaoWeMI39kVd2krnUHSJPEjpu8gAbltRuvtQo7F8OLeLQIg4t4tAiDi3i0CIOLeLQIg4t4tAiDi3i0CIOLeLQIg4t4tAiDi3i0CIOLeLQIg4t4tAiDi3i0CIOLeLQIg4t4tAiDi3i0CIOLVIq9JfA44+Fzqf2O3WHUqFXAo//KHQ+teR5lAq9Fnj8qND51CTziPlwzmFg30XgJvIYrW7XwOf0bOliBnMHLAT2X2V2Y18D3zKaZYkd1M7AMRaBPeCSet8cFrs9ABfALqIr+VXsAO8J331YhJSr4Qz4VGeYsy/1T+87fmOUJed57gRYrjHYWZb7ovKL6TcjhO5Gulbqs+BD7oFj4BT4yfRWsJe35kE1QrckZ/5Z/CIl4tAiOaF7eT5NXup8j5zQo13qfI+c0F7qFPFSp5CXOoW81GlmZmZmZtaDvxfzvmRu3RIQAAAAAElFTkSuQmCC'
      />
    </Defs>
  </Svg>
);

export default SvgComponent;
