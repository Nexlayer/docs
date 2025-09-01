# Contributing to Nexlayer Documentation

Thank you for your interest in contributing to the Nexlayer documentation! This guide will help you get started and understand our development process.

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (recommended: Node.js 20)
- **pnpm** (install with `npm install -g pnpm`)
- **Git** for version control

### Setup
```bash
# 1. Fork and clone the repository
git clone https://github.com/your-username/documentation.git
cd documentation

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev

# 4. Open http://localhost:3000
```

## 📋 Contribution Types

### 1. **Documentation Content**
- Adding new documentation pages
- Updating existing content
- Fixing typos and grammar
- Improving clarity and readability

### 2. **Code Improvements**
- Bug fixes
- Performance optimizations
- New features
- UI/UX improvements

### 3. **Infrastructure**
- Build system improvements
- CI/CD enhancements
- Development tooling
- Testing infrastructure

## 🏗️ Project Structure

### Key Directories
- **`/app`** - Next.js pages and layouts
- **`/components`** - Reusable React components
- **`/content`** - MDX documentation files
- **`/lib`** - Utility functions and configurations
- **`/data`** - Static data files (OpenAPI specs, etc.)
- **`/styles`** - Global CSS and styling

### File Naming Conventions
- **Components**: PascalCase (e.g., `MyComponent.tsx`)
- **Pages**: kebab-case (e.g., `my-page.tsx`)
- **Utilities**: camelCase (e.g., `myUtility.ts`)
- **Content**: kebab-case (e.g., `my-documentation.mdx`)

## 📝 Content Guidelines

### Writing Style
- **Clear and concise** - Get to the point quickly
- **Active voice** - Use active voice when possible
- **Consistent terminology** - Use the same terms throughout
- **Code examples** - Include practical, working examples

### MDX Content Structure
```mdx
---
title: "Page Title"
description: "Brief description for SEO and navigation"
---

# Page Title

Brief introduction to the topic.

## Section Heading

Content with examples:

```yaml
application:
  name: "my-app"
  pods:
    - name: web
      image: "my-image:latest"
```

<Callout type="info">
  Important information or tips.
</Callout>
```

### Available MDX Components
- `<Callout>` - Info, warning, error callouts
- `<YamlCodeBlock>` - Syntax-highlighted YAML
- `<CodeBlock>` - General code blocks
- `<FeatureCard>` - Feature showcase cards
- `<StepIndicator>` - Step-by-step processes

## 🔧 Development Guidelines

### Code Style

#### TypeScript
```typescript
// Use interfaces for public APIs
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

// Use functional components with hooks
export function MyComponent({ title, description, className }: ComponentProps) {
  const [state, setState] = useState(false);
  
  return (
    <div className={cn("base-classes", className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

#### React Components
- Use functional components with hooks
- Prefer named exports
- Keep components small and focused
- Use TypeScript for all props

#### Styling
```typescript
// Use Tailwind CSS classes
// Follow mobile-first responsive design
// Use CSS variables for theming
<div className="bg-background text-foreground p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
    Responsive Heading
  </h1>
</div>
```

### Component Development

#### Creating New Components
1. **Create the component file**
   ```bash
   touch components/my-component.tsx
   ```

2. **Add TypeScript interface**
   ```typescript
   interface MyComponentProps {
     title: string;
     children: React.ReactNode;
     className?: string;
   }
   ```

3. **Implement the component**
   ```typescript
   export function MyComponent({ title, children, className }: MyComponentProps) {
     return (
       <div className={cn("base-styles", className)}>
         <h2>{title}</h2>
         {children}
       </div>
     );
   }
   ```

4. **Add to MDX components if needed**
   ```typescript
   // app/mdx-components.tsx
   import { MyComponent } from "@/components/my-component";
   
   export function useMDXComponents(components) {
     return {
       ...components,
       MyComponent,
     };
   }
   ```

### Testing Your Changes

#### Local Testing
```bash
# 1. Start development server
pnpm dev

# 2. Test different pages
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
npx tsc --noEmit
```

#### Cross-browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Verify mobile responsiveness
- Check accessibility features

## 🔄 Git Workflow

### Branch Naming
```
feature/add-new-docs-page
fix/typo-in-readme
docs/update-api-reference
style/improve-button-design
```

### Commit Messages
Use conventional commit format:
```
type(scope): description

feat(docs): add new API reference page
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
style(components): improve button hover states
```

#### Commit Types
- **feat**: New features
- **fix**: Bug fixes
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Pull Request Process

#### 1. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

#### 2. Make Changes
- Follow coding guidelines
- Test your changes thoroughly
- Update documentation if needed

#### 3. Commit Changes
```bash
git add .
git commit -m "feat: add new documentation page for X"
```

#### 4. Push and Create PR
```bash
git push origin feature/your-feature-name
```

#### 5. Pull Request Guidelines
- **Title**: Clear, descriptive title
- **Description**: Explain what and why (not how)
- **Screenshots**: Include for UI changes
- **Testing**: Describe how you tested
- **Related Issues**: Link to any related issues

## 🧪 Testing Guidelines

### Component Testing
```typescript
// components/__tests__/my-component.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../my-component';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
```

### E2E Testing
```typescript
// e2e/my-component.spec.ts
import { test, expect } from '@playwright/test';

test('my component works correctly', async ({ page }) => {
  await page.goto('/my-page');
  await expect(page.locator('h1')).toContainText('Expected Title');
});
```

## 📊 Performance Guidelines

### Bundle Size
- Keep components small and focused
- Use dynamic imports for large components
- Optimize images and assets

### Core Web Vitals
- **LCP**: Optimize largest contentful paint
- **FID**: Minimize first input delay
- **CLS**: Prevent cumulative layout shift

### Monitoring
```bash
# Analyze bundle size
pnpm build
npx @next/bundle-analyzer
```

## 🔒 Security Guidelines

### Content Security
- Sanitize user-generated content
- Validate external links
- Use HTTPS for all external resources

### Environment Variables
- Never commit sensitive data
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Keep server-side variables secure

## 🚀 Deployment

### Local Build Testing
```bash
# Build the application
pnpm build

# Test production build locally
pnpm start
```

### Deployment Process
1. **Push to main branch** triggers automatic deployment
2. **GitHub Actions** builds and deploys
3. **Nexlayer** serves the site with global CDN

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Tools
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Testing Library](https://testing-library.com/)

## 🤝 Getting Help

### Questions and Support
- **GitHub Issues**: For bugs and feature requests
- **Discord**: [Join our community](https://discord.gg/EBW93bQZ)
- **Documentation**: Check existing docs first

### Code Review Process
1. **Automated Checks**: CI/CD runs tests and linting
2. **Review**: At least one maintainer reviews your PR
3. **Feedback**: Address any feedback or requested changes
4. **Merge**: Once approved, your changes are merged

## 🎉 Recognition

### Contributors
- All contributors are listed in the repository
- Significant contributions are highlighted
- Community members are recognized

### Guidelines
- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices

---

Thank you for contributing to Nexlayer documentation! Your contributions help make our platform better for everyone.
