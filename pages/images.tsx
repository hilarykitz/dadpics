"use client";
import useSWR from "swr";

import { handler } from "./api/handler";

const Images = () => {
  const { data } = useSWR("/api/getFiles", handler);

  return (
    <section className="flex flex-col justify-between min-h-screen p24">
      {data?.map((path: string) => (
        <div className="imageWrapper">
          <img src={path} alt="" />
        </div>
      ))}
    </section>
  );
};

export default Images;
