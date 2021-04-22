class Main {

    constructor(){
        this.btnOpen = document.getElementById('open-menu');
        this.btnClose = document.getElementById('close');
        this.sidebar = document.querySelector('.sidebar-mobile');
        this.form = document.getElementById('formulario');
        this.inputLinhas = document.getElementById('estacao');
        this.menssageError = document.getElementById('error');
        

        //METODOS
        this.menuOpen();
        this.menuClose();
        this.conectar();
        this.validarForm();

    }

    // VALIDAÇÃO DO FORMULARIO

    validarForm(){

      this.form.addEventListener('submit', (e)=>{
        if(this.inputLinhas.value == ""){
          e.preventDefault();
          this.menssageError.innerHTML = "O campo não pode estar vazio !";
          this.menssageError.style.display = 'block';

        } else {

          alert('enviado com sucesso !');
          return true;
        }

      })
     
      
    }


    // ANIMAÇÃO DO MENU
    menuOpen(){
        
        this.btnOpen.addEventListener('click', ()=>{
            this.sidebar.style.display = 'block';
            if(this.sidebar.classList.contains('hide')){
                this.sidebar.classList.add('animate__animated', 'animate__bounceInLeft');
                this.sidebar.classList.remove('hide'); 
              } 
          })
      }

    menuClose(){
        this.btnClose.addEventListener('click', ()=>{

            this.sidebar.style.display = 'none';
            
        })
    }


    // PEGANDO OS DADOS DA API
    conectar(){

        function requisicao(method, url){
            return fetch(url, {method})
            .then(response => response.json())
            .then(json => console.log(json))

        }

        const post = requisicao('POST','http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2');
        console.log(post);

        const get = requisicao('GET', ' http://api.olhovivo.sptrans.com.br/v0/Linha/Buscar?termosBusca=Lapa');
        console.log(get)
        

    }


}

/*
const token = '5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2';
 
fetch('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2', {
  method: 'POST'
}).then(res => res.json())
  .then(json => console.log(json))

fetch('http://api.olhovivo.sptrans.com.br/v2.1/Linha/Buscar?termosBusca=8000',{
  method: 'GET',
  headers: {
    'Authorization': '5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2',
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
  .then(json => console.log(json));

  /*
const post = spTrans("POST", `http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2`);
console.log(post);

const acesso = spTrans("GET", " http://api.olhovivo.sptrans.com.br/v2.1/Linha/Buscar?termosBusca=8000");
  */


//let dados = get("http://api.olhovivo.sptrans.com.br/v2.1.");
//5f442dd1fed83a0013ca60f4bf1224e9c7a40469fc0f13827b68049054eb5fd2

