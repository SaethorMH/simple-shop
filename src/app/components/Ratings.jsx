import { FaStar } from "react-icons/fa";

export default function Ratings({ value, className = "size-7" }) {
  return [1, 2, 3, 4, 5].map((number) => (number <= Math.round(value) ? <FaStar key={number} className={`text-amber-300 ${className}`} /> : null));
}
