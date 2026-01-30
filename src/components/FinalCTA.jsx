import React from 'react';

const FinalCTA = () => {
    return (
        <section className="final-cta">
            <div className="final-cta-container">
                <div className="urgency-banner">
                    <span className="pulse-dot"></span>
                    <span>347 families joined this week</span>
                </div>

                <h2>Join India's Healthcare Revolution</h2>
                <p>10,000+ families are already saving. Will you be next?</p>

                <div className="cta-buttons">
                    <a href="#signup" className="cta-primary">Start Saving Now - ₹399/Month</a>
                    <a href="#calculator" className="cta-secondary">Calculate My Savings</a>
                </div>

                <div className="guarantee">
                    <h4>🛡️ 30-Day Money-Back Guarantee</h4>
                    <p>Not satisfied? Get a full refund, no questions asked. We're confident you'll love Oxxy, but if not, we'll return every rupee.</p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
