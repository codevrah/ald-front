import Link from 'next/link';
import { useGetVotesData } from '../hooks/useGetVotesData';
import styles from '../styles/Home.module.css'

const questionID = '62c26d22b006199562243905'

export default function Users() {
    const { votes } = useGetVotesData(questionID);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.gallery}>
                    {votes?.map(vote => <img key={vote.user.avatar} src={vote.user.avatar} />)}
                </div>
                <Link href='/'>
                    <a> Inicio </a>
                </Link>
            </div>
        </div>
    )
}