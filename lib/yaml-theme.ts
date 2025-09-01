// YAML theme that matches the Nexlayer playground color scheme
export const yamlTheme = {
  'code[class*="language-"]': {
    color: "#d4d4d4",
    fontFamily: "Menlo, Monaco, Courier New, monospace",
    fontSize: "14px",
    lineHeight: "1.5",
    background: "#000000",
    tabSize: 2,
  },
  'pre[class*="language-"]': {
    color: "#d4d4d4",
    fontFamily: "Menlo, Monaco, Courier New, monospace",
    fontSize: "14px",
    lineHeight: "1.5",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
    background: "#000000",
    tabSize: 2,
  },
  // Comments - Gray
  comment: { color: "#a1a1aa" },
  prolog: { color: "#a1a1aa" },
  doctype: { color: "#a1a1aa" },
  cdata: { color: "#a1a1aa" },
  
  // Punctuation - White
  punctuation: { color: "#d4d4d4" },
  
  // Keys/Properties - Blue
  property: { color: "#699edb" },
  tag: { color: "#699edb" },
  selector: { color: "#699edb" },
  "attr-name": { color: "#699edb" },
  atrule: { color: "#699edb" },
  keyword: { color: "#569cd6" },
  
  // Values/Strings - Green
  string: { color: "#49de80" },
  char: { color: "#49de80" },
  url: { color: "#49de80" },
  "attr-value": { color: "#49de80" },
  
  // Numbers - Pink
  number: { color: "#f471b5" },
  
  // Special values - Purple
  boolean: { color: "#c084fc" },
  constant: { color: "#c084fc" },
  symbol: { color: "#c084fc" },
  builtin: { color: "#c084fc" },
  entity: { color: "#c084fc" },
  function: { color: "#c084fc" },
  regex: { color: "#c084fc" },
  important: { color: "#c084fc" },
  
  // Operators and variables
  operator: { color: "#d4d4d4" },
  variable: { color: "#d16969" },
}

// Style for line numbers
export const lineNumberStyle = {
  minWidth: "2.5em",
  paddingRight: "1em",
  textAlign: "right" as const,
  userSelect: "none" as const,
  color: "#555",
}

// Style for the code block container
export const codeBlockStyle = {
  position: "relative" as const,
  marginBottom: "1.5rem",
}
