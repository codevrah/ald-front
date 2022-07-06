import Link from 'next/link'
import { useVotes } from '../hooks/useVotes'

import styles from '../styles/Home.module.css'

import Seo from '../components/Seo'
import { USERSSEO } from '../../config/seo'

import { questionID } from '../../config'

export default function Users() {
    const { votes, loading } = useVotes(questionID)

    return (
        <div className={styles.container}>
            <Seo {...USERSSEO} />

            <div className={styles.main}>
                <div className={styles.gallery}>
                    {loading ? "Cargando..." : votes?.map(vote => <img key={vote.user.avatar} src={vote.user.avatar} />)}
                </div>
                <Link href='/'>
                    <a> Inicio </a>
                </Link>
            </div>
        </div>
    )
}