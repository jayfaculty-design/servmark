import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: Array<string>;
  imageAlt?: string;
  className?: string;
  imageHeight?: string;
  titleColor?: string;
  descriptionColor?: string;
  descriptionSize?: string;
  titleSize?: string;
}

const MainServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  imageAlt,
  className = "",
  imageHeight = "h-64",
  titleColor = "text-gray-900",
  descriptionColor = "text-gray-600",
  descriptionSize = "text-sm",
  titleSize = "text-xl",
}) => {
  return (
    <div className={`h-full overflow-hidden rounded-lg shadow-md ${className}`}>
      <div className={`relative group ${imageHeight}`}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className={`${titleSize} font-bold ${titleColor} mb-2`}>{title}</h2>

        <ul>
          {description.map((service, index) => (
            <li
              className={`list-disc ${descriptionColor} ${descriptionSize}`}
              key={index}
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainServiceCard;
