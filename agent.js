function nopeCock() {
    var items = ['Brimstone', 'Viper', 'Omen', 'Killjoy', 'Cypher', 'Sova', 'Sage', 'Phoenix', 'Jett', 'Reyna', 'Raze', 'Breach', 'Skye', 'Yoru', 'Astra', 'KAY/O'];
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("nope").innerHTML = item;

}