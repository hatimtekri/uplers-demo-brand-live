import { message, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { IImageUpload } from "../../types/book";
import { getBase64, validateFile } from "../../utils/commonFunc";

function ImageUpload({ setImageSrc }: IImageUpload) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    const file = newFileList[0]?.originFileObj;

    if (file && validateFile(file, false)) {
      setFileList(newFileList);
      getBase64(file, (url: string) => setImageSrc(url));
    } else {
      message.error("file type mismatch");
    }
  };
  const dummyRequest = ({ onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <Upload
      customRequest={dummyRequest}
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      showUploadList={false}
    >
      {fileList.length <= 0 && "+ Upload"}
    </Upload>
  );
}

export default ImageUpload;
