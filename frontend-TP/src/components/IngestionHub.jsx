import React, { useState } from 'react';
import { Camera, MessageSquare, FileText, Sparkles, Send, X } from 'lucide-react';
import '../css/IngestionHub.css';

export default function IngestionHub({ onExpenseLogged }) {
  const [activeModal, setActiveModal] = useState(null); // 'scan' | 'ai' | 'manual' | null
  const [promptText, setPromptText] = useState('');

  const handleAIPromptSubmit = (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;

    if (onExpenseLogged) {
      onExpenseLogged({
        type: 'AI_PROMPT',
        rawInput: promptText,
        timestamp: new Date(),
      });
    }

    setPromptText('');
    setActiveModal(null);
  };

  return (
    <div className="ingestion-container">
      {/* Header */}
      <div className="ingestion-header">
        <Sparkles size={18} color="#4F46E5" />
        <h2 className="ingestion-title">Record an expense with AI</h2>
      </div>

      {/* Grid of 3 Methods */}
      <div className="ingestion-grid">
        
        {/* Method 1: AI OCR Receipt */}
        <button 
          className="ingestion-card" 
          onClick={() => setActiveModal('scan')}
        >
          <div className="ingestion-icon-wrapper" style={{ backgroundColor: '#242424', color: '#53d7f2' }}>
            <Camera size={20} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="ingestion-card-title">Scan Receipt</div>
            <div className="ingestion-card-desc">Upload photo or PDF invoice</div>
          </div>
        </button>

        {/* Method 2: Natural Language Prompt */}
        <button 
          className="ingestion-card" 
          onClick={() => setActiveModal('ai')}
        >
          <div className="ingestion-icon-wrapper" style={{ backgroundColor: '#242424', color: '#53d7f2' }}>
            <MessageSquare size={20} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="ingestion-card-title">Type Prompt</div>
            <div className="ingestion-card-desc">e.g., "Spent ₱250 on lunch"</div>
          </div>
        </button>

        {/* Method 3: Standard Manual Entry */}
        <button 
          className="ingestion-card" 
          onClick={() => setActiveModal('manual')}
        >
          <div className="ingestion-icon-wrapper" style={{ backgroundColor: '#242424', color: '#53d7f2' }}>
            <FileText size={20} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="ingestion-card-title">Manual Entry</div>
            <div className="ingestion-card-desc">Fill out a standard form</div>
          </div>
        </button>

      </div>

      {/* AI PROMPT MODAL / POPUP */}
      {activeModal === 'ai' && (
        <div className="ingestion-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="ingestion-modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="#4F46E5" />
                <h3 style={{ margin: 0, fontSize: '16px' }}>Type Natural Prompt</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)} 
                style={{ all: 'unset', cursor: 'pointer' }}
              >
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <form onSubmit={handleAIPromptSubmit} className="ingestion-input-group">
              <input
                type="text"
                className="ingestion-text-input"
                placeholder='e.g., "Paid ₱1,500 for internet bill today"'
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                autoFocus
              />
              <button type="submit" className="ingestion-send-btn">
                <Send size={16} color="#FFFFFF" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* RECEIPT SCAN MODAL / POPUP */}
      {activeModal === 'scan' && (
        <div className="ingestion-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="ingestion-modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Upload Receipt</h3>
              <button onClick={() => setActiveModal(null)} style={{ all: 'unset', cursor: 'pointer' }}>
                <X size={18} color="#6B7280" />
              </button>
            </div>
            
            <div style={{ border: '2px dashed #A5B4FC', borderRadius: '8px', padding: '32px', textAlign: 'center', backgroundColor: '#F9FAFB' }}>
              <Camera size={32} color="#4F46E5" />
              <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#4B5563', fontWeight: '500' }}>
                Drag & drop image here or click to upload
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}