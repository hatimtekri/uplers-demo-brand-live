import { useQueryClient } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import styles from "./AddBookModal.module.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IAddBookModal, IBook, TAddBookForm } from "../../types/book";
import { APIEndpoints } from "../../utils/APIEndpoints";
import { generateUniqueId } from "../../utils/commonFunc";
import ImageUpload from "../ImageUpload/ImageUpload";

const formDefaultValues = {
  bookTitle: "",
  authorName: "",
  description: "",
  publicationDate: "",
  coverImage: "",
};

function AddBookModal({ isModalOpen, setIsModalOpen }: IAddBookModal) {
  const [imageSrc, setImageSrc] = useState("");
  const queryClient = useQueryClient();

  const { formState, handleSubmit, setValue, control } = useForm({
    defaultValues: formDefaultValues,
  });

  const { errors } = formState;
  const addBook = (book: IBook) => {
    queryClient.setQueryData([APIEndpoints.getBooks], (oldData: IBook[]) => {
      const newData = [...oldData, book];

      return newData;
    });
  };

  const onSubmit: SubmitHandler<TAddBookForm> = (data) => {
    const date = moment(data.publicationDate.$d).format("MM/DD/YYYY");
    addBook({
      title: data.bookTitle,
      publicationDate: date,
      description: data.description,
      isNewBook: true,
      isFav: false,
      cover: data.coverImage,
      author: data.authorName,
      id: generateUniqueId(),
    });
    setIsModalOpen(false);
  };

  useEffect(() => {
    setValue("coverImage", imageSrc);
  }, [imageSrc]);

  return (
    <Modal
      footer={null}
      title="Add Book"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
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
              {...remaining}
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
              {...remaining}
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
              {...remaining}
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
          render={({ field: { ref, ...remaining } }) => (
            <Form.Item
              id="publicationDate"
              hasFeedback
              {...remaining}
              help={errors.publicationDate && errors.publicationDate.message}
              validateStatus={errors.publicationDate ? "error" : undefined}
              label="Publication Date"
            >
              <DatePicker {...remaining} />
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
                {imageSrc && (
                  <div className={styles.imagePrev}>
                    <LazyLoadImage src={imageSrc}></LazyLoadImage>
                  </div>
                )}
              </>
            </Form.Item>
          )}
        />

        <Button className={styles.btn} htmlType="submit">
          Add
        </Button>
      </Form>
    </Modal>
  );
}

export default AddBookModal;
