import { auth, fnLogout } from '@/firebase/authFirebase';

import useSidebar from '@/hooks/useSidebar';
import Image from 'next/image';
import { useContextAuth } from '@/hooks/useAuthUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const TopBar = () => {
    const { isOpen, toggleSidebar } = useSidebar();
    const { isAuthenticated, setIsAuthenticated } = useContextAuth();
    const router = useRouter();

    const Logout = () => {
        fnLogout();
        setIsAuthenticated(false);
    }

    useEffect(() => {
        if(!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated])

    return (
        <header className={"w-full h-16 sm:px-10 bg-transparent flex items-center"}>
            <button
                onClick={toggleSidebar}
                className={"fixed"}
            >{isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(255 255 255 / 0.5)" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(255 255 255 / 0.5)" viewBox="0 0 256 256"><path d="M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z"></path></svg>
            }</button>

            <Image
                className={"select-none ml-24"}
                src={"https://consultoriaformato.com.br/icons/icon_light.png"}
                width={30}
                height={30}
                alt={"Logotipo formato"}
            />

            <button
                type="button"
                className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={Logout}
            >Sair</button>
        </header>
    )
}

export default TopBar;