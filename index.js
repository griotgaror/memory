

window.onload = function() {
    const screen = document.getElementById("screen");
    const difficulty_container = document.getElementById("difficulty_container");

    const Difficultys = [
        ["beginner", 4, 3],
        ["advanced", 5, 4],
        ["expert", 6, 5],
    ];
    
    //create_difficultys
    for (let idx = 0; idx < Difficultys.length; idx++) {
        const input = document.createElement("button");
        input.className = "difficulty";
        input.id = Difficultys[idx][0];
        input.textContent = input.id;

        input.addEventListener("click", function() {
            const column = Difficultys[idx][1];
            const row = Difficultys[idx][2];

            screen.style.transform = "rotateX(90deg)";
            main(column, row);
        })

        difficulty_container.append(input);
    }
};

function main(column, row) {
    const card_container = document.getElementById("card_container");
    const max_cards = column * row;
    const assets = [];
    
    //get_assets
    for (let i = 0; i < 2; i++) {
        for (let idx = 0; idx < max_cards / 2; idx++) {
            const src = "../assets/factorio_" + idx.toString() + ".jpg";
            assets.push(src);
        }
    }
    //mix_assets
    assets.sort(() => Math.random() - .5);
    console.log(assets);

    const game_cards = [];
    // const background = 
    let idx = 0;

    //create_ cards
    for (let x = 0; x < column; x++) {
        const column_cell = document.createElement("div");
        column_cell.id = "column_cell";
        card_container.append(column_cell);

        for (let y = 0; y < row; y++) {
            const card = new Image();
            card.id = "card";
            card.src = assets[idx];
            idx++;

            card.addEventListener("click", function() {
                flip_card(card); 
            });

            column_cell.append(card);
            game_cards.push(card);
        };
    };
};

function flip_card(card, src) {
    card.style.transform = "rotateY(90deg)";
    setTimeout(() => {
        card.style.transform = "rotate(0deg)";
    }, 500)
};

function merge_cards() {

};