import Link from 'next/link';
import { countries } from '../data/countries';
export default function CountryListing() {
  return (
    <div>
      <h1>Country Listing</h1>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link href={`/country/${countryKey}`}>
              {countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
