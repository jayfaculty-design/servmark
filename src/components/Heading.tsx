import React from "react";

const SectionHeader = ({
  title = "Section Title",
  subtitle = "Section subtitle text goes here. This provides additional context about the section.",
  titleSize = "text-3xl md:text-4xl lg:text-5xl",
  titleColor = "text-gray-800",
  dividerColor = "bg-primary",
  secondaryDividerColor = "bg-primary/70",
  dividerWidth = "w-16",
  secondaryDividerWidth = "w-10",
  dividerHeight = "h-1",
  subtitleColor = "text-gray-600",
  subtitleSize = "text-lg",
  subtitleMaxWidth = "max-w-2xl",
  marginBottom = "mb-16",
  titleWeight = "font-extrabold",
  centerText = true,
  showDivider = true,
}) => {
  return (
    <div className={`${marginBottom} ${centerText ? "text-center" : ""}`}>
      <h2 className={`${titleSize} ${titleWeight} ${titleColor} mb-2`}>
        {title}
      </h2>

      {showDivider && (
        <div
          className={`${
            centerText ? "mx-auto" : ""
          } mb-6 flex items-center w-fit`}
        >
          <div
            className={`${dividerWidth} ${dividerHeight} ${dividerColor} mb-1`}
          ></div>
        </div>
      )}

      <p
        className={`${subtitleColor} ${subtitleMaxWidth} ${
          centerText ? "mx-auto" : ""
        } ${subtitleSize}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
