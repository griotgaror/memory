

function create_difficulty() {
    const max_cards = [3, 4, 6, 7];
    const difficulty = [
        "beginner",
        "advanced",
        "challenge",
        "expert",
    ]     
}


function main() {
    const screen = document.getElementById("screen");
    const difficulty_container = document.getElementById("difficulty_container");
    difficulty_container.style.height = screen.offsetHeight / 2 + "px";
    difficulty_container.style.width = screen.offsetWidth / 2 + "px";

    setTimeout(() => {
        difficulty_container.style.marginTop = screen.offsetHeight / 2 - difficulty_container.offsetHeight / 2  + "px";
        difficulty_container.style.marginLeft = screen.offsetWidth / 2 - difficulty_container.offsetWidth / 2 + "px";
    }, .5);



}



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
    const cards = [3, 4, 6, 7];
    const difficulty = [
        "beginner",
        "advanced",
        "challenge",
        "expert",
    ]
    create_difficultys(); 

    function create_difficultys() {
        for (let i = 0; i < difficulty.length; i++) {
            const input = document.createElement("button");
            input.setAttribute("class", "difficulty");
            input.id = difficulty[i];
            input.setAttribute("type", "text");
            input.textContent = input.id;
            input.style.height = difficulty_container.offsetHeight / difficulty.length + "px";
            input.style.width = difficulty_container.offsetWidth + "px";
            
            difficulty_childs[i] = input
            input.onclick = function() {flip_screen(cards[i]);};
            difficulty_container.append(input);
        }
    };
    
    function flip_screen(idx) {
        screen.style.transform = "rotateY(90deg)";
        setTimeout(() => {
            for (let i = 0; i < difficulty_childs.length; i++) {
                difficulty_container.removeChild(difficulty_childs[i]);
            }

            screen.style.transform = "rotateY(45deg)"
            create_game(idx); 
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
            setTimeout(() => {card.style.transform = "rotateY(0deg)";}, 500);
        };

        return card;
    }
 
    // function set_sprites(max_cards) {
    //     const assets = "../assets/";
    //     const sprites = [];
    //     const game_sprites = [];

    //     for (let i = 1; i < 12; i++) {
    //         sprites[i - 1] = assets + "factorio_" + i.toString() + ".jpg";
    //     }


    //     for (let id = 0; id < max_cards; id++) {
    //         const rnd_idx = Math.floor(Math.random() * sprites.length);
    //         // alert(rnd_idx + sprites.length);
    //     }

    //     return game_sprites;
    // }

    const all_cards = [];

    function create_game(cards) {
        const max_cards = cards;
        const width = screen.offsetWidth / max_cards;
        const height = screen.offsetHeight / max_cards;
        const pos_x = screen.offsetWidth / 2 - (width * max_cards / 2);
        const pos_y = screen.offsetHeight / 2 - (height * max_cards / 2);
        const background = "../factorio.jpg";

        for (let x = 0; x < max_cards; x++) {
            for (let y = 0; y < max_cards; y++) {
                const card = create_card(
                    {
                        x: x,
                        y: y,
                        background: background,
                        width: width,
                        height: height,
                        pos_x: pos_x,
                        pos_y: pos_y,
                    }
                );
                    
                all_cards[all_cards.length +1] = card;
                screen.append(card); 
            };
        };   
    };
};

