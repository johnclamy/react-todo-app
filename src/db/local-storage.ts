type LocalStorage = {
  setData: (title: string, data: unknown) => void;
  getData: (title: string) => unknown;
};

const storage: LocalStorage = {
  setData(title: string, data: unknown) {
    if (data instanceof Array) {
      localStorage.setItem(title, JSON.stringify(data.length ? data : []));
    }
  },

  getData(title: string): unknown {
    return localStorage.getItem(title);
  },
};

export default storage;
