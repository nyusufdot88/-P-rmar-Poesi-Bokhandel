function toggleMenu() {
    const section_menu = document.querySelector('.menu-container');
    const menuButton = document.querySelector('.menu-button');
    const overlay = document.querySelector('.overlay');

    section_menu.classList.toggle('hidden-menu');
    menuButton.classList.toggle('open'); // Lägg till eller ta bort CSS-klassen 'open' 
    overlay.classList.toggle('visible');

    // Lägg till eventlyssnare för klick utanför menyn
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = section_menu.contains(event.target);
      const isClickOnMenuButton = menuButton.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuButton) {
          section_menu.classList.add('hidden-menu');
          menuButton.classList.remove('open');
          overlay.classList.add('visible');
      }
  });

  window.addEventListener('scroll', function () {
    if (section_menu.classList.contains('hidden-menu')) {
        return; // Om menyn är dold behöver vi inte göra något vid scrollning
    }

    section_menu.classList.add('hidden-menu');
    menuButton.classList.remove('open');
    overlay.classList.add('visible');
});
}


function toggleSubMenu(link) {
    const submenuId = link.getAttribute('data-submenu');
    const subMenu = document.getElementById(submenuId);

    if (subMenu) {
        const otherSubmenus = document.querySelectorAll('.sub-navigation:not(#' + submenuId + ')');
        otherSubmenus.forEach(function (submenu) {
        submenu.classList.add('hidden-sub');
        });

        subMenu.classList.toggle('hidden-sub');
    }
}

function smoothScroll(element, targetX, duration) {
    const startX = element.scrollLeft;
    const startTime = performance.now();
  
    function easeInOutCubic(t) {
      // Använd en anpassad animeringsfunktion som efterliknar "ease-in-out".
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    function step(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      element.scrollLeft = startX + (targetX - startX) * easedProgress;
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  function rightScroll() {
    const container = document.querySelector(".book-inner-container");
    const targetX = container.scrollLeft + 400;
    smoothScroll(container, targetX, 300); // Justera duration efter behov
  }
  
  function leftScroll() {
    const container = document.querySelector(".book-inner-container");
    const targetX = container.scrollLeft - 400;
    smoothScroll(container, targetX, 300); // Justera duration efter behov
  }
  
  function toggleSearchBar() {
    const searchButton = document.querySelector('.search-input');
    const searchButtonBackground = document.querySelector('.search-container');

    searchButton.classList.toggle('hidden-search-input');
    searchButtonBackground.classList.toggle('transparant-search-container');
  }

function toggleHeart() {
  const heartButton = document.getElementById('like-heart');
  heartButton.classList.toggle('hidden');
}

function toggleHeart2() {
  const heartButton = document.getElementById('like-heart-2');
  heartButton.classList.toggle('hidden');
}

function toggleHeart3() {
  const heartButton = document.getElementById('like-heart-3');
  heartButton.classList.toggle('hidden');
}

function toggleHeart4() {
  const heartButton = document.getElementById('like-heart-4');
  heartButton.classList.toggle('hidden');
}
// SMOOTHER WORKING-------------------------------
// function smoothScroll(element, targetX, duration) {
//     const startX = element.scrollLeft;
//     const startTime = performance.now();
  
//     function step(time) {
//       const elapsed = time - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       element.scrollLeft = startX + (targetX - startX) * progress;
  
//       if (progress < 1) {
//         requestAnimationFrame(step);
//       }
//     }
  
//     requestAnimationFrame(step);
//   }
  
//   function rightScroll() {
//     const container = document.querySelector(".book-inner-container");
//     const targetX = container.scrollLeft + 200;
//     smoothScroll(container, targetX, 300); // Justera duration efter behov
//   }
  
//   function leftScroll() {
//     const container = document.querySelector(".book-inner-container");
//     const targetX = container.scrollLeft - 200;
//     smoothScroll(container, targetX, 300); // Justera duration efter behov
//   }



// ----WORKING--------------------
// function rightScroll() {
//     const left = document.querySelector(".book-inner-container");
//     left.scrollBy(200, 0);
// }
// function leftScroll() {
//     const right = document.querySelector(".book-inner-container");
//     right.scrollBy(-200, 0);
// }





// const scrollLeftButton = document.getElementById('scroll-left');
// const scrollRightButton = document.getElementById('scroll-right');
// const bookInnerContainer = document.querySelector('.book-inner-container');

// scrollLeftButton.addEventListener('click', () => {
//   bookInnerContainer.scrollLeft -= 100; // Ändra detta värde för att justera scrollavståndet.
// });

// scrollRightButton.addEventListener('click', () => {
//   bookInnerContainer.scrollLeft += 100; // Ändra detta värde för att justera scrollavståndet.
// });

// -------------Flyttar hela bilden---
// const scrollLeftButton = document.getElementById('scroll-left');
// const scrollRightButton = document.getElementById('scroll-right');
// const bookInnerContainer = document.querySelector('.book-inner-container');
// let scrollPosition = 0; // Håll reda på den aktuella scrollpositionen

// scrollLeftButton.addEventListener('click', () => {
//   scrollPosition -= 400; // Ändra detta värde för att justera scrollavståndet.
//   updateScrollPosition();
// });

// scrollRightButton.addEventListener('click', () => {
//   scrollPosition += 400; // Ändra detta värde för att justera scrollavståndet.
//   updateScrollPosition();
// });

// function updateScrollPosition() {
//   bookInnerContainer.style.transform = `translateX(-${scrollPosition}px)`;
// }