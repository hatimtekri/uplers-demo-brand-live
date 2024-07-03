import { useQueryClient } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import moment from "moment";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IBook, IEditBookModal, TEditBookForm } from "../../types/book";
import { APIEndpoints } from "../../utils/APIEndpoints";
import { generateUniqueId } from "../../utils/commonFunc";

function EditBookModal({ isModalOpen, setIsModalOpen, data }: IEditBookModal) {
  const queryClient = useQueryClient();
  const setupDefaults = (data: IBook) => {
    return {
      bookTitle: data.title,
      authorName: data.author,
      description: data.description,
      publicationDate: data.publicationDate,
    };
  };
  const { formState, handleSubmit, control } = useForm({
    defaultValues: setupDefaults(data),
  });

  const { errors } = formState;
  const addBook = (book: IBook) => {
    queryClient.setQueryData([APIEndpoints.getBooks], (oldData: IBook[]) => {
      const newData = [...oldData, book];

      return newData;
    });
  };

  const onSubmit: SubmitHandler<TEditBookForm> = (data) => {
    const date = moment(data.publicationDate.$d).format("MM/DD/YYYY");
    addBook({
      title: data.bookTitle,
      publicationDate: date,
      description: data.description,
      isNewBook: true,
      isFav: false,
      cover: "",
      author: data.authorName,
      id: generateUniqueId(),
    });
    setIsModalOpen(false);
  };

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

        <Button htmlType="submit">Save</Button>
      </Form>
    </Modal>
  );
}

export default EditBookModal;
