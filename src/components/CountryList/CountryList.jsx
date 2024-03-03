import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <img src={country.flag} alt={country.country} />
        </GridItem>
      ))}
    </Grid>
  );
};
