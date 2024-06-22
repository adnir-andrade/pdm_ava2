# PDM - Avaliação 2

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn expo start
   ```
__________________________________________________
# How to install and test this application

## Jest

- First, you need to install and configure Jest. Start by installing jest-expo using yarn
   ```bash
    yarn add -D jest-expo jest
   ```
- Then, as we are using Typescript, you must also add @types/jest as a dev dependency.
   ```bash
   yarn add --dev ts-jest @types/jest
   ```
- Finally, we make sure that any modules we are using within the node_modules directory are transpiled when running Jest by including transformIgnorePatterns in our package.json
  ```json
  "jest": {
     "preset": "jest-expo",
     "transformIgnorePatterns": [
       "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
     ]
   }
   ```

## @testing-library
- As the old React Testing Library got deprecated, we will use the recommended @testing-library/react-native. You can install it by using the following command:
   ```bash
   yarn add --dev @testing-library/react-native
   ```
## Maestro
- Last, we will be installing Maestro to greatly help us with our end2end tests, by running the following command:
   ```bash  
      curl -Ls "https://get.maestro.mobile.dev" | bash
   ```

## Unitary Test
- Now that everything is ready, we can run our tests with
   ```bash
      yarn test
   ```
## Maestro
- The test was designed to be run in an "iPhone 15 Pro Max - iOS 17.5" in the Mac Simulator. If you are testing in an Android, the test might not work properly. To start our test, firstly we need to start expo server using:
   ```bash
      yarn ios
   ```
- And in another terminal, we can start our test using:
   ```bash
      maestro test test.yaml
   ```
__________________________________________________
# Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile?

## Testes Unitários

Os testes unitários são responsáveis por verificar pequenas partes isoladas do código, como funções ou métodos individuais, visto que, como o nome demonstra, eles têm por objetivo assegurar a qualidade das unidades e não o sistema como um todo. Com estes testes, garantimos que cada unidade de código funcione conforme esperado. Ao longo que o projeto cresce e novas funcionalidades são implementadas, os testes unitários nos ajudam a garantir a integridade da nossa aplicação, nos auxiliando a identificar se algo novo quebrou algo antigo.
Os testes unitários são geralmente rápidos de executar e fáceis de escrever, focando em validar a lógica de negócio de forma granular.

## Testes E2E (End to End)

Os testes E2E avaliam o comportamento de toda a aplicação do ponto de vista do usuário final, geralmente simulando as atividades que os usuários realizariam em um ambiente de produção, como cliques, navegações, entradas de dados em formulários, entre outros. Com esta simulação, é possível verificar se todos os componentes funcionam corretamente em conjunto, garantindo que a aplicação como um todo funcione conforme o esperado em um ambiente realista. Contudo, dependendo do framework utilizado, podem ser mais muito mais difíceis de escrever e manter devido à sua abrangência. A mudança de posicionamento de um elemento na tela pode implicar a reescrita de inúmeros testes. Ao mesmo tempo, tendem a ser mais lentos, pois envolvem mais componentes e dependências da aplicação. Mas ao final, são tão úteis, se não necessários, quanto os testes unitários.

