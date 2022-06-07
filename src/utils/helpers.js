export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100)
}

export const getUniqueValues = () => {}
