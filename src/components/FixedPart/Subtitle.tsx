// /src/components/FixedPart/Header.tsx

import {Lora} from 'next/font/google';

const calsans = Lora  ({weight: '700', subsets:['latin']});

interface Props {
  name: string;
}

export default function Subtitile(props: Props) {
  return (
    <h1 className={`${calsans.className} pt-10 pb-10 font-bold text-7xl text-center text-black mt-20 flex justify-center items-center`}>
      {props.name}
    </h1>
  );
}
