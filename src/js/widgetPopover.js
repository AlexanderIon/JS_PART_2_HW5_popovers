export default class MyPopover {
  constructor() {
    // this._popover = [];
    this.showPopover = this.showPopover.bind(this);
  }

  static get getHtml() {
    return `
        <div class='myPopover'>
            <div class='titlePopover'>Заголовок</div>
            <div class='msgPopover'>  </div>
       
       </div> 
        `;
  }

  static get popover() {
    return document.querySelector('.myPopover');
  }

  showPopover(element) {
    const { right, top } = element.getBoundingClientRect();
    console.log(this.getHtml);
    if (element.getAttribute('data-popPos') === 'top') {
      element.insertAdjacentHTML('beforebegin', MyPopover.getHtml);
      MyPopover.popover.classList.add('myPopover-top');
      MyPopover.popover.style.left = `${right - element.offsetWidth / 2 - MyPopover.popover.offsetWidth / 2 - 5}px`;
      MyPopover.popover.style.bottom = `${-MyPopover.popover.offsetHeight}px`;
    } else if (element.getAttribute('data-popPos') === 'down') {
      element.insertAdjacentHTML('afterend', MyPopover.getHtml);

      MyPopover.popover.classList.add('myPopover-bottom');
      MyPopover.popover.style.left = `${right - element.offsetWidth / 2 - MyPopover.popover.offsetWidth / 2 - 5}px`;
      MyPopover.popover.style.top = `${-top + element.offsetHeight / 2 + 10}px`;
    }
  }
}
