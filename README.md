# Oncoclínicas Main Website - Frontend Institucional

Este repositório contém o frontend institucional do Grupo Oncoclínicas, desenvolvido em [Next.js](https://nextjs.org/) e projetado para alta performance, escalabilidade e facilidade de manutenção.

A stack do site institucional consiste em:

- [Backend](https://github.com) - API de conteúdo
- [Frontend CMS](https://github.com) - Gerenciamento de conteúdo
- **Frontend Institucional** - Este repositório (acessado pelo público)

---

## 1. Arquitetura Recomendada e Hospedagem

### Diagrama de Arquitetura (Recomendado)

```
┌──────────────┐    ┌───────────────┐    ┌──────────────┐
│  Usuários    │──▶ │   CDN/Edge    │──▶ │  Hosting     │
│ (Internet)   │    │ (Vercel/AWS)  │    │ (Vercel)     │
└──────────────┘    └───────────────┘    └──────────────┘
```

### Descrição

A aplicação é baseada em Next.js, utilizando **SSG (Static Site Generation)** e **ISR (Incremental Static Regeneration)** para garantir performance, SEO e atualização dinâmica de conteúdo.

#### Recomendação de Hosting

**Vercel** é fortemente recomendada para hospedagem, pois oferece integração nativa com Next.js, suporte a SSG/ISR, CDN global, preview deploys e automação de cache/invalidação sem necessidade de scripts customizados.

##### Importância da Vercel para a Performance da Aplicação

Embora a aplicação esteja tecnicamente preparada para ser executada em qualquer ambiente que suporte Node.js, é fortemente desaconselhado o uso de plataformas genéricas de hospedagem em substituição à Vercel, especialmente quando se busca alto desempenho, confiabilidade e aproveitamento total dos recursos oferecidos pelo Next.js.

**A Vercel é a plataforma oficial do Next.js**, desenvolvida pela mesma equipe criadora do framework. Portanto, ela oferece **suporte nativo, otimizações automáticas e uma infraestrutura ajustada milimetricamente** para aplicações construídas com Next.js.

###### Consequências da não utilização da Vercel:

- Degradação significativa de performance, especialmente em funcionalidades como ISR (Incremental Static Regeneration) e SSG (Static Site Generation).
- Ausência de CDN global com edge caching inteligente, o que resulta em tempos de resposta mais altos em diferentes regiões.
- Maior complexidade operacional, exigindo scripts personalizados para invalidação de cache, gerenciamento de pré-visualizações e revalidação de conteúdo.
- Perda dos preview deploys automáticos, fundamentais para fluxos de aprovação e revisão de conteúdo antes da publicação.
- Menor eficiência na automação de builds e deploys, comprometendo ciclos de entrega rápidos.

###### Ganhos observados de performance

A migração do WordPress para Next.js hospedado na Vercel resultou em ganhos de performance/velocidade **superiores a 500%**, com métricas de Core Web Vitals e tempo de carregamento significativamente aprimorados. Esses resultados são possíveis graças à combinação entre arquitetura moderna e infraestrutura altamente otimizada, disponível em ambiente "zero-config" apenas na Vercel.

A decisão final cabe ao time responsável, mas é fundamental o entendimento deste _disclaimer_ para as análises dos trade-offs

#### Fluxo de Deploy - Sugestão (Vercel)

1. Criar o projeto na conta da Vercel, conectando o repositório
2. Push para o branch principal
3. Vercel executa build (`next build`)
4. Publicação automática com CDN e suporte a ISR

---

## 2. Serviços Recomendados

| Serviço | Finalidade                                                               |
| ------- | ------------------------------------------------------------------------ |
| Vercel  | Hospedagem, CDN, automação de build/deploy, suporte nativo a Next.js/ISR |

---

## 3. Infraestrutura como Código

Este projeto **não contém** arquivos de infraestrutura como código (ex: Terraform, Serverless Framework) pois a recomendação é utilizar o fluxo automatizado da Vercel. Caso opte por AWS, a configuração de infra deve ser definida pelo time responsável.

---

## 4. Deploy, Rollback e Configuração de Ambiente

### Pré-requisitos

- Node.js 18.x ou superior
- Yarn ou npm
- Conta na Vercel (ou AWS, se for o caso)

### Deploy (Vercel)

1. Faça login na Vercel e importe o repositório
2. Configure as variáveis de ambiente no painel da Vercel
3. Cada push no branch principal gera um deploy automático

### Rollback

- **Vercel**: basta selecionar um deploy anterior no painel e promover.

### Configuração de Ambiente

- As variáveis de ambiente devem ser configuradas no painel da Vercel ou em um arquivo `.env.local` (não versionado).

---

## 5. Autenticação, Perfis IAM e Variáveis de Ambiente

### Autenticação

- O frontend **não implementa autenticação própria**. Consome APIs autenticadas via token (JWT) fornecido pelo backend.

### Perfis IAM

- Não há criação de perfis IAM neste frontend. Caso utilize AWS, o usuário que faz upload para o S3 precisa de permissão de `PutObject` e `CreateInvalidation` no CloudFront.

### Variáveis de Ambiente

As principais variáveis utilizadas são:

| Variável                   | Finalidade                                    |
| -------------------------- | --------------------------------------------- |
| NEXT_PUBLIC_API_URL        | Endpoint da API de conteúdo                   |
| NEXT_PUBLIC_PAGE_API_TOKEN | Token de acesso à API de páginas              |
| BASE_URL                   | URL base do site (usada em sitemap, etc)      |
| NODE_ENV                   | Ambiente de execução (production/development) |

Exemplo de `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://cms.grupooncoclinicas.com/api
NEXT_PUBLIC_PAGE_API_TOKEN=TOKEN_DEFINIDO_NO_BACKEND_CMS
BASE_URL=https://grupooncoclinicas.com
```

---

## 6. Estrutura de Dados

- Não há persistência de dados local (ex: DynamoDB, S3 customizado) neste frontend. Todo conteúdo é consumido via API.

---

## 7. Validação/Teste da Aplicação

### Local

- Para rodar localmente:

```bash
yarn install

yarn dev
# Acesse http://localhost:3000
```

### Lint e Testes

- Lint: `yarn lint`
- (Opcional) Testes unitários podem ser implementados com Jest, mas não há cobertura obrigatória neste projeto.

### Validação de Deploy

- Verifique se o site está acessível na URL configurada
- Teste navegação, carregamento de assets, SEO (metatags), e funcionamento do ISR (páginas novas devem ser geradas automaticamente após publicação de conteúdo via CMS)

Checklist:

- [ ] Build sem erros
- [ ] Deploy realizado
- [ ] Site acessível via URL
- [ ] Navegação funcionando
- [ ] Assets carregando corretamente
- [ ] SEO e metatags presentes
- [ ] HTTPS funcionando

---

## 8. Apontamentos DNS

- Configure o domínio desejado (ex: `grupooncoclinicas.com`) para apontar para o endpoint fornecido pela Vercel (ex: `oncoclinicas.vercel.app`) ou para o domínio do CloudFront, caso use AWS.
- Certifique-se de que o certificado SSL está ativo para HTTPS.

Para informações de customizações de DNS acerca de outros sites presentes no CMS, acesse o [Repositório do Backend do CMS](https://github.com).

---

## 9. Estratégia de SSG + ISR (Next.js)

- O projeto utiliza **getStaticProps**, **getStaticPaths** e a propriedade **revalidate** para geração e atualização incremental de páginas.
- Isso garante que novas páginas criadas no CMS sejam publicadas automaticamente após o tempo de revalidação, sem necessidade de rebuild manual.
- O uso de ISR é um dos principais motivos para recomendar a Vercel, pois ela gerencia automaticamente a atualização e cache das páginas, enquanto na AWS isso exige scripts e automação customizada.

### Funcionamento do SSG + ISR (Incremental Static Regeneration)

#### Como funciona?

- Ao acessar uma página, o Next.js serve uma versão estática previamente gerada (SSG).
- Novas páginas ou alterações de conteúdo no CMS são refletidas automaticamente após um período de revalidação.
- O tempo de revalidação está definido em **60 segundos** (veja exemplo abaixo).

#### Exemplo prático

No arquivo [`src/pages/[[...slug]].tsx`]:

```ts
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  // ...
  return { props: pageData, revalidate: 60 };
};
```

- Isso significa que, após uma alteração no CMS, pode levar até **60 segundos** para que a nova versão da página seja gerada e disponibilizada para os usuários.
- Durante esse intervalo, a versão anterior permanece disponível, garantindo estabilidade e performance.

### Orientação

- Caso uma página nova seja criada no CMS, ela estará disponível no site institucional em até 60 segundos após a publicação.
- O mesmo vale para edições de conteúdo: a atualização pode demorar até 1 minuto para ser refletida no site.
- _Não é necessário realizar deploy manual para refletir alterações de conteúdo._

Para mais detalhes técnicos, consulte a documentação oficial do [Next.js - Incremental Static Regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration).

---

## 10. Observações Finais

- Este frontend é desacoplado do CMS e do backend, consumindo apenas a API pública do CMS.

---
