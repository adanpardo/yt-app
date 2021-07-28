import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) =>{
    const [videos, setVideos] = useState([]);

    useEffect(() => { // equivalent to componentDidMount(){}
        search(defaultSearchTerm);
      }, [defaultSearchTerm]); //empty array means run this function only 1 time

      const search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          },
        });
    
        setVideos(response.data.items);
      
      };

      return [videos,search];
};

export default useVideos;