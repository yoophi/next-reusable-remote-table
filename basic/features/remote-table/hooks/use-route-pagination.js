import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const parseSortBy = (sortByString) => {
  if (!sortByString) {
    return [];
  }
  const [key, direction] = sortByString.split(":");
  return [{ id: key, desc: direction == "desc" }];
};

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

  const sortBy = useMemo(() => {
    return parseSortBy(router.query.sort);
  }, [router]);

  const setSortBy = useCallback(
    (sortBy) => {
      /**
       * sortBy = [] or [{ id: 'userId', desc: true}]
       */
      let sort = "";
      if (sortBy.length > 0) {
        sort = `${sortBy[0].id}:${sortBy[0].desc ? "desc" : "asc"}`;
      }

      void router.push({
        pathname,
        query: { ...router.query, page: 0, sort },
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
    sortBy,
    setSortBy,
  };
};
