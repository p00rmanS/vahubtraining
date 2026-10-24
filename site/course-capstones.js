/** Advanced simulations: full-scale practice that combines earlier skills. Append IDs to preserve existing progress. */
const capstoneLessons = [
  {
    title: "Run a full working day for two clients",
    goal: "Plan, time-block, and communicate through a realistic day with competing deadlines and a surprise request.",
    prereq: "Prioritizing, capacity, async updates, and quality check lessons.",
    teach:
      "A real working day is a stream of planned tasks and interruptions, and the skill is staying accurate and honest while it flows. Start the day by listing every commitment with its deadline, its estimated time including review, and its client. Add the unavoidable background work such as inbox triage and writing updates. Compare the total with your available minutes, and keep a buffer of about a fifth for surprises. Then block time: put the earliest and highest-impact deadlines first, group similar work together, and protect the review time rather than squeezing it. Do the work in that order, and update the plan when something changes instead of silently drifting. When a new request arrives, estimate it before replying, add it to the list, and see whether it fits; if it does not, offer options such as a later delivery, a smaller scope, or swapping with a lower-priority item. Send a short end-of-day update to each client with done, next, and blocked. Check each deliverable with the quality checklist before sending, even when you are behind, because rushed errors cost more time than the checks. Close the day by recording time against each client and noting what to adjust tomorrow.",
    example:
      "At 9 AM the fictional VA lists five tasks totaling 270 minutes of an 8-hour day, plus a 96-minute buffer. At 2 PM the cafe owner asks for a 120-minute research brief by end of day. The VA calculates that 390 minutes of work plus the buffer exceeds the day, replies with two options, and the owner chooses delivery tomorrow morning. The VA still sends both clients a clear end-of-day update.",
    steps: [
      "List every commitment with deadline, time estimate including review, and client.",
      "Add background work and a buffer of about a fifth, and compare with available minutes.",
      "Block the day by deadline and impact, protecting review time.",
      "Estimate any new request before replying and offer options if it does not fit.",
      "Send done, next, blocked updates, record time per client, and note adjustments.",
    ],
    exercise:
      "Plan the practice day: total the minutes, add the buffer, block the schedule, and write the reply to the 2 PM request and the end-of-day update for one client.",
    portfolio:
      "A time-blocked daily plan and an end-of-day update for two clients.",
    mistake:
      "Accepting a new request without estimating it quietly breaks earlier promises.",
    question:
      "A new 120-minute request arrives when your day is already nearly full. What should you do first?",
    options: [
      "Accept it and work late",
      "Ignore it until tomorrow",
      "Estimate it against remaining capacity, then offer the client options such as later delivery or smaller scope",
    ],
    answer: 2,
    explanation:
      "Compare the request with real capacity, then let the client choose among honest options instead of overpromising.",
    ready: [
      "Total commitments with review and buffer",
      "Block work by deadline and impact",
      "Respond to new requests with options",
      "Send clear end-of-day updates",
    ],
    tools: "A calendar or spreadsheet, a timer, and a notes template.",
    taglish:
      "Ang tunay na araw ng trabaho ay halo ng planadong gawain at biglaang kahilingan. Magsimula sa listahan ng bawat commitment na may deadline, estimate kasama ang review, at client. Idagdag ang background work at isang-kalimang buffer, tapos ihambing sa oras na meron ka. I-block ang oras ayon sa deadline at epekto at protektahan ang review. Kapag may bagong request, i-estimate muna bago sumagot at mag-alok ng opsyon kung hindi kasya. Magpadala ng done, next, blocked na update at itala ang oras bawat client.",
    proTips: [
      "Estimate a new request out loud with its review time before saying yes; it takes a minute and saves a late night.",
      "Keep a 'not today' list so postponed work stays visible and does not disappear.",
    ],
    deepDive: [
      [
        "Build the plan from real numbers",
        "Use your own tracked times, not hopes. A 20-record check at four minutes each is 80 minutes plus review. Write each line as task, client, minutes, and deadline. When the totals are visible, trade-offs become obvious and calm.",
      ],
      [
        "Hold the line on quality",
        "When you are behind, the temptation is to skip checks. Instead, cut scope with the client's agreement or move a deadline early. Delivering a smaller, checked result is far better than delivering everything with errors.",
      ],
      [
        "Close the day properly",
        "Record time per client, mark tomorrow's first three tasks, and note one thing that took longer than expected. A five-minute close makes tomorrow's plan faster and your estimates more accurate over weeks.",
      ],
    ],
    practiceData:
      "Fictional day: 8 hours (480 minutes). Client A (bakery): check 20 order records at 4 minutes each plus 20 minutes review, due 5 PM; weekly report 45 minutes, due today. Client B (cafe): 6 customer replies at 10 minutes each plus 15 minutes review, due noon. Inbox triage for both: 30 minutes. Planning and updates: 20 minutes. Buffer: one fifth of the day. At 2 PM, Client B asks for a 120-minute research brief by end of day.",
    modelAnswer:
      "Task totals: records 80 + 20 = 100; report 45; replies 60 + 15 = 75; inbox 30; planning 20, for 270 minutes. A one-fifth buffer is 96 minutes, so 366 of 480 is planned. The 2 PM request adds 120, making 390 plus the 96-minute buffer, which is 486 and more than 480. The reply offers delivery tomorrow morning, a smaller 60-minute brief today, or swapping with the replies already promised. Schedule order: replies by noon, records and report by 5 PM, then update both clients.",
  },
  {
    title: "Handle a crisis day when three problems hit at once",
    goal: "Rank simultaneous problems by harm, contain the worst first, and communicate calmly with the right people.",
    prereq:
      "Incident triage, privacy, automation monitoring, and difficult conversation lessons.",
    teach:
      "Sometimes several problems land together, and the risk is spending time on the loudest one while a quieter, more serious one grows. Begin by writing each problem in one line with what is affected, who is affected, and whether harm is still spreading. Rank them using harm to people and data first, then whether the harm is still growing, then deadlines, and only then how loud the complaint is. Privacy exposure and safety come before inconvenience. Contain before you fix: stop the spread by pausing a workflow, recalling or restricting access where authorized, and preserving evidence, then tell the designated owner promptly with facts. Split communication by audience: the owner needs facts and options, a complaining customer needs acknowledgement and a next step, and your own team needs clear instructions. Keep each message short and factual, and set times for the next update. Work in short cycles, rechecking the ranking as new facts appear. Do not delete evidence, guess causes, or promise outcomes you cannot control. After the crisis passes, write a brief review for each incident with cause, effect, and one prevention step, and look after yourself, since a stressful day can lead to more mistakes if you rush the recovery.",
    example:
      "At 10 AM three things happen for the fictional bakery: the VA sent an order list with phone numbers to the wrong person, a customer posted a public complaint about a late order, and an automation created twelve duplicate reminder drafts that have not been sent. The VA ranks the privacy incident first, pauses the automation second, and replies to the complaint third. By 11 AM the owner has the incident report, the automation is off, and the customer has a calm holding reply.",
    steps: [
      "Write each problem in one line with what and who is affected and whether harm is growing.",
      "Rank by harm to people and data, then growth, then deadline, then noise.",
      "Contain the worst first and notify the owner with facts and options.",
      "Send audience-specific messages and set the next update time.",
      "Recheck the ranking, then write a short review and one prevention step per incident.",
    ],
    exercise:
      "Rank the three practice problems with reasons, write the incident message to the owner, the customer holding reply, and the first containment step for the automation.",
    portfolio:
      "A crisis-day ranking, an incident report, and calm holding messages.",
    mistake:
      "Answering the loudest complaint first can leave a data exposure unreported while it grows.",
    question:
      "A public complaint is loud, but you also sent private data to the wrong person. What comes first?",
    options: [
      "Contain and report the data exposure to the owner, then reply to the complaint",
      "The public complaint, because others can see it",
      "Delete the email and say nothing",
    ],
    answer: 0,
    explanation:
      "Harm to people and data outranks noise. Report and contain the exposure first, then handle the complaint with a calm holding reply.",
    ready: [
      "Rank problems by harm and growth",
      "Contain before fixing and preserve evidence",
      "Write audience-specific messages",
      "Review each incident with one prevention step",
    ],
    tools:
      "The incident policy, a messaging channel to the owner, and a review template.",
    taglish:
      "Minsan sabay-sabay ang problema, at ang panganib ay maubos ang oras sa pinakamaingay habang lumalala ang mas seryoso. Isulat ang bawat problema sa isang linya: ano at sino ang apektado at kung lumalala pa. I-rank ayon sa pinsala sa tao at data, kung lumalaki pa, deadline, at saka lang ang ingay. I-contain muna bago ayusin at sabihan ang owner nang may facts at opsyon. Iba-iba ang mensahe sa owner, customer, at team. Huwag magbura ng ebidensya o manghula. Pagkatapos, magsulat ng maikling review.",
    proTips: [
      "Write the ranking and the reason before acting; under stress, the first loud thing wins unless you decide first.",
      "Send the owner a one-line heads up before the full report so they know something is coming.",
    ],
    deepDive: [
      [
        "Rank with a simple rule",
        "Ask three questions in order: could someone be hurt or exposed, is it still spreading, and what happens if I wait an hour. The answers rank most crises correctly in under two minutes.",
      ],
      [
        "Contain without overreaching",
        "Pause only what you are authorized to pause. If you are not sure, tell the owner what you propose and ask. Preserve the evidence, such as screenshots and logs, because they help the owner decide what to do next.",
      ],
      [
        "Communicate by audience",
        "The owner gets facts, what you did, and options. A customer gets acknowledgement and a time for the next update. Never mix the two, and never share private details with the customer or in public.",
      ],
    ],
    practiceData:
      "Fictional morning at the bakery: 1) At 9:50 you sent the order list (names and phone numbers of 18 customers) to the wrong address. 2) At 10:05 a customer posts publicly that their cake was 40 minutes late and threatens a bad review. 3) At 10:10 you find 12 duplicate reminder drafts from an automation; none are sent. Estimates: incident report 20 minutes, pause automation 10, reply to customer 15, cleanup of drafts 30. The owner is reachable by phone.",
    modelAnswer:
      "Rank 1 the data exposure (18 customers' phone numbers, possible spread), 2 the automation (still creating drafts, no harm yet), 3 the complaint (visible but not exposing data). Plan: notify the owner immediately by phone with a one-line heads up, send the incident report (20 minutes), pause the automation (10 minutes) while preserving evidence, send a calm holding reply to the customer (15 minutes), and clean up drafts later (30 minutes). Total about 75 minutes, with a review and one prevention step for each incident afterward.",
  },
  {
    title: "Close the month across three clients",
    goal: "Invoice, report, and plan renewals for several clients accurately and without mixing their data.",
    prereq: "Invoicing, monthly close, client reviews, and capacity lessons.",
    teach:
      "Month-end is where small habits are tested: tracked time, honest invoices, clear reports, and fair renewals, repeated for each client without mixing them up. Start a close checklist for each client and work through one client at a time to avoid crossed wires. For each, compare tracked hours with the agreement, apply rounding rules, and identify overages that need approval before billing. Check that every deliverable promised for the month was delivered; do not invoice for work not finished unless the agreement says so. Build the invoice from the tracker, with period, itemized services, amounts, due date, and payment method. Prepare a short report: what was delivered, results with evidence, open items, and one recommendation. Ask for approval of overages in writing before invoicing them. Compare next month's expected work with your capacity across all clients and flag conflicts early. For renewals, propose scope and price changes with a reason and a date, and let the client decide. Store each client's files in their own folder and double-check the recipient and attachments before sending. Record what you learned about estimates, and update your rates or packages only with proper notice. When you finish, back up your records and confirm the invoices match the tracker.",
    example:
      "The fictional VA has three clients. Client A has an 8-hour retainer at 14 per hour and 9.5 hours tracked, so 1.5 hours of overage needs approval. Client B has a 150 package with one report not yet delivered. Client C is hourly at 12 with 6.25 hours tracked. The VA invoices C for 75, asks A to approve the 21 overage, and tells B the invoice will go out when the fourth report is delivered.",
    steps: [
      "Create a close checklist per client and work one at a time.",
      "Compare tracked hours and deliverables with each agreement and find overages.",
      "Request written approval for overages before invoicing them.",
      "Build invoices and short reports from the tracker and check recipients and attachments.",
      "Compare next month's work with total capacity and propose renewal changes with notice.",
    ],
    exercise:
      "Calculate each client's invoice from the practice data, write the overage approval request, flag the capacity conflict, and note what you will not invoice yet.",
    portfolio:
      "A multi-client month-end checklist and sample invoice calculations.",
    mistake:
      "Billing an overage without approval, or invoicing for undelivered work, creates disputes.",
    question:
      "A retainer client went 1.5 hours over. What should you do before invoicing the extra time?",
    options: [
      "Include it on the invoice without comment",
      "Write it off silently",
      "Ask for written approval of the overage first and then invoice it",
    ],
    answer: 2,
    explanation:
      "Overages should be approved, so the invoice never surprises the client and your records show consent.",
    ready: [
      "Work one client at a time with checklists",
      "Match invoices to trackers and agreements",
      "Get overage approval before billing",
      "Plan next month's capacity across clients",
    ],
    tools:
      "A time tracker, invoice template, and a per-client folder structure.",
    taglish:
      "Ang month-end ang sumusubok sa maliliit na gawi: tracked time, tapat na invoice, malinaw na report, at patas na renewal para sa bawat client nang hindi nagkakahalo. Gumawa ng close checklist kada client at tapusin nang isa-isa. Ihambing ang tracked hours at deliverables sa agreement at tukuyin ang overage na kailangan ng approval bago singilin. Huwag mag-invoice ng hindi pa naihahatid. Maghanda ng maikling report. Ihambing ang susunod na buwan sa kabuuang capacity at mag-propose ng renewal na may abiso.",
    proTips: [
      "Check the recipient and attachment names twice when sending invoices to several clients in a row.",
      "Keep a month-end template per client so the same steps run every time.",
    ],
    deepDive: [
      [
        "Work one client at a time",
        "Open only that client's folder, tracker, and agreement. Finish the invoice and report, close the folder, then move to the next. This single habit prevents most cross-client mistakes.",
      ],
      [
        "Match money to the agreement",
        "Retainer plus approved overage, fixed package after delivery, or hourly with rounding: each follows its own rule. Write the calculation beside each invoice so you can explain every number.",
      ],
      [
        "Plan the next month honestly",
        "Add next month's expected hours for all clients and compare with your available time and buffer. If a client wants more hours, say yes only if it fits, otherwise propose a later start or a smaller scope.",
      ],
    ],
    practiceData:
      "Fictional month: Client A retainer 8 hours at 14 per hour (112), tracked 9.5 hours. Client B fixed package 150 for four weekly reports; three delivered, the fourth due tomorrow. Client C hourly at 12 per hour, tracked 6.25 hours (agreement rounds to 0.25). Next month expected: A 8 hours, B 6 hours, C 12 hours. Available: 80 hours with a 20% buffer.",
    modelAnswer:
      "Client A: 112 for the retainer; the 1.5 hours over is 21 at 14 per hour and needs written approval, so the total would be 133 if approved. Client B: the 150 invoice waits until the fourth report is delivered (or the agreement says otherwise). Client C: 6.25 × 12 = 75. Next month hours are 8 + 6 + 12 = 26, well within 80 minus a 16-hour buffer (64 usable), so C's 12 hours fit. The VA sends A the overage request, C the invoice, and B a note about the delivery date.",
  },
  {
    title: "Write your VA business plan and set a fair rate",
    goal: "Turn your skills into a simple, honest plan covering service, rate, clients, systems, and goals.",
    prereq: "Pricing, retainers, 90-day plan, and operating system lessons.",
    teach:
      "A business plan for a one-person VA business does not need to be long; it needs to be honest and usable. Start with the service: who you help, what you deliver, and what you do not do. Next, set your rate from real numbers. Add your monthly needs, your tool and internet costs, and any taxes or fees that apply, then divide by the hours you can truly bill, which is fewer than the hours you work because of admin, learning, and gaps between clients. The result is your minimum rate; set your target above it to leave room for slow months. Check the market using sources you can name, and adjust only with evidence. Define your offers, for example an hourly rate, a monthly retainer, and a fixed package, with limits and exclusions. Plan how you will find clients each week, which proof you will show, and how you will vet leads. List your systems: tracker, invoicing, time tracking, password manager, backups, and templates. Add safety nets: a small reserve, a plan for illness, and a rule for how many hours you will not exceed. Set goals for the next ninety days and the next year with measures you control. Review the plan every quarter, and ask a qualified professional about taxes, registration, and contracts rather than guessing.",
    example:
      "A fictional VA needs 800 per month, spends 60 on tools, and can bill about 60 hours but loses 15 percent to admin and gaps. The usable billable hours are 51, so the floor is 860 divided by 51, about 17 per hour. The VA sets a target of 20 per hour and a package priced so that no work is below the floor.",
    steps: [
      "Describe your service, ideal client, and exclusions in a few lines.",
      "Calculate monthly needs, costs, and truly billable hours to find your minimum rate.",
      "Define two or three offers with limits and set the target above the minimum.",
      "Plan weekly client search activity, proof, vetting, and systems.",
      "Set 90-day and one-year goals and review quarterly with professional advice for taxes and contracts.",
    ],
    exercise:
      "Write your one-page plan using your own numbers or the practice numbers: service, rate calculation, offers, weekly activities, systems, safety nets, and goals.",
    portfolio: "A one-page business plan with a transparent rate calculation.",
    mistake:
      "Setting a rate by copying someone else's number without calculating your own costs can leave you working below sustainable pay.",
    question: "How should you calculate your minimum hourly rate?",
    options: [
      "Copy the lowest rate you see online",
      "Divide monthly needs plus costs by the hours you can truly bill",
      "Guess a number that feels comfortable",
    ],
    answer: 1,
    explanation:
      "Your own costs and truly billable hours give a sustainable floor. Market data then helps set a target above it.",
    ready: [
      "Describe your service and limits",
      "Calculate a minimum rate from real numbers",
      "Define offers and weekly activities",
      "List systems, safety nets, and goals",
    ],
    tools:
      "A spreadsheet for the rate calculation and a one-page document for the plan.",
    taglish:
      "Ang business plan ng solo VA ay hindi kailangang mahaba; kailangan itong tapat at magagamit. Isulat ang serbisyo mo, kung sino ang tinutulungan, at kung ano ang hindi mo ginagawa. Kalkulahin ang rate mula sa totoong numero: buwanang pangangailangan, gastos sa tools at internet, at buwis kung may, hinati sa oras na talagang masisingil. Ang resulta ang pinakamababa mong rate; itakda ang target na mas mataas. Magplano ng lingguhang paghahanap ng client, mga sistema, at safety net. I-review kada quarter at magtanong sa propesyonal tungkol sa buwis at kontrata.",
    proTips: [
      "Keep your minimum rate private and your target rate public; negotiate down only to the minimum, never below.",
      "Write one thing you will say no to, such as unpaid trials; deciding in advance makes it easier to hold.",
    ],
    deepDive: [
      [
        "Find your truly billable hours",
        "If you work 60 hours a month, subtract time for admin, learning, outreach, and gaps. Tracking one month shows the real figure, which is often only 75 to 85 percent of hours worked.",
      ],
      [
        "Offers that match how you work",
        "Hourly fits uncertain work, packages fit defined deliverables, and retainers fit recurring support. Write what is included, the limits, and the price of extras. Fewer, clearer offers are easier to sell and deliver.",
      ],
      [
        "Plan for slow months",
        "Keep a small reserve and a rule for how many weeks of expenses you want saved. Include a plan for illness or a lost client. A plan that works only when everything goes well is not a plan.",
      ],
    ],
    practiceData:
      "Fictional VA: monthly needs 800; tools and internet 60; hours worked 60 per month; 15 percent lost to admin and gaps; target rate 20 per hour; goal: three steady clients in 90 days; one rule: no unpaid trials larger than 30 minutes.",
    modelAnswer:
      "Billable hours = 60 × 0.85 = 51. Minimum rate = (800 + 60) / 51 = 860 / 51, about 16.86, so roughly 17 per hour. The target of 20 per hour leaves a margin of about 3. The plan names the service, offers (hourly, retainer, package) with limits, weekly outreach activity, systems (tracker, invoicing, backups, password manager), a savings reserve, and the 90-day goal of three clients, with a quarterly review and a note to ask an accountant about taxes.",
  },
];

const capstoneModuleIndex = modules.length;
modules.push([
  "Advanced simulations: put it all together",
  "A full day, a crisis day, a month-end, and your own business plan.",
  "Mastery",
  capstoneLessons,
]);
capstoneLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${capstoneModuleIndex}-${index}`,
    mi: capstoneModuleIndex,
    li: index,
  });
});
