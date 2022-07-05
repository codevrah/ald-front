import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession, signIn } from 'next-auth/react'
import { useGetInfoData } from '../hooks/useGetInfoData';
import createVote from '../services/createVote';
import { useEffect } from 'react';
import getUserHasVoted from '../services/getUserHasVoted';
import DisqusComments from '../components/DisqusComments';
import Link from 'next/link';

const questionID = '62c26d22b006199562243905'

export default function Home() {
  const { data: session } = useSession();
  const { votes: votesInfo } = useGetInfoData();

  useEffect(() => {
    if(session) {
      const { accessToken } = session;
      const response = getUserHasVoted(
        accessToken, questionID
      );
    }
  }, [session])

  async function handleClick(type) {
    if(session){
      const { accessToken } = session;
      const { vote } = await createVote({ 
        question: questionID, type: type
      }, accessToken)
      console.log(vote)
    }
    else{
      signIn()
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Votes App</title>
        <meta name="description" content="Votes APP" />
        <link
          href={`https://fonts.googleapis.com/css2?family=DM+Sans&display=optional`}
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1>
          ¿Estás a favor o en contra del comunismo?
        </h1>

        <h2>
          {votesInfo.total ?? 0}
          <small> votos</small> 
        </h2>

        <div>
          <div>{votesInfo.inFavorPercent ?? 0}% a favor</div>
          <div>{votesInfo.againstPercent ?? 0}% en contra</div>
        </div>

        <div>
          Quedan {Math.max(100 - (votesInfo.votesLeft ?? 0), 1)} votos para actualizar los datos
        </div>

        <div>
          <Link href='/users'>
            <a> Ver Votantes </a>
          </Link>
        </div>

        {
          session ? 
            <>
              <button onClick={() => handleClick('inFavor')} type="button">A Favor !</button>
              <button onClick={() => handleClick('against')} type="button">En Contra !</button>
            </>
          : 
            <button onClick={signIn} type="button">Login</button>
        }

        <DisqusComments questionID={questionID} />
      </main>
    </div>
  )
}
