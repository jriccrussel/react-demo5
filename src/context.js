import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const projData = 'https://mocki.io/v1/f7be2628-55ec-4fb8-8839-7540a84c4905'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const hello = "hello"
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData(projData);
    }, [])

    // Axios Fetch
    const fetchData = async (url) => {

        // axios.get(url)
        // fetch(url)
        // .then(res => {
        //     console.log(res.data)
        // })
        // .catch(error => console.log(error))
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data)            
        })
        .catch(error => console.log(error))
    }
  
    return (
        <GlobalContext.Provider value={hello}>
          {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)