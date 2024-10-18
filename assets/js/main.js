function criaCalculadora(){
    return{
        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;

            }catch(e){
                alert('Conta inválida')
            }
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
                   this.display.focus();
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.DeleteOn()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        },

        pressionaEnter(){
            document.addEventListener('keyup', (e) =>{
                if(e.key=== 'Enter'){
                    e.preventDefault();
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){ 
            this.display.value += valor;
        }
    }
}

const calculadora =  criaCalculadora();
calculadora.inicia();