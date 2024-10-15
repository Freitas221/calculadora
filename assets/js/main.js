function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia(){
            this.cliqueBotoes();
        },

        equal(){

        },
        
        clearDisplay(){
            this.display.value = '';
        },

        DeleteOn(){
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes(){
            document.addEventListener('click',(e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                   this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.DeleteOn()
                }

                if(el.classList.contains('btn-eq')){
                    this.equal()
                }
            })
        },

        btnParaDisplay(valor){ 
            this.display.value += valor;
        }
    }
}

const calculadora =  criaCalculadora();
calculadora.inicia();