class LavoratoreAutonomo {
  codRedd: number;
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;

  constructor(codRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
    this.codRedd = codRedd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseInps = tasseInps;
    this.tasseIrpef = tasseIrpef;
  }

  getUtileTasse(): number {
    return (this.redditoAnnuoLordo * this.codRedd) / 100;
  }

  getTasseInps(): number {
    return (this.getUtileTasse() * this.tasseInps) / 100;
  }

  getTasseIrpef(): number {
    return (this.getUtileTasse() * this.tasseIrpef) / 100;
  }

  getRedditoAnnuoNetto(): number {
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
  let btn = document.querySelector("#btn") as HTMLButtonElement;
  btn.addEventListener("click", function () {
    let codR = document.getElementById("codRedd") as HTMLInputElement;
    let ReddA = document.getElementById("redditoAnnuoLordo") as HTMLInputElement;
    let TassInp = document.getElementById("tasseInps") as HTMLInputElement;
    let tassIrp = document.getElementById("tasseIrpef") as HTMLInputElement;

    let utn = new LavoratoreAutonomo(parseInt(codR.value), parseInt(ReddA.value), parseInt(TassInp.value), parseInt(tassIrp.value));

    let ul = document.getElementById("ul") as HTMLUListElement;
    ul.innerHTML = `
    <li> L'utile tasse è di: €${utn.getUtileTasse()}</li>
    <li> Le tasse Inps da versare: €${utn.getTasseInps()}</li>
    <li> Le tasse Irpef da versare: €${utn.getTasseIrpef()}</li>
    <li> Il tuo reddito annuo netto è di: € ${utn.getRedditoAnnuoNetto()}</li>`;
  });
});
