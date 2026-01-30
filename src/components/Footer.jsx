import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h4>Oxxy</h4>
                        <p>Making healthcare accessible and affordable for every Indian family.</p>
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="tel:8800855340" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit', textDecoration: 'none' }}>
                                <span style={{ fontSize: '1.2rem' }}>📞</span> 8800855340
                            </a>
                            <a href="https://wa.me/918800855340" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit', textDecoration: 'none' }}>
                                <span style={{ fontSize: '1.2rem' }}>💬</span> 8800855340
                            </a>
                            <a href="mailto:info@oxxy.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit', textDecoration: 'none' }}>
                                <span style={{ fontSize: '1.2rem' }}>✉️</span> info@oxxy.in
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="https://www.oxxy.in/oxxy_everyday.php" target="_blank" rel="noopener noreferrer">Oxxy Everyday</a></li>
                            <li><a href="https://www.oxxy.in/oxxy_vital.php" target="_blank" rel="noopener noreferrer">Oxxy Vital</a></li>
                            <li><a href="https://www.oxxy.in/oxxy_thrive.php" target="_blank" rel="noopener noreferrer">Oxxy Thrive</a></li>
                            <li><a href="https://www.oxxy.in/oxxy_infinity.php" target="_blank" rel="noopener noreferrer">Oxxy Infinity</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="https://www.oxxy.in/about-oxxy" target="_blank" rel="noopener noreferrer">About Us</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Partner Network</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; Copyright 2025 Enoch Enterprises LLP. All Rights Reserved.</p>
                    <p style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>
                        Oxxy is not an INSURANCE. Oxxy sells Discounted Health Plans.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
