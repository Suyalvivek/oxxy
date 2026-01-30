import React from 'react';

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="section-header">
                <h2>Why 10,000+ Families Choose Oxxy</h2>
                <p>Healthcare coverage that actually works for Indian families</p>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">👩‍🦳</div>
                    <h3>No Age Limits (0-120 Years)</h3>
                    <p>Cover everyone from newborns to seniors. Unlike traditional insurance, we don't reject based on age. Finally, health coverage for your entire family.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">❤️</div>
                    <h3>Pre-Existing Diseases Covered</h3>
                    <p>Cancer, Diabetes, Heart Disease - all covered from day 1. No 2-4 year waiting periods. Get the care you need immediately.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🚫</div>
                    <h3>No Medical Screening</h3>
                    <p>No embarrassing tests or rejections. Apply online in 2 minutes and get instant approval. Healthcare should be accessible to everyone.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>0 Days Waiting Period</h3>
                    <p>Instant activation. Use your benefits the same day you join. No 30-day waits for general ailments or years for specific conditions.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏥</div>
                    <h3>OPD + IPD Coverage</h3>
                    <p>Doctor consultations, medicines, diagnostics, and hospitalization - all covered. Complete healthcare protection, not just emergencies.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">✨</div>
                    <h3>Dental, Cosmetic & Pregnancy</h3>
                    <p>Coverage for dental care, cosmetic procedures, and maternity expenses. The things traditional insurance excludes? We include them.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
