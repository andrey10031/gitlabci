<template>
  <div class="modal" v-if="modal.modalAccept">
    <div class="modal__bg"></div>
    <div class="modal__content overflow-y-auto sm:rounded-[16px] max-w-full sm:max-w-[566px] h-full sm:max-h-[768px]">
      <div class="text-[32px] font-bold text-center mb-8">Terms of Use</div>
      <div class="modal__text-wrapper">
        <p class="modal__text">
          These NeoNomad Terms of Use is entered into between you (hereinafter referred to as “you” or “your”) and NeoNomad operators (as defined below). By
          accessing, downloading, using or clicking on “I agree” to accept any NeoNomad Services (as defined below) provided by NeoNomad (as defined below), you
          agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use (hereinafter referred to as “these
          Terms”) as well as our Privacy Policy at <a class="modal__link" href="https://www.neonomad.finance/">www.neonomad.finace/en/privacy</a>. In addition,
          when using some features of the Services, you may be subject to specific additional terms and conditions applicable to those features.
        </p>
        <p class="modal__text">
          Please read the terms carefully as they govern your use of NeoNomad Services.THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION
          PROVISION THAT REQUIRES ALL CLAIMS TO BE RESOLVED BY WAY OF LEGALLY BINDING ARBITRATION.The terms of the arbitration provision are set forth in
          Article 10, “Resolving Disputes: Forum, Arbitration, Class Action Waiver”, hereunder. As with any asset, the values of Digital Currencies (as defined
          below) may fluctuate significantly and there is a substantial risk of economic losses when purchasing, selling, holding or investing in Digital
          Currencies and their derivatives.BY MAKING USE OF NeoNomad SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH
          TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; (2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF NeoNomad SERVICES AND TRANSACTIONS OF
          DIGITAL CURRENCIES AND THEIR DERIVATIVES; AND (3) NeoNomad SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES.
        </p>
        <p class="modal__text">
          By accessing, using or attempting to use NeoNomad Services in any capacity, you acknowledge that you accept and agree to be bound by these Terms. If
          you do not agree, do not access NeoNomad or utilize NeoNomad services.
        </p>
        <h2 class="modal__title">I. Definitions</h2>
        <p class="modal__text">
          1. NeoNomad refers to an ecosystem comprising NeoNomad websites (whose domain names include but are not limited to
          <a class="modal__link" href="https://www.neonomad.finace/en">https://www.neonomad.finace/en)</a>, mobile applications, clients, applets and other
          applications that are developed to offer NeoNomad Services, and includes independently-operated platforms, websites and clients within the ecosystem
          (e.g. NeoNomad’s Open Platform, NeoNomad Vault, NeoNomad Capital, NeoNomad NFT Marketplace, NeoNomad DEX, NeoNomad X, NeoNomad Visa Card, NeoNomad
          AgDeFi, NeoNomad MinDeFi, and fiat gateways). In case of any inconsistency between relevant terms of use of the above platforms and the contents of
          these Terms, the respective applicable terms of such platforms shall prevail.
        </p>
        <p class="modal__text">
          2. NeoNomad Operators ：refer to all parties that run NeoNomad, including but not limited to legal persons (including NeoNomad XXchange OU),
          unincorporated organizations and teams that provide NeoNomad Services and are responsible for such services. For convenience, unless otherwise stated,
          references to “NeoNomad” and “we” in these Terms specifically mean NeoNomad Operators. UNDER THESE TERMS, NeoNomad OPERATORS MAY CHANGE AS NeoNomad’S
          BUSINESS ADJUSTS, IN WHICH CASE, THE CHANGED OPERATORS SHALL PERFORM THEIR OBLIGATIONS UNDER THESE TERMS WITH YOU AND PROVIDE SERVICES TO YOU, AND
          SUCH CHANGE DOES NOT AFFECT YOUR RIGHTS AND INTERESTS UNDER THESE TERMS. ADDITIONALLY, THE SCOPE OF NeoNomad OPERATORS MAY BE EXPANDED DUE TO THE
          PROVISION OF NEW NeoNomad SERVICES, IN WHICH CASE, IF YOU CONTINUE TO USE NeoNomad SERVICES, IT IS DEEMED THAT YOU HAVE AGREED TO JOINTLY EXECUTE
          THESE TERMS WITH THE NEWLY ADDED NeoNomad OPERATORS. IN CASE OF A DISPUTE, YOU SHALL DETERMINE THE ENTITIES BY WHICH THESE TERMS ARE PERFORMED WITH
          YOU AND THE COUNTERPARTIES OF THE DISPUTE, DEPENDING ON THE SPECIFIC SERVICES YOU USE AND THE PARTICULAR ACTIONS THAT AFFECT YOUR RIGHTS OR INTERESTS.
        </p>
        <p class="modal__text">
          3. NeoNomad Services refer to various services provided to you by NeoNomad that are based on Internet and/or blockchain technologies and offered via
          NeoNomad websites, mobile applications, clients and other forms (including new ones enabled by future technological development). NeoNomad Services
          include but are not limited to such NeoNomad ecosystem components as Digital Asset Trading Platforms, the financing sector, NeoNomad Vault, NeoNomad
          Capital, NeoNomad NFT Marketplace, Platform, NeoNomad Vault, NeoNomad Capital, NeoNomad NFT Marketplace, NeoNomad DEX, NeoNomad X, NeoNomad Visa Card,
          NeoNomad AgDeFi, NeoNomad MinDeFi, existing services to be provided by NeoNomad.
        </p>
        <p class="modal__text">
          4. NeoNomad Platform Rules refer to all rules, interpretations, announcements, statements, letters of consent and other contents that have been and
          will be subsequently released by NeoNomad, as well as all regulations, implementation rules, product process descriptions, and announcements published
          in the Help Center or within products or service processes.
        </p>
        <p class="modal__text">
          5. Users refer to all individuals, institutions or organizations that access, download or use NeoNomad or NeoNomad Services and who meet the criteria
          and conditions stipulated by NeoNomad. If there exist other agreements for such entities as developers, distributors, market makers, and Digital
          Currencies exchanges, such agreements shall be followed.
        </p>
        <p class="modal__text">
          6. Digital Currencies refer to encrypted or digital tokens or cryptocurrencies with a certain value that are based on blockchain and cryptography
          technologies and are issued and managed in a decentralized form.
        </p>
        <p class="modal__text">7. Digital Assets refer to Digital Currencies, their derivatives or other types of digitalized assets with a certain value.</p>
        <p class="modal__text">
          8. NeoNomad Accounts refer to the foundational virtual accounts, including main accounts and subaccounts, which are opened by NeoNomad for Users to
          record on NeoNomad their usage of NeoNomad Services, transactions, asset changes and basic information. NeoNomad Accounts serve as the basis for Users
          to enjoy and exercise their rights on NeoNomad.
        </p>
        <p class="modal__text">
          9. Crypto-to-crypto Trading refers to spot transactions in which one digital currency is exchanged for another digital currency.
        </p>
        <p class="modal__text">10. Fiat Trading refers to spot transactions in which Digital Currencies are exchanged for fiat currencies or vice versa.</p>
        <p class="modal__text">
          11. Collateral Accounts refer to special accounts opened by Users on NeoNomad to deposit and withdraw collateral (such as margins) in accordance with
          these Terms (including the NeoNomad Contract Services Agreement and NeoNomad Platform Rules), as required for contract transactions, leveraged trading
          and/or currency borrowing services.
        </p>
        <p class="modal__text">
          12. Loan/Lending refers to NeoNomad’s lending of Digital Currencies to Users at an interest collected in certain ways (in the form of Digital
          Currencies), including but not limited to the leveraged trading and currency lending services currently offered, and other forms of loan/lending
          services to be launched by NeoNomad.
        </p>
        <h2 class="modal__title">II. General Provisions</h2>
        <p class="modal__text">1. About These Terms</p>
        <p class="modal__text">a. Contractual Relationship</p>
        <p class="modal__text">These Terms constitute a legal agreement and create a binding contract between you and NeoNomad Operators.</p>
        <p class="modal__text">b. Supplementary Terms</p>
        <p class="modal__text">These Terms constitute a legal agreement and create a binding contract between you and NeoNomad Operators.</p>
        <p class="modal__text">b. Supplementary Terms</p>
        <p class="modal__text">
          Due to the rapid development of Digital Currencies and NeoNomad, these Terms between you and NeoNomad Operators do not enumerate or cover all rights
          and obligations of each party, and do not guarantee full alignment with needs arising from future development. Therefore,THE PRIVACY POLICY (（）),
          NeoNomad PLATFORM RULES, AND ALL OTHER AGREEMENTS ENTERED INTO SEPARATELY BETWEEN YOU AND NeoNomad ARE DEEMED SUPPLEMENTARY TERMS THAT ARE AN INTEGRAL
          PART OF THESE TERMS AND SHALL HAVE THE SAME LEGAL EFFECT. YOUR USE OF NeoNomad SERVICES IS DEEMED YOUR ACCEPTANCE OF THE ABOVE SUPPLEMENTARY TERMS.
        </p>
        <p class="modal__text">c. Changes to These Terms</p>
        <p class="modal__text">
          NeoNomad reserves the right to change or modify these Terms in its discretion at any time. NeoNomad will notify such changes by updating the terms on
          its website () and modifying the [Last revised] date displayed on this page.。ANY AND ALL MODIFICATIONS OR CHANGES TO THESE TERMS WILL BECOME
          EFFECTIVE UPON PUBLICATION ON THE WEBSITE OR RELEASE TO USERS. THEREFORE, YOUR CONTINUED USE OF NeoNomad SERVICES IS DEEMED YOUR ACCEPTANCE OF THE
          MODIFIED AGREEMENT AND RULES. IF YOU DO NOT AGREE TO ANY CHANGES TO THESE TERMS, YOU MUST STOP USING NeoNomad SERVICES IMMEDIATELY. YOU ARE
          RECOMMENDED TO FREQUENTLY REVIEW THESE TERMS TO ENSURE YOUR UNDERSTANDING OF THE TERMS AND CONDITIONS THAT APPLY TO YOUR ACCESS TO AND USE OF NeoNomad
          SERVICES.
        </p>
        <p class="modal__text">d. Prohibition of Use</p>
        <p class="modal__text">
          BY ACCESSING AND USING NeoNomad SERVICES, YOU REPRESENT AND WARRANT THAT YOU HAVE NOT BEEN INCLUDED IN ANY TRADE EMBARGOES OR ECONOMIC SANCTIONS LIST
          (SUCH AS THE UNITED NATIONS SECURITY COUNCIL SANCTIONS LIST), THE LIST OF SPECIALLY DESIGNATED NATIONALS MAINTAINED BY OFAC (THE OFFICE OF FOREIGN
          ASSETS CONTROL OF THE U.S. DEPARTMENT OF THE TREASURY), OR THE DENIED PERSONS OR ENTITY LIST OF THE U.S. DEPARTMENT OF COMMERCE. NeoNomad RESERVES THE
          RIGHT TO CHOOSE MARKETS AND JURISDICTIONS TO CONDUCT BUSINESS, AND MAY RESTRICT OR REFUSE, IN ITS DISCRETION, THE PROVISION OF NeoNomad SERVICES IN
          CERTAIN COUNTRIES OR REGIONS.
        </p>
        <p class="modal__text">2. About NeoNomad</p>
        <p class="modal__text">
          As an important part of the NeoNomad Ecosystem, NeoNomad mainly serves as a global online platform for Digital Assets trading, and provides Users with
          a trading platform, financing services, technical services and other Digital Assets-related services. As further detailed in Article 3 below, Users
          must register and open an account with NeoNomad, and deposit Digital Assets into their account prior to trading. Users may, subject to the
          restrictions set forth in these Terms, apply for the withdrawal of Digital Assets.
        </p>
        <p class="modal__text">
          Although NeoNomad has been committed to maintaining the accuracy of the information provided through NeoNomad Services, NeoNomad cannot and does not
          guarantee its accuracy, applicability, reliability, integrity, performance or appropriateness, nor shall NeoNomad be liable for any loss or damage
          that may be caused directly or indirectly by your use of these contents. The information about NeoNomad Services may change without notice, and the
          main purpose of providing such information is to help Users make independent decisions. NeoNomad does not provide investment or consulting advice of
          any kind, and is not responsible for the use or interpretation of information on NeoNomad or any other communication medium. All Users of NeoNomad
          Services must understand the risks involved in Digital Assets trading, and are recommended to exercise prudence and trade responsibly within their own
          capabilities.
        </p>
        <p class="modal__text">3. NeoNomad Account Registration and Requirements</p>
        <p class="modal__text">a. Registration</p>
        <p class="modal__text">
          By registering to use a NeoNomad Account, you represent and warrant that (i) as an individual, you are at least 18 or are of legal age to form a
          binding contract under applicable laws; (ii) as an individual, legal person, or other organization, you have full legal capacity and sufficient
          authorizations to enter into these Terms; (iii) you have not been previously suspended or removed from using NeoNomad Services; (iv) you do not
          currently have a NeoNomad Account; (v) you are neither a United States user, nor are you acting on behalf of a United States user. If you act as an
          employee or agent of a legal entity, and enter into these Terms on their behalf, you represent and warrant that you have all the necessary rights and
          authorizations to bind such legal entity; (vi) your use of NeoNomad Services will not violate any and all laws and regulations applicable to you,
          including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing.
        </p>
        <p class="modal__text">
          Please note that some products and services may not be available in certain jurisdictions or regions or to certain users. NeoNomad reserves the right
          to change, modify or impose additional restrictions at its discretion at any time.
        </p>
        <p class="modal__text">
          Futures and Derivatives Products. USDⓈ-M Futures, Coin-M Futures, Margin, NeoNomad Options, and Leveraged Tokens (“Futures and Derivatives Products”).
        </p>
        <p class="modal__text">
          Crypto Tokens. Privacy tokens (XMR, ZEC, DASH, XVG, XZC, KMD, ZEN, PIVX and GRS) will not be available to users of Australia with PayID associated
          with the NeoNomad accounts.
        </p>
        <p class="modal__text">c. User Identity Verification</p>
        <p class="modal__text">
          Your registration of an account with NeoNomad will be deemed your agreement to provide required personal information for identity verification. Such
          information will be used to verify Users’ identity, identify traces of money laundering, terrorist financing, fraud and other financial crimes through
          NeoNomad, or for other lawful purposes stated by NeoNomad. We will collect, use and share such information in accordance with our Privacy Policy. In
          addition to providing such information, you agree to allow us to keep a record of that information during the period for which your account is active
          and within five (5) years after your account is closed, in compliance with global industry standards on data storage. You also authorize us to conduct
          necessary investigations directly or through a third party to verify your identity or protect you and/or us from financial crimes, such as fraud. The
          information we require to verify your identity may include, but is not limited to, your name, email address, contact information, phone number,
          username, government-issued ID, date of birth, and other information collected during account registration. When providing the required information,
          you confirm it is true and accurate.AFTER REGISTRATION, YOU MUST ENSURE THAT THE INFORMATION IS TRUE, COMPLETE, AND TIMELY UPDATED WHEN CHANGED. IF
          THERE ARE ANY GROUNDS FOR BELIEVING THAT ANY OF THE INFORMATION YOU PROVIDED IS INCORRECT, FALSE, OUTDATED OR INCOMPLETE, NeoNomad RESERVES THE RIGHT
          TO SEND YOU A NOTICE TO DEMAND CORRECTION, DIRECTLY DELETE THE RELEVANT INFORMATION, AND, AS THE CASE MAY BE, TERMINATE ALL OR PART OF NeoNomad
          SERVICES WE PROVIDE FOR YOU. IF WE ARE UNABLE TO REACH YOU WITH THE CONTACT INFORMATION YOU PROVIDED, YOU SHALL BE FULLY LIABLE FOR ANY LOSS OR
          EXPENSE CAUSED TO NeoNomad DURING YOUR USE OF NeoNomad SERVICES. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE THE OBLIGATION TO UPDATE ALL THE
          INFORMATION IF THERE IS ANY CHANGE.BY REGISTERING AN ACCOUNT, YOU HEREBY AUTHORIZE NeoNomad TO CONDUCT INVESTIGATIONS THAT NeoNomad CONSIDERS
          NECESSARY, EITHER DIRECTLY OR THROUGH A THIRD PARTY, TO VERIFY YOUR IDENTITY OR PROTECT YOU, OTHER USERS AND/OR NeoNomad FROM FRAUD OR OTHER FINANCIAL
          CRIMES, AND TO TAKE NECESSARY ACTIONS BASED ON THE RESULTS OF SUCH INVESTIGATIONS. YOU ALSO ACKNOWLEDGE AND AGREE THAT YOUR PERSONAL INFORMATION MAY
          BE DISCLOSED TO CREDIT BUREAUS AND AGENCIES FOR FRAUD PREVENTION OR FINANCIAL CRIME PREVENTION, WHICH MAY RESPOND TO OUR INVESTIGATIONS IN FULL.
        </p>
        <p class="modal__text">d. Account Usage Requirements</p>
        <p class="modal__text">
          The NeoNomad Account can only be used by the account registrant. NeoNomad reserves the right to suspend, freeze or cancel the use of NeoNomad Accounts
          by persons other than account registrant. If you suspect or become aware of any unauthorized use of your username and password, you should notify
          NeoNomad immediately. NeoNomad assumes no liability for any loss or damage arising from the use of NeoNomad Account by you or any third party with or
          without your authorization.
        </p>
        <p class="modal__text">e. Account Security</p>
        <p class="modal__text">
          NeoNomad has been committed to maintaining the security of User entrusted funds, and has implemented industry standard protection for NeoNomad
          Services. However, the actions of individual Users may pose risks. You shall agree to treat your access credentials (such as username and password) as
          confidential information, and not to disclose such information to any third party. You also agree to be solely responsible for taking the necessary
          security measures to protect your NeoNomad Account and personal information.
        </p>
        <p class="modal__text">
          You should be solely responsible for keeping safe of your NeoNomad Account and password, and be responsible for all the transactions under your
          NeoNomad Account. NeoNomad assumes no liability for any loss or consequences caused by authorized or unauthorized use of your account credentials,
          including but not limited to information disclosure, information release, consent or submission of various rules and agreements by clicking on the
          website, online agreement renewal, etc.
        </p>
        <p class="modal__text">By creating a NeoNomad Account, you hereby agree that:</p>
        <p class="modal__text">
          1. you will notify NeoNomad immediately if you are aware of any unauthorized use of your NeoNomad Account and password or any other violation of
          security rules;
        </p>
        <p class="modal__text">
          2. you will strictly abide by all mechanisms or procedures of NeoNomad regarding security, authentication, trading, charging, and withdrawal; and
        </p>
        <p class="modal__text">3. you will take appropriate steps to logout from NeoNomad at the end of each visit.</p>
        <p class="modal__text">f. Personal Data</p>
        <p class="modal__text">
          Your personal data will be properly protected and kept confidential, but NeoNomad has the right to collect, process, use or disclose your personal
          data in accordance with the Terms (including the Privacy Policy) or applicable laws. Depending on the products or services concerned, your personal
          data may be disclosed to the following third parties:
        </p>
        <p class="modal__text">1. your transaction counterparty;</p>
        <p class="modal__text">
          2. NeoNomad Operators, and the shareholders, partners, investors, directors, supervisors, senior managers and employees of such entities;
        </p>
        <p class="modal__text">3. our joint ventures, alliance partners and business partners;</p>
        <p class="modal__text">
          4. our agents, contractors, suppliers, third-party service providers and professional advisers, including the parties who have been contracted to
          provide us with administrative, financial, research, operations, IT and other services, in such areas as telecommunications, information technology,
          payroll, information processing, training, market research, storage and archival;
        </p>
        <p class="modal__text">
          5. third-party business partners who provide goods and services or sponsor contests or other promotional activities, whether or not in cooperation
          with us;
        </p>
        <p class="modal__text">6. insurance companies or insurance investigators and credit providers;</p>
        <p class="modal__text">7. credit bureaus, or any debt collection agencies or dispute resolution centers in the event of violation or dispute;</p>
        <p class="modal__text">
          8. business partners, investors, trustees or assignees (actual or expected) that promote business asset transactions (which can be broadened to
          include any merger, acquisition or asset sale) of NeoNomad Operators;
        </p>
        <p class="modal__text">9. professional consultants such as auditors and lawyers;</p>
        <p class="modal__text">
          10. relevant government regulatory agencies or law enforcement agencies to comply with laws or regulations formulated by government authorities;
        </p>
        <p class="modal__text">11. assignees of our rights and obligations;</p>
        <p class="modal__text">12. banks, credit card companies and their respective service providers;</p>
        <p class="modal__text">13. persons with your consent as determined by you or the applicable contract.</p>
        <h2 class="modal__title">III. NeoNomad Services</h2>
        <p class="modal__text">
          Upon completion of the registration and identity verification for your NeoNomad Account, you may use various NeoNomad Services, including but not
          limited to, Crypto-to-crypto Trading, Fiat Trading, contract trading, leveraged trading, NeoNomad Savings services, staking, acquiring market-related
          data, research and other information released by NeoNomad, participating in User activities held by NeoNomad, etc., in accordance with the provisions
          of these Terms (including NeoNomad Platform Rules and other individual agreements). NeoNomad has the right to:
        </p>
        <p class="modal__text">- Provide, modify or terminate, in its discretion, any NeoNomad Services based on its development plan; and</p>
        <p class="modal__text">- Allow or prohibit some Users’ use of any NeoNomad Services in accordance with relevant NeoNomad Platform Rules.</p>
        <h2 class="modal__title">1. Service Usage Guidelines</h2>
        <p class="modal__text">a. License</p>
        <p class="modal__text">
          Provided that you constantly comply with the express terms and conditions stated in these Terms, NeoNomad grants you a revocable, limited,
          royalty-free, non-exclusive, non-transferable, and non-sublicensable license to access and use NeoNomad Services through your computer or Internet
          compatible devices for your personal/internal purposes. You are prohibited to use NeoNomad Services for resale or commercial purposes, including
          transactions on behalf of other persons or entities. All the above actions are expressly prohibited and constitute a material violation of these
          Terms. The content layout, format, function and access rights regarding NeoNomad Services should be stipulated in the discretion of NeoNomad. NeoNomad
          reserves all rights not expressly granted in these Terms. Therefore, you are hereby prohibited from using NeoNomad Services in any way not expressly
          authorized by these Terms.
        </p>
        <p class="modal__text">
          These Terms only grant a limited license to access and use NeoNomad Services. Therefore, you hereby agree that when you use NeoNomad Services,
          NeoNomad does not transfer NeoNomad Services or the ownership or intellectual property rights of any NeoNomad intellectual property to you or anyone
          else. All the text, graphics, user interfaces, visual interface, photos, sounds, process flow diagrams, computer code (including html code), programs,
          software, products, information and documents, as well as the design, structure, selection, coordination, expression, look and feel, and layout of any
          content included in the services or provided through NeoNomad Services, are exclusively owned, controlled and/or licensed by NeoNomad Operators or its
          members, parent companies, licensors or affiliates.
        </p>
        <p class="modal__text">
          NeoNomad owns any feedback, suggestions, ideas, or other information or materials (hereinafter collectively referred to as “Feedback”) about NeoNomad
          or NeoNomad Services that you provide through email, NeoNomad Services, or other ways. You hereby transfer all rights, ownership and interests of the
          Feedback and all related intellectual property rights to NeoNomad. You have no right and hereby waive any request for acknowledgment or compensation
          based on any Feedback, or any modifications based on any Feedback.
        </p>
        <p class="modal__text">b. Restriction</p>
        <p class="modal__text">When you use NeoNomad Services, you agree and undertake to comply with the following provisions:</p>
        <p class="modal__text">
          1. During the use of NeoNomad Services, all activities you carry out should comply with the requirements of applicable laws and regulations, these
          Terms, and various guidelines of NeoNomad;
        </p>
        <p class="modal__text">
          2. Your use of NeoNomad Services should not violate public interests, public morals, or the legitimate interests of others, including any actions that
          would interfere with, disrupt, negatively affect, or prohibit other Users from using NeoNomad Services;
        </p>
        <p class="modal__text">
          3. You agree not to use the services for market manipulation (such as pump and dump schemes, wash trading, self-trading, front running, quote
          stuffing, and spoofing or layering, regardless of whether prohibited by law);
        </p>
        <p class="modal__text">
          4. Without written consent from NeoNomad, the following commercial uses of NeoNomad data are prohibited:<br />
          1) Trading services that make use of NeoNomad quotes or market bulletin board information. 2) Data feeding or streaming services that make use of any
          market data of NeoNomad. 3) Any other websites/apps/services that charge for or otherwise profit from (including through advertising or referral fees)
          market data obtained from NeoNomad.
        </p>
        <p class="modal__text">
          5. Without prior written consent from NeoNomad, you may not modify, replicate, duplicate, copy, download, store, further transmit, disseminate,
          transfer, disassemble, broadcast, publish, remove or alter any copyright statement or label, or license, sub-license, sell, mirror, design, rent,
          lease, private label, grant security interests in the properties or any part of the properties, or create their derivative works or otherwise take
          advantage of any part of the properties.
        </p>
        <p class="modal__text">
          6. You may not (i) use any deep linking, web crawlers, bots, spiders or other automatic devices, programs, scripts, algorithms or methods, or any
          similar or equivalent manual processes to access, obtain, copy or monitor any part of the properties, or replicate or bypass the navigational
          structure or presentation of NeoNomad Services in any way, in order to obtain or attempt to obtain any materials, documents or information in any
          manner not purposely provided through NeoNomad Services; (ii) attempt to access any part or function of the properties without authorization, or
          connect to NeoNomad Services or any NeoNomad servers or any other systems or networks of any NeoNomad Services provided through the services by
          hacking, password mining or any other unlawful or prohibited means; (iii) probe, scan or test the vulnerabilities of NeoNomad Services or any network
          connected to the properties, or violate any security or authentication measures on NeoNomad Services or any network connected to NeoNomad Services;
          (iv) reverse look-up, track or seek to track any information of any other Users or visitors of NeoNomad Services; (v) take any actions that imposes an
          unreasonable or disproportionately large load on the infrastructure of systems or networks of NeoNomad Services or NeoNomad, or the infrastructure of
          any systems or networks connected to NeoNomad services; (vi) use any devices, software or routine programs to interfere with the normal operation of
          NeoNomad Services or any transactions on NeoNomad Services, or any other person’s use of NeoNomad Services; (vii) forge headers, impersonate, or
          otherwise manipulate identification, to disguise your identity or the origin of any messages or transmissions you send to NeoNomad, or (viii) use
          NeoNomad Services in an illegal way.
        </p>
        <p class="modal__text">
          By accessing NeoNomad Services, you agree that NeoNomad has the right to investigate any violation of these Terms, unilaterally determine whether you
          have violated these Terms, and take actions under relevant regulations without your consent or prior notice. Examples of such actions include, but are
          not limited to:
        </p>
        <p class="modal__text">- Blocking and closing order requests;</p>
        <p class="modal__text">- Freezing your account;</p>
        <p class="modal__text">- Reporting the incident to the authorities;</p>
        <p class="modal__text">- Publishing the alleged violations and actions that have been taken;</p>
        <p class="modal__text">- Deleting any information you published that are found to be violations.</p>
        <h2 class="modal__title">2. Crypto-to-crypto Trading</h2>
        <p class="modal__text">
          Upon completion of the registration and identity verification for your NeoNomad Account, you may conduct Crypto-to-crypto Trading on NeoNomad in
          accordance with the provisions of these Terms and NeoNomad Platform Rules.
        </p>
        <p class="modal__text">a. Orders</p>
        <p class="modal__text">
          Upon sending an instruction of using NeoNomad Services for Crypto-to-crypto Trading (an “Order”), your account will be immediately updated to reflect
          the open Orders, and your Orders will be included in NeoNomad’s order book to match other users’ Orders. If one of your Orders fully or partially
          matches another user’s Order, NeoNomad will execute an exchange (a “Transaction”). Once the Transaction is executed, your account will be updated to
          reflect that the Order has been fully executed and closed, or the Order has been partially executed. The Order will remain uncompleted until it is
          fully executed or cancelled under paragraph (b) below. To conclude a Transaction, you authorize NeoNomad to temporarily control the Digital Currencies
          involved in your Transaction.
        </p>
        <p class="modal__text">b. Cancellation</p>
        <p class="modal__text">
          For Orders initiated through NeoNomad Services, you may only cancel them before they have been matched with other Users’ Orders. Once your Order has
          been matched with another user’s Order, you may not change, revoke or cancel NeoNomad’s authorization to complete the Order. For any partially matched
          Order, you may cancel the unmatched part of the Order unless such portion has been matched. NeoNomad reserves the right to reject any cancellation
          request related to the Order you have submitted. If your account does not have sufficient amount of Digital Currencies to execute an Order, NeoNomad
          may cancel the entire Order, or execute part of the Order with the amount of Digital Currencies you have in your account (in each case, any
          Transaction related fees payable to NeoNomad are deducted as stated in paragraph (c) below).
        </p>
        <p class="modal__text">c. Fees</p>
        <p class="modal__text">
          You agree to pay NeoNomad the fees specified in
          <a class="modal__link" href="www.neonomad.finance/en/fee/schedule">www.neonomad.finance/en/fee/schedule.NeoNomad</a> may, in its discretion, update
          the fees at any time. Any updated fees will apply to any sales or other Transactions that occur following the effective date of the updated fees. You
          authorize NeoNomad to deduct from your account any applicable fees that you owe under these Terms.
        </p>
        <p class="modal__text">d. Other Types of Crypto-to-crypto Trading</p>
        <p class="modal__text">
          In addition to the Crypto-to-crypto Trading that allows users to directly place orders as mentioned in paragraph (a) above, NeoNomad may, in its
          discretion, provide technical and platform services for other types of Crypto-to-crypto Trading under its separately formulated NeoNomad Platform
          Rules, such as One Cancels the Other (OCO) and block trade.
        </p>
        <h2 class="modal__title">3. Fiat Trading</h2>
        <p class="modal__text">
          Prior to conducting Fiat Trading, in accordance with type of fiat trading, you shall separately read and agree User Agreements with various NeoNomad
          partnered OTC platforms, and comply with the Legal Statement, Privacy Policy, P2P User Transaction Policy () and other specific NeoNomad Platform
          Rules related to Fiat Trading as well as the business rules of such partners, and open an account on such NeoNomad OTC platforms, following the
          completion of the registration and identity verification for your NeoNomad Account, if applicable. a. Fiat Payments. If you choose to utilise the Fiat
          Trading, you agree that NeoNomad XXchange OÜ (registration number: 16415401) having its registered office at Harju maakond, Tallinn, Kesklinna
          linnaosa, Roseni tn 13, 1011, Estoniashall be the main NeoNomad Operator responsible for the transaction (including for the purpose of refunds and
          cancellations). NeoNomad UAB is the NeoNomad Operator responsible for the transactions processed by Visa. The activities of NeoNomad UAB defined
          herein are governed by the laws of the Republic of Estonia.
        </p>
        <p class="modal__text">4. Futures Trading</p>
        <p class="modal__text">
          Unless otherwise specified by NeoNomad, to conduct Futures Trading, you must conclude with NeoNomad a separate NeoNomad Futures Service Agreement ()
          and open a special Collateral Account, following the completion of registration and identity verification for your NeoNomad Account. You acknowledge
          and agree that:
        </p>
        <p class="modal__text">
          a. You fully understand the high risks of Futures Trading, including but not limited to the risk of major fluctuations of Digital Assets in Futures
          Trading, and the risk of exacerbated adverse outcome when leverage is used;
        </p>
        <p class="modal__text">
          b. You have sufficient investment knowledge and experience and the capacity to take risks arising from Futures Trading, and agree to independently
          assume all the risks arising from the investment of Futures Trading;
        </p>
        <p class="modal__text">
          c. Before performing Futures Trading, you have read and understood all the contents of the NeoNomad Futures Service Agreement and the relevant
          NeoNomad Platform Rules, and have consulted relevant professionals to make informed decisions on whether and how to complete Futures Trading according
          to their recommendations and your own reasonable judgment;
        </p>
        <p class="modal__text">
          d. You agree and authorize NeoNomad to take various reasonable measures in its discretion (including but not limited to forced liquidation and forced
          position reduction under specific circumstances) in accordance with the NeoNomad Futures Service Agreement and the relevant NeoNomad Platform Rules to
          protect the legitimate interests of you, NeoNomad and other Users..
        </p>
        <h2 class="modal__title">6. Margins Trading</h2>
        <p class="modal__text">
          Unless otherwise specified by NeoNomad, prior to conducting Margins Trading, you must open a special Collateral Account and/or complete other related
          procedures, following the completion of registration and identity verification for your NeoNomad Account.
        </p>
        <p class="modal__text">a. Risks of Margins Trading</p>
        <p class="modal__text">
          Margins Trading is highly risky. As a leveraged trader, you acknowledge and agree that you access and use Margins Trading and borrowing services at
          your own risk, which include but are not limited to:
        </p>
        <p class="modal__text">
          1. The liquidity, market depth and dynamics of the trading market fluctuate violently and change rapidly. The use of leverage may work to your
          advantage or disadvantage, which may result in major gains or losses as the case may be.
        </p>
        <p class="modal__text">
          2. You are not eligible to receive forked currencies split from any blockchain assets in your Collateral Account, even if you have not engaged in any
          Margins Trading or borrowing at all.
        </p>
        <p class="modal__text">
          3. Loans carry risk, and the value of your blockchain assets may decline. If the value of your assets drops to a certain level, you are responsible
          for dealing with these market circumstances.
        </p>
        <p class="modal__text">
          4. In some market situations, you may find it difficult or impossible to liquidate a position. This may occur, for example, as a result of
          insufficient market liquidity or technical issues on NeoNomad.
        </p>
        <p class="modal__text">
          5. Placing contingent Orders does not necessarily limit your losses to the expected amount, as market conditions may prevent you from executing such
          orders.
        </p>
        <p class="modal__text">
          6. Margins Trading does not have guaranteed measures against losses. As a borrower, you may suffer losses that exceed the amount you deposited into
          your Collateral Account.
        </p>
        <p class="modal__text">b. To start Margins Trading:</p>
        <p class="modal__text">
          1. You represent and warrant that you are neither from the U.S. nor on any list of trade embargoes or economic sanctions, such as the Specially
          Designated National by OFAC (The Office of Foreign Assets Control of the U.S. Department of the Treasury).
        </p>
        <p class="modal__text">
          2. You should fully understand the risks associated with Margins Trading and Lending, and be fully responsible for any trading and non-trading
          activities under your NeoNomad Account and Collateral Account. You should not engage in Transactions or invest in funds that are beyond your financial
          capacities;
        </p>
        <p class="modal__text">
          3. You are fully responsible for knowing the true status of any position, even if NeoNomad may present it incorrectly at any time;
        </p>
        <p class="modal__text">
          4. You agree to keep enough Digital Assets in your Collateral Account, as required by NeoNomad for Users’ engagement in Margins Trading, and promptly
          repay your loan in full. Failure to keep enough assets or to timely repay the outstanding loan may result in forced liquidation of the assets in your
          Collateral Account;
        </p>
        <p class="modal__text">
          5. Even if with the ability to forcefully liquidate any position, NeoNomad cannot guarantee to stop losses. If your assets are insufficient to repay
          the outstanding loan after the liquidation of your position, you are still liable for any further shortfall of assets;
        </p>
        <p class="modal__text">
          6. NeoNomad may take measures, in its discretion and on your behalf, to reduce your potential losses, including but not limited to, transferring
          assets from your Collateral Account into your NeoNomad Account and/or vice versa;
        </p>
        <p class="modal__text">
          7. During NeoNomad system maintenance, you agree to be fully responsible for managing your Collateral Account under risks, including but not limited
          to, closing positions and repaying your loan.
        </p>
        <p class="modal__text">
          8. You agree to conduct all Transactions, Margins Trading and/or borrowing on your own, and be fully responsible for your activities. NeoNomad assumes
          no liability for any loss or damage caused by your use of any NeoNomad services or your unawareness of the risks associated with the use of Digital
          Assets or with your use of NeoNomad Services.
        </p>
        <h2 class="modal__title">7. Lending Services</h2>
        <p class="modal__text">
          Unless otherwise provided by NeoNomad, to borrow currencies, you must conclude with NeoNomad a separate Lending Services User Agreement and open a
          special Collateral Account and/or finish other relevant procedures, following the completion of registration and identity verification for your
          NeoNomad Account. You understand and agree that:
        </p>
        <p class="modal__text">
          a. There are considerable risks involved in Lending Services, which include without limitation to risks of fluctuation of the borrowed Digital Assets’
          value, derivative risks and technical risks. You shall carefully consider and exercise clear judgment to evaluate your financial situation and the
          aforesaid risks to make any decision on using Lending Services, and you shall be responsible for all losses arising therefrom;
        </p>
        <p class="modal__text">
          b. you shall cooperate to provide the information and materials related to identity verification and Lending Services as required by NeoNomad, and be
          solely responsible for taking necessary security measures to protect the security of your Collateral Account and personal information;
        </p>
        <p class="modal__text">
          c. you shall carefully read relevant NeoNomad Platform Rules before using Lending Services, and be aware of, understand and observe the specific
          information and rules regarding the operations of Lending Services, and you undertake that the use of the assets borrowed shall conform to
          requirements of these Terms and related laws and regulations;
        </p>
        <p class="modal__text">
          d. NeoNomad has the full right to manage your Collateral Account and collateral during the period in which Lending Services are offered, and reserves
          the right, under the circumstances specified in the Lending Services User Agreement or these Terms, to implement various risk control measures, which
          include but are not limited to forced liquidation. Such steps may cause major losses to you and you shall be solely responsible for the outcomes of
          such measures;
        </p>
        <p class="modal__text">
          e. NeoNomad has the right to temporarily or permanently prohibit you from using Lending Services when it deems it necessary or reasonable, and to the
          maximum extent permitted by law, without liability of any kind to you.
        </p>
        <h2 class="modal__title">8. NeoNomad Savings Service</h2>
        <p class="modal__text">
          NeoNomad offers NeoNomad Savings, a service to provide Users with value-added services for their idle Digital Assets. To use NeoNomad Savings service,
          you must conclude with NeoNomad a separate NeoNomad Savings Service User Agreement () and open a special NeoNomad Savings service account, following
          the completion of registration and identity verification for your NeoNomad Account. When using NeoNomad Savings service, you should note that:
        </p>
        <p class="modal__text">a. NeoNomad Savings assets will be used in cryptocurrency leveraged borrowing and other businesses.</p>
        <p class="modal__text">
          b. When you use NeoNomad Savings service, you will unconditionally authorize NeoNomad to distribute and grant the leveraged interest according to
          NeoNomad Platform Rules.
        </p>
        <p class="modal__text">
          c. You shall abide by relevant laws and regulations to ensure that the sources of Digital Assets are legitimate and compliant when using NeoNomad
          Savings service.
        </p>
        <p class="modal__text">
          d. When you use NeoNomad Savings service, you should fully recognize the risks of investing in Digital Assets and operate cautiously.
        </p>
        <p class="modal__text">
          e. You agree that all investment operations conducted on NeoNomad represent your true investment intentions and that unconditionally accept the
          potential risks and benefits of your investment decisions.
        </p>
        <p class="modal__text">
          f. NeoNomad reserves the right to suspend or terminate NeoNomad Savings service. If necessary, NeoNomad can suspend and terminate NeoNomad Savings
          service at any time.
        </p>
        <p class="modal__text">
          g. Due to network delay, computer system failures and other force majeure, which may lead to delay, suspension, termination or deviation of execution
          of NeoNomad Savings service, NeoNomad will use reasonable effort to ensure but not promise that NeoNomad Savings service execution system runs stably
          and effectively. NeoNomad does not take any responsibility if the final execution fails to match your expectations due to the above factors.
        </p>
        <h2 class="modal__title">9. Staking Programs</h2>
        <p class="modal__text">
          NeoNomad will from time to time launch Staking Programs for specific types of Digital Currencies to reward, as per certain rules, users who hold such
          Digital Currencies in their NeoNomad Accounts. When participating in Staking Programs, you should note that:
        </p>
        <p class="modal__text">
          a. Unless otherwise stipulated by NeoNomad, Staking Programs are free of charge and Users may trade during the staking period;
        </p>
        <p class="modal__text">b. NeoNomad does not guarantee Users’ proceeds under any Staking Program;</p>
        <p class="modal__text">
          c. NeoNomad has the right to initiate or terminate Staking Program for any Digital Currencies or modify rules on such programs in its sole discretion;
        </p>
        <p class="modal__text">
          d. Users shall ensure that sources of the Digital Currencies they hold in NeoNomad Accounts are legal and compliant and undertake to observe related
          laws and regulations. Otherwise, NeoNomad has the right to take necessary steps in accordance with these Terms or NeoNomad Platform Rules, including,
          without limitation, freezing NeoNomad Accounts or deducting the Digital Currencies awarded to Users who violate the rules of respective Staking
          Programs.
        </p>
        <h2 class="modal__title">10. NeoNomad POS Service Agreement</h2>
        <p class="modal__text">
          a. Neonomad.finace launched NeoNomad POS service for Neonomad.finace users to gain proceeds through idle cryptocurrency assets.
        </p>
        <p class="modal__text">b. NeoNomad POS assets will be used in cryptocurrency staking to gain proceeds and other businesses.</p>
        <p class="modal__text">
          c. When you use NeoNomad POS service, you will unconditionally authorize Neonomad.finace to distribute the staking interest according to the rules of
          the platform.
        </p>
        <p class="modal__text">
          d. You shall abide by the relevant laws of the State to ensure that the sources of assets are legitimate and compliant when using NeoNomad POS
          service.
        </p>
        <p class="modal__text">
          e. When you use NeoNomad POS service, you should fully recognize the risks of investment in cryptocurrency and operate cautiously.
        </p>
        <p class="modal__text">
          f. You agree that all investment operations conducted on Neonomad.finace represent your true investment intentions and that unconditionally accept the
          potential risks and benefits of your investment decisions.
        </p>
        <p class="modal__text">
          g. Neonomad.finace reserves the right to suspend or terminate NeoNomad POS service. If necessary, Neonomad.finace can suspend and terminate NeoNomad
          POS service at any time.
        </p>
        <p class="modal__text">
          h. Due to network delay, computer system failures and other force majeure, which may lead to delay, suspension or deviation of NeoNomad POS service
          execution, Neonomad.finace will use commercially reasonable effort to ensure but not promise that NeoNomad POS service execution system run stably and
          effectively. Neonomad.finace does not take any responsibility if the final execution doesn’t match your expectations due to the above factors.
        </p>
        <h2 class="modal__title">IV. Liabilities</h2>
        <h2 class="modal__title">1. Disclaimer of Warranties</h2>
        <p class="modal__text">
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, NeoNomad SERVICES, NeoNomad MATERIALS AND ANY PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON
          BEHALF OF NeoNomad ARE OFFERED ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND NeoNomad EXPRESSLY DISCLAIMS, AND YOU WAIVE, ANY AND ALL OTHER WARRANTIES
          OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE OR
          NON-INFRINGEMENT OR WARRANTIES ARISING FROM COURSE OF PERFORMANCE, COURSE OF DEALING OR USAGE IN TRADE. WITHOUT LIMITING THE FOREGOING, NeoNomad DOES
          NOT REPRESENT OR WARRANT THAT THE SITE, NeoNomad SERVICES OR NeoNomad MATERIALS ARE ACCURATE, COMPLETE, RELIABLE, CURRENT, ERROR-FREE, OR FREE OF
          VIRUSES OR OTHER HARMFUL COMPONENTS. NeoNomad DOES NOT GUARANTEE THAT ANY ORDER WILL BE EXECUTED, ACCEPTED, RECORDED OR REMAIN OPEN. EXCEPT FOR THE
          EXPRESS STATEMENTS, AGREEMENTS AND RULES SET FORTH IN THESE TERMS, YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU HAVE NOT RELIED UPON ANY OTHER STATEMENT
          OR AGREEMENT, WHETHER WRITTEN OR ORAL, WITH RESPECT TO YOUR USE AND ACCESS OF NeoNomad SERVICES. WITHOUT LIMITING THE FOREGOING, YOU HEREBY UNDERSTAND
          AND AGREE THAT NeoNomad WILL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES ARISING OUT OF OR RELATING TO: (A) ANY INACCURACY, DEFECT OR OMISSION OF DIGITAL
          ASSETS PRICE DATA, (B) ANY ERROR OR DELAY IN THE TRANSMISSION OF SUCH DATA, (C) INTERRUPTION IN ANY SUCH DATA, (D) REGULAR OR UNSCHEDULED MAINTENANCE
          CARRIED OUT BY NeoNomad AND SERVICE INTERRUPTION AND CHANGE RESULTING FROM SUCH MAINTENANCE, (E) ANY DAMAGES INCURRED BY OTHER USERS’ ACTIONS,
          OMISSIONS OR VIOLATION OF THESE TERMS, (F) ANY DAMAGE CAUSED BY ILLEGAL ACTIONS OF OTHER THIRD PARTIES OR ACTIONS WITHOUT AUTHORIZED BY NeoNomad; AND
          (G) OTHER EXEMPTIONS MENTIONED IN DISCLAIMERS AND PLATFORM RULES ISSUED BY NeoNomad.
        </p>
        <p class="modal__text">
          THE DISCLAIMER OF IMPLIED WARRANTIES CONTAINED HEREIN MAY NOT APPLY IF AND TO THE EXTENT IT IS PROHIBITED BY APPLICABLE LAW OF THE JURISDICTION IN
          WHICH YOU RESIDE.
        </p>
        <h2 class="modal__title">2. Disclaimer of Damages and Limitation of Liability</h2>
        <p class="modal__text">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL NeoNomad, ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS, DIRECTORS,
          OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES, SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY INCIDENTAL, INDIRECT, SPECIAL, PUNITIVE,
          CONSEQUENTIAL OR SIMILAR DAMAGES OR LIABILITIES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA, INFORMATION, REVENUE, PROFITS OR
          OTHER BUSINESSES OR FINANCIAL BENEFITS) ARISING OUT OF NeoNomad SERVICES, ANY PERFORMANCE OR NON-PERFORMANCE OF NeoNomad SERVICES, OR ANY OTHER
          PRODUCT, SERVICE OR OTHER ITEM PROVIDED BY OR ON BEHALF OF NeoNomad AND ITS AFFILIATES, WHETHER UNDER CONTRACT, STATUTE, STRICT LIABILITY OR OTHER
          THEORY EVEN IF NeoNomad HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES EXCEPT TO THE EXTENT OF A FINAL JUDICIAL DETERMINATION THAT SUCH DAMAGES
          WERE A RESULT OF NeoNomad’S GROSS NEGLIGENCE, FRAUD, WILLFUL MISCONDUCT OR INTENTIONAL VIOLATION OF LAW. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION
          OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
        </p>
        <p class="modal__text">
          NOTWITHSTANDING THE FOREGOING, IN NO EVENT WILL THE LIABILITY OF NeoNomad, ITS AFFILIATES AND THEIR RESPECTIVE SHAREHOLDERS, MEMBERS, DIRECTORS,
          OFFICERS, EMPLOYEES, ATTORNEYS, AGENTS, REPRESENTATIVES, SUPPLIERS OR CONTRACTORS ARISING OUT OF SERVICES OFFERED BY OR ON BEHALF OF NeoNomad AND ITS
          AFFILIATES, ANY PERFORMANCE OR NON-PERFORMANCE OF NeoNomad SERVICES, OR ANY OTHER PRODUCT, SERVICE OR OTHER ITEM, WHETHER UNDER CONTRACT, STATUTE,
          STRICT LIABILITY OR OTHER THEORY, EXCEED THE AMOUNT OF THE FEES PAID BY YOU TO NeoNomad UNDER THESE TERMS IN THE TWELVE-MONTH PERIOD IMMEDIATELY
          PRECEDING THE EVENT GIVING RISE TO THE CLAIM FOR LIABILITY.
        </p>
        <h2 class="modal__title">3. Indemnification</h2>
        <p class="modal__text">
          You agree to indemnify and hold harmless NeoNomad Operators, their affiliates, contractors, licensors, and their respective directors, officers,
          employees and agents from and against any claims, actions, proceedings, investigations, demands, suits, costs, expenses and damages (including
          attorneys’ fees, fines or penalties imposed by any regulatory authority) arising out of or related to (i) your use of, or conduct in connection with,
          NeoNomad Services, (ii) your breach or our enforcement of these Terms, or (iii) your violation of any applicable law, regulation, or rights of any
          third party during your use of NeoNomad Services. If you are obligated to indemnify NeoNomad Operators, their affiliates, contractors, licensors, and
          their respective directors, officers, employees or agents pursuant to these Terms, NeoNomad will have the right, in its sole discretion, to control
          any action or proceeding and to determine whether NeoNomad wishes to settle, and if so, on what terms.
        </p>
        <h2 class="modal__title">V. Announcements</h2>
        <p class="modal__text">
          Please be aware that all official announcements, news, promotions, competitions and airdrops will be listed on
          <a class="modal__link" href="www.neonomad.finance/en/support/announcement">www.neonomad.finance/en/support/announcement</a> . USERS UNDERTAKE TO REFER
          TO THESE MATERIALS REGULARLY AND PROMPTLY. NeoNomad WILL NOT BE HELD LIABLE OR RESPONSIBLE IN ANY MANNER OF COMPENSATION SHOULD USERS INCUR PERSONAL
          LOSSES ARISING FROM IGNORANCE OR NEGLIGENCE OF THE ANNOUNCEMENTS.
        </p>
        <h2 class="modal__title">VI. Termination of Agreement</h2>
        <h2 class="modal__title">1. Suspension of NeoNomad Accounts</h2>
        <p class="modal__text">
          You agree that NeoNomad shall have the right to immediately suspend your NeoNomad Account (and any accounts beneficially owned by related entities or
          affiliates), freeze or lock the Digital Assets or funds in all such accounts, and suspend your access to NeoNomad for any reason including if NeoNomad
          suspects any such accounts to be in violation of these Terms, our Privacy Policy, or any applicable laws and regulations. You agree that NeoNomad
          shall not be liable to you for any permanent or temporary modification of your NeoNomad Account, or suspension or termination of your access to all or
          any portion of NeoNomad Services. NeoNomad shall reserve the right to keep and use the transaction data or other information related to such NeoNomad
          Accounts. The above account controls may also be applied in the following cases:
        </p>
        <p class="modal__text">- The NeoNomad Account is subject to a governmental proceeding, criminal investigation or other pending litigation;</p>
        <p class="modal__text">- We detect unusual activities in the NeoNomad Account;</p>
        <p class="modal__text">- We detect unauthorized access to the NeoNomad Account;</p>
        <p class="modal__text">- We are required to do so by a court order or command by a regulatory/government authority.</p>
        <h2 class="modal__title">2. Cancellation of NeoNomad Accounts</h2>
        <p class="modal__text">
          In case of any of the following events, NeoNomad shall have the right to directly terminate these Terms by cancelling your NeoNomad Account, and shall
          enjoy the right but not the obligation to permanently freeze (cancel) the authorizations of your NeoNomad Account on NeoNomad and withdraw the
          corresponding NeoNomad Account thereof:
        </p>
        <p class="modal__text">after NeoNomad terminates services to you;</p>
        <p class="modal__text">you allegedly register or register in any other person’s name as a NeoNomad User again, directly or indirectly;</p>
        <p class="modal__text">the information that you have provided is untruthful, inaccurate, outdated or incomplete;</p>
        <p class="modal__text">
          when these Terms are amended, you state your unwillingness to accept the amended Terms by applying for cancellation of your NeoNomad Account or by
          other means;
        </p>
        <p class="modal__text">you request that NeoNomad Services be terminated; and</p>
        <p class="modal__text">any other circumstances where NeoNomad deems it should terminate NeoNomad Services.</p>
        <p class="modal__text">
          Should your NeoNomad Account be terminated, the account and transactional information that meet data retention standards will be securely stored for 5
          years. In addition, if a transaction is unfinished during the account termination process, NeoNomad shall have the right to notify your counterparty
          of the situation at that time. You acknowledge that a user-initiated account exit (right to erasure under GDPR or other equivalent regulations) will
          also be subjected to the termination protocol stated above.
        </p>
        <p class="modal__text">
          If NeoNomad is informed that any Digital Assets or funds held in your NeoNomad Account are stolen or otherwise are not lawfully possessed by you,
          NeoNomad may, but has no obligation to, place an administrative hold on the affected funds and your NeoNomad Account. If NeoNomad does lay down an
          administrative hold on some or all of your funds or NeoNomad Account, NeoNomad may continue such hold until such time as the dispute has been resolved
          and evidence of the resolution acceptable to NeoNomad has been provided to NeoNomad in a form acceptable to NeoNomad. NeoNomad will not involve itself
          in any such dispute or the resolution of the dispute. You agree that NeoNomad will have no liability or responsibility for any such hold, or for your
          inability to withdraw Digital Assets or funds or execute trades during the period of any such hold.
        </p>
        <h2 class="modal__title">3. Remaining Funds After NeoNomad Account Termination</h2>
        <p class="modal__text">
          Except as set forth in paragraph 4 below, once a NeoNomad Account is closed/withdrawn, all remaining account balance (which includes charges and
          liabilities owed to NeoNomad) will be payable immediately to NeoNomad. Upon payment of all outstanding charges to NeoNomad (if any), Users will have 5
          business days to withdraw all Digital Assets or funds from the account.
        </p>
        <h2 class="modal__title">4. Remaining Funds After NeoNomad Account Termination Due to Fraud, Violation of Law, or Violation of These Terms</h2>
        <p class="modal__text">
          NeoNomad maintains full custody of the Digital Assets, funds and User data/information which may be turned over to governmental authorities in the
          event of NeoNomad Accounts’ suspension/closure arising from fraud investigations, investigations of violation of law or violation of these Terms.
        </p>
        <h2 class="modal__title">VII. No Financial Advice</h2>
        <p class="modal__text">
          NeoNomad is not your broker, intermediary, agent, or advisor and has no fiduciary relationship or obligation to you in connection with any trades or
          other decisions or activities effected by you using NeoNomad Services. No communication or information provided to you by NeoNomad is intended as, or
          shall be considered or construed as, investment advice, financial advice, trading advice, or any other sort of advice. Unless otherwise specified in
          these Terms, all trades are executed automatically, based on the parameters of your order instructions and in accordance with posted trade execution
          procedures, and you are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you
          according to your personal investment objectives, financial circumstances and risk tolerance, and you shall be solely responsible for any loss or
          liability therefrom. You should consult legal or tax professionals regarding your specific situation. NeoNomad does not recommend that any Digital
          Asset should be bought, earned, sold, or held by you. Before making the decision to buy, sell or hold any Digital Asset, you should conduct your own
          due diligence and consult your financial advisors prior to making any investment decision. NeoNomad will not be held responsible for the decisions you
          make to buy, sell, or hold Digital Asset based on the information provided by NeoNomad.
        </p>
        <h2 class="modal__title">VIII. Compliance with Local Laws</h2>
        <p class="modal__text">
          It is Users’ responsibility to abide by local laws in relation to the legal usage of NeoNomad Services in their local jurisdiction as well as other
          laws and regulations applicable to Users. Users must also factor, to the extent of their local laws all aspects of taxation, the withholding,
          collection, reporting and remittance to their appropriate tax authorities.ALL USERS OF NeoNomad SERVICES ACKNOWLEDGE AND DECLARE THAT THEIR FUNDS COME
          FROM LEGITIMATE SOURCES AND DO NOT ORIGINATE FROM ILLEGAL ACTIVITIES; USERS AGREE THAT NeoNomad WILL REQUIRE THEM TO PROVIDE OR OTHERWISE COLLECT THE
          NECESSARY INFORMATION AND MATERIALS AS PER RELEVANT LAWS OR GOVERNMENT ORDERS TO VERIFY THE LEGALITY OF THE SOURCES AND USE OF THEIR FUNDS. NeoNomad
          maintains a stance of cooperation with law enforcement authorities globally and will not hesitate to seize, freeze, terminate Users’ accounts and
          funds which are flagged out or investigated by legal mandate.
        </p>
        <h2 class="modal__title">IX. Privacy Policy</h2>
        <p class="modal__text">
          Access to NeoNomad Services will require the submission of certain personally identifiable information. Please review NeoNomad’s Privacy Policy at
          <a class="modal__link" href="https://www.neonomad.finace/en/privacy">www.neonomad.finace/en/privacy</a> for a summary of NeoNomad’s guidelines
          regarding the collection and use of personally identifiable information.
        </p>
        <h2 class="modal__title">X. Resolving Disputes: Forum, Arbitration, Class Action Waiver</h2>
        <p class="modal__text">
          PLEASE READ THIS SECTION CAREFULLY, AS IT INVOLVES A WAIVER OF CERTAIN RIGHTS TO BRING LEGAL PROCEEDINGS, INCLUDING AS A CLASS ACTION.
        </p>
        <p class="modal__text">
          1. Notice of Claim and Dispute Resolution Period. Please contact NeoNomad first! NeoNomad wants to address your concerns without resorting to formal
          legal proceedings, if possible. If you have a dispute with NeoNomad, then you should contact NeoNomad and a ticket number will be assigned. NeoNomad
          will attempt to resolve your dispute internally as soon as possible. The parties agree to negotiate in good faith to resolve the dispute (which
          discussions shall remain confidential and be subject to applicable rules protecting settlement discussions from use as evidence in any legal
          proceeding).
        </p>
        <p class="modal__text">
          In the event the dispute cannot be resolved satisfactorily, and you wish to assert a legal claim against NeoNomad, then you agree to set forth the
          basis of such claim in writing in a “Notice of Claim,” as a form of prior notice to NeoNomad. The Notice of Claim must (1) describe the nature and
          basis of the claim or dispute, (2) set forth the specific relief sought, (3) provide the original ticket number, and (4) include your NeoNomad account
          email. The Notice of Claim should be submitted to an email address or hyperlink provided in your correspondence with NeoNomad. After you have provided
          the Notice of Claim to NeoNomad, the dispute referenced in the Notice of Claim may be submitted by either NeoNomad or you to arbitration in accordance
          with paragraph 2 of this Section, below. For the avoidance of doubt, the submission of a dispute to NeoNomad for resolution internally and the
          delivery of a Notice of Claim to NeoNomad are prerequisites to commencement of an arbitration proceeding (or any other legal proceeding). During the
          arbitration, the amount of any settlement offer made by you or NeoNomad shall not be disclosed to the arbitrator.
        </p>
        <p class="modal__text">
          2. Agreement to Arbitrate and Governing Law. You and NeoNomad Operators agree that, subject to paragraph 1 above, any dispute, claim, or controversy
          between you and NeoNomad (and/or NeoNomad Operators) arising in connection with or relating in any way to these Terms or to your relationship with
          NeoNomad (and/or NeoNomad Operators) as a user of NeoNomad Services (whether based in contract, tort, statute, fraud, misrepresentation, or any other
          legal theory, and whether the claims arise during or after the termination of these Terms) will be determined by mandatory final and binding
          individual (not class) arbitration, except as set forth below under Exceptions to Agreement to Arbitrate. You and NeoNomad Operators further agree
          that the arbitrator shall have the exclusive power to rule on his or her own jurisdiction, including without limitation any objections with respect to
          the existence, scope or validity of the Agreement to Arbitrate, or to the arbitrability of any claim or counterclaim. Arbitration is more informal
          than a lawsuit in court. THERE IS NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW OF AN ARBITRATION AWARD IS LIMITED. There may be more limited
          discovery than in court. The arbitrator must follow this agreement and can award the same damages and relief as a court (including, if applicable,
          attorney fees), except that the arbitrator may not award declaratory or injunctive relief in favour of anyone but the parties to the arbitration. The
          arbitration provisions set forth in this Section will survive termination of these Terms. Arbitration Rules. The arbitration shall be subject to the
          ECCI Administered Arbitration Rules (EECI. Rules) in force when the Notice of Arbitration is submitted, as modified by this Section X. The arbitration
          will be administered by the Estonia Chamber of Commerce and Industry (EECI). Unless the parties agree otherwise, there shall be only one arbitrator
          appointed in accordance with the EECI Rules. Any arbitration will be conducted in the English language. Regardless of the manner in which the
          arbitration is conducted, the arbitrator shall issue a reasoned written decision sufficient to explain the essential findings and conclusions on which
          the decision and award, if any, are based. JUDGMENT ON ANY ARBITRAL AWARD MAY BE GIVEN IN ANY COURT HAVING JURISDICTION OVER THE PARTY (OR OVER THE
          ASSETS OF THE PARTY) AGAINST WHOM SUCH AN AWARD IS RENDERED. Time for Filing: ANY ARBITRATION AGAINST NeoNomad OPERATORS MUST BE COMMENCED BY FILING A
          REQUEST FOR ARBITRATION WITHIN ONE (1) YEAR, AFTER THE DATE THE PARTY ASSERTING THE CLAIM FIRST KNOWS OR REASONABLY SHOULD KNOW OF THE ACT, OMISSION
          OR DEFAULT GIVING RISE TO THE CLAIM; AND THERE SHALL BE NO RIGHT TO ANY REMEDY FOR ANY CLAIM NOT ASSERTED WITHIN THAT TIME PERIOD. THIS ONE YEAR
          LIMITATION PERIOD IS INCLUSIVE OF THE INTERNAL DISPUTE RESOLUTION PROCEDURE SET FORTH IN PARAGRAPH 1 OF THIS SECTION, ABOVE. THERE SHALL BE NO RIGHT
          TO ANY REMEDY FOR ANY CLAIM NOT ASSERTED WITHIN THAT TIME PERIOD. If applicable law prohibits a one-year limitation period for asserting claims, any
          claim must be asserted within the shortest time period permitted by applicable law. Process; Notice: The party who intends to seek arbitration after
          the expiration of the Dispute Resolution Period set forth in paragraph 1, above, must submit a request to the EECI in accordance with the EECI Rules.
          If we request arbitration against you, we will give you notice at the email address or mailing address you have provided. You agree that any notice
          sent to this email or mailing address shall be deemed effective for all purposes, including without limitation to determinations of adequacy of
          service. It is your obligation to ensure that the email address and/or mailing address on file with NeoNomad is up-to-date and accurate. Seat of
          Arbitration: The seat of the arbitration shall be Estonia. Place of Hearing: The location of any in-person arbitration hearing shall be Estonia,
          unless otherwise agreed to by the parties. Governing Law: These Terms (including this arbitration agreement) shall be governed by, and construed in
          accordance with, the laws of Estonia. Confidentiality. The parties agree that the arbitration shall be kept confidential. The existence of the
          arbitration, any nonpublic information provided in the arbitration, and any submissions, orders or awards made in the arbitration (together, the
          “Confidential Information”) shall not be disclosed to any non-party except the tribunal, the EECI, the parties, their counsel, experts, witnesses,
          accountants and auditors, insurers and reinsurers, and any other person necessary to the conduct of the arbitration. Notwithstanding the foregoing, a
          party may disclose Confidential Information to the extent that disclosure may be required to fulfill a legal duty, protect or pursue a legal right, or
          enforce or challenge an award in bona fide legal proceedings. This confidentiality provision shall survive termination of these Terms and of any
          arbitration brought pursuant to these Terms.
        </p>
        <p class="modal__text">
          3. Class Action Waiver. You and NeoNomad agree that any claims relating to these Terms or to your relationship with NeoNomad as a user of NeoNomad
          Services (whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether the claims arise during or after
          the termination of these Terms) shall be brought against the other party in an arbitration on an individual basis only and not as a plaintiff or class
          member in a purported class or representative action. You and NeoNomad further agree to waive any right for such claims to be brought, heard, or
          arbitrated as a class, collective, representative, or private attorney general action, to the extent permissible by applicable law. Combining or
          consolidating individual arbitrations into a single arbitration is not permitted without the consent of all parties, including NeoNomad.
        </p>
        <p class="modal__text">
          4. Modifications. NeoNomad reserves the right to update, modify, revise, suspend, or make any future changes to Section X regarding the parties’
          Agreement to Arbitrate, subject to applicable law. You hereby consent and agree that it is your responsibility to ensure that your understanding of
          this Section is up to date. Subject to the applicable law, your continued use of your NeoNomad account shall be deemed to be your acceptance of any
          modifications to Section X regarding the parties’ Agreement to Arbitrate. You agree that if you object to the modifications to Section X, NeoNomad may
          block access to your account pending closure of your account. In such circumstances, the Terms of Use prior to modification shall remain in full force
          and effect pending closure of your account.
        </p>
        <p class="modal__text">
          5. Severability. If any portion of these Terms are adjudged to be invalid or unenforceable for any reason or to any extent, the remainder of these
          Terms will remain valid and enforceable and the invalid or unenforceable portion will be given effect to the greatest extent permitted by law. pending
          closure of your account.
        </p>
        <h2 class="modal__title">XI. Miscellaneous</h2>
        <p class="modal__text">
          1. Independent Parties. NeoNomad is an independent contractor but not an agent of you in the performance of these Terms. These Terms shall not be
          interpreted as facts or evidence of an association, joint venture, partnership, or franchise between the parties.
        </p>
        <p class="modal__text">
          2. Entire Agreement. These Terms constitute the entire agreement between the parties regarding use of NeoNomad Services and will supersede all prior
          written or oral agreements between the parties. No usage of trade or other regular practice or method of dealing between the parties will be used to
          modify, interpret, supplement, or alter the terms herein.
        </p>
        <p class="modal__text">
          3. Interpretation and Revision. NeoNomad reserves the right to alter, revise, modify, and/or change these Terms at any time. All changes will take
          effect immediately upon being published on NeoNomad websites. It is your responsibility to regularly check relevant pages on our websites/applications
          to confirm the latest version of these Terms. If you do not agree to any such modifications, your only remedy is to terminate your usage of NeoNomad
          Services and cancel your account. You agree that, unless otherwise expressly provided in these Terms, NeoNomad will not be responsible for any
          modification or termination of NeoNomad Services by you or any third party, or suspension or termination of your access to NeoNomad Services.
        </p>
        <p class="modal__text">
          4. Force Majeure. NeoNomad will not be liable for any delay or failure to perform as required by these Terms because of any cause or condition beyond
          NeoNomad’s reasonable control.
        </p>
        <p class="modal__text">
          5. Severability. If any portion of these Terms is held invalid or unenforceable, such invalidity or enforceability will not affect the other
          provisions of these Terms, which will remain in full force and effect, and the invalid or unenforceable portion will be given effect to the greatest
          extent possible.
        </p>
        <p class="modal__text">
          6. Assignment. You may not assign or transfer any right to use NeoNomad Services or any of your rights or obligations under these Terms without prior
          written consent from NeoNomad, including any right or obligation related to the enforcement of laws or the change of control. NeoNomad may assign or
          transfer any or all of its rights or obligations under these Terms, in whole or in part, without notice or obtaining your consent or approval.
        </p>
        <p class="modal__text">
          7. Waiver. The failure of one party to require performance of any provision will not affect that party’s right to require performance at any time
          thereafter. At the same time, the waiver of one party to seek recovery for the other party’s violation of these Terms or any provision of applicable
          terms shall not constitute a waiver by that party of any subsequent breach or violation by the other party or of the provision itself.
        </p>
        <p class="modal__text">
          8. Third-Party Website Disclaimer. Any links to third-party websites from NeoNomad Services does not imply endorsement by NeoNomad of any product,
          service, information or disclaimer presented therein, nor does NeoNomad guarantee the accuracy of the information contained on them. If you suffer
          loss from using such third-party product and service, NeoNomad will not be liable for such loss. In addition, since NeoNomad has no control over the
          terms of use or privacy policies of third-party websites, you should read and understand those policies carefully.
        </p>
        <p class="modal__text">
          9. Matters Related to Apple Inc. If you use any device manufactured by Apple Inc. to participate in any commercial activities or reward programs
          through NeoNomad Services, such activities and programs are provided by NeoNomad and are not associated with Apple Inc. in any manner.
        </p>
        <p class="modal__text">
          10. Contact Information. For more information on NeoNomad, you may refer to the company and license information found on NeoNomad websites. If you
          have questions regarding these Terms, please feel free to contact NeoNomad for clarification via our Customer Support team at 10. Contact Information.
          For more information on NeoNomad, you may refer to the company and license information found on NeoNomad websites. If you have questions regarding
          these Terms, please feel free to contact NeoNomad for clarification via our Customer Support team at
          <a class="modal__link" href="https://www.neonomad.finance/">www.neonomad.finance/en/support/requests/new</a>.
        </p>
      </div>
      <div class="modal__bottom">
        <div class="flex flex-col sm:flex-row items-center justify-between mt-8">
          <div class="checkbox">
            <!-- <span>Terms and conditions</span> -->
            <div class="flex">
              <input class="w-[18px] h-[18px]" v-model="checked" type="checkbox" />
              <label @click="textCheck">I accept terms and conditions</label>
            </div>
          </div>
          <div class="relative mt-[18px] sm:mt-0">
            <div @click="modal.showAcceptModal(false)" class="btn h-[56px] w-[147px] sm:w-[171px]">Proceed</div>
            <div v-if="!checked" class="btn__bg"></div>
          </div>
          <!-- <SharedButton>Close</SharedButton> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '../../store/useModalStore'

interface Props {
  close: () => void
}

const modal = useModalStore()
const checked = ref(false)

function textCheck() {
  checked.value = !checked.value
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  background: #8572ff;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  cursor: pointer;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9d8eff;
    border-radius: 8px;
    opacity: 0.3;
  }
}
.checkbox {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & > div > label {
    cursor: pointer;
    margin-left: 5px;
    /* margin-top: 15px; */
  }
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2222;
  &__bottom {
    /* padding-top: 20px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(46, 22, 100, 0.6);
    backdrop-filter: blur(4px);
    cursor: pointer;
  }

  &__content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 32px;
    background: #332558;
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  &__link {
    color: red;
  }

  &__text {
    width: 100%;
    padding-bottom: 15px;
    color: #fff;
    &-wrapper {
      height: 78%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 5px 5px 15px 5px;
      opacity: 0.8;
    }
  }

  &__close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;
  }
}

.modal__text-wrapper::-webkit-scrollbar-thumb {
  background-color: #333;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
