/** Bookkeeping workflows and property coordination. Append IDs to preserve existing progress. */
const moneyLessons = [
  {
    title:
      "Run an invoice-to-payment workflow and chase late payments politely",
    goal: "Track invoices from sent to paid and follow up on overdue ones without damaging the relationship.",
    prereq: "Invoicing, time tracking, and bookkeeping support lessons.",
    teach:
      "Getting paid is a process, not a single event. Track every invoice in one sheet with the number, client, date sent, amount, due date, status, and notes. Use clear statuses such as Draft, Sent, Viewed, Due soon, Overdue, Part paid, and Paid. Send each invoice with the payment terms and method written in the message, and confirm it was received. Set reminders before the due date, on the due date, and at fixed intervals after it, using polite, factual wording: the invoice number, amount, due date, and how to pay. Never use threats or shame. Before chasing, check that the invoice is correct and that no payment arrived under a different reference, because chasing a paid invoice damages trust. When a client says they will pay on a date, record it and follow up on that date. If a payment is partial or disputed, record the difference and the reason and refer decisions about discounts, payment plans, or stopping work to the client who owns the business. Do not accept payments to new or unverified accounts without confirming through a known contact, since fake bank-change emails are a common fraud. Record each payment with its date and reference, send a thank-you or receipt, and reconcile with the bank statement. Report totals owed and overdue by age in the weekly summary.",
    example:
      "A fictional bakery invoice of 240 to a catering client is five days overdue. The VA first checks the bank record and finds no payment, then sends: 'Hello, invoice 118 for 240 was due on the 10th. Here is the payment link. Please let me know if anything is unclear.' The client replies they will pay Friday, and the VA records that date and follows up on Friday.",
    steps: [
      "Keep one invoice tracker with number, dates, amount, status, and notes.",
      "Send invoices with terms and payment method and confirm receipt.",
      "Set reminders before and after the due date using factual, polite wording.",
      "Check records for payment before every reminder and log promised dates.",
      "Record payments, send receipts, reconcile, and report overdue amounts by age.",
    ],
    exercise:
      "Update the practice tracker, write a first overdue reminder and a second reminder, and note which invoices must not be chased and why.",
    portfolio:
      "An invoice tracker with a reminder sequence and sample messages.",
    mistake:
      "Chasing an invoice that was already paid, or sounding threatening, damages the client's relationship.",
    question: "A client says they will pay on Friday. What should you do?",
    options: [
      "Wait and say nothing",
      "Send a stern warning today",
      "Record the promised date and follow up on that date if payment has not arrived",
    ],
    answer: 2,
    explanation:
      "Recording the promise and following up on the date keeps the process fair, polite, and reliable.",
    ready: [
      "Track invoice status accurately",
      "Check records before chasing",
      "Write factual, polite reminders",
      "Verify payment detail changes",
    ],
    tools: "Spreadsheet or invoicing software and the bank statement.",
    taglish:
      "Ang pagkuha ng bayad ay proseso. Magtago ng isang tracker ng invoice na may numero, petsa, halaga, due date, at status. Magpadala ng invoice na kasama ang payment terms at kumpirmahin na natanggap. Maglagay ng reminder bago at pagkatapos ng due date gamit ang magalang at factual na pananalita. Laging i-check ang bank record bago maningil para hindi masingil ang bayad na. Kapag may nangakong petsa, itala at mag-follow up sa petsang iyon. Mag-ingat sa pekeng email na nagpapalit ng bank details.",
    proTips: [
      "Include the payment link or details in every reminder so paying takes one step.",
      "Call a known number to confirm any change of bank details before updating them.",
    ],
    deepDive: [
      [
        "Write reminders that keep goodwill",
        "State the invoice number, amount, and due date, offer help if something is unclear, and thank them. Keep each message short. The tone should assume an honest delay unless the client shows otherwise.",
      ],
      [
        "Escalate with care",
        "After several reminders, bring the facts to the business owner: invoice details, the dates of your messages, and the replies. The owner decides on pausing work, fees, or other steps. You do not threaten legal action.",
      ],
    ],
    practiceData:
      "Fictional tracker: Invoice 116 for 180, due the 1st, paid on the 3rd (not yet recorded). Invoice 117 for 90, due the 8th, no payment found. Invoice 118 for 240, due the 10th, client promised payment on Friday. Email received: 'Our bank details changed, please use this new account.'",
    modelAnswer:
      "Invoice 116 is paid and must be recorded as Paid with the date, not chased. Invoice 117 is overdue and gets a polite first reminder with the number, amount, due date, and payment method. Invoice 118 stays Sent with a follow-up task for Friday. The bank-change email is suspicious, so the VA verifies it by calling a known number before using the new account and tells the owner.",
  },
  {
    title: "Track expenses and receipts with a monthly routine",
    goal: "Capture every expense with evidence and prepare clean records for the monthly review.",
    prereq: "Bookkeeping support, spreadsheet validation, and privacy lessons.",
    teach:
      "Good expense records make the monthly review quick and the year-end calm. Set up a single place where receipts arrive, such as a shared folder or a receipt-capture app, and name each file with the date, vendor, and amount. Record each expense in a sheet with the date, vendor, amount, category from the client's chart of accounts, payment method, and a link to the receipt. Capture receipts as they happen, because weeks later they are lost or unreadable. Check that the amount on the receipt matches the card or bank line, and note differences such as tips or taxes. Separate business and personal spending, and ask the client about anything unclear instead of assuming. Flag a missing receipt with 'needs receipt', request it, and never create a replacement. Watch for duplicates, such as a purchase entered from both a receipt and a statement. Follow a monthly routine: collect receipts, enter and categorize, match to the statement, list open questions, and send a short summary of totals by category and missing items. Store receipts securely, share them only with people who need them, and follow the client's retention rule. You prepare records; you do not decide tax treatment or advise on deductions.",
    example:
      "In the fictional bakery's month, the sheet shows 40 expenses and the card statement shows 41. The VA finds the extra one is a 6 charge without a receipt, marks it 'needs receipt', and asks the owner. The summary lists totals by category, one missing receipt, and one possible duplicate to review.",
    steps: [
      "Set up one capture place and a file naming pattern for receipts.",
      "Enter each expense with category, payment method, and receipt link.",
      "Match amounts to the statement and note differences.",
      "Flag missing receipts and duplicates and ask the client about unclear items.",
      "Send a monthly summary with totals by category and open questions.",
    ],
    exercise:
      "Process the practice expenses: enter them with categories, find the missing receipt and the possible duplicate, and write the monthly summary note.",
    portfolio: "An expense tracker template and a sample monthly summary.",
    mistake:
      "Waiting until month end to collect receipts leaves gaps that cannot be fixed.",
    question: "A card charge has no receipt. What should you do?",
    options: [
      "Create a receipt from memory",
      "Mark it 'needs receipt', ask the owner, and keep it open until evidence arrives",
      "Delete it from the sheet",
    ],
    answer: 1,
    explanation:
      "Records must be supported by evidence. Marking the gap and asking keeps the books honest.",
    ready: [
      "Capture receipts as they happen",
      "Categorize using the client's chart",
      "Match to statements and flag gaps",
      "Report monthly without giving tax advice",
    ],
    tools:
      "Spreadsheet, a receipt-capture app or shared folder, and the statement.",
    taglish:
      'Mas mabilis ang buwanang review kapag maayos ang expense records. Gumawa ng iisang lugar para sa receipts at pangalanan ang file ayon sa petsa, vendor, at halaga. Itala ang bawat gastos na may category, paraan ng bayad, at link ng resibo. I-match ang halaga sa statement at itala ang pagkakaiba. Kapag walang resibo, markahang "needs receipt" at itanong; huwag gumawa ng pamalit. Hiwalay ang negosyo at personal. Maghanda ng buwanang buod, pero hindi ikaw ang magpapasya sa buwis.',
    proTips: [
      "Photograph receipts the same day; thermal paper fades quickly.",
      "Keep a short 'questions for the owner' list that you clear each month.",
    ],
    deepDive: [
      [
        "Match and explain differences",
        "Compare totals first, then lines. Common differences are tips, taxes, currency conversion, timing between purchase and posting, and duplicates. Record the explanation next to each difference.",
      ],
      [
        "Keep records safe",
        "Receipts can contain card numbers and personal details. Store them in the client's approved folder with limited access and remove local copies when finished.",
      ],
    ],
    practiceData:
      "Fictional month: 12 entries; chart: Ingredients, Packaging, Equipment, Bank fees, Other (owner approval). Receipts are present for 11. The 12th is a 6 charge with no receipt. Two entries show 'Flour 54.00' on the same date from the same vendor, and the statement shows one charge of 54.00. One receipt shows 18.00 plus a 2.00 tip, but the statement shows 20.00.",
    modelAnswer:
      "The 6 charge is marked 'needs receipt' and asked about. The two identical flour entries are a possible duplicate because the statement shows one 54.00 charge, so one is flagged for removal after confirming. The 18.00 receipt with a 2.00 tip matches the 20.00 statement line, and the note records the tip. The monthly summary lists totals by category, the missing receipt, the duplicate to review, and the open questions.",
  },
  {
    title: "Support a monthly close with a clear checklist",
    goal: "Help the owner or accountant close the month with complete, reconciled, and reviewed records.",
    prereq: "Reconciliation, expense tracking, and quality checklist lessons.",
    teach:
      "A monthly close is a repeatable checklist that finishes the books for a period so numbers can be trusted. The VA supports it by preparing and checking, while the owner or accountant makes the final decisions. A simple close checklist includes: all sales and payments recorded; all expenses entered with receipts; bank and card accounts reconciled; open invoices reviewed for overdue items; unusual items explained; and a summary prepared. Start on a fixed day and work down the list, marking each item with who did it and the date. Do not close the month while important items are unresolved; list them as open instead of hiding them. Compare totals with the previous month and investigate large changes, such as an unusually high expense or a missing sales day. Keep a note of every adjustment suggested and who approved it, and never make an adjustment merely to force a balance. Deliver a close package: the checklist, reconciliation reports, open items with owners, and a short summary of income, expenses, and what changed. Respect confidentiality, and give the accountant only the access they need. After the close, lock or archive the period according to the client's process so numbers do not change silently, and note lessons for the next month.",
    example:
      "At the end of the fictional bakery's month, the checklist shows two items not done: one unreconciled card statement and one invoice marked paid without a payment record. The VA completes the reconciliation, finds the invoice payment was recorded in the wrong month, and flags it for the owner. The close package lists both items and the owner approves moving the entry.",
    steps: [
      "Create a close checklist with an owner and date for every item.",
      "Work through the list on a fixed day and reconcile all accounts.",
      "Compare with last month and investigate large changes.",
      "List unresolved items and suggested adjustments with approvers.",
      "Deliver the close package and archive the period after approval.",
    ],
    exercise:
      "Using the practice data, complete the close checklist, list the open items, and write the summary and the question you would send to the owner.",
    portfolio: "A monthly close checklist and a sample close package.",
    mistake:
      "Closing the month with unresolved items hidden makes the numbers look complete when they are not.",
    question:
      "One account is not reconciled at month end. What should the close package do?",
    options: [
      "List the account as open with the reason and the owner of the next step",
      "Mark everything complete anyway",
      "Delete the account from the report",
    ],
    answer: 0,
    explanation:
      "A close package should show reality, including open items, so the owner can decide with accurate information.",
    ready: [
      "Follow a dated close checklist",
      "Reconcile and compare periods",
      "List open items and approvals",
      "Archive only after approval",
    ],
    tools: "Spreadsheet checklist, reconciliation reports, and shared folder.",
    taglish:
      "Ang monthly close ay paulit-ulit na checklist para matapos ang libro ng buwan nang mapagkakatiwalaan. Ikaw ang naghahanda at nagche-check; ang owner o accountant ang may huling desisyon. Ilista ang lahat ng benta at bayad, gastos na may resibo, reconciled na accounts, at overdue na invoice. Ihambing sa nakaraang buwan. Huwag itago ang hindi pa tapos; ilista bilang open. Huwag gumawa ng adjustment para lang mag-balance. Maghatid ng close package na may checklist, reports, at buod.",
    proTips: [
      "Start the close on the same day every month so everyone expects it.",
      "Write the reason next to every large change versus last month.",
    ],
    deepDive: [
      [
        "Investigate large changes",
        "Set a simple rule such as any line that changes by more than a quarter or a stated amount gets an explanation. Often the cause is timing, a missing entry, or a one-time purchase.",
      ],
      [
        "Close without hiding anything",
        "If an item cannot be resolved, carry it forward as open with an owner and a date. The accountant would rather see an honest open item than a silent guess.",
      ],
    ],
    practiceData:
      "Fictional close: sales sheet total 1,980 vs payment processor report 1,962. Card statement reconciled. Business bank account not reconciled. Invoice 118 (240) marked paid but no payment recorded in the bank. Flour expense rose from 300 to 520 versus last month with no note. Owner is away until Friday.",
    modelAnswer:
      "Open items: the 18 difference between sales (1,980) and processor (1,962); the unreconciled bank account; invoice 118 marked paid without a payment; and the unexplained flour increase from 300 to 520. The card statement is complete. The package lists each item with a likely cause as a question, an owner, and a date (the owner on Friday). No adjustment is made to force a match and the period is not archived until approved.",
  },
  {
    title: "Prepare handoff documents for an accountant",
    goal: "Organize records and questions so an accountant can work quickly without chasing you.",
    prereq: "Monthly close, records retention, and privacy lessons.",
    teach:
      "Accountants charge for their time, so a clean handoff saves the client money. Ask the client what the accountant needs and by when, and send nothing before the client approves sharing. A good package has a cover note, a folder structure, and a list of open questions. The cover note names the period, the accounts covered, the date prepared, who prepared it, and what is included. Folders usually follow sales, expenses, bank statements, invoices, and payroll or contractor records, with consistent file names and no duplicates. Add a summary sheet of totals by category and a reconciliation report for each account, and mark anything unsupported. List questions in one place: items needing a decision, unclear categories, missing documents, and unusual transactions, each with the evidence and the amount. Do not guess answers or offer tax advice. Share through a secure method that the accountant and client agree on, with limited access and an end date, and never by plain email if the data is sensitive. Keep a log of what was sent, to whom, and when. When the accountant returns questions or adjustments, record them, ask the client to approve any changes to the books, and update the records. Close the loop by filing the final documents and noting what to improve next time.",
    example:
      "The fictional bakery's accountant asks for the quarter's records. The VA prepares a cover note, sorted folders, reconciliations, and a list of three open questions: a missing receipt, an unclear equipment purchase, and an unexplained transfer. The accountant answers all three in one reply instead of asking for documents by email all week.",
    steps: [
      "Confirm what the accountant needs, by when, and get the client's approval to share.",
      "Write a cover note and organize folders with consistent names and no duplicates.",
      "Include a summary sheet and reconciliation for each account and mark unsupported items.",
      "List open questions with evidence and amounts without guessing answers.",
      "Share securely with limited access, log it, and record approved changes afterward.",
    ],
    exercise:
      "Prepare a cover note, folder list, and open-question list for the practice quarter, and name what you would not send and why.",
    portfolio:
      "An accountant handoff package outline with a cover note and question list.",
    mistake:
      "Sending an unsorted pile of files makes the accountant spend billable time sorting instead of advising.",
    question:
      "You are unsure how to categorize an equipment purchase. What do you do?",
    options: [
      "Choose the most likely category and move on",
      "List it as an open question with the receipt and amount for the owner or accountant to decide",
      "Leave it out of the package",
    ],
    answer: 1,
    explanation:
      "Categorization decisions belong to the owner or accountant. Present the evidence and the question clearly.",
    ready: [
      "Confirm needs and get approval to share",
      "Organize files and write a cover note",
      "List open questions with evidence",
      "Share securely and log it",
    ],
    tools: "Shared folder with limited access, spreadsheet, and Docs.",
    taglish:
      "Mahal ang oras ng accountant, kaya ang malinis na handoff ay nakakatipid sa client. Alamin kung ano ang kailangan nila at kailan, at huwag magpadala nang walang approval ng client. Maghanda ng cover note, maayos na folders, summary sheet, at reconciliation. Ilista ang mga tanong sa isang lugar: desisyon, hindi malinaw na category, kulang na dokumento, at kakaibang transaction. Huwag manghula ng sagot o magbigay ng tax advice. Magpadala sa secure na paraan, itala kung ano ang naipadala, at i-record ang aprubadong pagbabago.",
    proTips: [
      "Put the question list on the first page so the accountant sees what you need immediately.",
      "Share with an expiry date so access does not stay open after the work is done.",
    ],
    deepDive: [
      [
        "Organize for someone new to the files",
        "Imagine the accountant has never seen the business. Use plain folder names, one file per document, and a short index. Remove duplicates and unreadable scans before sending.",
      ],
      [
        "Handle the accountant's changes",
        "If the accountant proposes an adjustment, record it with the reason and ask the client to approve. Update the records only after approval, and keep the old version for reference.",
      ],
    ],
    practiceData:
      "Fictional quarter: sales sheet, three bank statements, expense sheet with 118 entries, 4 receipts missing, a 600 equipment purchase of unclear category, a 250 transfer to a personal account with no note. The owner has not yet approved sharing. Accountant wants everything by the 15th.",
    modelAnswer:
      "The VA first asks the owner to approve sharing and the secure method. The cover note covers the quarter, accounts, prepared date, and contents. Open questions list the 4 missing receipts, the 600 equipment purchase category, and the 250 personal transfer, each with evidence and amounts, with no guessed answers. Folders follow sales, expenses, statements, and invoices with consistent names. Nothing is sent before approval, and the share log records recipient and date.",
  },
];

