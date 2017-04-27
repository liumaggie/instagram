export const asArrayReversed = (images) => {
  return(
    Object.keys(images).map(key => images[key]).reverse()
  );
};

export const asArray = (users) => {
  return(
    Object.keys(users).map(key => users[key])
  );
};
