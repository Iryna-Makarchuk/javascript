/**
 * Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных, от которых зависит его жизнь.
 * Например: создается инстанс тамагочи и дается имя питомцу, он может кушать, гулять, спать,
 * пить, умереть или сбежать и т.д. За эти или иные действия отвечают переменные самого инстанса,
 * например health, happiness и так далее...
 *
 * добавьте чтобы у полей были какие-то границы, что нельзя их менять как вздумается
 * и класть туда формат который поломает все
 */

class Tamagotchi {
  _max = 100;

  _state = {
    condition: {
      happiness: this._max,
      health: this._max,
      satisfaction: this._max,
      education: this._max
    },
    name: "",
    showTamagotchi: false,
    alive: true
  };

  setAliveState = (boolean) => {
    if (typeof boolean === 'boolean' && this._state.alive !== boolean) {
      this._state.alive = boolean;
    }
  };

  getAliveState = () => {
    return this._state.alive;
  };

  getTamagotchiState = () => {
    return this._state.showTamagotchi;
  };

  setTamagotchiState = (boolean) => {
    if (this._state.showTamagotchi !== boolean) {
      this._state.showTamagotchi = boolean;
    }
  };

  getHappiness = () => {
    return this._state.condition.happiness;
  };

  getHealth = () => {
    return this._state.condition.health;
  };

  getSatisfaction = () => {
    return this._state.condition.satisfaction;
  };

  getEducation = () => {
    return this._state.condition.education;
  };

  getName = () => {
    return this._state.name;
  };

  setHappiness = (happiness) => {
    this._state.condition.happiness = happiness;
  };

  setHealth = (health) => {
    this._state.condition.health = health;
  };

  setSatisfaction = (satisfaction) => {
    this._state.condition.satisfaction = satisfaction;
  };

  setEducation = (education) => {
    this._state.condition.education = education;
  };

  setName = (name) => {
    this._state.name = name;
  };

  reduceHappiness = (value) => {
    let happiness = this.getHappiness();
    happiness -= value;
    happiness <= 0 ? this.setHappiness(0) : this.setHappiness(happiness);
  };

  increaseHappiness = (value) => {
    let happiness = this.getHappiness();
    happiness += value;
    happiness >= this._max ? this.setHappiness(this._max) : this.setHappiness(happiness);
  };

  reduceHealth = (value) => {
    let health = this.getHealth();
    health -= value;
    health <= 0 ? this.setHealth(0) : this.setHealth(health);
  };

  increaseHealth = (value) => {
    let health = this.getHealth();
    health += value;
    health >= this._max ? this.setHealth(this._max) : this.setHealth(health);
  };

  reduceSatisfaction = (value) => {
    let satisfaction = this.getSatisfaction();
    satisfaction -= value;
    satisfaction <= 0 ? this.setSatisfaction(0) : this.setSatisfaction(satisfaction);
  };

  increaseSatisfaction = (value) => {
    let satisfaction = this.getSatisfaction();
    satisfaction += value;
    satisfaction >= this._max ? this.setSatisfaction(this._max) : this.setSatisfaction(satisfaction);
  };

  reduceEducation = (value) => {
    let education = this.getEducation();
    education -= value;
    education <= 0 ? this.setEducation(0) : this.setEducation(education);
  };

  increaseEducation = (value) => {
    let education = this.getEducation();
    education += value;
    education >= this._max ? this.setEducation(this._max) : this.setEducation(education);
  };

  feed = () => {
    this.increaseHappiness(10);
    this.increaseHealth(7);
    this.increaseEducation(4);
    this.increaseSatisfaction(2);
  };

  giveToDrink = () => {
    this.increaseHappiness(5);
    this.increaseHealth(5);
    this.reduceEducation(4);
    this.increaseSatisfaction(2);
  };

  sleep = () => {
    this.increaseHappiness(2);
    this.increaseHealth(8);
    this.reduceEducation(4);
    this.increaseSatisfaction(2);

  };

  hug = () => {
    this.increaseHappiness(10);
    this.increaseHealth(5);
    this.increaseSatisfaction(10);
  };

  walk = () => {
    this.increaseHappiness(5);
    this.increaseHealth(7);
    this.reduceEducation(3);
    this.increaseSatisfaction(7);
  };

  goToSchool = () => {
    this.reduceHappiness(15);
    this.reduceHealth(5);
    this.increaseEducation(10);
    this.reduceSatisfaction(12);
  };
}