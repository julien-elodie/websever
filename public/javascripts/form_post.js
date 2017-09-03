function post(id) {
  var form = document.createElement('form');
  form.id = 'form';
  form.name = 'form';
  document.body.appendChild(form);
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'id';
  input.value = id;
  form.appendChild(input);
  form.method = 'post';
  form.action = '../videos';
  form.submit();
  document.body.removeChild(form);
}
