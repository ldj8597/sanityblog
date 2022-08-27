import Image from "next/image";
import React from "react";

interface Props {
  picture: string;
}

function Avatar({ picture }: Props) {
  return (
    <div className="relative w-9 h-9 rounded-full overflow-hidden ring ring-pink-400">
      <Image src={picture} alt="" layout="fill" />
    </div>
  );
}

export default Avatar;
