import {Character} from "./character";
import {Fighter} from "./Fighter";

export class Enemy implements Fighter{
    name: string;
    vie: number;
    damage: number;

    constructor() {
        this.name = "gargouille";
        this.vie =  Math.floor(Math.random()* 300)+1;
        this.damage = Math.floor(Math.random()* 100);
    }

    summary() {
        return "attention une : " + this.name + " vie: " + this.vie
    }

    attack(character: Character){
        let vieinitialCharacter = character.point_de_vie
        console.log('la gargouille riposte !!! \nelle inflige ', this.damage, 'point de vie à ton guerrier mais tu resistes a 50% ( '+this.damage*0.5+')')
        character.takeDamage(this.damage*0.5)
        if (character.point_de_vie < 0)
        {
            character.point_de_vie = 0
        }

        console.log(character.name, 'vie:', vieinitialCharacter , '====>',character.point_de_vie)
    }
    takeDamage(damage:number){
        return this.vie -= damage;
    }
}