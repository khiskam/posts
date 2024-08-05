export type ErrorState = {
  message?: string;
};

export type ErrorActions = {
  setMessage: (message: string) => void;
  clearMessage: () => void;
};
