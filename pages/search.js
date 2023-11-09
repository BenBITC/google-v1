import Head from "next/head";
import SearchHeader from "../components/SearchHeader"
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import {useRouter} from "next/router"
import ImageResults from "../components/ImageResults";

export default function Search({results}) {
  // console.log(results)
  const router = useRouter()

  // Check if router.query.term is defined before using it in the page title
  const goigleTitle = router.query.searchType ? `Goigle Imidges` : "Goigle Sorch";
  const pageTitle = router.query.term ? `${router.query.term} - ${goigleTitle}` : `${goigleTitle}`;

  return (
    <div>
        <Head>
            <title>{pageTitle}</title>
        </Head>

        {/* Search Header */}
            <SearchHeader/>
        {/* Search web and images Results */}
          {router.query.searchType === "image" ? (
            <ImageResults results={results}/>
          ) : (
            <SearchResults results={results}/>
          )}

    </div>
  )
}


export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1"
  const mockData = false

  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response)=>response.json())

  return {
    props:{
      results: data
    }
  }
}
