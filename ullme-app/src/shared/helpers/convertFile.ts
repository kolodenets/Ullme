export const convertFile = (file: File): string => {
  const url = URL.createObjectURL(file);
  return `url(${url})`;
};
