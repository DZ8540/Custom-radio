# DZ Custom-radio

To use it, you just need to find all the elements you need, and then pass it to the class.

## Instruction:
1. Text value print in last span in the component.
2. No id attribute required for input.
3. Input maintains checked attribute.
4. Attention!!! Radio buttons must have the same value in the name attribute in the input tag.
5. If id attribute in the component isn't null, in console you can see what the component has name.

## Example

### HTML
```html
<div class="Radio" id="firstRadio">
  <input type="radio" class="Radio__input" name="radio" data-id="dz-input" />

  <div class="Radio__radio">
    <div class="Radio__fill" data-id="dz-radioInput"></div>
  </div>

  <span class="Radio__text">Radio button</span>
</div>
```

### JS
```js
let elements = document.querySelectorAll(elements);
new Radio(elements);
```

## End
That's all! Enjoy this ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)
