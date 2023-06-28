import { Fragment, ChangeEvent } from 'react'
import { useForm, FieldValues } from 'react-hook-form';
import { Dialog, Transition } from '@headlessui/react'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cx from 'clsx';

import schema, { categorias, TypeOne } from '@/@Types/datas-schema';
type PropsDataSchema = z.infer<typeof schema>;

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<PropsDataSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      realValue: '0.00',
      // typeOne: 'entrada',
      // category: 'Dinheiro'
    }
  });

  const selectedTypeOne = watch('typeOne');
  const changeValue = watch('value');

  const handleTypeOneChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const type = TypeOne.parse(target.value);
    setValue('typeOne', type);

    if (type === 'entrada' && changeValue != undefined) {
      setValue('realValue', ((parseFloat(changeValue ?? '0.00') * 1) + ''));
    } else if (type === 'saida' && changeValue != undefined) {
      setValue('realValue', ((parseFloat(changeValue ?? '0.00') * (-1)) + ''));
    }
  };

  const handleCategoryChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = target.value;
    const selectedTypeTwo = categorias[selectedTypeOne as z.infer<typeof TypeOne>].find((categoria: any) => categoria.category === selectedCategory)?.type || null;
    if(selectedTypeTwo)
      setValue('typeTwo', selectedTypeTwo);
  };

  const handleValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue('value', value);

    if (selectedTypeOne === 'entrada' && value != undefined) {
      setValue('realValue', ((parseFloat(value ?? '0.00') * 1) + ''));
    } else if (selectedTypeOne === 'saida' && value != undefined) {
      setValue('realValue', ((parseFloat(value ?? '0.00') * (-1)) + ''));
    }
  }

  const onSubmit = async (data: PropsDataSchema) => {
    try {
      if (data) {
        console.log("TESTANDO LOG DE DADOS: ", data);
        // ENVIAR DADOS AQUI!
      }

      onClose();
      reset();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center"
          onClose={handleCancel}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

          <div className="relative p-4 w-full max-w-3xl sm:p-5">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="relative p-4 rounded-lg shadow bg-gray-800">
                <Dialog.Title
                  as='h3'
                  className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600"
                >
                  <div className="text-lg font-semibold text-white">
                    Adicionar Lançamento
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                    onClick={handleCancel}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Fechar modal</span>
                  </button>
                </Dialog.Title>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className={cx(
                          "block mb-2 text-sm font-medium",
                          errors.date ? "text-red-500":"text-white"
                        )}
                      >
                        Data
                      </label>
                      <input
                        type="date"
                        {...register("date")}
                        name="date"
                        id="date"
                        max={new Date().toISOString().split('T')[0]}
                        className={cx(
                          "border text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600ring-gray-600 block w-full p-2.5",
                          (errors.date ? "bg-red-100 border-red-400 text-red-900 placeholder-red-700" : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white")
                          )}
                      />
                      {errors.date && <small className="mt-2 text-xs font-medium text-red-600 dark:text-red-500"> *{`${errors.date.message}`}</small>}
                    </div>
                    <div>
                      <label
                        htmlFor="type"
                        className={cx(
                          "block mb-2 text-sm font-medium",
                          errors.typeOne ? "text-red-500":"text-white"
                        )}
                      >
                        Tipo
                      </label>
                      <select
                        id="type"
                        className={cx("border text-sm rounded-lg block w-full p-2.5",
                          (errors.typeOne ? "bg-red-100 border-red-400 text-red-900 placeholder-red-700" : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white")
                        )}
                        {...register("typeOne")}
                        placeholder={"Selecione o tipo"}
                        onChange={handleTypeOneChange}
                      >
                        <option value="" className={cx(errors.typeOne && "text-red-900")}>-- selecione uma opção --</option>
                        <option value="entrada" className={cx(errors.typeOne && "text-red-900")}>Entrada</option>
                        <option value="saida" className={cx(errors.typeOne && "text-red-900")}>Saida</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="value"
                        className={cx(
                          "block mb-2 text-sm font-medium",
                          errors.value ? "text-red-500":"text-white"
                        )}
                      >
                        Valor
                      </label>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        min="0.00"
                        step="0.001"
                        className={cx(
                          "border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                          (errors.value ? "bg-red-100 border-red-400 text-red-900 placeholder-red-700" : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white")
                        )}
                        onChange={handleValue}
                        placeholder="R$ 2999"
                      />
                      {errors.value && <small className="mt-2 text-xs font-medium text-red-600 dark:text-red-500"> *{`${errors.value.message}`}</small>}
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className={"block mb-2 text-sm font-medium text-white"}
                      >
                        Categoria
                      </label>
                      <select
                        id="category"
                        className={"border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"}
                        {...register("category")}
                        onChange={handleCategoryChange}
                        disabled={!selectedTypeOne}
                      >
                        <option value="">-- selecione uma opção --</option>
                        {selectedTypeOne && categorias[selectedTypeOne as z.infer<typeof TypeOne>].map((categoria: any) => (
                          <option key={categoria.category} value={categoria.category}>
                            {categoria.category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className={cx(
                          "block mb-2 text-sm font-medium",
                          errors.description ? "text-red-500":"text-white"
                        )}
                      >
                        Descrição
                      </label>
                      <textarea
                        id="description"
                        {...register("description")}
                        rows={4}
                        className={cx(
                          "block p-2.5 w-full text-sm rounded-lg border",
                          (errors.description ? "bg-red-100 border-red-400 text-red-900 placeholder-red-700" : "bg-gray-700 border-gray-600 placeholder-gray-400 text-white"),
                        )}
                        placeholder="Escreva uma descrição do lançamento.."
                      ></textarea>
                      {errors.description && <small className="mt-2 text-xs font-medium text-red-600 dark:text-red-500"> *{`${errors.description.message}`}</small>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-gray-900 hover:bg-gray-700 focus:outline-none ring-1 ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Novo Lançamento
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal;