# R&R Móveis Planejados

Website institucional para a marcenaria R&R Móveis Planejados, localizada em Goiânia-GO.

## Sobre o Projeto

Site single-page, mobile-first, focado em conversões via WhatsApp. Desenvolvido com Next.js 15 e TailwindCSS.

## Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **React 19** - Biblioteca UI

## Estrutura do Projeto

```
├── public/
│   └── images/           # Imagens do site
│       ├── hero.png
│       ├── banheiro/
│       ├── cozinha/
│       ├── empresa/
│       ├── escritorio/
│       └── maos-a-obra/
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal com SEO
│   │   ├── page.tsx     # Página principal
│   │   └── globals.css  # Estilos globais
│   └── components/
│       ├── Header.tsx         # Navegação fixa
│       ├── Hero.tsx           # Seção principal
│       ├── About.tsx          # Sobre nós
│       ├── Services.tsx       # Serviços oferecidos
│       ├── Portfolio.tsx      # Galeria de trabalhos
│       ├── Differentials.tsx  # Diferenciais
│       ├── Contact.tsx        # Contato e mapa
│       ├── Footer.tsx         # Rodapé
│       └── WhatsAppButton.tsx # Botão WhatsApp
```

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Bege claro | `#F5F0E8` | Fundo |
| Marrom amadeirado | `#8B5A2B` | Destaques |
| Marrom escuro | `#4A3728` | Textos |
| Verde WhatsApp | `#25D366` | CTAs |

## Contato

- **WhatsApp**: (62) 99172-3696
- **Endereço**: Av. La Paz, Qd 01 - Lt 27 Sala 2 - Res. Mendanha, Goiânia - GO, 74495-770

## Deploy

O projeto está configurado para deploy na Vercel:

1. Conecte o repositório GitHub à Vercel
2. A Vercel detectará automaticamente as configurações do Next.js
3. O deploy será feito automaticamente a cada push na branch main
Site: https://website-r-r-moveis-planejados-nb29.vercel.app/

## Licença

Todos os direitos reservados - R&R Móveis Planejados
