class App {
  constructor(trainersArray){
    this.trainers = []
    trainersArray.forEach(trainerObj => {
      let trainerInstance = new Trainer(trainerObj)
      this.trainers.push(trainerInstance)
    })
  }

  render(){
    return `<main>
      ${this.trainers.map(trainerInstance => trainerInstance.render()).join("")}
    </main>`
  }
}

/*
<main>
  [trainer1, trainer2, trainer3]
</main>

<main>
  [<div></div>, <div></div>, <div></div>]
</main>
*/
