# Creative App Designer Landing

A modern, multilingual portfolio website built with Next.js, featuring a creative design with custom fonts, animations, and comprehensive analytics tracking.

## 🚀 Features

- **Multilingual Support**: English and Spanish with dynamic language switching
- **Custom Typography**: Modern Neon Regular, JetBrains Mono, and Space Grotesk fonts
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Analytics Integration**: Comprehensive PostHog tracking for user interactions
- **Contact Integration**: Email and WhatsApp contact options
- **Portfolio Showcase**: Dynamic portfolio section with project highlights
- **Resume Section**: Dedicated resume page with detailed experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Analytics**: PostHog
- **Fonts**: Custom fonts (JetBrains Mono, Space Grotesk)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and font definitions
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── resume/            # Resume page
├── components/            # React components
│   ├── resume/           # Resume-specific components
│   ├── Hero.tsx          # Hero section
│   ├── Contact.tsx       # Contact section
│   ├── Portfolio.tsx     # Portfolio section
│   ├── FloatingWhatsApp.tsx  # WhatsApp floating button
│   └── FloatingLanguage.tsx  # Language switcher
├── contexts/             # React contexts
│   └── LanguageContext.tsx  # Language management
└── utils/               # Utility functions
    ├── posthog.ts       # PostHog analytics utilities
    ├── whatsapp.ts      # WhatsApp integration
    └── glowVariants.ts  # Animation variants
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Files

- `tailwind.config.js` - Tailwind CSS configuration with custom fonts
- `next.config.ts` - Next.js configuration with instrumentation
- `instrumentation-client.js` - PostHog client initialization
- `src/utils/posthog.ts` - Analytics tracking utilities
- `src/contexts/LanguageContext.tsx` - Language management
- `public/translations.json` - Translation content

### Customization

- **Colors**: Update color scheme in `tailwind.config.js` and component classes
- **Fonts**: Add new fonts in `src/app/globals.css` and `tailwind.config.js`
- **Animations**: Modify animation variants in `src/utils/glowVariants.ts`
- **Content**: Update translations in `public/translations.json`

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [PostHog](https://posthog.com/docs) - Product analytics platform
- [TypeScript](https://www.typescriptlang.org/docs/) - Type-safe JavaScript

## 🤝 Contributing

This project is open to contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Contact Information
NEXT_PUBLIC_EMAIL=your_email@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number_here
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

This project is compatible with any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Container-based deployment
- **AWS Amplify**: Full-stack deployment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎨 Custom Fonts

This project uses custom fonts for a unique design:

- **JetBrains Mono**: Used for the resume
- **Space Grotesk**: Used for the rest of the website

Fonts are loaded via CSS `@font-face` and configured in Tailwind CSS.

## 🌐 Multilingual Support

The application supports English and Spanish with:

- Dynamic language switching via floating button
- Context-based language management
- Translation files for all content
- Automatic language persistence

## 📊 Analytics Integration

### PostHog Setup

This project includes comprehensive PostHog analytics tracking. To set up PostHog:

1. Create a `.env.local` file in the root directory
2. Add your PostHog configuration:
   ```
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
   ```

### Tracked Events

The following events are automatically tracked:

- **Page Views**: `page_view` - Tracks when users view different pages
- **Button Clicks**: `button_click` - Tracks button interactions (portfolio, contact)
- **Contact Attempts**: `contact_attempt` - Tracks email and WhatsApp contact attempts
- **Language Changes**: `language_change` - Tracks when users switch languages
- **Section Views**: `section_view` - Tracks when users view different sections
- **Portfolio Interactions**: `portfolio_interaction` - Tracks portfolio project interactions
- **Resume Downloads**: `resume_download` - Tracks resume download events

### Analytics Implementation

- **Client-side tracking** via `instrumentation-client.js`
- **Component-level tracking** for user interactions
- **Automatic event capture** for key user actions
- **Type-safe tracking functions** with proper TypeScript support

## 📱 Contact Integration

The application includes multiple contact methods:

- **Email Contact**: Direct mailto links with tracking
- **WhatsApp Integration**: Floating WhatsApp button with custom messages
- **Social Media Links**: Integrated social media connections
- **Resume Download**: PDF resume with download tracking

## 🎭 Animations

Powered by Framer Motion with:

- **Page Transitions**: Smooth page-to-page navigation
- **Component Animations**: Staggered animations for content
- **Hover Effects**: Interactive hover states
- **Scroll Animations**: Viewport-based animations
- **Glow Effects**: Custom glow animations for special elements
