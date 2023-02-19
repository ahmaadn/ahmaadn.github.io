$(document).ready(function () {
  function removeActiveClasses(ulElement) {
    var lis = $(ulElement).find('li');
    lis.removeClass('is-active');
  }

  function getChildPosition(element) {
    var parent = element.parentNode;
    var i = 0;
    for (var i = 0; i < parent.children.length; i++) {
      if (parent.children[i] === element) {
        return i;
      }
    }

    throw new Error('No parent found');
  }

  $('div.tabs ul li a').click(function (event) {
    event.preventDefault();

    var liTab = $(this).parent();
    var ulTab = liTab.parent();
    var position = getChildPosition(liTab[0]);
    if (liTab.hasClass('is-active')) {
      return;
    }

    removeActiveClasses(ulTab);
    var tabContentId = ulTab.attr('data-tab');
    var tabContentElement = $('#' + tabContentId);
    removeActiveClasses(tabContentElement);

    tabContentElement.find('li')[position].classList.add('is-active');
    liTab.addClass('is-active');
  });
});
