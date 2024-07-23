import Image from "next/image";
import { countries } from "../../../country-data";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

export default function CountryCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20" id="destinations">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground text-center mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Card
              key={country.id}
              className="w-full max-w-xl rounded-xl overflow-hidden shadow-lg h-[95%]"
            >
              <img
                src={country.flag}
                width={600}
                height={300}
                alt="Country Landscape"
                className="w-full lg:h-[200px] h-[255px] object-cover aspect-square"
              />
              <CardContent className="p-6 space-y-4 ">
                <div>
                  <h2 className="text-2xl lg:text-xl font-bold">
                    {country.name}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {country.intro}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-sm font-bold">Capital</h3>
                    <p className="text-sm text-slate-700">{country.capital}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Population</h3>
                    <p className="text-sm text-slate-700">
                      {country.population}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Currency</h3>
                    <p className="text-sm text-slate-700">{country.currency}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Language</h3>
                    <p className="text-sm text-slate-700">{country.language}</p>
                  </div>
                </div>
                <div className="flex justify-end pb-5">
                  <Link
                    href={country.urlPath}
                    className="px-6 py-2 rounded-full text-sm bg-slate-900 text-white  font-medium"
                  >
                    Explore
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
