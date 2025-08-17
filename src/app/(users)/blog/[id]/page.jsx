"use client";
import {useParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin} from "lucide-react";
import {motion, useScroll} from "framer-motion";
import AnimatedGridBackground from "@/app/Components/UI/Home/HeroInteractiveElement/AnimatedGridBackground";

// Dummy blog data (same as in the main blog page)
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 5 Trends to Watch in 2025",
    excerpt: "Explore the emerging AI technologies that will reshape how businesses operate, from autonomous systems to advanced predictive analytics.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    featured: true,
    content: `
      <p>Just last week, I was having coffee with a CEO who told me something that stopped me in my tracks: "Sarah, our AI system just prevented a $2 million inventory disaster—and we didn't even know it was happening." This isn't science fiction anymore. This is 2025, and AI is quietly revolutionizing how businesses operate behind the scenes.</p>

      <p>As someone who's been tracking AI trends for the past decade, I've never seen such rapid transformation. The companies I work with aren't just experimenting with AI anymore—they're building their entire competitive strategies around it. Here are the five trends that are reshaping the business landscape right now.</p>

      <h2>1. The Rise of Truly Autonomous Operations</h2>

      <p>Remember when "automation" meant simple, repetitive tasks? Those days are over. I recently visited a manufacturing plant where the AI system doesn't just follow pre-programmed rules—it actually <em>thinks</em> about problems and solves them independently.</p>

      <p>The plant manager showed me how their AI detected an unusual vibration pattern in a machine that human technicians had missed. Not only did it identify the issue, but it also:</p>

      <ul>
        <li>Automatically ordered the replacement part</li>
        <li>Scheduled the maintenance during optimal downtime</li>
        <li>Adjusted production schedules across three other facilities</li>
        <li>Notified the supply chain team about potential delays</li>
      </ul>

      <p>The result? What used to be a week-long crisis became a seamless 4-hour maintenance window. <strong>That's the power of autonomous operations.</strong></p>

      <blockquote>
        <p>"We've moved from asking 'What should the AI do?' to 'What shouldn't it handle on its own?'" - Manufacturing Director at a Fortune 500 company</p>
      </blockquote>

      <h2>2. Predictive Analytics That Actually Predict the Future</h2>

      <p>I'll be honest—I used to be skeptical about predictive analytics. Too many companies were calling basic trend analysis "AI prediction." But what I'm seeing now is genuinely impressive.</p>

      <p>Take the retail client I worked with last month. Their AI doesn't just predict that "sales will increase during the holidays." Instead, it tells them:</p>

      <ul>
        <li>Exactly which products will spike in demand (down to specific SKUs)</li>
        <li>Which geographic regions will see the highest growth</li>
        <li>What external factors (weather, events, social trends) will influence buying patterns</li>
        <li>How competitor actions will impact their market share</li>
      </ul>

      <p>The accuracy is mind-blowing. We're talking about 92% prediction accuracy for complex, multi-variable scenarios. This isn't just better forecasting—it's like having a crystal ball for your business.</p>

      <h2>3. Hyper-Personalization at Scale</h2>

      <p>Here's where things get really interesting. I recently helped a financial services company implement AI-driven personalization, and the results were staggering.</p>

      <p>Instead of offering the same three credit card options to everyone, their AI now creates unique financial products for each customer. I'm talking about:</p>

      <ul>
        <li>Personalized interest rates based on individual risk profiles</li>
        <li>Custom reward programs that match spending habits</li>
        <li>Dynamic credit limits that adjust based on life events</li>
        <li>Proactive financial advice tailored to personal goals</li>
      </ul>

      <p>The customer satisfaction scores jumped by 40%, and more importantly, customer lifetime value increased by 65%. When you can offer exactly what each person needs, when they need it, loyalty becomes inevitable.</p>

      <h2>4. Intelligent Process Automation That Thinks</h2>

      <p>Traditional automation was like a very efficient robot—great at following instructions, terrible at handling exceptions. The new wave of intelligent process automation is different. It can handle the messy, complex, "it depends" scenarios that make up most of real business.</p>

      <p>I watched an AI system at a law firm review contracts last month. It didn't just flag standard clauses—it understood context, identified potential conflicts with other agreements, and even suggested alternative language based on the client's industry and risk tolerance.</p>

      <p>The senior partner told me: <em>"It's like having a junior associate who never gets tired, never misses details, and has perfect memory of every case we've ever handled."</em></p>

      <h2>5. The Ethics Revolution</h2>

      <p>This might be the most important trend of all. The companies that are winning with AI aren't just the ones with the best technology—they're the ones building trust through ethical implementation.</p>

      <p>I've seen too many AI projects fail not because of technical issues, but because of trust issues. Customers, employees, and regulators are all asking the same questions:</p>

      <ul>
        <li>How does this AI make decisions?</li>
        <li>What data is it using about me?</li>
        <li>Can I understand and challenge its recommendations?</li>
        <li>Is it fair to everyone?</li>
      </ul>

      <p>The companies that can answer these questions clearly and honestly are the ones building sustainable competitive advantages.</p>

      <h2>What This Means for Your Business</h2>

      <p>After working with dozens of companies on their AI transformation, I've learned that success isn't about having the most advanced technology. It's about having the right foundation.</p>

      <p>Here's what I tell every CEO I work with:</p>

      <p><strong>Start with your data.</strong> AI is only as good as the information it learns from. If your data is messy, incomplete, or biased, your AI will be too.</p>

      <p><strong>Think culture, not just technology.</strong> The most successful AI implementations I've seen happen at companies where people are excited about working alongside AI, not afraid of being replaced by it.</p>

      <p><strong>Begin with problems, not solutions.</strong> Don't ask "How can we use AI?" Ask "What problems are we trying to solve?" Then find the AI tools that address those specific challenges.</p>

      <h2>The Bottom Line</h2>

      <p>We're at an inflection point. The companies that embrace these AI trends now—thoughtfully, ethically, and strategically—will define the next decade of business. The ones that wait will spend the next decade trying to catch up.</p>

      <p>The question isn't whether AI will transform your industry. It's whether you'll be leading that transformation or scrambling to keep up with it.</p>

      <p><em>What's your AI story going to be?</em></p>
    `,
  },
  {
    id: 2,
    title: "Building Scalable Cloud Infrastructure: A Complete Guide",
    excerpt: "Learn how to design and implement cloud solutions that grow with your business needs while optimizing costs and performance.",
    author: "Michael Torres",
    date: "March 12, 2025",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    featured: false,
    content: `
      <p>Three months ago, I got a panicked call at 2 AM. A client's e-commerce platform had crashed during their biggest sale of the year. Traffic had spiked 10x beyond their projections, and their infrastructure couldn't handle it. By the time they got back online, they'd lost over $500,000 in sales and countless customers to competitors.</p>

      <p>This disaster could have been completely avoided with proper scalable cloud infrastructure. As someone who's helped dozens of companies build systems that grow seamlessly with demand, I've learned that scalability isn't just a technical requirement—it's a business survival strategy.</p>

      <p>Let me share what I've learned about building cloud infrastructure that won't let you down when it matters most.</p>

      <h2>The Two Faces of Scalability</h2>

      <p>Before we dive deep, let's clear up a common misconception. When most people think "scalability," they imagine adding more servers when traffic increases. That's only half the story.</p>

      <p>There are actually two types of scaling, and understanding both is crucial:</p>

      <p><strong>Vertical Scaling (Scaling Up):</strong> This is like upgrading your laptop—adding more RAM, a faster processor, or a bigger hard drive. You're making your existing machine more powerful.</p>

      <p><strong>Horizontal Scaling (Scaling Out):</strong> This is like buying more laptops and having them work together. Instead of one super-powerful machine, you have many machines sharing the workload.</p>

      <p>Here's the thing: most successful cloud architectures use both. I learned this the hard way when a client insisted on only vertical scaling. When their single, super-powered server hit its limits, there was nowhere left to go. Don't make that mistake.</p>

      <h2>The Foundation: Microservices Architecture</h2>

      <p>I used to build applications as single, monolithic systems. Everything was connected to everything else. It seemed simpler at the time, but it was a nightmare to scale.</p>

      <p>Then I discovered microservices, and it changed everything.</p>

      <p>Instead of one giant application, you break everything into smaller, independent services. Think of it like a restaurant: instead of one person doing everything (taking orders, cooking, serving, cleaning), you have specialists for each task.</p>

      <p>Here's why this matters for scalability:</p>

      <ul>
        <li><strong>Independent scaling:</strong> If your payment processing gets heavy traffic, you can scale just that service without touching anything else</li>
        <li><strong>Fault isolation:</strong> If one service goes down, the others keep running</li>
        <li><strong>Team independence:</strong> Different teams can work on different services without stepping on each other's toes</li>
        <li><strong>Technology flexibility:</strong> Each service can use the best technology for its specific job</li>
      </ul>

      <p>I recently helped a fintech company migrate from a monolithic architecture to microservices. The result? They went from taking 3 hours to deploy updates (with fingers crossed) to deploying individual services in minutes with zero downtime.</p>

      <h2>The Stateless Revolution</h2>

      <p>This might be the most important concept in scalable architecture, and it's surprisingly simple: <em>don't store important information in your application servers.</em></p>

      <p>Think of your application servers like hotel rooms. Guests (users) check in, do their business, and check out. The room doesn't remember who stayed there or what they did. All the important information is stored at the front desk (your database).</p>

      <p>Why does this matter? Because if you can treat your servers like interchangeable hotel rooms, you can add or remove them at will without losing anything important.</p>

      <p>I worked with a social media startup that learned this lesson the expensive way. Their servers stored user session data locally. When traffic spiked and they tried to add more servers, users kept getting logged out randomly. We spent a weekend migrating to stateless architecture, and suddenly they could scale effortlessly.</p>

      <h2>Load Balancing: The Traffic Director</h2>

      <p>Imagine you're running a popular restaurant. You wouldn't have all your customers line up at one table while others sit empty, right? That's exactly what happens without proper load balancing.</p>

      <p>A load balancer is like a smart host who directs customers to the table that can serve them best. It monitors which servers are busy and which are available, then routes traffic accordingly.</p>

      <p>But here's what most people don't realize: not all load balancing is created equal. I've seen companies use simple round-robin distribution (just taking turns) when they needed intelligent routing based on server capacity and response times.</p>

      <p>The difference? One approach leads to some servers being overwhelmed while others sit idle. The other ensures optimal performance across your entire infrastructure.</p>

      <h2>Choosing Your Cloud Provider Wisely</h2>

      <p>I get asked this question constantly: "Should we go with AWS, Azure, or Google Cloud?" The honest answer is: it depends on your specific needs, not the latest trends.</p>

      <p>Here's my framework for choosing:</p>

      <p><strong>AWS</strong> is like the Swiss Army knife of cloud providers. They have a service for everything, and their scaling tools are mature and battle-tested. If you need maximum flexibility and don't mind a steeper learning curve, AWS is hard to beat.</p>

      <p><strong>Azure</strong> shines if you're already in the Microsoft ecosystem. Their integration with existing Microsoft tools is seamless, and their enterprise support is excellent.</p>

      <p><strong>Google Cloud</strong> excels at data analytics and machine learning. If your scaling needs involve processing massive amounts of data, they're worth serious consideration.</p>

      <p>But here's the real secret: <em>the best cloud provider is the one your team can use effectively.</em> I've seen companies choose AWS because it was "the best" only to struggle for months because their team didn't understand it.</p>

      <h2>The Cost Optimization Balancing Act</h2>

      <p>Scalability without cost control is just expensive over-engineering. I've learned this through some painful client conversations about unexpectedly large cloud bills.</p>

      <p>Here are the three strategies that have saved my clients the most money:</p>

      <p><strong>Right-sizing is everything.</strong> Most companies over-provision their resources "just in case." I use monitoring tools to track actual usage patterns, then adjust resources accordingly. One client cut their cloud costs by 40% just by right-sizing their instances.</p>

      <p><strong>Reserved instances for predictable workloads.</strong> If you know you'll need certain resources for a year or more, reserved instances can save you 30-60% compared to on-demand pricing. It's like buying in bulk.</p>

      <p><strong>Spot instances for flexible workloads.</strong> These are like airline standby tickets—cheaper, but you might get bumped if demand is high. Perfect for batch processing, testing, or any workload that can handle interruptions.</p>

      <h2>Monitoring: Your Early Warning System</h2>

      <p>You can't manage what you can't measure. I learned this when a client's application was slowly degrading over weeks, but nobody noticed until customers started complaining.</p>

      <p>Now I insist on comprehensive monitoring from day one:</p>

      <ul>
        <li><strong>Application Performance Monitoring (APM):</strong> Track how your code is actually performing in production</li>
        <li><strong>Infrastructure monitoring:</strong> Keep tabs on CPU, memory, disk, and network usage</li>
        <li><strong>Log aggregation:</strong> Collect and analyze logs from all your services in one place</li>
        <li><strong>Alerting:</strong> Get notified before problems become disasters</li>
      </ul>

      <p>The goal isn't just to know when things break—it's to predict when they might break and prevent it.</p>

      <h2>Security at Scale</h2>

      <p>As your infrastructure grows, so does your attack surface. I've seen too many companies treat security as an afterthought, only to face serious breaches later.</p>

      <p>Here's my security-first approach to scalable infrastructure:</p>

      <ul>
        <li><strong>Identity and access management:</strong> Every person and service should have the minimum permissions needed to do their job</li>
        <li><strong>Encryption everywhere:</strong> Data should be encrypted both in transit and at rest</li>
        <li><strong>Regular security audits:</strong> What was secure last year might not be secure today</li>
        <li><strong>Network segmentation:</strong> Don't put everything on the same network—create security zones</li>
      </ul>

      <h2>The Reality Check</h2>

      <p>Building scalable cloud infrastructure isn't a one-time project—it's an ongoing journey. The companies that succeed are the ones that treat scalability as a continuous process of monitoring, learning, and adapting.</p>

      <p>I've seen startups handle million-user traffic spikes flawlessly because they built scalability into their DNA from day one. I've also seen established companies struggle with modest growth because they treated scalability as something they'd "figure out later."</p>

      <p>The choice is yours: build for scale now, or scramble to catch up later when your success outgrows your infrastructure.</p>

      <p><strong>What's your scalability story going to be?</strong></p>
    `,
  },
  // Add more blog posts as needed...
];

