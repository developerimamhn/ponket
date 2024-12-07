import Image from "next/image";
import Page from "./component/Page";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import Page5 from "./component/Page5";

export default function Home() {
  return (
    <div className="">
      <header>
        <Page/>
        <Page1/>
      </header>
      <main className="">
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
      </main>
      <footer className="">
        <Page/>
      </footer>
    </div>
  );
}
