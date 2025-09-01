// Global type definitions for Nexlayer Documentation

// MDX Content Types
export interface MDXFrontmatter {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
}

export interface MDXPage {
  frontmatter: MDXFrontmatter;
  slug: string;
  content: string;
}

// Navigation Types
export interface SidebarItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  badge?: string;
  children?: SidebarItem[];
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

// API Documentation Types
export interface Endpoint {
  path: string;
  method: string;
  summary: string;
  description?: string;
  tags: string[];
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses: Response[];
  security?: SecurityRequirement[];
}

export interface Parameter {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  required: boolean;
  schema: Schema;
  description?: string;
}

export interface RequestBody {
  required: boolean;
  content: Record<string, MediaType>;
}

export interface MediaType {
  schema: Schema;
  example?: any;
}

export interface Response {
  code: string;
  description: string;
  content?: Record<string, MediaType>;
}

export interface Schema {
  type: string;
  properties?: Record<string, Schema>;
  required?: string[];
  items?: Schema;
  $ref?: string;
  example?: any;
}

export interface SecurityRequirement {
  [key: string]: string[];
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CalloutProps extends BaseComponentProps {
  type: 'info' | 'warning' | 'error' | 'success';
  title?: string;
}

export interface CodeBlockProps extends BaseComponentProps {
  code: string | Record<string, string>;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export interface YamlCodeBlockProps extends BaseComponentProps {
  code: string;
  showLineNumbers?: boolean;
  filename?: string;
}

export interface FeatureCardProps extends BaseComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

export interface StepIndicatorProps extends BaseComponentProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export interface Step {
  title: string;
  description: string;
  status: 'pending' | 'current' | 'completed' | 'error';
}

// Technology Types
export interface Technology {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: string;
  url?: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

// Template Types
export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  technologies: string[];
  yamlConfig: string;
  features: string[];
}

// Deployment Types
export interface DeploymentStep {
  id: number;
  title: string;
  description: string;
  details: string;
  code?: string;
  language?: string;
}

// Search Types
export interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'api' | 'guide';
  tags: string[];
}

// Theme Types
export interface Theme {
  name: string;
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Event Types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: string;
  stack?: string;
}

// Configuration Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    discord: string;
  };
}

export interface NavConfig {
  mainNav: SidebarItem[];
  sidebarNav: SidebarSection[];
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  once?: boolean;
}


