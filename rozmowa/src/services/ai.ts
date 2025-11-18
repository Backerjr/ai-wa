/**
 * AI Service - The Brain of RozmoWA
 * 
 * This service simulates AI-powered content generation.
 * In production, this would connect to Claude/GPT APIs.
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  topic: string;
  difficulty: string;
  questions: QuizQuestion[];
  generatedAt: Date;
}

/**
 * Mock question banks organized by topic
 * These provide realistic, contextual questions based on input
 */
const QUESTION_BANKS: Record<string, (difficulty: string) => QuizQuestion[]> = {
  coffee: (difficulty) => [
    {
      id: '1',
      question: 'What is the ideal water temperature for brewing pour-over coffee?',
      options: ['80-85°C (176-185°F)', '90-96°C (195-205°F)', '100°C (212°F)', '70-75°C (158-167°F)'],
      correctAnswer: 1,
      explanation: 'The optimal temperature range extracts the best flavors without burning the coffee.'
    },
    {
      id: '2',
      question: 'Which brewing method typically produces the strongest coffee?',
      options: ['French Press', 'Espresso', 'Cold Brew', 'Pour Over'],
      correctAnswer: 1,
      explanation: 'Espresso uses high pressure to extract a concentrated shot of coffee.'
    },
    {
      id: '3',
      question: 'What does "crema" refer to in espresso terminology?',
      options: ['The foam on top of espresso', 'A type of coffee bean', 'A brewing technique', 'A coffee grinder setting'],
      correctAnswer: 0,
      explanation: 'Crema is the golden-brown foam that forms on top of a well-pulled espresso shot.'
    },
    {
      id: '4',
      question: 'Which region is NOT traditionally known for coffee production?',
      options: ['Ethiopia', 'Colombia', 'Norway', 'Brazil'],
      correctAnswer: 2,
      explanation: 'Norway is a major coffee consumer but does not grow coffee due to its climate.'
    },
    {
      id: '5',
      question: 'What is the coffee-to-water ratio for a standard pour-over?',
      options: ['1:10', '1:15', '1:17', '1:25'],
      correctAnswer: 2,
      explanation: 'A 1:17 ratio (e.g., 20g coffee to 340g water) is the golden standard for balanced extraction.'
    }
  ],
  
  'present perfect': (difficulty) => [
    {
      id: '1',
      question: 'Which sentence correctly uses the present perfect tense?',
      options: [
        'I have visited Paris last year.',
        'I have visited Paris three times.',
        'I am visiting Paris now.',
        'I visited Paris yesterday.'
      ],
      correctAnswer: 1,
      explanation: 'Present perfect connects past actions to the present without specific time markers.'
    },
    {
      id: '2',
      question: 'Complete the sentence: "She ___ her homework yet."',
      options: ["hasn't finished", "didn't finish", "doesn't finish", "won't finish"],
      correctAnswer: 0,
      explanation: '"Yet" is commonly used with present perfect in negative sentences and questions.'
    },
    {
      id: '3',
      question: 'Which time expression is typically used with present perfect?',
      options: ['yesterday', 'last week', 'already', 'ago'],
      correctAnswer: 2,
      explanation: '"Already" is used with present perfect to emphasize that something happened sooner than expected.'
    },
    {
      id: '4',
      question: 'What is the present perfect form of "go"?',
      options: ['has went', 'have gone', 'has going', 'have go'],
      correctAnswer: 1,
      explanation: 'The present perfect uses "have/has" + past participle. "Gone" is the past participle of "go".'
    },
    {
      id: '5',
      question: 'When do we use present perfect instead of simple past?',
      options: [
        'When the exact time is specified',
        'When the action is connected to the present',
        'When describing habits',
        'When talking about future plans'
      ],
      correctAnswer: 1,
      explanation: 'Present perfect emphasizes the connection between a past action and the present moment.'
    }
  ],

  'climate change': (difficulty) => [
    {
      id: '1',
      question: 'What is the primary greenhouse gas contributing to climate change?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswer: 2,
      explanation: 'CO2 from burning fossil fuels is the main driver of anthropogenic climate change.'
    },
    {
      id: '2',
      question: 'Which sector produces the most global greenhouse gas emissions?',
      options: ['Transportation', 'Energy Production', 'Agriculture', 'Manufacturing'],
      correctAnswer: 1,
      explanation: 'Energy production (electricity and heat) accounts for approximately 25% of global emissions.'
    },
    {
      id: '3',
      question: 'What does the Paris Agreement aim to limit global temperature rise to?',
      options: ['1.0°C', '1.5°C', '2.0°C', '3.0°C'],
      correctAnswer: 1,
      explanation: 'The Paris Agreement aims to limit warming to 1.5°C above pre-industrial levels.'
    },
    {
      id: '4',
      question: 'Which renewable energy source has grown the fastest in recent years?',
      options: ['Hydroelectric', 'Wind', 'Solar', 'Geothermal'],
      correctAnswer: 2,
      explanation: 'Solar energy has seen exponential growth due to falling costs and technological advances.'
    },
    {
      id: '5',
      question: 'What is "carbon neutrality"?',
      options: [
        'Producing no carbon emissions',
        'Balancing carbon emissions with carbon removal',
        'Using only renewable energy',
        'Planting trees'
      ],
      correctAnswer: 1,
      explanation: 'Carbon neutrality means achieving net-zero carbon emissions by balancing emissions with removal.'
    }
  ],

  'photosynthesis': (difficulty) => [
    {
      id: '1',
      question: 'What is the primary pigment involved in photosynthesis?',
      options: ['Carotene', 'Chlorophyll', 'Xanthophyll', 'Anthocyanin'],
      correctAnswer: 1,
      explanation: 'Chlorophyll absorbs light energy, primarily in the blue and red wavelengths.'
    },
    {
      id: '2',
      question: 'What are the two main stages of photosynthesis?',
      options: [
        'Light and dark reactions',
        'Glycolysis and Krebs cycle',
        'Absorption and reflection',
        'Oxidation and reduction'
      ],
      correctAnswer: 0,
      explanation: 'Photosynthesis consists of light-dependent reactions and the Calvin cycle (light-independent).'
    },
    {
      id: '3',
      question: 'Where in the plant cell does photosynthesis occur?',
      options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
      correctAnswer: 2,
      explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.'
    },
    {
      id: '4',
      question: 'What is the chemical formula for glucose produced in photosynthesis?',
      options: ['C6H12O6', 'CO2', 'H2O', 'O2'],
      correctAnswer: 0,
      explanation: 'Glucose (C6H12O6) is the simple sugar produced as the end product of photosynthesis.'
    },
    {
      id: '5',
      question: 'Which gas is released as a byproduct of photosynthesis?',
      options: ['Carbon Dioxide', 'Nitrogen', 'Oxygen', 'Methane'],
      correctAnswer: 2,
      explanation: 'Oxygen is released when water molecules are split during the light-dependent reactions.'
    }
  ],

  'shakespeare': (difficulty) => [
    {
      id: '1',
      question: 'In which play does the famous line "To be, or not to be" appear?',
      options: ['Macbeth', 'Hamlet', 'Romeo and Juliet', 'Othello'],
      correctAnswer: 1,
      explanation: 'This soliloquy is from Act 3, Scene 1 of Hamlet, one of Shakespeare\'s most famous tragedies.'
    },
    {
      id: '2',
      question: 'What type of poem consists of 14 lines with a specific rhyme scheme?',
      options: ['Haiku', 'Sonnet', 'Limerick', 'Ballad'],
      correctAnswer: 1,
      explanation: 'Shakespeare wrote 154 sonnets, typically following the ABAB CDCD EFEF GG rhyme scheme.'
    },
    {
      id: '3',
      question: 'Which Shakespeare play features the characters Puck and Oberon?',
      options: [
        'The Tempest',
        'A Midsummer Night\'s Dream',
        'As You Like It',
        'Twelfth Night'
      ],
      correctAnswer: 1,
      explanation: 'Puck and Oberon are fairy characters in this magical comedy set in an enchanted forest.'
    },
    {
      id: '4',
      question: 'What was the name of Shakespeare\'s theater company?',
      options: [
        'The Globe Players',
        'The Lord Chamberlain\'s Men',
        'The Royal Shakespeare Company',
        'The King\'s Theatre'
      ],
      correctAnswer: 1,
      explanation: 'Later renamed The King\'s Men when James I became patron in 1603.'
    },
    {
      id: '5',
      question: 'In "Romeo and Juliet," what are the names of the two feuding families?',
      options: [
        'Montague and Capulet',
        'Benvolio and Tybalt',
        'Verona and Mantua',
        'Escalus and Paris'
      ],
      correctAnswer: 0,
      explanation: 'The tragic love story unfolds between Romeo Montague and Juliet Capulet.'
    }
  ]
};

