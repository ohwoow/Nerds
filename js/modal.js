
const modal = document.querySelector(".modal"),
      contactsBtn = document.querySelector(".contacts__btn"),
      modalClose = document.querySelector(".modal__close");


    function showElem(elem) {
        elem.style.display = 'block';
    }
    function hideElem(elem) {
        elem.style.display = 'none';
    }

      contactsBtn.addEventListener("click", function(evt) {
            showElem(modal);
      });

      modalClose.addEventListener("click", function() {
            hideElem(modal);
      });

    