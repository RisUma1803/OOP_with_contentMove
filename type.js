const title = document.querySelector(".header__content h1"),
  text = title.innerHTML;

class Type {
  constructor({ el, interval, delay }) {
    this.el = document.querySelector(el);
    this.interval = interval || 500;
    this.delay = delay ?? 500;
    this.text = this.el.innerHTML.trim();
    this.el.innerHTML = "";
    setTimeout(() => {
      this.write();
    }, this.delay);
  }
  write(i = 0) {
    this.el.innerHTML += this.text[i];
    i++;
    if (i < this.text.length) {
      setTimeout(() => {
        this.write(i);
      }, this.interval);
    }
  }
}

new Type({
  el: ".header__content h1",
  interval: 300,
  delay: 1000,
});
new Type({
  el: ".info__scroll-desc",
  interval: 100,
  delay: 500,
});

// mouseover

const content = document.querySelector(".header__content");
const nav = document.querySelector(".header__nav");

content.addEventListener('mouseover', () => {
    content.style.marginTop = `${moveRandomly(content.clientHeight, window.innerHeight - content.clientHeight - nav.clientHeight)}px`;
    content.style.marginLeft = `${moveRandomly(content.clientWidth, window.innerWidth - content.clientWidth)}px`;
});

function moveRandomly(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

