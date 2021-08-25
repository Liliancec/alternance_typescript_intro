import {Character} from "./class/character";
import {Enemy} from "./class/enemy";
import {Guerrier} from "./class/guerrier";
import {Magicien} from "./class/magicien";
import {Weapon} from "./class/weapon";
import {Glaive} from "./class/glaive";
import {Hache} from "./class/hache";

const prompts = require('prompts');

(async () => {
    let response = await prompts([{
                type: 'text',
                name: 'name',
                message: 'quel est votre nom?'

            },
                {
                    type: 'text',
                    name: 'sexe',
                    message: 'selectionne ton sexe '

                },
                {
                    type: 'select',
                    name: 'class',
                    message: 'quel type de personnage souhaite tu ? ',
                    choices: [
                        {title: 'guerrier', value: 1},
                        {title: 'magicien', value: 2}
                    ]

                },
            {
                type: 'select',
                name: 'arme',
                message: "selectionne ton arme",
                choices: [
                    {title: 'glaive', value: 1},
                    {title: 'hache', value: 2}
                ]
            }

            ]
        )
    ;
    let myWeapon : Weapon
    if (response.arme == 1){
        myWeapon = new Glaive()
    }else {
        myWeapon = new Hache()
    }
    let myCharacter : Character
    if (response.class == 1){
        myCharacter = new Guerrier(response.name, response.sexe, myWeapon);
    }else{
        myCharacter = new Magicien(response.name, response.sexe, myWeapon)
    }
    console.log(myCharacter.summary());

    console.log('Ennemi en approche !');

    let monster = new Enemy();
    let isFigth = true;
    while (isFigth) {
        let fightChoice = await prompts([{
                type: 'select',
                name: 'fightChoice',
                message: 'combattre ou fuir ?',
                choices: [
                    {title: 'combattre', value: 1},
                    {title: 'fuir', value: 2}
                ]
            },
            ]
        );
        console.log(fightChoice.fightChoice);

        if (fightChoice.fightChoice === 1) {
            console.log(monster.summary());
            myCharacter.attack(monster);
            if (monster.vie > 0) {
                monster.attack(myCharacter);
                if (myCharacter.point_de_vie <= 0) {
                    console.log('tu es mort fdp');
                    isFigth = false;
                }
            } else {
                console.log('tu as gagné fdp');
                isFigth = false;
            }
        } else {
            console.log('pd va');
            isFigth = false;
        }
    }
})();



