// Wraps every naira amount or range in text with <strong>, e.g. "₦50,000 – ₦150,000".
export const boldPrices = (text) =>
  text.split(/(₦[\d,]+(?:\s*[–-]\s*₦[\d,]+)?)/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
