import Image from 'next/image';

const Navbar = () => {
    return (
        <header className={"w-full h-16 sm:px-10 bg-transparent flex items-center justify-between"}>
            <button>
                icon
            </button>

            <Image
                className={"select-none"}
                src={"/images/Logotipo_light.png"}
                width={100}
                height={50}
                alt={"Logotipo formato"}
            />
        </header>
    )
}

export default Navbar;