if(localStorage.getItem('scheme') !== null) {
    let value = localStorage.getItem('scheme')
    document.body.classList.replace(document.body.classList[1], `scheme-theme-${value}`)
}

if(document.querySelector('#schemeThemes') == null) {
    var select = document.createElement('select');
    select.setAttribute('id', 'schemeThemes')
    select.style.padding = '10px';
    select.innerHTML = `
        <option value="Burgundy">Burgundy</option>
        <option value="ReskinBlue">ReskinBlue</option>
        <option value="Fallout">Fallout</option>
        <option value="Purple">Purple</option>
        <option value="LighterBlue">LighterBlue</option>
        <option value="BatmanBlue">BatmanBlue</option>
        <option value="Teal">Teal</option>
        <option value="Sepia">Sepia</option>
        <option value="Gold">Gold</option>
        <option value="PaleBrown">PaleBrown</option>
        <option value="DeepOrange">DeepOrange</option>
        <option value="DarkYellow">DarkYellow</option>
        <option value="DarkRose">DarkRose</option>
        <option value="VioletBlue">VioletBlue</option>
        <option value="Brown">Brown</option>
        <option value="Sienna">Sienna</option>
        <option value="TankGrey">TankGrey</option>
        <option value="MossGreen">MossGreen</option>
        <option value="DeepBlue">DeepBlue</option>
        <option value="MediumBrown">MediumBrown</option>
        <option value="Salmon">Salmon</option>
        <option value="RDR2Red">RDR2Red</option>
    `;
}

var mainContent = document.querySelector('#mainContent');
mainContent.insertBefore(select, mainContent.firstChild);

document.querySelector('#schemeThemes').addEventListener('change', (ev) => {
    document.body.classList.replace(document.body.classList[1], `scheme-theme-${ev.target.value}`)

    localStorage.setItem('scheme', ev.target.value)
})