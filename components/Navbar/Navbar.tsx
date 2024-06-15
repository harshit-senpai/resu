import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";

type LinkType = [
  string,
  string,
  "link" | "default" | "destructive" | "outline" | "secondary" | "ghost"
];

const Links: LinkType[] = [
  ["/builder", "Builder", "outline"],
  ["/parser", "Parser", "default"],
];

const Navbar = () => {
  return (
    <header
      aria-label="Navbar"
      className="flex h-14 items-center border-b border-gray-300/60 dark:border-secondary/70 light:drop-shadow-xl px-3 lg:px-12"
    >
      <div className="flex items-center h-10 justify-between w-full">
        <Link href="/">
          <h2 className="text-primary text-lg font-semibold">Resu.</h2>
        </Link>
        <nav aria-label="Navbar options" className="flex items-center gap-4">
          {Links.map(([href, text, variant]) => (
            <Link href={href} key={href}>
              <Button className="font-semibold px-6 h-9" variant={variant}>
                {text}
              </Button>
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
