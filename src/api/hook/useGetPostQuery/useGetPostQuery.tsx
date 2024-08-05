import { useQuery } from "@tanstack/react-query";

import { getPost } from "@/api/lib/getPost";
import { queryKeys } from "@/api/queryKeys";

export const useGetPostQuery = (id: string) => {
  return useQuery({
    queryFn: () => getPost(id),
    queryKey: [queryKeys.post, id],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
