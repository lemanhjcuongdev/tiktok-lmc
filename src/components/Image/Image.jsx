import { useState, forwardRef } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import images from "~/assets/images";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const ImgComponent = forwardRef(({ src, alt, className, altImg: customImg = images.noImage, ...props }, ref) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  const [altImage, setAltImage] = useState("");

  const handleError = () => {
    setAltImage(customImg);
  };

  return (
    <img
      className={cx("wrapper", className)}
      ref={ref}
      src={altImage || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

ImgComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  altImg: PropTypes.string,
};

export default ImgComponent;
