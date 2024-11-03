
import { countries } from "../../data/countries";

interface CountryPageProps {
  params: {
    country_name: string;
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const country = countries[params.country_name.toLowerCase()];

  if (!country) {
    return <h1>Country not found.</h1>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}
  