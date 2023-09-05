import { useFetch } from "../Hooks/useFetch"






export const Hookscard = () => {

    const url = 'https://jsonplaceholder.typicode.com/todos/'

    const {data} = useFetch(url)

    // console.log(data);

    return (
        <div>
            {data?.map((item, index) => {
                return (
                    <p key={index}>{item.title}</p>
                )
            })}
        
        </div>
    )


}