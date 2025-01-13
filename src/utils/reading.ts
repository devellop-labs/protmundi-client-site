export const calculateReadingTime = (content: string) => {
  const words = content.split(" ").length;
  const wordsPerMinute = 200;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} minutos`;
};
