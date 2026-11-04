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
      className="w-full  p-2  rounded shadow bg-sky-200 capitalize mb-2 text-[12px]"
    >
      <option value="8" className=" text-center ">
        Items per page:
      </option>
      <option value="16">16</option>
      <option value="32">32</option>
      <option value="99999">All</option>
    </select>
  );
}
