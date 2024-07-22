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

class mouseOver {
  constructor({ content, nav }) {
    this.content = document.querySelector(content);
    this.nav = document.querySelector(nav);
    this.content.addEventListener("mouseover", () => {
      this.content.style.marginTop = `${this.moveRandomly(
        this.content.clientHeight, window.innerHeight - this.content.clientHeight - this.nav.clientHeight
      )}px`;
      this.content.style.marginLeft = `${this.moveRandomly(
        this.content.clientWidth, window.innerWidth - this.content.clientWidth
      )}px`;
    });
  }
  moveRandomly(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

new mouseOver({
  content: ".header__content",
  nav: ".header__nav",
});
