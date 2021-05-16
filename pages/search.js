import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '../Keys'
import Response from '../Response'

const Search = (results) => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term}-Google Search</title>
            </Head>
            <Header />
            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false
    const startIndex = context.query.start || '0'

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then(res => res.json())
    return {
        props: { results: data }
    }

}