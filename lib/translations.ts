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
      cta: "レッスンについて相談する",
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
      intro2: "日本人学習者が英語を学ぶ際に直面する課題 - 発音の難しさ、文法の違い、会話への抵抗感 - を深く理解しています。だからこそ、それぞれの生徒さんに合ったアプローチで、無理なく着実に上達できるようサポートしています。",
      intro3: "「英語を話せるようになりたい」「自信を持って海外旅行に行きたい」「仕事で英語を使いたい」 - そんな皆さんの目標達成をお手伝いできることを楽しみにしています。",
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
      title: "目的に合わせたプレミアム個別レッスン",
      description: "子ども・学生向けには継続しやすい特別料金をご用意しています。大人向け、ビジネス英語、TOEIC対策は、内容や準備量に応じたプレミアム料金です。",
      categories: {
        student: {
          label: "子ども・学生向け",
          description: "学生の方が継続しやすい特別料金。会話レッスンは上級者向け、文法・カリキュラムは初心者や試験対策向けです。",
        },
        adult: {
          label: "大人向け",
          description: "日常英会話、旅行英語、基礎の学び直しなど、目的に合わせた大人向けレッスンです。",
        },
        business: {
          label: "ビジネス英語・TOEIC対策",
          description: "仕事、TOEIC、面接、キャリアアップを目的とした方向けの集中特化レッスンです。",
        },
      },
      billing: {
        single: {
          label: "1回ごとの料金",
          description: "必要なタイミングで受講したい方向けの通常料金です。",
        },
        monthly: {
          label: "月4回パッケージ",
          description: "選択したレッスンを月4回受講する場合の料金です。通常料金から25%割引になります。",
        },
      },
      monthlyDuration: "月4回",
      monthlyDescription: "月4回パッケージは25%割引です。",
      trialNotPackage: "体験レッスンは月4回パッケージ対象外です。",
      plans: {
        trialStudent: {
          name: "体験レッスン・レベル確認",
          duration: "30分",
          description: "現在の英語力を確認し、学習目的に合うレッスン内容を相談します。",
          features: ["30分の体験", "レベルチェック", "学習目的の確認", "今後の方針を相談"],
          cta: "体験について問い合わせる",
        },
        studentConversation: {
          name: "オンライン会話レッスン",
          duration: "60分",
          description: "英語で話す時間を増やしたい方向け。特に上級者・会話経験者におすすめです。",
          features: ["60分オンライン", "会話中心", "自然な表現", "上級者におすすめ"],
          cta: "相談する",
        },
        studentConversationInPerson: {
          name: "対面会話レッスン",
          duration: "60分",
          description: "対面でしっかり会話練習をしたい方向け。オンライン会話レッスンの約2倍の料金です。",
          features: ["60分対面", "会話中心", "直接フィードバック", "一部エリア対応"],
          cta: "相談する",
        },
        studentGrammar: {
          name: "文法・カリキュラムレッスン",
          duration: "60分",
          description: "初心者、基礎固め、学校の勉強、特定の試験対策におすすめです。",
          features: ["60分オンライン", "文法解説", "カリキュラム作成", "初心者・試験対策向け"],
          cta: "相談する",
        },
        studentGrammarInPerson: {
          name: "対面 文法・カリキュラム",
          duration: "60分",
          description: "対面で文法やカリキュラム学習を進めたい方向け。オンラインの約2倍の料金です。",
          features: ["60分対面", "文法・基礎固め", "教材を使った指導", "一部エリア対応"],
          cta: "相談する",
        },
        trialAdult: {
          name: "体験レッスン",
          duration: "30分",
          description: "レベル、目的、相性を確認するための30分レッスンです。",
          features: ["30分の体験", "レベルチェック", "目標の確認", "レッスン方針を相談"],
          cta: "体験について問い合わせる",
        },
        adultConversation: {
          name: "オンライン会話レッスン",
          duration: "60分",
          description: "日常英会話、旅行英語、自然な表現を練習したい大人向けのレッスンです。",
          features: ["60分オンライン", "会話中心", "旅行・日常英語", "自然な表現"],
          cta: "相談する",
        },
        adultConversationInPerson: {
          name: "対面会話レッスン",
          duration: "60分",
          description: "対面で会話力を伸ばしたい大人向けのレッスンです。",
          features: ["60分対面", "会話中心", "直接フィードバック", "一部エリア対応"],
          cta: "相談する",
        },
        adultGrammar: {
          name: "文法・カリキュラムレッスン",
          duration: "60分",
          description: "基礎から学び直したい方、目的に合わせて体系的に学びたい方向けです。",
          features: ["60分オンライン", "文法の学び直し", "目標別カリキュラム", "復習サポート"],
          cta: "相談する",
        },
        adultGrammarInPerson: {
          name: "対面 文法・カリキュラム",
          duration: "60分",
          description: "対面で基礎・文法・カリキュラム学習を進めたい大人向けです。",
          features: ["60分対面", "体系的な学習", "教材を使った指導", "一部エリア対応"],
          cta: "相談する",
        },
        trialBusiness: {
          name: "体験レッスン",
          duration: "30分",
          description: "TOEIC、仕事、面接、キャリア目的を確認するための30分レッスンです。",
          features: ["30分の体験", "目標確認", "課題分析", "学習方針を提案"],
          cta: "体験について問い合わせる",
        },
        businessCurriculum: {
          name: "ビジネス英語・TOEIC特化",
          duration: "60分",
          description: "仕事やTOEICに必要な英語を、目的に合わせたカリキュラムで学びます。",
          features: ["60分オンライン", "TOEIC対策", "ビジネス英語", "個別カリキュラム"],
          cta: "相談する",
        },
        businessCurriculumInPerson: {
          name: "対面 ビジネス英語・TOEIC特化",
          duration: "60分",
          description: "対面でビジネス英語やTOEIC対策を集中的に進めたい方向けです。",
          features: ["60分対面", "TOEIC・仕事英語", "直接フィードバック", "一部エリア対応"],
          cta: "相談する",
        },
      },
      packageNotice: {
        title: "月4回パッケージについて",
        description: "月4回パッケージを選ぶと、体験レッスン以外の選択中のレッスン料金が自動的に4回分・25%割引で表示されます。正式な内容・日程はお問い合わせ後に確定します。",
      },
      popular: "おすすめ",
      note: "※ 料金は目安です。レッスン内容・頻度・目的によって変わる場合があります。正式な料金と日程は、お問い合わせ後にご案内します。",
    },

    // Process Section
    process: {
      tagline: "ご利用の流れ",
      title: "お問い合わせからレッスン開始まで",
      description: "すべてのレッスンは、事前のお問い合わせ・ご相談後に確定します。",
      steps: {
        contact: {
          step: "01",
          title: "LINEまたはメールでお問い合わせ",
          description: "学習目的・現在のレベル・ご希望の日時をお知らせください。",
        },
        consultation: {
          step: "02",
          title: "目的・レベル・希望日時を確認",
          description: "内容を確認し、対応可能かどうかを判断します。",
        },
        trial: {
          step: "03",
          title: "対応可否をご案内",
          description: "対応可能な場合、必要に応じて体験レッスンをご案内します。",
        },
        plan: {
          step: "04",
          title: "プラン・料金・日程を確定",
          description: "レッスン内容、料金、スケジュールを確認して確定します。",
        },
        start: {
          step: "05",
          title: "レッスン開始",
          description: "ご都合に合わせてレッスンを開始し、継続しやすいペースで進めます。",
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
      title: "まずはLINEまたはメールでご相談ください",
      description: "レッスンは完全予約制です。学習目的・現在のレベル・ご希望の日時を確認したうえで、対応可能かどうかをご案内します。",
      bookTrial: "レッスンについて相談する",
      contact: "お問い合わせ",
    },

    // Contact Section
    contact: {
      tagline: "お問い合わせ",
      title: "お気軽にご連絡ください",
      description: "すべてのレッスンは、事前のお問い合わせ・ご相談後に確定します。LINEまたはメールでご連絡ください。",
      email: "メール",
      line: "LINE",
      lineQrTitle: "LINE QRコード",
      lineQrAlt: "LINE QRコード",
      lineQrDescription: "QRコードからLINEでお問い合わせいただけます。",
      responseTime: "返信目安",
      responseTimeValue: "24時間以内にご返信します",
      form: {
        title: "お問い合わせフォーム",
        description: "フォームを送信すると、メールアプリが開きます。LINEでのお問い合わせも可能です。",
        name: "お名前",
        namePlaceholder: "山田 太郎",
        emailLabel: "メールアドレス",
        emailPlaceholder: "your-email@example.com",
        subject: "件名",
        subjectPlaceholder: "体験レッスンについて",
        message: "メッセージ",
        messagePlaceholder: "ご質問やご要望をお書きください...",
        submit: "メールで問い合わせる",
        success: "メールアプリを開きます。送信内容をご確認ください。",
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
      cta: "Ask About Lessons",
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
      intro2: "I deeply understand the challenges Japanese learners face when studying English - pronunciation difficulties, grammar differences, and hesitation in conversation. That's why I provide personalized approaches that help each student progress steadily and comfortably.",
      intro3: "Whether you want to speak English confidently, travel abroad with ease, or use English at work - I look forward to helping you achieve your goals.",
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
          description: "I'm familiar with challenges unique to Japanese speakers - pronunciation, grammar, and listening.",
        },
      },
      background: {
        title: "My Background",
        story1: "I worked as an engineer at a major US company. Later, I started my own business and now live in Japan.",
        story2: "Through working abroad and interacting with people from many countries, I've come to realize that English is not just a subject - it's a vital tool for work, travel, relationships, and new opportunities.",
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
      description: "English is more than just a skill - it's a door to new possibilities. Whatever your goals, English proficiency brings them within reach.",
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
          description: "Lessons are customized based on your goals - conversation, exam prep, business English, and more.",
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
      title: "Premium Private Lessons by Goal",
      description: "Kids and students receive special discounted pricing to make consistent learning easier. Adult, business, and TOEIC lessons are priced higher based on customization and preparation.",
      categories: {
        student: {
          label: "Kids & Students",
          description: "Special student pricing. Conversation lessons are best for advanced speakers; grammar and curriculum lessons are better for beginners or test-focused learners.",
        },
        adult: {
          label: "Adults",
          description: "For daily conversation, travel English, relearning the basics, or goal-based adult lessons.",
        },
        business: {
          label: "Business & TOEIC",
          description: "Focused lessons for work, TOEIC, interviews, and career advancement.",
        },
      },
      billing: {
        single: {
          label: "Single Lesson",
          description: "Standard pricing for students who want lessons as needed.",
        },
        monthly: {
          label: "4/Month Package",
          description: "Shows the price for four lessons per month with a 25% discount from the regular lesson price.",
        },
      },
      monthlyDuration: "4 lessons/mo",
      monthlyDescription: "The 4/month package includes a 25% discount.",
      trialNotPackage: "Trial lessons are not included in the monthly package.",
      plans: {
        trialStudent: {
          name: "Trial & Level Check",
          duration: "30 min",
          description: "A 30-minute trial to evaluate the student's level and discuss the right lesson plan.",
          features: ["30-minute trial", "Level check", "Goal review", "Learning plan discussion"],
          cta: "Ask About Trial",
        },
        studentConversation: {
          name: "Online Conversation Lesson",
          duration: "60 min",
          description: "For students who want more speaking practice. Recommended for advanced speakers or students with conversation experience.",
          features: ["60 min online", "Conversation-focused", "Natural expressions", "Best for advanced speakers"],
          cta: "Ask About This",
        },
        studentConversationInPerson: {
          name: "In-Person Conversation Lesson",
          duration: "60 min",
          description: "For students who want face-to-face conversation practice. About double the online conversation lesson price.",
          features: ["60 min in person", "Conversation-focused", "Direct feedback", "Select areas only"],
          cta: "Ask About This",
        },
        studentGrammar: {
          name: "Grammar & Curriculum Lesson",
          duration: "60 min",
          description: "Recommended for beginners, school support, structured learning, or specific test goals.",
          features: ["60 min online", "Grammar explanations", "Custom curriculum", "For beginners/test prep"],
          cta: "Ask About This",
        },
        studentGrammarInPerson: {
          name: "In-Person Grammar & Curriculum",
          duration: "60 min",
          description: "Face-to-face grammar and curriculum-based learning. About double the online price.",
          features: ["60 min in person", "Grammar and basics", "Materials-based teaching", "Select areas only"],
          cta: "Ask About This",
        },
        trialAdult: {
          name: "Trial Lesson",
          duration: "30 min",
          description: "A 30-minute lesson to check level, goals, and fit.",
          features: ["30-minute trial", "Level check", "Goal review", "Lesson plan discussion"],
          cta: "Ask About Trial",
        },
        adultConversation: {
          name: "Online Conversation Lesson",
          duration: "60 min",
          description: "For adults who want to practice daily conversation, travel English, and natural expression.",
          features: ["60 min online", "Conversation-focused", "Daily/travel English", "Natural expression"],
          cta: "Ask About This",
        },
        adultConversationInPerson: {
          name: "In-Person Conversation Lesson",
          duration: "60 min",
          description: "For adults who want face-to-face conversation practice and direct feedback.",
          features: ["60 min in person", "Conversation-focused", "Direct feedback", "Select areas only"],
          cta: "Ask About This",
        },
        adultGrammar: {
          name: "Grammar & Curriculum Lesson",
          duration: "60 min",
          description: "For adults who want structured learning, grammar review, or a goal-based curriculum.",
          features: ["60 min online", "Grammar review", "Goal-based curriculum", "Review support"],
          cta: "Ask About This",
        },
        adultGrammarInPerson: {
          name: "In-Person Grammar & Curriculum",
          duration: "60 min",
          description: "Face-to-face structured learning for grammar, basics, and customized curriculum work.",
          features: ["60 min in person", "Structured learning", "Materials-based teaching", "Select areas only"],
          cta: "Ask About This",
        },
        trialBusiness: {
          name: "Trial Lesson",
          duration: "30 min",
          description: "A 30-minute lesson to review TOEIC, work, interview, or career goals.",
          features: ["30-minute trial", "Goal review", "Needs analysis", "Study direction"],
          cta: "Ask About Trial",
        },
        businessCurriculum: {
          name: "Business & TOEIC Curriculum",
          duration: "60 min",
          description: "A focused curriculum for TOEIC, work, interviews, presentations, or career English.",
          features: ["60 min online", "TOEIC prep", "Business English", "Custom curriculum"],
          cta: "Ask About This",
        },
        businessCurriculumInPerson: {
          name: "In-Person Business & TOEIC Curriculum",
          duration: "60 min",
          description: "Face-to-face focused lessons for business English, TOEIC, and professional goals.",
          features: ["60 min in person", "TOEIC/work English", "Direct feedback", "Select areas only"],
          cta: "Ask About This",
        },
      },
      packageNotice: {
        title: "About the 4/Month Package",
        description: "When the 4/month package is selected, eligible lesson prices automatically show four lessons with a 25% discount. Trial lessons are excluded. Final details and scheduling are confirmed after inquiry.",
      },
      popular: "Recommended",
      note: "※ Prices are guidelines. Final pricing may vary depending on lesson content, frequency, and goals. Final details will be confirmed after your inquiry.",
    },

    // Process Section
    process: {
      tagline: "How It Works",
      title: "From Inquiry to Starting Lessons",
      description: "All lessons are confirmed only after an initial inquiry and consultation.",
      steps: {
        contact: {
          step: "01",
          title: "Contact by LINE or Email",
          description: "Share your goals, current level, and preferred schedule.",
        },
        consultation: {
          step: "02",
          title: "Review Goals, Level, and Schedule",
          description: "I will review your inquiry and decide whether I can support you.",
        },
        trial: {
          step: "03",
          title: "Confirm Fit",
          description: "If appropriate, I will suggest a trial lesson or next step.",
        },
        plan: {
          step: "04",
          title: "Confirm Plan, Pricing, and Schedule",
          description: "We confirm the lesson content, pricing, and schedule before starting.",
        },
        start: {
          step: "05",
          title: "Start Lessons",
          description: "Start lessons at a pace that is sustainable for you.",
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
      title: "Please Contact Me by LINE or Email First",
      description: "Lessons are by prior arrangement only. After reviewing your goals, current level, and preferred schedule, I will let you know whether I can support you.",
      bookTrial: "Ask About Lessons",
      contact: "Contact",
    },

    // Contact Section
    contact: {
      tagline: "Contact",
      title: "Get in Touch",
      description: "All lessons are confirmed only after an initial inquiry and consultation. Please contact me by LINE or email first.",
      email: "Email",
      line: "LINE",
      lineQrTitle: "LINE QR Code",
      lineQrAlt: "LINE QR code",
      lineQrDescription: "Scan this QR code to contact me on LINE.",
      responseTime: "Response Time",
      responseTimeValue: "Within 24 hours",
      form: {
        title: "Contact Form",
        description: "Submitting this form will open your email app. You can also contact me by LINE.",
        name: "Name",
        namePlaceholder: "Taro Yamada",
        emailLabel: "Email",
        emailPlaceholder: "your-email@example.com",
        subject: "Subject",
        subjectPlaceholder: "About trial lessons",
        message: "Message",
        messagePlaceholder: "Your questions or requests...",
        submit: "Contact by Email",
        success: "Your email app will open. Please review the message before sending.",
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
};
