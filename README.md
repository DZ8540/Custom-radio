# DZ Custom-radio

To use it, you just need to find all the elements you need, and then pass it to the class.

## Installation
1. Via npm
```cmd
npm i @dz8540/customRadio
```
2. Manually - all you need is in the "Dist" folder.
```html
<link href="/Your-path/customRadio.min.css" rel="stylesheet">
<script src="/Your-path/CustomRadio.min.js"></script>
```

## Example

### HTML
```html
<label class="Radio" data-name="First Radio">
  <input type="radio" class="Radio__input" name="radio" data-id="dz-input" />

  <div class="Radio__radio">
    <div class="Radio__fill" data-id="dz-radioInput"></div>
  </div>

  <span class="Radio__text">Radio button</span>
</label>
```

### JS
```js
let elements = document.querySelectorAll(elements);
new Radio(elements);
```

## Instruction:
1. Text value print in last span in the component.
2. No id attribute required for input.
3. Input maintains checked attribute.
4. Input maintains disabled attribute.
5. Component maintains data-name attribute, for you can set component name.
6. Attention!!! Radio buttons must have the same value in the name attribute in the input tag.
7. Attention!!! Parent for input element must be an element with class "Radio".
8. Component maintains event subscribes with instance's 'on' method.

## Methods
* action - Set checked or disabled action for parent's input element.
  ```js
  new Radio(elmnts).action(elmnts, 'checked');
  ```
* on - event subscribe for input element into component.
  ```js
  new Radio(elmnts).on(elmnts, eventName, your callBack);
  ```

## End
That's all! Enjoy this ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)
