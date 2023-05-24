import { ReactNode, useState } from 'react';
import SideBar from './sidebar';
import TopBar from './topbar';

import cx from 'clsx';

import { SidebarContext } from '@/context/sidebar-context';
import useSidebar from '@/hooks/useSidebar';
import Footer from './footer';

interface PropsLayout {
    children: ReactNode,
}

const Main = ({ children }: PropsLayout) => {
    const { isOpen } = useSidebar();
  
    return (
      <main
        className={cx("w-auto", (isOpen ? "ml-[338px]" : "ml-[130px]"), "min-h-full h-auto transition-width duration-500 ease flex flex-col gap-5 py-2 pr-2")}
      >
        {children}
      </main>
    );
}

const Layout = ({ children }: PropsLayout) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{ isOpen: isSidebarOpen, toggleSidebar }}>
            <div className={"w-full h-auto"}>
                <TopBar />
                <SideBar />
                <Main>
                    {children}
                </Main>
                <Footer />
            </div>
        </SidebarContext.Provider>
    )
}

export default Layout;