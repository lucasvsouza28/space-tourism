import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import bgHome from '../assets/bg-home.jpg';

type ContextType = {
    image: string;
    setImage: (image: string) => void;
}

const Context = createContext({} as ContextType);

type Props = {
    children: ReactNode;
}

export const BackgroundContextProvider = ({
    children
}: Props) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        setImage(bgHome);
    }, [])

    return (
        <Context.Provider value={{
            image,
            setImage,
        }}>
            { children }
        </Context.Provider>
    );
}

export const useBackgroundContext = () => useContext(Context);