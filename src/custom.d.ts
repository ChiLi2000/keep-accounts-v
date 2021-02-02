type Tag = {
  id: number;
  genre: string;
  name: string;
  value: string;
}

type RootState = {
  tagList: Tag[];
  createTagError: Error | null;
}

