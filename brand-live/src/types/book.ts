export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
  isNewBook: boolean;
}

export interface IBookComponent {
  bookData: IBook;
}

export interface ILikeButton {
  id: number;
}
export interface IDeleteButton {
  id: number;
}
export interface IPageNumber {
  pageNumber: number;
}

export interface IBookForm {
  bookTitle: string;
  authorName: string;
  description: string;
  publicationDate: {
    $d: Date;
  };
}

export interface IAddBookModal {
  isModalOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
}

export interface IEditBookModal {
  isModalOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
  data: IBook;
}

export interface IEditButton {
  data: IBook;
}

export interface IImageUpload {
  setImageSrc: (url: string) => void;
}
export type TAddBookForm = {
  bookTitle: string;
  authorName: string;
  description: string;
  publicationDate: any;
  coverImage: string;
};

export type TEditBookForm = {
  bookTitle: string;
  authorName: string;
  description: string;
  publicationDate: any;
  id:number;
  coverImage:string;
};
export interface IEditBook {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
 
}