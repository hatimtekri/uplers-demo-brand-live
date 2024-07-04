import { useQueryClient } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, message, Modal } from "antd";
import moment from "moment";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import dayjs from "dayjs";
import {
  IBook,
  IEditBook,
  IEditBookModal,
  TEditBookForm,
} from "../../types/book";
import { APIEndpoints } from "../../utils/APIEndpoints";
import { useEffect, useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import { LazyLoadImage } from "react-lazy-load-image-component";
const dateFormat = "MM/DD/YYYY";
import styles from "./EditBookModal.module.scss";
function EditBookModal({ isModalOpen, setIsModalOpen, data }: IEditBookModal) {
  const [imageSrc, setImageSrc] = useState(data.cover);
  const queryClient = useQueryClient();
  const setupDefaults = (data: IBook) => {
    return {
      bookTitle: data.title,
      authorName: data.author,
      description: data.description,
      publicationDate: data.publicationDate,
      coverImage: data.cover,
      id: data.id,
    };
  };
  const { formState, handleSubmit, setValue, control } = useForm({
    defaultValues: setupDefaults(data),
  });

  const { errors } = formState;

  const editBook = (book: IEditBook) => {
    queryClient.setQueryData([APIEndpoints.getBooks], (oldData: IBook[]) => {
      const newData = [...oldData];
      const index = newData.findIndex(
        (singleBook) => singleBook.id === book.id
      );
      newData[index] = {
        ...newData[index],
        ...book,
      };
      return newData;
    });
  };

  const onSubmit: SubmitHandler<TEditBookForm> = (data) => {
    let date = data.publicationDate;
    if (typeof data.publicationDate !== "string") {
      date = moment(data.publicationDate.$d).format("MM/DD/YYYY");
    }

    editBook({
      title: data.bookTitle,
      publicationDate: date,
      description: data.description,
      cover: data.coverImage,
      author: data.authorName,
      id: data.id,
    });
    message.success("Book Save Successfully")
    setIsModalOpen(false);
  };

  useEffect(() => {
    setValue("coverImage", imageSrc);
  }, [imageSrc]);

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      title="Edit Book"
    >
      <Form
        layout="vertical"
        noValidate
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="bookTitle"
          rules={{
            required: "Please enter book title",
          }}
          render={({ field: { ref, ...remaining } }) => (
            <Form.Item
              id="bookTitle"
              hasFeedback
              help={errors.bookTitle && errors.bookTitle.message}
              validateStatus={errors.bookTitle ? "error" : undefined}
              label="Book Title"
            >
              <Input {...remaining}></Input>
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="authorName"
          rules={{
            required: "Please enter author name",
          }}
          render={({ field: { ref, ...remaining } }) => (
            <Form.Item
              id="authorName"
              hasFeedback
              help={errors.authorName && errors.authorName.message}
              validateStatus={errors.authorName ? "error" : undefined}
              label="Author Name"
            >
              <Input {...remaining}></Input>
            </Form.Item>
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{
            required: "Please enter description",
          }}
          render={({ field: { ref, ...remaining } }) => (
            <Form.Item
              id="description"
              hasFeedback
              help={errors.description && errors.description.message}
              validateStatus={errors.description ? "error" : undefined}
              label="Description"
            >
              <Input {...remaining}></Input>
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="publicationDate"
          rules={{
            required: "Please select publication date",
          }}
          render={({ field: { ref, onChange, ...remaining } }) => (
            <Form.Item
              id="publicationDate"
              hasFeedback
              help={errors.publicationDate && errors.publicationDate.message}
              validateStatus={errors.publicationDate ? "error" : undefined}
              label="Publication Date"
            >
              <DatePicker
                defaultValue={dayjs(remaining.value, dateFormat)}
                format={dateFormat}
                onChange={onChange}
              />
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="coverImage"
          rules={{
            required: "Please upload image",
          }}
          render={({ field: { ref, ...remaining } }) => (
            <>
              <Form.Item
                id="coverImage"
                hasFeedback
                {...remaining}
                help={errors.coverImage && errors.coverImage.message}
                validateStatus={errors.coverImage ? "error" : undefined}
                label="Cover Image"
              >
                <>
                  <ImageUpload setImageSrc={setImageSrc} />
                </>
              </Form.Item>
              {imageSrc && (
                <div className={styles.imagePrev}>
                  <LazyLoadImage src={imageSrc}></LazyLoadImage>
                </div>
              )}
            </>
          )}
        />

        <Button htmlType="submit">Save</Button>
      </Form>
    </Modal>
  );
}

export default EditBookModal;
