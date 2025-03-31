import { useState, useEffect } from "preact/hooks";

const getCookie = (cookies: string | null, name: string) => {
  return cookies
    ?.split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
};

export default function ToggleTheme({ cookie }: { cookie: string | null }) {
  const [theme, setTheme] = useState(getCookie(cookie, "theme") || 'light');

  useEffect(() => {
    console.log("Button init: ", theme)
    if (!document.documentElement.classList.contains(theme)) {
      document.documentElement.classList.add(theme);
    }
    return () => {
      document.documentElement.classList.remove(theme);
    }
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/`;
  }

  return (
    <button
      onClick={toggle}
      style={{ background: 'none', border: 'none', cursor: 'pointer', color: "white" }}
    >
      {theme === 'light' ? (
        <SunIcon className=".rotate-in" />
      ) : (
        <MoonIcon className=".rotate-out" />
      )}
    </button>
  );
}


const SunIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
    class={className}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0">
    </g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
    </g>
    <g id="SVGRepo_iconCarrier">
      <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5">
      </circle>
      <path d="M12 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M12 21V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M22 12L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M3 12L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M19.0708 4.92969L18.678 5.32252" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M5.32178 18.6777L4.92894 19.0706" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M19.0708 19.0703L18.678 18.6775" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M5.32178 5.32227L4.92894 4.92943" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
    </g>
  </svg>
);

const MoonIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
    class={className}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
  </svg>
);