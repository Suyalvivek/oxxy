import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [age, setAge] = useState(35);
    const [familySize, setFamilySize] = useState(4);
    const [consultations, setConsultations] = useState(12);
    const [diagnostics, setDiagnostics] = useState(8);
    const [medicines, setMedicines] = useState(3000);
    const [conditions, setConditions] = useState({
        diabetes: false,
        hypertension: false,
        thyroid: false,
        heart: false
    });

    const [results, setResults] = useState({
        withoutOxxy: 0,
        withOxxy: 0,
        savings: 0,
        savingsPercent: 0,
        breakevenConsultations: 0
    });

    const handleConditionChange = (e) => {
        setConditions({
            ...conditions,
            [e.target.id]: e.target.checked
        });
    };

    useEffect(() => {
        // Calculate costs
        const avgConsultationCost = 600;
        const avgDiagnosticCost = 1200;
        const monthlyMedicines = medicines;

        // Count conditions
        let conditionsCount = 0;
        Object.values(conditions).forEach(val => {
            if (val) conditionsCount++;
        });

        const conditionPremium = conditionsCount * 5000; // Extra annual cost for conditions

        const annualConsultations = consultations * avgConsultationCost;
        const annualDiagnostics = diagnostics * avgDiagnosticCost;
        const annualMedicines = monthlyMedicines * 12;

        const totalWithout = annualConsultations + annualDiagnostics + annualMedicines + conditionPremium;

        // With Oxxy - 40% discount + membership
        const oxxyMembership = 399 * 12; // Annual membership
        const discountedCosts = (annualConsultations + annualDiagnostics + annualMedicines) * 0.6; // 40% savings
        const totalWith = oxxyMembership + discountedCosts;

        const savings = totalWithout - totalWith;
        const savingsPercent = totalWithout > 0 ? ((savings / totalWithout) * 100).toFixed(0) : 0;

        // Calculate breakeven
        const consultationsToBreakeven = Math.ceil(oxxyMembership / (avgConsultationCost * 0.4));

        setResults({
            withoutOxxy: Math.round(totalWithout).toLocaleString('en-IN'),
            withOxxy: Math.round(totalWith).toLocaleString('en-IN'),
            savings: Math.round(savings).toLocaleString('en-IN'),
            savingsPercent: savingsPercent,
            breakevenConsultations: consultationsToBreakeven
        });
    }, [age, familySize, consultations, diagnostics, medicines, conditions]);

    return (
        <section className="calculator" id="calculator">
            <div className="calculator-container">
                <div className="calculator-header">
                    <h2>Calculate Your Healthcare Savings</h2>
                    <p>See exactly how much you can save with Oxxy</p>
                </div>
                <div className="calculator-grid">
                    <div className="calculator-inputs">
                        <h3>Your Healthcare Details</h3>

                        <div className="input-group">
                            <label htmlFor="age">Age: <span className="slider-value" id="ageValue">{age} years</span></label>
                            <input type="range" id="age" className="slider" min="0" max="120" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="familySize">Family Size: <span className="slider-value" id="familySizeValue">{familySize} {familySize === 1 ? 'member' : 'members'}</span></label>
                            <input type="range" id="familySize" className="slider" min="1" max="10" value={familySize} onChange={(e) => setFamilySize(parseInt(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="consultations">Doctor Visits/Year: <span className="slider-value" id="consultationsValue">{consultations} {consultations === 1 ? 'visit' : 'visits'}</span></label>
                            <input type="range" id="consultations" className="slider" min="0" max="50" value={consultations} onChange={(e) => setConsultations(parseInt(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="diagnostics">Diagnostic Tests/Year: <span className="slider-value" id="diagnosticsValue">{diagnostics} {diagnostics === 1 ? 'test' : 'tests'}</span></label>
                            <input type="range" id="diagnostics" className="slider" min="0" max="30" value={diagnostics} onChange={(e) => setDiagnostics(parseInt(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="medicines">Monthly Medicine Spend: <span className="slider-value" id="medicinesValue">₹{medicines.toLocaleString('en-IN')}</span></label>
                            <input type="range" id="medicines" className="slider" min="0" max="10000" value={medicines} step="500" onChange={(e) => setMedicines(parseInt(e.target.value))} />
                        </div>

                        <div className="input-group">
                            <label>Pre-Existing Conditions:</label>
                            <div className="checkbox-group">
                                <div className="checkbox-item">
                                    <input type="checkbox" id="diabetes" className="condition-checkbox" checked={conditions.diabetes} onChange={handleConditionChange} />
                                    <label htmlFor="diabetes">Diabetes</label>
                                </div>
                                <div className="checkbox-item">
                                    <input type="checkbox" id="hypertension" className="condition-checkbox" checked={conditions.hypertension} onChange={handleConditionChange} />
                                    <label htmlFor="hypertension">Hypertension</label>
                                </div>
                                <div className="checkbox-item">
                                    <input type="checkbox" id="thyroid" className="condition-checkbox" checked={conditions.thyroid} onChange={handleConditionChange} />
                                    <label htmlFor="thyroid">Thyroid</label>
                                </div>
                                <div className="checkbox-item">
                                    <input type="checkbox" id="heart" className="condition-checkbox" checked={conditions.heart} onChange={handleConditionChange} />
                                    <label htmlFor="heart">Heart Disease</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="calculator-results">
                        <h3>Your Potential Savings</h3>

                        <div className="result-item without">
                            <div className="result-label">Annual Cost Without Oxxy</div>
                            <div className="result-value" id="withoutOxxy">₹{results.withoutOxxy}</div>
                        </div>

                        <div className="result-item with">
                            <div className="result-label">Annual Cost With Oxxy</div>
                            <div className="result-value" id="withOxxy">₹{results.withOxxy}</div>
                        </div>

                        <div className="result-item savings">
                            <div className="result-label">You Save Annually</div>
                            <div className="result-value" id="savings">₹{results.savings}</div>
                            <div className="result-percentage" id="savingsPercent">({results.savingsPercent}% savings)</div>
                        </div>

                        <div className="breakeven">
                            <p id="breakevenText">Your plan pays for itself after just {results.breakevenConsultations} consultations!</p>
                        </div>

                        <a href="#signup" className="submit-button">Lock in These Savings →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
