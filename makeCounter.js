export const makeCounter = (params) => {
  let counter = params ? params : 0

  return function fn() {
    return counter ++
  }
};
