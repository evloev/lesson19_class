class tamagochi {
   constructor(name,food,energy,mood) {
     this.name = name;
     this.food = food;
     this.energy = energy;
     this.mood = mood;
   };
   
getStatus() {

   if(this.food <= 0 || this.energy <= 0 ||this.mood <= 0) {
      console.log(`${this.name} умер`)
      return false
   };

   
   if(this.food < 3) {
      this.food = `Я голоден  (${this.food})`
    }
    else {
      this.food = ` Я не голоден (${this.food})`
    }

    if (this.energy< 3) {
       this.energy = `Я хочу спать  (${this.energy})`
    }
     else {
        this.energy = `Я не хочу спать  (${this.energy})`
     }

     if (this.mood < 3) {
      this.mood = `Мне грусто  (${this.mood})`
   }
    else {
       this.mood = `Мне не грустно  (${this.mood})`
    }

   
   console.log(`Имя: ${this.name}, Еда: ${this.food}, Энергия: ${this.energy}, Настроение: ${this.mood} `)
};

setName(name){
 this.name = name
};

goEat(food) {
   if (this.food < 5)
   this.food++
   this.mood--
};

sleep(energy) {
   if(this.energy < 5) {
      this.energy++
      this.food--
   }
};

play(mood) {
   if(this.mood < 5) {
      this.mood++
      this.energy--
   }
}
  
}

const tmg = new tamagochi('dsf',1,3,3);
tmg.goEat()
tmg.getStatus()


console.log(tmg)


// console.log(tamagochi.play())
// console.log(tamagochi.sleep())
// console.log(tamagochi.goEat())
// console.log(tamagochi.setName('Maga'))
// console.log(tamagochi.getStatus());

