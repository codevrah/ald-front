import {DiscussionEmbed} from "disqus-react"

const DisqusComments = ({ questionID }) => {
  const disqusShortname = "votes-app"
  const disqusConfig = {
    url: "https://your-site-url/post-slug",
    identifier: questionID, // Single post id
    title: questionID // Single post title
  }
  return (
    <div style={{width: '90%', marginTop: '4rem'}}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;
