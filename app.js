const form = document.getElementById("new_document_attachment");
const fileInput = document.getElementById("document_attachment_doc");

fileInput.addEventListener('change', () => {
  form.submit();
});

window.addEventListener('paste', e => {
  document.getElementById('img').src = window.URL.createObjectURL(e.clipboardData.files[0]);
  fileInput.files = e.clipboardData.files;
});

window.addEventListener('load', function () {
  const codeReader = new ZXing.BrowserQRCodeReader()

  document.getElementById('decodeButton').addEventListener('click', () => {
      const img = document.getElementById('img')
      codeReader.decodeFromImage(img).then((result) => {
          document.getElementById('result').textContent = result.text
      }).catch((err) => {
          document.getElementById('result').textContent = err
      })
  })

})