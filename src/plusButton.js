const {elt} = require("prosemirror/dist/util/dom")
const prefix = "ProseMirror-plus"

class PlusButton{
  

  constructor(pm, options){
    console.log('PlusButton constructor');
    this.isOpen = false;
    
  }

  attach(pm){
    this.pm = pm;
    this.render();
    console.log(pm)

    this.toggler = this.pm.wrapper.appendChild(elt("div", {class: prefix + "-toggler"}))
    this.toggler.addEventListener('click', this.toggle.bind(this));
    this.hide();
  }

  detach(){
    this.toggler.parentNode.removeChild(this.toggler);
  }

  move(coords){
    this.show();
    this.toggler.style.transform='translateY('+coords.top+'px)'
  }

  toggle(){
    console.log('PlusButton >toggle');
  }

  show(){
    if(this.isOpen)
      return;
    console.log('PlusButton >show');
    
    this.isOpen = true;
    this.toggler.style.opacity = '1';
    this.toggler.style.pointerEvents = 'normal';
  }

  hide(){
    if(!this.isOpen)
      return;
    console.log('PlusButton >hide');

    this.isOpen = false;
    this.toggler.style.opacity = '0';
    this.toggler.style.pointerEvents = 'none';
  }

  render(){
    console.log('PlusButton >render');
  }
}

exports.PlusButton = PlusButton;