const httpService = {
  get: (url) => fetch(`https://swapi.dev/api${url}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }

    throw new Error(response.statusText);
  })
};

httpService.get('/people/?search=r2').then(({ results }) => {
  const person = results[0]
  const { name, gender, birth_year } = person

  document.querySelector('#name').textContent = name
  document.querySelector('#gender').textContent = gender
  document.querySelector('#birth_year').textContent = birth_year
})
