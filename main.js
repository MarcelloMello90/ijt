function toggleMenu(){
  let menuBtn = document.getElementById('menu');
  let menuItem = document.getElementById('menuItem');
  menuBtn.classList.toggle('active')
  menuItem.classList.toggle('active')
}


const navHeader = document.getElementById("nav-header");
const menuHeader = document.getElementById("menu-header");
const imgMain1 = document.getElementById("img01");
const imgMain2 = document.getElementById("img02");
const footerBox01 = document.getElementById("teste");
const footerBox02 = document.getElementById("footer-box02");

// Função para verificar e ajustar a visibilidade com base na largura
function addHide() {
  if (window.innerWidth >= 700) {
    // navHeader.classList.remove("hide");
    // menuHeader.classList.add("hide");

    imgMain1.classList.remove("hide");
    imgMain2.classList.add("hide");

    // footerBox01.classList.remove("hide");
  } else{
    // navHeader.classList.add("hide");
    // menuHeader.classList.remove("hide");

    imgMain1.classList.add("hide");
    imgMain2.classList.remove("hide");

    footerBox02.classList.add("hide");
    // footerBox01.classList.add("hide");
  }

}

// Executa a função inicialmente
addHide();

// Adiciona um ouvinte de redimensionamento da janela
window.addEventListener("resize", addHide);