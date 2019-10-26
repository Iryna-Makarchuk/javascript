document.addEventListener('DOMContentLoaded', load)

const max = 100
let generator, generalBlock, imgGenerator, paramDivGenerator, tamagotchiUl, tamagotchiLi, nameDivGenerator,
  selector, elementById, elementByIdFirstChild, gameOverDiv, imgDiv, tamagotchiObj, tamagotchiState,
  stateParam, tamagotchiStateValue

const tamagotchi = () => {
  tamagotchiObj = new Tamagotchi()
  Object.keys(tamagotchiObj).forEach((key) => {
    if (key !== '_id') {
      (typeof tamagotchiObj[key] === 'number') ? tamagotchiObj[key] = max : tamagotchiObj[key] = getName()
    }
  })
  return tamagotchiObj
}

function load () {
  generator = document.createElement('section')
  generator.setAttribute('id', 'tamagotchi-generator')
  document.body.appendChild(generator)

  document
    .getElementById('add')
    .addEventListener('click', start)
}

function start () {
  tamagotchiObj = tamagotchi()
  createGeneralTamagotchiBlock()
  tamagotchiObj.createImageBlock()
  createNameBlock()
  tamagotchiObj.createParametersBlock()
  reduceParameters(tamagotchiObj)
  changeParameters(tamagotchiObj)
}

function reduceParameters (tamagotchi) {
  const timer = setInterval(reduce, 500)

  function reduce () {
    if (tamagotchi.reduceHealth(4) <= 0) {
      clearInterval(timer)
    } else {
      tamagotchi.reduceSport(5)
      tamagotchi.reduceSatisfaction(3)
      tamagotchi.reduceHappiness(6)
      tamagotchi.reduceFood(7)
    }
  }
}

function createGeneralTamagotchiBlock () {
  generalBlock = document.createElement('div')
  generalBlock.classList.add('tamagotchi-block')
  generalBlock.setAttribute('id', tamagotchiObj.id)
  generator.appendChild(generalBlock)
}

function createNameBlock () {
  nameDivGenerator = document.createElement('div')
  nameDivGenerator.classList.add('tamagotchi-name')
  generalBlock.appendChild(nameDivGenerator)
  nameDivGenerator.innerText = tamagotchiObj.name
}

function setTextForParam (selector, value) {
  if (selector !== null) {
    document.querySelector(selector).innerText = value
  }
}

function changeParameters (tamagotchi) {
  document
    .querySelector('#' + tamagotchi.id + ' button.stroke')
    .addEventListener('click', function () {
      tamagotchi.increaseHealth(2)
      tamagotchi.increaseHappiness(5)
      tamagotchi.increaseSatisfaction(7)
    })

  document
    .querySelector('#' + tamagotchi.id + ' button.feed')
    .addEventListener('click', function () {
      tamagotchi.increaseFood(10)
      tamagotchi.increaseHealth(5)
      tamagotchi.increaseHappiness(5)
      tamagotchi.increaseSatisfaction(2)
    })

  document
    .querySelector('#' + tamagotchi.id + ' button.treat')
    .addEventListener('click', function () {
      tamagotchi.increaseHealth(4)
      tamagotchi.increaseHappiness(3)
      tamagotchi.reduceSport(2)
    })

  document
    .querySelector('#' + tamagotchi.id + ' button.sport')
    .addEventListener('click', function () {
      tamagotchi.increaseHealth(8)
      tamagotchi.increaseSport(10)
      tamagotchi.increaseHappiness(5)
      tamagotchi.increaseSatisfaction(5)
      tamagotchi.reduceFood(5)
    })
}

function getName () {
  const inputName = document.querySelector("input[title='game-name']")
  const value = inputName.value
  inputName.value = ''
  return value === '' ? 'Mimitchi' : value
}

function setGameOver (tamagotchi) {
  if (tamagotchi.health === 0) {
    elementById = document.getElementById(tamagotchi.id)
    elementByIdFirstChild = elementById.firstElementChild
    while (elementById.lastChild) {
      elementById.removeChild(elementById.lastChild)
    }
    gameOverDiv = document.createElement('div')
    elementById.appendChild(gameOverDiv)
    gameOverDiv.className = 'game-over'
    gameOverDiv.innerText = 'GAME OVER'
  }
}

Tamagotchi.prototype.createImageBlock = function () {
  imgDiv = document.createElement('div')
  generalBlock.appendChild(imgDiv)
  imgDiv.classList.add('tamagotchi-image')
  imgDiv.setAttribute('id', this.id)
  this.setImage('images/Mimitchi_1.png')
}

Tamagotchi.prototype.changeImage = function (condition, image) {
  if (condition) {
    this.removeImage()
    this.setImage(image)
  }
}

Tamagotchi.prototype.setHealthParam = function (value) {
  setTextForParam('#' + this.id + ' .' + this.healthState + ' .value', value)
}

Tamagotchi.prototype.setSportParam = function (value) {
  setTextForParam(selector = '#' + this.id + ' .' + this.sportState + ' .value', value)
}

Tamagotchi.prototype.setSatisfactionParam = function (value) {
  setTextForParam('#' + this.id + ' .' + this.satisfactionState + ' .value', value)
}

Tamagotchi.prototype.setHappinessParam = function (value) {
  setTextForParam('#' + this.id + ' .' + this.happinessState + ' .value', value)
}

Tamagotchi.prototype.setFoodParam = function (value) {
  setTextForParam('#' + this.id + ' .' + this.foodState + ' .value', value)
}

