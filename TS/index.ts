let radio: NodeListOf<HTMLInputElement> = document.querySelectorAll('.Radio');
if (radio)
  new Radio(radio);
else 
  console.warn('Radio components not found!');