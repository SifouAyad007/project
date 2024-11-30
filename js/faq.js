document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      })
      })


    function toggleMenu() {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("open");
    }

const btn1 = document.getElementById('btnstart2') ;
const btn2 = document.getElementById('btnstart3') ;
const btn3 = document.getElementById('btnstart1') ;

function gotosignein(){

    window.location.href = "SIGNIN.html";

    
}
