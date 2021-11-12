import React,{ createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
const projData = 'https://mocki.io/v1/f7be2628-55ec-4fb8-8839-7540a84c4905'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [project, setProject] = useState([])

    useEffect(() => {
        fetchData(projData)
    }, [])

    // Axios Fetch
    const fetchData = async (url) => {

        setIsLoading(true)
        axios.get(url)
        .then(res => {
            // console.log(res.data)
            setProject(res.data)   
            setIsLoading(false)    
        })
        // .catch(error => console.log(error))
        // fetch(url)
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data)
        //     setPData(data)   
        //     setIsLoading(false)         
        // })
        .catch(error => console.log(error))
    }

    const perPage = 1

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
    
    const offset = currentPage * perPage

    const pageCount = Math.ceil(project.length / perPage)

    // console.log(project)
  
    return (
        <GlobalContext.Provider 
            value={{
                project,
                offset,
                perPage,
                handlePageClick,
                pageCount,
                isLoading
            }}        
        >
          {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)