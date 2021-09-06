//credit for this piece of code goes to my friend, Tomáš Ehrlich

import React from "react";
import classnames from "classnames";

export function Image({ placeholderClassName, ...imageProps }: ImageProps) {
  const [error, setError] = React.useState(false);

  return imageProps.src && !error ? (
    <img {...imageProps} onError={() => setError(true)} />
  ) : (
    <div className={classnames(imageProps.className, placeholderClassName)} />
  );
}

export type ImageProps = {
  placeholderClassName?: string;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
