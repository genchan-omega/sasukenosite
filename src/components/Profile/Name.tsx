// /src/components/Profile/Name.tsx

import Image from "next/image";

export default function Name() {
  return (
    <figure className="w-180 mx-auto h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/Profile/Profile.jpg"
          alt="Picture of Author"
          fill
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-col">
        <h2 className="text-4xl md:text-6xl text-center py-4">
          Sasuke Takeshita
        </h2>
        <p className="text-2xl pb-4">
          「日本大学芸術学部写真学科在籍。
          自然観察をきっかけに写真に興味を持ち、大学進学後に本格的に写真を学び始める。 <br />
          現在は屋外でのフィールドワーク中心の撮影を行っている。卒業後は新聞社のカメラマンとして、社会の現場を記録する仕事に従事する予定。 <br />
          自然の中で見つけた小さな気づきや瞬間を記録し、等身大で写真に収めることを大切にしている。最近は、自然だけでなく人や街にも興味が広がり、カメラを片手にフィールドワークを楽しんでいる。 <br />
          2025年6月に日本大学芸術学部写真学科学生選抜展【GRIP】に作品を出展。 <br />
        </p>
      </figcaption>
    </figure>
  );
}
