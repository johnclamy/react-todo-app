const generateId = (): number => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
};

export default generateId;
