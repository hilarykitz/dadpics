import { Images } from "./images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{ textAlign: "center" }}>
        Happy Birthday John!! <br />
        (aka Dad)
      </h1>
      <p>
        Here are some pictures of YOU, the birthday boy, compiled lovingly by
        your family, xoxoxo
      </p>
      <Images />
    </main>
  );
}
