function formatCustomDate(date) {
  const dayAbbr = new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(
    date
  ); // e.g., "Thu"
  const day = date.getDate();
  const monthAbbr = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    date
  ); // e.g., "Feb"
  const year = date.getFullYear().toString().slice(-2); // Get last two digits of year

  // Function to get ordinal suffix
  const getOrdinal = (n) => {
    if (n >= 11 && n <= 13) return `${n}th`;
    const lastDigit = n % 10;
    if (lastDigit === 1) return `${n}st`;
    if (lastDigit === 2) return `${n}nd`;
    if (lastDigit === 3) return `${n}rd`;
    return `${n}th`;
  };

  return `${dayAbbr} ${getOrdinal(day)} ${monthAbbr} ${year}`;
}

module.exports = formatCustomDate;
