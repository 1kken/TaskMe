import {Link, useLocation} from "react-router"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

export default function NavBreadcrumb() {
    const location = useLocation()
    const pathnames = location.pathname.split("/").filter((x) => x) // split & remove empty

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Root link (Home/Dashboard/etc.) */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathnames.map((name, index) => {
                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/")
                    const isLast = index === pathnames.length - 1

                    return (
                        <div key={routeTo} className="flex items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="capitalize">{name}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={routeTo} className="capitalize">
                                            {name}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

