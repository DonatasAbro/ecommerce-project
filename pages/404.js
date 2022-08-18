import Link from "next/link";

export default function FourOhFour() {
  return (
    <div
      className="bg-secondary d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-white">404 - Page Not Found</h1>
      <Link href="/">
        <a
          className="text-white p-2 border rounded border-white"
          style={{ textDecoration: "none" }}
        >
          <b>Go back home</b>
        </a>
      </Link>
    </div>
  );
}
