const botaoAdicionarPessoa = document.querySelector('#add-person-btn');
const statusDeAdicoes = document.querySelector('.empty-state');
const nenhumCadastroAviso = document.querySelector('.empty-title');
const nenhCadastroAvisoSub = document.querySelector('.empty-subtitle');
const pessoasCadastradas = document.querySelector('.empty-state');

function verificacao() {
   const nomeDaPessoa = document.querySelector('#name-input').value;
   const i = document.querySelector('#age-input').value;
   const idadeDaPessoa = Number(i);

   if(nomeDaPessoa.length != 0 && i.length != 0) {

      nenhumCadastroAviso.classList.add('desativar');
      nenhCadastroAvisoSub.classList.add('desativar');
      let textCadastrados = document.createElement('h4');
      textCadastrados.innerText = 'Cadastrados';
      pessoasCadastradas.appendChild(textCadastrados);

      if(idadeDaPessoa < 0 && idadeDaPessoa > 126) {
         alert('[ERRO] Digite uma idade válida!');
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

botaoAdicionarPessoa.addEventListener('click', () => {
   verificacao();
});

/*
    DESAFIO — GERENCIADOR DE CARTÕES

    Crie um sistema em JavaScript que permita adicionar pessoas
    através de um formulário contendo nome e idade.

    REQUISITOS:

    1. Ao clicar no botão "Adicionar pessoa", pegue o nome e a idade
       informados pelo usuário.

    2. Não permita adicionar uma pessoa caso algum dos campos esteja vazio.
       Nesse caso, exiba uma mensagem de aviso.

    3. Crie um cartão para cada pessoa adicionada usando JavaScript.

       O cartão deve apresentar:
       - Nome
       - Idade
       - Classificação da pessoa

    4. Classifique a pessoa de acordo com a idade:

       0 a 12 anos  → Criança
       13 a 17 anos → Adolescente
       18 a 59 anos → Adulto
       60 anos ou + → Idoso

    5. Cada cartão deve possuir um botão "Remover".

       Ao clicar nesse botão, somente o cartão correspondente
       deve ser removido da página.

    6. Todo o conteúdo dos cartões deve ser criado pelo JavaScript.
       Não deixe os cartões prontos no HTML.

    ------------------------------------------------------------

    ORIENTAÇÃO:

    Faça o desafio por etapas.

    Etapa 1 → Selecionar os elementos necessários do HTML.
    Etapa 2 → Capturar o nome e a idade.
    Etapa 3 → Validar os campos.
    Etapa 4 → Criar o cartão.
    Etapa 5 → Classificar a pessoa pela idade.
    Etapa 6 → Criar o botão de remover.
    Etapa 7 → Fazer o botão remover somente o seu cartão.

    Tente resolver utilizando apenas os recursos de JavaScript
    que você já conhece. Não é necessário utilizar Math ou
    outros recursos que ainda não foram estudados.
*/