// =====================================
// MMA CAREER GAME
// UAE WARRIORS -> ACA -> PFL -> UFC
// =====================================


// ===============================
// ИГРОК
// ===============================

let player = {
    name:"",
    country:"",
    weight:"",
    style:"",
    wins:0,
    losses:0,
    league:"UAE Warriors",
    level:60
};



// ===============================
// СОЗДАНИЕ БОЙЦА
// ===============================

function createFighter(){

    player.name = document.getElementById("name").value;
    player.country = document.getElementById("country").value;
    player.weight = document.getElementById("weight").value;
    player.style = document.getElementById("style").value;


    if(player.name === ""){
        alert("Введите имя бойца");
        return;
    }


    alert(
        "Боец создан!\n" +
        player.name +
        "\nЛига: UAE Warriors"
    );

    console.log(player);
}




// ===============================
// UAE WARRIORS
// ВЫДУМАННЫЕ БОЙЦЫ
// ===============================


const UAE_WARRIORS = {



FLYWEIGHT: [

{
name:"Ахмед Нур",
country:"ОАЭ",
style:"Борьба",
record:"0-0",
level:60
},

{
name:"Иван Крылов",
country:"Россия",
style:"Бокс",
record:"1-0",
level:61
},

{
name:"Кен Сато",
country:"Япония",
style:"Каратэ",
record:"2-1",
level:62
}

],



BANTAMWEIGHT: [

{
name:"Марат Алиев",
country:"Азербайджан",
style:"Борьба",
record:"0-0",
level:60
},

{
name:"Лукас Рейес",
country:"Испания",
style:"Кикбоксинг",
record:"2-0",
level:62
},

{
name:"Джон Картер",
country:"США",
style:"Бокс",
record:"3-1",
level:63
}

],



FEATHERWEIGHT: [

{
name:"Карим Халид",
country:"Египет",
style:"Универсал",
record:"0-0",
level:60
},

{
name:"Бек Нурлан",
country:"Казахстан",
style:"Борьба",
record:"2-1",
level:62
},

{
name:"Мигель Торрес",
country:"Бразилия",
style:"BJJ",
record:"3-0",
level:64
}

],



LIGHTWEIGHT: [

{
name:"Али Рахман",
country:"Азербайджан",
style:"Бокс",
record:"0-0",
level:60
},

{
name:"Рустам Хан",
country:"Россия",
style:"Самбо",
record:"2-0",
level:63
},

{
name:"Диего Силва",
country:"Бразилия",
style:"BJJ",
record:"4-1",
level:65
}

],



WELTERWEIGHT: [

{
name:"Омар Фарис",
country:"ОАЭ",
style:"Борьба",
record:"0-0",
level:60
},

{
name:"Адам Уокер",
country:"Англия",
style:"Бокс",
record:"3-1",
level:64
},

{
name:"Тимур Алиев",
country:"Россия",
style:"Самбо",
record:"5-1",
level:66
}

],



MIDDLEWEIGHT: [

{
name:"Самир Хасан",
country:"Египет",
style:"Универсал",
record:"0-0",
level:60
},

{
name:"Виктор Сантос",
country:"Бразилия",
style:"BJJ",
record:"3-2",
level:65
},

{
name:"Рашид Карим",
country:"Казахстан",
style:"Борьба",
record:"5-0",
level:67
}

],



LIGHT_HEAVYWEIGHT: [

{
name:"Дэвид Миллер",
country:"США",
style:"Бокс",
record:"0-0",
level:60
},

{
name:"Магомед Исламов",
country:"Россия",
style:"Борьба",
record:"4-1",
level:66
},

{
name:"Алекс Фернандес",
country:"Испания",
style:"Кикбоксинг",
record:"6-2",
level:68
}

],



HEAVYWEIGHT: [

{
name:"Джек Миллер",
country:"США",
style:"Бокс",
record:"0-0",
level:60
},

{
name:"Али Рахманов",
country:"Азербайджан",
style:"Борьба",
record:"2-0",
level:63
},

{
name:"Макс Торрес",
country:"Испания",
style:"Кикбоксинг",
record:"4-1",
level:65
},

{
name:"Дэвид Уилсон",
country:"Англия",
style:"Универсал",
record:"3-1",
level:64
},

{
name:"Роман Ковалёв",
country:"Россия",
style:"Самбо",
record:"5-2",
level:67
}

]

};
FLYWEIGHT: {

name: "Наилегчайший вес (до 57 кг)",

champion: {
name: "Анатолий Кондратьев",
country: "🇷🇺 Россия",
level: 85
},
const Aca=
rankings: [

{
rank: 1,
name: "Арен Акопян",
country: "🇦🇲 Армения",
level: 82
},

{
rank: 2,
name: "Азамат Пшуков",
country: "🇷🇺 Россия",
level: 81
},

{
rank: 3,
name: "Азим Гафоров",
country: "🇹🇯 Таджикистан",
level: 80
},

{
rank: 4,
name: "Азамат Керефов",
country: "🇷🇺 Россия",
level: 84
},

{
rank: 5,
name: "Имран Букуев",
country: "🇷🇺 Россия",
level: 79
},

{
rank: 6,
name: "Вартан Асатрян",
country: "🇦🇲 Армения",
level: 78
},

{
rank: 7,
name: "Сайгид Абдулаев",
country: "🇷🇺 Россия",
level: 77
},

{
rank: 8,
name: "Астемир Нагоев",
country: "🇷🇺 Россия",
level: 76
},

{
rank: 9,
name: "Умалат Исрапилов",
country: "🇷🇺 Россия",
level: 75
},

{
rank: 10,
name: "Оятулло Муминов",
country: "🇹🇯 Таджикистан",
level: 74
}

]

},
BANTAMWEIGHT: {

name: "Легчайший вес (до 61 кг)",

rankings: [

{
rank: 1,
name: "Олег Борисов",
country: "🇷🇺 Россия",
level: 84
},

{
rank: 2,
name: "Ренат Ондар",
country: "🇷🇺 Россия",
level: 82
},

{
rank: 3,
name: "Александр Подлесный",
country: "🇷🇺 Россия",
level: 80
},

{
rank: 4,
name: "Рустам Керимов",
country: "🇷🇺 Россия",
level: 87
},

{
rank: 5,
name: "Давид Джибилов",
country: "🇷🇺 Россия",
level: 79
},

{
rank: 6,
name: "Тимур Валиев",
country: "🇷🇺 Россия",
level: 85
},

{
rank: 7,
name: "Абдул-Рахман Дудаев",
country: "🇷🇺 Россия",
level: 83
},

{
rank: 8,
name: "Осимхон Рахмонов",
country: "🇹🇯 Таджикистан",
level: 78
},

{
rank: 9,
name: "Томаш Дэк",
country: "🇸🇰 Словакия",
level: 77
},

{
rank: 10,
name: "Павел Витрук",
country: "🇷🇺 Россия",
level: 76
}

]

},

