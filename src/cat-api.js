import { Notify } from 'notiflix/build/notiflix-notify-aio';

const errorEl = document.querySelector('.error');

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_rh691CkKOhu3guM2IhoI8wiqmhHcYRRytdKV3ZbAXWZ1dTADan4OMRiVEYxQs6Mf';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
