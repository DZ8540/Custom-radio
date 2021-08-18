class Radio {
  toggleClass = 'Radio__fill--active';

  constructor(items) {
    this.items = items;
    this.inputs = this.findAll(this.items);

    console.log(this.items, this.inputs);
    this.handle();
  }

  handle() {
    for (const item of this.items) {
      this.check(item);
      item.onclick = this.click.bind(this, item);
    }
  }

  findAll(parents) {
    let inputs = [];

    for (const item of parents) {
      inputs.push(item.querySelector('input'));
    }

    return inputs;
  }

  click(el) {
    this.removeCheckeds();

    this.add(el.querySelector('[data-id="radioInput"]'));
    el.querySelector('input').checked = true;
  }

  removeCheckeds() {
    for (const item of this.items) {
      this.remove(item.querySelector('[data-id="radioInput"]'));
    }
  }

  check(item) {
    let status = item.querySelector('input').checked;
    let radioInput = item.querySelector('[data-id="radioInput"]');

    if (status)
      this.add(radioInput);
    else
      this.remove(radioInput);
  }

  add(el) {
    el.classList.add(this.toggleClass);
  }

  remove(el) {
    el.classList.remove(this.toggleClass);
  }
}