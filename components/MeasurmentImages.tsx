import Image from "next/image";
import React from "react";

const MeasurmentImages = () => {
  return (
    <div>
      <div>
        <Image
          className="w-full md:w-[50%] lg:w-[100%] object-cover mx-auto "
          src={"/sketch.png"}
          alt="image"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-[50%] lg:w-[100%] object-cover mx-auto"
          src={"/menSket.webp"}
          alt="image"
          width={500}
          height={500}
        />
        <Image
          className="w-full md:w-[50%] lg:w-[100%] object-cover mx-auto border-2"
          src={"/menswear_size_guide.webp"}
          alt="image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default MeasurmentImages;
