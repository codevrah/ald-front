import Head from "next/head";

export default function Seo({title, description}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            
            <link
                href={`https://fonts.googleapis.com/css2?family=DM+Sans&display=optional`}
                rel="stylesheet"
            />
        </Head>
    )
}