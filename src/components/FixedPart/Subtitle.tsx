// /src/components/FixedPart/Header.tsx

import {Chocolate_Classical_Sans} from 'next/font/google';

const calsans = Chocolate_Classical_Sans  ({weight: '400', subsets:['latin']});

interface Props {
  name: string;
}

export default function Subtitile(props: Props) {
  return (
    <h1 className={`${calsans.className} pt-20 pb-20 font-bold text-7xl text-center`}>
      {props.name}
    </h1>
  );
}
