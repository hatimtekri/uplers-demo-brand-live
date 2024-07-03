import { Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { IImageUpload } from "../../types/book";
import { getBase64, validateFile } from "../../utils/commonFunc";

function ImageUpload({ setImageSrc }: IImageUpload) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    console.log("onchange - ", newFileList);

    const file = newFileList[0]?.originFileObj;
    setFileList(newFileList);
    if (file && validateFile(file, false)) {
      getBase64(file, (url: string) => setImageSrc(url));
    } else {
      console.error("");
    }
  };
  return (
    <Upload
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
