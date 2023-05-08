"use client";

export const Images = () => {
  const imageData: React.ReactElement[] = [];
  for (let i = 0; i < 20; i++) {
    const path = `/images/${i}.jpg`;
    const image = (
      <div className="imageWrapper">
        <img src={path} alt="" />
      </div>
    );
    imageData.push(image);
  }

  return (
    <section className="flex flex-col justify-between min-h-screen p24">
      {imageData}
    </section>
  );
};
