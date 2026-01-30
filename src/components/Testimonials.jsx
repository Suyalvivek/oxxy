import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="section-header">
                    <h2>Real Stories from Real Families</h2>
                    <p>Join thousands who are saving on healthcare</p>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "My father is 78 and has diabetes. Every insurance company rejected him. Oxxy accepted him immediately and we've already saved ₹45,000 in the first year on his medications and regular checkups. This is a blessing."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">RS</div>
                            <div className="author-info">
                                <h4>Rajesh Sharma</h4>
                                <p>Mumbai, 42 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Saved ₹45,000 in Year 1</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Finally got coverage for my pregnancy without waiting 2 years! The entire process was smooth and I got all prenatal care and delivery expenses covered. Oxxy saved us over ₹80,000."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">PK</div>
                            <div className="author-info">
                                <h4>Priya Kapoor</h4>
                                <p>Bangalore, 29 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Saved ₹80,000 on Maternity</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "I have hypertension and thyroid. Traditional insurance quoted me ₹3,500/month with 4-year waiting. Oxxy gave me instant coverage at ₹399 with no waiting. Best decision ever!"
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">AM</div>
                            <div className="author-info">
                                <h4>Anita Malhotra</h4>
                                <p>Delhi, 54 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Saved ₹37,000 Annually</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "Our family of 5 was spending ₹1,20,000 yearly on healthcare. With Oxxy, it's down to ₹72,000 including the membership. The dental coverage alone saved us ₹25,000 this year!"
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">VR</div>
                            <div className="author-info">
                                <h4>Vikram Reddy</h4>
                                <p>Hyderabad, 38 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Saved ₹48,000 for Family</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "The instant claim process is amazing. No paperwork, no waiting weeks. I submit bills on WhatsApp and get reimbursed in 2 days. Healthcare should have always been this simple."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">SK</div>
                            <div className="author-info">
                                <h4>Suresh Kumar</h4>
                                <p>Pune, 45 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Saved ₹32,000 in Year 1</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-text">
                            "My mother survived cancer last year. Getting her any coverage was impossible until we found Oxxy. They cover her oncology follow-ups, medicines, everything. Truly inclusive healthcare."
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">NS</div>
                            <div className="author-info">
                                <h4>Neha Singh</h4>
                                <p>Gurugram, 35 years</p>
                                <div className="rating">★★★★★</div>
                            </div>
                        </div>
                        <div className="savings-badge">Peace of Mind: Priceless</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
