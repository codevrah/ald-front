const INFAVORVOTE = 'inFavor'
const AGAINSTVOTE = 'against'

export default function VotesActions({ session, questionID, signIn }) {

    async function handleVote(type) {
        if (session) {
            const { accessToken } = session;
            const { vote } = await createVote({
                question: questionID, type: type
            }, accessToken)
            console.log(vote)
        }
        else {
            signIn()
        }
    }

    return (
        <>
            {session && <div>
                <button onClick={() => handleVote(INFAVORVOTE)} type="button">A Favor !</button>
                <button onClick={() => handleVote(AGAINSTVOTE)} type="button">En Contra !</button>
            </div>}
        </>
    )
}