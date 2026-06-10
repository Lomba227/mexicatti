# CLAUDE.md — Landing Page Mexicatti Sorvetes

## Visão geral do projeto

Landing page para a **Mexicatti Sorvetes**, sorveteria de fabricação própria com 3 lojas em Araras/SP. O objetivo da página é substituir o Linktree atual e servir como ponto central de descoberta da marca: exibir o cardápio de forma visual e atrativa, direcionar para WhatsApp e iFood, e mostrar os endereços das lojas. Não é um e-commerce — é uma vitrine que converte curiosidade em visita física ou pedido via WhatsApp/iFood.

**Público-alvo:** moradores de Araras/SP e região que já conhecem ou estão descobrindo a marca. Foco mobile-first, pois o acesso virá majoritariamente de links no Instagram e WhatsApp.

---

## Identidade visual

### Paleta de cores

Extraída do logo, do cardápio e da identidade visual do Instagram:

| Nome | Hex | Uso |
|---|---|---|
| Laranja Mexicatti | `#E8681A` | Cor primária, CTAs, destaques |
| Dourado Mexicatti | `#C49A2A` | Detalhes do logo, acentos premium |
| Marrom Escuro | `#3D1F0A` | Textos sobre fundo claro, header |
| Creme Quente | `#FFF8F0` | Background principal |
| Branco Puro | `#FFFFFF` | Cards, contrastes |
| Cinza Suave | `#F2EDE8` | Backgrounds secundários, divisores |

### Tipografia

- **Display (títulos grandes):** `Playfair Display` — peso 700/900 — traz sofisticação sem perder o calor da marca artesanal
- **Body (textos corridos, descrições):** `Inter` — peso 400/500 — limpo, legível em mobile
- **Accent (preços, labels de categoria):** `Inter` — peso 700 — bold e direto

Importar via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

### Logo

Usar o logo oficial da Mexicatti: símbolo floral dourado + texto "MEXICATTI" + subtexto "SORVETES". Disponível no perfil do Instagram. Aplicar sobre fundo branco ou creme — nunca sobre fundo laranja escuro sem tratamento de contraste.

### Ícones

Usar emojis ou ícones simples (Lucide/Feather) para categorias de produtos. Tom visual: caloroso, artesanal, premium acessível.

---

## Estrutura da página (seções em ordem)

### 1. Hero

- Logo Mexicatti centralizado
- Tagline: **"Sorvetes de fabricação própria, feitos com sabor de verdade."**
- Dois botões de CTA lado a lado:
  - 🟢 **Pedir pelo WhatsApp** → link WhatsApp
  - 🔴 **Ver no iFood** → link iFood
- Background: gradiente suave de `#FFF8F0` para `#FFE8D0`
- Nenhuma imagem de produto aqui — deixar o logo respirar

### 2. Sobre a Mexicatti

Bloco curto (3 linhas no máximo), centralizado:

> Fabricação própria, atacado e varejo. Três lojas em Araras/SP com os melhores sorvetes, picolés, paletas mexicanas e açaí da região.

Badges abaixo do texto:
- 🏭 Fabricação Própria
- 🏪 Atacado e Varejo
- 📍 3 Lojas em Araras/SP

### 3. Cardápio

Seção principal da página. Organizar por categorias com tabs ou accordion no mobile.

#### Categorias e produtos:

**🍦 Picolés**
- Linha Festa — Morango, Pinta Língua, Tangerina — R$ 0,99 (atacado/varejo)
- Linha Fruta — Abacaxi, Açaí, Goiaba, Groselha, Limão, Maracujá, Uva — Atacado R$ 2,20 / Varejo R$ 2,50
- Linha Leite *(sabores a confirmar)*
- Linha Especial *(sabores a confirmar)*
- Linha Premium *(sabores a confirmar)*

**🧁 Sundaes**
*(sabores/tamanhos a confirmar)*

**🍨 Potes 2L**
- Linha Clássicos
- Linha Premium

**🥄 Potes 250 mL**
*(sabores a confirmar)*

**🌮 Paletas Mexicanas 120g**
- Linha Frutadas
- Linha Cremosas
- Linha Recheada
- Linha Especiais
- Linha Premium

**🌮 Paletas Mexicanas 72g**
- Linha Frutadas
- Linha ao Leite
- Linha Recheadas
- Linha Trufada
- Linha Zero Açúcar

**🫙 Potes 1L**
- Linha Clássica
- Linha Especial
- Linha Premium
- Linha Zero Açúcar

**🍇 Açaí**
- Linha Açaí 250 mL
- Linha Açaí 1L
- Linha Açaí 2L
- Linha Açaí 10L

#### Design dos cards de produto:
- Ícone/emoji grande da categoria
- Nome da linha em destaque
- Lista de sabores em texto menor
- Preço quando disponível (badge laranja)
- Fundo branco, borda-radius 12px, sombra suave

### 4. Onde Encontrar (Lojas)

Três cards de endereço (endereços reais a confirmar com o cliente):

