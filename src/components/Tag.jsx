
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
import { useState } from 'react';

 
const Tag = () => {

    const [tag , setTag ] = useState('car');

    // const [gif , setGif] =useState('');

    // const [loading , setLoading] = useState(false);

    // //API call
    // const fetchData = async () => {

    //     setLoading(true);
    //     const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const output =await axios.get(url);

    //     //destructing data from the whole output
    //     const {data} = output;

    //     const imageSource = data?.data?.images?.downsized_large?.url;
    //     setGif(imageSource);

    //     setLoading(false);
    // } 

    // useEffect( () => {
    //     fetchData();
    // },[]);

     const{gif,loading,fetchData}  = useGif(tag);

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">

            <h1 className="mt-[15px] text-2xl underline uppercase font-bold ">Random {tag} GIF</h1>

            {
                (loading)? (<Spinner />):(<img src={gif} alt="" width="450"/>)
            }

            <input 
                  className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
                  onChange={(event) => setTag(event.target.value)}
                  value={tag}/>
           
            <button onClick={() => fetchData(tag)} 
                    className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                GENERATE
            </button>
        </div>
    )
}

export default Tag;