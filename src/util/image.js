export const getImageUrl = ({medium, width}) => {
  const height = Math.round((width * medium.height) / medium.width);
  const baseUrl = medium.image
    .split('/')
    .slice(0, -2)
    .join('/');
  return `${baseUrl}/${Math.round(width)}/${height}`;
};
