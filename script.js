const container = document.querySelector('.container')
const text = document.getElementById('text');

container.childNodes.forEach((element) => {
    element.childNodes.forEach(elemento => {
        elemento.addEventListener('click', () => {
            switch (elemento.value) {
                case 'CE':
                    text.value = "";
                    break;

                case 'C':
                    text.value = "";
                    break;
                case 'D':
                    let textoEliminado = text.value.split('')
                    text.value = ''
                    textoEliminado.pop()
                    textoEliminado.map(elementico => {
                        text.value += elementico
                    })
                    break;
                case 'X':
                    text.value += '*'
                    break;
                case '=':
                    try {
                        text.value = eval(text.value)
                    } catch (E) {
                        alert('accion invalida' + E)
                    }
                    break;
                case '+/-':
                    text.value += '-'
                    break;

                default:
                    text.value += elemento.value
            }
        }
        )
    })
})

