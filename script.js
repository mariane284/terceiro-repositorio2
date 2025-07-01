const numerosenha = document.queryselector('.parametro-senha__texto';
    let tamanhosenha = 12;

    numerosenha.textcontent = tamanhosenha;

    const botoes = document.queryselectorAll('.parametro-senha__botao);

        botoes[0].onclick = diminuitamanho;
        botoes[1].onclick = aumentatamanho;

        function diminuitamanho(){
            //tamanhosenha = tamanhosenha-1;
            if(tamanhosenha > 1 ) {
                tamanhosenha--;
                numerosenha.senha.textcontent= tamanhosenha;
            }
        }

        function aumentatamanho(){
            if (tamanhosenha < 20){
                tamanhosenha++;
            }
            numerosenha.textcontent = tamanhosenha;
            
        }