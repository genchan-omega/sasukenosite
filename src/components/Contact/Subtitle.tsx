// /src/components/Contact/Subtitle.tsx

interface Props{
  title: string;
}

export default function Subtitle(props: Props) {
  return (
    <h2 className="text-3xl text-white">
      {props.title}
    </h2>
  );
}
