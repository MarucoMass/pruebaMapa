const mapa = document.querySelector('.santaFePcia')
const rosario = document.querySelector('.Rosario')
const reconquista = document.querySelector('.Reconquista')
const santaFe = document.querySelector('.SantaFe')
const volverBtn = document.querySelector('.volver')

mapa.addEventListener('click', (e) => {
    if (e.target.classList.contains('RosarioInput')) {
        mapa.classList.add('fade')
        setTimeout(() => {
            mapa.classList.add('no-visible')
            volverBtn.classList.remove('no-visible')
            rosario.classList.remove('no-visible')
            rosario.classList.add('appear')
        }, 300);
    }
    if (e.target.classList.contains('ReconquistaInput')) {
        mapa.classList.add('fade')
        setTimeout(() => {
            mapa.classList.add('no-visible')
            volverBtn.classList.remove('no-visible')
            reconquista.classList.remove('no-visible')
            reconquista.classList.add('appear')
        }, 300);
    }
    if (e.target.classList.contains('SantaFeInput')) {
        mapa.classList.add('fade')
        setTimeout(() => {
            mapa.classList.add('no-visible')
            volverBtn.classList.remove('no-visible')
            santaFe.classList.remove('no-visible')
            santaFe.classList.add('appear')
        }, 300);
    }
} )

volverBtn.addEventListener('click', () => {
    rosario.classList.add('no-visible')
    rosario.classList.add('fade')
    // ////
    reconquista.classList.add('no-visible')
    reconquista.classList.add('fade')
    // /////
    santaFe.classList.add('no-visible')
    santaFe.classList.add('fade')
    ///////
    mapa.classList.remove('fade')
    mapa.classList.remove('no-visible')

    volverBtn.classList.add('no-visible')
})