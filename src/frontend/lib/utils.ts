export const createPageURL = (pathname: string, searchParams: any) => {
  const params = new URLSearchParams(searchParams);
  return `${pathname}?${params.toString()}`;
};
