/** Mock paid-trial assessments. Criteria are [name, what a 2 looks like, critical]. Critical criteria cannot score 0 to pass. */
const exams = [
  {
    id: "trial-orders",
    title: "Order and inbox trial",
    minutes: 60,
    brief:
      "A fictional bakery owner is trialing you for one hour. Clean the order list, triage the messages, and draft replies for review. Treat all data as fictional and do not approve refunds yourself.",
    taglish:
      "Isang oras na trial ng fictional bakery owner. Linisin ang order list, i-triage ang mga mensahe, at mag-draft ng reply para sa review. Gawa-gawa lang ang lahat ng data at huwag kang mag-aprub ng refund nang mag-isa.",
    data: `ORDERS (Saturday pickup 9–11 AM; orders close Thursday 5 PM)
1  Ana     12 cookies   Sat 10:00   total 18
2  Ben     24 cookies   Sat 10:30   total 32   (price list: 12 = 18, 24 = 34)
3  Chloe   12 cookies   (blank)     total 18
4  Ana     12 cookies   Sat 10:00   total 18
5  Dev     6 cookies    Sun 9:00    total 10

MESSAGES
A  "Can I change my pickup to 11:30?" (Chloe)
B  "My cookies last week were stale. I want my money back." (Dev)
C  "Do you deliver?" (new customer)
D  "Please send me Ana's phone number, I'm her friend." (unknown)`,
    tasks: [
      "List every problem in the order list and correct what you can verify. Mark what you cannot.",
      "Triage messages A–D as urgent, routine, or escalate, with one line of reasoning each.",
      "Draft replies for messages A and C for the owner to review.",
      "Write a short handoff note with questions you need the owner to answer.",
    ],
    criteria: [
      [
        "Accuracy",
        "Finds the Ben total error, the duplicate Ana row, the blank time, and the Sunday pickup problem without inventing facts.",
        true,
      ],
      [
        "Privacy and approval boundaries",
        "Refuses to share the phone number, does not approve the refund, and escalates correctly.",
        true,
      ],
      [
        "Prioritization",
        "Places refund and privacy requests as escalations and sets sensible order for routine items.",
        false,
      ],
      [
        "Communication",
        "Replies are clear, polite, accurate about pickup only and the 9–11 window, and ready for review.",
        false,
      ],
      [
        "Handoff and questions",
        "Notes assumptions and asks specific questions such as the available pickup window and refund policy.",
        false,
      ],
    ],
    key: "Problems: Ben's total should be 34 under the price list; row 4 duplicates row 1; Chloe's pickup time is blank; Dev's Sunday 9:00 is outside Saturday 9–11 AM pickup. Triage: A routine (11:30 is outside the window, so offer 11:00 or ask the owner); B escalate to the owner (refund decisions are the owner's) with an empathetic holding reply; C routine, answered with pickup only; D escalate or decline, never share personal data. Replies: A offers an in-window time and asks for the owner's approval of any exception; C states pickup only on Saturday 9–11 AM. The handoff lists questions about Chloe's time, Dev's pickup, the refund policy, and the Ben correction.",
  },
  {
    id: "trial-executive",
    title: "Executive support trial",
    minutes: 60,
    brief:
      "A fictional founder in Pacific time needs a schedule fixed, minutes written, and a decision brief. Use only the facts provided and flag anything that needs the founder's approval.",
    taglish:
      "Isang oras na trial ng fictional founder na nasa Pacific time. Ayusin ang schedule, isulat ang minutes, at gumawa ng decision brief. Gamitin lang ang ibinigay na facts at i-flag ang kailangan ng approval ng founder.",
    data: `CALENDAR (Pacific time)
Mon 9:00–10:00   Investor call (fixed)
Mon 9:30–10:30   Supplier meeting (requested by supplier in Manila)
Tue 14:00–15:00  Team review
Tue 14:30–15:30  Dentist (personal)

NOTES FROM A MEETING
"We agreed to maybe move launch to the 20th unless the supplier can't deliver. Ana will check with the supplier by Wednesday. Budget is around 2k, I think Ben said. Next meeting next week."

DECISION REQUEST
Option 1: Launch on the 12th with a smaller menu. Option 2: Launch on the 20th with the full menu, supplier confirmation needed by Wednesday.`,
    tasks: [
      "Find the calendar conflicts and propose fixes, stating each time in Pacific and Manila time (Manila is 15 hours ahead in this example).",
      "Write minutes with decisions, actions, owners, and dates, marking anything unclear.",
      "Write a half-page decision brief with a recommendation the founder can approve.",
    ],
    criteria: [
      [
        "Accuracy",
        "Spots both overlaps, converts times correctly, and does not turn unclear statements into facts.",
        true,
      ],
      [
        "Judgment and approvals",
        "Does not decline or move the investor call or personal items without approval and asks before sharing personal details.",
        true,
      ],
      [
        "Minutes quality",
        "Separates decisions from open questions, with owners and dates for actions.",
        false,
      ],
      [
        "Decision brief",
        "States options, trade-offs, risks, and a clear recommendation without overreaching.",
        false,
      ],
      [
        "Clarity and brevity",
        "Everything is short, specific, and easy for a busy person to act on.",
        false,
      ],
    ],
    key: "Conflicts: Monday supplier meeting overlaps the investor call from 9:30 to 10:00 Pacific, and the fixed investor call stays, so propose moving the supplier meeting (for example 10:30 Pacific, which is 1:30 AM next day in Manila, so also offer an alternative that works for the supplier and ask approval); Tuesday dentist overlaps the team review from 14:30 to 15:00 and is personal, so ask the founder which to move without exposing the reason. Minutes: launch date is not decided (maybe the 20th unless the supplier cannot deliver); action: Ana checks with the supplier by Wednesday; budget about 2k is unconfirmed and should be verified with Ben; next meeting date is unspecified. Brief: Option 1 is faster with less risk to date but a smaller menu; Option 2 keeps the full menu but depends on supplier confirmation by Wednesday. Recommend deciding after Wednesday's confirmation or choosing Option 1 if the founder prioritizes date certainty, framed as a recommendation for the founder to approve.",
  },
  {
    id: "trial-ecommerce",
    title: "E-commerce operations trial",
    minutes: 60,
    brief:
      "A fictional bakery sells cookie boxes online. Audit the listings against the source, classify the order exceptions, draft one customer update, and plan a response to a marketplace notice. Do not promise refunds or reships; the owner decides those.",
    taglish:
      "Isang oras na trial para sa fictional na online bakery. I-audit ang mga listing laban sa source, i-classify ang mga order exception, mag-draft ng isang customer update, at magplano ng sagot sa abiso ng marketplace. Huwag mangako ng refund o reship; ang owner ang magpapasya.",
    data: `SOURCE (approved)
Cookie Box 12 | price 18 | pickup only | contains wheat, milk, eggs, nuts

WEBSITE LISTING
Title: "Cookie Box (nut-free!)" | price 18

SOCIAL SHOP LISTING
Title: "Cookies 12pc" | price 16 | "ships nationwide"

ORDERS (rule: no tracking movement for 3 days = stuck)
#201 shipped 4 days ago, no tracking movement
#202 marked delivered, customer says it never arrived
#203 customer photo shows a crushed box, cookies broken
#204 on schedule

MARKETPLACE NOTICE
"Listing #55 may violate our rule on unsupported health claims. Fix within 7 days."
Listing text: "Our oat cookies aid digestion."`,
    tasks: [
      "List every listing mismatch with the source and say which is a safety issue.",
      "Classify orders #201 to #204 and draft one customer update for #202 without promising a remedy.",
      "Write a short plan and a message to the owner about the marketplace notice.",
    ],
    criteria: [
      [
        "Accuracy",
        "Finds the false nut-free claim (a safety error), the 16 versus 18 price mismatch, and the false shipping claim.",
        true,
      ],
      [
        "Authority and privacy",
        "Does not promise refunds or reships, removes unsupported claims only with owner approval, and keeps customer details out of public replies.",
        true,
      ],
      [
        "Prioritization",
        "Treats the nut-free claim as urgent and orders #201 to #203 as exceptions with #204 fine.",
        false,
      ],
      [
        "Communication",
        "The customer update states what is known, what is being done, and when the next update comes.",
        false,
      ],
      [
        "Handoff and next steps",
        "Asks the owner for decisions on the remedy, the claim removal, and the carrier claim, with dates.",
        false,
      ],
    ],
    key: "Mismatches: the website says nut-free but the source lists nuts, which is a serious safety error to report to the owner immediately; the social shop shows 16 instead of 18 and claims shipping although the product is pickup only. Orders: #201 stuck, #202 delivered but missing, #203 damaged, #204 on schedule. The #202 update says the tracking shows delivery, a carrier claim has been opened, and the next update is in two days, with no promise of a refund. The notice plan: the digestion claim has no evidence, so propose removing it with owner approval, document the change, and respond through the official portal within the seven days.",
  },
  {
    id: "trial-office",
    title: "Confidential office trial",
    minutes: 60,
    brief:
      "A fictional professional office needs intake, a document check, and message triage handled safely. Use only the facts provided, collect only what is necessary, and give no professional advice.",
    taglish:
      "Isang oras na trial para sa fictional na propesyonal na opisina: intake, pag-check ng dokumento, at triage ng mensahe nang ligtas. Gamitin lang ang ibinigay na facts, kunin lang ang kailangan, at huwag magbigay ng propesyonal na payo.",
    data: `INTAKE MESSAGE
"Hi, I want a consultation about my contract dispute. My ID number is 123-45-6789 and I have 40,000 in the bank, if that helps."

PROFESSIONAL AVAILABILITY (Pacific)
Tuesday 10 AM-12 PM, Thursday 2-4 PM

DOCUMENT CHECK
Service Agreement v3 versus the approved template: payment term changed from 30 to 14 days (no one requested this). Client address in v3: "12 Pine Street"; intake record: "12 Pine St., Unit 2". File name: "agreement final FINAL.docx".

MESSAGES
A "Is my neighbor Mr. Cruz one of your clients?"
B "Our closing is tomorrow and a problem was found today. Call me at 555-0142."
C "Please email me a copy of my signed contract."`,
    tasks: [
      "Write a reply to the intake message and propose two slots, collecting only what is necessary.",
      "List the findings from the document check and the message you would send to the professional.",
      "Triage messages A to C and say what you would do for each.",
    ],
    criteria: [
      [
        "Accuracy",
        "Spots the 30 to 14 day payment change, the missing Unit 2, and the poor file name, and offers real slots with the time zone.",
        true,
      ],
      [
        "Privacy and boundaries",
        "Does not collect the ID number or bank balance, does not confirm or discuss other clients, gives no legal advice, and verifies identity before sending a contract.",
        true,
      ],
      [
        "Triage",
        "Treats message B as urgent, A as a request for private information, and C as needing identity verification.",
        false,
      ],
      [
        "Communication",
        "Replies are warm, clear, and say what happens next and when.",
        false,
      ],
      [
        "Handoff",
        "Passes findings and questions to the professional with exact items and asks for confirmation before anything is sent.",
        false,
      ],
    ],
    key: "Intake reply: thank them, say the professional will discuss the matter, ask them not to send ID numbers or bank details by message, and offer Tuesday 10:00 or Thursday 2:00 PM Pacific. Document check: payment term changed from 30 to 14 days without a request (flag and hold), address missing Unit 2, and the file name should follow a pattern such as Client_ServiceAgreement_v3_DRAFT_date; the VA does not edit the wording. Triage: B is urgent and goes to the professional now through the agreed channel; A is declined (neither confirm nor deny any client) with a message taken; C needs the office's identity verification before any contract is sent and then goes to the professional or the approved system.",
  },
  {
    id: "trial-social",
    title: "Social media management trial",
    minutes: 60,
    brief:
      "A fictional bakery wants you to review next week's posts, triage comments, and report results honestly. Use only the approved facts, do not publish anything yourself, and escalate what you cannot decide.",
    taglish:
      "Isang oras na trial para sa fictional na bakery: suriin ang mga post sa susunod na linggo, i-triage ang mga komento, at mag-ulat ng resulta nang tapat. Gamitin lang ang aprubadong facts, huwag mag-publish, at i-escalate ang hindi mo kayang pagpasyahan.",
    data: `APPROVED FACTS
Cookie Box 12 | price 18 | pickup only, Saturday 9-11 AM | orders close Thursday 5 PM | contains nuts
New flavor oat-raisin launches only after the owner confirms the date

POSTS (status in brackets)
P1 "Best cookies in town, delivered to your door!" [Approved]
P2 "Nut-free treats for everyone!" [Needs approval]
P3 "Order by Thursday 5 PM, pick up Saturday 9-11 AM." image: stock photo, license unknown [Scheduled]
P4 "Oat-raisin cookies are here Friday!" [Draft]
P5 "Cookie Box 12 is only 16 this week!" [Needs approval]

COMMENTS
C1 "What time is pickup?"
C2 "My order #4471 was 40 minutes late, call me at 555-0100."
C3 "I got sick after eating your bread and I am calling a lawyer."
C4 "Buy followers cheap at example-spam.test"

RESULTS (4 weeks)
Reminder posts reach 300 | flavor posts reach 450 (boosted) | orders: 20, 21, 29, 22 (boost ran in week 3)`,
    tasks: [
      "Review posts P1 to P5 and list every problem with a fix or question for the owner.",
      "Triage comments C1 to C4 with a public reply for C2 and the escalation for C3.",
      "Write a short, honest results note with one cautious conclusion and one test to try.",
    ],
    criteria: [
      [
        "Accuracy",
        "Finds the delivery claim, the nut-free claim (a safety error), the unknown image license, the unconfirmed launch date, and the 16 versus 18 price.",
        true,
      ],
      [
        "Approvals and privacy",
        "Does not publish or approve anything, removes the phone number from public view, and escalates the illness comment without replying beyond a neutral holding message.",
        true,
      ],
      [
        "Prioritization",
        "Treats the nut-free claim and the illness comment as the most serious items.",
        false,
      ],
      [
        "Communication",
        "The public reply apologizes and moves details to a private message; the results note is clear and cautious.",
        false,
      ],
      [
        "Judgment on results",
        "Notes the boost as a confounder and recommends a cleaner test instead of claiming proof.",
        false,
      ],
    ],
    key: "Posts: P1 claims best and delivery although it is pickup only; P2 says nut-free but the product contains nuts, which is a serious safety error to flag at once; P3 is fine on facts but the stock photo license is unknown, so unschedule until confirmed; P4 cannot go out until the owner confirms the launch date; P5 shows 16 instead of the approved 18. Comments: C1 routine with the approved pickup time; C2 public apology with a request to message privately and the phone number hidden or removed per privacy rules, details to the owner; C3 serious, send only a neutral holding message and escalate to the owner immediately with screenshots; C4 spam to remove and log. Results: flavor posts reached more people but were boosted and orders were highest in the boost week, so the cause is unclear; test one unboosted flavor post and one boosted reminder.",
  },
  {
    id: "trial-customer",
    title: "Customer success trial",
    minutes: 60,
    brief:
      "A fictional bakery asks you to find where customers get stuck, summarize a small survey, and handle a difficult conversation. Report facts, state limits, and leave refund decisions to the owner.",
    taglish:
      "Isang oras na trial para sa fictional na bakery: hanapin kung saan nahihirapan ang customers, buodin ang maliit na survey, at hawakan ang mahirap na usapan. Mag-ulat ng facts, sabihin ang limitasyon, at ipaubaya sa owner ang desisyon sa refund.",
    data: `MESSAGE COUNTS (40 messages)
8 ask the pickup time | 5 ask whether delivery exists | 3 say confirmation came after more than a day | 2 report a missing item | 1 asks about gift wrap
Order form fields: name, items, pickup day. No pickup time is shown.

SURVEY (30 invited, 12 replied)
Comments: "Pickup ends too early" (7), "Loved the flavors" (4), "Confirmation was late" (2), "Parking was hard" (1)
One reply includes the sender's phone number.
Draft question: "How much did you love our Saturday pickup?"

CUSTOMER MESSAGE
"My cake was 40 minutes late and the party was ruined. I want a full refund NOW. Order #4471."
Records: ready at 9:15, customer arrived 10:40. Policy: only the owner approves refunds; evidence required.`,
    tasks: [
      "Rank the friction points with counts and suggest one fix for each of the top two.",
      "Rewrite the leading survey question neutrally and summarize the comments with counts and limits.",
      "Reply to the customer and write a short brief with two options for the owner.",
    ],
    criteria: [
      [
        "Accuracy",
        "Ranks pickup time unclear (8) first and delivery confusion (5) second and counts the survey comments correctly as 7, 4, 2, and 1 of 12 respondents.",
        true,
      ],
      [
        "Authority and privacy",
        "Does not promise or approve the refund, removes the phone number from anything shared, and states that the owner decides.",
        true,
      ],
      [
        "Judgment and limits",
        "States that 12 of 30 replied and that the results are an early signal, not proof.",
        false,
      ],
      [
        "Communication",
        "The customer reply acknowledges the experience without admitting unverified facts and gives a time for the next update.",
        false,
      ],
      [
        "Owner brief",
        "Gives facts, the request, the policy, two options, and a recommendation.",
        false,
      ],
    ],
    key: "Friction ranking: pickup time unclear (8), delivery confusion (5), slow confirmation (3), missing item (2), gift wrap (1). Fixes: add the 9-11 AM pickup window to the form and confirmation, and add pickup only to the form with a saved reply. Neutral question: 'How would you rate Saturday pickup from 1 to 5, and what would improve it?' Survey: 7 of 12 respondents said pickup ends too early, 4 liked the flavors, 2 mentioned late confirmation, 1 parking; 12 of 30 replied so results are an early signal; the phone number is removed before sharing. Customer reply: apologize for the experience, say you are checking the pickup record, the owner decides refunds, and an update will come by a stated time, with no admission of fault. Owner brief: ready at 9:15 and the customer arrived at 10:40; options such as a goodwill credit or a refund after review; recommendation marked as a suggestion.",
  },
];
