import React from 'react'
import styles from "./showfiles.module.scss"
import { FetchFiles } from '../Hooks/FetchFiles'
import {AiFillFileText} from "react-icons/ai";
export default function ShowFiles() {
    const {fileList} = FetchFiles();
    console.log(fileList);
  return (
    <div className={styles.filesGrid}>
      {
        fileList.map((file : {imageLink:""})=>{
            return (
                <div className={styles.filesGrid}>
                    <div className={`${styles.files}`}>
                        <AiFillFileText size={70} />
                    </div>
                    <img className={styles.imgLink} src={file.imageLink} />
                </div>
            );
        })
      }
    </div>
  )
}
