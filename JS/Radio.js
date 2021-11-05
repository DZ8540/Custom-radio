"use strict";
class Radio {
    constructor(items) {
        this.toggleClass = 'Radio__fill--active';
        this.items = items;
        this.inputs = this.findAll(this.items);
        this.handle();
    }
    handle() {
        try {
            this.checkForUser();
            this.check();
            for (let item of this.inputs) {
                item.onchange = this.check.bind(this);
            }
        }
        catch (err) {
            console.warn(err.message);
        }
    }
    findAll(parents) {
        let inputs = [];
        for (let item of parents) {
            inputs.push(item.querySelector('[data-id="dz-input"]'));
        }
        return inputs;
    }
    check() {
        let checked = this.inputs.find(el => el.checked == true);
        let fillInput = checked.parentElement.querySelector('[data-id="dz-radioInput"]');
        this.removeCheckeds();
        if (checked.disabled != true)
            this.add(fillInput);
    }
    removeCheckeds() {
        for (let item of this.items) {
            this.remove(item.querySelector('[data-id="dz-radioInput"]'));
        }
    }
    add(el) {
        el.classList.add(this.toggleClass);
    }
    remove(el) {
        el.classList.remove(this.toggleClass);
    }
    checkForUser() {
        if (!this.items.length)
            throw new Error('All radio button components aren\'t founds');
        for (let item of this.items) {
            let name = `${item.dataset.name || '(undefined name)'} radio component`;
            let input = item.querySelector('[data-id="dz-input"]');
            if (!input)
                throw new Error(`Input element in ${name} is not found!`);
            let fillInput = item.querySelector('[data-id="dz-radioInput"]');
            if (!fillInput)
                throw new Error(`Fill input element in ${name} is not found!`);
        }
        console.info('All radio components are ready!');
    }
}
