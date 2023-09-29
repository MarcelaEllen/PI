document.getElementById("inputTelefone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  
  document.getElementById("inputCPF").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  
  document.getElementById("inputRG").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  
  document.getElementById("inputCEP").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  
  document
    .getElementById("inputNascimento")
    .addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  
  document.getElementById("inputTelefone").addEventListener("input", function () {
    let inputValue = this.value.replace(/\D/g, "");
    if (inputValue.length > 2) {
      inputValue = `(${inputValue.substring(0, 2)}) ${inputValue.substring(2)}`;
    }
    if (inputValue.length > 10) {
      inputValue = `${inputValue.substring(0, 10)}-${inputValue.substring(10)}`;
    }
    this.value = inputValue;
  });
  