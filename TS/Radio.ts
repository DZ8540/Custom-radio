type Actions = 'checked' | 'disabled';

class Radio {
  public readonly toggleClass: string = 'Radio__fill--active';
  public readonly disabledClass: string = 'Radio--disabled';

  protected _items: NodeListOf<HTMLDivElement>;
  protected _inputs: HTMLInputElement[];

  constructor(items: NodeListOf<HTMLDivElement>) {
    this._items = items;
    this._inputs = this._findAll(this._items);

    this._handle();
  }

  /**
   * Set checked or disabled action
   * for parent's input element
   * @param {string} type - must be checked or disabled
   * @param {string} querySelector - find query in document.querySelectorAll function
   * @param {boolean} val
   */
  public action(type: Actions, querySelector: string, val: boolean = true): void {
    document.querySelectorAll(querySelector).forEach(el => {
      el.querySelector<HTMLInputElement>('[data-id="dz-input"]')![type] = val;
    });
    
    this._check();
  }

  /**
   * Event subscribe for input element into component
   * @param querySelector - find query in document.querySelectorAll function
   * @param event - any event name for input element
   * @param callback - your callback
   */
  public on(querySelector: string, event: keyof HTMLElementEventMap, callback: EventListenerOrEventListenerObject): void {
    document.querySelectorAll(querySelector).forEach(el => {
      el.querySelector<HTMLInputElement>('[data-id="dz-input"]')!.addEventListener(event, callback);
    });
  }

  protected _handle(): void {
    try {
      this._checkForUser();
      
      this._check();
      for (let item of this._inputs) {
        item.onchange = this._check.bind(this);
      }
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  protected _findAll(parents: NodeListOf<HTMLDivElement>): HTMLInputElement[] {
    let inputs: HTMLInputElement[] = [];

    for (let item of parents) {
      inputs.push(item.querySelector('[data-id="dz-input"]')!);
    }

    return inputs;
  }

  protected _check(): void {
    this._findAllDisabled();
    this._removeCheckeds();

    let checked: HTMLInputElement | undefined = this._inputs.find(el => el.checked == true);
    if (checked && checked.disabled != true) 
      this._add(checked.parentElement!.querySelector('[data-id="dz-radioInput"]')!);
  }

  protected _removeCheckeds(): void {
    for (let item of this._items) {
      this._remove(item.querySelector('[data-id="dz-radioInput"]')!);
    }
  }

  protected _findAllDisabled(): void {
    for (let item of this._inputs) {
      if (item.disabled == true)
        this._addDisable(item.parentElement as HTMLDivElement);
      else
        this._removeDisable(item.parentElement as HTMLDivElement);
    }
  }

  protected _add(el: HTMLDivElement): void {
    el.classList.add(this.toggleClass);
  }

  protected _remove(el: HTMLDivElement): void {
    el.classList.remove(this.toggleClass);
  }

  protected _addDisable(el: HTMLDivElement): void {
    el.classList.add(this.disabledClass);
  }

  protected _removeDisable(el: HTMLDivElement): void {
    el.classList.remove(this.disabledClass);
  }

  protected _checkForUser(): void {
    if (!this._items.length)
      throw new Error('All radio button components aren\'t founds');

    for (let item of this._items) {
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