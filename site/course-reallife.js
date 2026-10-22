/** Healthcare-adjacent admin with privacy, and the freelance reality chapter. Append IDs to preserve existing progress. */
const healthAdminLessons = [
  {
    title: "Understand health privacy basics for non-clinical admin work",
    goal: "Handle sensitive health-related information with minimum access, clear consent, and no advice.",
    prereq: "Privacy, account security, and confidentiality lessons.",
    teach:
      "Health-related information is among the most sensitive data a business can hold. A non-clinical VA may schedule appointments, send reminders, organize documents, or handle billing paperwork for a clinic or practitioner, but never gives medical advice or interprets results. Many places have laws about health information, and they differ by country and by the type of organization; the client or its compliance contact decides which rules apply and what training you need. Never assume a general rule covers you. Work on the minimum necessary principle: see only the information your task requires, and only for as long as you need it. Use the organization's approved systems for anything containing patient or customer details, and never move such information into personal email, chat tools, notes apps, or AI tools unless the organization has approved that tool for that purpose in writing. Do not discuss anyone's information in public places or with people who are not authorized, including friends and family. Confirm a person's identity using the organization's method before sharing any detail, and when unsure, say you will have a staff member call back. Use secure, approved channels, lock your screen, and keep your workspace private. Report any mistake, such as a message sent to the wrong person, immediately so the organization can respond. Complete any training the organization requires and sign confidentiality agreements before you start.",
    example:
      "A fictional clinic's VA receives a call from someone asking about a family member's appointment. The VA does not confirm whether the person is a patient and says, 'I cannot share information. A staff member can call you back at a number on file if the person has given permission.' The VA logs the call and passes the message to the front desk.",
    steps: [
      "Ask the organization which privacy rules and training apply to your role.",
      "List the minimum information and access your tasks require.",
      "Use only approved systems and never copy details into personal or unapproved tools.",
      "Verify identity using the organization's method before sharing anything.",
      "Report mistakes immediately and keep conversations private.",
    ],
    exercise:
      "For the practice clinic, write the minimum-access list for a scheduling VA, a safe reply to a caller asking about someone else, and the steps you would take after sending a message to the wrong person.",
    portfolio:
      "A privacy-first working checklist for a non-clinical admin role.",
    mistake:
      "Pasting patient details into a general AI tool or personal chat for convenience can break rules and expose private information.",
    question:
      "A caller asks if their neighbor has an appointment today. What do you do?",
    options: [
      "Confirm quickly; it is harmless",
      "Decline to share, offer a staff callback if permitted, and log the call",
      "Tell them to ask the neighbor and then confirm if they are correct",
    ],
    answer: 1,
    explanation:
      "Confirming even the existence of an appointment can disclose private information. Follow the organization's identity and permission process.",
    ready: [
      "Apply the minimum necessary idea",
      "Use only approved systems and tools",
      "Verify identity before sharing",
      "Report mistakes at once",
    ],
    tools:
      "The organization's approved scheduling and records systems, and its privacy policy.",
    taglish:
      "Isa ang health information sa pinakasensitibong data. Ang non-clinical na VA ay puwedeng mag-schedule, magpadala ng reminder, mag-organize ng dokumento, o mag-asikaso ng billing paperwork, pero hindi nagbibigay ng medical advice. Magkakaiba ang batas ayon sa bansa at uri ng organisasyon, kaya ang client o compliance contact ang magsasabi kung ano ang sakop. Tingnan lang ang kailangang impormasyon, gumamit lang ng aprubadong sistema, at huwag ilipat ang detalye sa personal na chat o AI tool. I-verify ang pagkakakilanlan bago magbahagi, at i-report agad ang pagkakamali.",
    proTips: [
      "Lock your screen every time you step away, even at home.",
      "Keep one written script for 'I cannot share that information' so you stay calm and consistent.",
    ],
    deepDive: [
      [
        "Minimum necessary in practice",
        "Ask what you truly need for each task. A scheduler needs a name, a time, and a contact method, not the reason for the visit. If a form asks for more than you need, ask the organization whether to leave it blank.",
      ],
      [
        "Confidentiality at home",
        "Work in a private space, use a screen that others cannot read, and do not take calls where others can hear. Keep devices updated and use the multi-factor authentication the organization requires.",
      ],
    ],
    practiceData:
      "Fictional clinic: Sunrise Clinic. Tasks for the VA: schedule and remind, organize forms into the approved system, and chase missing insurance forms. Incident: the VA sent a reminder for Ana to Anna's email by mistake. A caller asks: 'Is my neighbor Mr. Cruz seeing the doctor today?'",
    modelAnswer:
      "Minimum access: names, times, and contact methods for scheduling; forms only in the approved system; no reasons for visits unless required. Reply to the caller: 'I am not able to share any information, but I can take a message.' After the wrong-recipient email, the VA stops, tells the manager immediately with what was sent and to whom, and follows the organization's incident process without trying to fix it quietly.",
  },
  {
    title: "Run appointment reminders and reschedules without exposing details",
    goal: "Reduce no-shows with clear reminders that protect patient and customer privacy.",
    prereq: "Calendar management, booking links, and health privacy lessons.",
    teach:
      "Reminders reduce no-shows and save a practice real money, but a careless reminder can reveal private information. Use the organization's approved template, which should include the organization's name, the date, time, time zone if relevant, the location or link, and how to confirm or reschedule, and should not include the reason for the visit, the name of the practitioner's specialty if that is sensitive, or any test or diagnosis details. Send reminders through the channels the person agreed to, such as a text or email on file, and confirm that contact details are correct at booking. Time them sensibly, for example two days before and the morning of. Make confirming or rescheduling easy with one link or reply. When rescheduling, verify identity using the organization's method, offer two or three alternatives that fit the practitioner's real availability, and update the calendar and the reminder list at once so the old slot is released. If a person reports symptoms or an emergency in a reply, do not give advice; follow the emergency instructions the organization provided and pass the message to staff immediately. Track no-shows and late cancellations and share patterns with the manager, who may change policy. Keep messages short, kind, and free of jargon, and check the date, day, and time before every batch.",
    example:
      "A fictional clinic's reminder says, 'Your visit about your test results is tomorrow.' The VA corrects the template to 'Sunrise Clinic: you have an appointment on Tuesday 13 October at 2:30 PM at 12 Pine St. Reply C to confirm or R to reschedule.' No-shows drop after the clear confirm and reschedule options are added.",
    steps: [
      "Use the approved template with organization name, date, time, place, and a one-step confirm or reschedule option.",
      "Leave out reasons, specialties if sensitive, and any clinical details.",
      "Send through the agreed channel at the planned times.",
      "Verify identity before rescheduling and release the old slot immediately.",
      "Pass any symptoms or emergencies to staff and track no-show patterns.",
    ],
    exercise:
      "Fix the practice reminder, write a reschedule reply that offers real alternatives, and write the response to a message that mentions chest pain.",
    portfolio: "A privacy-safe reminder template and reschedule scripts.",
    mistake:
      "Mentioning the reason for a visit in a reminder can reveal sensitive details to anyone who sees the screen.",
    question:
      "A person replies to a reminder saying they have severe chest pain. What do you do?",
    options: [
      "Reschedule them for tomorrow",
      "Tell them it is probably nothing",
      "Follow the organization's emergency instructions and notify staff immediately, without giving advice",
    ],
    answer: 2,
    explanation:
      "Possible emergencies follow the organization's emergency process right away. A VA does not judge symptoms or advise.",
    ready: [
      "Write privacy-safe reminders",
      "Verify identity before reschedules",
      "Update calendars immediately",
      "Escalate emergencies without advice",
    ],
    tools:
      "The practice's scheduling system, approved text or email tool, and templates.",
    taglish:
      "Binabawasan ng reminder ang no-show, pero ang pabayang reminder ay puwedeng maglantad ng pribadong detalye. Gamitin ang aprubadong template: pangalan ng organisasyon, petsa, oras, lugar o link, at paraan para mag-confirm o mag-reschedule. Huwag ilagay ang dahilan ng pagbisita o anumang detalye ng pagsusuri. Ipadala sa channel na pinagkasunduan. Bago mag-reschedule, i-verify ang pagkakakilanlan at agad i-update ang calendar. Kapag may nagsabi ng sintomas o emergency, huwag magpayo; sundin ang emergency instructions ng organisasyon at ipasa agad sa staff.",
    proTips: [
      "Read the reminder on a phone lock screen to see what a bystander could read.",
      "Always include the day of the week with the date so mistakes are easy to spot.",
    ],
    deepDive: [
      [
        "Design the reminder",
        "Keep it under three lines. Put the date, day, and time first, then the place, then the single action. Test it on a colleague who does not know the details and ask what they understood.",
      ],
      [
        "Handle reschedules cleanly",
        "Release the old slot right away so another person can use it. Confirm the new slot in writing. If a person cancels repeatedly, tell the manager so they can decide how to help.",
      ],
    ],
    practiceData:
      "Fictional bad reminder: 'Hi Ana, your appointment with Dr. Lee about your test results is tomorrow at 2:30.' Clinic: Sunrise Clinic, 12 Pine St, Tuesday 13 October 2:30 PM. Reschedule request from Ana: 'Can I come Thursday?' Doctor availability: Thursday 9–11 AM and Friday 1–3 PM. Another reply: 'I have severe chest pain.'",
    modelAnswer:
      "The fixed reminder reads: 'Sunrise Clinic: you have an appointment on Tuesday 13 October at 2:30 PM at 12 Pine St. Reply C to confirm or R to reschedule.' For Ana, the VA verifies identity and offers Thursday 9:00 or 10:30 AM, or Friday 1:00 PM, then releases the old slot. The chest pain message is not answered with advice; the VA follows the clinic's emergency instructions and notifies staff immediately.",
  },
  {
    title:
      "Support insurance and billing paperwork without making clinical decisions",
    goal: "Gather, organize, and follow up on paperwork accurately while leaving coverage and coding decisions to qualified staff.",
    prereq:
      "Document control, bookkeeping support, and health privacy lessons.",
    teach:
      "Insurance and billing paperwork involves many forms, dates, and reference numbers, and small errors cause delays or denials. A non-clinical VA can help by collecting required documents, checking that forms are complete, tracking submission status, and following up on missing items, but does not decide what a service is called, how it is coded, whether it is covered, or what a patient owes; qualified staff do that. Start by getting the checklist of required documents for each payer or process from the organization. Create a tracker with the case reference, the date each document was requested and received, the submission date, the follow-up date, and the status. Check names, dates, numbers, and signatures against the source record and flag mismatches instead of correcting them yourself. Never alter a document to make it fit; ask staff to correct it. When contacting a payer or patient, use the approved script, verify identity as required, and keep notes of the date, person, and reference. Be careful with patient information in emails and attachments and use only secure channels. If a patient disputes a charge or asks why something was billed, explain the process politely and pass the question to a qualified colleague. Track denials and delays by cause and report patterns, such as repeated missing signatures, so the team can fix the process.",
    example:
      "A fictional practice has a claim delayed because a form lacks a signature. The VA's tracker shows the form was received without one, so the VA requests a signed copy using the approved message and updates the follow-up date. When the patient asks why the amount differs from an estimate, the VA says a billing colleague will explain and passes the question on.",
    steps: [
      "Obtain the required-document checklist for each process from the organization.",
      "Track each case with requested, received, submitted, and follow-up dates.",
      "Check names, dates, numbers, and signatures and flag mismatches without altering documents.",
      "Use approved scripts and secure channels to follow up and keep dated notes.",
      "Pass coding, coverage, and charge questions to qualified staff and report delay patterns.",
    ],
    exercise:
      "Build the tracker for the three practice cases, flag the issues you find, write one follow-up message, and name the questions you would pass to staff.",
    portfolio:
      "A paperwork tracker template with a required-document checklist.",
    mistake:
      "Changing a form to match the record can alter an official document and create serious problems.",
    question:
      "A form has a date that does not match the record. What do you do?",
    options: [
      "Flag the mismatch and ask the responsible staff member to correct it",
      "Change the date to match",
      "Submit it anyway",
    ],
    answer: 0,
    explanation:
      "Official documents should be corrected by the responsible person. Your job is to catch and flag the mismatch.",
    ready: [
      "Use a required-document checklist",
      "Track status and dates for every case",
      "Flag mismatches without altering documents",
      "Escalate coding and coverage questions",
    ],
    tools:
      "A spreadsheet tracker inside the approved system and secure messaging.",
    taglish:
      "Maraming form, petsa, at reference number sa insurance at billing paperwork, at ang maliit na mali ay nagdudulot ng delay o denial. Ang non-clinical na VA ay tumutulong mangolekta ng dokumento, mag-check kung kumpleto, mag-track ng status, at mag-follow up sa kulang, pero hindi nagpapasya sa coding, coverage, o kung magkano ang utang ng pasyente. Magtago ng tracker na may petsa ng request, tanggap, at submission. I-check ang pangalan, petsa, at pirma laban sa source at i-flag ang hindi tugma; huwag baguhin ang dokumento. Ipasa sa qualified na staff ang tanong sa singil.",
    proTips: [
      "Write the date, person, and reference after every call about a case.",
      "Group your follow-ups by payer so you can send one organized batch.",
    ],
    deepDive: [
      [
        "Check before you submit",
        "Use a short pre-submission checklist: names match, dates make sense, required signatures are present, and each attachment is the right one. A two-minute check prevents a two-week delay.",
      ],
      [
        "Report patterns, not blame",
        "If the same form is repeatedly incomplete, tell the manager what happens and how often. The fix may be a clearer form or an extra step at the front desk.",
      ],
    ],
    practiceData:
      "Fictional cases: A) form received, signature missing, due Friday. B) form date says 3 March but the record says 5 March. C) patient asks, 'Why does my bill say 120 when you estimated 90?' Required documents: signed form, ID verification, referral note.",
    modelAnswer:
      "Case A: log as 'signature missing', request a signed copy through the approved message, and set a follow-up before Friday. Case B: flag the 3 versus 5 March mismatch for the responsible staff to correct; do not change it. Case C: explain politely that a billing colleague will explain the difference and pass the question with the patient's details and amounts. The tracker records dates, references, owners, and next steps for each.",
  },
  {
    title: "Handle sensitive calls and messages safely",
    goal: "Take accurate messages, triage urgency, and stay within your role when callers are worried or distressed.",
    prereq: "Call triage, boundaries, and health privacy lessons.",
    teach:
      "People contacting a health-related office are often worried, in pain, or confused. A non-clinical VA helps by being calm, accurate, and clear about what they can and cannot do. Follow the organization's triage guide. Anything that sounds like an emergency, such as severe pain, trouble breathing, or thoughts of self-harm, follows the emergency instructions immediately, which usually means directing the person to emergency services and alerting staff; you do not judge, diagnose, or reassure. Urgent but non-emergency messages, such as a medication question or a test result inquiry, are recorded and passed to the right staff member right away through the agreed channel. Routine items, such as address changes, go into the daily list. When taking a message, record the caller's name, a callback number, the best time to call, the reason in the caller's words, and the date and time received, and read it back. Do not give medical advice, explain results, or suggest medication. Use gentle, plain language, say what will happen next and when, and keep your promise. If a caller is upset, let them speak, acknowledge their feelings, and avoid arguing. Protect their privacy by not repeating details loudly or in writing outside the approved system. After a difficult call, tell the manager if you need support, since this work can be emotionally heavy.",
    example:
      "A caller to a fictional clinic says their child has a high fever and is hard to wake. The VA follows the emergency card at once, tells the caller to contact emergency services, alerts the on-duty nurse, and logs the call. A separate caller asks about moving an appointment, and the VA records it for the daily list.",
    steps: [
      "Follow the organization's triage guide for emergency, urgent, and routine items.",
      "For emergencies, use the emergency instructions immediately and alert staff.",
      "Record name, callback, best time, reason in their words, and date and time, and read it back.",
      "Avoid advice, results, or medication suggestions and say what happens next.",
      "Log the call, pass urgent messages through the agreed channel, and seek support if needed.",
    ],
    exercise:
      "Triage the practice messages, write each message record, and draft a calm script for an upset caller.",
    portfolio:
      "A call triage guide and message template for a health-related office.",
    mistake:
      "Reassuring a worried caller that 'it is probably fine' can delay urgent care and is outside your role.",
    question:
      "A caller says they feel hopeless and are thinking of hurting themselves. What do you do?",
    options: [
      "Tell them to relax and call back tomorrow",
      "Log it for the daily list",
      "Follow the organization's emergency instructions at once and alert staff without trying to counsel them",
    ],
    answer: 2,
    explanation:
      "Possible risk to life follows the emergency process immediately. A VA does not counsel or delay.",
    ready: [
      "Triage using the guide",
      "Use emergency instructions immediately",
      "Record accurate messages and read them back",
      "Avoid advice and seek support afterward",
    ],
    tools:
      "The organization's phone system, message template, and emergency card.",
    taglish:
      "Madalas nag-aalala o nasasaktan ang mga tumatawag sa health-related na opisina. Ang tungkulin ng VA ay maging kalmado, tumpak, at malinaw sa kaya at hindi kayang gawin. Sundin ang triage guide ng organisasyon. Ang parang emergency, tulad ng matinding sakit o hirap huminga, ay agad na sumusunod sa emergency instructions at alerto ang staff; hindi ka nag-di-diagnose o nanggagaan ng loob. Itala ang pangalan, callback, dahilan sa sarili nilang salita, at oras, at basahin pabalik. Huwag magbigay ng medical advice. Magsabi ng susunod na hakbang at tuparin ito.",
    proTips: [
      "Keep the emergency card next to your phone and practice reading it aloud.",
      "After a hard call, take two minutes to breathe and tell the manager if you need support.",
    ],
    deepDive: [
      [
        "Say what you can do",
        "Use phrases such as 'I am not able to advise on that, but I will get your message to the nurse right away and they will call you by 3 PM.' It is honest, kind, and specific.",
      ],
      [
        "Look after yourself",
        "Sensitive calls can stay with you. Use the organization's support options, take short breaks, and do not carry the details home. Sharing the load is part of doing the job well.",
      ],
    ],
    practiceData:
      "Fictional messages for Sunrise Clinic: 1) 'My dad has chest pain and is sweating.' 2) 'Can I change my address on file?' 3) 'I took two doses of my medicine by mistake, what should I do?' 4) 'I am furious that my appointment was moved twice.' Guide: emergencies follow the emergency card; medication questions are urgent to the nurse line.",
    modelAnswer:
      "Message 1 is an emergency: follow the emergency card, tell the caller to contact emergency services, and alert staff. Message 3 is urgent: record it and pass it immediately to the nurse line without advising. Message 2 is routine and goes to the daily list. Message 4: let the caller speak, acknowledge the frustration, say the manager will call by a stated time, and record the details. Every message is logged with time, callback, and the caller's words.",
  },
];

