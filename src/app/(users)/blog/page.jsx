// app/blog/page.js
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";
import Image from "next/image";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 5 Trends to Watch in 2025",
    excerpt: "Explore the emerging AI technologies that will reshape how businesses operate, from autonomous systems to advanced predictive analytics.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Cloud Infrastructure: A Complete Guide",
    excerpt: "Learn how to design and implement cloud solutions that grow with your business needs while optimizing costs and performance.",
    author: "Michael Torres",
    date: "March 12, 2025",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Data Privacy in the Digital Age: What Every Business Needs to Know",
    excerpt: "Understanding GDPR, CCPA, and other data protection regulations while building trust with your customers through transparent practices.",
    author: "Emily Rodriguez",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Machine Learning Operations: From Model to Production",
    excerpt: "A comprehensive guide to MLOps best practices, including model deployment, monitoring, and continuous integration workflows.",
    author: "David Kim",
    date: "March 8, 2025",
    readTime: "15 min read",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Remote Teams",
    excerpt: "Essential security measures and tools to protect your distributed workforce from evolving cyber threats.",
    author: "Lisa Zhang",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "The Rise of Edge Computing: Why It Matters for Your Business",
    excerpt: "Discover how edge computing is revolutionizing data processing and what it means for latency, security, and scalability.",
    author: "James Wilson",
    date: "March 3, 2025",
    readTime: "7 min read",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Sustainable Tech: Building Green Software Solutions",
    excerpt: "How to reduce your software's carbon footprint through efficient coding practices and sustainable architecture design.",
    author: "Anna Martinez",
    date: "March 1, 2025",
    readTime: "9 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
  {
    id: 8,
    title: "API Design Patterns: Creating Developer-Friendly Interfaces",
    excerpt: "Best practices for designing RESTful APIs that are intuitive, scalable, and easy to maintain for long-term success.",
    author: "Robert Chang",
    date: "February 28, 2025",
    readTime: "11 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    featured: false,
  },
];

const categories = ["All", "AI & Technology", "Cloud Computing", "Security", "Machine Learning", "Infrastructure", "Sustainability", "Development"];

export default function Blog() {
  return (
    <>
      <AnimatedGridBackground />
      <div className="bg-black text-white min-h-screen">
        {/* Header */}
        <div className="py-16 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-light text-center mb-4">Blog</h1>
          <p className="text-center text-gray-400 text-lg">Insights, tutorials, and thoughts on technology</p>
        </div>

        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button key={category} className="px-4 py-2 text-sm border border-gray-800 text-gray-400 hover:border-[#cabb67] hover:text-[#cabb67] transition-colors duration-200">
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div key={post.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-[#cabb67] text-sm font-medium uppercase tracking-wide">Featured • {post.category}</span>
                  <h2 className="text-3xl font-light mt-4 mb-4 leading-tight">{post.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div>
                  <Image src={post.image} alt={post.title} width={600} height={400} className="w-full rounded-lg" />
                </div>
              </div>
            ))}
        </div>

        {/* Blog Cards Grid */}
        <div className=" mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article key={post.id} className="group border-1 rounded border-[#cbba67] p-2 cursor-pointer">
                  <div className="mb-4  overflow-hidden rounded-lg">
                    <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-[#cabb67] text-sm font-medium uppercase tracking-wide">{post.category}</span>

                    <h3 className="text-xl font-light leading-tight group-hover:text-[#cabb67] transition-colors duration-200">{post.title}</h3>

                    <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center pb-20">
          <button className="px-8 py-3 rounded-2xl border border-[#cabb67] text-[#cabb67] hover:bg-[#cabb67] hover:text-black transition-colors duration-200">Load More Posts</button>
        </div>
      </div>
    </>
  );
}
