import Layout from "@/components/layout"
import Modal from "@/components/modal";
import { useState } from "react"

export default function ManagementData() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [data, setData] = useState([
        {
            data: "4/10/2023",
            valor: "R$ 1.250,00",
            tipo: "Entradas",
            descricao: "Descrição",
            categoria: "Cheque",
            valorReal: "R$ 1.250,00",
            tipo2: ""
        },
        {
            data: "1/1/2022",
            valor: "R$ 3.440,00",
            tipo: "Entradas",
            descricao: "DEscrição",
            categoria: "Crédito",
            valorReal: "R$ 3.440,00",
            tipo2: ""
        },
        {
            data: "1/2/2022",
            valor: "R$ 1.200,00",
            tipo: "Saidas",
            descricao: "DEscrição",
            categoria: "Fornecedor CMV",
            valorReal: "-R$ 1.200,00",
            tipo2: "Variável"
        },
        {
            data: "1/3/2022",
            valor: "R$ 950,00",
            tipo: "Saidas",
            descricao: "DEscrição",
            categoria: "Aluguel",
            valorReal: "-R$ 950,00",
            tipo2: "Fixo"
        },
        {
            data: "1/4/2022",
            valor: "R$ 5.880,00",
            tipo: "Entradas",
            descricao: "DEscrição",
            categoria: "Crédito",
            valorReal: "R$ 5.880,00",
            tipo2: ""
        },
        {
            data: "1/5/2022",
            valor: "R$ 62,50",
            tipo: "Saidas",
            descricao: "DEscrição",
            categoria: "Lanches",
            valorReal: "-R$ 62,50",
            tipo2: "Fixo"
        },
        {
            data: "1/6/2022",
            valor: "R$ 680,00",
            tipo: "Saidas",
            descricao: "DEscrição",
            categoria: "Produto Limpeza",
            valorReal: "-R$ 680,00",
            tipo2: "Fixo"
        },
        {
            data: "1/7/2022",
            valor: "R$ 1.000,00",
            tipo: "Entradas",
            descricao: "DEscrição",
            categoria: "Débito",
            valorReal: "R$ 1.000,00",
            tipo2: ""
        },
        // {
        //     data: "1/8/2022",
        //     valor: "R$ 1.500,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Manutenção",
        //     valorReal: "-R$ 1.500,00",
        //     tipo2: "Fixo"
        // },
        // {
        //     data: "1/9/2022",
        //     valor: "R$ 250,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Comissão",
        //     valorReal: "-R$ 250,00",
        //     tipo2: "Variável"
        // },
        // {
        //     data: "1/10/2022",
        //     valor: "R$ 3.000,00",
        //     tipo: "Entradas",
        //     descricao: "DEscrição",
        //     categoria: "Crediário",
        //     valorReal: "R$ 3.000,00",
        //     tipo2: ""
        // },
        // {
        //     data: "1/11/2022",
        //     valor: "R$ 320,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Embalagens",
        //     valorReal: "-R$ 320,00",
        //     tipo2: "Variável"
        // },
        // {
        //     data: "1/12/2022",
        //     valor: "R$ 10.000,00",
        //     tipo: "Entradas",
        //     descricao: "DEscrição",
        //     categoria: "Crédito",
        //     valorReal: "R$ 10.000,00",
        //     tipo2: ""
        // },
        // {
        //     data: "1/13/2022",
        //     valor: "R$ 500,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Combustível",
        //     valorReal: "-R$ 500,00",
        //     tipo2: "Variável"
        // },
        // {
        //     data: "1/14/2022",
        //     valor: "R$ 150,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Tx Máquina de Cartão",
        //     valorReal: "-R$ 150,00",
        //     tipo2: "Variável"
        // },
        // {
        //     data: "1/15/2022",
        //     valor: "R$ 1.800,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Comissão",
        //     valorReal: "-R$ 1.800,00",
        //     tipo2: "Variável"
        // },
        // {
        //     data: "1/16/2022",
        //     valor: "R$ 900,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Agua",
        //     valorReal: "-R$ 900,00",
        //     tipo2: "Fixo"
        // },
        // {
        //     data: "1/17/2022",
        //     valor: "R$ 35,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Produto Limpeza",
        //     valorReal: "-R$ 35,00",
        //     tipo2: "Fixo"
        // },
        // {
        //     data: "1/18/2022",
        //     valor: "R$ 1.200,00",
        //     tipo: "Saidas",
        //     descricao: "DEscrição",
        //     categoria: "Mão de Obra",
        //     valorReal: "-R$ 1.200,00",
        //     tipo2: "Variável"
        // }
    ]);

    const onClose = () => {
        setIsOpenModal(false);
    };

    const onToggle = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <Layout>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <div className="pb-4 px-2 flex">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm border rounded-lg w-80 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                    </div>

                    {/* ABRE MODAL */}
                    <button
                        onClick={onToggle}
                        type="button"
                        className="text-white focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto mt-1 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700"
                    >Novo Lançamento</button>

                    <Modal
                        isOpen={isOpenModal}
                        onClose={onClose}
                    />
                </div>
                <table className="w-full text-sm text-lefttext-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>{['Data', 'Valor', 'Tipo', 'Descrição', 'Categoria', 'Valor Real', 'Tipo 2', 'Action']
                            .map((columnName, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                <td className="px-6 py-4"> {/*font-medium whitespace-nowrap text-white*/}
                                    {item.data}
                                </td>
                                <td className="px-6 py-4">
                                    {item.valor}
                                </td>
                                <td className="px-6 py-4">
                                    {item.tipo}
                                </td>
                                <td className="px-6 py-4">
                                    {item.descricao}
                                </td>
                                <td className="px-6 py-4">
                                    {item.categoria}
                                </td>
                                <td className="px-6 py-4">
                                    {item.valorReal}
                                </td>
                                <td className="px-6 py-4">
                                    {item.tipo2}
                                </td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <button className="font-medium text-blue-500 hover:underline">Edit</button>
                                    <button className="font-medium text-red-500 hover:underline">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-col items-center my-2">
                    <span className="text-sm text-gray-400">
                        Mostrando <span className="font-semibold text-white">1</span>-<span className="font-semibold text-white">10</span> de <span className="font-semibold text-white">100</span> Entradas
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-l bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                            Prev
                        </button>
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium border-0 border-l rounded-r bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
                            Next
                            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}