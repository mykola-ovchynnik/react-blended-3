import { useState, useEffect } from 'react';
import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { Link, useParams, useLocation } from 'react-router-dom';

import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { countryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId)
      .then(setCountry)
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [countryId]);

  return (
    <Section>
      <div
        style={{
          marginBottom: '60px',
          color: '#f2f2f2',
          letterSpacing: '0.06em',
          textDecoration: 'underline',

          borderColor: 'gray',
        }}
      >
        <Link to={location.state?.from ?? '/'}>Back to Countries</Link>
      </div>
      <Container>
        {country && <CountryInfo {...country} />}
        {loading && <Loader />}
        {error && <Heading>{error}</Heading>}
      </Container>
    </Section>
  );
};
