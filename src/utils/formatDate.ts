const formatDate = (date: string): string => {
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const dateFormatted = new Date(date);

  const locale = "pt-br";
  return dateFormatted.toLocaleDateString(locale, option);
};

export default formatDate;
