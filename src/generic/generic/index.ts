export const getLocal = (path: string) => {
  try {
    const data = localStorage.getItem(path);
    const res = JSON.parse(data as string);
    return res;
  } catch {
    return null;
  }
};

export const setLocal = (path: string, data: object) => {
  try {
    const resJson = JSON.stringify(data);
    localStorage.setItem(path, resJson);
  } catch {
    return null;
  }
};
