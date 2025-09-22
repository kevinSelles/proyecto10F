export function getFormData(form) {
  const formData = new FormData();
  formData.append("title", form.querySelector("input[name='title']").value);

  const imgInput = form.querySelector("input[name='img']");
  if (imgInput.files[0]) formData.append("img", imgInput.files[0]);

  formData.append("date", form.querySelector("input[name='date']").value);
  formData.append("adress", form.querySelector("input[name='adress']").value);
  formData.append("description", form.querySelector("textarea[name='description']").value);

  return formData;
}