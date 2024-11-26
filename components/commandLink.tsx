import { useRouter } from "next/navigation"; // App Router hook

function CommandLink({ href, children }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href); // Works for App Router
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

export default CommandLink;

