export default function VotesAnalytics({ info }) {
    return (
        <>
            <h1>
                ¿Estás a favor o en contra del comunismo?
            </h1>
            <h2>
                {info.total ?? 0}
                <small> votos</small>
            </h2>

            <div>
                <div>{info.inFavorPercent ?? 0}% a favor</div>
                <div>{info.againstPercent ?? 0}% en contra</div>
            </div>

            <div>
                Quedan {Math.max(100 - (info.votesLeft ?? 0), 1)} votos para actualizar los datos
            </div>
        </>
    )
}