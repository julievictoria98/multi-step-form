"use client";
import SelectNumber from "./components/SelectNumber";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [number, setNumber] = useState(0);
  console.log("number", number);
  // const handleSubmit = () => {
  //   // Redirect to the ticket details page with the number of tickets as a query parameter
  //   router.push({
  //     pathname: "/tickets",
  //     query: { number: number },
  //   });
  // };

  return (
    <div>
      <SelectNumber number={number} setNumber={setNumber} />
      <button onClick={() => router.push(`/tickets?number=${number}`)}>
        Submit
      </button>
    </div>
  );
}
