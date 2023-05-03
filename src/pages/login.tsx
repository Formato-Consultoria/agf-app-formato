import { auth, fnLogin } from "@/firebase/authFirebase";
import { useContextAuth } from "@/hooks/useAuthUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const { isAuthenticated, setIsAuthenticated } = useContextAuth();
    const router = useRouter();

    const LoginComEmailESenha = async (email: string, senha: string) => {
        await fnLogin(email, senha);
        router.push("/");
        setIsAuthenticated(true);
    }

    useEffect(() => {
        if (isAuthenticated) {
          router.push("/");
        }

        router.push("/login");
    }, [isAuthenticated]);

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12 md:h-72 md:w-[430px]">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                        onChange={(e) => {setEmailAddress(e.target.value)}}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => LoginComEmailESenha(emailAddress, password)}
                >Login</button>
            </form>
        </div>
    )
}