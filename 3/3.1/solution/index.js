const baseUrl = 'https://swapi.dev/api';
const peoplePath = '/people';

const HttpClient = {
  get: (url) => fetch(`${baseUrl}${url}`).then((resp) => resp.json()),
};

const updateTextNode = (selector, value) => {
  document.querySelector(selector).textContent = value;
};

const search = (searchValue) => {
  HttpClient.get(`${peoplePath}?search=${searchValue}`).then((val) => {
    if (val.results.length === 0) {
      return;
    }

    const { name, gender, birth_year } = val.results[0];

    updateTextNode('#name', name);
    updateTextNode('#gender', gender);
    updateTextNode('#birthYear', birth_year);
  });
};

const StarWarsApp = {
  methods: {
    searchHandler,
  },
};

Vue.createApp(StarWarsApp).mount('#app');