/**
 * Generate generic questions when topic is not in the question bank
 */
const generateGenericQuestions = (topic: string, difficulty: string): QuizQuestion[] => {
  const difficultyDescriptors = {
    beginner: 'basic understanding',
    intermediate: 'practical application',
    advanced: 'deep analysis'
  };

  return [
    {
      id: '1',
      question: `What is the fundamental concept behind ${topic}?`,
      options: [
        `A theoretical framework`,
        `A practical methodology`,
        `An abstract principle`,
        `A concrete application`
      ],
      correctAnswer: 0,
      explanation: `Understanding the core concept is essential for mastering ${topic}.`
    },
    {
      id: '2',
      question: `Which approach is most effective when learning about ${topic}?`,
      options: [
        'Memorization only',
        'Hands-on practice',
        'Passive observation',
        'Avoiding mistakes'
      ],
      correctAnswer: 1,
      explanation: 'Active engagement and practice lead to deeper understanding.'
    },
    {
      id: '3',
      question: `What is a common misconception about ${topic}?`,
      options: [
        'It requires no prior knowledge',
        'It can be mastered overnight',
        'It has no practical applications',
        'It never changes or evolves'
      ],
      correctAnswer: 1,
      explanation: 'Mastery requires time, practice, and continuous learning.'
    },
    {
      id: '4',
      question: `How does ${topic} relate to real-world applications?`,
      options: [
        'It has no practical use',
        'It applies to specific scenarios only',
        'It has broad, versatile applications',
        'It is purely theoretical'
      ],
      correctAnswer: 2,
      explanation: 'Most subjects have wide-ranging practical applications when properly understood.'
    },
    {
      id: '5',
      question: `What skill level does this quiz assess for ${topic}?`,
      options: [
        'Complete beginner',
        difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
        'Expert level',
        'Professional certification'
      ],
      correctAnswer: 1,
      explanation: `This quiz is designed for ${difficultyDescriptors[difficulty as keyof typeof difficultyDescriptors]} of ${topic}.`
    }
  ];
};

