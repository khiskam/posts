import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const usePage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    push(`${pathname}?${params.toString()}`);
  };

  const getPage = () => {
    const page = searchParams.get("page");
    return page ? +page : 1;
  };

  return { page: getPage(), setPage };
};
