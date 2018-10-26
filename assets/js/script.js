document.getElementById("run-button").onclick = function() {
  document.getElementById("result-header-text").style.display = "none";
  const markup = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>result</title><style>body{background-color:#fff;}${
    document.getElementById("css-code-area").value
  }</style><script>window.onload=function(){${
    document.getElementById("js-code-area").value
  }};</script></head><body>${
    document.getElementById("html-code-area").value
  }</body></html>`;
  let iframeLink = document.getElementById("result-iframe");
  iframeLink.src = `data:text/html;charset=utf-8,${encodeURI(markup)}`;
  iframeLink.srcdoc = markup;
  //?
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
