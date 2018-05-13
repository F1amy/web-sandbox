document.getElementById("run-button").onclick = function() {
  document.getElementById("result-block").style.backgroundColor = "white";
  document.getElementById(
    "result-iframe"
  ).srcdoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>result</title><style>${
    document.getElementById("css-code-area").value
  }</style></head><body onload="${
    document.getElementById("js-code-area").value
  }">${document.getElementById("html-code-area").value}</body></html>`;
  // another way -> iframeLink.src = 'data:text/html;charset=utf-8,' + encodeURI(htmlCode);
};

Array.from(document.getElementsByClassName("code-area")).forEach(
  e =>
    (e.onkeydown = function(event) {
      if (event.keyCode !== 9) {
        return;
      }

      event.preventDefault();

      const start = this.selectionStart;

      this.value =
        this.value.substring(0, start) +
        "\t" +
        this.value.substring(this.selectionEnd, this.value.length);
      this.setSelectionRange(start + 1, start + 1);
    })
);
