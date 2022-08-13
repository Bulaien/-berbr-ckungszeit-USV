let uebZeit = document.getElementById('ueb-zeit').value
let anzahl = document.getElementById('anzahl').value
let capacity = document.getElementById('capacity').value
let volt = document.getElementById('volt').value
let watt = document.getElementById('watt').value
const losungUeber = document.getElementById('loesung-uber')
const losungCapacity = document.getElementById('loesung-capacity')
const losungAnzahl = document.getElementById('loesung-anzahl')
const losungVolt = document.getElementById('loesung-volt')
const losungWatt = document.getElementById('loesung-watt')

function ueZeit (){
    uebZeit = (anzahl * capacity * volt) / watt
    losungUeber.innerText = `Die Überbrückungszeit beträgt ${uebZeit} Stunden.`
    losungUeber.style.display = 'block'
}
function anzahlAkku (){
    anzahl = Math.ceil(uebZeit * watt /(capacity * volt))
    losungAnzahl.innerText = `Du brauchst ${anzahl} Akkupacks.`
    losungAnzahl.style.display = 'block'
}
function capacityAh (){
    capacity = uebZeit * watt /(anzahl * volt)
    losungCapacity.innerText = `Jedes Akkupack braucht ${capacity} Ah.`
    losungCapacity.style.display = 'block'
}
function spannungVolt (){
    volt= uebZeit * watt /(anzahl * capacity)
    losungVolt.innerText = `Die Spannung sollte ${volt} Volt betragen.`
    losungVolt.style.display = 'block'
}
function watts (){
    watt = anzahl * volt * capacity / uebZeit
    losungWatt.innerText = `Die Belastungsleistung beträgt ${watt} Watt.`
    losungWatt.style.display = 'block'
}

if (uebZeit =='' || uebZeit =='0'){
    ueZeit()
}else if (anzahl =='' || anzahl =='0'){
    anzahlAkku()
}else if  (capacity =='' || capacity =='0') {
    capacityAh()
}else if  (volt =='' || volt =='0') {
    spannungVolt()
}else   {
    watts()
}



