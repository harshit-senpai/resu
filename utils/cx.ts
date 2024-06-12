export const cx = (...classes: Array<string | boolean | undefined>) => {
  const newClasses = [];
  for (const cls of classes) {
    if (typeof cls === "string") {
      newClasses.push(cls.trim());
    }
  }

  return newClasses.join(" ");
};
