import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { useInfo } from '../hooks/useInfo';
import getUserHasVoted from '../services/getUserHasVoted';

import DisqusComments from '../components/DisqusComments';
import VotesAnalytics from '../components/VotesAnalytics';
import VotesActions from '../components/VotesActions';
import AuthControls from '../components/AuthControls';

import Seo from '../components/Seo';
import { INDEXSEO } from '../config/seo';

import { questionID } from '../config';

export default function Home() {
  const { data: session } = useSession();
  const { info, loading } = useInfo();

  useEffect(() => {
    if(session) {
      const { accessToken } = session;
      const response = getUserHasVoted(
        accessToken, questionID
      );
      console.log(response)
    }
  }, [session])

  return (
    <div className={styles.container}>
      <Seo {...INDEXSEO} />

      <main className={styles.main}>
        <h1>
          ¿Estás a favor o en contra del comunismo?
        </h1>

        {loading 
          ? <p>"Cargando..."</p> 
          : <VotesAnalytics info={info} loading={loading} /> 
        }

        <div>
          <Link href='/users'>
            <a> Ver Votantes </a>
          </Link>
        </div>
        
        <VotesActions session={session} questionID={questionID} signIn={signIn} />

        <AuthControls session={session} signIn={signIn} signOut={signOut} />

        <DisqusComments questionID={questionID} />
      </main>
    </div>
  )
}
