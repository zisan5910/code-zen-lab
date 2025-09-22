import { motion } from 'framer-motion';
import { blogData, BlogPost } from '../data/blogData';
import { Calendar } from 'lucide-react';

interface BlogProps {
  language: 'en' | 'bn';
}

const Blog = ({ language }: BlogProps) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {blogData.map((post: BlogPost, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="section-card overflow-hidden"
              >
                {/* Post Header - Facebook style */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src="/profile.jpg" 
                      alt="Profile" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {post.author[language]}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        {post.type === 'poem' && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs ml-2">
                            {language === 'en' ? 'Poetry' : 'কবিতা'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {post.title[language]}
                    </h2>
                    
                    {/* Content Image */}
                    {post.imageUrl && (
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={post.imageUrl}
                          alt={post.title[language]}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    {/* Embedded Content */}
                    {post.embeddedContent && (
                      <div className="flex justify-center">
                        <iframe 
                          src={post.embeddedContent.src}
                          width={post.embeddedContent.width || 500}
                          height={post.embeddedContent.height || 400}
                          style={{ border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {post.content[language]}
                    </div>

                    {/* Project Links */}
                    {post.projectLinks && post.projectLinks.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-3">
                          {post.projectLinks.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                            >
                              <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                />
                              </svg>
                              {link.label[language]}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Blog;