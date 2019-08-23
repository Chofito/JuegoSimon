var secuencia = []
var continuar = true
var paso = 0

$("#start").click(() => {
    agregarPaso()
    secuencia.forEach(x => {
        hacerSonar(x)
    })
})

$("#reset").click(() => {
    paso = 0
    secuencia = []
})

$("#a").click(() => {
    sonido(1)
    if (secuencia[paso] == 0) {
        paso += 1
        if (secuencia.length == paso) {
            completado()
        }
    }
    else perder()
})

$("#b").click(() => {
    sonido(7)
    if (secuencia[paso] == 1) {
        paso += 1
        if (secuencia.length == paso) {
            completado()
        }
    }
    else perder()
})

$("#c").click(() => {
    sonido(13)
    if (secuencia[paso] == 2) {
        paso += 1
        if (secuencia.length == paso) {
            completado()
        }
    }
    else perder()
})

$("#d").click(() => {
    sonido(19)
    if (secuencia[paso] == 3) {
        paso += 1
        if (secuencia.length == paso) {
            completado()
        }
    }
    else perder()
})

// 1, 7, 13, 19

function hacerSonar(x) {
    switch (x) {
        case 0:
            $("#a").removeClass("rojo")
            $("#a").addClass("rojoOpaco")
            sonido(1)
            sleep(1000)
            $("#a").addClass("rojo")
            $("#a").removeClass("rojoOpaco")
            break;
        case 1:
            $("#b").removeClass("azul")
            $("#b").addClass("azulOpaco")
            sonido(7)
            sleep(1000)
            $("#b").addClass("azul")
            $("#b").removeClass("azulOpaco")
            break;

        case 2:
            $("#c").removeClass("verde")
            $("#c").addClass("verdeOpaco")
            sonido(13)
            sleep(1000)
            $("#c").addClass("verde")
            $("#c").removeClass("verdeOpaco")
            break;

        case 3:
            $("#d").removeClass("morado")
            $("#d").addClass("moradoOpaco")
            sonido(19)
            sleep(1000)
            $("#d").addClass("morado")
            $("#d").removeClass("moradoOpaco")
            break;
    }
}

function perder() {
    alert("Perdiste!!!")
    secuencia = []
    paso = 0
}

function completado() {
    sleep(2000)
    paso = 0
    agregarPaso()
    secuencia.forEach(x => {
        hacerSonar(x)
    })
}

function agregarPaso() {
    var cuadro = Math.floor(Math.random() * 4)
    secuencia.push(cuadro)
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function sonido(tipo_sonido) {
    with (new AudioContext)
    with (G = createGain())
    for (i in D = [tipo_sonido])
        with (createOscillator())
        if (D[i])
            connect(G),
                G.connect(destination),
                start(i * .1),
                frequency.setValueAtTime(440 * 1.06 ** (13 - D[i]), i * .1), type = 'triangle',
                gain.setValueAtTime(1, i * .1),
                gain.setTargetAtTime(.0001, i * .1 + .08, .005),
                stop(i * .1 + .09)
}