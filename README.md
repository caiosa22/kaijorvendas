# Landing Page Kaijor

Landing page de alta conversão para a Kaijor, desenvolvida com React, Tailwind CSS e Framer Motion.

## 🚀 Instalação

### Solução para Problemas de Permissão

Se você encontrar erros de permissão ao instalar as dependências, execute:

```bash
# Corrigir permissões do cache npm
sudo chown -R $(whoami) ~/.npm

# Ou limpar o cache
npm cache clean --force
```

### Instalar Dependências

```bash
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 📋 Estrutura do Projeto

```
landing-page-kaijor/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section com vídeo
│   │   ├── Problems.jsx      # Seção de problemas
│   │   ├── Solution.jsx      # Apresentação da solução
│   │   ├── Features.jsx      # Funcionalidades (3 pilares)
│   │   ├── Pricing.jsx       # Precificação e oferta
│   │   ├── Guarantee.jsx     # Garantia de 7 dias
│   │   ├── CTA.jsx           # Call to action final
│   │   └── Footer.jsx        # Rodapé
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais + Tailwind
├── index.html
├── package.json
├── tailwind.config.js        # Configuração Tailwind
└── postcss.config.js         # Configuração PostCSS
```

## 🎨 Design

### Paleta de Cores
- **Primary**: `#3B82F6` (azul vibrante da logo)
- **Primary Light**: `#60A5FA`
- **Primary Dark**: `#2563EB`
- **Accent**: Gradiente azul
- **Yellow Accent**: `#FBBF24` (para CTAs)

### Componentes Principais

#### 1. Hero Section
- Headline persuasiva com gancho
- Video player customizado
- CTA primário
- Social proof
- Scroll indicator

#### 2. Problems Section
- 3 problemas principais com ícones
- Cards com destaque vermelho
- Mensagem de dor

#### 3. Solution Section
- Apresentação do Kaijor
- Metáfora da orquestra
- Benefícios destacados

#### 4. Features Section
- 3 pilares: Gestão, Vendas, IA
- Cards interativos
- Seção "Jarvis Coming Soon"

#### 5. Pricing Section
- Âncora de preço progressiva
- Card de oferta especial (R$197/mês)
- Lista de benefícios
- Badge de "100 conversas IA grátis"
- Urgência e escassez

#### 6. Guarantee Section
- Garantia de 7 dias
- Reversão de risco
- Badge destacado

#### 7. CTA Section
- Comparação visual
- Checklist de benefícios
- Instruções passo a passo
- CTA final

#### 8. Footer
- Links úteis
- Contato
- Redes sociais
- Disclaimer

## 🧠 Gatilhos Mentais Utilizados

1. **Prova Social**: "Dezenas de negócios já usam"
2. **Escassez**: "Apenas 100 vagas"
3. **Urgência**: "Sem aviso prévio"
4. **Âncora de Preço**: R$1.200 → R$197
5. **Reciprocidade**: "Pagamos os créditos IA"
6. **Autoridade**: Harvard, certificação
7. **Reversão de Risco**: 7 dias garantia
8. **Exclusividade**: Mentoria exclusiva
9. **Dor x Prazer**: Comparação visual
10. **CTA claro**: Instruções detalhadas

## 📱 Otimizações Mobile

- **Mobile-first**: Design pensado para mobile
- **Touch-friendly**: Botões 44px+ mínimo
- **Performance**: Lazy loading e code splitting
- **Animações**: Otimizadas (transform + opacity)
- **Responsivo**: Breakpoints Tailwind padrão

## 🔧 Configurações

### Tailwind
Configurado com paleta de cores azul da logo Kaijor.

### Framer Motion
Animações otimizadas com `whileInView` para performance.

### React Player
Player de vídeo configurado para YouTube (substituir URL no componente Hero).

## 📝 TODO

- [ ] Substituir URL do vídeo no componente Hero
- [ ] Adicionar URL real do formulário/cadastro
- [ ] Configurar analytics (Google Analytics, etc.)
- [ ] Adicionar meta tags Open Graph
- [ ] Implementar SEO
- [ ] Testar em diferentes dispositivos
- [ ] Otimizar imagens
- [ ] Adicionar favicon personalizado

## 🎯 Próximos Passos

1. Resolver problema de permissão npm
2. Instalar dependências
3. Substituir placeholder do vídeo
4. Adicionar URL de redirecionamento
5. Testar em mobile
6. Deploy

## 📄 Licença

Copyright © 2024 Kaijor
