export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
  isFav: boolean;
  isNewBook: boolean;
}

export interface IBookComponent {
  bookData: IBook;
}

export interface ILikeButton {
  isFav: boolean;
  id: number;
}
export interface IDeleteButton {
  id: number;
}
export interface IPageNumber {
  pageNumber:number
}
