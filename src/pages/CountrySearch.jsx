import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [search, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const region = search.get('region');
    if (!region) return;

    setLoading(true);
    fetchByRegion(region)
      .then(setCountries)
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [search]);

  const onCountrySelect = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onCountrySelect={onCountrySelect} />
        <CountryList countries={countries} />
        {loading && <Loader />}
        {error && <Heading>{error}</Heading>}
      </Container>
    </Section>
  );
};
