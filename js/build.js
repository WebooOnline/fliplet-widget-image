$('[data-image-id]').click(function (event) {
  event.preventDefault();

  var data = Fliplet.Widget.getData($(this).data('image-id'));
  if (data.link === 'true') {
    Fliplet.Navigate.to(data.action);
  }
});
