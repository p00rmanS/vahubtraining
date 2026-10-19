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
];
