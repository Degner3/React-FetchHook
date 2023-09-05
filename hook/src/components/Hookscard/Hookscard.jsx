import { useFetch } from "../Hooks/useFetch"






export const Hookscard = () => {

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    const {data} = useFetch(url)

    // console.log(data);

    return (
        <div>
            <h2>MasterClass Hook:</h2>
            {data?.map((item, index) => {
                return (
                    <p key={index}>{item.title}</p>
                )
            })}
        
        </div>
    )


}