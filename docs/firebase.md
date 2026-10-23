# Configuração do Firebase

## Aplicativos
- Android: `com.olympuz.app`
- Web: olympuz e `id olmpuz-5d352`

## Cloud Firestore
- Região: `southamerica-east1 (vulgo São Paulo)`
- Regras iniciais: negar todas as leituras e escritas dos clientes

## Authentication
- Serviço: habilitado
- Provedores: por enquanto, apenas `email e senha`

## Acessos
- o firebase está registrado no indigenariqueza@gmail.com
Creio que todos tenham acesso.

## Configuração local
- Android: seguir as instruções do Firebase para Gradle
- Web: configurar as variáveis de ambiente locais

## Segurança
- Nunca incluir chaves privadas do Admin SDK no cliente.
- Não versionar segredos ou tokens de depuração.
- Não liberar leitura e escrita irrestritas no Firestore.
