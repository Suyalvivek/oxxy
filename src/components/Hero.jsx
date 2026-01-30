import React, { useState } from 'react';
import familyImg from '../assets/images/happy-family.png';

const Hero = () => {
    const [formData, setFormData] = useState({
        phone: '',
        name: '',
        city: '',
        members: '1'
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit mobile number';
        }
        if (formData.name.trim().length < 2) {
            newErrors.name = 'Please enter your full name';
        }
        if (!formData.city) {
            newErrors.city = 'Please select your city';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Complete Family Health Coverage <span>from ₹399/Month</span></h1>
                    <p>No Age Limits • No Exclusions • No Medical Screening Required. Join 10,000+ Indian families saving up to 40% on healthcare.</p>

                    <div className="hero-image-container" style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                        <img src={familyImg} alt="Happy Family Protected by Oxxy" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">200K+</span>
                            <span className="stat-label">Partner Facilities</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1,500+</span>
                            <span className="stat-label">Cities Covered</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">40%</span>
                            <span className="stat-label">Average Savings</span>
                        </div>
                    </div>
                </div>

                <div className="hero-form" id="signup">
                    {isSuccess ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Application Received!</h3>
                            <p>Thanks {formData.name}! We've sent a confirmation to {formData.phone}.</p>
                            <p style={{ marginTop: '1rem', color: 'var(--gray-700)' }}>Your coverage for {formData.members} member(s) in {formData.city.charAt(0).toUpperCase() + formData.city.slice(1)} is being processed.</p>
                            <button
                                onClick={() => {
                                    setIsSuccess(false);
                                    setFormData({ phone: '', name: '', city: '', members: '1' });
                                }}
                                className="submit-button"
                                style={{ marginTop: '2rem' }}
                            >
                                Submit Another Application
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="form-header">
                                <h3>Start Saving Today</h3>
                                <p>Get instant coverage in 2 minutes</p>
                            </div>
                            <form id="signupForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter 10-digit mobile"
                                        style={errors.phone ? { borderColor: '#e53e3e' } : {}}
                                    />
                                    {errors.phone && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        style={errors.name ? { borderColor: '#e53e3e' } : {}}
                                    />
                                    {errors.name && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        style={errors.city ? { borderColor: '#e53e3e' } : {}}
                                    >
                                        <option value="" disabled>Select your city</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="bangalore">Bangalore</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="pune">Pune</option>
                                        <option value="gurugram">Gurugram</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.city && <span style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>{errors.city}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="members">Family Members</label>
                                    <select
                                        id="members"
                                        name="members"
                                        value={formData.members}
                                        onChange={handleChange}
                                    >
                                        <option value="1">1 Member</option>
                                        <option value="2">2 Members</option>
                                        <option value="3">3 Members</option>
                                        <option value="4">4 Members</option>
                                        <option value="5">5 Members</option>
                                        <option value="6">6+ Members</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                    style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                                >
                                    {isSubmitting ? 'Processing...' : 'Get Instant Coverage →'}
                                </button>
                            </form>
                            <div className="trust-badges">
                                <div className="badge">
                                    <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Instant Activation
                                </div>
                                <div className="badge">
                                    <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    No Hidden Charges
                                </div>
                                <div className="badge">
                                    <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    30-Day Money Back
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
