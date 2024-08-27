# Vue3

## Primeiros passos para criar um projeto com Vue 3

É necessário ter o Node instalado na versão **16.0 ou superior**.

No terminal, dentro da pasta onde deseja criar o projeto, basta digitar:
```
 npm create vue@latest
```
Depois disso, aparecerá uma lista onde você pode colocar o nome do projeto e adicionar algumas ferramentas desejadas. 

Ao finalizar a lista, vai aparecer um passo a passo do que se deve fazer em seguida:
```
 cd vue-project
 npm install
 npm run format
 npm run dev
```

A aplicação do Vue 3 é montada dentro da pasta **src**, no arquivo **main.js**.
```
import { createApp } from 'vue' // Cria a aplicação
import App from './App.vue' // Importando o componente principal

import './assets/main.css' // Importando o CSS principal

cosnt app = createApp(App) // Cria a aplicação com base no arquivo passado na linha 2
```
O arquivo **Vue.app** é basicamente o componente principal, porque todos os outros componentes são carregados dentro dele.
Um arquivo .vue é dividido em três partes: **script**, **template** e **style**.
([Link vídeo dos primeiros passos com Vue3](https://youtu.be/xS9KVesgQ28?si=o4klNzU1nyIVthSh))


## Composition API
A Composition API é uma forma de trabalhar com códigos em JavaScript dentro dos Single File Components (SFC).

Quando eu trabalho com ref no Composition, significa que os valores serão reativos (alterados em tempo real). 

([Link vídeo da comparação do Options API com o Composition API](https://youtu.be/KavcEn_It0A?si=cqff9awI04xjIVth))

## ESLint
É uma ferramenta para auxiliar na escrita do código, corrigindo erros de digitação, inconsistências e variáveis que não estão em uso. O ESLint é uma excelente ferramenta para auxiliar na correção de código.
**Como utilizar o ESLint** - Basta instalá-lo através do npm quando iniciar um projeto Vue. Por ser uma ferramenta de auxílio no desenvolvimento, as informações ficam no arquivo package.json, onde é mostrada a forma de executá-lo através do terminal:
```
npm run lint
```  
No terminal, aparecerão os possíveis erros e a linha onde estão sendo referenciados.

**IMPORTANTE** - O ESLint possui um arquivo com regras chamado **.eslintrc.cjs**. Por padrão, o ESLint já vem com algumas regras que são indispensáveis. Dentro desse arquivo, as regras podem ser adicionadas ou removidas de acordo com a necessidade do projeto. Existem regras específicas para o Vue 2, Vue 3 e recomendações de boas práticas. Toda essa informação está disponível na documentação do ESLint.
([Link documentação ESLint](https://eslint.vuejs.org/rules/))

É possível desativar regras dentro do arquivo .eslintrc.cjs. Basta fazer da seguinte forma:
```
 rules: {
    'no-unused-vars': 'off' ou 0 //Desativa a regra
    'no-unused-vars': 'warn' ou 1 //Exibir recomendações
    'no-unused-vars': 'error' ou 2 //Exibir o erro
}
```
Ou, se preferir, existe a extensão do ESLint para o VSCode.

### Dica
Ao passar o cursor sobre algum script que esteja com erro ou recomendação, aparecerá a regra e o motivo de estar sendo exibido.

## Extensões recomendadas para o VSCode
Vue - Official: Syntax highlighting, autocompletions e outros atalhos para arquivos ‘.vue’.
ESLint: Não há necessidade de rodar o script no terminal, as recomendações são exibidas em tempo real.
Prettier: Formatação do código. É possível configurar a formatação de acordo com as regras desejadas, configuração bem parecida com o ESLint.
