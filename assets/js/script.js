"use strict";
class LavoratoreAutonomo {
    constructor(codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codRedd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
let comm = new LavoratoreAutonomo(67, 45000, 25, 5);
console.log(comm);
console.log(comm.getUtileTasse());
console.log(comm.getTasseInps());
console.log(comm.getTasseIrpef());
console.log(comm.getRedditoAnnuoNetto());
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", function () {
        let codR = document.getElementById("codRedd");
        let ReddA = document.getElementById("redditoAnnuoLordo");
        let TassInp = document.getElementById("tasseInps");
        let tassIrp = document.getElementById("tasseIrpef");
        let utn = new LavoratoreAutonomo(parseInt(codR.value), parseInt(ReddA.value), parseInt(TassInp.value), parseInt(tassIrp.value));
        let ul = document.getElementById("ul");
        ul.innerHTML = `
    <li> L'utile tasse è di: €${utn.getUtileTasse()}</li>
    <li> Le tasse Inps da versare: €${utn.getTasseInps()}</li>
    <li> Le tasse Irpef da versare: €${utn.getTasseIrpef()}</li>
    <li> Il tuo reddito annuo netto è di: € ${utn.getRedditoAnnuoNetto()}</li>`;
    });
});
