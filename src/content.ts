import { WORDLE_LOCAL_STORAGE_KEY, CHROME_LOCAL_STORAGE_KEY } from './constants';

const getWorleData = async () => {
    const wordleData = window.localStorage.getItem(WORDLE_LOCAL_STORAGE_KEY);
    await chrome.storage.local.set({
        [CHROME_LOCAL_STORAGE_KEY]: wordleData,
    });
    console.log(wordleData);
};

getWorleData();