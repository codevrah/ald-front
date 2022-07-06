export default function AuthControls({session, signIn, signOut}) {
    return (
        <div>
            {!session && <button onClick={signIn} type="button">Login</button>}
            {session && <button onClick={signOut} type="button">Logout</button>}
        </div>
    )
}