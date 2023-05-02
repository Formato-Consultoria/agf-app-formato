import useSidebar from '@/hooks/useSidebar';

import cx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const SideBar = () => {
    const { isOpen } = useSidebar();
    const router = useRouter();
    const [isOpenedList, setIsOpenedList] = useState(false);

    function toggleOpenedList() {
        setIsOpenedList(!isOpenedList);
    }

    const textRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const text = textRef.current?.textContent;
        const baseFontSize = "text-base";
        let fontSizeClass = baseFontSize;
        const textLength = text?.length ?? 0;
    
        if (textLength > 18) {
          const relativeFontSize = Math.max(
            0.5,
            1 - (textLength - 18) / (50 - 18)
          );
          
          const fontSizeVariants = ["text-xs", "text-sm"];
          const fontSizeIndex = Math.floor(
            relativeFontSize * (fontSizeVariants.length - 1)
          );
          fontSizeClass = fontSizeVariants[fontSizeIndex];
        }
    
        textRef.current?.classList.add(fontSizeClass);
    }, [isOpen]);

    return (
        <aside className={cx("sidebar-arrow-t", isOpen ? "w-72" : "w-20", "hover:w-72 transition-width duration-500 ease h-full fixed top-0 left-0 ml-[20px] mt-16 bg-background/90 backdrop-brightness-200 backdrop-blur-sm primary rounded-t-md group overflow-auto scrollbar-none z-50")}>
            <ul className={"h-auto w-full py-4 flex flex-col"}>
                <li className={"w-auto mx-5 py-4 inline-flex relative"}>
                    <Link
                        href={"/"}
                        className={cx(router.pathname === "/dashboard" && "style-li-l", "inline-flex items-center gap-2")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="rgb(255 255 255)" viewBox="0 0 256 256"><path d="M102,109.5v-72a6,6,0,0,0-8-5.66A102,102,0,0,0,27.7,146.59a6,6,0,0,0,8.9,4.11l62.4-36A6,6,0,0,0,102,109.5ZM90,106l-51.66,29.8Q38,131.91,38,128A90.1,90.1,0,0,1,90,46.42ZM216.57,77.45c-.08-.16-.16-.32-.25-.47a3,3,0,0,0-.27-.42A102,102,0,0,0,128,26a6,6,0,0,0-6,6v93L42.2,171.46a6,6,0,0,0-2.15,8.22A102,102,0,0,0,230,128,101.41,101.41,0,0,0,216.57,77.45ZM134,38.2a90,90,0,0,1,68.76,39.74L134,118ZM128,218a90.48,90.48,0,0,1-74.38-39.31l77.31-45,.17-.1,77.67-45.24A90,90,0,0,1,128,218Z"></path></svg>
                        <p
                            ref={textRef}
                            className={cx(
                                "w-5/6",
                                "group-hover:flex", (isOpen ? "flex" : "hidden"),
                                "text-white/80 hover:text-white uppercase font-medium"
                            )} // transition-display duration-300 ease-in-out
                        >Painel</p>
                    </Link>
                </li>

                <li className={"w-auto mx-5 py-4 inline-flex relative"}>
                    <Link
                        href={"/metrics"}
                        className={cx(router.pathname === "/metrics" && "style-li-l", "inline-flex items-center gap-2 relative")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="rgb(255 255 255)" viewBox="0 0 256 256"><path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V161.52l53.76-53.76a6,6,0,0,1,8.48,0L128,135.51,185.52,78H160a6,6,0,0,1,0-12h40a6,6,0,0,1,6,6v40a6,6,0,0,1-12,0V86.48l-61.76,61.76a6,6,0,0,1-8.48,0L96,120.49l-58,58V202H224A6,6,0,0,1,230,208Z"></path></svg>
                        <p
                            ref={textRef}
                            className={cx(
                                "w-5/6",
                                "group-hover:flex", (isOpen ? "inline-flex" : "hidden"),
                                "transition-width duration-300 ease-in-out text-white/80 hover:text-white uppercase font-medium"
                            )}
                        >Metricas</p>
                    </Link>
                </li>

                <li className={"w-auto mx-5 py-4 inline-flex flex-col relative"}>
                    <button
                        onClick={toggleOpenedList}
                        className="inline-flex items-center text-base font-normal group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="rgb(255 255 255)" viewBox="0 0 256 256"><path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path></svg>
                        <p 
                            ref={textRef}
                            className={cx(
                                "w-5/6 ml-2",
                                "group-hover:flex", (isOpen ? "inline-flex" : "hidden"),
                                "text-white/80 hover:text-white uppercase font-medium"
                            )} // transition-width duration-300 ease-in-out
                        >Funções e Operações</p>
                        <svg className={cx("group-hover:flex", isOpen ? "inline-flex" : "hidden")} width="22" height="22" fill="rgb(255 255 255)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>

                    <ul className={cx(isOpenedList ? "inline-flex" : "hidden", "py-2 space-y-2 flex-col")}>
                        <li className={cx(!isOpen && "pt-4 inline-flex transition delay-300", "group-hover:mx-0 group-hover:py-0 transition group-hover:delay-300")}>
                            <button
                                className={cx(
                                    "font-mediumn",
                                    "group-hover:pl-7 group-hover:text-sm",
                                    (isOpen ? "pl-7 text-sm" : "text-lg text-center"),
                                    "inline-flex items-center w-full text-white/75 group hover:text-white/95"
                                )}
                            >
                                <span className={cx(isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:inline-flex")}>Download</span>
                                <span className={cx(!isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:hidden")}>D</span>
                            </button>
                        </li>

                        <li className={cx(!isOpen && "pt-4 inline-flex transition delay-300", "group-hover:mx-0 group-hover:py-0 transition group-hover:delay-300")}>
                            <button
                                className={cx(
                                    "font-mediumn",
                                    "group-hover:pl-7 group-hover:text-sm",
                                    (isOpen ? "pl-7 text-sm" : "text-lg text-center"),
                                    "inline-flex items-center w-full text-white/75 group hover:text-white/95"
                                )}
                            >
                                <span className={cx(isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:inline-flex")}>Exportar para PDF</span>
                                <span className={cx(!isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:hidden")}>EPDF</span>
                            </button>
                        </li>

                        <li className={cx(!isOpen && "pt-4 inline-flex transition delay-300", "group-hover:mx-0 group-hover:py-0 transition group-hover:delay-300")}>
                            <button
                                className={cx(
                                    "font-mediumn",
                                    "group-hover:pl-7 group-hover:text-sm",
                                    (isOpen ? "pl-7 text-sm" : "text-lg text-center"),
                                    "inline-flex items-center w-full text-white/75 group hover:text-white/95"
                                )}
                            >
                                <span className={cx(isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:inline-flex")}>Exportar para PowerPoint</span>
                                <span className={cx(!isOpen ? "inline-flex delay-300" : "hidden", "group-hover:delay-300 group-hover:hidden")}>EPP</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar;