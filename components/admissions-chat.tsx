'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}

export function AdmissionsChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 'welcome',
      sender: 'agent',
      text: "Welcome to Venite University's Admissions Registry Counseling. I am Counselor Julian Vane. How may I assist you with your degree tracks, scholarship criteria, or entrance applications today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const presets = [
    { label: '🎓 Criteria', query: 'What are the core entrance requirements?' },
    { label: '💰 Scholarships', query: 'Do you offer merit scholarships or tuition grants?' },
    { label: '🔄 Transfers', query: 'Can I transfer previous college credits?' },
    { label: '📅 Deadlines', query: 'What are the application deadlines for the Fall intake?' },
  ];

  // Auto-scroll on new messages
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const generateReply = (userQuery: string) => {
    const query = userQuery.toLowerCase();
    
    if (query.includes('scholarship') || query.includes('grant') || query.includes('tuition') || query.includes('fee') || query.includes('cost') || query.includes('financial') || query.includes('aid')) {
      return "Venite University allocates over $15M in merit fellowships and need-based grants annually. Outstanding candidates are automatically evaluated for our 100% tuition Merit Excellence Scholarship upon submitting their main application.";
    }
    
    if (query.includes('criteria') || query.includes('requirement') || query.includes('require') || query.includes('sat') || query.includes('act') || query.includes('gpa') || query.includes('score')) {
      return "Our admissions board practices holistic screening. Necessary credentials include high school transcripts, two reference letters, and a personal Statement of Purpose essay. Standardized tests (SAT/ACT) are optional but recommended; our typical competitive tier is SAT 1250+.";
    }

    if (query.includes('transfer') || query.includes('credit') || query.includes('previous') || query.includes('college')) {
      return "Yes, transfer scholars are welcome! Courses from accredited colleges transfer over if graded 'C' or higher and matching 80% of our curriculum syllabus. Our registry board will issue an official evaluation within 10 business days.";
    }

    if (query.includes('deadline') || query.includes('apply') || query.includes('dates') || query.includes('when') || query.includes('intake')) {
      return "For our next Fall academic session, key deadlines are: Early Action (non-binding) by November 1st, Regular Round 1 by January 15th, and rolling admissions until June 30th on a seat-available basis.";
    }

    if (query.includes('course') || query.includes('major') || query.includes('degree') || query.includes('study') || query.includes('program') || query.includes('stem') || query.includes('computer') || query.includes('business')) {
      return "We offer premier, high-intensity majors spanning Software Engineering, Business Administration, Data Science, and International Relations. Review specific course modules inside our 'Academic Catalog' page.";
    }

    if (query.includes('contact') || query.includes('talk') || query.includes('phone') || query.includes('call') || query.includes('email') || query.includes('number') || query.includes('person') || query.includes('address')) {
      return "You can reach the Admissions Registry desk at +1 (555) 234-5679 or email us directly at admissions@venite.edu. Our office queue is active Monday through Friday, 8am to 5pm.";
    }

    return "Thank you for that inquiry! To provide exact prospectus specifications or schedule a custom virtual session with our dean, please share your email address here or submit the detailed Inquiry Form on this contact page.";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `msg-user-${prev.length}`,
        sender: 'user',
        text: textToSend,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
    setInputText('');
    setIsTyping(true);

    // Natural typing delay
    setTimeout(() => {
      const reply = generateReply(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-agent-${prev.length}`,
          sender: 'agent',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <>
      {/* Minimized Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="admissions-chat-trigger"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-void text-veil border border-dusk/30 hover:border-marigold hover:bg-void/90 px-5 py-3.5 shadow-2xl cursor-pointer transition-all duration-300 rounded-none group select-none focus-ring"
            title="Chat with our academic counselor desk"
          >
            {/* Live pulsing light indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-marigold opacity-75"></span>
              <span className="relative inline-flex bg-marigold h-2.5 w-2.5"></span>
            </span>
            <MessageSquare className="w-4 h-4 text-marigold group-hover:scale-110 transition-transform duration-300" />
            <span className="font-grotesque text-[10px] font-black tracking-widest uppercase">
              Chat with Admissions
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Interactive Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="admissions-chat-panel"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-[400px] h-[540px] bg-void border-2 border-marigold text-veil shadow-2xl flex flex-col font-sans overflow-hidden z-50 rounded-none"
          >
            {/* Header */}
            <div className="p-4 bg-void border-b border-dusk/20 flex items-center justify-between select-none">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-void border-2 border-marigold flex items-center justify-center text-[10px] font-grotesque font-bold text-marigold tracking-wider shrink-0">
                  VU
                </div>
                <div>
                  <h4 className="font-grotesque text-xs font-black tracking-wider text-veil uppercase leading-none">
                    Admissions Counselor
                  </h4>
                  <p className="text-[9px] text-veil/40 tracking-wider flex items-center gap-1.5 font-mono uppercase mt-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
                    Julian Vane (Counseling Queue)
                  </p>
                </div>
              </div>
              
              <button
                id="admissions-chat-close"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-veil/40 hover:text-marigold hover:bg-veil/5 transition-all cursor-pointer rounded-none"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message log area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-void/90 scrollbar-thin scrollbar-thumb-dusk/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`${
                      msg.sender === 'user'
                        ? 'bg-marigold/10 border border-marigold text-veil ml-auto'
                        : 'bg-void border border-dusk/30 text-veil/90 mr-auto'
                    } p-3.5 max-w-[85%] text-xs leading-relaxed rounded-none`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[8px] text-veil/30 font-mono mt-1 px-1 tracking-wider uppercase">
                    {msg.sender === 'user' ? 'You' : 'Julian Vane'} &middot; {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing simulation */}
              {isTyping && (
                <div className="flex items-center gap-2 text-veil/40 text-[10px] italic font-mono py-1">
                  <span className="flex gap-1 shrink-0">
                    <span className="w-1 h-1 bg-marigold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-marigold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-marigold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                  <span className="tracking-wide uppercase">Julian is drafting response...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Inquiries Presets */}
            <div className="p-3 bg-void/50 border-t border-dusk/20 space-y-2 select-none shrink-0">
              <span className="text-[8px] text-veil/40 uppercase tracking-[0.15em] font-mono font-bold block">
                Choose a standard enquiry path
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => handleSendMessage(p.query)}
                    className="text-[9px] font-bold uppercase tracking-wider text-left bg-void border border-dusk/20 hover:border-marigold hover:text-marigold px-2.5 py-1.5 text-veil/60 transition-all cursor-pointer rounded-none truncate"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat form controls */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-void border-t border-dusk/20 flex gap-2 items-center shrink-0"
            >
              <input
                id="admissions-chat-input"
                type="text"
                placeholder="Ask about curriculum, tuition..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
                className="flex-1 bg-void border border-dusk/20 px-3 py-3 text-xs text-veil placeholder-dusk focus:outline-hidden focus:border-marigold transition-colors font-sans rounded-none disabled:opacity-50"
                maxLength={200}
                autoComplete="off"
              />
              <button
                id="admissions-chat-submit"
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-marigold hover:bg-cobalt text-void hover:text-veil disabled:opacity-40 disabled:hover:bg-marigold transition-colors cursor-pointer rounded-none shrink-0 flex items-center justify-center focus-ring"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
