import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaHeart,
  FaDownload,
} from "react-icons/fa";

const PhotosDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://pixgen-eta-khaki.vercel.app/data.json`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const photo = data.find((p) => p.id == id);

  if (!photo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-red-500">
          Photo Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/all-photos"
          className="inline-flex items-center gap-2 mb-6 text-gray-700 hover:text-black font-medium"
        >
          <FaArrowLeft />
          Back to Gallery
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
          
          {/* Image */}
          <div className="relative h-[350px] md:h-[500px] lg:h-full">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            
            {/* Category */}
            <span className="w-fit bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              {photo.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              {photo.title}
            </h1>

            {/* Prompt */}
            <p className="text-gray-600 text-lg leading-8 mt-6">
              {photo.prompt}
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              
              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  AI Model
                </p>

                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {photo.model}
                </h2>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Resolution
                </p>

                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {photo.resolution}
                </h2>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Likes
                </p>

                <h2 className="text-xl font-bold text-gray-900 mt-1 flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  {photo.likes}
                </h2>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Downloads
                </p>

                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  {photo.downloads}
                </h2>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tags
              </h3>

              <div className="flex flex-wrap gap-3">
                {photo.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-full text-gray-700 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              
              <button className="bg-black hover:bg-gray-800 transition text-white px-6 py-3 rounded-2xl font-semibold">
                Generate Similar
              </button>

              <button className="border border-gray-300 hover:bg-gray-100 transition px-6 py-3 rounded-2xl font-semibold flex items-center gap-2">
                <FaDownload />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetails;