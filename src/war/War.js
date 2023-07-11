const Soldier = require("../soldier/Soldier.js");
const Viking = require("../viking/Viking.js");
const Saxon = require("../saxon/Saxon.js");

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    // vikingAttack() {
    //     const randomSaxonIndex = Math.floor()
    // }

}

module.exports = War;
