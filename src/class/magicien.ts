import {Character} from "./character";
import {Weapon} from "./weapon";

export class Magicien extends Character{

    constructor(name: string, sexe: string, weapon: Weapon) {
        super(name, sexe, weapon);
        this.damage += 30;
    }
}