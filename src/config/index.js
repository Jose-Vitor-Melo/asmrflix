const URL = window.location.hostname.includes('localhost')
  ? 'https://localhost:8000'
  : 'https://asmr-flix.herokuapp.com';

export default {
  URL,
};
