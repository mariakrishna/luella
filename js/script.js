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

