import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export const useRoutePagination = (
  pathname,
  defaultPageSize = 10,
  defaultUserId = ""
) => {
  const router = useRouter();

  const setPageIndex = useCallback(
    (page) => {
      void router.push({
        pathname,
        query: { ...router.query, page },
      });
    },
    [router, pathname]
  );

  const setPageSize = useCallback(
    (per_page) => {
      void router.push({
        pathname,
        query: { ...router.query, page: 0, per_page },
      });
    },
    [router, pathname]
  );

  const setUserId = useCallback(
    (user_id) => {
      void router.push({
        pathname,
        query: { ...router.query, page: 0, user_id },
      });
    },
    [router, pathname]
  );

  const pageIndex = useMemo(() => Number(router.query.page ?? 0), [router]);
  const pageSize = useMemo(
    () => Number(router.query.per_page ?? defaultPageSize),
    [defaultPageSize, router]
  );

  const filters = useMemo(() => {
    return {
      userId: router.query.user_id ?? defaultUserId,
    };
  }, [defaultUserId, router]);

  const setFilters = useCallback(
    (filters) => {
      const user_id = filters?.userId;
      void router.push({
        pathname,
        query: { ...router.query, page: 0, user_id },
      });
    },
    [router, pathname]
  );

  return {
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
    filters,
    setFilters,
  };
};
