export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let values;
  const list = data.map((item) => item[type]);
  values = ["all", ...new Set(list)];
  if (type === "colors") values = ["all", ...new Set(list.flat())];
  return values;
};
