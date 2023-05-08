import { useEffect, useState } from "react";

import { handler } from "./api/handler";

const Images = () => {
  const [images, setImages] = useState<string[]>();

  const fetchImages = async () => {
    const resp = await handler("/api/getFiles");
    setImages(resp);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  // const resp = useSWR("/api/getFiles", handler);
  // const data = resp?.data;

  return (
    <section className="flex flex-col justify-between min-h-screen p24">
      {images?.length &&
        images.map((path: string) => (
          <div className="imageWrapper" key={path}>
            <img src={path} alt="" />
          </div>
        ))}
    </section>
  );
};

export default Images;
