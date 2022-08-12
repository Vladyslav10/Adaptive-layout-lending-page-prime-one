/////////////////////MODAL WINDOW/////////////////////////////////
(function () {
    const body = document.querySelector("body");
    const popupLinks = document.querySelectorAll(".popup-link");
    const popupCloseIcon = document.querySelectorAll(".close-popup");
    const lockPadding = document.querySelectorAll(".lock-padding");
  
    let unlock = true;
  
    const timeout = 800;
  
    if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
          e.preventDefault();
          const popupName = popupLink.getAttribute("href").replace("#", "");
          const currentPopup = document.getElementById(popupName);
          popupOpen(currentPopup);
        });
      }
    }
  
    if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
          popupClose(el.closest(".popup"));
          e.preventDefault();
        });
      }
    }
  
    //setTimeout(popupOpen(firstPopup), firstTimeout);
  
    function popupOpen(currentPopup) {
      if (currentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");
        if (popupActive) {
          bodyLock();
          popupClose(popupActive, false);
        } else {
          bodyLock();
        }
  
        currentPopup.classList.add("open");
        currentPopup.addEventListener("click", function (e) {
          if (!e.target.closest(".popup__content")) {
            popupClose(e.target.closest(".popup"));
          }
        });
      }
    }
  
    function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
        popupActive.classList.remove("open");
        if (doUnlock) {
          bodyUnLock();
        }
      }
    }
  
    function bodyLock() {
      const findPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = findPaddingValue;
        }
      }
  
      body.style.paddingRight = findPaddingValue;
      body.classList.add("lock");
  
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }
  
    function bodyUnLock() {
      setTimeout(function () {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
          }
        }
  
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
      }, timeout);
  
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }
  })();
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////