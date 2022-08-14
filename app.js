document.addEventListener("DOMContentLoaded", function () {
  let uebZeit = 0;
  let anzahl = 0;
  let capacity = 0;
  let volt = 0;
  let watt = 0;

  let btn = document.getElementById("btn");
  let resette = document.getElementById('reset')
  const losungUeber = document.getElementById("loesung-uber");
  const losungCapacity = document.getElementById("loesung-capacity");
  const losungAnzahl = document.getElementById("loesung-anzahl");
  const losungVolt = document.getElementById("loesung-volt");
  const losungWatt = document.getElementById("loesung-watt");
  btn.addEventListener("click", berechne);
  resette.addEventListener('click', resetten)
  function ueZeit() {
    uebZeit = (anzahl * capacity * volt) / watt;
    losungUeber.innerText = `Die Überbrückungszeit beträgt ${uebZeit} Stunden.`;
    losungUeber.style.display = "block";
  }
  function anzahlAkku() {
    anzahl = Math.ceil((uebZeit * watt) / (capacity * volt));
    losungAnzahl.innerText = `Du brauchst ${anzahl} Akkupacks.`;
    losungAnzahl.style.display = "block";
  }
  function capacityAh() {
    capacity = (uebZeit * watt) / (anzahl * volt);
    losungCapacity.innerText = `Jedes Akkupack braucht ${capacity} Ah.`;
    losungCapacity.style.display = "block";
  }
  function spannungVolt() {
    volt = (uebZeit * watt) / (anzahl * capacity);
    losungVolt.innerText = `Die Spannung sollte ${volt} Volt betragen.`;
    losungVolt.style.display = "block";
  }
  function watts() {
    watt = (anzahl * volt * capacity) / uebZeit;
    losungWatt.innerText = `Die Belastungsleistung beträgt ${watt} Watt.`;
    losungWatt.style.display = "block";
  }

  function berechne() {
    uebZeit = document.getElementById("ueb-zeit").value;
    anzahl = document.getElementById("anzahl").value;
    capacity = document.getElementById("capacity").value;
    volt = document.getElementById("volt").value;
    watt = document.getElementById("watt").value;
    if (uebZeit == "" || uebZeit == "0") {
      ueZeit();

      
      btn.style.display = "none";
    } else if (anzahl == "" || anzahl == "0") {
      anzahlAkku();
      
      btn.style.display = "none";
    } else if (capacity == "" || capacity == "0") {
      capacityAh();
     
      btn.style.display = "none";
    } else if (volt == "" || volt == "0") {
      spannungVolt();
      
      btn.style.display = "none";
    } else {
      watts();
      
      btn.style.display = "none";
    }
  }

  function resetten() {
    document.getElementById("ueb-zeit").value = "";
      document.getElementById("anzahl").value = "";
      document.getElementById("capacity").value = "";
      document.getElementById("volt").value = "";
      document.getElementById("watt").value = "";
      btn.style.display = 'block'
      losungUeber.style.display = 'none'
  losungCapacity.style.display = 'none'
  losungAnzahl.style.display = 'none'
  losungVolt.style.display = 'none'
  losungWatt.style.display = 'none'
  }
});
