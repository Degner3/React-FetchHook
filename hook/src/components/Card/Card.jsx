import { UseFetch } from "../UseFetch/UseFetch";



export const Card = () => {

  const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos")
    
    console.log(data);

    return (
      <>
        {data && data.map((item, index) => {
                return (
                    <p key={index}>{item.title}</p>
                )
            })}


        {/* {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <p>
                    <span>Id:</span>
                  {item.id}
                </p>
                <p>
                <span>Title:</span>
                  {item.title}
                </p>
                <p>
                <span>userId:</span>
                  {item.userId}
                </p>
                <p>
                <span>Completed:</span>
                  {item.completed}
                </p>
              </div>
            )
          })} */}
      </>
    )
}