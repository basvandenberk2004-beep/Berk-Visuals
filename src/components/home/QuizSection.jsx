import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics';

const questions = [
  {
    id: 1,
    question: "Weet je wie jouw ideale klant is?",
    options: [
      { label: "Ja, precies", value: "yes", points: 2 },
      { label: "Globaal wel", value: "maybe", points: 1 },
      { label: "Niet echt", value: "no", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Heb je tijd om zelf 4+ uur per week te editen?",
    options: [
      { label: "Ja, geen probleem", value: "yes", points: 0 },
      { label: "Misschien", value: "maybe", points: 1 },
      { label: "Nee, geen tijd", value: "no", points: 3 }
    ]
  },
  {
    id: 3,
    question: "Heb je al script-ideeën klaarliggen?",
    options: [
      { label: "Ja, veel ideeën", value: "yes", points: 2 },
      { label: "Een paar", value: "maybe", points: 1 },
      { label: "Nee, blanco", value: "no", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Voel je je comfortabel voor de camera?",
    options: [
      { label: "Ja, zeker!", value: "yes", points: 2 },
      { label: "Beetje zenuwachtig", value: "maybe", points: 1 },
      { label: "Nee, ongemakkelijk", value: "no", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Ben je nu al consistent zichtbaar online?",
    options: [
      { label: "Ja, regelmatig", value: "yes", points: 2 },
      { label: "Af en toe", value: "maybe", points: 1 },
      { label: "Nee, bijna nooit", value: "no", points: 0 }
    ]
  }
];

const getIcon = (value) => {
  switch(value) {
    case 'yes':
      return <CheckCircle2 className="w-5 h-5" />;
    case 'no':
      return <XCircle className="w-5 h-5" />;
    case 'maybe':
      return <HelpCircle className="w-5 h-5" />;
    default:
      return null;
  }
};

const getButtonColor = (value) => {
  switch(value) {
    case 'yes':
      return 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300';
    case 'no':
      return 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 hover:border-red-300';
    case 'maybe':
      return 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300';
    default:
      return '';
  }
};

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
        trackEvent('Quiz', 'completed_video_quiz', 'Quiz Completion');
      }, 300);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, points) => sum + points, 0);
    const maxScore = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0);
    const percentage = (totalScore / maxScore) * 100;

    // Check if they answered "no" to time question (question 2, index 1)
    const hasNoTime = answers[1] === 3;

    if (hasNoTime || percentage < 50) {
      return {
        type: 'outsource',
        title: 'Je hebt potentie, maar mist tijd! 🚀',
        description: 'Geen zorgen – uitbesteden is jouw beste optie. Ik neem het volledig uit handen: van scripting tot montage én plaatsing. Jij focust op ondernemen, ik zorg voor je content.',
        emoji: '💡'
      };
    } else {
      return {
        type: 'ready',
        title: 'Je bent er klaar voor! 🎬',
        description: 'Je hebt al een goede basis, maar wil je content naar bioscoop-kwaliteit tillen? Met mijn expertise in storytelling, editing en strategie maken we samen content die écht converteert.',
        emoji: '⭐'
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-3 sm:px-4 bg-gradient-to-b from-white to-gray-50" aria-label="Interactieve videoproductie check">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Interactieve Check</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 px-4">
              Videoproductie Check: Ben jij klaar voor{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                short-form content?
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4">
              Beantwoord 5 snelle vragen en ontdek welke aanpak bij jou past.
            </p>
          </motion.div>
        )}

        {/* Progress Bar */}
        {!showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex justify-between items-center mb-2 px-4">
              <span className="text-sm text-gray-600">Voortgang</span>
              <span className="text-sm font-semibold text-blue-600">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}

        {/* Quiz Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 p-6 sm:p-8 md:p-12 shadow-2xl"
              >
                <div className="mb-8">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {questions[currentQuestion].question}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.points)}
                      className={`w-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 font-semibold text-base sm:text-lg flex items-center gap-3 sm:gap-4 ${getButtonColor(option.value)} hover:scale-[1.02] active:scale-[0.98]`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {getIcon(option.value)}
                      <span className="flex-1 text-left">{option.label}</span>
                      <ArrowRight className="w-5 h-5 opacity-60" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl border-2 border-blue-300 p-6 sm:p-8 md:p-12 shadow-2xl"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-6xl sm:text-7xl md:text-8xl mb-6"
                  >
                    {result.emoji}
                  </motion.div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {result.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
                    {result.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Button
                      onClick={() => {
                        trackEvent('Quiz', 'click_strategy_call', 'Quiz Result');
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                    >
                      Plan mijn strategiegesprek
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                      onClick={resetQuiz}
                      variant="outline"
                      className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
                    >
                      Quiz opnieuw doen
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SEO Text */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Deze snelle video marketing check helpt je bepalen of je klaar bent voor professionele videoproductie 
            of dat uitbesteden de beste optie is voor jouw MKB-bedrijf in Heusden.
          </p>
        </div>
      </div>
    </section>
  );
}
