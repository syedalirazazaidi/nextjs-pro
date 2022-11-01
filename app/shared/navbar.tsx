import Link from 'next/link'
import React from 'react'
interface LinkNav {

    name: string;
    path: string;

}
type LinkArray = LinkNav[]
const links: LinkArray = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Product', path: '/products' },

]

export default function Navbar() {
    return (
        <div>
            {
                links.map(link =>
                    <Link key={link.name} href={link.path}>{link.name} {``}</Link>
                )
            }
        </div>
    )
}
