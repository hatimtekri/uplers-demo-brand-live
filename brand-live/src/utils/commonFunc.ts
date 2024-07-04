import { message } from "antd";

export const generateUniqueId = () => {
  const timestamp = Date.now();

  const randomNumber = Math.floor(Math.random() * 1000);

  const uniqueId = timestamp * 1000 + randomNumber;

  return uniqueId;
};
export const getBase64 = (file: File, callback: (result: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result === "string") {
      callback(reader.result);
    } else {
    }
  });
  reader.readAsDataURL(file);
};

export const validateFile = (file: File, isShowError = false) => {
  const maxSizeKB = 5120; // 5 MB in kilobytes
  const isLt5MB = file.size / 1024 < maxSizeKB;

  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
  const isImage = allowedTypes.includes(file.type);

  if (!isImage) {
    if (isShowError) {
      message.error("file type missmatch");
    }
    return false;
  }

  if (!isLt5MB) {
    if (isShowError) {
      message.error("file size mismatch");
    }
    return false;
  }

  return true;
};
