import { SidebarContext } from "@/context/sidebar-context";
import { useContext } from "react";

const useSidebar = () => {
    const context = useContext(SidebarContext);
    return context;
}

export default useSidebar;