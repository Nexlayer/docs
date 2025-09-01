# Nexlayer Documentation Site

> **🚀 A modern, developer-friendly documentation site built for agent-native cloud platform documentation**

This is the official documentation site for Nexlayer, built with Next.js 14, TypeScript, and MDX. Designed to be fast, maintainable, and easy to contribute to.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
- [Development Guide](#-development-guide)
- [Contributing](#-contributing)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

## 🛠 Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **MDX** - Markdown with JSX support
- **Framer Motion** - Smooth animations and transitions

### Key Libraries
- **@next/mdx** - MDX processing for Next.js
- **@mdx-js/react** - React components for MDX
- **shadcn/ui** - Pre-built, accessible UI components
- **react-syntax-highlighter** - Code syntax highlighting
- **lucide-react** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Fast, disk space efficient package manager

## ⚡ Quick Start

### Prerequisites
- **Node.js 18+** (recommended: Node.js 20)
- **pnpm** (install with `npm install -g pnpm`)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Nexlayer/documentation.git
cd documentation

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev

# 4. Open http://localhost:3000
```

### Environment Setup

```bash
# Copy environment template (if needed)
cp .env.example .env.local

# The site works without environment variables for local development
# Environment variables are mainly used for deployment
```

## 📁 Project Structure

```
documentation/
├── app/                          # Next.js App Router pages
│   ├── (docs)/                   # Documentation layout group
│   ├── (with-navbar)/           # Pages with navbar layout
│   ├── api-reference/           # API documentation pages
│   ├── faq/                     # FAQ page
│   ├── launchfile/              # YAML configuration examples
│   ├── learn/                   # Learning resources
│   ├── playground/              # Interactive playground
│   ├── pricing/                 # Pricing page
│   └── layout.tsx              # Root layout
├── components/                   # Reusable React components
│   ├── api/                     # API documentation components
│   ├── ui/                      # shadcn/ui components
│   ├── learn/                   # Learning page components
│   ├── mdx-components.tsx      # Global MDX components
│   ├── navbar.tsx              # Navigation component
│   ├── sidebar.tsx             # Documentation sidebar
│   └── theme-provider.tsx      # Theme context
├── content/                     # MDX content files
│   ├── authors/                # Author information
│   └── docs/                   # Documentation content
├── data/                       # Static data files
│   └── openapi.json           # OpenAPI specification
├── lib/                        # Utility functions
│   ├── mdx.ts                 # MDX processing utilities
│   ├── openapi.ts             # OpenAPI utilities
│   ├── utils.ts               # General utilities
│   └── yaml-theme.ts          # YAML syntax highlighting theme
├── public/                     # Static assets
├── styles/                     # Global styles
│   ├── globals.css            # Global CSS
│   └── yaml-highlighter.css   # YAML syntax highlighting styles
└── nexlayer.yaml              # Nexlayer deployment configuration
```

## 📝 Content Management

### Adding New Documentation Pages

#### 1. Create MDX File
```bash
# Create a new MDX file in the appropriate directory
touch content/docs/your-topic/page.mdx
```

#### 2. Add Frontmatter
```mdx
---
title: "Your Page Title"
description: "Brief description for SEO and navigation"
---

# Your Page Title

Your content here...
```

#### 3. Update Navigation
Edit `components/sidebar.tsx` to add your page to the navigation:

```typescript
// Add to the appropriate section
{
  title: "Your Page",
  href: "/docs/your-topic",
  description: "Brief description"
}
```

### Adding New Sections

#### 1. Create Section Directory
```bash
mkdir -p app/your-section
touch app/your-section/page.tsx
touch app/your-section/layout.tsx  # if needed
```

#### 2. Create Page Component
```typescript
// app/your-section/page.tsx
export default function YourSectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Your Section</h1>
      {/* Your content */}
    </div>
  );
}
```

### MDX Best Practices

#### Using Custom Components
```mdx
---
title: "Example Page"
---

# Example Page

<Callout type="info">
  This is an info callout using our custom component.
</Callout>

<YamlCodeBlock code={`
application:
  name: "my-app"
  pods:
    - name: web
      image: "my-image:latest"
`} showLineNumbers={true} />
```

#### Available MDX Components
- `<Callout>` - Info, warning, error callouts
- `<YamlCodeBlock>` - Syntax-highlighted YAML code blocks
- `<CodeBlock>` - General code blocks with syntax highlighting
- `<FeatureCard>` - Feature showcase cards
- `<StepIndicator>` - Step-by-step process indicators

## 🔧 Development Guide

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking

# Content
pnpm mdx:check    # Validate MDX files
pnpm mdx:build    # Build MDX content
```

### Code Style Guidelines

#### TypeScript
- Use strict TypeScript configuration
- Prefer interfaces over types for public APIs
- Avoid `any` type - use proper typing
- Use JSDoc comments for complex types

#### React Components
- Use functional components with hooks
- Prefer named exports
- Keep components small and focused
- Use TypeScript for all component props

#### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use CSS variables for theming
- Maintain consistent spacing (8px grid)

### Component Development

#### Creating New Components
```typescript
// components/your-component.tsx
import { cn } from "@/lib/utils";

interface YourComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function YourComponent({ className, children }: YourComponentProps) {
  return (
    <div className={cn("your-base-classes", className)}>
      {children}
    </div>
  );
}
```

#### Adding to Global MDX Components
```typescript
// app/mdx-components.tsx
import { YourComponent } from "@/components/your-component";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    YourComponent,
  };
}
```

### Testing Your Changes

```bash
# 1. Start development server
pnpm dev

# 2. Check different pages
# - Home: http://localhost:3000
# - Documentation: http://localhost:3000/docs
# - Learn: http://localhost:3000/learn
# - Launchfile: http://localhost:3000/launchfile

# 3. Test responsive design
# - Use browser dev tools to test mobile/tablet views
# - Check dark/light mode toggle
# - Verify all links work correctly

# 4. Run linting and type checking
pnpm lint
pnpm type-check
```

## 🤝 Contributing

### How to Contribute

#### 1. Fork and Clone
```bash
git clone https://github.com/your-username/documentation.git
cd documentation
git checkout -b feature/your-feature-name
```

#### 2. Make Changes
- Follow the development guidelines above
- Test your changes thoroughly
- Update documentation if needed

#### 3. Commit and Push
```bash
git add .
git commit -m "feat: add new documentation page for X"
git push origin feature/your-feature-name
```

#### 4. Create Pull Request
- Use descriptive PR titles
- Include screenshots for UI changes
- Reference any related issues

### Contribution Guidelines

#### Documentation Content
- Write clear, concise content
- Use active voice
- Include code examples
- Test all code snippets
- Update navigation when adding pages

#### Code Changes
- Follow existing code patterns
- Add TypeScript types
- Include error handling
- Test on multiple devices
- Update tests if applicable

#### Commit Messages
Use conventional commit format:
```
type(scope): description

feat(docs): add new API reference page
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
```

## 🚀 Deployment

### Local Build Testing
```bash
# Build the application
pnpm build

# Test production build locally
pnpm start
```

### Docker Deployment
```bash
# Build Docker image
docker build -t nexlayer-docs .

# Run container
docker run -p 3000:3000 nexlayer-docs
```

### Nexlayer Deployment
The site is automatically deployed to Nexlayer via GitHub Actions:

1. **Push to main branch** triggers automatic deployment
2. **GitHub Actions** builds and deploys the site
3. **Nexlayer** serves the site with global CDN

#### Manual Deployment
```bash
# If you need to deploy manually
curl -X POST https://api.nexlayer.com/deploy \
  -H "Authorization: Bearer $NEXLAYER_API_KEY" \
  -H "Content-Type: application/json" \
  -d @nexlayer.yaml
```

## 🔍 Troubleshooting

### Common Issues

#### MDX Rendering Issues
```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

#### TypeScript Errors
```bash
# Check for type issues
pnpm type-check

# Regenerate TypeScript cache
rm -rf tsconfig.tsbuildinfo
pnpm type-check
```

#### Styling Issues
```bash
# Clear Tailwind cache
rm -rf .next
pnpm dev
```

#### Build Failures
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Performance Optimization

#### Bundle Analysis
```bash
# Analyze bundle size
pnpm build
npx @next/bundle-analyzer
```

#### Image Optimization
- Use Next.js Image component
- Optimize images before adding to public/
- Use appropriate formats (WebP, AVIF)

#### Code Splitting
- Use dynamic imports for large components
- Lazy load non-critical content
- Optimize MDX imports

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Nexlayer Documentation](https://docs.nexlayer.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Need help?** Open an issue on GitHub or join our [Discord community](https://discord.gg/EBW93bQZ).