Tamagotchi.prototype.setImage = function (image) {
  imgDiv = document.querySelector('.tamagotchi-image#' + this.id)
  imgGenerator = document.createElement('img')
  imgDiv.appendChild(imgGenerator)
  imgGenerator.setAttribute('src', image)
}

Tamagotchi.prototype.removeImage = function () {
  document
    .querySelector('.tamagotchi-image#' + this.id + ' img')
    .remove()
}

Tamagotchi.prototype.createParametersBlock = function () {
  paramDivGenerator = document.createElement('div')
  paramDivGenerator.classList.add('params')
  generalBlock.appendChild(paramDivGenerator)
  tamagotchiUl = document.createElement('ul')
  paramDivGenerator.appendChild(tamagotchiUl)

  createTamagotchiDescriptionBlock(this.healthState, this.health)
  createTamagotchiDescriptionBlock(this.sportState, this.sport)
  createTamagotchiDescriptionBlock(this.satisfactionState, this.satisfaction)
  createTamagotchiDescriptionBlock(this.happinessState, this.happiness)
  createTamagotchiDescriptionBlock(this.foodState, this.food)

  createButtonsBlock()

  function createButtonsBlock () {
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    generalBlock.appendChild(buttons)

    function createButton (title) {
      const but = document.createElement('button')
      but.classList.add(title)
      but.innerText = title.toUpperCase()
      buttons.appendChild(but)
    }

    createButton('stroke')
    createButton('feed')
    createButton('treat')
    createButton('sport')
  }

  function createTamagotchiDescriptionBlock (state, parameter) {
    tamagotchiLi = document.createElement('li')
    tamagotchiUl.appendChild(tamagotchiLi)
    tamagotchiState = document.createElement('span')
    tamagotchiStateValue = document.createElement('span')
    tamagotchiLi.appendChild(tamagotchiState)
    tamagotchiLi.appendChild(tamagotchiStateValue)
    stateParam = state

    tamagotchiLi.classList.add(stateParam)
    tamagotchiStateValue.classList.add('value')
    tamagotchiState.classList.add('state')
    tamagotchiState.innerText = state
    tamagotchiStateValue.innerText = parameter
  }
}

Tamagotchi.prototype.reduceHealth = function (value) {
  this.health = this.health - value
  this.setHealthParam(this.health >= 0 ? this.health : this.health = 0)
  this.changeImage(this.health <= 38 && this.health > 15, 'images/Mimitchi_sad.png')
  this.changeImage(this.health <= 15, 'images/Mimitchi_cry.png')
  this.changeImage(this.health <= 93 && this.health > 82, 'images/Mimitchi_jump.png')
  this.changeImage(this.health <= 82 && this.health > 72, 'images/Mimitchi.png')
  setGameOver(this)
  return this.health
}

Tamagotchi.prototype.reduceSport = function (value) {
  this.sport = this.sport - value
  this.setSportParam(this.sport >= 0 ? this.sport : this.sport = 0)
  this.changeImage(this.health <= 90 && this.sport <= 80, 'images/Mimitchi_sad.png')
  return this.sport
}

Tamagotchi.prototype.reduceSatisfaction = function (value) {
  this.satisfaction = this.satisfaction - value
  this.setSatisfactionParam(this.satisfaction >= 0 ? this.satisfaction : this.satisfaction = 0)
  this.changeImage(this.satisfaction <= 80 && this.health > 15, 'images/Mimitchi_sad.png')
  return this.satisfaction
}

Tamagotchi.prototype.reduceHappiness = function (value) {
  this.happiness = this.happiness - value
  this.setHappinessParam(this.happiness >= 0 ? this.happiness : this.happiness = 0)
  this.changeImage(this.happiness <= 63 && this.health > 15, 'images/Mimitchi_sad.png')
  this.changeImage(this.happiness <= 20, 'images/Mimitchi_cry.png')
  return this.happiness
}

Tamagotchi.prototype.reduceFood = function (value) {
  this.food = this.food - value
  this.setFoodParam(this.food >= 0 ? this.food : this.food = 0)
  return this.food
}

Tamagotchi.prototype.increaseHealth = function (value) {
  this.health = this.health + value
  this.setHealthParam(this.health <= 100 ? this.health : this.health = 100)
  this.changeImage(this.health > 50, 'images/Mimitchi_1.png')
  return this.health
}

Tamagotchi.prototype.increaseSport = function (value) {
  this.sport = this.sport + value
  this.setSportParam(this.sport <= 100 ? this.sport : this.sport = 100)
  this.changeImage(this.health > 30, 'images/Mimitchi_jump.png')
  return this.sport
}

Tamagotchi.prototype.increaseSatisfaction = function (value) {
  this.satisfaction = this.satisfaction + value
  this.setSatisfactionParam(this.satisfaction <= 100 ? this.satisfaction : this.satisfaction = 100)
  this.changeImage(this.health > 5, 'images/Mimitchi.png')
  return this.satisfaction
}

Tamagotchi.prototype.increaseHappiness = function (value) {
  this.happiness = this.happiness + value
  this.setHappinessParam(this.happiness <= 100 ? this.happiness : this.happiness = 100)
  this.changeImage(this.health > 35, 'images/Mimitchi_jump.png')
  return this.happiness
}

Tamagotchi.prototype.increaseFood = function (value) {
  this.food = this.food + value
  this.setFoodParam(this.food <= 100 ? this.food : this.food = 100)
  this.changeImage(this.health > 5, 'images/Mimitchi_eat.png')
  return this.food
}
