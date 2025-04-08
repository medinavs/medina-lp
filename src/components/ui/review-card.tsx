import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  rating: number;
  content: string;
  name: string;
  role: string;
  avatarUrl: string;
}

// just a MVP for the reviews section
export const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  content,
  name,
  role,
  avatarUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-[hsl(210,100%,30%)] fill-[hsl(210,100%,30%)]"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 text-center italic">{content}</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            width={48}
            height={48}
            src={avatarUrl}
            className="w-full h-full object-cover"
            alt="Avatar"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
