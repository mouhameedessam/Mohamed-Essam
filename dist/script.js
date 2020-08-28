window.addEventListener('load', function () {
  document.querySelector('.preloader').classList.add('opacity-0');

  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000);
})




const portfolioFilter = document.querySelector('.portfolio-filter'),
  filterBtn = portfolioFilter.children;
totalFilterBtn = filterBtn.length,
  portfolioItems = document.querySelectorAll('.portfolio-item'),
  totalPortfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtn[i].addEventListener('click', function () {
    portfolioFilter.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');
    for (let k = 0; k < totalPortfolioItems; k++) {
      if (filterValue === portfolioItems[k].getAttribute('data-category')) {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      } else {
        portfolioItems[k].classList.remove('show');
        portfolioItems[k].classList.add('hide');
      }
      if (filterValue === 'all') {
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }
    }
  })

}



// Style Switcher

const links = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  for (let i = 0; i < links.length; i++) {
    if (color === links[i].getAttribute('title')) {
      links[i].removeAttribute('disabled');
    } else {
      links[i].setAttribute('disabled', 'true');
    }
  }
}


// switch body skin
const bodySkin = document.querySelectorAll('.body-skin');

for (let i = 0; i < bodySkin.length; i++) {
  bodySkin[i].addEventListener('change', function () {
    if (this.value === 'dark') {
      // document.body.classList.add('dark');
      document.body.className = 'dark';
    } else {
      // document.body.classList.remove('dark');
      document.body.className = '';
    }
  })
}
document.querySelector('.toggle-style-switcher').addEventListener('click', function () {
  document.querySelector('.style-switcher').classList.toggle('open');
})


// Active links

const navbar = document.querySelector('.nav'),
  list = navbar.querySelectorAll('li'),
  allSection = document.querySelectorAll('.section');

for (let i = 0; i < list.length; i++) {
  // const a = list[i].querySelector('a');
  list[i].querySelector('a').addEventListener('click', function () {
    // Remove Back section
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove('back-section');
    }

    for (let j = 0; j < list.length; j++) {
      if (list[j].querySelector('a').classList.contains('active')) {
        //add back section
        allSection[j].classList.add('back-section');
      }
      list[j].querySelector('a').classList.remove('active');
    }

    this.classList.add('active');
    showSection(this);

    if (window.innerWidth < 1200) {
      showToggle();
    }
  })
}

function showSection(element) {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#'+target).classList.add('active');
}

// Aside show
const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
  showToggle()
})


function showToggle() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.toggle('open');
  }
}