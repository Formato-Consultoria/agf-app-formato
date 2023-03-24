export interface UseStateInterface<T> {
    value?: T;
    setValue?: React.Dispatch<React.SetStateAction<T>>;
}