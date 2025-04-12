import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
  imageAlt?: string;
  className?: string;
  imageHeight?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  descriptionSize?: string;
  titleSize?: string;
  href?: string;
  showButton?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  buttonText = "Learn More",
  onClick,
  imageAlt,
  className = "",
  imageHeight = "h-64",
  buttonColor = "bg-primary",
  buttonHoverColor = "hover:bg-primary/80",
  titleColor = "text-gray-900",
  descriptionColor = "text-gray-600",
  descriptionSize = "text-sm",
  titleSize = "text-xl",
  href,
  showButton = true,
}) => {
  return (
    <div
      className={`h-full overflow-hidden rounded-lg shadow-lg border flex flex-col ${className}`}
    >
      {/* Image Section */}
      <div className={`relative ${imageHeight}`}>
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={imageAlt || title}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className={`${titleSize} font-bold ${titleColor} mb-4`}>{title}</h2>
        <p className={`${descriptionColor} ${descriptionSize} mb-4`}>
          {description}
        </p>
        {/* Spacer for Button Alignment */}
        {showButton && (
          <div className="mt-auto">
            {href ? (
              <a
                href={href}
                className={`${buttonColor} text-white px-5 py-2 rounded-lg font-bold ${buttonHoverColor} transition duration-300`}
              >
                {buttonText}
              </a>
            ) : (
              <button
                onClick={onClick}
                className={`${buttonColor} text-white px-5 py-2 rounded-lg font-bold ${buttonHoverColor} transition duration-300`}
              >
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
