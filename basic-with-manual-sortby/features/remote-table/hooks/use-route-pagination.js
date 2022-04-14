import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const parseSortBy = (sortByString) => {
  if (!sortByString) {
    return [];
  }

  return sortByString.split(",").map((s) => {
    const [key, direction] = s.split(":");
    return { id: key, desc: direction == "desc" };
  });
};

export const useRoutePagination = (
  pathname,
  defaultPageSize = 10,
  defaultUserId = ""
) => {
  const router = useRouter();
  const isReady = router.isReady;

  const setPageIndex = useCallback(
    (page) => {
      const params = { ...router.query };
      if (page) {
        params.page = page;
      }
      void router.push({
        pathname,
        query: params,
      });
    },
    [router, pathname]
  );

  const setPageSize = useCallback(
    (per_page) => {
      const params = { ...router.query };
      if (per_page) {
        params.per_page = per_page;
      }
      void router.push({
        pathname,
        query: params,
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
        sort = sortBy
          .map((el) => `${el.id}:${el.desc ? "desc" : "asc"}`)
          .join(",");
      }
      const params = { ...router.query };
      params.sort = sort;

      void router.push({
        pathname,
        query: params,
      });
    },
    [router, pathname]
  );

  return {
    isReady,
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
