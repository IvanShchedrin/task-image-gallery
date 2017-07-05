(function() {
  function createElement(tag, className, style, attrs, text) {
    var elem = document.createElement(tag);
    elem.className = className;

    if (style) {
      Object.keys(style).forEach(function(key) {
        elem.style[key] = style[key];
      });
    }
    if (attrs) {
      Object.keys(attrs).forEach(function(key) {
        elem.setAttribute(key, attrs[key]);
      });
    }
    if (text) {
      elem.appendChild(document.createTextNode(text));
    }

    return elem;
  }

  var content = document.querySelector('.content');

  window.images.forEach(function(image, index) {
    var imageElem = createElement(
      'div',
      'image-item',
      { backgroundImage: 'url(' + image.srcSmall + ')' },
      { 'data-alias': index }
    );
    var titleElem = createElement(
      'span',
      'image-item__title',
      null,
      null,
      image.title
    );
    imageElem.appendChild(titleElem);
    content.appendChild(imageElem);
  });

  var popup = document.querySelector('.popup');

  content.addEventListener('click', function(event) {
    var index = event.target.getAttribute('data-alias');
    popup.classList.add('shown');
    popup.querySelector('.popup__image').style.backgroundImage = 'url(' + window.images[index].src + ')';
  });

  popup.addEventListener('click', function() {
    popup.classList.remove('shown');
  });
})();