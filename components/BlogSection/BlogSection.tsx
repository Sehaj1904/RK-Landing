import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    image: '/blog_image.png',
    author: 'Prabhash Mishra',
    date: '1 Jan 2023',
    status: 'Today',
    title: 'Small business & Startup',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Tax & Audit', 'Management'],
  },
  {
    image: '/blog_image.png',
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    title: 'Scale-Up Company Offer',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Tax', 'Research', 'Complience'],
  },
  {
    image: '/blog_image.png',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    title: 'Growing Business Package',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-medium">EXPLORE OUR BLOGS</span>
          <h2 className="text-3xl font-bold mt-2">Accelerate Digital Transformation</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    {post.status && (
                      <>
                        <span>•</span>
                        <span className="text-orange-500">{post.status}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    {post.status && (
                      <>
                        <span>•</span>
                        <span className="text-orange-500">{post.status}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#2B4570] text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Show more blogs
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

