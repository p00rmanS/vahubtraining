/** Admin for professional offices that handle confidential work. Append IDs to preserve existing progress. */
const officeLessons = [
  {
    title: "Handle client intake and appointments confidentially",
    goal: "Collect the right details, schedule accurately, and protect private information.",
    prereq: "Calendar management, privacy, and executive assistance lessons.",
    teach:
      "Professional offices such as law firms, real estate agencies, and consultancies handle information that clients expect to stay private. Intake is the first contact, and it should collect only what the office needs: contact details, the reason for the appointment, and any deadline, using a form or script the office has approved. Do not ask for sensitive details such as full financial numbers or identity documents unless the process requires it and the channel is secure. Explain how information will be used and who will see it. When scheduling, confirm the person, purpose, duration, location or link, time zone, and who attends, and check conflicts and buffers. Use neutral calendar titles so private matters are not visible to people who view the calendar. Send confirmations and reminders without sensitive content in the subject line or body. Check identity in the way the office requires before discussing existing matters. Do not give advice on legal, financial, or property decisions; you can share only approved office information and book a time with the professional. Record notes factually and store them only in the approved system. Treat mistakes seriously: if you send a message to the wrong person, tell the office immediately so they can decide what to do. Close the loop by marking each intake as scheduled, waiting, or declined, with the next action and date.",
    example:
      "A fictional property agent's office receives an inquiry about a viewing. The VA uses the approved form to collect name, phone, property, and preferred times, schedules it with a neutral calendar title, and sends a confirmation with the address but not the client's budget. When the person asks if the price is negotiable, the VA says the agent will answer during the viewing and does not guess.",
    steps: [
      "Use the office's approved intake form and collect only necessary details.",
      "Explain how information is used and who will see it.",
      "Schedule with confirmed purpose, duration, location, time zone, and attendees, using neutral titles.",
      "Send confirmations and reminders without sensitive content.",
      "Record the status and next action in the approved system.",
    ],
    exercise:
      "Design an intake form with only needed fields for the practice office, write a neutral calendar title and a confirmation message, and draft a reply to a question that needs the professional's advice.",
    portfolio: "A minimal intake form and a confirmation message template.",
    mistake:
      "Putting private details in calendar titles or email subjects exposes them to anyone who sees the calendar or inbox preview.",
    question:
      "A caller asks whether they should accept an offer. What do you do?",
    options: [
      "Give your opinion to be helpful",
      "Explain that the professional will advise and offer to book a time",
      "Tell them to decide themselves",
    ],
    answer: 1,
    explanation:
      "Advice belongs to the licensed professional. You can book the conversation and share only approved information.",
    ready: [
      "Collect only necessary information",
      "Use neutral titles and safe confirmations",
      "Avoid giving professional advice",
      "Record status and next actions",
    ],
    tools: "Calendar, intake form, and the office's client system.",
    taglish:
      "Sa mga propesyonal na opisina, pribado ang impormasyon ng client. Gamitin ang aprubadong intake form at kunin lang ang kailangan. Sa calendar, gumamit ng neutral na titulo at huwag maglagay ng sensitibong detalye sa email subject. Huwag magbigay ng legal, financial, o property advice; i-book ang usapan sa propesyonal. Itala ang status at susunod na hakbang sa aprubadong sistema.",
    proTips: [
      "Test your calendar title by asking whether a stranger glancing at the screen would learn anything private.",
      "Keep a script of safe phrases for 'I can't advise, but I can schedule you with...'.",
    ],
    deepDive: [
      [
        "Minimize what you collect",
        "Each extra field is information you must protect. If the office does not need a number or document to schedule, do not ask for it. Ask the professional which details they need before the first meeting.",
      ],
      [
        "Stay inside your role",
        "You can explain office hours, locations, fees the office has approved, and how to prepare. You cannot interpret contracts, estimate outcomes, or recommend decisions. A calm, friendly boundary is part of good service.",
      ],
    ],
    practiceData:
      "Fictional office: Harbor Realty. Inquiry: 'Hi, I'd like to see the 12 Pine St condo, my budget is 450k, I'm pre-approved. Can we also talk about whether I should offer under asking?' Agent availability: Tuesday 4–6 PM, Thursday 10 AM–12 PM Pacific. Office rule: no budgets in emails or calendar entries.",
    modelAnswer:
      "The form collects name, phone or email, property, and preferred times only. The calendar title is 'Viewing – 12 Pine St' without budget or the client's name if the office prefers. The confirmation states the time with the Pacific time zone and address, and leaves out the budget. The reply to the offer question says that the agent will discuss strategy at the viewing and offers Tuesday 4:00 or Thursday 10:00 Pacific.",
  },
  {
    title: "Prepare documents and track versions without giving advice",
    goal: "Format, compare, and organize documents accurately while staying inside your role.",
    prereq: "Document, version control, and quality lessons.",
    teach:
      "Professional offices produce documents where one wrong word, date, or number matters. A VA can support the process by formatting approved templates, filling in details from verified sources, tracking versions, and checking consistency, without changing the meaning or giving advice. Work from the office's template or the professional's draft. Never edit legal, financial, or technical wording yourself; if something looks wrong, flag it with a comment and ask. Use a clear file naming pattern with the matter or client code, document type, version, and date, and keep a version log showing who changed what and when. Compare each draft with the previous one using the comparison feature, and confirm that only the intended changes appear. Check names, addresses, dates, amounts, defined terms, page numbers, and cross-references against the source. Keep drafts and final versions in separate, clearly labeled places so an outdated copy is never sent. Use secure sharing with limited access and expiry where possible, and never send confidential documents through unapproved channels. Before sending, confirm the recipient and attachment and mark the status such as draft for review or final approved. Record approvals, because the person who signs off is accountable. If you spot an error after sending, report it at once instead of quietly replacing the file.",
    example:
      "A fictional office needs a service agreement for a new client. The VA copies the approved template, fills in the client name and dates from the intake record, and runs a comparison against the previous version. It shows an extra change in the payment clause that no one requested, so the VA flags it and does not send the document until the professional confirms.",
    steps: [
      "Start from the approved template and fill in details only from verified sources.",
      "Name files consistently and update the version log with each change.",
      "Compare with the previous version and confirm only intended changes appear.",
      "Check names, dates, amounts, defined terms, and cross-references.",
      "Share through the approved secure channel with status and approval recorded.",
    ],
    exercise:
      "Review the practice draft and comparison note. List each check you would run, identify any unintended change, and write the message to the professional asking for confirmation.",
    portfolio: "A document checklist and a version-log template.",
    mistake:
      "Sending a draft marked as final or an outdated version can cause real harm to the client and the office.",
    question:
      "The comparison shows a change to the payment clause nobody requested. What should you do?",
    options: [
      "Flag it to the professional and hold the document until it is confirmed",
      "Keep it; maybe it is an improvement",
      "Quietly change it back yourself",
    ],
    answer: 0,
    explanation:
      "Meaningful wording belongs to the professional. Flag unexpected changes and wait for a decision.",
    ready: [
      "Use approved templates and verified details",
      "Track versions and file names",
      "Compare and check key details",
      "Share securely with approval recorded",
    ],
    tools:
      "Word or Google Docs comparison tools and the office's document system.",
    taglish:
      "Sa mga dokumento ng opisina, malaki ang epekto ng isang maling salita o numero. Gumamit ng aprubadong template at verified na detalye lang. Huwag baguhin ang legal na salita; mag-comment at magtanong. Pare-pareho ang file name at may version log. I-compare ang bagong draft sa luma para makita ang mga pagbabago. Ipadala sa secure na paraan at itala kung sino ang nag-approve.",
    proTips: [
      "Put 'DRAFT' in the file name until a named person approves the final.",
      "Recheck the recipient and attachment right before pressing send.",
    ],
    deepDive: [
      [
        "Check the details that matter",
        "Names, dates, amounts, addresses, and defined terms are where errors hide. Check each against the source record, not against the last draft, because the last draft may already be wrong.",
      ],
      [
        "Handle mistakes openly",
        "If a wrong file was sent, tell the professional immediately with what was sent, to whom, and when. They decide whether to recall it or notify the recipient. Hiding it only increases harm.",
      ],
    ],
    practiceData:
      "Fictional document: Service Agreement v3 for 'Pine Cafe'. Template says payment due in 30 days; v3 says 14 days; no one requested this. Client address in v3: '12 Pine Street'; intake record says '12 Pine St., Unit 2'. File name used: 'agreement final FINAL.docx'.",
    modelAnswer:
      "The payment term changed from 30 to 14 days without a request, so the VA flags it and holds the document. The address omits Unit 2 and must be corrected from the intake record after confirming. The file name should follow the pattern such as PineCafe_ServiceAgreement_v3_DRAFT_date. The message to the professional lists the two findings and asks for confirmation before any version is shared.",
  },
  {
    title: "Organize records and apply retention rules",
    goal: "File, name, and retire records so the right document is easy to find and nothing is kept or deleted by accident.",
    prereq: "File organization, privacy, and SOP lessons.",
    teach:
      "Records management means storing documents so they can be found, trusted, and disposed of properly. Start with a folder structure that mirrors how the office works, such as client or matter, then year, then document type, and use the same pattern everywhere. Use consistent file names with the identifier, document type, date in year-month-day order, and version. Keep one master copy and link to it instead of making copies in many places. Apply access controls so only people who need a record can open it. A retention schedule states how long each type of record must be kept and when it may be destroyed; it comes from the office, its professional rules, and local requirements, so do not invent one. Ask the office for its schedule and follow it. Never delete records because storage is full or the folder looks messy; archive according to the schedule and log what was archived or destroyed, by whom, and when. If a record might be needed for a dispute or investigation, a hold may apply, and only the office decides. When scanning paper, check legibility and completeness and name files immediately. Back up important records and test that you can restore them. Handle destruction securely and record it. Review the structure with the office from time to time and keep a short guide so a new person can find things quickly.",
    example:
      "The fictional office folder holds files named 'scan1', 'new', and 'contract final'. The VA creates a client-year-type structure, renames the files with a consistent pattern, moves duplicates into a review folder rather than deleting them, and asks the office manager for the retention schedule before archiving anything.",
    steps: [
      "Agree on a folder structure and naming pattern with the office.",
      "Rename and move files into the structure, keeping one master copy.",
      "Place duplicates and unknown files in a review folder instead of deleting them.",
      "Obtain the retention schedule and apply it with a log of every archive or destruction.",
      "Back up, test a restore, and write a short guide for finding records.",
    ],
    exercise:
      "Design the folder structure and naming pattern for the practice files, rename five files, and write the questions you would ask about retention before archiving.",
    portfolio:
      "A folder structure diagram, naming guide, and retention question list.",
    mistake:
      "Deleting records to clean up can destroy information the office must keep or may need later.",
    question: "A folder is nearly full of old files. What should you do?",
    options: [
      "Delete the oldest files",
      "Ask for the retention schedule and archive or destroy only what it allows, with a log",
      "Move everything to a personal drive",
    ],
    answer: 1,
    explanation:
      "Retention rules decide what may be removed. Archiving with a log is safe, while deleting or moving to a personal drive is not.",
    ready: [
      "Build a consistent structure and naming",
      "Keep one master copy",
      "Apply retention rules with a log",
      "Back up and secure records",
    ],
    tools: "Shared drive or document system and a spreadsheet log.",
    taglish:
      "Sa records management, gumawa ng malinaw na folder structure at pare-parehong file name: ID, uri ng dokumento, petsa, at version. Isang master copy lang. Ang retention schedule ng opisina ang magsasabi kung ilang taon dapat itago ang bawat record, kaya huwag mag-delete nang basta-basta. I-archive nang may log. I-backup ang mahalaga at subukan kung nakaka-restore.",
    proTips: [
      "Use year-month-day dates in file names so they sort correctly.",
      "Make a review folder for duplicates and unknowns; decide later with the office.",
    ],
    deepDive: [
      [
        "Name files so they sort and search",
        "A pattern such as ClientCode_DocType_2026-10-15_v2 sorts by client and date and is easy to search. Avoid words like final or new, because they stop being true.",
      ],
      [
        "Respect holds and schedules",
        "Some records must be kept longer because of laws, contracts, or disputes. You cannot judge this from the file itself. Ask, record the answer, and follow it.",
      ],
    ],
    practiceData:
      "Fictional files: scan1.pdf, new.docx, contract final.docx, contract final (1).docx, Invoice March.xlsx, notes.txt. Office has three clients: Pine Cafe, Harbor Realty, and a consultancy. No retention schedule has been provided. Storage is 95% full.",
    modelAnswer:
      "Structure: Client / Year / Document type. Example names: PineCafe_Contract_2026-03-12_v2.docx and PineCafe_Invoice_2026-03.xlsx. 'contract final (1)' goes to a review folder as a possible duplicate. Unknown files like scan1 and notes are opened by someone authorized to identify them. Questions: how long must each record type be kept, are any legal holds in place, who authorizes destruction, and where are backups. Nothing is deleted until the schedule arrives; storage is addressed through archive after approval.",
  },
  {
    title: "Handle calls and messages with urgency triage",
    goal: "Take accurate messages and decide what is urgent, routine, or outside your role.",
    prereq: "Inbox, customer support, and boundaries lessons.",
    teach:
      "A good message taker protects the professional's time and the caller's interest. Greet with the office name, listen without interrupting, and capture the essentials: who is calling, a callback number or email, the reason in one or two sentences, the deadline or time sensitivity, and who they asked for. Repeat the number and spelling back. Use the office's triage guide to classify each message. Emergencies involving safety go to the emergency instructions the office gave you, such as contacting emergency services or an on-call person. Urgent but not emergency matters, such as a court deadline or a signing today, go to the professional immediately through the agreed channel. Routine matters can wait for the daily summary. Do not promise outcomes, give advice, confirm or deny whether someone is a client unless the office allows it, or discuss other clients. Do not argue with an upset caller; acknowledge the feeling, state what will happen next, and give a realistic time. Write messages factually with the date and time received, and deliver them in the agreed place. Follow up when the professional has not responded to an urgent item by the agreed time. Keep a log of calls and outcomes for accountability. If a caller seems suspicious, such as asking for private information about someone, take a message and report it to the office.",
    example:
      "A caller to the fictional realty office says an inspector found a leak and the closing is tomorrow. The VA takes the number, confirms the property, marks the message urgent because of the next-day deadline, and sends it to the agent through the agreed urgent channel with the time. The agent calls back within the hour.",
    steps: [
      "Greet, listen, and capture caller, contact details, reason, deadline, and who they asked for.",
      "Repeat back the contact number and key facts.",
      "Classify the message using the triage guide: emergency, urgent, or routine.",
      "Send it through the right channel with date and time, and avoid advice or promises.",
      "Follow up on urgent items and log the outcome.",
    ],
    exercise:
      "Triage the practice messages, write each as a clear message with the right urgency, and draft a script for an upset caller.",
    portfolio:
      "A message template, a triage guide, and an upset-caller script.",
    mistake:
      "Treating a deadline-driven message as routine can cost the client a critical opportunity.",
    question:
      "A caller says a closing is tomorrow and a problem was found today. How do you classify it?",
    options: [
      "Routine, for the daily summary",
      "Not important, because it is not an emergency",
      "Urgent, to the professional immediately through the agreed channel",
    ],
    answer: 2,
    explanation:
      "A next-day deadline is time-sensitive and should reach the professional right away.",
    ready: [
      "Capture complete, accurate messages",
      "Triage by urgency using a guide",
      "Avoid advice and promises",
      "Follow up and log outcomes",
    ],
    tools:
      "Phone or helpdesk, message template, and the office's urgent channel.",
    taglish:
      "Sa pagkuha ng mensahe, itala kung sino ang tumawag, number, dahilan, deadline, at kung sino ang hinahanap. Ulitin ang number para sigurado. Gamitin ang triage guide: emergency, urgent, o routine. Ang may deadline bukas ay urgent at dapat umabot agad sa propesyonal. Huwag magbigay ng advice o pangako. Kapag galit ang tumawag, kilalanin ang nararamdaman at sabihin ang susunod na hakbang at realistic na oras.",
    proTips: [
      "Always ask 'Is there a deadline I should tell them about?' before ending a call.",
      "Write the time you received the message; urgency often depends on it.",
    ],
    deepDive: [
      [
        "Agree on triage before you need it",
        "Write what counts as emergency, urgent, and routine with examples, and list the channel and time limit for each. Include who to call if the professional cannot be reached.",
      ],
      [
        "Handle upset callers",
        "Let them finish, say you understand it is stressful, state what you will do and when, and avoid defending the office or blaming anyone. If the caller becomes abusive, follow the office's rule for ending the call.",
      ],
    ],
    practiceData:
      "Fictional messages: 1) 'Closing is tomorrow and the inspector found a leak. Call me at 555-0142.' 2) 'Can I get a copy of last year's invoice?' 3) 'I'm someone's neighbor; is Ms. Lee your client and what is she buying?' 4) 'There is water coming through the ceiling at the open house right now!' Guide: safety emergencies follow the emergency card; deadlines within 48 hours are urgent.",
    modelAnswer:
      "Message 4 is a safety emergency, so follow the emergency card immediately. Message 1 is urgent because of the next-day deadline, sent to the agent now with the number and time. Message 2 is routine and goes into the daily summary after identity is checked. Message 3 is a request for private information, so the VA neither confirms nor discusses clients, takes a message, and reports it to the office. The upset-caller script acknowledges stress, states the action and time, and avoids promises.",
  },
];
const officeModuleIndex = modules.length;
modules.push([
  "Confidential office administration",
  "Intake, document control, records retention, and call triage for professional offices.",
  "Specialization",
  officeLessons,
]);
officeLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${officeModuleIndex}-${index}`,
    mi: officeModuleIndex,
    li: index,
  });
});
