import React from 'react'
import ApplicationStore from './stores/application-store'

const stores = {
    ApplicationStore,
}

export const StoreContext = React.createContext()

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
    )
}

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);
