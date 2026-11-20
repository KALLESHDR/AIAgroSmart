import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mic, 
  Volume2, 
  Sparkles, 
  RefreshCw, 
  Send 
} from 'lucide-react';
import { getSmartAgriAnswer } from '../services/geminiService';

const sampleVoiceQueries = {
  kn: [
    "ಕೋಲಾರ ಮಂಡಿ ಇಂದಿನ ಟೊಮೇಟೊ ದರ ಎಷ್ಟು? (Kolar Tomato Rate)",
    "ಹಿಂಗಾರು ಹಂಗಾಮಿಗೆ ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ ಯಾವ ಬೆಳೆ ಲಾಭದಾಯಕ?",
    "ಹತ್ತಿರದ ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್ ಮತ್ತು ಮಂಡಿ ಎಲ್ಲಿದೆ?",
    "ಸರ್ಕಾರಿ ಇ-ನಾಮ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಬೆಳೆ ಹೇಗೆ ಮಾರಾಟ ಮಾಡುವುದು?"
  ],
  hi: [
    "आज नाशिक मंडी में प्याज का क्या भाव है?",
    "काली मिट्टी में खरीफ के लिए सबसे अच्छी और ज्यादा मुनाफे वाली फसल?",
    "गेहूं का ताजा मंडी भाव और क्या 4 दिन बाद भाव बढ़ेंगे?",
    "सुपरमार्केट को सीधे सब्जी बेचने के लिए कैसे रजिस्टर करें?"
  ],
  te: [
    "వరంగల్ మార్కెట్‌లో పత్తి ప్రస్తుత ధర ఎంత?",
    "టమాటా ధరలు మరియు సమీపంలో ఉన్న కోల్డ్ స్టోరేజ్ ఎక్కడ ఉంది?",
    "ఎరుపు నేలల్లో రబీ సీజన్‌కు ఉత్తమమైన పంట ఏది?"
  ],
  mr: [
    "लासलगाव बाजार समितीत कांद्याचे आजचे कमाल व सरासरी भाव काय?",
    "सोयाबीन साठवण्यासाठी जवळचे शासकीय शीतगृह कुठे आहे?",
    "शेतकरी थेट मॉल किंवा सुपरमार्केटला माल कसा विकू शकतात?"
  ],
  en: [
    "What is the modal price of Sharbati wheat in Punjab mandis today?",
    "Recommend high-profit crops for black cotton soil with drip irrigation",
    "Find nearest verified cold storage warehouse with low rental charges",
    "How to execute direct farm-to-supermarket contract with 24-hr payment?"
  ]
};

export default function VoiceSearchHubPage({ onBackToLanding, onOpenMapScreen, initialLang = 'en' }) {
  const [activeLang, setActiveLang] = useState(initialLang);
  const [isListening, setIsListening] = useState(false);
  const [queryInput, setQueryInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      sender: 'assistant',
      text: activeLang === 'kn'
        ? "ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ! AIAgriCentral ಧ್ವನಿ ಸಹಾಯಕಕ್ಕೆ ಸುಸ್ವಾಗತ. ನೀವು ಕನ್ನಡ, ಹಿಂದಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಂಡಿ ದರಗಳು, ಬೆಳೆ ಸಲಹೆ ಅಥವಾ ಹತ್ತಿರದ ಖರೀದಿದಾರರ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಬಹುದು."
        : activeLang === 'hi'
        ? "नमस्ते किसान भाइयों! AIAgriCentral वॉइस असिस्टेंट में आपका स्वागत है। आप अपनी मातृभाषा में मंडी भाव, फसल सलाह या खरीदारों के बारे में पूछ सकते हैं।"
        : "Welcome to AIAgriCentral Voice Assistant! You can ask questions about APMC mandi prices, optimal crop varieties, forward demand, or nearest cold storage facilities in your mother tongue.",
      time: "Just now"
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Web Speech Recognition
  const handleStartListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. You can type or click the sample queries below.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = activeLang === 'hi' ? 'hi-IN' : activeLang === 'kn' ? 'kn-IN' : activeLang === 'te' ? 'te-IN' : activeLang === 'mr' ? 'mr-IN' : 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQueryInput(transcript);
        setIsListening(false);
        handleSendQuestion(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setIsListening(false);
    }
  };

  const handleSendQuestion = async (textToSend) => {
    const query = textToSend || queryInput;
    if (!query.trim()) return;

    const userMessage = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatLog(prev => [...prev, userMessage]);
    setQueryInput('');
    setLoading(true);

    try {
      const answer = await getSmartAgriAnswer({
        question: query,
        language: activeLang
      });

      const assistantMessage = {
        sender: 'assistant',
        text: answer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatLog(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeakText = (text) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = activeLang === 'hi' ? 'hi-IN' : activeLang === 'kn' ? 'kn-IN' : 'en-IN';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header Bar */}
      <section className="bg-white border-b border-emerald-100 py-4 px-4 sm:px-6 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="hover:text-slate-800 cursor-pointer" onClick={onBackToLanding}>AIAgriCentral</span>
              <span>/</span>
              <span>AI Solutions</span>
              <span>/</span>
              <span className="font-bold text-teal-800">Regional Voice Search</span>
            </div>
          </div>

          {/* Language Switcher for Voice */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-bold hidden sm:inline">Speaking in:</span>
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
              {[
                { code: 'kn', label: 'ಕನ್ನಡ' },
                { code: 'hi', label: 'हिन्दी' },
                { code: 'te', label: 'తెలుగు' },
                { code: 'mr', label: 'मराठी' },
                { code: 'en', label: 'English' }
              ].map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    activeLang === lang.code
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Banner with Smiling Farmer with Smartphone Real Image */}
      <section className="relative bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 text-white overflow-hidden py-10 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
          <img src="/images/indian-farmer-mobile.jpg" alt="Farmer with mobile phone" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-teal-500/20 text-teal-200 border border-teal-400/30 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-teal-300" />
              <span>Multilingual Conversational Agronomy</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Hands-Free Regional Voice Assistant for Farmers & Buyers
            </h1>
            <p className="text-teal-100/90 text-xs sm:text-sm leading-relaxed">
              No typing needed in the field. Speak naturally in Kannada, Hindi, Telugu, Marathi, or English. Receive instant answers on e-NAM rates, weather alerts, pest management, and nearby buyers.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shrink-0">
            <img 
              src="/images/indian-farmer-mobile.jpg" 
              alt="Farmer with phone" 
              className="w-16 h-16 rounded-2xl object-cover border border-emerald-300" 
            />
            <div className="text-xs space-y-0.5">
              <strong className="text-white block font-black">Regional Speech Engine</strong>
              <span className="text-emerald-300 block text-[11px]">e-NAM & Krishi Vigyan Kendra Integrated</span>
              <span className="text-[10px] text-slate-300 block">Listen in your dialect</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Voice Search Console & Chat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Mic & Regional Prompt Chips (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-6 text-center">
            
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Tap to Speak
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-2">
                Talk to AIAgriCentral
              </h3>
              <p className="text-xs text-slate-500">
                {isListening ? "Listening... Speak now!" : "Click the microphone button and ask your question"}
              </p>
            </div>

            {/* Glowing Big Mic Button */}
            <div className="relative py-4 flex justify-center">
              {isListening && (
                <div className="w-32 h-32 rounded-full bg-red-500/20 flex items-center justify-center animate-ping absolute inset-0 m-auto" />
              )}
              <button
                type="button"
                onClick={handleStartListening}
                className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 relative z-10 active:scale-95 ${
                  isListening
                    ? 'bg-red-600 text-white shadow-red-500/40 animate-pulse ring-8 ring-red-200'
                    : 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-emerald-600/30 hover:scale-105'
                }`}
              >
                {isListening ? <Mic className="w-10 h-10 animate-bounce" /> : <Mic className="w-10 h-10" />}
              </button>
            </div>

            {/* Simulated Audio Waveform when listening */}
            {isListening && (
              <div className="flex items-center justify-center gap-1.5 h-8">
                <span className="w-1 h-3 bg-red-500 rounded-full animate-bounce"></span>
                <span className="w-1 h-6 bg-red-500 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                <span className="w-1 h-8 bg-red-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1 h-5 bg-red-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                <span className="w-1 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            {/* Regional Sample Voice Queries */}
            <div className="text-left space-y-2 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                Popular Regional Questions ({activeLang.toUpperCase()}):
              </span>
              <div className="space-y-1.5">
                {(sampleVoiceQueries[activeLang] || sampleVoiceQueries.en).map((queryText, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendQuestion(queryText)}
                    className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-900 border border-slate-100 text-slate-700 text-xs font-medium transition flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{queryText}</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-2 group-hover:scale-110" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Conversational Dialogue Stream (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-emerald-100 shadow-xs flex flex-col h-[580px] overflow-hidden">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <strong className="text-xs font-black text-slate-900">Live Voice Dialogue</strong>
              </div>
              <button
                onClick={() => setChatLog([chatLog[0]])}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-800"
              >
                Clear History
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              {chatLog.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs font-medium'
                        : 'bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200/80 font-medium'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                  </div>

                  <div className="flex items-center gap-2 mt-1 px-1">
                    <span className="text-[10px] text-slate-400">{msg.time}</span>
                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleSpeakText(msg.text)}
                        className="text-[10px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Read Aloud</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs text-slate-500 p-3 bg-slate-50 rounded-2xl w-fit animate-pulse">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                  <span>Preparing answer based on live Mandi and agronomy databases...</span>
                </div>
              )}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuestion(queryInput);
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Or type your question here (ಕನ್ನಡ, हिन्दी, English)..."
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-emerald-500"
              />
              <button
                type="submit"
                disabled={!queryInput.trim() || loading}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
