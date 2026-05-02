import React from "react";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-eta-khaki.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Top Generations</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {topPhotos.map((photo) => {
          return <PhotoCard key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default TopGenerations;
