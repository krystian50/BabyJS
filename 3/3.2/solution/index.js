const baseUrl = 'https://swapi.dev/api';
const peoplePath = '/people';

const HttpClient = {
  get: (url) => fetch(`${baseUrl}${url}`).then((resp) => resp.json()),
};

const StarWarsApp = {
  data: () => ({
    searchValue: '',
    character: {
      name: '',
      gender: '',
      birthYear: ''
    }
  }),
  methods: {
    async onSubmit() {
      const newCharacter = await this.search(this.searchValue);

      if (!newCharacter) {
        this.updateCharacter({ name: '', gender: '', birthYear: '' })
        return
      }

      this.updateCharacter(newCharacter)
    },

    updateCharacter(newCharacter) {
      this.character = newCharacter
    },

    search(searchValue) {
      return HttpClient.get(`${peoplePath}?search=${searchValue}`).then((val) => {
        if (val.results.length === 0) {
          return null;
        }

        const { name, gender, birth_year } = val.results[0]

        return { name, gender, birthYear: birth_year };
      });
    }
  },
};

const app = Vue.createApp(StarWarsApp).mount('#app');
