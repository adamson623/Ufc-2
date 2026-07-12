function createFighter() {

    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let weight = document.getElementById("weight").value;
    let style = document.getElementById("style").value;
    let difficulty = document.getElementById("difficulty").value;

    if(name === "") {
        alert("Введите имя бойца");
        return;
    }


    document.getElementById("profile").innerHTML = `

    🥊 <b>${name}</b><br><br>

    🌍 Страна: ${country}<br>

    ⚖️ Вес: ${weight}<br>

    🥋 Стиль: ${style}<br><br>

    📊 Рекорд: 0-0<br>

    🏆 Организация: UAE Warriors

    `;

}
