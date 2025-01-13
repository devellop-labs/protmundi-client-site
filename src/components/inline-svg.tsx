import React, { useEffect, useState } from "react";

const InlineSVG = ({ url, color, width, height }: any) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const proxyUrl = `/api/proxy-svg?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const text = await response.text();
        setSvgContent(text);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSVG();
  }, [url]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: svgContent.replace(/fill="[^"]*"/g, `fill="${color}"`),
      }}
      style={{ width, height }}
    />
  );
};

export default InlineSVG;
