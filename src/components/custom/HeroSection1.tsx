
import IntroComponent from "./IntroComponent";
import NavigationMenuWeb from "./NavigationMenuWeb";
import LandingPageText from "./LandingPageText";
import CountryCards from "./CountryCards";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/*  */}
      <NavigationMenuWeb />
      <main className="flex-1">
        {/*  */}
        <LandingPageText />
        {/*  */}
        <CountryCards />
        {/*  */}
        <IntroComponent />
      </main>
    </div>
  );
}
