let feat = document.getElementById('feat')
let comp = document.getElementById('comp')
let drop1 = document.getElementById('drop1')
let drop2 = document.getElementById('drop2')
let menu = document.getElementById('menu')
let sha = document.getElementById('sha')
let closing = document.getElementById('close')

closing.addEventListener('click', () => {
  shiw()
})


menu.addEventListener('click', () => {
  shaw()
})

feat.addEventListener('click', () => {
  rev()
})
feat.addEventListener('mouseover', () => {
   rev1()
 })

comp.addEventListener('click', () => {
  rel()
})
 comp.addEventListener('mouseover', () => {
   rel1()
 })

 function rev1(){
     drop1.classList.remove('hidden')
 }
 function rel1(){
   drop2.classList.remove('hidden')
 }

function rev(){
  if (drop1.classList.contains('hidden')){
    drop1.classList.remove('hidden')
  }else{
    drop1.classList.add('hidden')
  }
}
function rel(){
  if (drop2.classList.contains('hidden')){
    drop2.classList.remove('hidden')
  }else{
    drop2.classList.add('hidden')
  }
}
function shaw(){
  if (sha.classList.contains('sm:hidden')){
    sha.classList.remove('sm:hidden')
  }
}
function shiw(){
  sha.classList.add('sm:hidden')
}