FEATHERWEIGHT: {

name: "Полулёгкий вес (до 66 кг)",

rankings: [

{
rank: 1,
name: "Алихан Сулейманов",
country: "🇷🇺 Россия",
level: 83
},

{
rank: 2,
name: "Курбан Тайгибов",
country: "🇷🇺 Россия",
level: 84
},

{
rank: 3,
name: "Махарбек Каргинов",
country: "🇷🇺 Россия",
level: 82
},

{
rank: 4,
name: "Алимардан Абдыкааров",
country: "🇰🇬 Кыргызстан",
level: 80
},

{
rank: 5,
name: "Сайфуллах Джабраилов",
country: "🇷🇺 Россия",
level: 79
},

{
rank: 6,
name: "Джамбулат Селимханов",
country: "🇷🇺 Россия",
level: 78
},

{
rank: 7,
name: "Александр Грозин",
country: "🇷🇺 Россия",
level: 81
},

{
rank: 8,
name: "Глеб Хабибуллин",
country: "🇷🇺 Россия",
level: 77
},

{
rank: 9,
name: "Роман Огульчанский",
country: "🇷🇺 Россия",
level: 76
},

{
rank: 10,
name: "Апти Бимарзаев",
country: "🇷🇺 Россия",
level: 75
}

]

},
// ===============================
// ACA - ЛЁГКИЙ ВЕС 70 КГ
// ===============================

LIGHTWEIGHT: {

name: "Лёгкий вес (до 70 кг)",

rankings: [

{
rank: 1,
name: "Али Багов",
country: "🇷🇺 Россия",
style: "Борьба / Грэпплинг",
level: 90
},

{
rank: 2,
name: "Дауд Шайхаев",
country: "🇷🇺 Россия",
style: "Универсал",
level: 86
},

{
rank: 3,
name: "Эдуард Вартанян",
country: "🇷🇺 Россия",
style: "Бокс / Борьба",
level: 88
},

{
rank: 4,
name: "Ахмед Алиев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 84
},

{
rank: 5,
name: "Ислам Мамедов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 85
},

{
rank: 6,
name: "Абдул-Азиз Абдулвахабов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 87
},

{
rank: 7,
name: "Марат Балаев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 82
},

{
rank: 8,
name: "Владимир Пальченков",
country: "🇷🇺 Россия",
style: "Ударник",
level: 80
},

{
rank: 9,
name: "Юсуф Раисов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 86
},

{
rank: 10,
name: "Александр Грозин",
country: "🇷🇺 Россия",
style: "Бокс",
level: 79
}

]

},


// ===============================
// ACA - ПОЛУСРЕДНИЙ ВЕС 77 КГ
// ===============================

