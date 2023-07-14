"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputValue}`);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-40 text-white">Enter Your Name</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="my-4 placeholder:pl-4 text-black"
        />
        <button className="bg-cyan-600 w-20 mx-16 rounded-full" type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}