Cada card contém:
- Ícone de pin 📍
- Nome/número da loja (ex: Loja 1 — Centro)
- Endereço completo
- Botão "Ver no Maps" → link Google Maps
- Horário de funcionamento (a confirmar)

Layout: grid 1 coluna no mobile, 3 colunas no desktop.

### 5. CTAs Flutuantes / Seção Final

Bloco com fundo laranja (`#E8681A`), texto branco:

**"Bora pedir agora?"**

Dois botões grandes:
- **WhatsApp** (ícone + texto)
- **iFood** (ícone + texto)

### 6. Footer

- Logo pequeno
- "© 2025 Mexicatti Sorvetes — Araras/SP"
- Links: Instagram | WhatsApp | iFood
- Fundo `#3D1F0A` (marrom escuro), texto creme

---

## Componentes e comportamentos

### Botão WhatsApp
```html
<a href="https://wa.me/NUMERO" class="btn-whatsapp">
  💬 Pedir pelo WhatsApp
</a>
```
- Cor: `#25D366` (verde WhatsApp)
- Hover: escurecer 10%
- Abrir em nova aba

### Botão iFood
```html
<a href="LINK_IFOOD" class="btn-ifood">
  🛵 Ver no iFood
</a>
```
- Cor: `#EA1D2C` (vermelho iFood)
- Hover: escurecer 10%
- Abrir em nova aba

### Botão primário (geral)
- Background: `#E8681A`
- Texto: branco
- Border-radius: 8px
- Padding: 14px 28px
- Font: Inter 600

### Navegação
- Sticky header com logo + botão WhatsApp no canto direito
- Sem menu hamburguer — a página é scroll único
- Background branco com sombra suave ao scrollar

---

## Especificações técnicas

### Stack recomendada
- HTML5 + CSS3 + JavaScript vanilla (sem framework — facilita manutenção pelo cliente)
- OU React se preferir componentes reutilizáveis

### Responsividade
- Mobile-first obrigatório
- Breakpoints: 375px (mobile), 768px (tablet), 1200px (desktop)
- Testar especialmente no iPhone SE e Android médio

### Performance
- Sem imagens pesadas no MVP — usar emojis e CSS para ícones
- Quando tiver fotos reais: usar `loading="lazy"` e formatos WebP
- Google Fonts com `display=swap`

### Acessibilidade mínima
- Contraste mínimo 4.5:1 em todos os textos
- Alt text em todas as imagens
- Focus ring visível nos botões
- Aria-labels nos links de ação

---

## Links a preencher (placeholders)

| Campo | Placeholder | Status |
|---|---|---|
| WhatsApp | `https://wa.me/NUMERO_MEXICATTI` | ⚠️ Confirmar com cliente |
| iFood | `https://ifood.com.br/LINK_MEXICATTI` | ⚠️ Confirmar com cliente |
| Instagram | `https://instagram.com/mexicatti` | ✅ Confirmado |
| Endereço Loja 1 | `ENDEREÇO_COMPLETO` | ⚠️ Confirmar com cliente |
| Endereço Loja 2 | `ENDEREÇO_COMPLETO` | ⚠️ Confirmar com cliente |
| Endereço Loja 3 | `ENDEREÇO_COMPLETO` | ⚠️ Confirmar com cliente |
| Horários | `HORÁRIO_FUNCIONAMENTO` | ⚠️ Confirmar com cliente |
| Sabores completos | Ver seção Cardápio | ⚠️ Confirmar com cliente |

---

## Informações para pedir ao cliente

Antes de finalizar, você precisará das seguintes informações:

1. **Número do WhatsApp** de contato/pedidos
2. **Link do iFood** da sorveteria
3. **Endereços completos** das 3 lojas
4. **Horários de funcionamento** de cada loja
5. **Sabores completos** das linhas não detalhadas (Linha Leite, Especial, etc.)
6. **Preços** das demais categorias além de picolés
7. **Fotos** dos produtos (podem vir do Instagram)
8. **Arquivo do logo** em alta resolução (PNG com fundo transparente)

---

## Tom de voz / copywriting

- Caloroso, próximo, sem formalidade excessiva
- Valorizar a fabricação própria como diferencial
- Destacar variedade e que atende tanto varejo quanto atacado
- Sem promessas exageradas — simples e direto
- Exemplos de frases aprovadas:
  - *"Feito aqui, pra você."*
  - *"Do nosso freezer direto pra sua mão."*
  - *"Mais de [X] sabores. Fabricação própria em Araras."*

---

# Frontend Rules

- Use Motion para animações.
- Evite CSS animations.
- Use AnimatePresence para modais.
- Use whileHover em botões.
- Utilize spring animations suaves.

## O que NÃO fazer

- Não usar dark mode — a marca é quente e colorida
- Não usar fontes genéricas (Arial, Helvetica como primária)
- Não criar formulário de pedido online — redirecionar sempre para WhatsApp ou iFood
- Não usar carrossel de imagens pesado no hero
- Não incluir preços que não foram confirmados pelo cliente
- Não hospedar em domínio pago antes do cliente aprovar o protótipo
