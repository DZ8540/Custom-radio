"use strict";
class Radio {
    constructor(items) {
        this.toggleClass = 'Radio__fill--active';
        this.items = items;
        this.inputs = this.findAll(this.items);
        this.handle();
    }
    handle() {
        if (this.checkForUser()) {
            for (const item of this.items) {
                this.check(item);
                item.onclick = this.click.bind(this, item);
            }
        }
    }
    findAll(parents) {
        let inputs = [];
        for (const item of parents) {
            inputs.push(item.querySelector('[data-id="dz-input"]'));
        }
        return inputs;
    }
    click(el) {
        this.removeCheckeds();
        this.add(el.querySelector('[data-id="dz-radioInput"]'));
        el.querySelector('[data-id="dz-input"]').checked = true;
    }
    removeCheckeds() {
        for (const item of this.items) {
            this.remove(item.querySelector('[data-id="dz-radioInput"]'));
        }
    }
    check(item) {
        let status = item.querySelector('[data-id="dz-input"]').checked;
        let fillInput = item.querySelector('[data-id="dz-radioInput"]');
        if (status)
            this.add(fillInput);
        else
            this.remove(fillInput);
    }
    add(el) {
        el.classList.add(this.toggleClass);
    }
    remove(el) {
        el.classList.remove(this.toggleClass);
    }
    checkForUser() {
        if (!this.items.length) {
            console.warn('All radio button components aren\'t founds');
            return false;
        }
        let inputFlag = false; // Flag for not found input element
        let fillInputFlag = false; // Flag for not found fill input element
        for (const item of this.items) {
            let name = `${item.dataset.name || '(undefined name)'} radio component`;
            let input = item.querySelector('[data-id="dz-input"]');
            if (!input) {
                console.warn(`Input element in ${name} is not found!`);
                inputFlag = true;
            }
            let fillInput = item.querySelector('[data-id="dz-radioInput"]');
            if (!fillInput) {
                console.warn(`Fill input element in ${name} is not found!`);
                fillInputFlag = true;
            }
        }
        if (inputFlag || fillInputFlag)
            return false;
        console.info('All radio components are ready!');
        return true;
    }
}
