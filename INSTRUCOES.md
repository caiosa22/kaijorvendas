# Instruções de Configuração - Landing Page Kaijor

## ✅ O que foi criado

Criei uma landing page completa e profissional para a Kaijor com:

- ✅ React 19 + Vite
- ✅ Tailwind CSS com tema azul personalizado
- ✅ Framer Motion para animações
- ✅ 8 componentes principais:
  1. Hero (com video player)
  2. Problems (dor do cliente)
  3. Solution (proposta de valor)
  4. Features (3 pilares)
  5. Pricing (oferta R$197)
  6. Guarantee (7 dias)
  7. CTA (comparação)
  8. Footer

## 🚀 Como executar

### Passo 1: Instalar dependências

```bash
cd landing-page-kaijor
npm install
```

### Passo 2: Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Passo 3: Visualizar no navegador

Abra o navegador e acesse a URL fornecida.

## 📝 O que você precisa configurar

### 1. URL do Vídeo

No arquivo `src/components/Hero.jsx`, linha ~70, substitua:

```jsx
url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Pela URL real do seu vídeo.

### 2. URL de Redirecionamento

No arquivo `src/components/Hero.jsx` (linha ~90) e outros componentes com CTA, substitua:

```jsx
href="#"
```

Por sua URL de formulário/cadastro real.

### 3. Contatos no Footer

No arquivo `src/components/Footer.jsx`, ajuste:
- Email de suporte
- WhatsApp
- Redes sociais

### 4. Informações da Empresa

Edite onde necessário:
- Nome da empresa
- Informações de contato
- Links de redes sociais

## 🎨 Customização de Cores

Para ajustar as cores, edite `tailwind.config.js`:

```js
colors: {
  primary: {
    // Seus tons de azul aqui
  }
}
```

## 📱 Testes Mobile

Para testar responsividade:
1. Abra as DevTools do navegador (F12)
2. Ative o modo de dispositivo móvel
3. Teste em diferentes tamanhos (iPhone, Android, Tablet)

## 🚀 Deploy

Para fazer deploy:

```bash
npm run build
```

Isso criará a pasta `dist/` com os arquivos otimizados.

### Opções de Deploy:
- **Vercel**: `vercel deploy`
- **Netlify**: Arraste a pasta `dist/`
- **GitHub Pages**: Configure actions
- **Servidor próprio**: Envie a pasta `dist/`

## ✨ Recursos Implementados

### Gatilhos Mentais:
- ✅ Prova social
- ✅ Escassez (100 vagas)
- ✅ Urgência (sem aviso)
- ✅ Âncora de preço
- ✅ Reciprocidade
- ✅ Autoridade
- ✅ Reversão de risco
- ✅ Exclusividade
- ✅ Comparação dor/prazer
- ✅ CTA claro

### Performance:
- ✅ Lazy loading automático
- ✅ Animações otimizadas
- ✅ Mobile-first
- ✅ Touch-friendly
- ✅ Carregamento rápido

### Design:
- ✅ Tons de azul da logo
- ✅ Interface moderna
- ✅ Interativo
- ✅ Responsivo
- ✅ Profissional

## 📞 Suporte

Se tiver dúvidas sobre configuração ou precisar de ajustes, entre em contato.

**Boa sorte com sua landing page! 🚀**

