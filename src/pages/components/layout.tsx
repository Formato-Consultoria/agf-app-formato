import { ReactNode } from "react";
import Aside from "./aside";
import Navbar from "./navbar";

import cx from 'clsx';

interface PropsLayout {
    className?: string
    children: ReactNode,
}

const Layout = ({ children, className }: PropsLayout) => {
    return (
        <div className={cx(className)}>
            <Navbar />
            <Aside />
            
            <main>{children}</main>

            {/* <Footer /> */}
        </div>
    )
}

export default Layout;