WELTERWEIGHT: {

name: "Полусредний вес (до 77 кг)",

rankings: [

{
rank: 1,
name: "Абубакар Вагаев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 90
},

{
rank: 2,
name: "Альберт Туменов",
country: "🇷🇺 Россия",
style: "Ударник",
level: 89
},

{
rank: 3,
name: "Байсангур Вахитов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 84
},

{
rank: 4,
name: "Алексей Махно",
country: "🇷🇺 Россия",
style: "Универсал",
level: 82
},

{
rank: 5,
name: "Устармагомед Гаджидаудов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 83
},

{
rank: 6,
name: "Эдуард Вартанян",
country: "🇷🇺 Россия",
style: "Универсал",
level: 86
},

{
rank: 7,
name: "Мухаммад Коков",
country: "🇷🇺 Россия",
style: "Борьба",
level: 81
},

{
rank: 8,
name: "Александр Шлеменко",
country: "🇷🇺 Россия",
style: "Ударник",
level: 80
},

{
rank: 9,
name: "Владимир Филипов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 78
},

{
rank: 10,
name: "Магомедрасул Хасбулаев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 79
}

]

},

// ===============================
// ACA - СРЕДНИЙ ВЕС 84 КГ
// ===============================

MIDDLEWEIGHT: {

name: "Средний вес (до 84 кг)",

rankings: [

{
rank: 1,
name: "Магомед Исмаилов",
country: "🇷🇺 Россия",
style: "Борьба / Универсал",
level: 88
},

{
rank: 2,
name: "Владимир Филипов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 82
},

{
rank: 3,
name: "Артур Гусейнов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 84
},

{
rank: 4,
name: "Александр Шлеменко",
country: "🇷🇺 Россия",
style: "Ударник",
level: 87
},

{
rank: 5,
name: "Мурад Абдулаев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 81
},

{
rank: 6,
name: "Алексей Ефремов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 79
},

{
rank: 7,
name: "Дмитрий Арышев",
country: "🇷🇺 Россия",
style: "Бокс",
level: 78
},

{
rank: 8,
name: "Иван Штырков",
country: "🇷🇺 Россия",
style: "Универсал",
level: 83
},

{
rank: 9,
name: "Армен Гулян",
country: "🇦🇲 Армения",
style: "Борьба",
level: 77
},

{
rank: 10,
name: "Магомедрасул Гасанов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 76
}

]

},


// ===============================
// ACA - ПОЛУТЯЖЁЛЫЙ ВЕС 93 КГ
// ===============================

LIGHT_HEAVYWEIGHT: {

name: "Полутяжёлый вес (до 93 кг)",

rankings: [

{
rank: 1,
name: "Иван Штырков",
country: "🇷🇺 Россия",
style: "Универсал",
level: 87
},

{
rank: 2,
name: "Саламу Абдурахманов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 83
},

{
rank: 3,
name: "Артур Гусейнов",
country: "🇷🇺 Россия",
style: "Борьба",
level: 82
},

{
rank: 4,
name: "Магомед Анкалаев",
country: "🇷🇺 Россия",
style: "Ударник",
level: 90
},

{
rank: 5,
name: "Мурад Мачаев",
country: "🇷🇺 Россия",
style: "Универсал",
level: 80
},

{
rank: 6,
name: "Виктор Немков",
country: "🇷🇺 Россия",
style: "Борьба",
level: 85
},

{
rank: 7,
name: "Артём Фролов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 79
},

{
rank: 8,
name: "Алексей Буторин",
country: "🇷🇺 Россия",
style: "Бокс",
level: 78
},

{
rank: 9,
name: "Роман Копылов",
country: "🇷🇺 Россия",
style: "Ударник",
level: 81
},

{
rank: 10,
name: "Владимир Минеев",
country: "🇷🇺 Россия",
style: "Кикбоксинг",
level: 86
}

]

},
// ===============================
// ACA - ТЯЖЁЛЫЙ ВЕС 120 КГ
// ===============================

HEAVYWEIGHT: {

name: "Тяжёлый вес (до 120 кг)",

rankings: [

{
rank: 1,
name: "Евгений Гончаров",
country: "🇷🇺 Россия",
style: "Борьба / Универсал",
level: 88
},

{
rank: 2,
name: "Мухумат Вахаев",
country: "🇷🇺 Россия",
style: "Борьба",
level: 87
},

{
rank: 3,
name: "Тони Джонсон",
country: "🇺🇸 США",
style: "Бокс / Борьба",
level: 86
},

{
rank: 4,
name: "Адам Богатырёв",
country: "🇷🇺 Россия",
style: "Борьба",
level: 84
},

{
rank: 5,
name: "Денис Гольцов",
country: "🇷🇺 Россия",
style: "Самбо",
level: 89
},

{
rank: 6,
name: "Кирилл Корнилов",
country: "🇷🇺 Россия",
style: "Универсал",
level: 82
},

{
rank: 7,
name: "Антон Вязигин",
country: "🇷🇺 Россия",
style: "Борьба",
level: 81
},

{
rank: 8,
name: "Александр Маслов",
country: "🇷🇺 Россия",
style: "Ударник",
level: 79
},

{
rank: 9,
name: "Сергей Билостенный",
country: "🇷🇺 Россия",
style: "Ударник",
level: 83
},

{
rank: 10,
name: "Александр Романов",
country: "🇲🇩 Молдова",
style: "Борьба",
level: 85
}

]

},




