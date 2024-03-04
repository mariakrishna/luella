//função troca de tema
document.addEventListener('DOMContentLoaded', function () {
  const toggleTheme = document.getElementById('toggleTheme');
  const body = document.getElementById('light');
  const mainImage = document.getElementById('mainImage');
  const separador01 = document.getElementById('separador01');
  const iconYT = document.getElementById('iconYT');
  const iconSpot = document.getElementById('iconSpot');
  const iconTT = document.getElementById('iconTT');
  const iconDeezer = document.getElementById('iconDeezer');
  const iconApple = document.getElementById('iconApple');
  const iconInsta = document.getElementById('iconInsta');
  const iconXTT = document.getElementById('iconXTT');
  const separatorWho = document.getElementById('separatorWho');
  const eventsDecorator = document.getElementById('eventsDecorator');

  function setDarkTheme() {
    body.id = 'dark';
    mainImage.src = "../img/photo-main-dark.jpg";
    separador01.src = "../img/separator-dark.png";
    iconYT.src = "../img/yt-icon-contact.svg";
    iconSpot.src = "../img/spotify-icon-contact.svg";
    iconTT.src = "../img/tt-icon-cont.svg";
    iconDeezer.src = "../img/deezer-icon-cont.svg";
    iconApple.src = "../img/apple-icon-cont.svg";
    iconInsta.src = "../img/insta-icon-cont.svg";
    iconXTT.src = "../img/x-twitter-icon-cont.svg";
    separatorWho.src = "../img/separator-who.png";
    eventsDecorator.src = "../img/events-decorador.png";
  }

  function setLightTheme() {
    body.id = 'light';
    mainImage.src = "../img/photo-main-light.jpg";
    separador01.src = "../img/separator-light.png";
    iconYT.src = "../img/yt-icon.svg";
    iconSpot.src = "../img/spotify-icon.svg";
    iconTT.src = "../img/tt-icon.svg";
    iconDeezer.src = "../img/deezer-icon.svg";
    iconApple.src = "../img/apple-icon.svg";
    iconInsta.src = "../img/insta-icon.svg";
    iconXTT.src = "../img/x-twitter-icon.svg";
    separatorWho.src = "../img/separator-who-light.png";
    eventsDecorator.src = "../img/events-decorador-light.png";
  }

  toggleTheme.addEventListener('change', function () {
    if (this.classList.contains('theme-toggle')) {
      if (this.checked) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    }
  });

  // Use matchMedia para verificar as preferências de esquema de cores do sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDark.matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  // Adicione um ouvinte de mídia para alterações no esquema de cores do sistema
  prefersDark.addEventListener('change', (mediaQuery) => {
    if (mediaQuery.matches) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  });
});



//função botão menu
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const headerMenu = document.querySelector('.header-menu');

  burgerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('show');
  });

  document.body.addEventListener('click', function (event) {
    if (!headerMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
      headerMenu.classList.remove('show');
    }
  });
});



//função iframe spotify
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      uri: 'spotify:artist:3dzhc5YlGtNsKshBYYIObx'
    };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};


