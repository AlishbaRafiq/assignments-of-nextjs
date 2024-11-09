

import { countries } from '../../data/countries';
import CountryDetail from '../CountryDetail';

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

  return <CountryDetail {...country} />;
}
