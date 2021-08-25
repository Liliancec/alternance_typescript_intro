import {Enemy} from "./enemy";
import {Fighter} from "./Fighter";
import {Weapon} from "./weapon";

export  abstract class Character implements Fighter{
    name: string;
    sexe: string;
    damage: number;
    point_de_vie: number;
    weapon : Weapon;

   protected constructor(name: string , sexe: string, weapon: Weapon) {
        this.name = name;
        this.sexe = sexe;
        this.damage = Math.floor(Math.random()*100) + weapon.damage;
        this.point_de_vie = 300;
        this.weapon = weapon;
    }

    summary() {
        return "salut guerrier : " + this.name + "\nsexe : " + this.sexe + "\ntu as : " + this.point_de_vie + " de vie"
    }

    attack(enemy: Enemy){
        let vieInitialEnemy = enemy.vie
       console.log('tu infliges', this.damage , 'point de vie à ton adversaire')
        enemy.takeDamage(this.damage)
        if (enemy.vie < 0)
        {
            enemy.vie = 0
        }
        console.log(enemy.name, 'vie:', vieInitialEnemy , '====>',enemy.vie)
    }
    takeDamage(damage:number){
         return this.point_de_vie -= damage

    }
}