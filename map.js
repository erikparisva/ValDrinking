function yepCock() {
    var items = ['Ascent', 'Haven', 'Bind', 'Split', 'Fracture', 'Icebox', 'Breeze'];
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("yep").innerHTML = item;

    if (item == 'Ascent') {
        document.body.style.backgroundImage = "url('img/ascent.png')";
    }
    if (item == 'Haven') {
        document.body.style.backgroundImage = "url('img/haven.png')";
    }
    if (item == 'Bind') {
        document.body.style.backgroundImage = "url('img/bind.png')";
    }
    if (item == 'Split') {
        document.body.style.backgroundImage = "url('img/split.png')";
    }
    if (item == 'Fracture') {
        document.body.style.backgroundImage = "url('img/fracture.png')";
    }
    if (item == 'Icebox') {
        document.body.style.backgroundImage = "url('img/icebox.png')";
    }
    if (item == 'Breeze') {
        document.body.style.backgroundImage = "url('img/breeze.png')";
    }
}