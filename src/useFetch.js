import { useEffect, useState } from "react";

const useFetch = (url) => {

    // create custom hook for shared getting data from server and using it on multiple components
    // binding useState for reactive property
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log('use Effect');
        // 'http://localhost:8000/blogs'
        fetch(url).then((resp) => {
            console.log(resp);
            if (!resp.ok) {
                throw Error('getting error for resource from server')
            }
            return resp.json()
        }).then((data) => {
            console.log(data);
            setData(data)
            setIspending(false);
            setError(null);
        }).catch((err) => {
            console.log(err.message);
            setIspending(false);
            setError(err.message);
        })
    }, []);
    return {data, isPending, error}
}

export default useFetch;