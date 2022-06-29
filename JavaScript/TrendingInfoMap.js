import TrendingInfoData from '../Data/TrendingInfoData.js';

const TrendingInfoContainer = document.querySelector('.trending-info');

const TrendingInfoMapped = TrendingInfoData.map((item) => {
    return `<trending-info image="${item.imageUrl}" 
    username="${item.account}" 
    content="${item.content}" 
    time="${item.time}"
    hashtag="${item.hashtag}"
    class="default">
    </trending-info>`
}).join('');

TrendingInfoContainer.innerHTML = TrendingInfoMapped;