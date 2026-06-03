export type Language = "ja" | "en";

export const translations = {
  ja: {
    // Navigation
    nav: {
      home: "ホーム",
      about: "講師について",
      lessons: "レッスン内容",
      pricing: "料金",
      faq: "よくある質問",
      contact: "お問い合わせ",
      menuOpen: "メニューを開く",
    },

    // Hero Section
    hero: {
      tagline: "日本人のための英語レッスン",
      title: "あなたの目標に合わせた",
      titleHighlight: "パーソナル英語レッスン",
      description: "会話、ビジネス、旅行、試験対策まで。日本人学習者の悩みを理解する講師が、あなたの英語力を丁寧にサポートします。",
      cta: "体験レッスンを予約する",
      ctaSecondary: "料金を見る",
      profilePhotoPlaceholder: "プロフィール写真",
      experiencedTeacher: "経験豊富な講師",
      clearTeaching: "丁寧でわかりやすい指導",
    },

    // About Section
    about: {
      tagline: "講師について",
      title: "日本人学習者のための英語講師",
      intro1: "はじめまして。私は英語講師として、長年にわたり日本人学習者の皆さんに英語を教えてきました。",
      intro2: "日本人学習者が英語を学ぶ際に直面する課題 ― 発音の難しさ、文法の違い、会話への抵抗感 ― を深く理解しています。だからこそ、それぞれの生徒さんに合ったアプローチで、無理なく着実に上達できるようサポートしています。",
      intro3: "「英語を話せるようになりたい」「自信を持って海外旅行に行きたい」「仕事で英語を使いたい」 ― そんな皆さんの目標達成をお手伝いできることを楽しみにしています。",
      features: {
        experienced: {
          title: "経験豊富な指導",
          description: "多くの日本人学習者に英語を教えてきた経験があります。",
        },
        supportive: {
          title: "丁寧なサポート",
          description: "一人ひとりのペースに合わせて、焦らず丁寧に指導します。",
        },
        understanding: {
          title: "日本人の悩みを理解",
          description: "発音、文法、リスニングなど、日本人特有の課題を熟知しています。",
        },
      },
      background: {
        title: "私の経歴について",
        story1: "私はエンジニアとして、アメリカの大手企業で働いた経験があります。その後、自分の会社を立ち上げ、現在は日本で生活しています。",
        story2: "これまで海外で働き、さまざまな国の人たちと関わる中で、英語は単なる教科ではなく、仕事・旅行・人間関係・新しいチャンスにつながる大切なツールだと実感してきました。",
        story3: "日本に来てからは、本業のかたわら英語を教える活動も続けており、これまで多くの日本人学習者をサポートしてきました。日本人が英語を学ぶときにつまずきやすいポイントを理解し、一人ひとりの目標に合わせて、わかりやすく丁寧にレッスンを行っています。",
        points: {
          us: "アメリカの大手企業での勤務経験",
          startup: "自分の会社を立ち上げた経験",
          teaching: "長年の英語指導経験",
        },
      },
    },

    // Benefits Section
    benefits: {
      tagline: "英語を学ぶ理由",
      title: "英語ができると、世界が広がります",
      description: "英語は単なるスキルではなく、新しい可能性への扉です。あなたの目標が何であれ、英語力があれば、その実現がより身近になります。",
      items: {
        travel: {
          title: "海外旅行をもっと楽しく",
          description: "現地での会話がスムーズになり、より深い旅行体験ができます。",
        },
        career: {
          title: "仕事の幅が広がる",
          description: "英語力はキャリアアップや転職の大きな武器になります。",
        },
        connect: {
          title: "世界中の人と繋がる",
          description: "異なる文化の人々とコミュニケーションが取れるようになります。",
        },
        study: {
          title: "留学・海外移住の準備",
          description: "海外での生活や学習に必要な英語力を身につけられます。",
        },
        confidence: {
          title: "自信がつく",
          description: "英語を話せる自分に自信が持て、新しいことに挑戦できます。",
        },
        media: {
          title: "英語コンテンツを楽しむ",
          description: "映画、音楽、本などを原語で楽しめるようになります。",
        },
      },
    },

    // Method Section
    method: {
      tagline: "指導方針",
      title: "実践的で、わかりやすいレッスン",
      description: "「英語を使える」ようになることを最優先に考えています。理論だけでなく、実際に使える英語力を身につけていただきます。",
      items: {
        customized: {
          title: "目標に合わせたカリキュラム",
          description: "会話力向上、試験対策、ビジネス英語など、あなたの目標に合わせてレッスン内容をカスタマイズします。",
        },
        conversation: {
          title: "実践的な会話練習",
          description: "実際の場面で使える表現を重視。自然な会話ができるよう、たくさん話す機会を作ります。",
        },
        grammar: {
          title: "わかりやすい文法解説",
          description: "複雑な文法も、日本語との違いを踏まえて丁寧に説明します。「なぜそうなるか」を理解できます。",
        },
        pronunciation: {
          title: "発音・リスニング強化",
          description: "日本人が苦手とする発音やリスニングを重点的にサポート。聞き取れる・伝わる英語を目指します。",
        },
        review: {
          title: "復習サポート（希望者のみ）",
          description: "ご希望に応じて、宿題や復習用の教材をお渡しします。レッスン以外の時間も効果的に学べます。",
        },
      },
    },

    // Lesson Types Section
    lessonTypes: {
      tagline: "レッスン内容",
      title: "あなたに合ったレッスンを選べます",
      description: "目的やレベルに合わせて、最適なレッスンタイプをお選びいただけます。複数のタイプを組み合わせることも可能です。",
      items: {
        conversation: {
          title: "日常英会話",
          description: "日常生活で使える自然な会話力を身につけます。趣味の話から時事問題まで、幅広いトピックで楽しく練習。",
          features: ["自然なフレーズ", "リスニング強化", "発音練習"],
        },
        business: {
          title: "ビジネス英語",
          description: "仕事で使える実践的なビジネス英語。メール、会議、プレゼンテーションなど、ビジネスシーンに対応。",
          features: ["ビジネスメール", "会議・プレゼン", "電話対応"],
        },
        travel: {
          title: "旅行英語",
          description: "海外旅行で役立つ英語を学びます。空港、ホテル、レストラン、観光地での会話に自信がつきます。",
          features: ["空港・ホテル対応", "レストラン会話", "緊急時の表現"],
        },
        writing: {
          title: "文法・ライティング",
          description: "正確な英文を書く力を養います。文法の基礎から、エッセイやビジネス文書の書き方まで対応。",
          features: ["文法強化", "エッセイ添削", "文書作成"],
        },
        test: {
          title: "試験対策",
          description: "TOEIC、TOEFL、英検などの試験対策をサポート。目標スコア達成に向けた効率的な学習を提供。",
          features: ["TOEIC/TOEFL", "英検対策", "面接練習"],
        },
        custom: {
          title: "カスタムレッスン",
          description: "上記以外の特別なご要望にも対応します。留学準備、海外赴任前研修など、目的に合わせた内容で。",
          features: ["完全オーダーメイド", "特定分野の英語", "集中レッスン"],
        },
      },
    },

    // Lesson Format Section
    lessonFormat: {
      tagline: "レッスン形式",
      title: "オンラインと対面、選べる受講スタイル",
      description: "ライフスタイルやお好みに合わせて、レッスン形式をお選びいただけます。",
      recommended: "おすすめ",
      online: {
        title: "オンラインレッスン",
        description: "Zoom等を使用した便利なオンラインレッスン",
        features: [
          { text: "スケジュールの柔軟性が高い", highlight: true },
          { text: "自宅からリラックスして受講", highlight: true },
          { text: "忙しい方におすすめ", highlight: true },
          { text: "全国どこからでも受講可能", highlight: false },
          { text: "録画で復習も可能（ご希望の場合）", highlight: false },
        ],
      },
      inPerson: {
        title: "対面レッスン",
        description: "直接お会いして行う対面形式のレッスン",
        features: [
          { text: "より直接的なコミュニケーション", highlight: true },
          { text: "対面での学習を好む方向け", highlight: true },
          { text: "一部エリアで対応可能", highlight: true },
          { text: "教材をその場で共有", highlight: false },
          { text: "身振り手振りも交えた指導", highlight: false },
        ],
      },
    },

    // Pricing Section
    pricing: {
      tagline: "料金プラン",
      title: "シンプルでわかりやすい料金体系",
      description: "入会金は不要です。レッスン料金のみで始められます。",
      categories: {
        student: {
          label: "学生向け",
          description: "中学生・高校生・大学生向けのレッスン",
        },
        adult: {
          label: "大人向け",
          description: "日常英会話や旅行英語を学びたい方向け",
        },
        business: {
          label: "ビジネス英語・TOEIC対策",
          description: "仕事・資格試験・キャリアアップを目的とした方向け",
        },
      },
      plans: {
        trial: {
          name: "体験レッスン",
          duration: "30分",
          description: "まずは気軽にお試しください",
          features: ["レベルチェック", "学習カウンセリング", "レッスン体験", "質問・相談"],
          cta: "体験を予約する",
        },
        online: {
          name: "オンラインレッスン",
          duration: "60分",
          description: "自宅から便利に受講",
          features: ["Zoomで受講", "柔軟なスケジュール", "教材込み", "復習サポート"],
          cta: "詳細を見る",
        },
        inPerson: {
          name: "対面レッスン",
          duration: "60分",
          description: "対面で集中して学習",
          features: ["直接指導", "一部エリア対応", "教材込み", "復習サポート"],
          cta: "詳細を見る",
        },
      },
      monthly: {
        name: "月額パッケージ",
        duration: "月4回",
        description: "定期的に学びたい方におすすめ。",
        perLesson: "1回あたり",
        features: [
          "月4回のレッスン（60分×4）",
          "オンライン/対面選択可",
          "優先予約",
          "メールサポート付き",
        ],
        cta: "月額プランを申し込む",
      },
      popular: "人気",
      note: "※ 料金は変更になる場合があります。詳細はお問い合わせください。",
    },

    // Process Section
    process: {
      tagline: "ご利用の流れ",
      title: "レッスン開始までの5ステップ",
      description: "お申し込みからレッスン開始まで、丁寧にサポートいたします。",
      steps: {
        contact: {
          step: "01",
          title: "お問い合わせ",
          description: "フォームまたはメールでお気軽にご連絡ください。ご質問だけでも大歓迎です。",
        },
        consultation: {
          step: "02",
          title: "無料カウンセリング",
          description: "現在のレベルや目標、ご希望をお聞きして、最適なレッスンプランをご提案します。",
        },
        trial: {
          step: "03",
          title: "体験レッスン",
          description: "実際のレッスンを体験していただき、相性や進め方を確認します。",
        },
        plan: {
          step: "04",
          title: "学習プラン作成",
          description: "あなた専用の学習プランを作成。目標達成までの道筋を一緒に考えます。",
        },
        start: {
          step: "05",
          title: "レッスン開始",
          description: "ご都合に合わせてレッスンをスタート。継続しやすいペースで進めていきます。",
        },
      },
    },

    // Testimonials Section
    testimonials: {
      tagline: "生徒さんの声",
      title: "受講された方からの感想",
      description: "実際にレッスンを受講された生徒さんからいただいた声をご紹介します。",
      items: [
        {
          name: "田中 美咲",
          role: "会社員・30代",
          content: "仕事で英語を使う機会が増え、不安でしたが、丁寧に教えていただき自信がつきました。今では海外のクライアントとの会議も怖くありません。",
        },
        {
          name: "佐藤 健太",
          role: "大学生・20代",
          content: "留学前の準備として受講しました。実践的な会話練習のおかげで、留学先でもすぐにコミュニケーションが取れました。",
        },
        {
          name: "山田 由美子",
          role: "主婦・40代",
          content: "子育てが落ち着き、趣味として始めました。オンラインなので自宅から気軽に受講でき、毎週のレッスンが楽しみです。",
        },
      ],
      privacyNote: "※ プライバシー保護のため、お名前は仮名を使用しています",
    },

    // FAQ Section
    faq: {
      tagline: "よくある質問",
      title: "ご不明な点はありますか？",
      description: "よくいただくご質問をまとめました。こちらにないご質問は、お気軽にお問い合わせください。",
      items: [
        {
          question: "初心者でも大丈夫ですか？",
          answer: "もちろん大丈夫です！英語を始めたばかりの方も多く受講されています。基礎からゆっくり丁寧に進めますので、安心してお申し込みください。「アルファベットから不安...」という方も大歓迎です。",
        },
        {
          question: "日本語で説明してもらえますか？",
          answer: "はい、必要に応じて日本語で説明いたします。特に文法の説明や、複雑な内容を理解する際には日本語を使用します。レッスンが進むにつれて、徐々に英語の比率を増やしていくこともできます。",
        },
        {
          question: "オンラインでも効果がありますか？",
          answer: "はい、オンラインレッスンでも十分な効果が得られます。画面共有で教材を見ながら進められますし、対面と同じように会話の練習ができます。実際、多くの生徒さんがオンラインで着実に上達されています。",
        },
        {
          question: "どのくらいの頻度で受けるのがいいですか？",
          answer: "週1〜2回の受講をおすすめしています。定期的にレッスンを受けることで、学んだことを忘れにくく、着実に上達できます。ただし、お忙しい方は月2回からでも大丈夫です。継続できるペースで始めましょう。",
        },
        {
          question: "体験レッスンはありますか？",
          answer: "はい、30分の体験レッスンをご用意しています。実際のレッスンの雰囲気を体験していただき、レベルチェックや学習相談もできます。体験後、無理な勧誘は一切いたしませんので、お気軽にお申し込みください。",
        },
        {
          question: "予約のキャンセルや変更はできますか？",
          answer: "はい、レッスンの24時間前までであれば、無料でキャンセル・変更が可能です。急な予定変更にも柔軟に対応いたしますので、お気軽にご連絡ください。",
        },
        {
          question: "支払い方法は何がありますか？",
          answer: "銀行振込、クレジットカード、PayPayなどに対応しています。月額プランの場合は、毎月のお支払いとなります。詳細はお問い合わせ時にご案内いたします。",
        },
      ],
    },

    // CTA Section
    cta: {
      title: "まずは体験レッスンから始めてみませんか？",
      description: "30分の体験レッスンで、レッスンの雰囲気やあなたに合った学習プランをご提案します。無理な勧誘は一切ございませんので、お気軽にお申し込みください。",
      bookTrial: "体験レッスンを予約する",
      contact: "お問い合わせ",
    },

    // Contact Section
    contact: {
      tagline: "お問い合わせ",
      title: "お気軽にご連絡ください",
      description: "ご質問、ご相談、体験レッスンのお申し込みなど、お気軽にお問い合わせください。",
      email: "メール",
      line: "LINE",
      responseTime: "返信目安",
      responseTimeValue: "24時間以内にご返信します",
      form: {
        title: "お問い合わせフォーム",
        description: "下記フォームに必要事項をご記入の上、送信してください。",
        name: "お名前",
        namePlaceholder: "山田 太郎",
        emailLabel: "メールアドレス",
        emailPlaceholder: "example@email.com",
        subject: "件名",
        subjectPlaceholder: "体験レッスンについて",
        message: "メッセージ",
        messagePlaceholder: "ご質問やご要望をお書きください...",
        submit: "送信する",
        success: "お問い合わせありがとうございます。確認後、ご連絡いたします。",
        required: "*",
      },
    },

    // Footer
    footer: {
      brand: "English Lessons",
      tagline: "日本人学習者のためのパーソナル英語レッスン",
      sitemap: "サイトマップ",
      contactTitle: "お問い合わせ",
      emailLabel: "メール:",
      lineLabel: "LINE:",
      responseLabel: "返信目安:",
      responseValue: "24時間以内",
      copyright: "All rights reserved.",
    },

    // Language Toggle
    langToggle: {
      label: "EN",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      lessons: "Lessons",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      menuOpen: "Open menu",
    },

    // Hero Section
    hero: {
      tagline: "English Lessons for Japanese Learners",
      title: "Personalized English Lessons",
      titleHighlight: "Tailored to Your Goals",
      description: "From conversation to business, travel to exam prep. A teacher who understands Japanese learners will support you every step of the way.",
      cta: "Book a Trial Lesson",
      ctaSecondary: "View Pricing",
      profilePhotoPlaceholder: "Profile Photo",
      experiencedTeacher: "Experienced Teacher",
      clearTeaching: "Clear, supportive instruction",
    },

    // About Section
    about: {
      tagline: "About Me",
      title: "An English Teacher for Japanese Learners",
      intro1: "Hello! As an English teacher, I have been teaching English to Japanese learners for many years.",
      intro2: "I deeply understand the challenges Japanese learners face when studying English — pronunciation difficulties, grammar differences, and hesitation in conversation. That's why I provide personalized approaches that help each student progress steadily and comfortably.",
      intro3: "Whether you want to speak English confidently, travel abroad with ease, or use English at work — I look forward to helping you achieve your goals.",
      features: {
        experienced: {
          title: "Experienced Teaching",
          description: "Years of experience teaching English to Japanese learners.",
        },
        supportive: {
          title: "Patient Support",
          description: "I adapt to each student's pace and teach patiently without rushing.",
        },
        understanding: {
          title: "Understanding Japanese Learners",
          description: "I'm familiar with challenges unique to Japanese speakers — pronunciation, grammar, and listening.",
        },
      },
      background: {
        title: "My Background",
        story1: "I worked as an engineer at a major US company. Later, I started my own business and now live in Japan.",
        story2: "Through working abroad and interacting with people from many countries, I've come to realize that English is not just a subject — it's a vital tool for work, travel, relationships, and new opportunities.",
        story3: "Since coming to Japan, I've been teaching English alongside my main work, supporting many Japanese learners. I understand the common stumbling blocks for Japanese students and provide clear, personalized lessons tailored to each person's goals.",
        points: {
          us: "Experience at a major US company",
          startup: "Founded my own company",
          teaching: "Years of English teaching experience",
        },
      },
    },

    // Benefits Section
    benefits: {
      tagline: "Why Learn English?",
      title: "English Opens Up Your World",
      description: "English is more than just a skill — it's a door to new possibilities. Whatever your goals, English proficiency brings them within reach.",
      items: {
        travel: {
          title: "Enjoy Travel More",
          description: "Communicate smoothly at your destination and enjoy deeper travel experiences.",
        },
        career: {
          title: "Expand Your Career",
          description: "English skills are a major asset for career advancement and job opportunities.",
        },
        connect: {
          title: "Connect Globally",
          description: "Communicate with people from different cultures around the world.",
        },
        study: {
          title: "Prepare for Study Abroad",
          description: "Build the English skills you need for living and studying overseas.",
        },
        confidence: {
          title: "Build Confidence",
          description: "Gain confidence in yourself and take on new challenges.",
        },
        media: {
          title: "Enjoy English Content",
          description: "Experience movies, music, and books in their original language.",
        },
      },
    },

    // Method Section
    method: {
      tagline: "Teaching Method",
      title: "Practical, Clear Lessons",
      description: "My priority is helping you actually use English. You'll develop practical skills, not just theoretical knowledge.",
      items: {
        customized: {
          title: "Goal-Oriented Curriculum",
          description: "Lessons are customized based on your goals — conversation, exam prep, business English, and more.",
        },
        conversation: {
          title: "Practical Conversation Practice",
          description: "Focus on expressions you can use in real situations. Plenty of opportunities to speak and build natural conversation skills.",
        },
        grammar: {
          title: "Clear Grammar Explanations",
          description: "Complex grammar explained clearly, considering differences from Japanese. You'll understand the 'why' behind the rules.",
        },
        pronunciation: {
          title: "Pronunciation & Listening",
          description: "Focused support on areas Japanese speakers find challenging. Aim for English that's understood and understood clearly.",
        },
        review: {
          title: "Review Support (Optional)",
          description: "Homework and review materials available upon request. Learn effectively even outside of lessons.",
        },
      },
    },

    // Lesson Types Section
    lessonTypes: {
      tagline: "Lesson Types",
      title: "Choose the Right Lesson for You",
      description: "Select the lesson type that best fits your goals and level. You can also combine multiple types.",
      items: {
        conversation: {
          title: "Daily Conversation",
          description: "Build natural conversation skills for everyday life. Practice with a wide range of topics from hobbies to current events.",
          features: ["Natural phrases", "Listening skills", "Pronunciation"],
        },
        business: {
          title: "Business English",
          description: "Practical business English for work. Covers emails, meetings, presentations, and more.",
          features: ["Business emails", "Meetings & presentations", "Phone calls"],
        },
        travel: {
          title: "Travel English",
          description: "Learn useful English for traveling abroad. Gain confidence for airports, hotels, restaurants, and sightseeing.",
          features: ["Airport & hotel", "Restaurant conversation", "Emergency phrases"],
        },
        writing: {
          title: "Grammar & Writing",
          description: "Develop accurate writing skills. From grammar basics to essays and business documents.",
          features: ["Grammar focus", "Essay correction", "Document writing"],
        },
        test: {
          title: "Exam Preparation",
          description: "Support for TOEIC, TOEFL, Eiken, and more. Efficient study methods to achieve your target score.",
          features: ["TOEIC/TOEFL", "Eiken prep", "Interview practice"],
        },
        custom: {
          title: "Custom Lessons",
          description: "For special requests beyond the above. Study abroad prep, pre-assignment training, and more tailored to your needs.",
          features: ["Fully customized", "Specialized English", "Intensive lessons"],
        },
      },
    },

    // Lesson Format Section
    lessonFormat: {
      tagline: "Lesson Format",
      title: "Choose Online or In-Person",
      description: "Select the lesson format that fits your lifestyle and preferences.",
      recommended: "Recommended",
      online: {
        title: "Online Lessons",
        description: "Convenient online lessons via Zoom or similar platforms",
        features: [
          { text: "Flexible scheduling", highlight: true },
          { text: "Learn from home in comfort", highlight: true },
          { text: "Great for busy people", highlight: true },
          { text: "Available from anywhere in Japan", highlight: false },
          { text: "Recording available for review (if desired)", highlight: false },
        ],
      },
      inPerson: {
        title: "In-Person Lessons",
        description: "Face-to-face lessons in person",
        features: [
          { text: "More direct communication", highlight: true },
          { text: "For those who prefer face-to-face learning", highlight: true },
          { text: "Available in select areas", highlight: true },
          { text: "Share materials in real-time", highlight: false },
          { text: "Teaching with gestures and expressions", highlight: false },
        ],
      },
    },

    // Pricing Section
    pricing: {
      tagline: "Pricing",
      title: "Simple, Clear Pricing",
      description: "No enrollment fee required. Start with just the lesson fee.",
      categories: {
        student: {
          label: "Students",
          description: "For middle school, high school, and university students",
        },
        adult: {
          label: "Adults",
          description: "For those learning daily conversation or travel English",
        },
        business: {
          label: "Business & TOEIC",
          description: "For work, certification exams, or career advancement",
        },
      },
      plans: {
        trial: {
          name: "Trial Lesson",
          duration: "30 min",
          description: "Try it out with no pressure",
          features: ["Level check", "Learning consultation", "Lesson experience", "Q&A"],
          cta: "Book Trial",
        },
        online: {
          name: "Online Lesson",
          duration: "60 min",
          description: "Learn conveniently from home",
          features: ["Via Zoom", "Flexible schedule", "Materials included", "Review support"],
          cta: "Learn More",
        },
        inPerson: {
          name: "In-Person Lesson",
          duration: "60 min",
          description: "Focused face-to-face learning",
          features: ["Direct instruction", "Select areas", "Materials included", "Review support"],
          cta: "Learn More",
        },
      },
      monthly: {
        name: "Monthly Package",
        duration: "4 lessons/mo",
        description: "Recommended for regular learners.",
        perLesson: "per lesson",
        features: [
          "4 lessons per month (60 min each)",
          "Online or in-person",
          "Priority booking",
          "Email support included",
        ],
        cta: "Subscribe to Monthly Plan",
      },
      popular: "Popular",
      note: "※ Prices are subject to change. Please contact for details.",
    },

    // Process Section
    process: {
      tagline: "How It Works",
      title: "5 Steps to Start Your Lessons",
      description: "We support you from inquiry to your first lesson.",
      steps: {
        contact: {
          step: "01",
          title: "Contact Us",
          description: "Reach out via form or email. Questions only? No problem!",
        },
        consultation: {
          step: "02",
          title: "Free Consultation",
          description: "We discuss your current level, goals, and preferences to suggest the best plan.",
        },
        trial: {
          step: "03",
          title: "Trial Lesson",
          description: "Experience an actual lesson and see if it's a good fit.",
        },
        plan: {
          step: "04",
          title: "Create Your Plan",
          description: "We create a personalized learning plan to help you reach your goals.",
        },
        start: {
          step: "05",
          title: "Start Lessons",
          description: "Begin lessons at your convenience, at a sustainable pace.",
        },
      },
    },

    // Testimonials Section
    testimonials: {
      tagline: "Student Testimonials",
      title: "What Students Are Saying",
      description: "Hear from students who have taken lessons.",
      items: [
        {
          name: "Misaki T.",
          role: "Office Worker, 30s",
          content: "I was anxious about using English at work more often, but the patient teaching helped me gain confidence. Now I'm not afraid of meetings with overseas clients.",
        },
        {
          name: "Kenta S.",
          role: "University Student, 20s",
          content: "I took lessons to prepare for studying abroad. Thanks to the practical conversation practice, I was able to communicate right away at my study abroad destination.",
        },
        {
          name: "Yumiko Y.",
          role: "Homemaker, 40s",
          content: "After my kids grew up, I started as a hobby. Being online, I can take lessons comfortably from home, and I look forward to my weekly lesson.",
        },
      ],
      privacyNote: "※ Names have been changed to protect privacy.",
    },

    // FAQ Section
    faq: {
      tagline: "FAQ",
      title: "Have Questions?",
      description: "Here are some frequently asked questions. For anything else, please contact us.",
      items: [
        {
          question: "Is it okay for complete beginners?",
          answer: "Absolutely! Many students start from scratch. We progress slowly and carefully from the basics, so you can start with confidence. Even if you're unsure about the alphabet, you're welcome!",
        },
        {
          question: "Can you explain things in Japanese?",
          answer: "Yes, I explain in Japanese when needed, especially for grammar and complex concepts. As lessons progress, we can gradually increase the English ratio if you prefer.",
        },
        {
          question: "Are online lessons effective?",
          answer: "Yes, online lessons are just as effective. We can share materials on screen and practice conversation just like in-person. Many students have made solid progress online.",
        },
        {
          question: "How often should I take lessons?",
          answer: "I recommend 1-2 times per week. Regular lessons help retention and steady progress. However, twice a month works too if you're busy. Start at a pace you can maintain.",
        },
        {
          question: "Is there a trial lesson?",
          answer: "Yes, we offer a 30-minute trial lesson. You can experience the lesson atmosphere, get a level check, and discuss your learning goals. There's absolutely no pressure to continue afterward.",
        },
        {
          question: "Can I cancel or reschedule?",
          answer: "Yes, you can cancel or change up to 24 hours before the lesson for free. We're flexible with sudden schedule changes, so just let us know.",
        },
        {
          question: "What payment methods are available?",
          answer: "We accept bank transfer, credit card, and PayPay. For monthly plans, payment is processed monthly. Details are provided when you inquire.",
        },
      ],
    },

    // CTA Section
    cta: {
      title: "Ready to Start with a Trial Lesson?",
      description: "In a 30-minute trial, we'll show you what lessons are like and suggest a learning plan that fits you. No pressure, no hard sell — feel free to sign up.",
      bookTrial: "Book a Trial Lesson",
      contact: "Contact Us",
    },

    // Contact Section
    contact: {
      tagline: "Contact",
      title: "Get in Touch",
      description: "Questions, consultations, trial lesson bookings — feel free to reach out.",
      email: "Email",
      line: "LINE",
      responseTime: "Response Time",
      responseTimeValue: "Within 24 hours",
      form: {
        title: "Contact Form",
        description: "Fill out the form below and submit.",
        name: "Name",
        namePlaceholder: "Taro Yamada",
        emailLabel: "Email",
        emailPlaceholder: "example@email.com",
        subject: "Subject",
        subjectPlaceholder: "About trial lessons",
        message: "Message",
        messagePlaceholder: "Your questions or requests...",
        submit: "Send Message",
        success: "Thank you for your message. We will get back to you soon.",
        required: "*",
      },
    },

    // Footer
    footer: {
      brand: "English Lessons",
      tagline: "Personalized English lessons for Japanese learners",
      sitemap: "Sitemap",
      contactTitle: "Contact",
      emailLabel: "Email:",
      lineLabel: "LINE:",
      responseLabel: "Response:",
      responseValue: "Within 24 hours",
      copyright: "All rights reserved.",
    },

    // Language Toggle
    langToggle: {
      label: "日本語",
    },
  },
} as const;
