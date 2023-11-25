window.addEventListener("DOMContentLoaded", function(e) {
  for(l of document.getElementsByClassName("colimg-anim")) {
    var arr = l.getElementsByTagName("img");
    for(var i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", e => {l.appendChild(arr[0])}, false);
    }
  }
}, false);

$('#header').prepend(`
      <div class="row">
        <div class="col-5 text-start">
          <a href="mailto:info@strom-bau.de" class="hiddenlink">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            info@strom-bau.de
          </a>
        </div>
        <div class="col-2">
          <!-- lang sel here -->
        </div>
        <div class="col-5 text-end">
          <a href="tel:+491605647272" class="hiddenlink">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            +49 160 564 7272
          </a>
        </div>
        <hr class="headersep">
        <a class="navbar-brand" href="#" style="width:100%; display:flex; align-items:center; justify-content:center;">
          <img src="/img/logo.png" class="brand-img">
        </a>
        <nav class="navbar navbar-expand-sm">
          <!--<a class="navbar-brand" href="#" style="max-width: 40%">
            <img src="/img/logo.png" class="navbar-brand-img" style="width: 100%">
          </a>-->
          <div class="flex-grow-1 dissapear-on-computer">
            <!--spacer-->
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar"
            aria-controls="collapsingNavbar" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="flex-grow-1">
            <!--spacer-->
          </div>
          <!--<div class="navbar-collapse no-transition collapse flex-grow-1 justify-content-center" id="collapsingNavbar">
            <ul class="navbar-nav mx-auto" id="navbarborder">
              <li class="nav-item">
                <a class="nav-link" href="/index.html">STARTSEITE</a>
              </li>
              <div class="vr navsep"></div>
              <li class="nav-item">
                <a class="nav-link" href="/leistung.html">LEISTUNG</a>
              </li>
              <div class="vr navsep"></div>
              <li class="nav-item">
                <a class="nav-link" href="/kontakt.html">KONTAKT</a>
              </li>
            </ul>
          </div>-->
          <div class="flex-grow-1 dissapear-on-mobile">
            <!--spacer-->
          </div>
        </nav>
      </div>
`);
$('#maincont').append(`
    <div id="footer">
      <div class="customrowfoot">
        <div class="col">
          <img src="/img/logo-dark.png" style="width: min(100%, 50vw)">
          Copyright © Waldemar Strom 2023. All Rights Reserved
        </div>
        <div class="col-1"></div>
        <div class="col">
          <h3 style="margin-top: 10px;">КОНТАКТЬІ</h3>
          <div>
            <a href="tel:+491605647272" style="text-decoration:none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              &nbsp;+49 160 564 7272
            </a>
            <br>
            <a href="mailto:info@strom-bau.de" style="text-decoration:none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              &nbsp;info@strom-bau.de
            </a>
            <br>
            <a href="https://goo.gl/maps/SV7whGpWAHhJvwFZ6" style="text-decoration:none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              &nbsp;Hauptstraße 4, 56283 Halsenbach, Deutschland
            </a>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col">
          <h3 style="margin-top: 10px;">QUICK LINKS</h3>
          <a href="/datenschutz-impressum.html">Datenschutz / Impressum</a>
        </div>
      </div>
    </div>
`);
