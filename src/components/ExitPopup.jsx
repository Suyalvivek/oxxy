import React, { useState, useEffect } from 'react';

const ExitPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [exitIntentShown, setExitIntentShown] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !exitIntentShown && !isSuccess) {
                setIsVisible(true);
                setExitIntentShown(true);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsVisible(false);
        }

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [exitIntentShown, isSuccess]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setError('');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (!isVisible) return null;

    return (
        <div className={`exit-popup ${isVisible ? 'active' : ''}`} id="exitPopup" onClick={(e) => {
            if (e.target.id === 'exitPopup') setIsVisible(false);
        }}>
            <div className="exit-popup-content">
                <button className="exit-popup-close" onClick={() => setIsVisible(false)}>×</button>

                {isSuccess ? (
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                        <h3>Offer Claimed!</h3>
                        <p>We've sent the special offer code to <strong>{email}</strong>.</p>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--gray-500)' }}>Check your inbox (and spam folder) in the next 5 minutes.</p>
                        <button
                            onClick={() => setIsVisible(false)}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                marginTop: '1.5rem',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Got it, thanks!
                        </button>
                    </div>
                ) : (
                    <>
                        <h3>Wait! Special Offer</h3>
                        <p>Get your first month at a special price + free health checkup worth ₹2,000</p>
                        <div className="special-offer">
                            <span className="price">₹299</span>
                            <span className="original-price">₹399</span>
                            <p style={{ marginTop: '1rem', color: 'var(--gray-700)' }}>+ Free Full Body Checkup (Worth ₹2,000)</p>
                        </div>
                        <form className="exit-popup-form" id="exitForm" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError('');
                                }}
                                style={error ? { borderColor: '#e53e3e' } : {}}
                            />
                            {error && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: '1rem', marginTop: '-0.5rem' }}>{error}</p>}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                            >
                                {isSubmitting ? 'Claiming Offer...' : 'Claim This Offer →'}
                            </button>
                        </form>
                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', marginTop: '1rem', textAlign: 'center' }}>This offer expires in 10 minutes</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ExitPopup;
