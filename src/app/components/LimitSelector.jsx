"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LimitSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("limit") ?? "8";

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);
    params.set("limit", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      value={current}
      onChange={handleChange}
      className="bg-amber-400 w-fit p-1 place-self-center text-right"
    >
      <option value="8">Items per page:</option>
      <option value="16">16</option>
      <option value="32">32</option>
      <option value="99999">All</option>
    </select>
  );
}
