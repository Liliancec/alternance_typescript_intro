import {Character} from "./character";
import {Weapon} from "./weapon";

export class Guerrier extends Character{

    constructor(name: string, sexe: string, weapon: Weapon) {
        super(name,sexe,weapon);
        this.point_de_vie += 50;
    }
}