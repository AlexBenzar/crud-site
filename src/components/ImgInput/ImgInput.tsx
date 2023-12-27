import React from "react";
import Avatar from "img/svg/avatar.svg";
import styles from "./ImgInput.module.scss";
import { Typography } from "..";
import { ErrorMessage } from "formik";
import { ImageProps } from "types/index";

export const ImgInput: React.FC<ImageProps> = ({ setFieldValue, image, imageName }) => {
  const [preview, setPreview] = React.useState("");
  const imageRef = React.useRef<HTMLInputElement>(null);
  const reader = new FileReader();
  if (image) {
    reader.readAsDataURL(image);
    reader.onload = () => {
      const csv: string = reader.result as string;
      setPreview(csv);
    };
  }

  function ImageHandler(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (imageRef.current) {
      imageRef.current.click();
    }
  }

  return (
    <div className={styles.image}>
      <img src={preview ? preview : Avatar} alt="avatar" />
      <a href="#" onClick={ImageHandler}>
        Choose picture
      </a>
      <input
        hidden
        ref={imageRef}
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            setFieldValue(imageName, e.target.files[0]);
          }
        }}
      />
      <ErrorMessage name={imageName}>
        {(msg) => (
          <Typography tag="div" variant="error-1">
            {msg}
          </Typography>
        )}
      </ErrorMessage>
    </div>
  );
};
