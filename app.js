const qrForm = document.querySelector(".qrForm");

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const qrInput = document.querySelector(".qrInput").value;
  const output = document.querySelector(".output");

  output.innerHTML = `<br/><img src="https://api.qrserver.com/v1/create-qr-code/?size=200x2000&data=${qrInput}" />`;
});
