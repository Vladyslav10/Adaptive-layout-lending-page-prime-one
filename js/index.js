///////////////////Header///////////////////////////////////////////////////////////////
(function () {
  window.addEventListener("resize", adaptive_function);

  function adaptive_header(w, h) {
    const headerTop = document.querySelector(".header__top");
    const headerMenu = document.querySelector(".header__menu-new");
    const headerLang = document.querySelector(".header__languages");
    const headerBottomMenuLeft = document.querySelector(".header__menu-left");
    const headerBottomMenuRight = document.querySelector(".header__menu-right");
    if (w < 767) {
      if (!headerLang.classList.contains("done")) {
        headerLang.classList.add("done");
        headerMenu.append(headerLang);
      }
    } else {
      if (headerLang.classList.contains("done")) {
        headerLang.classList.remove("done");
        headerTop.prepend(headerLang);
      }
    }

    if (w < 767) {
      if (!headerBottomMenuLeft.classList.contains("done")) {
        headerBottomMenuLeft.classList.add("done");
        headerMenu.append(headerBottomMenuLeft);
      }
    } else {
      if (headerBottomMenuLeft.classList.contains("done")) {
        headerBottomMenuLeft.classList.remove("done");
        document
          .querySelector(".header__column-first")
          .prepend(headerBottomMenuLeft);
      }
    }

    if (w < 767) {
      if (!headerBottomMenuRight.classList.contains("done")) {
        headerBottomMenuRight.classList.add("done");
        headerMenu.append(headerBottomMenuRight);
      }
    } else {
      if (headerBottomMenuRight.classList.contains("done")) {
        headerBottomMenuRight.classList.remove("done");
        document
          .querySelector(".header__column-third")
          .prepend(headerBottomMenuRight);
      }
    }
  }

  function adaptive_function() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientWidth;
    adaptive_header(w, h);
  }

  adaptive_function();
})();

//////////////////////BURGER////////////////////////////////////////////////////////////

(function () {
  const burger = document.querySelector(".header__menu-icon");
  const body = document.querySelector("body");
  document.addEventListener("click", menu);

  function menu(event) {
    if (event.target.closest(".header__menu-icon")) {
      burger.classList.toggle("active");
      body.classList.toggle("lock");
    }
    if (!event.target.closest(".header__menu-icon")) {
      burger.classList.remove("active");
      body.classList.remove("lock");
    }
  }
})();

/////////////////////Form//////////////////////////////////////////////////////////////

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      if (error === 0) {
        alert("your message sent");
        form.reset();
      } else {
        alert("Error");
      }
    }
  });

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("input-email")) {
        if (emailTest(input)) {
          formAddError(input);
          input.previousElementSibling.innerText = "write correct email";
          error++;
        } else {
          input.previousElementSibling.innerText = "";
        }
      } else if (input.classList.contains("input-name")) {
        if (nameTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains("input-textarea")) {
        if (textareaTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
  }

  function nameTest(input) {
    if (input.value.length < 3 || input.value.length > 15) {
      input.previousElementSibling.innerText =
        "name must be bigger than 2 symbols and less than 16";
      return true;
    } else {
      input.previousElementSibling.innerText = "";
      return false;
    }
  }

  function textareaTest(input) {
    if (input.value.length < 8 || input.value.length > 30) {
      input.previousElementSibling.innerText =
        "message must be bigger than 8 symbols and less than 30";
      return true;
    } else {
      input.previousElementSibling.innerText = "";
      return false;
    }
  }
})();

/////////////////////Lang//////////////////////////////////////////////////////////////

(function () {
  const languages = document.querySelectorAll(".header__language");

  for (let index = 0; index < languages.length; index++) {
    const lang = languages[index];
    lang.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(".header__language.active")
        .classList.remove("active");
      lang.classList.add("active");
    });
  }
})();
