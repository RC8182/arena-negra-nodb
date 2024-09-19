import Link from "next/link";


export const NavLink = ({idioma, datos}) => {

    const Links =( idioma==='es')
    ? datos?.esp.navbar.links
    : datos?.ing.navbar.links;
    
        return (
        <nav className="flex space-x-4">
              {Links?.map((e) => (              
                <div key={e.title} className="box-border">
                <Link className="hover:text-gold" href={e.url}>
                {e.title}
                </Link>
                </div>
              ))}
        </nav>
    )
  }
