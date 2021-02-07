type Tag = {
  id: number;
  genre: string;
  name: string;
  value: string;
}

type RootState = {
  tagList: Tag[];
  createTagError: Error | null;
  recordList: RecordItem[];
  createRecordError: Error | null;
}

type Category = "-" | "+"

type RecordItem = {
  idR: number;
  category: Category;
  tagId: number;
  note: string;
  amount: number;
  createdAt: string;
}

type newRecordItem = Omit<RecordItem, "idR">