import styles from "./Uplaod.module.scss"
import Button from '../Common/Button/Button'
import React, { ChangeEvent, useState } from "react";
import { fileUpload } from "@/API/fileUpload";
// import CommonProgress from "../common/Progress";
// import { addFolder } from "@/API/Firestore";
import { useFetchSession } from "../Hooks/UseSession";
import CommonProgress from "../Common/Progress";

export default function UploadFiles() {

  const { session } = useFetchSession();

  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const uploadFile = (event) => {
    const file = event.target.files?.[0];
    console.log(file)
    fileUpload(
      file,
      setProgress,
    //   parentId,
    //   session?.user.email as string,
    //   ownerEmail
    );
  };

  // const uploadFolder = () => {
  //   let payload = {
  //     folderName: folderName,
  //     isFolder: true,
  //     parentId: parentId || "",
  //     userEmail: session?.user.email,
  //     sharedTo: ownerEmail ? [ownerEmail] : [],
  //   };

  //   addFolder(payload);
  //   setFolderName("");
  // };
  return (
    <div className={styles.uploadmain}>
      <Button 
        onClick={() => {
          setFileVisible(!isFileVisible);
          // setFolderVisible(false);
        }}
         title="Add a File" 
         btnClass='btn-success' 
         />
      {isFileVisible ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button title="Create a Folder" btnClass='btn-success' />
      {progress===0 ? <></> : <CommonProgress progress={progress}/>}
    </div>
  )
}
