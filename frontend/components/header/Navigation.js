import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  )
}
