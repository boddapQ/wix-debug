class CustomIframe extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const iframe = document.createElement("iframe");
    iframe.src = "https://app.chaindesk.ai/@zielgruppen";

    console.log(
      "iframe attributes ==============================>",
      this.getAttribute("width"),
      this.getAttribute("height"),
      this.getAttribute("src")
    );

    iframe.width = this.getAttribute("width") || "900px";
    iframe.height = this.getAttribute("height") || "900px";
    iframe.setAttribute("frameborder", "0");
    const style = document.createElement("style");
    // style.textContent = `iframe { display: block; width: 100%; height: 100%; }`;
    // shadow.appendChild(style);
    shadow.appendChild(iframe);
  }
}
customElements.define("custom-iframe", CustomIframe);
