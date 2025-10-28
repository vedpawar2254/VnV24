export default function TermsAndConditionsPage() {
    return (
      <div className="bg-primary text-text-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-bold text-forest-green">Terms and Conditions</h1>
              <p className="mt-2 text-md text-text-secondary">Last updated: September 25, 2025</p>
            </div>
  
            {/* Note: 'prose' class has been removed. All styles below are applied directly. */}
            <article>
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">1. Agreement to Terms</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                By using our website, VnV24 (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">2. Intellectual Property Rights</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">3. User Representations</h2>
              <p className="text-text-dark mb-4 leading-relaxed text-lg">By using the Site, you represent and warrant that:</p>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-text-dark leading-relaxed">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ol>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">4. Products</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock.
              </p>
              
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">5. Purchases and Payment</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                We accept various forms of payment as listed on the checkout page. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
              </p>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">6. Prohibited Activities</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">7. Governing Law</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of India, and the state of Haryana, applicable to agreements made and to be entirely performed within Haryana, without regard to its conflict of law principles.
              </p>
              
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">8. Disclaimer</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                The Site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.
              </p>
  
              <h2 className="text-3xl font-serif font-bold text-forest-green mt-10 mb-4">9. Contact Us</h2>
              <p className="text-text-dark mb-6 leading-relaxed text-lg">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <p className="text-text-dark leading-relaxed">
                VnV24<br/>
                Sonipat, Haryana, India<br/>
                contact@vnv24.com<br/>
                +91-98765-43210
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }