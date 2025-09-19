export interface BlogPost {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  type: 'poem' | 'article';
  imageUrl: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: {
      en: "My Journey as a Young Developer and Volunteer",
      bn: "একজন তরুণ ডেভেলপার ও স্বেচ্ছাসেবক হিসেবে আমার যাত্রা"
    },
    content: {
      en: `At just 17 years old, I have embarked on a journey that combines my passion for technology with my desire to serve humanity. Born on December 31, 2007, in Bogura, Bangladesh, I am currently pursuing my Higher Secondary Certificate (HSC) in Science with a focus on Higher Mathematics, maintaining a perfect GPA of 5.00.

My journey as a developer began with a simple observation: many of my fellow HSC students struggled to access quality educational resources due to financial constraints. This realization led me to create HSCian (https://hsian.netlify.app), a completely non-profit educational platform that provides free, high-quality study materials, chapter-wise preparation guides, Smart Shot tips, and even built-in HTML and C compilers.

Beyond HSCian, I have been actively involved with the Bogura Online Blood Donation Organisation (BOBDO), where I serve both as a volunteer and developer. Through this platform, I've helped build a system that serves over 68,000 community members, reducing response time by 40% and potentially saving countless lives.

My academic excellence is reflected not only in my perfect grades but also in my participation in various national competitions. I've reached the semi-finals in prestigious competitions including the Bangladesh Artificial Intelligence Olympiad, ICT Olympiad Bangladesh, and Zero Olympiad focusing on UN SDGs and climate action strategies.

Technology for me is not just about coding; it's about creating solutions that matter. Through Youth Hope BD, another platform I'm developing, I aim to create tools for youth development and social services, furthering my commitment to using technology for social good.

My technical skills span across web development, with expertise in creating responsive applications that serve real-world needs. But more importantly, I believe in using these skills to bridge gaps in society, whether it's in education, healthcare, or community service.

As I continue my journey, I remain committed to the principle that technology should serve humanity, not the other way around. Every line of code I write is an opportunity to make someone's life better, and every project I undertake is a step towards a more equitable world.`,
      bn: `মাত্র ১৭ বছর বয়সে, আমি এমন একটি যাত্রা শুরু করেছি যা প্রযুক্তির প্রতি আমার আবেগ ও মানবতার সেবার আকাঙ্ক্ষাকে একত্রিত করে। ২০০৭ সালের ৩১ ডিসেম্বর বগুড়ায় জন্মগ্রহণ করি। বর্তমানে আমি উচ্চতর গণিতে ফোকাস করে বিজ্ঞান বিভাগে এইচএসসি অধ্যয়নরত, যেখানে আমি নিখুঁত ৫.০০ জিপিএ বজায় রেখেছি।

একজন ডেভেলপার হিসেবে আমার যাত্রা শুরু হয়েছিল একটি সাধারণ পর্যবেক্ষণ থেকে: আমার অনেক সহপাঠী এইচএসসি শিক্ষার্থী আর্থিক সীমাবদ্ধতার কারণে মানসম্মত শিক্ষা সামগ্রী অ্যাক্সেস করতে সংগ্রাম করত। এই উপলব্ধি আমাকে HSCian (https://hsian.netlify.app) তৈরি করতে প্রেরণা দিয়েছে, একটি সম্পূর্ণ অলাভজনক শিক্ষা প্ল্যাটফর্ম যা বিনামূল্যে মানসম্মত অধ্যয়ন সামগ্রী, অধ্যায়ভিত্তিক প্রস্তুতির গাইড, স্মার্ট শট টিপস এবং এমনকি অন্তর্নিহিত HTML ও C কম্পাইলার প্রদান করে।

HSCian এর বাইরে, আমি বগুড়া অনলাইন ব্লাড ডোনেশন অর্গানাইজেশন (BOBDO) এর সাথে সক্রিয়ভাবে জড়িত রয়েছি, যেখানে আমি স্বেচ্ছাসেবক ও ডেভেলপার উভয় হিসেবে কাজ করি। এই প্ল্যাটফর্মের মাধ্যমে আমি ৬৮,০০০+ সম্প্রদায়ের সদস্যদের সেবা করে এমন একটি সিস্টেম তৈরিতে সহায়তা করেছি, যা প্রতিক্রিয়ার সময় ৪০% কমিয়েছে এবং সম্ভাব্যভাবে অগণিত জীবন বাঁচিয়েছে।

আমার শিক্ষাগত উৎকর্ষতা শুধু নিখুঁত গ্রেডেই প্রতিফলিত নয় বরং বিভিন্ন জাতীয় প্রতিযোগিতায় আমার অংশগ্রহণেও। আমি বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড, আইসিটি অলিম্পিয়াড বাংলাদেশ, এবং জাতিসংঘের টেকসই উন্নয়ন লক্ষ্য ও জলবায়ু কর্ম কৌশলের উপর ফোকাসকৃত জিরো অলিম্পিয়াডসহ মর্যাদাপূর্ণ প্রতিযোগিতায় সেমিফাইনাল পর্যন্ত পৌঁছেছি।

আমার কাছে প্রযুক্তি শুধু কোডিং নয়; এটি এমন সমাধান তৈরি করা যা গুরুত্বপূর্ণ। ইয়ুথ হোপ বিডি, আরেকটি প্ল্যাটফর্ম যা আমি উন্নয়নশীল, এর মাধ্যমে আমি যুব উন্নয়ন ও সামাজিক সেবার জন্য সরঞ্জাম তৈরি করার লক্ষ্য রাখি, যা সামাজিক কল্যাণে প্রযুক্তি ব্যবহারের প্রতি আমার অঙ্গীকারকে আরও এগিয়ে নিয়ে যায়।

আমার প্রযুক্তিগত দক্ষতা ওয়েব ডেভেলপমেন্ট জুড়ে বিস্তৃত, যেখানে আমার বাস্তব-বিশ্বের প্রয়োজন মেটানো রেসপনসিভ অ্যাপ্লিকেশন তৈরিতে দক্ষতা রয়েছে। কিন্তু আরও গুরুত্বপূর্ণ বিষয় হলো, আমি বিশ্বাস করি এই দক্ষতাগুলো সমাজের ব্যবধান কমাতে ব্যবহার করতে, তা শিক্ষা, স্বাস্থ্যসেবা বা সমাজসেবায় হোক।

আমার যাত্রা অব্যাহত রাখতে গিয়ে, আমি এই নীতিতে অঙ্গীকারবদ্ধ থাকি যে প্রযুক্তির উচিত মানবতার সেবা করা, তার উল্টোটা নয়। আমি যে প্রতিটি কোড লিখি তা কারো জীবনকে আরও ভালো করার একটি সুযোগ, এবং আমি যে প্রতিটি প্রকল্প হাতে নিই তা আরও ন্যায্য বিশ্বের দিকে একটি পদক্ষেপ।`
    },
    date: "2025-01-15",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop"
  },
  {
    id: "2",
    title: {
      en: "HSCian: Democratizing Education Through Technology",
      bn: "HSCian: প্রযুক্তির মাধ্যমে শিক্ষার গণতন্ত্রীকরণ"
    },
    content: {
      en: `HSCian (https://hsian.netlify.app) represents more than just an educational platform; it embodies my vision of making quality education accessible to every HSC student in Bangladesh, regardless of their economic background. As a current HSC student myself, I intimately understand the challenges faced by my peers in accessing comprehensive study materials.

The genesis of HSCian came from a simple yet profound realization: education should never be a privilege reserved for the wealthy. Too many brilliant minds are held back not by lack of ability, but by lack of access to quality educational resources. This inequality in educational access motivated me to create a solution that could level the playing field.

HSCian offers a comprehensive suite of educational tools:
- All-in-one study materials covering all HSC subjects
- Subject-wise and chapter-wise preparation guides
- Smart Shot tips for quick learning
- Built-in HTML and C programming compilers for practical learning
- Regular updates and new content additions

What makes HSCian special is not just its content, but its approach. Every feature is designed with the student in mind, ensuring that complex concepts are broken down into digestible, understandable segments. The platform's responsive design ensures accessibility across all devices, recognizing that not every student has access to high-end computers.

The impact has been encouraging. Students from various backgrounds have benefited from the platform, and the positive feedback motivates me to continue expanding its capabilities. But more than numbers, it's the individual stories of students who found help when they needed it most that drives my passion for this project.

HSCian is completely free and will always remain so. It's my contribution to the educational ecosystem of Bangladesh, a small step toward ensuring that every student has the opportunity to reach their full potential.

This project has taught me that technology's greatest power lies not in its complexity, but in its ability to solve real human problems. HSCian will continue to evolve, adapting to the changing needs of students and the educational landscape of Bangladesh.`,
      bn: `HSCian (https://hsian.netlify.app) শুধু একটি শিক্ষামূলক প্ল্যাটফর্মের চেয়ে বেশি কিছু; এটি আমার সেই দৃষ্টিভঙ্গিকে মূর্ত করে যেখানে বাংলাদেশের প্রতিটি এইচএসসি শিক্ষার্থী, তাদের অর্থনৈতিক পটভূমি নির্বিশেষে, মানসম্মত শিক্ষার অ্যাক্সেস পেতে পারে। নিজে একজন বর্তমান এইচএসসি শিক্ষার্থী হিসেবে, আমি ব্যাপক অধ্যয়ন সামগ্রী অ্যাক্সেসে আমার সহপাঠীদের মুখোমুখি হওয়া চ্যালেঞ্জগুলো গভীরভাবে বুঝি।

HSCian এর জন্ম হয়েছে একটি সহজ কিন্তু গভীর উপলব্ধি থেকে: শিক্ষা কখনোই ধনীদের জন্য সংরক্ষিত একটি সুবিধা হওয়া উচিত নয়। অনেক মেধাবী মন সামর্থ্যের অভাবে নয়, বরং মানসম্মত শিক্ষা সামগ্রীর অ্যাক্সেসের অভাবে পিছিয়ে থাকে। শিক্ষাগত অ্যাক্সেসে এই অসমতা আমাকে এমন একটি সমাধান তৈরি করতে অনুপ্রাণিত করেছে যা খেলার মাঠকে সমান করতে পারে।

HSCian একটি ব্যাপক শিক্ষামূলক সরঞ্জামের সেট অফার করে:
- সকল এইচএসসি বিষয় কভার করা সব-একসাথে অধ্যয়ন সামগ্রী
- বিষয়ভিত্তিক ও অধ্যায়ভিত্তিক প্রস্তুতির গাইড
- দ্রুত শেখার জন্য স্মার্ট শট টিপস
- ব্যবহারিক শেখার জন্য অন্তর্নিহিত HTML ও C প্রোগ্রামিং কম্পাইলার
- নিয়মিত আপডেট ও নতুন কন্টেন্ট সংযোজন

HSCian কে বিশেষ করে তোলে শুধু এর কন্টেন্ট নয়, বরং এর পদ্ধতি। প্রতিটি ফিচার শিক্ষার্থীকে মাথায় রেখে ডিজাইন করা হয়েছে, নিশ্চিত করে যে জটিল ধারণাগুলো হজমযোগ্য, বোধগম্য অংশে ভাগ করা হয়। প্ল্যাটফর্মের রেসপনসিভ ডিজাইন সকল ডিভাইসে অ্যাক্সেসযোগ্যতা নিশ্চিত করে, স্বীকার করে যে প্রতিটি শিক্ষার্থীর উচ্চমানের কম্পিউটারে অ্যাক্সেস নেই।

প্রভাব উৎসাহব্যঞ্জক হয়েছে। বিভিন্ন পটভূমির শিক্ষার্থীরা প্ল্যাটফর্ম থেকে উপকৃত হয়েছে, এবং ইতিবাচক ফিডব্যাক আমাকে এর ক্ষমতা বিস্তার অব্যাহত রাখতে অনুপ্রাণিত করে। কিন্তু সংখ্যার চেয়ে বেশি, এটি সেই শিক্ষার্থীদের ব্যক্তিগত গল্প যারা সবচেয়ে প্রয়োজনের সময় সাহায্য পেয়েছে যা এই প্রকল্পের প্রতি আমার আবেগকে চালিত করে।

HSCian সম্পূর্ণ বিনামূল্যে এবং সবসময় তাই থাকবে। এটি বাংলাদেশের শিক্ষা পরিবেশে আমার অবদান, প্রতিটি শিক্ষার্থী তাদের পূর্ণ সম্ভাবনায় পৌঁছানোর সুযোগ পায় তা নিশ্চিত করার দিকে একটি ছোট পদক্ষেপ।

এই প্রকল্প আমাকে শিখিয়েছে যে প্রযুক্তির সবচেয়ে বড় শক্তি এর জটিলতায় নয়, বরং প্রকৃত মানবিক সমস্যা সমাধানের ক্ষমতায়। HSCian বিকশিত হতে থাকবে, শিক্ষার্থীদের পরিবর্তনশীল প্রয়োজন ও বাংলাদেশের শিক্ষাক্ষেত্রের সাথে খাপ খাইয়ে নিতে।`
    },
    date: "2024-12-20",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://i.postimg.cc/zDQ8gh3Z/Sleep-paralyse-20250727-013506-0000.png"
  },
  {
    id: "3", 
    title: {
      en: "Divine Gratitude",
      bn: "ঐশী কৃতজ্ঞতা"
    },
    content: {
      en: `In the silence of dawn, I whisper Your name,
Through the trials and triumphs, Your love stays the same,
O Creator of worlds, both seen and unseen,
In Your infinite mercy, I find what I mean.

Each breath that I take is a gift from above,
Each moment of life wrapped in Your endless love,
Though shadows may fall and the path may seem long,
In Your guidance I trust, in Your light I grow strong.

The stars speak Your glory, the earth sings Your praise,
Through the nights and the mornings, through all of my days,
Forever grateful, forever in awe,
Of Your boundless compassion, without any flaw.`,
      bn: `ভোরের নীরবতায়, আমি ফিসফিস করে বলি তোমার নাম,
পরীক্ষা ও বিজয়ের মধ্য দিয়ে, তোমার ভালোবাসা থাকে একই রকম,
হে দৃশ্য ও অদৃশ্য জগতের স্রষ্টা,
তোমার অসীম দয়ায়, আমি খুঁজে পাই আমার অর্থ।

আমার প্রতিটি শ্বাস উপর থেকে একটি উপহার,
জীবনের প্রতিটি মুহূর্ত তোমার অন্তহীন ভালোবাসায় মোড়ানো,
যদিও ছায়া পড়তে পারে এবং পথ দীর্ঘ মনে হতে পারে,
তোমার পথনির্দেশনায় আমি আস্থা রাখি, তোমার আলোয় আমি শক্তিশালী হয়ে উঠি।

তারারা বলে তোমার মহিমা, পৃথিবী গায় তোমার প্রশংসা,
রাত ও সকালের মধ্য দিয়ে, আমার সব দিন ধরে,
চিরকাল কৃতজ্ঞ, চিরকাল বিস্মিত,
তোমার সীমাহীন করুণায়, কোনো ত্রুটি ছাড়াই।`
    },
    date: "2024-11-25",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "poem",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop"
  },
  {
    id: "4",
    title: {
      en: "The Power of Small Actions",
      bn: "ছোট কাজের শক্তি"
    },
    content: {
      en: `Sometimes I reflect on how small actions can create ripple effects that transform lives. When I started HSCian, it was just an idea to help a few classmates. Today, it serves students across Bangladesh. When I joined BOBDO as a volunteer, I never imagined we would serve over 68,000 community members.

This experience has taught me that we don't need to wait until we're older or more experienced to make a difference. At 17, I've learned that age is not a barrier to creating meaningful change. What matters is the willingness to see problems around us and take action, no matter how small.

Every line of code I write, every feature I add to HSCian, every volunteer hour I spend with BOBDO - these are all small actions. But collectively, they represent my belief that technology should serve humanity and that each of us has the power to contribute to something greater than ourselves.

The beauty of small actions lies in their accessibility. Not everyone can donate millions or start large corporations, but everyone can help a classmate understand a difficult concept, contribute to a community project, or use their skills to solve a local problem.

As I continue my journey, I remain committed to the philosophy that consistent small actions, driven by genuine care for others, can create the change we want to see in the world. Whether it's through education, technology, or community service, I believe we all have the capacity to make a difference - one small action at a time.`,
      bn: `মাঝে মাঝে আমি ভাবি কীভাবে ছোট কাজগুলো তরঙ্গের প্রভাব তৈরি করতে পারে যা জীবনকে রূপান্তরিত করে। যখন আমি HSCian শুরু করি, এটি ছিল কেবল কয়েকজন সহপাঠীকে সাহায্য করার একটি ধারণা। আজ এটি সমগ্র বাংলাদেশের শিক্ষার্থীদের সেবা করে। যখন আমি BOBDO তে একজন স্বেচ্ছাসেবক হিসেবে যোগ দিয়েছিলাম, আমি কখনো কল্পনা করতে পারিনি যে আমরা ৬৮,০০০+ সম্প্রদায়ের সদস্যদের সেবা করব।

এই অভিজ্ঞতা আমাকে শিখিয়েছে যে পরিবর্তন আনতে আমাদের বয়স্ক বা অভিজ্ঞ হওয়া পর্যন্ত অপেক্ষা করতে হয় না। ১৭ বছর বয়সে, আমি শিখেছি যে অর্থবহ পরিবর্তন সৃষ্টির জন্য বয়স কোনো বাধা নয়। যা গুরুত্বপূর্ণ তা হলো আমাদের চারপাশের সমস্যাগুলো দেখার ইচ্ছা এবং পদক্ষেপ নেওয়া, যতই ছোট হোক না কেন।

আমি যে প্রতিটি কোড লিখি, HSCian এ যে প্রতিটি ফিচার যোগ করি, BOBDO তে যে প্রতিটি স্বেচ্ছাসেবী ঘন্টা কাটাই - এগুলো সবই ছোট কাজ। কিন্তু সামগ্রিকভাবে, এগুলো আমার বিশ্বাসকে প্রতিনিধিত্ব করে যে প্রযুক্তির উচিত মানবতার সেবা করা এবং আমাদের প্রত্যেকের নিজেদের চেয়ে বড় কিছুতে অবদান রাখার শক্তি রয়েছে।

ছোট কাজের সৌন্দর্য তাদের অ্যাক্সেসযোগ্যতায় নিহিত। সবাই লক্ষ লক্ষ টাকা দান করতে বা বড় কর্পোরেশন শুরু করতে পারে না, কিন্তু সবাই একজন সহপাঠীকে কঠিন ধারণা বুঝতে সাহায্য করতে, একটি সম্প্রদায়ের প্রকল্পে অবদান রাখতে, বা স্থানীয় সমস্যা সমাধানে তাদের দক্ষতা ব্যবহার করতে পারে।

আমার যাত্রা অব্যাহত রাখতে গিয়ে, আমি এই দর্শনে অঙ্গীকারবদ্ধ থাকি যে অন্যদের প্রতি প্রকৃত যত্ন দ্বারা চালিত ধারাবাহিক ছোট কাজগুলো বিশ্বে আমরা যে পরিবর্তন দেখতে চাই তা তৈরি করতে পারে। শিক্ষা, প্রযুক্তি বা সম্প্রদায়ের সেবার মাধ্যমে হোক, আমি বিশ্বাস করি আমাদের সবার পরিবর্তন আনার ক্ষমতা রয়েছে - একবারে একটি ছোট কাজ করে।`
    },
    date: "2024-10-30",
    author: {
      en: "Md Ridoan Mahmud Zisan",
      bn: "মো. রিদোয়ান মাহমুদ জিসান"
    },
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop"
  }
];