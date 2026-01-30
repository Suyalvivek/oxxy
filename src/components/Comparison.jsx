import React from 'react';

const Comparison = () => {
    return (
        <section className="comparison" id="comparison">
            <div className="comparison-container">
                <div className="section-header">
                    <h2>Oxxy vs. Traditional Health Insurance</h2>
                    <p>See why thousands are switching to Oxxy</p>
                </div>
                <div className="comparison-table">
                    <div className="table-header">
                        <div>Feature</div>
                        <div>Oxxy Swastha Super Plan</div>
                        <div>Traditional Insurance</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Age Limit</div>
                        <div><span className="check">✓</span> 0-120 years (No limit)</div>
                        <div><span className="cross">✗</span> 65-80 years max</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Pre-existing Disease Coverage</div>
                        <div><span className="check">✓</span> Immediate coverage</div>
                        <div><span class="cross">✗</span> 2-4 year waiting</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Medical Screening</div>
                        <div><span className="check">✓</span> Not required</div>
                        <div><span class="cross">✗</span> Mandatory tests</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Waiting Period</div>
                        <div><span className="check">✓</span> 0 days - Instant</div>
                        <div><span class="cross">✗</span> 30 days to 4 years</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">OPD Coverage</div>
                        <div><span className="check">✓</span> Full coverage</div>
                        <div><span class="cross">✗</span> Limited/excluded</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Dental & Cosmetic</div>
                        <div><span className="check">✓</span> Covered</div>
                        <div><span class="cross">✗</span> Excluded</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Pregnancy/Maternity</div>
                        <div><span className="check">✓</span> Covered</div>
                        <div><span class="cross">✗</span> 9-24 month wait</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Monthly Cost</div>
                        <div><span className="check">✓</span> ₹399 fixed</div>
                        <div><span class="cross">✗</span> ₹800-5,000+</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Coverage Cap</div>
                        <div><span className="check">✓</span> Up to ₹5 Crores</div>
                        <div>₹3L-₹50L typical</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Claim Process</div>
                        <div><span className="check">✓</span> Instant digital</div>
                        <div><span class="cross">✗</span> 15-30 days</div>
                    </div>
                    <div className="table-row">
                        <div className="feature-name">Network Size</div>
                        <div><span className="check">✓</span> 200,000+ facilities</div>
                        <div>5,000-15,000 typical</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
