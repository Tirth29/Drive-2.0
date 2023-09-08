import { onSnapshot , collection } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect,useState } from "react";

const files = collection(database,"files");

export const FetchFiles = () => {
    const [fileList,setFileList] = useState <arrayType> ([]);
    useEffect(() => {
        return onSnapshot(files,(response) => {
            setFileList(
                response.docs.map((item)=>{
                    return { ...item.data(),id:item.id};
                })
            );
        });
    }, []);
    return { fileList };
};