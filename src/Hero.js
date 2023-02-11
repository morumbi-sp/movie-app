import PropTypes from 'prop-types';

function Hero({ name, modified, resourceURI }) {
  return (
    <li>
      <h2>{name}</h2>
      <span>{modified}</span>
      <br />
      <span>{resourceURI}</span>
    </li>
  );
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  resourceURI: PropTypes.string.isRequired,
};

export default Hero;
