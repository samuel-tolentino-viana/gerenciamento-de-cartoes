const botaoAdicionarPessoa = document.querySelector('#add-person-btn');
const statusDeAdicoes = document.querySelector('.empty-state');
const nenhumCadastroAviso = document.querySelector('.empty-title');
const nenhCadastroAvisoSub = document.querySelector('.empty-subtitle');
const pessoasCadastradas = document.querySelector('.empty-state');
const nomeDaPessoa = document.querySelector('#name-input');
const cadastrosExemplos = document.querySelector('h2');
const i = document.querySelector('#age-input'); 
const textCadastrados = document.querySelector('h4');

function verificarMensagens() {
   const pg1 = document.querySelectorAll('.people-grid');
   const peopleGrid1 = pg1[0];
   if(peopleGrid1.childElementCount === 0) {
      cadastrosExemplos.classList.add('desativar');
   }

   const pg2 = document.querySelectorAll('.people-grid');
   const peopleGrid2 = pg2[1];

   if(peopleGrid2.childElementCount != 0) {
      textCadastrados.classList.remove('desativar');
      nenhumCadastroAviso.classList.add('desativar');
      nenhCadastroAvisoSub.classList.add('desativar');
   } else {
      textCadastrados.classList.add('desativar');
      nenhumCadastroAviso.classList.remove('desativar');
      nenhCadastroAvisoSub.classList.remove('desativar');
   }

};

function verificacao() {
   
   const nomeDaPessoa = document.querySelector('#name-input').value;
   const i = document.querySelector('#age-input').value;
   const idadeDaPessoa = Number(i);

   if(nomeDaPessoa.length != 0 && i.length != 0) {      

      if(idadeDaPessoa < 0 || idadeDaPessoa > 126) {
         alert('[ERRO] Digite uma idade válida!');
         nomeDaPessoa.value = nomeDaPessoa;
         nomeDaPessoa.focus();
         i.value = i;
      } else {
         criarCard(nomeDaPessoa, idadeDaPessoa);
      }
   } else {
      alert('[ERRO] Digite algo nos campos acima!');
   }
};

function criarCard(nome, idade) {
   const pg = document.querySelectorAll('.people-grid');
   const peopleGrid = pg[1];
   peopleGrid.style.paddingTop = '16px';

   let article = document.createElement('article');
   article.setAttribute('class', 'person-card');
   peopleGrid.appendChild(article);
   // FEITO

   let infoPessoa = document.createElement('div');
   infoPessoa.setAttribute('class', 'person-card-header');
   article.appendChild(infoPessoa);
   // FEITO

   let nomeDaPessoa = document.createElement('h3');
   nomeDaPessoa.innerText = nome;
   infoPessoa.appendChild(nomeDaPessoa);

   let span = document.createElement('span');
   span.setAttribute('class', 'badge');
   infoPessoa.appendChild(span);
   calcularIdade(idade, span);
   
   let idadeDaPessoa = document.createElement('p');
   idadeDaPessoa.setAttribute('class', 'person-age');
   idadeDaPessoa.innerText = `${idade} anos`;
   article.appendChild(idadeDaPessoa);

   let remover = document.createElement('button');
   remover.setAttribute('class', 'btn-secondary');
   remover.innerText = 'Remover';
   article.appendChild(remover);
}

function calcularIdade(idade, tipoDeTexto) {
   if(idade > 0 && idade < 12) {
      tipoDeTexto.classList.add('badge-child');
      tipoDeTexto.innerText = 'Criança';
   } else if(idade >= 12 && idade < 18) {
      tipoDeTexto.classList.add('badge-teen');
      tipoDeTexto.innerText = 'Adolecente';
   } else if(idade >= 18 && idade < 60) {
      tipoDeTexto.classList.add('badge-adult');
      tipoDeTexto.innerText = 'Adulto';
   } else {
      tipoDeTexto.classList.add('badge-elderly');
      tipoDeTexto.innerText = 'Idoso';  
   };
};

function verificandoOsCampos(campoNome, campoIdade) {
   const cardDeCadastro = document.querySelector('.form-card');
   const avisoDosCampos = document.querySelector('.form-message');

   if(campoNome.value.length != 0 && campoIdade.value.length != 0) {
      avisoDosCampos.classList.add('desativar');
      cardDeCadastro.classList.add('espacamento-baixo');
   } else {
      avisoDosCampos.classList.remove('desativar');
      cardDeCadastro.classList.remove('espacamento-baixo');
   }
};



botaoAdicionarPessoa.addEventListener('click', () => {

   verificacao();
   
   nomeDaPessoa.value = '';
   nomeDaPessoa.focus();
   i.value = '';

   verificandoOsCampos(nomeDaPessoa, i);

   removerItemDaLista();

   verificarMensagens();
});

nomeDaPessoa.addEventListener('input', () => {
   verificandoOsCampos(nomeDaPessoa, i);
});

i.addEventListener('input', () => {
   verificandoOsCampos(nomeDaPessoa, i)
});



// REMOVER



function removerItemDaLista() {
   const remover = document.querySelectorAll('.btn-secondary');

   for(let botoesRemvoer of remover) {
      botoesRemvoer.addEventListener('click', () => {
         let card = botoesRemvoer.parentElement;
         card.remove();
         verificarMensagens();
      });
   };
}

removerItemDaLista();