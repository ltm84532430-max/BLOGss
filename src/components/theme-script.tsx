const themeScript = `
(() => {
  const stored = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored ?? (systemDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

