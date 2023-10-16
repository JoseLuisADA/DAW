async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function init() {
    const data = await get('https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=RGAPI-3e041210-0e43-40dc-80e2-a4de11f0e9b3');
    console.log(data);
}

init();