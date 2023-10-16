async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//tagLine: EUW

async function init() {
    const data = await get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Yodparadox?api_key=RGAPI-3e041210-0e43-40dc-80e2-a4de11f0e9b3');
    const data2 = await get('https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/gQap7NdYzqbJPqw2D6-eB5S1Wbe00mWlhV0tQ3czXnzeMwj94r57nnNJPtqwgRugfXevMyyXWi35eA?api_key=RGAPI-3e041210-0e43-40dc-80e2-a4de11f0e9b3');
    const data3 = await get('https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/gQap7NdYzqbJPqw2D6-eB5S1Wbe00mWlhV0tQ3czXnzeMwj94r57nnNJPtqwgRugfXevMyyXWi35eA?api_key=RGAPI-3e041210-0e43-40dc-80e2-a4de11f0e9b3');
    console.log(data2);
    console.log(data);
    console.log(data);
}

init();