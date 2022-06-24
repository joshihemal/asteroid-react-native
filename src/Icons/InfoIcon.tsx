import Svg, { Path } from 'react-native-svg';

interface props {
  color: string;
  size: number;
}

function InfoIcon(props: props) {
  return (
    <Svg viewBox='0 0 350 350' width={props.size} height={props.size}>
      <Path
        d='M165,0.008C74.019,0.008,0,74.024,0,164.999c0,90.977,74.019,164.992,165,164.992s165-74.015,165-164.992
				C330,74.024,255.981,0.008,165,0.008z M165,299.992c-74.439,0-135-60.557-135-134.992S90.561,30.008,165,30.008
				s135,60.557,135,134.991C300,239.436,239.439,299.992,165,299.992z'
        fill='none'
        stroke={props.color}
        strokeWidth={15}
      />
      <Path
        d='M165,130.008c-8.284,0-15,6.716-15,15v99.983c0,8.284,6.716,15,15,15s15-6.716,15-15v-99.983
				C180,136.725,173.284,130.008,165,130.008z'
        fill='none'
        stroke={props.color}
        strokeWidth={15}
      />
      <Path
        d='M165,70.011c-3.95,0-7.811,1.6-10.61,4.39c-2.79,2.79-4.39,6.66-4.39,10.61s1.6,7.81,4.39,10.61
				c2.79,2.79,6.66,4.39,10.61,4.39s7.81-1.6,10.609-4.39c2.79-2.8,4.391-6.66,4.391-10.61s-1.601-7.82-4.391-10.61
				C172.81,71.61,168.95,70.011,165,70.011z'
        fill='none'
        stroke={props.color}
        strokeWidth={15}
      />
    </Svg>
  );
}

export default InfoIcon;