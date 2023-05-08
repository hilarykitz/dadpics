"use client";
import useSWR from "swr";

import { handler } from "./api/handler";

const Images = () => {
  const resp = useSWR("/api/getFiles", handler);
  const data = resp?.data;

  return (
    <section className="flex flex-col justify-between min-h-screen p24">
      {data &&
        data.map((path: string) => (
          <div className="imageWrapper" key={path}>
            <img src={path} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Images;