// Related posts component
const RelatedPosts = ({currentPostId, category}) => {
  const relatedPosts = blogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-gray-800">
      <h3 className="text-2xl font-light mb-8 text-white">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <article className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-[#cabb67] text-xs font-medium uppercase tracking-wide">{post.category}</span>
              <h4 className="text-sm font-light mt-2 group-hover:text-[#cabb67] transition-colors duration-200 line-clamp-2">{post.title}</h4>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <span>{post.readTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Share buttons component
const ShareButtons = ({title, url}) => {
  const shareButtons = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:text-blue-500",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-400 text-sm">Share:</span>
      {shareButtons.map((button) => (
        <a
          key={button.name}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 ${button.color} transition-colors duration-200`}
          aria-label={`Share on ${button.name}`}
        >
          <button.icon size={20} />
        </a>
      ))}
    </div>
  );
};

// Progress indicator component
const ProgressIndicator = () => {
  const {scrollYProgress} = useScroll();

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cabb67] to-[#d4c574] origin-left z-50" style={{scaleX: scrollYProgress}} />;
};

export default function BlogPost() {
  const params = useParams();
  const postId = parseInt(params.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <>
        <AnimatedGridBackground />
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <button className="px-6 py-3 rounded-2xl border border-[#cabb67] text-[#cabb67] hover:bg-[#cabb67] hover:text-black transition-colors duration-200">Back to Blog</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <AnimatedGridBackground />
      <div className="bg-black text-white min-h-screen">
        <ProgressIndicator />
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#cabb67] transition-colors duration-200 mb-8">
              <ArrowLeft size={20} />
              Back to Blog
            </button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6">
          {/* Category */}
          <motion.span initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.2}} className="text-[#cabb67] text-sm font-medium uppercase tracking-wide">
            {post.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.3}}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
            className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-gray-800"
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="text-sm">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm">{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">{post.readTime}</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8, delay: 0.5}} className="mb-12 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-64 sm:h-80 lg:h-96 object-cover" priority />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6}}
            className="prose prose-invert prose-lg max-w-none mb-12"
            style={{
              "--tw-prose-body": "#e5e7eb",
              "--tw-prose-headings": "#ffffff",
              "--tw-prose-links": "#cabb67",
              "--tw-prose-bold": "#ffffff",
              "--tw-prose-counters": "#9ca3af",
              "--tw-prose-bullets": "#6b7280",
              "--tw-prose-hr": "#374151",
              "--tw-prose-quotes": "#9ca3af",
              "--tw-prose-quote-borders": "#cabb67",
              "--tw-prose-captions": "#9ca3af",
              "--tw-prose-code": "#e5e7eb",
              "--tw-prose-pre-code": "#e5e7eb",
              "--tw-prose-pre-bg": "#1f2937",
              "--tw-prose-th-borders": "#374151",
              "--tw-prose-td-borders": "#374151",
            }}
            dangerouslySetInnerHTML={{__html: post.content}}
          />

          {/* Share Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 border-t border-gray-800">
            <ShareButtons title={post.title} url={currentUrl} />
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Share2 size={16} />
              <span>Share this article</span>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-900 rounded-lg p-6 ">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#cabb67] rounded-full flex items-center justify-center text-black font-bold text-xl">{post.author.charAt(0)}</div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{post.author}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A passionate technology writer and industry expert with years of experience in
                  {post.category.toLowerCase()}. Dedicated to sharing insights and helping businesses navigate the evolving tech landscape.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest insights and updates delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#cabb67]"
              />
              <button className="px-6 py-3 bg-[#cabb67] text-black rounded-lg hover:bg-[#b8a85a] transition-colors duration-200 font-medium">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