const freelanceLessons = [
  {
    title: "Plan your first 90 days as a freelance VA",
    goal: "Turn the course into a concrete plan for finding clients, building proof, and staying consistent.",
    prereq: "Portfolio, client search, and weekly operating system lessons.",
    teach:
      "The first ninety days decide whether freelancing becomes a habit or a hobby. Break the time into three phases of thirty days. In the first month, focus on foundations: choose one core service, build three honest case studies, set up your profile and workspace, and write your service scope and price range. In the second month, focus on outreach: send a fixed number of specific, personalized messages each week, apply to well-vetted opportunities, and follow up politely. Track everything in a simple sheet: contact, date, message, reply, and next action. In the third month, focus on delivery and refinement: complete early work carefully, ask for feedback and a testimonial where appropriate, and improve your processes. Set weekly targets you control, such as ten outreach messages and two portfolio improvements, rather than outcomes you do not control, like landing a client by a certain date. Keep a budget for slow months. Protect your time with a routine and a day off. Review at the end of each month: what worked, what did not, and what to change. Expect slow starts and rejections; they are normal and not a verdict on your worth. If something is not working after a fair trial, change one variable, such as the service or the message, and test again.",
    example:
      "A fictional new VA plans thirty days to finish three case studies and a profile, thirty days of ten outreach messages a week, and thirty days of delivery and feedback. In week six, a small cafe replies to a message about inconsistent hours, and the VA agrees to a paid trial.",
    steps: [
      "Define the month-one foundations: one service, three case studies, profile, scope, and price range.",
      "Set a weekly outreach target and a tracking sheet for month two.",
      "Plan month three for early delivery, feedback, and process improvement.",
      "Choose weekly activity targets you control and keep a slow-month budget.",
      "Review monthly and change one variable at a time.",
    ],
    exercise:
      "Write your own 90-day plan with weekly targets, a tracking sheet layout, a slow-month budget idea, and your first review date.",
    portfolio: "A written 90-day plan and outreach tracker.",
    mistake:
      "Waiting for a perfect portfolio before contacting anyone delays learning from real feedback.",
    question: "Which weekly target is within your control?",
    options: [
      "Landing two new clients",
      "Sending ten specific outreach messages",
      "Getting a 5-star review",
    ],
    answer: 1,
    explanation:
      "You control your activity, not other people's decisions. Activity targets keep you moving and give data to improve.",
    ready: [
      "Plan three 30-day phases",
      "Set controllable weekly targets",
      "Track outreach and results",
      "Review and adjust monthly",
    ],
    tools: "A spreadsheet tracker, calendar, and your portfolio.",
    taglish:
      "Ang unang siyamnapung araw ang magpapasya kung magiging gawi o libangan lang ang freelancing. Hatiin sa tatlong yugto: unang buwan ay pundasyon (isang serbisyo, tatlong case study, profile, at presyo), ikalawa ay outreach, at ikatlo ay delivery at pagpapabuti. Magtakda ng lingguhang target na kontrolado mo, tulad ng sampung mensahe, hindi ng resultang hindi mo kontrolado. Magtago ng budget para sa mabagal na buwan. Normal ang mabagal na simula at pagtanggi. Mag-review kada buwan at isang bagay lang ang baguhin sa bawat test.",
    proTips: [
      "Block fixed outreach hours in your calendar and treat them like a client meeting.",
      "Keep a 'wins' note; it helps on slow weeks.",
    ],
    deepDive: [
      [
        "Make outreach sustainable",
        "Ten careful messages a week for twelve weeks is more effective than a burst of a hundred in one week. Spend the time to make each message specific to the business.",
      ],
      [
        "Handle rejection",
        "Most messages will get no reply. Record each, learn from replies that do arrive, and keep going. Measure your process, not your mood.",
      ],
    ],
    practiceData:
      "Fictional VA: skills in spreadsheets and inbox support. Month 1: 3 case studies in progress, no profile yet. Weekly time available: 15 hours. Savings cover one slow month. Outreach plan: 10 messages per week. First reply arrives in week 6 from a cafe with inconsistent listed hours.",
    modelAnswer:
      "The plan sets month one to finish the case studies, profile, scope, and price range, month two to send ten specific messages per week with a tracking sheet, and month three to deliver early work, request feedback, and improve processes. Weekly targets are outreach messages and portfolio improvements. A slow-month budget uses the savings. The first review is at day thirty and the plan changes one variable at a time based on replies.",
  },
  {
    title: "Handle a scope-creep client without losing the relationship",
    goal: "Recognize scope creep early and respond with clear options instead of resentment.",
    prereq: "Scope, boundaries, and retainer lessons.",
    teach:
      "Scope creep happens when small extra requests pile up until the work is far bigger than agreed. It is rarely malicious; clients often do not realize how much time each request takes. The best defense is a clear written scope at the start, but when creep appears anyway, act early. First, notice it: compare what is being asked with the agreement and your tracked time. Second, name it neutrally and kindly, for example, 'This request is outside our agreed scope. I can do it as an extra for X, or we can swap it for something in the current list.' Third, offer options: add it with a new fee or timeline, replace a lower-priority item, or schedule it for the next period. Put the decision in writing. Avoid doing the extra work silently, since it teaches the client that the scope is flexible, and avoid complaining later. If the pattern repeats, review the agreement, propose a package or retainer with limits, and discuss expectations on a short call. Remain calm and warm; you are protecting the quality of your work, not accusing anyone. Keep a short log of each additional request with the date and decision so conversations rest on facts. If the client refuses any boundary after repeated clear discussions, you may need to reconsider whether the relationship works.",
    example:
      "A fictional bakery client who hired the VA for weekly order tracking begins asking for social posts, supplier emails, and a new website page. The VA replies, 'These are outside our tracking scope. I can add the social posts for 80 per month or we can swap them for the weekly report. Which do you prefer?' The client chooses the paid add-on and signs the updated scope.",
    steps: [
      "Compare each new request with the written scope and tracked time.",
      "Name the difference neutrally and kindly in writing.",
      "Offer options: add with a fee or timeline, swap, or schedule for later.",
      "Record the decision and update the scope document.",
      "If it repeats, propose a package or retainer and discuss expectations.",
    ],
    exercise:
      "Write the reply to the practice client's extra requests with three options, and an updated scope paragraph that records the decision.",
    portfolio: "A scope-change reply template and updated scope example.",
    mistake:
      "Doing extra work silently and then resenting it teaches the client that the scope has no limits.",
    question:
      "A client asks for a task outside the agreement. What is the best first response?",
    options: [
      "Say it is outside the scope and offer options: add with a fee, swap an item, or schedule later",
      "Do it quietly to keep them happy",
      "Refuse and end the contract",
    ],
    answer: 0,
    explanation:
      "Offering options keeps the relationship warm while protecting your time and the quality of the work.",
    ready: [
      "Spot creep using scope and time records",
      "Name it kindly and offer options",
      "Record decisions in writing",
      "Propose packages when patterns repeat",
    ],
    tools: "The written scope, a time tracker, and a change log.",
    taglish:
      "Nangyayari ang scope creep kapag dumarami ang maliliit na dagdag na request hanggang sa lumaki ang trabaho. Madalas hindi ito sinasadya. I-compare ang hinihiling sa nakasulat na scope at sa tracked time. Sabihin nang mahinahon at nakasulat na labas ito sa scope, tapos mag-alok ng opsyon: dagdagan na may bayad o timeline, palitan ang isang item, o ilipat sa susunod na panahon. Huwag tahimik na gawin ang dagdag dahil itinuturo nito sa client na flexible ang scope. Itala ang desisyon, at kung paulit-ulit, mag-propose ng package o retainer.",
    proTips: [
      "Say 'yes, and here is how' instead of a flat no; it keeps the conversation friendly.",
      "Keep a change log with dates so every conversation rests on facts.",
    ],
    deepDive: [
      [
        "Spot the early signs",
        "Phrases like 'while you are at it' and 'quick favor' often signal creep. Each may be small, but five of them in a week is a new job.",
      ],
      [
        "Use the written scope kindly",
        "Quote the agreement's wording as a shared reference rather than as a weapon. 'Our scope says weekly order tracking. Would you like to add posts?' is friendly and clear.",
      ],
    ],
    practiceData:
      "Fictional agreement: weekly order tracking, 8 hours per month, 12 per hour. Requests this month: 'while you are at it, can you reply to supplier emails?' (2 hours), 'quick favor, add a page to the website' (3 hours), 'can you post on Instagram three times?' (2 hours). Time tracked: 8 hours of tracking plus 7 hours of extras.",
    modelAnswer:
      "The extras total 7 hours on top of the 8 agreed, which is 15 hours against 8 in scope. The reply thanks the client, names the three requests as outside scope, and offers options: add them for 12 per hour (84 for 7 hours), swap them for part of the tracking, or schedule some for next month. The updated scope paragraph records the choice, the new hours or fee, and the date.",
  },
  {
    title: "End a client relationship professionally",
    goal: "Leave a client, or ask them to leave, with a calm handoff and your reputation intact.",
    prereq: "Offboarding, boundaries, and delegation lessons.",
    teach:
      "Sometimes a client relationship should end, whether because the work no longer fits, payment is unreliable, the requests are unsafe, or you need to change direction. Ending well protects your reputation and leaves doors open. Start by reading your agreement for notice requirements and any final deliverables. Decide the reason in your own mind, and keep your message to the client factual and polite rather than emotional. Give notice as the agreement states, or a reasonable period if it does not, and offer a clear final handover: finish agreed work, document processes, list open items with owners, and share where files and accounts are. Offer a short call to answer questions if you can. Return or delete client data according to the agreement, remove your access to their systems, and ask them to confirm. Send a final invoice with clear terms and collect payment before handing over the last deliverables if the agreement allows. If the problem is safety, repeated non-payment, or requests that break the law or platform rules, you may need to stop immediately, document the reasons, and use the platform's process; do not argue. Avoid speaking badly about the client to others. Take a short note of what you learned, update your client vetting questions, and ask for a testimonial only if the relationship ended on good terms.",
    example:
      "A fictional client has paid late three times and keeps changing the scope. The VA gives 14 days' notice per the agreement, finishes the agreed work, shares a handoff document with open items, removes access, and sends the final invoice. The client thanks them and later refers another business.",
    steps: [
      "Check the agreement for notice and final deliverables.",
      "Write a short, factual, polite notice with the date and reason in neutral terms.",
      "Offer a handoff: finished work, process notes, open items, and file locations.",
      "Remove access, handle data as agreed, and send the final invoice.",
      "Record lessons and update your client vetting questions.",
    ],
    exercise:
      "Write the notice and handoff outline for the practice client, plus three lessons you would add to your client vetting list.",
    portfolio: "A professional notice template and a client handoff outline.",
    mistake:
      "Leaving without a handoff or access cleanup can leave risks and unpaid work behind and damage your name.",
    question: "What should your notice message focus on?",
    options: [
      "A list of everything the client did wrong",
      "A short, factual notice with the end date and a clear handoff plan",
      "No reason or plan; just disappear",
    ],
    answer: 1,
    explanation:
      "A calm, factual notice and handoff protect both sides and your reputation.",
    ready: [
      "Follow the notice terms in the agreement",
      "Offer a clear handoff",
      "Clean up access and data",
      "Learn from the experience",
    ],
    tools:
      "The agreement, a handoff document template, and the offboarding checklist.",
    taglish:
      "Minsan dapat nang matapos ang relasyon sa client dahil hindi na bagay ang trabaho, hindi maaasahan ang bayad, o hindi ligtas ang hinihiling. Basahin ang agreement para sa notice at huling deliverables. Gawing maikli, factual, at magalang ang mensahe. Mag-alok ng malinaw na handoff: tapos na trabaho, process notes, bukas na item, at lokasyon ng files. Alisin ang access, ayusin ang data ayon sa kasunduan, at magpadala ng final invoice. Huwag mag-away o magsalita nang masama sa iba. Isulat ang natutunan at i-update ang vetting questions mo.",
    proTips: [
      "Offer a 30-minute handoff call; it often turns a tense ending into a warm one.",
      "Update your vetting questions right after, while the lesson is fresh.",
    ],
    deepDive: [
      [
        "Know when to stop immediately",
        "If a client asks you to do something illegal, unsafe, or against a platform's rules, or if you feel unsafe, you may end right away. Keep records and use the platform's process, and do not engage in arguments.",
      ],
      [
        "Protect your name",
        "Avoid public complaints. Do the final work as well as the first work. A clean ending is part of your portfolio, since clients talk to each other.",
      ],
    ],
    practiceData:
      "Fictional client: paid invoices late three times; agreement requires 14 days' notice; asks you to send promotional messages to a purchased list; scope keeps changing. Final deliverables due: weekly report for two more weeks. You have access to the order sheet and email account.",
    modelAnswer:
      "The notice states the end date 14 days out as agreed, that you will finish the weekly reports, and that you cannot send messages to a purchased list. The handoff outline lists process notes, open items, and file locations, and offers a short call. Access to the order sheet and email is removed on the end date and the client confirms. The final invoice is sent with the terms. Vetting questions added: payment history, scope clarity, and list sources.",
  },
  {
    title: "Build a referral network and a reputation that works for you",
    goal: "Earn introductions through quality work, generosity, and clear follow-through.",
    prereq: "Client reviews, portfolio, and career growth lessons.",
    teach:
      "Most long-lasting freelance work comes from trust, and trust travels through people. Referrals come when clients, peers, and partners know what you do, believe you do it well, and remember you. Start by making it easy to describe you in one sentence, such as 'she keeps small food businesses' orders and inboxes organized.' Share a few good examples of your work and updates when you finish a project. Ask satisfied clients for a short testimonial or a referral only at a good moment, such as after a successful delivery, and make it easy by offering a draft they can edit and approve. Build a small network of peers, including other VAs, bookkeepers, designers, and developers, so you can recommend each other when a request is outside your skills. Be generous: share useful knowledge, introduce people honestly, and do not promise outcomes for others. Keep your promises, since a single missed deadline can undo many good referrals. Respect confidentiality when sharing examples. Say thank you promptly and tell the referrer what happened. Keep a simple record of who referred whom and when so you remember to follow up. Use professional spaces, such as communities and your profile, consistently and politely. Do not pay for fake reviews or inflate your record; reputation built on truth lasts longer.",
    example:
      "A fictional VA finishes a clean project for a cafe and asks the owner for two lines of feedback, offering a short draft to edit. The owner approves it and introduces the VA to a neighboring bakery. The VA thanks the owner, delivers well for the bakery, and tells both what happened.",
    steps: [
      "Write a one-sentence description of what you do and for whom.",
      "Collect and share a few honest examples of your work.",
      "Ask for testimonials or referrals at good moments with an editable draft.",
      "Build a peer network and recommend each other honestly.",
      "Keep a record of referrals, thank people, and deliver reliably.",
    ],
    exercise:
      "Write your one-sentence description, a testimonial request with a draft, and a short thank-you message to someone who referred you.",
    portfolio:
      "A testimonial request template and a one-sentence positioning statement.",
    mistake:
      "Asking for a referral before delivering good work, or exaggerating your record, can damage your reputation.",
    question:
      "When is the best time to ask a satisfied client for a testimonial?",
    options: [
      "Before the project starts",
      "Months after you have lost contact",
      "Soon after a successful delivery, with an editable draft",
    ],
    answer: 2,
    explanation:
      "Right after a good result, the experience is fresh, and a draft makes it easy to say yes.",
    ready: [
      "Describe your work in one sentence",
      "Ask for testimonials at the right moment",
      "Build an honest peer network",
      "Follow through and thank referrers",
    ],
    tools: "Your profile, a testimonial template, and a simple referral log.",
    taglish:
      "Karamihan ng pangmatagalang freelance work ay galing sa tiwala. Gumawa ng isang pangungusap na naglalarawan sa ginagawa mo at para kanino. Magbahagi ng ilang tapat na halimbawa ng gawa mo. Humingi ng testimonial o referral pagkatapos ng matagumpay na delivery at mag-alok ng draft na puwede nilang baguhin. Bumuo ng network ng mga kapwa VA, bookkeeper, at designer para magrekomendahan nang tapat. Tuparin ang pangako at magpasalamat. Huwag bumili ng pekeng review; mas tumatagal ang reputasyong totoo.",
    proTips: [
      "Send a short update to past clients every few months with one useful tip, not a sales pitch.",
      "Tell referrers what happened after their introduction; people love hearing the result.",
    ],
    deepDive: [
      [
        "Write a testimonial draft",
        "Offer two or three sentences that state the problem, what you did, and the result, using only facts. Let the client change anything. Their own words will always be more believable.",
      ],
      [
        "Recommend honestly",
        "Only recommend a peer if you have seen their work or know their reliability. Say what they are good at and what they do not do. Honest recommendations protect everyone and strengthen your network.",
      ],
    ],
    practiceData:
      "Fictional situation: you finished a three-week project for a cafe on time; the owner says they are happy. A peer who is a bookkeeper asks if you know a VA for her clients. You have not yet worked with her clients. A stranger offers to sell you 20 five-star reviews.",
    modelAnswer:
      "Ask the cafe owner for two lines of feedback with an editable draft that states the problem, your work, and the result. Offer to recommend the bookkeeper's services only if you know her work and say so honestly, or share only what you have seen. Refuse the paid reviews, since fake reviews damage trust and break platform rules. Thank referrers and tell them what happened.",
  },
];

const healthAdminModuleIndex = modules.length;
modules.push([
  "Healthcare-adjacent admin with privacy",
  "Non-clinical support: privacy basics, reminders, paperwork, and sensitive calls.",
  "Specialization",
  healthAdminLessons,
]);
healthAdminLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${healthAdminModuleIndex}-${index}`,
    mi: healthAdminModuleIndex,
    li: index,
  });
});

const freelanceModuleIndex = modules.length;
modules.push([
  "Freelance reality: your first year",
  "A 90-day plan, handling scope creep, ending clients well, and earning referrals.",
  "Professional growth",
  freelanceLessons,
]);
freelanceLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${freelanceModuleIndex}-${index}`,
    mi: freelanceModuleIndex,
    li: index,
  });
});
