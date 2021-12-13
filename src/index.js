




window.onload = function() {
    const screen = document.getElementById("screen");
    
    const difficulty_container = document.createElement("div");
    difficulty_container.id = "difficulty_container";
    difficulty_container.style.width = screen.offsetWidth / 2 + "px";
    difficulty_container.style.height = screen.offsetHeight / 2 + "px"
    
    setTimeout(() => {
        difficulty_container.style.marginTop = screen.offsetHeight / 2 - difficulty_container.offsetHeight / 2  + "px";
        difficulty_container.style.marginLeft = screen.offsetWidth / 2 - difficulty_container.offsetWidth / 2 + "px";
    }, .1);
    
    screen.append(difficulty_container);
    
    const difficulty_childs = [];
    const difficulty = [
        ["beginner", 4, 3],
        ["advanced", 5, 4],
        ["challenge", 6, 5],
    ]

    create_difficultys(); 

    function create_difficultys() {
        for (let i = 0; i < difficulty.length; i++) {
            const input = document.createElement("button");
            input.setAttribute("class", "difficulty");
            input.id = difficulty[i][0];
            input.setAttribute("type", "text");
            input.textContent = input.id;
            input.style.height = difficulty_container.offsetHeight / difficulty.length + "px";
            input.style.width = difficulty_container.offsetWidth + "px";
            
            difficulty_childs[i] = input
            difficulty_container.append(input);
            
            input.onclick = function() {
                flip_screen(difficulty[i][1], difficulty[i][2]);
            };
        }
    };
    
    function flip_screen(colum, row) {
        screen.style.transform = "rotateY(90deg)";
        setTimeout(() => {
            for (let i = 0; i < difficulty_childs.length; i++) {
                difficulty_container.removeChild(difficulty_childs[i]);
            }

            screen.style.transform = "rotateY(45deg)"
            create_game(
                {
                    colum: colum,
                    row: row,
                }); 
        }, 1000);
    }

    
    function create_card(data) {
        const card = new Image();
        card.id = "card";
        card.src = data.background;
        card.width = data.width;
        card.height = data.height;
        card.style.marginLeft = data.pos_x + (data.width * data.x) + "px";
        card.style.marginTop = data.pos_y + (data.height * data.y) + "px";
        
        card.onclick = function() {
        card.style.transform = "rotateY(90deg)";
        setTimeout(() => {card.style.transform = "rotateY(0deg)"}, 500);
        setTimeout(() => {card.src = data.front}, 500);
        };

        return card;
    }


    function set_card_pictures(max_cards) {
        let game_cards = []; 
        let idx = 0;

        for (let i = 0; i < 2; i++) {
            for (let x = 0; x < max_cards; x++) {
                game_cards[idx] = "../assets/factorio_" + x.toString() + ".jpg";
                idx++
            };
        };

        game_cards.sort(() => Math.random() - 0.5);
        console.log(game_cards)
        return game_cards;
    }

    
    function create_game(grid) {
        const all_cards = [];
        const colum = grid.colum;
        const row = grid.row;
        const width = screen.offsetWidth / colum;
        const height = screen.offsetHeight / row;
        const pos_x = screen.offsetWidth / 2 - (width * colum / 2);
        const pos_y = screen.offsetHeight / 2 - (height * row / 2);
        const background = "../factorio.jpg";
        
        const max_cards = colum * row;
        const game_cards = set_card_pictures(max_cards / 2);
        var idx = 0;

        for (let x = 0; x < colum; x++) {
            for (let y = 0; y < row; y++) {
                
                const card = create_card(
                    {
                        x: x,
                        y: y,
                        background: background,
                        front: game_cards[idx],
                        width: width,
                        height: height,
                        pos_x: pos_x,
                        pos_y: pos_y,
                    }
                );
                    
                idx++;
                all_cards[all_cards.length +1] = card;
                screen.append(card); 
            };
        };   
    };
};

