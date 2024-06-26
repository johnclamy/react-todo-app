type LocalStorage = {
  setData: (title: string, data: unknown) => void;
  getData: (title: string) => unknown | boolean;
};

const storage: LocalStorage = {
  setData(title: string, data: unknown) {
    if (data instanceof Array) {
      localStorage.setItem(title, JSON.stringify(data.length ? data : []));
    }
  },

  getData(title: string): unknown | boolean {
    const data = localStorage.getItem(title);
    if (data) {
      return JSON.parse(data);
    }
    return false;
  },
};

export default storage;
