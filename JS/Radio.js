"use strict";
class Radio {
    constructor(items) {
        this.toggleClass = 'Radio__fill--active';
        this.disabledClass = 'Radio--disabled';
        this._items = items;
        this._inputs = this._findAll(this._items);
        this._handle();
    }
    action(type, querySelector, val = true) {
        document.querySelectorAll(querySelector).forEach(el => {
            el.querySelector('[data-id="dz-input"]')[type] = val;
        });
        this._check();
    }
    _handle() {
        try {
            this._checkForUser();
            this._check();
            for (let item of this._inputs) {
                item.onchange = this._check.bind(this);
            }
        }
        catch (err) {
            console.warn(err.message);
        }
    }
    _findAll(parents) {
        let inputs = [];
        for (let item of parents) {
            inputs.push(item.querySelector('[data-id="dz-input"]'));
        }
        return inputs;
    }
    _check() {
        this._findAllDisabled();
        this._removeCheckeds();
        let checked = this._inputs.find(el => el.checked == true);
        if (checked && checked.disabled != true)
            this._add(checked.parentElement.querySelector('[data-id="dz-radioInput"]'));
    }
    _removeCheckeds() {
        for (let item of this._items) {
            this._remove(item.querySelector('[data-id="dz-radioInput"]'));
        }
    }
    _findAllDisabled() {
        for (let item of this._inputs) {
            if (item.disabled == true)
                this._addDisable(item.parentElement);
            else
                this._removeDisable(item.parentElement);
        }
    }
    _add(el) {
        el.classList.add(this.toggleClass);
    }
    _remove(el) {
        el.classList.remove(this.toggleClass);
    }
    _addDisable(el) {
        el.classList.add(this.disabledClass);
    }
    _removeDisable(el) {
        el.classList.remove(this.disabledClass);
    }
    _checkForUser() {
        if (!this._items.length)
            throw new Error('All radio button components aren\'t founds');
        for (let item of this._items) {
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
