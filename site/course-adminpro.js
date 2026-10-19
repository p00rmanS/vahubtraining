/** Admin power tools: inboxes, booking, shared access, screen-recorded SOPs, and travel. Append IDs to preserve existing progress. */
const adminProLessons = [
  {
    title: "Run an inbox with labels, filters, and saved replies",
    goal: "Build an inbox system that sorts mail safely and lets you answer repeat questions fast.",
    prereq: "Inbox and calendar management, privacy, and prompt lessons.",
    teach:
      "A good inbox system is a small set of rules that anyone could follow. Start by agreeing with the client on categories, such as Needs reply, Waiting, Orders, Suppliers, Finance, and Reference. Create labels or folders for them and use filters for messages that are clearly routine, such as supplier newsletters or receipts. Test every filter on a few old messages before it runs automatically, because a wrong filter can hide an important email. Never auto-delete or auto-archive anything from customers, banks, or legal contacts. Keep a daily routine: process new mail at set times, reply or label each message, and move finished items out of the inbox. For questions that repeat, write saved replies with clear placeholders and have the client approve them once. Always check names, dates, and amounts before sending a saved reply, because a template can carry yesterday's details. Mark messages that need the client's decision and bring them together in a short daily summary. Use the client's access carefully: read only what the task needs, do not forward private mail to your own account, and log every rule you create so it can be undone. Review the filters monthly and remove any that no longer help.",
    example:
      "The fictional bakery inbox gets 60 messages a day. The VA creates labels, adds filters for supplier newsletters and receipts, and tests each on ten old messages. One filter would have hidden a refund request that contained the word 'receipt', so the VA narrows it to the sender's address. The VA then writes two saved replies for pickup questions and gets them approved.",
    steps: [
      "Agree on categories and what must never be filtered or deleted.",
      "Create labels and write filters, testing each one on old messages first.",
      "Set a processing routine with fixed times and a daily summary for decisions.",
      "Write saved replies with placeholders and get them approved.",
      "Log every rule and review the filters each month.",
    ],
    exercise:
      "Design a label set and three filters for the practice inbox. For each filter, name the message it must not catch and explain the test you would run first.",
    portfolio:
      "An inbox system guide with labels, filter rules, and test notes.",
    mistake:
      "A filter built on a common word can quietly hide an urgent message from a customer.",
    question:
      "A filter on the word 'receipt' would also catch a refund request. What should you do?",
    options: [
      "Keep it; refunds are rare",
      "Turn on auto-delete to save time",
      "Narrow the filter to a specific sender and test it on old mail",
    ],
    answer: 2,
    explanation:
      "Filters should match specific, reliable signals such as the sender, and must be tested so important mail is never hidden.",
    ready: [
      "Create categories and labels the client approves",
      "Test filters before automating",
      "Use approved saved replies carefully",
      "Log and review rules",
    ],
    tools: "Gmail or Outlook labels, filters, and templates.",
    taglish:
      "Ang magandang inbox system ay maliit na hanay ng patakarang masusunod ng kahit sino. Magkasundo sa categories tulad ng Needs reply, Waiting, Orders, at Finance. Gumawa ng filters para sa malinaw na routine na mensahe, pero i-test muna sa lumang email dahil puwedeng maitago ng maling filter ang importanteng mensahe. Huwag mag-auto-delete ng galing sa customers, bangko, o legal. Gumawa ng saved replies na aprubado ng client, at i-check ang pangalan, petsa, at halaga bago ipadala. Itala ang bawat rule para mabawi ito.",
    proTips: [
      "Filter on the sender's address rather than a common word whenever you can.",
      "Keep one 'Needs decision' label and clear it into the client's daily summary.",
    ],
    deepDive: [
      [
        "Test before you trust",
        "Search with the filter's rule first and read the results. If anything important appears, tighten the rule. Apply it to old mail before turning it on for new mail.",
      ],
      [
        "Saved replies without mistakes",
        "Write placeholders in brackets and a short checklist: name, date, amount, and attachment. Replace every bracket before sending, and review the saved replies each quarter for outdated facts.",
      ],
    ],
    practiceData:
      "Fictional inbox sample: supplier newsletter from news@flourco.test; receipt from pay@cardco.test; customer message 'Where is my receipt? I want a refund' from a customer; bank notice from alerts@bank.test; order form notification from orders@form.test; invoice from a supplier labeled 'Receipt for invoice 22'.",
    modelAnswer:
      "Labels: Needs reply, Waiting, Orders, Suppliers, Finance, Reference. Filters by sender: news@flourco.test to Suppliers, pay@cardco.test to Finance, and orders@form.test to Orders. A filter on the word 'receipt' must not be used because it would catch the customer's refund request. Bank notices are never auto-archived. Each filter is tested on old mail first and logged in the guide.",
  },
  {
    title: "Set up booking links that prevent double-booking and no-shows",
    goal: "Use scheduling tools with buffers, limits, and reminders so appointments run smoothly.",
    prereq: "Calendar management, confidentiality, and time zone lessons.",
    teach:
      "A booking link lets people choose a time without a long message thread, but only if it is set up carefully. Begin by listing the meeting types the client offers, such as a 15-minute intro call and a 45-minute planning call. For each, set the length, the available days and hours, buffers before and after, and a daily limit so the calendar does not fill with calls. Connect every calendar that can create a conflict, so a personal appointment blocks the slot. Set a minimum notice, for example 24 hours, and a maximum booking window so nobody books six months ahead by accident. Choose a clear title that does not reveal private information, and add the time zone handling, because the link should show times in the visitor's zone. Ask only for the details needed, such as name and email, and tell people how their details will be used. Send automatic confirmations and reminders with the date, time, time zone, and join link, and give a simple way to reschedule or cancel. After booking, test the link yourself in another time zone and with a conflicting event. Track no-shows and late changes, and adjust reminders or deposits only with the client's approval. Review the setup monthly and update it when the client's hours change.",
    example:
      "A fictional consultant gets double-booked because the booking link ignored a second calendar. The VA connects both calendars, adds a 15-minute buffer and a limit of three calls a day, sets 24-hour notice, and tests the link from a different time zone. No-shows drop after a reminder is added the day before.",
    steps: [
      "List meeting types with length, hours, and buffers.",
      "Connect all relevant calendars and set notice, window, and daily limits.",
      "Ask only for needed details and use a neutral meeting title.",
      "Enable confirmations, reminders, and easy rescheduling.",
      "Test across time zones and conflicts, then review monthly.",
    ],
    exercise:
      "Write the booking setup for two meeting types in the practice case, including buffers, limits, minimum notice, reminders, and the tests you would run.",
    portfolio: "A booking link configuration sheet with test results.",
    mistake:
      "Leaving a second calendar unconnected causes double-bookings that embarrass the client.",
    question:
      "A visitor in another time zone books through your link. What must you verify?",
    options: [
      "That the link shows and confirms times in the visitor's time zone and the invite is correct for both sides",
      "Nothing; the tool handles everything",
      "That the visitor's time zone matches the client's",
    ],
    answer: 0,
    explanation:
      "Testing across time zones prevents confusion and missed meetings, so both confirmations should state the correct local time.",
    ready: [
      "Configure meeting types, buffers, and limits",
      "Connect all calendars",
      "Set confirmations and reminders",
      "Test conflicts and time zones",
    ],
    tools: "Calendly, Cal.com, or Google Calendar appointment schedules.",
    taglish:
      "Ang booking link ay nakakatulong kung maayos ang setup. Ilista ang uri ng meeting at itakda ang haba, oras na available, buffer bago at pagkatapos, at limitasyon kada araw. Ikonekta ang lahat ng calendar para walang double-booking. Maglagay ng minimum notice at limitasyon kung gaano kalayo puwedeng mag-book. Humingi lang ng kailangang detalye at gumamit ng neutral na titulo. Magpadala ng confirmation at reminder na may time zone, at i-test ang link sa ibang time zone at may conflict.",
    proTips: [
      "Book a test meeting through your own link before the client shares it.",
      "Send the reminder with the reschedule link so a change is easier than a no-show.",
    ],
    deepDive: [
      [
        "Protect the client's focus time",
        "Block time for deep work and travel in the connected calendar so it cannot be booked. Use buffers so back-to-back calls leave room to prepare and rest.",
      ],
      [
        "Handle no-shows professionally",
        "Record each no-show and send a polite message with a reschedule option. Suggest changes such as a reminder or a deposit to the client, but let the client decide.",
      ],
    ],
    practiceData:
      "Fictional client: consultant in Pacific time. Meeting types: 15-minute intro call, 45-minute planning call. Hours: Tuesday to Thursday, 9 AM–3 PM Pacific. Two calendars: work and personal (dentist Wednesday 10 AM). Past problem: two no-shows in one month.",
    modelAnswer:
      "Intro call 15 minutes and planning call 45 minutes on Tuesday to Thursday 9 AM–3 PM Pacific, with 15-minute buffers, a three-call daily limit, and 24-hour minimum notice. Both calendars are connected so the Wednesday 10 AM dentist visit blocks the slot. A neutral title is used. Confirmation and reminders show date, time, time zone, and join link with a reschedule option. Tests: another time zone and a conflicting event. No-show change is proposed to the client.",
  },
  {
    title: "Manage shared passwords and access like a professional",
    goal: "Use a password manager and access requests to keep client accounts secure and traceable.",
    prereq: "Account security, permissions, and offboarding lessons.",
    teach:
      "Clients trust a VA with the keys to their business, so access needs more care than a shared note. Ask the client to use a password manager with shared vaults, where each item can be shared with a named person and removed at any time. Request the minimum access in writing, saying which accounts, what level such as view or edit, and for how long. Prefer a separate user account in each tool over using the client's own login, because it keeps actions traceable and can be removed without changing the client's password. Turn on multi-factor authentication, and keep recovery codes only with the client, not in chat or documents. Never accept or send passwords by email or messaging. If a password was shared that way, ask the client to change it. Use unique passwords, and do not reuse any client password anywhere else. Keep an access register with the account, the access level, the owner, the date granted, and the planned end date. When a task ends, ask for the access to be removed and check that it is. Report suspicious logins, phishing, or lost devices to the client at once. Lock your own devices, keep software updated, and avoid public wi-fi for client work unless you use a trusted protection method. Treat any breach as something to report, not hide.",
    example:
      "A fictional client sends the VA a login in a chat message. The VA replies politely that passwords should not travel by chat, asks the owner to share the item through the password manager with view access, and records it in the access register with an end date. When the project ends, the owner removes the access and the VA confirms it.",
    steps: [
      "Ask the client for a password manager with shared items and named users.",
      "Request minimum access in writing with the level and duration.",
      "Prefer a separate user account and enable multi-factor authentication.",
      "Keep an access register and never accept passwords through chat.",
      "Confirm removal of access when the task ends and report incidents immediately.",
    ],
    exercise:
      "Write an access request message for the practice accounts and an access register with at least four rows, including levels and end dates.",
    portfolio: "An access request template and an access register.",
    mistake:
      "Keeping credentials in chat or a shared document makes them easy to leak and hard to remove.",
    question:
      "A client sends you a password in a chat message. What is the best response?",
    options: [
      "Use it and delete the message",
      "Share it with a colleague to help",
      "Ask them to share it through the password manager and to change the password that was sent",
    ],
    answer: 2,
    explanation:
      "Passwords sent by chat can be seen and stored in many places. A shared vault is safer and traceable, and the exposed password should be changed.",
    ready: [
      "Request least access in writing",
      "Use shared vaults and separate accounts",
      "Keep an access register",
      "Confirm access removal and report incidents",
    ],
    tools: "A team password manager and the access register sheet.",
    taglish:
      "Susi ng negosyo ang ibinibigay ng client sa VA, kaya mas maingat dapat. Hilingin na gumamit sila ng password manager na may shared vault. Humingi ng pinakamaliit na access nang nakasulat: anong account, anong level, at hanggang kailan. Mas mabuti ang hiwalay na user account sa bawat tool. I-on ang multi-factor authentication at huwag tumanggap o magpadala ng password sa chat o email. Magtago ng access register, at kapag tapos na ang trabaho, tiyaking inalis ang access. Mag-report agad ng kahina-hinalang login.",
    proTips: [
      "Offer a one-line access request template so the client can say yes quickly.",
      "Check the access register at the end of every month and ask for removals you no longer need.",
    ],
    deepDive: [
      [
        "Separate accounts are traceable",
        "When each person has their own login, the activity log shows who did what. If someone leaves, the client removes that account without resetting everything else.",
      ],
      [
        "Respond to a security problem",
        "If you click a suspicious link, lose a device, or see an unknown login, tell the client immediately, change affected passwords through the client's process, and write down what happened. Reporting early limits harm.",
      ],
    ],
    practiceData:
      "Fictional accounts: order form (edit), email inbox (read and reply), social scheduler (draft only), payment dashboard (client says 'just use my login'). Project length: three months. Owner prefers sending passwords in chat.",
    modelAnswer:
      "The request asks for shared password manager items: form edit, inbox read and reply, scheduler draft only, each with an end date of three months. The payment dashboard is declined; the VA asks for no access or view-only access through a separate user if truly needed. The message explains that passwords should not be sent in chat and asks for multi-factor authentication. The register lists account, level, owner, granted date, and end date.",
  },
  {
    title: "Record clear screen-recorded SOPs",
    goal: "Create short video walkthroughs with scripts and written backups that others can follow.",
    prereq: "SOPs, documentation, and handoff lessons.",
    teach:
      "A short screen recording can teach a task faster than a long document, but only when it is prepared. Before recording, decide who will watch it and what they should be able to do afterward. Write a short script or bullet list, close unrelated windows and notifications, and use fictional or masked data so private information never appears. Test your microphone. Record one task per video and keep it brief, usually under five minutes. Say what you are about to do, show it at a steady pace, and name any setting or button as you click it. Mention the common mistake and how to fix it. End by stating what the finished result should look like. Give each recording a clear title and store it in the client's approved folder with a link in the SOP, because a video alone is hard to search and update. Add a written summary with the steps and the date, so a reader can skim. Check access to the video, because broken permissions waste time. Update or retire a recording when the tool or process changes, and note the version. Ask a new person to follow the video as a test and fix anything unclear.",
    example:
      "The fictional bakery needs a guide for updating the pickup times on the order form. The VA writes six bullet points, masks the customer data, and records a three-minute video. A new helper follows it and gets stuck at one setting, so the VA re-records that part and adds a written summary.",
    steps: [
      "Decide the learner and the task outcome, then write a short script.",
      "Prepare a clean screen with fictional or masked data and test the audio.",
      "Record one task, narrate each click, and mention a common mistake.",
      "Store the video in the approved folder and link it from a written SOP.",
      "Test it with a new person, then fix and version the recording.",
    ],
    exercise:
      "Write the script, masked data plan, and written summary for a three-minute recording of the practice task, and list the test you would run with a new person.",
    portfolio:
      "A script, written summary, and test notes for a short SOP video.",
    mistake:
      "Recording with real customer data on the screen exposes private information in a file that may be widely shared.",
    question:
      "Your recording shows a real customer's name and address. What should you do?",
    options: [
      "Share it anyway; it is internal",
      "Delete it, re-record with fictional or masked data, and store it in the approved folder",
      "Blur it only if the client complains",
    ],
    answer: 1,
    explanation:
      "Private data in a recording can spread beyond the intended audience, so re-record with masked or fictional data.",
    ready: [
      "Plan a script for one task",
      "Mask private data",
      "Store and link the video with a written SOP",
      "Test with a new person and version it",
    ],
    tools:
      "Loom or the built-in screen recorder, and Docs for the written SOP.",
    taglish:
      "Mas mabilis magturo ang maikling screen recording, pero kailangan ng paghahanda. Alamin muna kung sino ang manonood at ano ang dapat nilang magawa. Sumulat ng maikling script, isara ang ibang window, at gumamit ng pekeng o tinakpang data para hindi lumabas ang private na impormasyon. Isang task lang bawat video at wala pang limang minuto. Banggitin ang bawat click at ang karaniwang pagkakamali. Ilagay ang video sa aprubadong folder at i-link sa nakasulat na SOP. Ipasubok sa bagong tao at i-update kapag nagbago ang proseso.",
    proTips: [
      "Write 'what done looks like' at the end of the script and show it on screen.",
      "Add the recording date to the title so people know when it may be outdated.",
    ],
    deepDive: [
      [
        "Prepare the screen",
        "Use a demo account or sample data, close notifications, and hide bookmarks or tabs that show private information. Check the whole screen before you press record.",
      ],
      [
        "Keep videos maintainable",
        "Short videos are easier to replace than a long one. Keep a list of videos with their version and owner, and review them when a tool updates its screens.",
      ],
    ],
    practiceData:
      "Fictional task: Update pickup hours on the order form. Steps: open the form editor, find the pickup field, change the options to Saturday 9–11 AM, save, and preview. Common mistake: forgetting to click Publish. The sample sheet shows real customer names in the next window.",
    modelAnswer:
      "The script lists the six steps, says the learner will be able to update the hours, and warns about forgetting Publish. The sheet with customer names is closed and a demo form is used. The video is about three minutes, titled with the date, stored in the approved folder, and linked from a written SOP summary. A new person tests it and any unclear step is re-recorded.",
  },
  {
    title: "Plan business travel with checks and contingencies",
    goal: "Prepare an itinerary that is accurate, approved, and ready for delays.",
    prereq: "Meetings and travel, calendar, and scheduling lessons.",
    teach:
      "Business travel planning is a chain of details that must fit together. Start with the purpose, dates, budget, and the traveler's preferences and limits, such as airline, seat, dietary needs, or accessibility. Compare options on total cost, time, and risk, and present two or three choices with the key trade-offs. Never book without the traveler's or client's approval, and check any payment rules. Verify names exactly as they appear on identity documents, and confirm passport validity and any visa or entry requirements through official government sources, since rules change. Build an itinerary that lists, in order, each flight or train with times and time zones, accommodation with address and check-in time, ground transport, meetings, and contact numbers. Leave realistic connection times and buffers for delays. Prepare a contingency: what happens if a flight is canceled, a meeting moves, or the traveler loses a document. Share the itinerary in one trusted place with the booking references, and send a short summary to the traveler. Store identity documents and payment details securely and share only what each provider needs. Monitor changes before the trip and confirm the day before. After the trip, collect receipts and reconcile expenses according to the client's policy.",
    example:
      "A fictional founder must attend a meeting in another city on Tuesday at 10 AM. The VA presents two flight options, one cheaper with a tight 35-minute connection and one slightly more expensive with a safer connection. The founder approves the safer option. The VA lists hotel, transport, and a backup train plan, and confirms the day before.",
    steps: [
      "Collect purpose, dates, budget, preferences, and limits from the traveler.",
      "Compare two or three options on cost, time, and risk.",
      "Get approval before any booking and confirm exact names and document validity.",
      "Build an ordered itinerary with time zones, addresses, references, and contacts.",
      "Add a contingency plan, confirm the day before, and reconcile expenses after.",
    ],
    exercise:
      "Prepare an itinerary and two-option comparison for the practice trip, with a contingency plan and a list of facts you would verify with official sources.",
    portfolio:
      "A sample itinerary with a contingency plan and a verification list.",
    mistake:
      "Booking a very tight connection to save money can cost far more if the traveler misses the meeting.",
    question:
      "A flight with a 35-minute connection is cheaper than one with a safer connection. What should you do?",
    options: [
      "Present both options with the trade-offs and let the traveler approve",
      "Book the cheaper one without asking",
      "Book both in case",
    ],
    answer: 0,
    explanation:
      "The traveler or client decides trade-offs between cost and risk. Present clear options and book only after approval.",
    ready: [
      "Compare options on cost, time, and risk",
      "Verify names and entry requirements from official sources",
      "Build an ordered itinerary with buffers",
      "Prepare contingencies and secure documents",
    ],
    tools:
      "Airline and rail sites, a calendar, and a shared itinerary document.",
    taglish:
      "Ang business travel ay hanay ng detalyeng dapat magkasya. Kunin muna ang layunin, petsa, budget, at kagustuhan ng biyahero. Ihambing ang dalawa o tatlong opsyon ayon sa gastos, oras, at risk, at huwag mag-book nang walang approval. Tiyaking eksakto ang pangalan ayon sa ID at i-check ang passport at visa requirements sa opisyal na source. Gumawa ng itinerary na may time zone, address, at contact. Maghanda ng plano kung makansela ang flight, at i-confirm isang araw bago.",
    proTips: [
      "Write every time with its time zone, especially for flights that cross dates.",
      "Keep a copy of the itinerary and key contacts offline in case of poor signal.",
    ],
    deepDive: [
      [
        "Build in buffers",
        "Allow extra time for connections, transfers, and check-in. A plan that works only when nothing goes wrong is not a plan. Show the traveler where the buffers are.",
      ],
      [
        "Verify requirements properly",
        "Entry rules, visas, and health requirements are set by governments and change. Use official sites and record the date you checked. Tell the traveler to confirm for themselves as well.",
      ],
    ],
    practiceData:
      "Fictional trip: founder travels Monday to Tuesday to a meeting Tuesday 10 AM at 20 Harbor Rd. Option A round-trip flight: 120, 35-minute connection, arrives 8:30 AM. Option B round-trip flight: 150, 90-minute connection, arrives 7:15 AM. Hotel near the venue: 95 per night. Budget approved up to 400 total. Traveler prefers aisle seats.",
    modelAnswer:
      "Option A costs 120 but has a tight 35-minute connection and a late 8:30 AM arrival that risks the 10 AM meeting; Option B costs 150 with a safer connection and 7:15 AM arrival. With one hotel night at 95, the totals are 215 and 245 including the hotel, both within the 400 budget, so the VA recommends B but waits for the founder's approval. The itinerary lists times with time zones, hotel address, ground transport, and a backup train or later flight plan. Names and documents are verified.",
  },
];
const adminProModuleIndex = modules.length;
modules.push([
  "Admin power tools",
  "Inbox systems, booking links, shared access, screen-recorded SOPs, and business travel.",
  "Professional edge",
  adminProLessons,
]);
adminProLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${adminProModuleIndex}-${index}`,
    mi: adminProModuleIndex,
    li: index,
  });
});
