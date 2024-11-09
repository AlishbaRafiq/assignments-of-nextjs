interface CountryDetailProps {
    name: string;
    population: number;
    capital: string;
  }
  
  export default function CountryDetail({ name, population, capital }: CountryDetailProps) {
    return (
      <div>
        <h1>Country: {name}</h1>
        <p>Population: {population.toLocaleString()}</p>
        <p>Capital: {capital}</p>
      </div>
    );
  }
  