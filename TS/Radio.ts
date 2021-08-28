interface IRadio<T extends HTMLDivElement = HTMLDivElement> {
  readonly toggleClass: string,
  items: NodeListOf<T>,
  inputs: HTMLInputElement[],
  handle(): void,
  findAll(parents: this['items']): this['inputs'],
  click(el: T): void,
  removeCheckeds(): void,
  remove(el: T): void,
  add(el: T): void,
  check(item: T): void,
  checkForUser(): boolean
}

class Radio implements IRadio {
  toggleClass: string = 'Radio__fill--active';
  items: NodeListOf<HTMLDivElement>;
  inputs: HTMLInputElement[];

  constructor(items: NodeListOf<HTMLDivElement>) {
    this.items = items;
    this.inputs = this.findAll(this.items);

    this.handle();
  }

  handle(): void {
    if (this.checkForUser()) {
      for (const item of this.items) {
        this.check(item);
        item.onclick = this.click.bind(this, item);
      }
    }
  }

  findAll(parents: NodeListOf<HTMLDivElement>): HTMLInputElement[] {
    let inputs: HTMLInputElement[] = [];

    for (const item of parents) {
      inputs.push(item.querySelector('[data-id="dz-input"]')!);
    }

    return inputs;
  }

  click(el: HTMLDivElement): void {
    this.removeCheckeds();

    this.add(el.querySelector('[data-id="dz-radioInput"]')!);
    el.querySelector<HTMLInputElement>('[data-id="dz-input"]')!.checked = true;
  }

  removeCheckeds() {
    for (const item of this.items) {
      this.remove(item.querySelector('[data-id="dz-radioInput"]')!);
    }
  }

  check(item: HTMLDivElement): void {
    let status: boolean = item.querySelector<HTMLInputElement>('[data-id="dz-input"]')!.checked;
    let fillInput: HTMLDivElement | null = item.querySelector('[data-id="dz-radioInput"]')!;
    
    if (status)
      this.add(fillInput);
    else
      this.remove(fillInput);
  }

  add(el: HTMLDivElement): void {
    el.classList.add(this.toggleClass);
  }

  remove(el: HTMLDivElement): void {
    el.classList.remove(this.toggleClass);
  }

  checkForUser(): boolean {
    if (!this.items.length) {
      console.warn('All radio button components aren\'t founds');
      return false;
    }

    let inputFlag: boolean = false;  // Flag for not found input element
    let fillInputFlag: boolean = false;  // Flag for not found fill input element
    for (const item of this.items) {
      let name: string = '(undefined name) Radio component';
      if (item.id != '')
        name = `${item.id} Radio component`;

      let input: HTMLInputElement | null = item.querySelector('[data-id="dz-input"]');
      if (!input) {
        console.warn(`Input element in ${name} is not found!`);
        inputFlag = true;
      }

      let fillInput: HTMLDivElement | null = item.querySelector('[data-id="dz-radioInput"]');
      if (!fillInput) {
        console.warn(`Fill input element in ${name} Radio component is not found!`);
        fillInputFlag = true;
      }
    }

    if (inputFlag || fillInputFlag)
      return false;

    console.info('All components are ready!');
    return true;
  }
}