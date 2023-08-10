var buyButtons = document.getElementsByClassName('buy-button');

Array.from(buyButtons).forEach(function(button) {
  button.addEventListener('click', function() {
    alert("Bạn đã mua hàng thành công!");
  });
});
