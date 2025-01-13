import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import core CSS
import "tippy.js/animations/scale.css"; // Import scale animation

type TooltipProps = {
  content: string;
  children: JSX.Element;
};

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <Tippy
      content={content}
      animation="scale"
      duration={[200, 150]}
      arrow={true}
      theme="custom"
    >
      {children}
    </Tippy>
  );
}
