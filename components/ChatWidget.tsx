import React, { useState } from 'react';

type Message = { from: 'user' | 'bot'; text: string };

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((m) => [...m, { from: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || 'No response from server.';
      setMessages((m) => [...m, { from: 'bot', text: reply }]);
    } catch (err) {
      setMessages((m) => [...m, { from: 'bot', text: 'Network error contacting server.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-dsu-primary text-white flex items-center justify-center shadow-lg"
        aria-label="Toggle chat widget"
      >
        {open ? '✕' : 'Chat'}
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-3">
          <div className="flex flex-col gap-2 max-h-72 overflow-y-auto mb-2">
            {messages.length === 0 && <div className="text-sm text-slate-500">Ask about admissions, programs, or contacts.</div>}
            {messages.map((m, idx) => (
              <div key={idx} className={m.from === 'user' ? 'text-right' : 'text-left'}>
                <div className={m.from === 'user' ? 'inline-block bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-md' : 'inline-block bg-dsu-primary text-white px-3 py-1 rounded-md'}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
              className="flex-1 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} disabled={loading} className="px-3 py-2 bg-dsu-secondary text-white rounded-md">
              {loading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
