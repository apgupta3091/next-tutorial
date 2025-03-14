import React from "react";
import mapImg from "@/images/map.jpg";
import Image from "next/image";

function page({ params }: { params: { id: string } }) {
  const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* local image */}
        <div>
          <Image
            src={mapImg}
            alt="maps"
            priority
            height={192}
            width={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
        {/* remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
