const create = (element, parent) => {
  return parent.appendChild(document.createElement(element))
}

const render = () => {
  const wrapper = create('div', document.body)
  wrapper.classList.add('wrapper')

  const logo = create('div', wrapper)
  logo.classList.add('logo')

  const logoImage = create('img', logo)
  logoImage.setAttribute('src', 'images/2.happy.png')

  const header = create('div', wrapper)
  header.classList.add('header')

  const headerTitle = create('p', header)
  headerTitle.innerText = 'TAMAGOTCHI'

  const nameInputField = create('input', header)
  nameInputField.setAttribute('placeholder', 'Insert tamagotchi name')

  const addButton = create('button', header)
  addButton.id = 'add-button'
  addButton.innerText = 'Add'

  const gameContainer = create('div', wrapper)
  gameContainer.classList.add('game')

  const inputFieldDom = document.querySelector('.header input')
  const addButtonDom = document.getElementById('add-button')
  const gameContainerDom = document.querySelector('.game')

  const getPlayer = () => {
    return new Tamagotchi()
  }

  function getName () {
    const maxNameLength = 10

    let value = inputFieldDom.value
    if (value === '') {
      value = 'Tamagotchi'
    } else if (value.length > maxNameLength) {
      value = value.slice(0, 11)
    }
    return value
  }

  const changeImages = (player) => {
    const faceImagesDom = document.querySelector('.images')

    if (player.getHealth() <= 100 && player.getHealth() > 85) {
      faceImagesDom.setAttribute('src', 'images/1.happy.png')
    }

    if (player.getHealth() <= 85 && player.getHealth() > 70) {
      faceImagesDom.setAttribute('src', 'images/2.happy.png')
    }

    if (player.getHealth() <= 70 && player.getHealth() > 55) {
      faceImagesDom.setAttribute('src', 'images/3.notHappy.png')
    }

    if (player.getHealth() <= 55 && player.getHealth() > 40) {
      faceImagesDom.setAttribute('src', 'images/4.notHappy.png')
    }

    if (player.getHealth() <= 40 && player.getHealth() > 25) {
      faceImagesDom.setAttribute('src', 'images/5.notHappy.png')
    }

    if (player.getHealth() <= 25 && player.getHealth() > 10) {
      faceImagesDom.setAttribute('src', 'images/6_black.png')
    }

    if (player.getHealth() <= 10 && player.getHealth() > 0) {
      faceImagesDom.setAttribute('src', 'images/7_red_eyes.png')
    }

    if (player.getHealth() === 0) {
      faceImagesDom.setAttribute('src', 'images/8_game_over.png')
    }
  }

  const reduce = (player) => {
    generateImagesBlock(player)
    const statisticsBlock = generateStatisticsBlock()
    statisticsBlock.playerName.innerText = player.getName()
    generateButtonsBlock(player)

    const timer = setInterval(() => {
      player.reduceHappiness(8)
      player.reduceHealth(7)
      player.reduceSatisfaction(5)
      player.reduceEducation(3)

      statisticsBlock.happiness.innerText = player.getHappiness()
      statisticsBlock.health.innerText = player.getHealth()
      statisticsBlock.satisfaction.innerText = player.getSatisfaction()
      statisticsBlock.education.innerText = player.getEducation()

      changeImages(player)
      if (player.getHealth() === 0) {
        finishGame(player)
        clearInterval(timer)
      }
    }, 500)
  }

  const generateImagesBlock = () => {
    const face = create('div', gameContainer)
    face.classList.add('face')

    const faceImage = create('img', face)
    faceImage.classList.add('images')
  }

  const generateStatisticsBlock = () => {
    const statistics = create('div', gameContainer)
    statistics.classList.add('statistics')

    const statisticsDom = document.querySelector('.statistics')

    const playerName = create('div', statisticsDom)
    playerName.classList.add('player-name')

    const states = create('div', statisticsDom)
    states.classList.add('player-states')

    const values = create('div', statisticsDom)
    values.classList.add('player-values')

    create('div', states).innerText = 'Happiness'
    create('div', states).innerText = 'Health'
    create('div', states).innerText = 'Satisfaction'
    create('div', states).innerText = 'Education'

    const happiness = create('div', values)
    const health = create('div', values)
    const satisfaction = create('div', values)
    const education = create('div', values)

    return {
      playerName,
      happiness,
      health,
      satisfaction,
      education
    }
  }

  const generateButtonsBlock = (player) => {
    const joystick = create('div', gameContainer)
    joystick.classList.add('joystick')

    const buttonsDom = document.querySelector('.joystick')

    const feedButton = create('button', buttonsDom)
    feedButton.classList.add('feed-button')
    feedButton.innerText = 'Feed'

    const drinkButton = create('button', buttonsDom)
    drinkButton.classList.add('drink-button')
    drinkButton.innerText = 'Drink'

    const sleepButton = create('button', buttonsDom)
    sleepButton.classList.add('sleep-button')
    sleepButton.innerText = 'Sleep'

    const hugButton = create('button', buttonsDom)
    hugButton.classList.add('hug-button')
    hugButton.innerText = 'Hug'

    const walkButton = create('button', buttonsDom)
    walkButton.classList.add('walk-button')
    walkButton.innerText = 'Walk'

    const schoolButton = create('button', buttonsDom)
    schoolButton.classList.add('school-button')
    schoolButton.innerText = 'Go to school'

    buttonsDom.addEventListener('click', ({ target }) => {
      if (target.classList.contains('feed-button')) {
        player.feed()
      }
      if (target.classList.contains('drink-button')) {
        player.giveToDrink()
      }
      if (target.classList.contains('sleep-button')) {
        player.sleep()
      }
      if (target.classList.contains('hug-button')) {
        player.hug()
      }
      if (target.classList.contains('walk-button')) {
        player.walk()
      }
      if (target.classList.contains('school-button')) {
        player.goToSchool()
      }
    })
  }

  const startGame = () => {
    const tamagotchi = getPlayer()
    gameContainerDom.innerHTML = ''
    if (gameContainerDom.classList.contains('over')) {
      gameContainerDom.className = 'game'
    }
    tamagotchi.setName(getName())
    tamagotchi.setTamagotchiState(true)
    tamagotchi.setAliveState(false)
    addButtonDom.setAttribute('style', 'display: none')
    inputFieldDom.setAttribute('style', 'display: none')

    reduce(tamagotchi)
  }

  const finishGame = (player) => {
    player.setAliveState(false)
    player.setTamagotchiState(false)
    gameContainerDom.innerHTML = 'Game over'
    gameContainerDom.classList.add('over')

    addButtonDom.setAttribute('style', 'display: block')
    inputFieldDom.value = ''
    inputFieldDom.setAttribute('style', 'display: block')
  }

  const openModalDialog = () => {
    const modal = create('div', document.body)
    modal.classList.add('modal-open')

    const modalDialog = create('div', modal)
    modalDialog.id = 'modal-confirm-creation'

    const closeIcon = create('img', modalDialog)
    closeIcon.classList.add('cancel-adding')
    closeIcon.src = 'close.svg'

    const modalText = create('p', modalDialog)
    modalText.innerText = `Would you like to start the game with the name ${getName()}?`

    const confirmButton = create('button', modalDialog)
    confirmButton.id = 'confirm-player'
    confirmButton.innerText = 'Confirm'

    const cancelButton = create('button', modalDialog)
    cancelButton.id = 'cancel-player'
    cancelButton.innerText = 'Cancel'

    const confirmPlayerDom = document.getElementById('confirm-player')
    const cancelPlayerDom = document.getElementById('cancel-player')
    const cancelAddingPlayerDom = document.querySelector('.cancel-adding')
    const modalWrapperDom = document.querySelector('.modal-open')

    cancelAddingPlayerDom.addEventListener('click', () => {
      modalWrapperDom.remove()
    })

    cancelPlayerDom.addEventListener('click', () => {
      modalWrapperDom.remove()
    })

    confirmPlayerDom.addEventListener('click', () => {
      modalWrapperDom.remove()
      startGame()
    })
  }

  addButtonDom.addEventListener('click', () => {
    openModalDialog()
  })
}

render()
