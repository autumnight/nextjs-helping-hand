import Link from "next/link";
import {useRouter} from "next/router";

export default function Navigation() {
  const router = useRouter();
  console.log(router)
  return (
    <ul className="menu">
      <li>
        <Link href="/">
          <a className={router.pathname ==='/' ? 'active' : ''}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className={router.pathname ==='/about' ? 'active' : ''}>About</a>
        </Link>
      </li>

      <li>
        <Link href="/blog">
          <a className={router.pathname ==='/blog' ? 'active' : ''}>Blog</a>
        </Link>
      </li>
    </ul>
  )
}
