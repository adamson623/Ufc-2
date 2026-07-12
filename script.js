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
// Режим игры за реального бойца

const GAME_MODES = [
    {
        id: "create_fighter",
        name: "Создать бойца"
    },
    {
        id: "real_fighter",
        name: "Играть за реального бойца"
    }
];


let player = null;


// Выбор реального бойца

function chooseRealFighter(fighter) {

    player = {

        name: fighter.name,

        record: fighter.record || "0-0",

        style: fighter.style || "Универсал",

        level: fighter.level || 70,

        league: fighter.league || "UFC",

        weight: fighter.weight || "Не указан",

        career: {

            wins: 0,

            losses: 0,

            rank: "NR",

            champion: false

        }

    };


    console.log(
        "Выбран боец:",
        player.name
    );


    return player;
}



// Получить всех доступных бойцов

function getAllRealFighters() {

    let fighters = [];


    // UFC

    Object.values(UFC).forEach(weight => {

        if(weight.champion) {

            fighters.push({
                ...weight.champion,
                league: "UFC",
                weight: weight.name
            });

        }


        if(weight.rankings) {

            weight.rankings.forEach(fighter => {

                fighters.push({
                    ...fighter,
                    league: "UFC",
                    weight: weight.name
                });

            });

        }

    });



    // ACA

    Object.values(ACA).forEach(weight => {

        if(weight.champion) {

            fighters.push({
                ...weight.champion,
                league: "ACA",
                weight: weight.name
            });

        }


        if(weight.rankings) {

            weight.rankings.forEach(fighter => {

                fighters.push({
                    ...fighter,
                    league: "ACA",
                    weight: weight.name
                });

            });

        }

    });



    // PFL

    Object.values(PFL).forEach(weight => {

        if(weight.champion) {

            fighters.push({
                ...weight.champion,
                league: "PFL",
                weight: weight.name
            });

        }


        if(weight.rankings) {

            weight.rankings.forEach(fighter => {

                fighters.push({
                    ...fighter,
                    league: "PFL",
                    weight: weight.name
                });

            });

        }

    });



    // UAE Warriors

    Object.values(UAE).forEach(weight => {

        if(weight.champion) {

            fighters.push({
                ...weight.champion,
                league: "UAE Warriors",
                weight: weight.name
            });

        }


        if(weight.rankings) {

            weight.rankings.forEach(fighter => {

                fighters.push({
                    ...fighter,
                    league: "UAE Warriors",
                    weight: weight.name
                });

            });

        }

    });


    return fighters;

}



// Открыть выбор бойца

function openRealFighterMenu() {

    const fighters = getAllRealFighters();

    console.log(
        "Доступно бойцов:",
        fighters.length
    );


    return fighters;

}
}
