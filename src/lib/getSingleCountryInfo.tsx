import InfoAndImage from "@/components/custom/InfoandImage";
import {countryInfo} from "../../country-info";
import Component from "@/components/custom/InfoandImage";

export default function getSingleCountryInfo(title: string) {
  const country = countryInfo.find((c) => c.title === title);
  if (country) {
    return (
      <Component
        title={country.title}
        description={country.description}
        mapImg={country.mapImage}
        link={country.wiki}
      />
    );
  } else {
    return null;
  }
}
