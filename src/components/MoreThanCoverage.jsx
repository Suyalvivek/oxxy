import React from 'react';

const MoreThanCoverage = () => {
    return (
        <section className="more-than-coverage">
            <div className="more-than-coverage-container">
                <div className="section-header">
                    <h2>More Than Just Coverage</h2>
                    <p>We care for you like family. Long-term health management.</p>
                </div>
                <div className="coverage-features-grid">
                    <div className="coverage-feature-card">
                        <div className="coverage-icon purple">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </div>
                        <h3>Smart Refill Reminders</h3>
                        <p>Never miss a dose. We track your chronic medication needs and remind you to refill, ensuring 100% adherence.</p>
                    </div>

                    <div className="coverage-feature-card">
                        <div className="coverage-icon green">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Family Wellness Pool</h3>
                        <p>Add family members to your plan easily. Manage everyone's health records and savings from a single dashboard.</p>
                    </div>

                    <div className="coverage-feature-card">
                        <div className="coverage-icon orange">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                <path d="M8 14h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 14h.01"></path>
                            </svg>
                        </div>
                        <h3>Chronic Care Management</h3>
                        <p>Specialized support for Diabetes & BP. Regular monitoring and discounted tests to keep you healthy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreThanCoverage;
