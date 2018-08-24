$(function () {
  var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener(
      "click",
      function (e) {
        //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset, // производим прокрутка прокрутка
          hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
        (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
          (start = null);
        requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
          if (start === null) start = time;
          var progress = time - start,
            r =
              t < 0
                ? Math.max(w - progress / V, w + t)
                : Math.min(w + progress / V, w + t);
          window.scrollTo(0, r);
          if (r != w + t) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash; // URL с хэшем
          }
        }
      },
      false
    );
  }

  var burgerMenu = document.querySelector(".burger-menu");
  var mobileMenu = document.querySelector(".header__menu-mobile");

  var isMenuShow = false;
  burgerMenu.addEventListener("click", function () {
    if (isMenuShow) {
      burgerMenu.classList.remove("menu-on");
      mobileMenu.classList.remove("header__menu-mobile--open");
      mobileMenu.classList.add("header__menu-mobile--close");
      isMenuShow = false;
    } else {
      burgerMenu.classList.add("menu-on");
      mobileMenu.classList.add("header__menu-mobile--open");
      mobileMenu.classList.remove("header__menu-mobile--close");
      isMenuShow = true;
    }
  });

  // Init magnific popup
  $(".js-show-pop-up").magnificPopup({
    type: "inline"
  });

  var nameInput = document.querySelector(".js-name");
  nameInput.addEventListener("input", function (event) {
    validateName(nameInput.value);
  });
  function validateName(name) {
    if(name.length < 3 || name.length > 40) {
      nameInput.classList.add("invalid-input");
      return false;
    } else {
      nameInput.classList.remove("invalid-input");
      return true;
    }
  };

  var emailInput = document.querySelector(".js-email");
  emailInput.addEventListener("input", function (event) {
    validateEmail(emailInput.value);
  });
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())) {
      emailInput.classList.remove("invalid-input");
      return true;
    } else {
      emailInput.classList.add("invalid-input");
      return false;
    }
  };

  var wayInput = document.querySelector(".js-way");
  wayInput.addEventListener("input", function (event) {
    validateWay(wayInput.value);
  });
  function validateWay(way) {
    if(way.length < 3 || way.length > 100) {
      wayInput.classList.add("invalid-input");
      return false;
    } else {
      wayInput.classList.remove("invalid-input");
      return true;
    }
  }

  var messageInput = document.querySelector(".js-message");



  document.querySelector(".contacts__submit-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var spinner = document.querySelector(".lds-ring");
    var submiteBtn = document.querySelector(".contacts__submit-btn");
    var isValidName = validateName(nameInput.value);
    var isValidEmail = validateEmail(emailInput.value);
    var isValidWay = validateWay(wayInput.value);
    if(isValidName && isValidEmail && isValidWay) {
      var message =
        "Имя: " + nameInput.value + "\r\n" +
        "Email: " + emailInput.value + "\r\n" +
        "Способ связи: " + wayInput.value + "\r\n" +
        "Текст сообщения: " + messageInput.value;
      var requestUrl = "https://api.telegram.org/bot637374283:AAEf1Qer2-ukcYB65fAfgM-ti7XvnfSnrCI/sendMessage?chat_id=-287255782&parse_mode=html&text=" + encodeURI(message);
      var xhr = new XMLHttpRequest();
      xhr.open("GET", requestUrl, true);
      xhr.addEventListener("load", function () {
        var successToast = document.querySelector(".message--success");
        successToast.classList.add("message--show");
        spinner.classList.add("hidden");
        submiteBtn.classList.remove("hidden");
        setTimeout(function() {
          successToast.classList.remove("message--show");
        }, 3000);
      });

      submiteBtn.classList.add("hidden");
      spinner.classList.remove("hidden");
      xhr.send(null);
    } else {
      var errorToast = document.querySelector(".message--error");
        errorToast.classList.add("message--show");
        setTimeout(function() {
          errorToast.classList.remove("message--show");
        }, 3000);
    }
  });

  var amateurPopupList = document.querySelector(".amateur .popup__list");
  var amateurItemToRender = ProductsList.amateur.map(function(item) {
    var li = document.createElement("li");
    li.classList.add("popup__list-item");
    li.innerText = item;
    return li;
  });

  amateurItemToRender.forEach(function(item) {
    amateurPopupList.appendChild(item);
  });

  var businessmanPopupList = document.querySelector(".businessman .popup__list");
  var businessmanItemToRender = ProductsList.businessman.map(function(item) {
    var li = document.createElement("li");
    li.classList.add("popup__list-item");
    li.innerText = item;
    return li;
  });

  businessmanItemToRender.forEach(function(item) {
    businessmanPopupList.appendChild(item);
  });

  var professionalPopupList = document.querySelector(".professional .popup__list");
  var professionalItemToRender = ProductsList.professional.map(function(item) {
    var li = document.createElement("li");
    li.classList.add("popup__list-item");
    li.innerText = item;
    return li;
  });

  professionalItemToRender.forEach(function(item) {
    professionalPopupList.appendChild(item);
  });

  var landingPopupList = document.querySelector(".landing .popup__list");
  var landingItemToRender = ProductsList.landing.map(function(item) {
    var li = document.createElement("li");
    li.classList.add("popup__list-item");
    li.innerText = item;
    return li;
  });

  landingItemToRender.forEach(function(item) {
    landingPopupList.appendChild(item);
  });

  var today = new Date();
  var year = today.getFullYear();
  document.querySelector(".footer__copyright-year").innerHTML = year;
});
