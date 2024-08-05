export type PostState = {
  id: number;
  page: number;
  actualPage: number;
};

export type PostActions = {
  setId: (id?: number) => void;
  increment: () => void;
};
