const getAnswerBtn = document.querySelector('.get-answer')
const firstInp = document.getElementById('first')
const secondInp = document.getElementById('second')
const preloader = document.querySelector('.preloader')
const answer = document.querySelector('.answer')

getAnswerBtn.onclick = () => {
  firstInp.style.animation = 'disappear-down 2s'
  secondInp.style.animation = 'disappear-up 2s'

  setTimeout(() => {
    answer.textContent = Math.random() > .5 ? firstInp.value : secondInp.value
    preloader.hidden = true
    answer.hidden = false
    answer.style.animation = 'appear 2s'
  }, 5000);
}

firstInp.addEventListener('animationend', e => {
  e.target.hidden = true
})

secondInp.addEventListener('animationend', e => {
  e.target.hidden = true
  preloader.hidden = false
  preloader.style.animation = 'appear 2s'
})