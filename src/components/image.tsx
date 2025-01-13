const MyImage = dynamic(() => import("next/image"), {
  ssr: false,
});
import dynamic from "next/dynamic";

import { type ImageProps } from "next/image";

export default function Image(props: ImageProps) {
  return <MyImage {...props} />;
}
