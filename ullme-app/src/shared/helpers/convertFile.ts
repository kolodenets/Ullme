export const convertFile = (file: File| Blob): string => {
  const url = URL.createObjectURL(file);
  return `url(${url})`;
};
