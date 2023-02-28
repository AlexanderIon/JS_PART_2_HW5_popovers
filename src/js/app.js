const { default: MyPopover } = require('./widgetPopover.js');

const popForEl = new MyPopover();
document.addEventListener('click', (element) => {
  const el = element.target;
  if (el.getAttribute('data-popover')) {
    if (document.querySelector('.myPopover')) {
      document.querySelector('.myPopover').remove();
    } else {
      popForEl.showPopover(el);
    }
  } else {
    // console.log('Without Popover');
  }
});
