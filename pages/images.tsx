"use client";
import useSWR from "swr";

import { handler } from "./api/handler";

export const Images = () => {
  const { data } = useSWR("/api/getFiles", handler);

  const imageData: React.ReactElement[] = data.map((path: string) => (
    <div className="imageWrapper">
      <img src={path} alt="" />
    </div>
  ));

  return (
    <section className="flex flex-col justify-between min-h-screen p24">
      {imageData}
    </section>
  );
};
