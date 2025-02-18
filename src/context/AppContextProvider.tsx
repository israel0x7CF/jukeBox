
import { AudioLibProvider } from "./AudioLibProvider";
import ContextProvicer from "./ContextProvider";

const providers = [
    AudioLibProvider,
    
]

export const AppContextProvider = ContextProvicer(...providers)