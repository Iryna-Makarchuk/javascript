/* На экране у вас есть шарик# Вам нужно с помощью js и html создать какое-то
действие с ним# Например, шарик залетает в коробку/прохождение через кольцо/отбивание
от стенок# Все, что ваш душа придумает# */

const ball = document.getElementById('ball')

ball.addEventListener('click', () => {
  let distanceX = 0
  let distanceY = 0
  const maxDistanceX = 500
  const maxDistanceY = 500

  const timer = setInterval(() => {
    distanceX = distanceX + 3
    distanceY = distanceY + 2.9
    if (distanceX >= maxDistanceX || distanceY >= maxDistanceY) {
      clearInterval(timer)
      return
    }
    ball.style.marginLeft = distanceX + 'px'
    ball.style.marginTop = distanceY + 'px'
  }, 10)
})
