import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCountries()
      .then(setCountries)
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {loading && <Loader />}
        {error && <Heading>{error}</Heading>}
      </Container>
    </Section>
  );
};
