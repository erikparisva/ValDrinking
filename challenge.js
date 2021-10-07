function maybeCock() {
    var items = ['Bottom fragger drinks 3', 'Top fragger gives out 10 drinks', 'Bottom and Top fragger drink 5 together', 'Everyone drinks 5 except the guy in the middle of the leaderboard',
    'Most first bloods drinks 5', 'Least first bloods drinks 5', '2nd top fragger drinks 4', '2nd bottom fragger drinks 4', 'Middle of the board guy drinks 5', 'Win by atleast 6 rounds (13-7) or everyone drinks 5',
    'Most spikes planted gives out 10 drinks', 'Most spikes defused gives out 8 drinks', 'Everyone with negative K/D drinks 5', 'Lowest econ rating drinks 5', 'Top fragger from last game needs to fuck up his crosshair to make it easier on everyone',
    'Top fragger drinks 3', 'First person to get a 4K+ this game, gives out 15 drinks (first 2 rounds dont count)', 'Everytime someone complains about enemy (positioning, luck, etc.), everybody drinks 2', 'Everytime enemy types in all chat, everyone drinks 1', 
    'Combined times enemy team planted the spike = Amount of drinks everyone has to do', 'Combined times enemy team have defused the spike = Amount of drinks everyone has to do', 'Amount of assists you have = Amount of drinks you have to do', 'Bottom fragger gives out as many drinks as times he has died',
    'Top fragger gives out as many drinks as he got kills', 'Your deaths = Amount of drinks you have to do', 'Enemy rounds won = Amount of drinks everyone has to do', 'Die = 2 drinks instead of 1', 'Every 3K this game, you can give out 5 drinks instead of 3', 'If you get an ace this game, everyone has to down their drink no questions asked'];
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("maybe").innerHTML = item;
}