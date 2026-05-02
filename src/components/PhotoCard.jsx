import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-lg">
      <div className="relative w-full aspect-square">
        <Image
          className="object-cover rounded-lg"
          src={photo.imageUrl}
          fill
          alt={photo.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {photo.category}
        </Chip>
      </div>
      <div>
        <h1>{photo.title}</h1>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <BiDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <Button variant="outline" className={"w-full"}>
        View
      </Button>
    </Card>
  );
};

export default PhotoCard;
