/** Elite VA playbook: client-winning, planning, billing, and business skills. Append IDs to preserve existing progress. */
const eliteLessons = [
  {
    title: "Run a discovery call and send a scope recap",
    goal: "Ask the right questions before quoting, then confirm what was agreed in writing.",
    prereq: "Proposals, interviews, pricing, and onboarding lessons.",
    teach:
      "A discovery call is a short conversation to understand a client's problem before you promise anything. Its purpose is to learn, not to impress. Prepare by reading the job post or the client's public information and writing five questions. Good questions cover the outcome the client wants, what happens today, who approves decisions, which tools and files are involved, the deadline, and how success will be judged. Listen for facts you can measure, such as ten orders a day or a weekly report due Friday. During the call, repeat important points back in your own words to catch misunderstandings. Do not quote a price or accept urgent work while you are still unsure of the scope; say you will send a written recap and estimate. Within a day, send a scope recap: the problem, the deliverables, what is included and excluded, the assumptions, what you need from the client, the timeline, and the next step. A recap protects both sides because a gap between what the client expected and what you understood becomes visible before work starts.",
    example:
      "The fictional bakery owner says, 'I need help with orders.' Instead of quoting, the VA asks what 'help' means. The owner explains that order confirmations go out late and refund requests get lost. The recap lists two deliverables, a confirmation tracker and a refund log, states that the VA will not approve refunds, and asks for access to the order sheet. The owner replies with one correction before work begins.",
    steps: [
      "Write five questions covering outcome, current process, decision-maker, tools, and deadline.",
      "Take notes during the call and mark each fact you were told versus each assumption you made.",
      "Repeat the key requirements back and ask the client to correct you.",
      "Draft a recap with deliverables, exclusions, assumptions, client responsibilities, and timeline.",
      "Send the recap, ask for confirmation, and do not start paid work until it is confirmed.",
    ],
    exercise:
      "Using the practice call notes, write five follow-up questions you would ask next and then draft a scope recap of 150–250 words. Separate confirmed facts from assumptions and list at least two exclusions.",
    portfolio:
      "A one-page discovery question list and a sample scope recap with clearly labeled assumptions.",
    mistake:
      "Quoting a price on the call or starting work from a vague conversation leads to disputes about what was promised.",
    question:
      "The client says, 'Just keep things organized.' What should you do before quoting?",
    options: [
      "Ask what 'organized' means, what is disorganized now, and how success will be judged",
      "Quote an hourly rate and begin the next day",
      "Promise to organize everything in the business",
    ],
    answer: 0,
    explanation:
      "'Organized' is not a deliverable. Clarifying it turns a vague wish into work you can estimate, deliver, and check.",
    ready: [
      "Prepare questions before a call",
      "Separate facts from assumptions",
      "Write a recap with inclusions and exclusions",
      "Wait for written confirmation before starting",
    ],
    tools: "Docs or any note app; email.",
    taglish:
      "Ang discovery call ay para umintindi, hindi para mag-pitch agad. Maghanda ng limang tanong tungkol sa goal, current process, sino ang nag-a-approve, tools, at deadline. Huwag magbigay ng presyo habang malabo pa ang scope. Pagkatapos ng call, magpadala ng written recap: ano ang ide-deliver, ano ang hindi kasama, at anong assumptions mo. Hintayin ang confirmation bago magsimula, para walang away tungkol sa napag-usapan.",
    proTips: [
      "Say 'Let me confirm what I heard' before ending the call, then actually summarize.",
      "Put exclusions in the recap on purpose; they prevent most scope creep.",
    ],
    deepDive: [
      [
        "Questions that reveal the real problem",
        "Ask 'What happens today when this goes wrong?' and 'What would a good result look like in one month?' Ask who else touches the work and who has final say. If the client mentions a tool you do not know, note it and plan to learn it from official documentation rather than pretending experience. Avoid questions that can be answered yes or no because they hide detail.",
      ],
      [
        "Write the recap so it can be checked",
        "Each deliverable should be something the client can point to, such as a weekly tracker or a drafted reply set. Use dates or counts instead of words like soon or many. List assumptions separately, for example, 'I assume the order sheet is current each Monday.' If an assumption is wrong, the client can correct it before it becomes an error.",
      ],
      [
        "Handle pressure to start immediately",
        "A client may say the work is urgent and ask you to begin now. You can start with a small, clearly labeled first task while the recap is pending, but do not treat unconfirmed scope as agreed. If a client refuses to confirm anything in writing, treat that as a risk and decide whether to continue.",
      ],
    ],
    practiceData:
      "Fictional call notes: Owner wants 'someone to handle customer stuff.' Gets about 15 messages a day on email and Instagram. Refunds are decided by the owner. Replies are often late on weekends. Owner uses a shared order sheet but 'it gets messy.' Wants to start next week. Budget not discussed.",
    modelAnswer:
      "Strong follow-up questions ask which message types are most common, what 'late' means, how the order sheet gets messy, which channels are in scope, and what the budget and hours are. A good recap says the VA will triage and draft replies for review, will not approve refunds, will clean and maintain the order sheet, and assumes the owner gives access and a reply guide. It labels weekend coverage and budget as unconfirmed and asks for confirmation before work starts.",
  },
  {
    title: "Manage work on a Kanban board with limits",
    goal: "Turn a pile of tasks into a visible board that shows status, owners, and blockers.",
    prereq: "Task coordination, prioritization, and capacity lessons.",
    teach:
      "A Kanban board shows work as cards that move through columns such as To do, Doing, Waiting, and Done. Its value is visibility: anyone can see what is in progress, what is stuck, and what comes next. A useful card has a clear action in the title, an owner, a due date if one exists, and a link to the source. Keep columns few and meaningful. A Waiting column matters because it separates work blocked on someone else from work you can do now. Limit how many cards can be in Doing at once; this is called a work-in-progress limit. Without a limit, a person starts many things, finishes few, and hides delays. Review the board on a fixed rhythm, move stale cards, and ask for decisions on anything blocked. A board is only trustworthy when it is updated; an out-of-date board is worse than none because people rely on it. Use the same simple rules for every client so you do not have to relearn your own system. Do not store passwords or private customer details on cards.",
    example:
      "The fictional bakery has fourteen loose tasks in an email thread. The VA creates a board with To do, Doing, Waiting on owner, and Done, and sets a Doing limit of three. A card titled 'Confirm Saturday pickup list' sits in Waiting because the owner has not approved the final menu. The weekly review shows the same card has waited four days, so the VA asks the owner for a decision by Thursday.",
    steps: [
      "List every task from the source and rewrite each as a verb-first card title.",
      "Create columns for To do, Doing, Waiting, and Done.",
      "Set a work-in-progress limit for Doing and explain it in one sentence.",
      "Add an owner, due date, and source link to each card where they exist.",
      "Hold a short review, move stale cards, and list the decisions you need.",
    ],
    exercise:
      "Turn the practice task list into a board in a table. Include columns, a Doing limit, owner and due date for each card, and a three-line review note naming the blocked items and the decisions needed.",
    portfolio:
      "A screenshot or table of a fictional Kanban board with a short note explaining its rules.",
    mistake:
      "Starting every task at once makes a board look busy while nothing finishes and blockers stay hidden.",
    question:
      "A task cannot continue until the owner approves the menu. Where does its card belong?",
    options: [
      "In Doing, so it looks active",
      "In Waiting on owner, with the needed decision stated",
      "In Done, because you finished your part",
    ],
    answer: 1,
    explanation:
      "Waiting makes the block visible and shows who must act, so the card is not mistaken for active work.",
    ready: [
      "Write clear card titles with owners and dates",
      "Separate blocked work from active work",
      "Apply a work-in-progress limit",
      "Review and update the board regularly",
    ],
    tools: "Trello, Asana, Notion, or a spreadsheet table.",
    taglish:
      "Ang Kanban board ay nagpapakita ng status ng bawat task: To do, Doing, Waiting, at Done. Gumamit ng Waiting column para sa mga naka-hold dahil naghihintay ng sagot ng iba, para hindi magmukhang ikaw ang tamad. Maglagay ng limit sa Doing, halimbawa tatlo lang, para may natatapos talaga. Mag-review nang regular at i-update ang board, kasi kapag luma na ang board, hindi na ito mapagkakatiwalaan.",
    proTips: [
      "Write card titles that start with a verb, such as 'Send', 'Confirm', or 'Update'.",
      "When a card sits in Waiting for days, make a follow-up its own dated card.",
    ],
    deepDive: [
      [
        "Pick columns that answer questions",
        "Each column should answer a question someone actually asks. To do answers what is next, Doing answers what is active, Waiting answers what is blocked and on whom, and Done answers what is finished. Add more columns only when a real question is not answered, such as Needs review for work that waits for the client to check it.",
      ],
      [
        "Why limits help",
        "A limit forces you to finish or unblock work before starting more. If Doing is full, the board shows a bottleneck instead of hiding it. Explain the limit to the client as a way to protect quality and speed, not as a reason to refuse work.",
      ],
      [
        "Keep the board honest",
        "Update cards when status changes, not at the end of the week. Archive Done cards on a schedule so the board stays readable. Never put credentials, payment details, or private customer records on a card; link to the secure source instead.",
      ],
    ],
    practiceData:
      "Fictional task list: confirm Saturday pickup list (needs owner menu approval); reply to 6 order questions; update order sheet totals; draft holiday post (needs owner approval); chase supplier invoice (supplier has not replied); prepare weekly summary; fix duplicate customer rows; renew domain (owner must pay).",
    modelAnswer:
      "A sound board puts approval-dependent items such as the menu-dependent pickup list, the holiday post, and the domain renewal in Waiting on owner, and the supplier invoice in Waiting on supplier. Active work such as order replies, totals, duplicate cleanup, and the weekly summary is limited to three in Doing with the rest in To do. The review note names the blocked items and asks for the menu approval, post approval, and renewal payment by specific dates.",
  },
  {
    title: "Track time and bill with integrity",
    goal: "Estimate, record, and invoice time so a client can trust every line.",
    prereq: "Quality checks, invoicing, pricing, and capacity lessons.",
    teach:
      "Time-based billing works only when the client trusts the numbers. Track time while you work, not from memory at the end of the week, because memory rounds in your favor or against you without you noticing. Record what you did in a short, specific note, such as 'Reconciled 42 orders against the sheet', not 'worked on orders'. Separate billable work from your own learning, setup of your own tools, and administrative time unless the agreement says otherwise. Stop the timer for breaks and interruptions. Compare estimates with actual time and keep the difference; this is how you quote better next time. If a task will exceed an agreed limit, tell the client before it happens, not after. Agree on rounding rules in writing, for example, to the nearest ten minutes. Send an invoice that matches your tracker, shows the period, the rate, the hours, and the total, and states the payment terms. Fix errors openly and promptly. Never pad hours, bill the same time to two clients, or hide a mistake you made; one dishonest entry can end a client relationship and damage your reputation.",
    example:
      "The VA estimated three hours to clean the fictional bakery's order sheet but spent four and a half because of duplicate rows nobody mentioned. Before passing the three-hour limit, the VA messages the owner: 'I found 60 duplicate rows. Finishing will take about 1.5 more hours. Should I continue?' The owner approves, and the invoice shows both the estimate and the approved extra time.",
    steps: [
      "Start a timer for each task and write a specific note for each entry.",
      "Mark each entry as billable or non-billable according to the agreement.",
      "Compare each estimate with the actual time and record the reason for any gap.",
      "Warn the client before exceeding an agreed hour limit and ask for approval.",
      "Build an invoice that matches the tracker and states period, rate, hours, total, and terms.",
    ],
    exercise:
      "Using the practice time log, mark billable and non-billable entries, correct vague notes, calculate the billable total at the stated rate, and write the message you would send about the overage.",
    portfolio:
      "A sample time log and matching invoice with an estimate-versus-actual note.",
    mistake:
      "Reconstructing hours from memory at month end produces rounded, unreliable entries that you cannot defend if questioned.",
    question:
      "You will pass the agreed ten-hour limit. When should you tell the client?",
    options: [
      "On the invoice after the extra work is done",
      "Never, if the extra time is small",
      "Before exceeding the limit, with the reason and a request for approval",
    ],
    answer: 2,
    explanation:
      "Early notice lets the client decide, and approved extra time can be billed without a dispute.",
    ready: [
      "Record time as work happens with specific notes",
      "Separate billable from non-billable time",
      "Warn the client before exceeding limits",
      "Invoice exactly what the tracker shows",
    ],
    tools: "Toggl, Clockify, or a spreadsheet; invoice template.",
    taglish:
      "Mag-track ng oras habang ginagawa ang task, hindi hulaan sa katapusan ng linggo. Maglagay ng malinaw na note sa bawat entry, at ihiwalay ang billable sa non-billable, tulad ng sarili mong pag-aaral. Kapag lalampas ka na sa agreed hours, sabihin muna sa client at humingi ng approval. Dapat tugma ang invoice sa tracker mo. Ang tapat na oras ang pinakamahalagang puhunan mo; kapag nawala ang tiwala, mahirap nang ibalik.",
    proTips: [
      "Keep a personal estimate-versus-actual log to quote future tasks more accurately.",
      "If you spot a billing mistake after sending an invoice, correct it yourself before the client finds it.",
    ],
    deepDive: [
      [
        "Write notes a client can understand",
        "A good note names the action and the object, such as 'Merged 60 duplicate customer rows in the order sheet'. A vague note such as 'admin' invites questions. Notes also protect you because they show what the hours bought.",
      ],
      [
        "Estimate honestly",
        "Break a task into parts, estimate each, and add time for review and questions. Use your tracked history rather than hope. Offer a range if the work is uncertain and say what could change it. A realistic estimate that you meet builds more trust than an optimistic one you miss.",
      ],
      [
        "Handle disputes calmly",
        "If a client questions an entry, share the note and the output it produced. If you made an error, thank the client, correct the invoice, and explain what you will do differently. Do not argue about small amounts in a way that harms the relationship, but do not agree to hide a real mistake either.",
      ],
    ],
    practiceData:
      "Fictional rate: 12 per hour. Agreement: 10 billable hours, rounded to the nearest 0.25 hour. Log: Mon 2.0 h order sheet cleanup; Mon 0.5 h learning a new spreadsheet shortcut for myself; Tue 1.75 h 'admin'; Wed 3.0 h reply drafts; Thu 2.5 h order totals check; Fri 1.5 h weekly report; Fri 0.5 h fixing my own invoice template.",
    modelAnswer:
      "The personal learning and own invoice-template entries are non-billable. The vague 'admin' entry needs a specific note before it can be billed. Billable hours are 2.0 + 1.75 + 3.0 + 2.5 + 1.5 = 10.75, which is 0.75 over the agreed ten, so the VA should have asked for approval before passing the limit. At 12 per hour the 10.75 hours would be 129 if approved, or 120 for the agreed ten. The message states the overage, the reason, and asks the client to approve or limit it.",
  },
  {
    title: "Work asynchronously across time zones",
    goal: "Keep work moving when you and the client are rarely online at the same time.",
    prereq: "Workspace, client communication, and independent work lessons.",
    teach:
      "Asynchronous work means you do not need the other person to respond right away. Many VA relationships cross time zones, so the skill is making each message complete enough that the other person can act without a back-and-forth. State the time zone with every date and time, such as 'Friday 3 PM Manila time', and use a shared reference like UTC when several people are involved. Agree on overlap hours for real-time questions and on a response window for everything else. Write messages that include the context, the question or decision needed, the deadline, and what you will do if you do not hear back. Use a daily or weekly update with three parts: done, next, and blocked. When blocked, say exactly what you need and from whom, and continue with other work meanwhile. Record decisions in writing so nobody relies on a late-night chat memory. Be careful with daylight saving time because it changes the gap between locations on different dates. Use a calendar tool that converts time zones automatically and confirm any meeting by writing both local times.",
    example:
      "The fictional bakery owner is on Pacific time and the VA is in Manila. The VA ends the day with: 'Done: 38 orders confirmed. Next: Saturday pickup list. Blocked: need menu approval by Thursday 9 AM Pacific, which is Friday 12 AM Manila. If I do not hear back, I will prepare the list from last week's menu and mark it unapproved.' The owner replies the next morning with one line of approval.",
    steps: [
      "Write down both time zones and agree on overlap hours and a response window.",
      "Include the time zone with every date and time you write.",
      "Draft messages with context, the decision needed, the deadline, and your default action.",
      "End each workday with a done, next, and blocked update.",
      "Record every decision in a shared place the same day.",
    ],
    exercise:
      "Write an end-of-day update for the practice situation using the done, next, and blocked format. Include the deadline in both time zones and a safe default if there is no reply.",
    portfolio:
      "A sample asynchronous update and a one-paragraph working-hours agreement.",
    mistake:
      "Writing 'let me know tomorrow' without a time zone or deadline leaves both people guessing and can delay work by a full day.",
    question:
      "Which deadline wording is clearest for a client in another time zone?",
    options: [
      "By Thursday 9 AM Pacific (Friday 12 AM Manila)",
      "By tomorrow morning",
      "As soon as you can",
    ],
    answer: 0,
    explanation:
      "A named day, time, and time zone, ideally shown for both people, removes guessing.",
    ready: [
      "State time zones with every deadline",
      "Write messages the reader can act on alone",
      "Send done, next, and blocked updates",
      "Record decisions in writing",
    ],
    tools: "A time zone converter, shared calendar, and chat or email.",
    taglish:
      "Sa async work, hindi kayo sabay online ng client, kaya dapat kumpleto ang bawat mensahe. Laging ilagay ang time zone kapag may petsa o oras, at isulat ang deadline para sa parehong lugar. Gamitin ang done, next, at blocked sa araw-araw na update. Sabihin kung ano ang gagawin mo kapag walang sagot, para tuloy ang trabaho. Isulat din ang mga desisyon para walang nakakalimot.",
    proTips: [
      "Check daylight saving dates for both locations before scheduling a recurring meeting.",
      "State a default action in every question so a late reply never stalls the work.",
    ],
    deepDive: [
      [
        "Agree on the rules first",
        "Write down working hours, overlap hours, the response window for normal messages, and the channel for urgent matters. Define what 'urgent' means so it is not used for everything. Review the agreement after the first two weeks and adjust it.",
      ],
      [
        "Write messages that stand alone",
        "Assume the reader will see your message hours later with no memory of the context. Include links, the exact question, and your recommendation. Use a short heading line such as 'Decision needed by Thursday 9 AM Pacific'.",
      ],
      [
        "Make handoffs and decisions visible",
        "Keep a shared decision log with the date, decision, and who made it. When the client answers in a chat or call, copy the outcome into the log. This prevents repeated questions and gives you evidence if a detail is later disputed.",
      ],
    ],
    practiceData:
      "Fictional setup: Owner works Pacific time (UTC-7 in this example); VA works Manila time (UTC+8), a 15-hour difference. Overlap is about one hour at 8–9 AM Pacific. Today the VA confirmed 38 orders, needs menu approval before preparing the Saturday pickup list, and has a supplier question that can wait.",
    modelAnswer:
      "A strong update says: Done, 38 orders confirmed. Next, prepare the Saturday pickup list after approval and answer the order questions. Blocked, menu approval needed by Thursday 9 AM Pacific, which is Friday 12 AM Manila. Default, prepare the list from last week's menu clearly marked unapproved. The supplier question is noted as non-urgent for the next overlap hour. The decision will be logged when answered.",
  },
  {
    title: "Support email newsletters with consent and approval",
    goal: "Prepare newsletter work that respects subscriber consent and the client's approval.",
    prereq: "Social media, content approval, and privacy lessons.",
    teach:
      "Email newsletters can build a client's audience, but they carry legal and trust responsibilities. A subscriber should have asked to receive the email, usually by signing up on a form, and should be able to unsubscribe easily. Never add people to a list just because you have their address from a purchase, a business card, or an old spreadsheet unless the client's policy and applicable rules allow it. Rules differ by country, so ask the client which rules apply to their audience and do not give legal advice. Your support tasks may include drafting copy, formatting in the email tool, building a segment, scheduling, and reviewing results. Always send a test to yourself and the client before the real send. Check the subject line, preview text, links, images, names, dates, prices, and the unsubscribe link. Keep a record of the approved version and the send time. Report basic results such as delivery, opens, and clicks, and note that open numbers can be unreliable. Protect the list: do not export it to unsecured files or share it by chat. If a subscriber asks to be removed, act promptly and tell the client.",
    example:
      "The fictional bakery wants a holiday newsletter. The VA drafts the copy, builds the email with last year's template, and sends a test. In the test, the VA finds that the pickup time shows last year's date and one button links to an old menu. After fixing both, the owner approves the final version, and the VA schedules it for Tuesday 9 AM with a record of the approval.",
    steps: [
      "Confirm with the client how subscribers joined and that an unsubscribe link is included.",
      "Draft the subject, preview text, and body, and mark facts that need client confirmation.",
      "Build the email and send a test to yourself and the client.",
      "Check every link, date, price, name, and image against approved sources.",
      "Schedule only after written approval and save a record of what was sent.",
    ],
    exercise:
      "Review the practice newsletter draft. List at least five problems or checks needed before sending, rewrite the subject line, and write a short approval request to the owner.",
    portfolio:
      "A newsletter pre-send checklist and a sample approval request, using fictional details.",
    mistake:
      "Importing an old customer spreadsheet into a newsletter tool without confirming consent can harm trust and may break rules that apply to the client.",
    question:
      "A friend of the owner gave you 200 email addresses to add to the list. What should you do?",
    options: [
      "Add them all to increase the audience quickly",
      "Add them but hide the unsubscribe link",
      "Ask the owner how those people agreed to receive emails and whether the rules allow adding them",
    ],
    answer: 2,
    explanation:
      "Subscribers should have agreed to receive messages. Confirm consent and the applicable rules with the client before adding anyone.",
    ready: [
      "Check consent and unsubscribe before sending",
      "Test and verify every link and detail",
      "Get written approval before scheduling",
      "Protect and honor subscriber data",
    ],
    tools: "Mailchimp, MailerLite, or the client's email platform.",
    taglish:
      "Sa newsletter, kailangan may pahintulot ang subscribers at may madaling unsubscribe link. Huwag basta magdagdag ng email mula sa lumang listahan nang walang linaw sa consent. Laging mag-send ng test at i-check ang links, petsa, presyo, at pangalan bago ang totoong send. Kailangan ng written approval ng client bago i-schedule. Kapag may nag-unsubscribe, agad na sundin at ipaalam sa client.",
    proTips: [
      "Preview the email on a phone, since most people will open it there.",
      "Save the approved version and send time so you can answer 'what did we send?' later.",
    ],
    deepDive: [
      [
        "Understand consent without giving legal advice",
        "Ask how each subscriber joined, such as a website form, checkout checkbox, or event sign-up, and whether the form explained what they would receive. Rules vary by country and by the client's audience, so the client or a qualified professional decides what is allowed. Your job is to avoid shortcuts and raise questions early.",
      ],
      [
        "Pre-send checks that catch real errors",
        "Verify dates, prices, names, and links against the approved source. Click every button. Check that images have alternative text and that the plain text still makes sense. Confirm the sender name and reply address are correct and that merge fields such as first name fall back gracefully if empty.",
      ],
      [
        "Report results honestly",
        "Report delivered, opens, clicks, unsubscribes, and complaints. Explain that open counts can be inflated or hidden by email apps, so clicks and replies are often more useful. Compare with the client's past sends rather than with generic benchmarks you cannot verify.",
      ],
    ],
    practiceData:
      "Fictional draft: Subject 'HUGE SALE!!! Open now!!!'. Body says pickup is Saturday 10–12 (policy says 9–11). A button says 'Order here' and links to last year's menu. Greeting uses '[First name]' unfilled. No unsubscribe link. List note: 150 addresses imported from a supplier's contact list.",
    modelAnswer:
      "Problems include the wrong pickup window, the old menu link, the unfilled placeholder, the missing unsubscribe link, the spammy subject line, and the questionable import from a supplier's list with unconfirmed consent. A better subject is 'Holiday pickup is Saturday 9–11 AM'. The approval request lists the corrected facts, asks the owner to confirm consent for the imported addresses, and says nothing will be scheduled until written approval and a clean test send.",
  },
  {
    title: "Understand freelance basics: agreements, payment, and taxes",
    goal: "Know the business questions to ask so you work safely, without giving legal or tax advice.",
    prereq: "Pricing, invoicing, scams, and offboarding lessons.",
    teach:
      "Working as an independent VA means you run a small business, even if you work alone. A written agreement should state the services, the rate or fee, the payment schedule, how changes are handled, who owns the finished work, confidentiality, how either side can end the work, and how you will communicate. A short, clear agreement protects both sides better than a handshake. Use a platform's contract or a template reviewed by a qualified professional rather than inventing legal terms. Decide how you will be paid, and prefer methods with a record and buyer or seller protection. Be cautious about deposits and refunds, and never receive and forward money for a client or cash a check and send back an overpayment; these are common scams. Keep copies of agreements, invoices, and payments in an organized folder. Taxes and rules vary by country and by whether you are an employee or contractor, so ask an accountant or the official tax authority in your location instead of guessing. Set aside part of each payment for taxes and fees, track expenses, and keep records. Consider the cost of your own tools, internet, and downtime when setting rates. This lesson is general education, not legal, tax, or financial advice.",
    example:
      "A fictional client sends a payment larger than the invoice and asks the VA to forward the difference to a 'shipping agent'. The VA recognizes the overpayment scam, does not send any money, keeps the messages, and reports it to the payment platform. The VA also updates the agreement template so payment terms and the payment method are stated clearly.",
    steps: [
      "List the agreement items you need: services, fee, schedule, changes, ownership, confidentiality, and ending the work.",
      "Draft a plain-language summary of each item and note what needs professional review.",
      "Choose a payment method with a record and write the payment terms into the invoice.",
      "Create a folder structure for agreements, invoices, receipts, and expenses.",
      "Write three questions to ask an accountant or tax authority in your location.",
    ],
    exercise:
      "Write a one-page agreement checklist for a fictional client, a payment-terms paragraph for an invoice, and three questions for a tax professional. Mark each item that needs qualified review.",
    portfolio:
      "A fictional agreement checklist and a records-folder structure, with a note that legal terms need professional review.",
    mistake:
      "Starting work with only chat messages as an agreement makes it hard to prove what was promised about price, scope, or ownership.",
    question:
      "A new client overpays by check and asks you to send back the difference. What is the safest response?",
    options: [
      "Send the difference immediately to keep the client happy",
      "Do not send money; keep the records and report it to the payment platform or your bank",
      "Cash the check first and then decide",
    ],
    answer: 1,
    explanation:
      "Overpayment requests are a common scam. Do not move money, keep evidence, and use the platform or bank's reporting process.",
    ready: [
      "List the key terms of a service agreement",
      "Recognize payment and overpayment scams",
      "Organize agreements, invoices, and receipts",
      "Know when to ask a qualified professional",
    ],
    tools: "Docs, cloud folders, and your payment platform's help pages.",
    taglish:
      "Kapag freelance VA ka, ikaw mismo ang may maliit na negosyo. Dapat may nakasulat na agreement: serbisyo, presyo, iskedyul ng bayad, pagbabago ng scope, ownership ng gawa, confidentiality, at paano tatapusin ang trabaho. Mag-ingat sa overpayment scam; huwag magpapadala ng pera para sa client. Itabi ang records ng invoices at bayad. Para sa buwis at legal na tanong, magtanong sa accountant o sa opisyal na ahensya, hindi manghula. Ito ay general na gabay lang, hindi legal o tax advice.",
    proTips: [
      "Back up signed agreements and invoices in a second location.",
      "When something about a payment feels off, stop and verify through the platform's official channel.",
    ],
    deepDive: [
      [
        "What a simple agreement covers",
        "Cover who does what, by when, for how much, and how changes are priced. State that the client owns the finished work after payment if that is agreed, and that you may keep general know-how. Add confidentiality, a notice period for ending the work, and how disputes will be discussed first. Have a qualified professional review any template you reuse.",
      ],
      [
        "Payment safety",
        "Use invoices that show the amount, period, and terms, and be wary of anyone who wants to pay in unusual ways or move money through you. Confirm that funds have cleared before treating a payment as final. Never share bank passwords or one-time codes with anyone, including a client.",
      ],
      [
        "Records and questions for professionals",
        "Keep agreements, invoices, payment confirmations, and expense receipts by month. Ask a qualified accountant about registration, what counts as income, which expenses may be deducted, and how often to report. Requirements differ by location, so write down the date and source of any answer you rely on.",
      ],
    ],
    practiceData:
      "Fictional situation: A new client wants a month of support at a fixed monthly fee, wants to pay by sending a check, and says there will be an extra 'bonus' that the VA should forward to a courier. The client has not signed anything. The VA is unsure how to report income in their country.",
    modelAnswer:
      "A solid answer says to pause before working, ask for a written agreement with services, fee, schedule, scope changes, confidentiality, and ending the work, and to prefer a payment method with a record. The bonus-to-courier request is a scam pattern, so do not forward money, keep the messages, and report it. The VA should ask a local accountant or tax authority how to report income and mark that question as needing professional advice, not a guess.",
  },
];
const eliteModuleIndex = modules.length;
modules.push([
  "Elite VA playbook",
  "Win clients, run boards, bill honestly, collaborate across time zones, and handle business basics.",
  "Professional edge",
  eliteLessons,
]);
eliteLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${eliteModuleIndex}-${index}`,
    mi: eliteModuleIndex,
    li: index,
  });
});
