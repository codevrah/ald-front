import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession, signIn } from 'next-auth/react'
import { useGetInfoData } from '../hooks/useGetInfoData';
import { useGetVotesData } from '../hooks/useGetVotesData';
import createVote from '../services/createVote';

export default function Home() {
  const { data: session } = useSession();
  const { votes: votesInfo } = useGetInfoData();
  const { votes: votesData } = useGetVotesData();

  const handleClick = (e) => {
    e.preventDefault()

    if(session){
      // const { vote } = createVote({ user: session.user, type: 'up' })
      console.log(session)
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
        {session?.user.id}
        <p className={styles.description}>
          ¿Estás a favor o en contra del comunismo?
        </p>

        <h1 className={styles.title}>
          11,000,001
          <small className={styles.votes}>votos</small> 
        </h1>

        <div className={styles.progress}>
          <div className={styles.with} style={{width: '35%'}}>35%</div>
          <div className={styles.withOut} style={{width: '65%'}}>65%</div>
        </div>

        <button onClick={handleClick} className={styles.glowOnHover} type="button">Votar !</button>
      </main>
    </div>
  )
}
