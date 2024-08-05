import { useQueryState } from "nuqs";

export const usePage = (defaultValue: number) => {
  const parse = (value: string) => {
    const page = +value;

    if (!page || !Number.isInteger(page)) {
      return null;
    }

    return page;
  };

  return useQueryState("page", { parse, defaultValue });
};
