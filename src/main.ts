import "tailwindcss/tailwind.css";
import { CHROME_LOCAL_STORAGE_KEY, NYTIMES_WORDLE_URL } from './constants';
import './style.css';

const getWordleText = (solution: string): string => {
    const letters = solution.split('');
    return letters.map(letter => `<div class="flex w-14 h-14 text-3xl bg-lime-600 font-medium uppercase text-white justify-center items-center mr-1 last:mr-0">${letter}</div>`).join('');
}


const getWordleData = async () => {
  const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const focusedTab: any = tabs[0];
  if(focusedTab.url.includes(NYTIMES_WORDLE_URL)) {
    const result = await chrome.storage.local.get(CHROME_LOCAL_STORAGE_KEY);
    const wordleData: any = JSON.parse(result[CHROME_LOCAL_STORAGE_KEY]);
    try {
      app.innerHTML = `
        <div class="flex flex-col w-96 h-32 justify-center items-center">
          <h1 class="my-2 text-lg">The Wordle Solution Is:</h1>
          <div class="flex flex-row">
            ${getWordleText(wordleData.solution)}
          </div>
        </div>
      `
    } catch (e) {
      console.log('No Wordle data found');
    }
  } else {
    app.innerHTML = `
      <div class="flex flex-col w-96 h-32 justify-center items-center">
        <h1 class="my-2 text-lg">You are not on the Wordle page</h1>
        <span class="my-2 text-sm">Please go to <a target="_blank" rel="noreferrer" href="https://www.nytimes.com/games/wordle">https://www.nytimes.com/games/wordle</a></span>
      </div>
    `
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<div class="flex flex-col w-96 h-32 justify-center items-center">
  <h1 class="my-4 text-lg">Loading...</h1>
</div>
`
getWordleData();