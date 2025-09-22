import { motion } from 'framer-motion';
import { researchData, ResearchItem } from '../data/researchData';

interface ResearchProps {
  language: 'en' | 'bn';
}

const Research = ({ language }: ResearchProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {researchData.map((item: ResearchItem, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden"
            >
              {/* Author Section */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/profile.jpg" 
                    alt="Author" 
                    className="w-16 h-16 rounded-full object-cover border-3 border-blue-200"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.author[language]}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{language === 'en' ? 'Published:' : 'প্রকাশিত:'} {new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Research Title */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title[language]}
                </h1>
              </div>

              {/* Abstract Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {language === 'en' ? 'Abstract' : 'সার-সংক্ষেপ'}
                </h2>
                <p className="text-gray-700 leading-relaxed italic">
                  {item.abstract[language]}
                </p>
              </div>

              {/* Keywords */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {language === 'en' ? 'Keywords:' : 'মূল শব্দসমূহ:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.keywords[language].map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Introduction Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                  {language === 'en' ? 'Introduction' : 'ভূমিকা'}
                </h2>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={item.imageUrl}
                    alt={item.title[language]}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {item.introduction[language]}
                </p>
              </div>

              {/* Objectives Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                  {language === 'en' ? 'Objectives / Research Questions' : 'উদ্দেশ্য বা গবেষণা প্রশ্ন'}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.objectives[language]}
                </div>
              </div>

              {/* Methodology Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                  {language === 'en' ? 'Methodology' : 'গবেষণার পদ্ধতি'}
                </h2>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=800&h=300&fit=crop"
                    alt="Research Methodology"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                  {item.methodology[language]}
                </div>
              </div>

              {/* Results Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                  {language === 'en' ? 'Results' : 'ফলাফল'}
                </h2>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop"
                    alt="Research Results"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                  {item.results[language]}
                </div>
              </div>

              {/* Discussion Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                  {language === 'en' ? 'Discussion' : 'আলোচনা'}
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify">
                  {item.discussion[language]}
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">6</span>
                  {language === 'en' ? 'Conclusion' : 'উপসংহার'}
                </h2>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=300&fit=crop"
                    alt="Conclusion"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="text-gray-700 leading-relaxed text-justify">
                  {item.conclusion[language]}
                </div>
              </div>

              {/* References Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">7</span>
                  {language === 'en' ? 'References / Bibliography' : 'তথ্যসূত্র'}
                </h2>
                <div className="space-y-2">
                  {item.references[language].map((reference, i) => (
                    <div key={i} className="text-gray-700 text-sm">
                      <span className="font-medium">[{i + 1}]</span> {reference}
                    </div>
                  ))}
                </div>
              </div>

              {/* Acknowledgement Section */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">8</span>
                  {language === 'en' ? 'Acknowledgement' : 'ধন্যবাদ জ্ঞাপন'}
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify italic">
                  {item.acknowledgement[language]}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;