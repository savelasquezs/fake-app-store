import axios from "axios"


// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

export const $app = document.getElementById('app');
export const $observe = document.getElementById('observe');
export const API = import.meta.env.VITE_API

export const apiAxios = axios.create({
  baseURL: API,
});