const propertyLessons = [
  {
    title: "Coordinate a property listing checklist",
    goal: "Track every task, document, and approval needed before a property goes on the market.",
    prereq:
      "Project coordination, document control, and confidentiality lessons.",
    teach:
      "Preparing a property listing involves many small tasks that must all happen in the right order. A VA supporting an agent builds a checklist and keeps it current. Typical items include collecting seller documents, scheduling photos and any inspections, confirming measurements, drafting the description, preparing the disclosure forms the agent names, getting the seller's approval of price and text, and loading the listing on approved platforms. Each item needs an owner, a due date, a status, and a link to the evidence. Use only facts that come from documents or from the agent, never from guesses, and never add claims such as 'quiet area' or 'great investment' unless the agent supplies and approves them. Rules about what must be disclosed and how listings are advertised vary by location and are decided by the licensed professional, so you do not interpret them; you route questions to the agent. Check photos for private information such as documents, faces, or house numbers if the agent asks. Protect seller information: share files only with named people through approved channels. Before publishing, compare the listing text, price, and details against the approved source line by line. After publishing, check the live listing as a visitor would, record the links, and note the date. Keep a log of changes with who approved them.",
    example:
      "For a fictional condo, the VA's checklist shows the photographer is booked, the floor plan is missing, and the seller has not approved the price. The VA drafts the description from the agent's notes, marks the price as pending, and does not publish. When the seller approves, the VA compares each line with the signed form and publishes.",
    steps: [
      "Build a checklist with owner, due date, status, and evidence for every task.",
      "Collect documents and draft text using only verified facts.",
      "Route legal or disclosure questions to the licensed agent.",
      "Compare the final text and price line by line with approved sources.",
      "Publish after approval, check the live page, and log changes.",
    ],
    exercise:
      "Build the practice listing checklist, draft the description from the given facts, and write the questions you would send to the agent.",
    portfolio: "A property listing checklist and a verified-fact description.",
    mistake:
      "Adding attractive but unverified claims to a listing can mislead buyers and expose the agent to problems.",
    question:
      "The seller has not approved the price. What should happen to the listing?",
    options: [
      "Publish with the price you think is right",
      "Leave the price off and publish anyway",
      "Mark the price pending and do not publish until written approval",
    ],
    answer: 2,
    explanation:
      "Price and publication need the seller's and agent's approval. Keep the listing unpublished until it is confirmed.",
    ready: [
      "Track tasks with owners, dates, and evidence",
      "Use only verified facts",
      "Route disclosure questions to the agent",
      "Verify and log before and after publishing",
    ],
    tools:
      "Spreadsheet checklist, shared folder, and the agent's listing platform.",
    taglish:
      'Maraming maliliit na gawain bago mailabas ang property sa merkado. Gumawa ng checklist na may owner, due date, status, at link ng ebidensya. Gamitin lang ang facts mula sa dokumento o sa agent; huwag magdagdag ng "tahimik na lugar" kung hindi aprubado. Ang tanong tungkol sa disclosure at advertising rules ay sa lisensyadong agent, hindi sa iyo. Ihambing nang linya-linya ang listing sa aprubadong source bago i-publish, at i-check ang live page pagkatapos.',
    proTips: [
      "Keep a 'pending approval' column so unapproved items are visible at a glance.",
      "Screenshot the live listing after publishing as a record.",
    ],
    deepDive: [
      [
        "Verify facts at the source",
        "Measurements, room counts, and fees should come from a document or the agent. If two sources disagree, flag it for the agent instead of choosing one.",
      ],
      [
        "Protect seller details",
        "Do not publish the owner's name, phone number, or schedule. Remove house numbers or documents from photos if the agent asks, and share files only with people named in the plan.",
      ],
    ],
    practiceData:
      "Fictional condo at 12 Pine St: floor plan says 62 square meters; the agent's note says 65. Two bedrooms, one bath. Price pending seller approval. Agent note: 'quiet street, great investment' (not approved for use). Photos booked Thursday; one draft photo shows a mail letter with the owner's name.",
    modelAnswer:
      "The checklist tracks photos, floor plan, measurements, description, price approval, and publishing. The area difference of 62 versus 65 is flagged for the agent to resolve. The description uses two bedrooms and one bath and leaves out 'quiet street' and 'great investment' until approved. The price is marked pending. The photo with the owner's name is flagged for retake or removal. Nothing is published until the seller and agent approve.",
  },
  {
    title: "Schedule showings and collect feedback fairly",
    goal: "Coordinate viewings, protect safety and privacy, and record visitor feedback accurately.",
    prereq: "Scheduling, confidentiality, and customer communication lessons.",
    teach:
      "Showings bring strangers into someone's property, so safety and privacy matter. Agree with the agent on showing hours, notice rules, who attends, how identity is checked, and what information may be shared. For each request, collect the name, contact, preferred times, and the property, and confirm the time with the agent before replying. Offer two or three slots, state the time zone, and send a confirmation with the address, the agent's name, and the arrival instructions. Do not share lockbox codes, owner schedules, or alarm details by plain message; follow the agent's secure method. Do not discuss price negotiation, condition, or offers; refer those to the agent. Treat every visitor fairly: use the same questions and the same availability for everyone, and do not make assumptions based on personal characteristics. After the showing, request feedback using neutral questions and record it exactly, with the date, visitor name if given, and the comments, and share a summary with the agent. Separate comments about the property from comments about price. Respect the visitor's choice to give no feedback. Keep the schedule in one place, update it when anything changes, and send a reminder the day before. Report any safety concern, such as an unknown visitor or a missed check-out, to the agent at once.",
    example:
      "A fictional visitor requests a Saturday viewing. The VA offers two slots after checking the agent's calendar, sends a confirmation with the address and arrival steps, and shares the lockbox method only with the agent. After the showing, the VA records the feedback verbatim and sends the agent a summary with the price comments separated from the rest.",
    steps: [
      "Agree on showing rules and identity checks with the agent.",
      "Collect request details and confirm the slot with the agent before replying.",
      "Send confirmations and reminders without sharing access codes in messages.",
      "Request neutral feedback and record it exactly.",
      "Send the agent a summary and report safety concerns immediately.",
    ],
    exercise:
      "Handle the practice showing requests: propose slots, write a confirmation without sensitive access details, and draft three neutral feedback questions.",
    portfolio: "A showing confirmation template and a feedback form.",
    mistake:
      "Sending a lockbox code in an ordinary message can put the property and the owner at risk.",
    question:
      "A visitor asks if the owner will accept a lower price. What do you say?",
    options: [
      "The agent can discuss that with you; I can arrange a time to talk",
      "Yes, probably",
      "No, the price is final",
    ],
    answer: 0,
    explanation:
      "Price decisions belong to the owner and agent. You can arrange the conversation without making promises.",
    ready: [
      "Follow showing rules and confirm with the agent",
      "Protect access details",
      "Treat all visitors the same",
      "Record feedback faithfully",
    ],
    tools: "Calendar, showing request form, and a feedback form.",
    taglish:
      "Sa showing, may estranghero na papasok sa pag-aari ng iba, kaya mahalaga ang kaligtasan at privacy. Magkasundo sa agent sa oras, notice, sino ang sasama, at paano chine-check ang pagkakakilanlan. Kunin ang pangalan, contact, at gustong oras, at i-confirm sa agent bago sumagot. Huwag ipadala ang lockbox code o schedule ng may-ari sa ordinaryong mensahe. Huwag talakayin ang presyo; ipasa sa agent. Pare-pareho ang trato sa lahat. Pagkatapos, itala nang eksakto ang feedback at i-report agad ang anumang alalahanin sa kaligtasan.",
    proTips: [
      "Send the reminder with the agent's name and phone so visitors know who to expect.",
      "Record feedback in the visitor's words and keep your opinions out of the notes.",
    ],
    deepDive: [
      [
        "Keep access safe",
        "Share access codes only through the method the agent chooses, to the person who needs them, and change them if there is any doubt. Never leave a code in a calendar invite.",
      ],
      [
        "Be fair to every visitor",
        "Use the same availability and questions for everyone. If you notice yourself treating visitors differently for reasons unrelated to the property, stop and ask the agent how to handle it.",
      ],
    ],
    practiceData:
      "Fictional property 12 Pine St. Agent availability: Saturday 10 AM–12 PM and Sunday 2–4 PM Pacific. Visitor A asks for Saturday 10:30 AM and asks whether the owner will go lower. Visitor B requests Saturday 10:30 AM too and asks for the lockbox code. Feedback after a showing: 'Bright kitchen, bedroom small, price feels high.'",
    modelAnswer:
      "Both visitors want Saturday 10:30, so the VA checks the agent's calendar and offers different slots, for example Saturday 10:00 and 11:00 AM Pacific, with time zone and address in the confirmation. The negotiation question goes to the agent. The lockbox code is never sent to a visitor; the agent decides access. Feedback is recorded verbatim, with 'price feels high' separated from comments about the property, and sent to the agent.",
  },
  {
    title: "Track a transaction timeline and its deadlines",
    goal: "Keep every date, document, and party in one place so nothing is missed between offer and closing.",
    prereq: "Project coordination, document control, and escalation lessons.",
    teach:
      "A property transaction moves through dates that matter, such as offer response deadlines, inspection periods, financing steps, document deadlines, and the closing date. Missing one can cost a party money or the deal. A VA supports the agent or coordinator by keeping a transaction timeline. Start from the signed documents and the agent's instructions, and enter each date with its source, the responsible party, and what must be done. Never calculate deadlines from memory or interpret legal terms; if the contract language is unclear, ask the licensed professional to confirm the date. List every document with its status: requested, received, reviewed, signed, or filed. Build reminders a few days before each deadline and send them to the right person with the exact item and date. Keep a contact list of the parties, such as the buyer, seller, lender, inspector, and title or legal contact, and send messages to the right recipient with the minimum necessary details. Update the timeline when dates change and note who approved the change. Highlight items at risk, such as a document still missing two days before a deadline, and escalate to the agent with the date and consequences. Do not give advice on negotiation or legal matters. After closing, file the final documents and note lessons learned.",
    example:
      "In a fictional transaction, the inspection period ends Friday and the lender needs a document by Thursday. The VA's timeline shows the document not yet received, so two days earlier the VA sends the buyer a reminder with the exact item and date and tells the agent it is at risk. The document arrives on Wednesday.",
    steps: [
      "Enter every date from the signed documents with its source and owner.",
      "List documents with a status from requested to filed.",
      "Create reminders ahead of each deadline for the right person.",
      "Flag at-risk items early and escalate to the agent with consequences.",
      "Update changes with approvals and file final documents after closing.",
    ],
    exercise:
      "Build the practice timeline, mark at-risk items, write one reminder, and write the question you would send about an unclear date.",
    portfolio: "A transaction timeline template with reminders and risk flags.",
    mistake:
      "Working out a deadline from memory instead of the document can cause a missed date with real cost.",
    question:
      "The contract language about a deadline is unclear. What should you do?",
    options: [
      "Choose the most likely date",
      "Ignore it until someone asks",
      "Ask the agent or licensed professional to confirm the date and record the answer",
    ],
    answer: 2,
    explanation:
      "Interpretation of contract terms belongs to the licensed professional. Confirm and record the answer.",
    ready: [
      "Source every date from documents",
      "Track documents by status",
      "Send timely reminders to the right person",
      "Escalate risks early",
    ],
    tools: "Spreadsheet or project board and the transaction folder.",
    taglish:
      "Sa transaksyon ng property, may mahahalagang petsa mula offer hanggang closing, at ang pagkaligta ng isa ay puwedeng magastos. Magtago ng timeline na may petsa, pinagmulan, at responsableng tao. Huwag kuwentahin ang deadline mula sa alaala o magpaliwanag ng legal na termino; magtanong sa lisensyadong propesyonal. Ilista ang dokumento at status. Magpadala ng reminder bago ang deadline sa tamang tao. I-flag agad ang at-risk na item sa agent at i-update ang timeline kapag nagbago ang petsa.",
    proTips: [
      "Add the source document and page number next to every date.",
      "Send reminders at a fixed lead time, such as five days and two days before.",
    ],
    deepDive: [
      [
        "Source every date",
        "A date without a source is a guess. Record which document sets it and who confirmed it. When dates are linked, such as 'ten days after acceptance', ask the professional to confirm the calendar date.",
      ],
      [
        "Escalate with consequences",
        "When reporting a risk, state the item, the date, who must act, and what happens if it is missed. The agent can then decide quickly and calmly.",
      ],
    ],
    practiceData:
      "Fictional transaction: offer accepted Monday; inspection report due Friday per contract page 4; lender needs proof-of-funds document Thursday; closing in 3 weeks; one clause says 'within ten days of acceptance' and nobody has confirmed the date. Buyer has not sent proof of funds. Parties: buyer, seller, lender, inspector.",
    modelAnswer:
      "The timeline lists the inspection report Friday (source page 4), proof of funds Thursday (at risk because not received), closing in three weeks, and the ten-day clause as unconfirmed. The VA sends the buyer a reminder naming the proof-of-funds document and Thursday, notifies the agent it is at risk with the consequences, and asks the agent or licensed professional to confirm the calendar date for the ten-day clause. All dates are recorded with sources and owners.",
  },
  {
    title: "Coordinate maintenance requests and vendors",
    goal: "Manage repair requests from report to resolution with clear approvals and records.",
    prereq:
      "Task coordination, vendor verification, and customer communication lessons.",
    teach:
      "Property managers and landlords receive repair requests that vary from minor to urgent. A VA can run the intake and tracking process while the owner or manager approves work and spending. Create a simple form or script that collects the property and unit, the problem, when it started, photos if offered, and a contact method. Classify each request using the manager's guide: emergencies involving safety, such as fire, flooding, or gas, follow the emergency instructions immediately and go to the manager; urgent items such as no heating in winter go to the manager the same day; routine items go to the daily list. Record each request with an ID, date, status, assigned vendor, and approval. Never approve spending, choose a vendor outside the approved list, or promise a time you cannot confirm. Ask the manager to approve a vendor and cost limit, then contact the approved vendor with the details and the tenant's preferred access times. Respect tenants' privacy and notice rules by sharing contact details only with the approved vendor and only as needed. Confirm the visit with the tenant and the vendor, follow up after the visit, and record the result, cost, and any invoice. If the issue remains, reopen it. Report patterns, such as repeat leaks in one unit, to the manager in a monthly summary.",
    example:
      "A fictional tenant reports a dripping kitchen tap. The VA records the request, marks it routine, and asks the manager to approve the usual plumber with a cost limit of 100. After approval, the VA books the visit with the tenant's preferred time, follows up after, records the 80 invoice, and closes the request. A separate message about a burst pipe is handled as an emergency and sent to the manager immediately.",
    steps: [
      "Use an intake form that collects property, problem, start date, photos, and contact.",
      "Classify each request as emergency, urgent, or routine using the manager's guide.",
      "Record an ID and status and ask the manager to approve vendor and cost limit.",
      "Coordinate the visit with the tenant and approved vendor and confirm times.",
      "Follow up, record cost and result, and report repeat issues monthly.",
    ],
    exercise:
      "Classify the practice requests, build the tracker entries, and write the message to the manager requesting approval for one repair.",
    portfolio: "A maintenance request tracker and an intake form.",
    mistake:
      "Treating a safety emergency as a routine ticket can put people at risk and expose the owner to serious loss.",
    question:
      "A tenant reports water pouring through a ceiling. How do you classify it?",
    options: [
      "Routine, for the daily list",
      "Emergency: follow the emergency instructions and notify the manager immediately",
      "Wait for the tenant to send photos first",
    ],
    answer: 1,
    explanation:
      "Active flooding is a safety and damage risk, so it follows the emergency process right away.",
    ready: [
      "Collect complete maintenance requests",
      "Classify emergency, urgent, and routine",
      "Use approved vendors and cost limits",
      "Track results and patterns",
    ],
    tools: "Request form, tracker spreadsheet, and the approved vendor list.",
    taglish:
      "Iba-iba ang repair request, mula maliit hanggang emergency. Gumamit ng form na kumukuha ng property, problema, kailan nagsimula, larawan, at contact. I-classify ayon sa guide ng manager: emergency (apoy, baha, gas) ay agad sa manager; urgent ay same day; routine ay sa daily list. Huwag mag-aprub ng gastos o pumili ng vendor sa labas ng aprubadong listahan. Ipaalam sa tenant at vendor ang oras, mag-follow up pagkatapos, at itala ang resulta at gastos. I-report ang paulit-ulit na problema.",
    proTips: [
      "Ask for a photo and the exact location of the problem in the first message.",
      "Close a request only after the tenant confirms the problem is fixed.",
    ],
    deepDive: [
      [
        "Write a clear classification guide",
        "List examples of emergency, urgent, and routine, with the contact and time limit for each. Add who to call if the manager cannot be reached. A guide lets you act quickly without guessing.",
      ],
      [
        "Protect tenant privacy",
        "Share a tenant's contact details only with the approved vendor and only for the visit. Do not post details in group chats. Follow notice rules set by the manager before any entry.",
      ],
    ],
    practiceData:
      "Fictional requests for Pine Court: 1) Unit 4: 'Kitchen tap drips slowly.' 2) Unit 7: 'Water is pouring through the ceiling right now!' 3) Unit 2: 'No heat for three days and it is freezing.' 4) Unit 9: 'Light bulb in hallway is out.' Guide: safety emergencies follow the emergency card; no heat in winter is urgent; vendor cost limit without approval is 0.",
    modelAnswer:
      "Request 2 is an emergency: follow the emergency card and notify the manager immediately. Request 3 is urgent: send to the manager the same day with the days without heat. Request 1 and 4 are routine and go to the daily list. Because the cost limit without approval is 0, every vendor job needs the manager's approval first. The tracker records ID, date, class, status, vendor, and approval, and the message to the manager asks approval for the tap repair with a stated cost limit.",
  },
];

const moneyModuleIndex = modules.length;
modules.push([
  "Bookkeeping workflows that hold up",
  "Invoice follow-up, expense records, monthly close, and accountant handoffs.",
  "Specialization",
  moneyLessons,
]);
moneyLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${moneyModuleIndex}-${index}`,
    mi: moneyModuleIndex,
    li: index,
  });
});

const propertyModuleIndex = modules.length;
modules.push([
  "Property and real-estate coordination",
  "Listings, showings, transaction timelines, and maintenance requests.",
  "Specialization",
  propertyLessons,
]);
propertyLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${propertyModuleIndex}-${index}`,
    mi: propertyModuleIndex,
    li: index,
  });
});
