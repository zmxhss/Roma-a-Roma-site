(function () {
  // godziny: pn–czw i nd 12–22, pt–sob 12–23
  var H = { 0: [12, 22], 1: [12, 22], 2: [12, 22], 3: [12, 22], 4: [12, 22], 5: [12, 23], 6: [12, 23] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var open = h >= H[d][0] && h < H[d][1];
  document.querySelectorAll('.status').forEach(function (el) {
    el.querySelector('span').textContent = open ? 'Otwarte do ' + H[d][1] + ':00' : 'Teraz zamknięte';
    if (!open) el.classList.add('closed');
  });
  var row = document.querySelector('.hours [data-d="' + d + '"]');
  if (row) row.classList.add('today');

  // zakładki menu
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.panel').forEach(function (p) { p.classList.remove('on'); });
      t.setAttribute('aria-selected', 'true');
      document.getElementById(t.dataset.tab).classList.add('on');
    });
  });
})();
