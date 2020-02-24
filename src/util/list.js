export const getNext = ({list, item}) => {
  const index = list.findIndex(i => i.id === item.id);
  if (index === list.length - 1) {
    return;
  }
  return list[index + 1];
};

export const getPrevious = ({list, item}) => {
  const index = list.findIndex(i => i.id === item.id);
  if (index === 0) {
    return;
  }
  return list[index - 1];
};
