    import React, {createContext, useState } from 'react'

    export const searchContext=createContext('')

    function SearchContextShare({children}) {
        const [searchKey,setSearchKey]=useState("")
    return (
        <div>
            <searchContext.Provider value={{searchKey,setSearchKey}}>
            {
                children
            }
            </searchContext.Provider>
        </div>
    )
    }

    export default SearchContextShare