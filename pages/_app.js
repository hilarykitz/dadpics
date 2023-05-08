import { Images } from "./images";

import "../styles/globals.css";

function MyApp() {
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

export default MyApp;
