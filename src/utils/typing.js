export const typeText = async (text, delay = 50) => {
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      process.stdout.write(text.charAt(i));
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, delay);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, delay * text.length);
  });
};
