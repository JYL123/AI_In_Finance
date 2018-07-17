export const predictPrice = (date, stock) => ({
  type: "PREDICT_PRICE", 
  date: date,
  stock: stock
});
