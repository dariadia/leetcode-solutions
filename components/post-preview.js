import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
}) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${slug}`}
          href="/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
