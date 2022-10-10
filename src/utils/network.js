import { HTTP, HTTPS } from "../constants/api";

/**
 * Изменяет с HTTP на HTTPS
 * @param {String} url - url для изменения 
 * @returns {String} - url c HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * Отправляет запрос fetch
 * @param {String} url - url для звпроса
 * @returns {Promise} -Promise результат запроса
 */
export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.message);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
}

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))


// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();


    // fetch(url)
    //     .then(res => res.json())
    //     .then(body => console.log(body))
    //     .catch(err => console.log(err.message))