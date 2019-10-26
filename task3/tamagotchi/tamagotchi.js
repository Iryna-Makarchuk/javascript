class Tamagotchi {
  constructor () {
    this._name = ''
    this._health = 0
    this._sport = 0
    this._satisfaction = 0
    this._happiness = 0
    this._food = 0
    this._id = ~~(Math.random() * 19327)
  }

  set name (value) {
    this._name = value
  }

  set health (value) {
    this._health = value
  }

  set sport (value) {
    this._sport = value
  }

  set satisfaction (value) {
    this._satisfaction = value
  }

  set happiness (value) {
    this._happiness = value
  }

  set food (value) {
    this._food = value
  }

  // state values
  get id () {
    return 'id-' + this._id
  }

  get name () {
    return this._name
  }

  get health () {
    return this._health
  }

  get sport () {
    return this._sport
  }

  get satisfaction () {
    return this._satisfaction
  }

  get happiness () {
    return this._happiness
  }

  get food () {
    return this._food
  }

  // states
  get nameState () {
    return 'name'
  }

  get healthState () {
    return 'health'
  }

  get sportState () {
    return 'sport'
  }

  get satisfactionState () {
    return 'satisfaction'
  }

  get happinessState () {
    return 'happiness'
  }

  get foodState () {
    return 'food'
  }
}
