interface IRadio<T extends HTMLDivElement = HTMLDivElement> {
  readonly toggleClass: string,
  items: NodeListOf<T>,
  inputs: HTMLInputElement[],
  handle(): void,
  findAll(parents: this['items']): this['inputs'],
  removeCheckeds(): void,
  remove(el: T): void,
  add(el: T): void,
  check(): void,
  checkForUser(): void,
}

class Radio implements IRadio {
  readonly toggleClass: string = 'Radio__fill--active';
  items: NodeListOf<HTMLDivElement>;
  inputs: HTMLInputElement[];

  constructor(items: NodeListOf<HTMLDivElement>) {
    this.items = items;
    this.inputs = this.findAll(this.items);

    this.handle();
  }

  handle(): void {
    try {
      this.checkForUser();
      
      this.check();
      for (let item of this.inputs) {
        item.onchange = this.check.bind(this);
      }
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  findAll(parents: NodeListOf<HTMLDivElement>): HTMLInputElement[] {
    let inputs: HTMLInputElement[] = [];

    for (let item of parents) {
      inputs.push(item.querySelector('[data-id="dz-input"]')!);
    }

    return inputs;
  }

  check(): void {
    let checked: HTMLInputElement = this.inputs.find(el => el.checked == true)!;
    let fillInput: HTMLDivElement = checked.parentElement!.querySelector('[data-id="dz-radioInput"]')!;
    
    this.removeCheckeds();
    if (checked.disabled != true) 
      this.add(fillInput);
  }

  removeCheckeds() {
    for (let item of this.items) {
      this.remove(item.querySelector('[data-id="dz-radioInput"]')!);
    }
  }

  add(el: HTMLDivElement): void {
    el.classList.add(this.toggleClass);
  }

  remove(el: HTMLDivElement): void {
    el.classList.remove(this.toggleClass);
  }

  checkForUser(): void {
    if (!this.items.length)
      throw new Error('All radio button components aren\'t founds');

    for (let item of this.items) {
      let name: string = `${item.dataset.name || '(undefined name)'} radio component`;

      let input: HTMLInputElement | null = item.querySelector('[data-id="dz-input"]');
      if (!input)
        throw new Error(`Input element in ${name} is not found!`);

      let fillInput: HTMLDivElement | null = item.querySelector('[data-id="dz-radioInput"]');
      if (!fillInput)
        throw new Error(`Fill input element in ${name} is not found!`);
    }

    console.info('All radio components are ready!');
  }
}