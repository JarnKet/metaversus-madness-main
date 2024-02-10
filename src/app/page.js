import {
  Hero,
  About,
  GetStarted,
  Explore,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "./sections";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <About />
        <div className="z-0 gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="z-0 gradient-04" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="z-0 gradient-04" />
        <Feedback />
      </div>
    </>
  );
}
