const container = document.querySelector('.container')
const fila1 = document.querySelector('.fila1');
const fila2 = document.querySelector('.fila2');
const fila3 = document.querySelector('.fila3');
const fila4 = document.querySelector('.fila4');
const fila5 = document.querySelector('.fila5');
const text = document.getElementById('text');


container.childNodes.forEach((element)=> {
    element.childNodes.forEach(elemento => {
        elemento.addEventListener('click', () => {
            switch (elemento.value) {
                case 'CE':
                    text.value = "";
                    break;
                case 'C':
                    text.value = "";
                    break;
                case '<||':
                    text.value;
                    break;
                case 'X':
                    text.value += '*'
                    break;
                case '=':
                    try {
                        text.value = eval(text.value)
                    } catch (E) {
                        alert('accion invalida')
                    }
                    break;
            
                default:
                    text.value += elemento.value
            }
        }
        )
})
})