/**
 * Main AI generation function
 * Simulates AI processing with realistic delay and contextual output
 */
export const generateQuiz = async (
  topic: string,
  difficulty: QuizDifficulty = 'intermediate'
): Promise<Quiz> => {
  // Simulate AI processing time (2-3 seconds for suspense)
  const processingTime = 2000 + Math.random() * 1000;
  
  await new Promise(resolve => setTimeout(resolve, processingTime));

  // Normalize topic for matching
  const normalizedTopic = topic.toLowerCase().trim();
  
  // Find matching question bank or use generic generator
  let questions: QuizQuestion[];
  
  // Check for exact or partial matches in question bank
  const matchedKey = Object.keys(QUESTION_BANKS).find(key => 
    normalizedTopic.includes(key) || key.includes(normalizedTopic)
  );

  if (matchedKey) {
    questions = QUESTION_BANKS[matchedKey](difficulty);
  } else {
    questions = generateGenericQuestions(topic, difficulty);
  }

  return {
    topic,
    difficulty,
    questions,
    generatedAt: new Date()
  };
};

/**
 * Validate quiz input
 */
export const validateQuizInput = (topic: string): { valid: boolean; error?: string } => {
  if (!topic || topic.trim().length === 0) {
    return { valid: false, error: 'Please enter a topic' };
  }
  
  if (topic.trim().length < 3) {
    return { valid: false, error: 'Topic must be at least 3 characters' };
  }
  
  if (topic.trim().length > 100) {
    return { valid: false, error: 'Topic must be less than 100 characters' };
  }
  
  return { valid: true };
};
