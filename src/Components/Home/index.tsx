import React from 'react'
import { signIn ,signOut } from 'next-auth/react';
import { useFetchSession } from '../Hooks/UseSession'
import styles from "./home.module.scss"
import Button from '@/Components/Common/Button/Button';
import Image from 'next/image';

export default function Topbar() {
    const {session} = useFetchSession();
    console.log(session);
  return (
    <div className={styles.authBtn}>
        {
            session ? (
                // <Button
                //     btnClass='btn-primary'
                //     title='Sign-Out'
                //     onClick={()=>signOut}
                // />
                <img onClick={() => signOut()} src={session?.user.image as string} className={styles.profileImg} alt="Profile Image"/>
            ) : (
                <Button
                    btnClass='btn-primary'
                    title='Sign Up'
                    onClick={()=>signIn()}
                />
            )
        }
      
    </div>
  )
}
