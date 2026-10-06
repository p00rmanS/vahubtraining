// New modules append without changing earlier lesson IDs or progress.
const masteryModules = [
  [
    "Proactive client support",
    "Anticipate needs, prepare decisions, and coordinate stakeholders.",
    "Advanced practice",
    [
      {
        title: "Anticipate needs without overstepping",
        goal: "Spot likely problems and propose a useful next step.",
        prereq: "Core services, scope, and client communication.",
        teach:
          "Proactive support means noticing a relevant need before it becomes urgent. Look for recurring questions, approaching deadlines, unresolved dependencies, and missing information. Separate observation from assumption. Explain the evidence, likely impact, and proposed action. Authority still matters: preparing a draft or checking an agreed source is different from changing a commitment or spending money. Use an action matrix: tasks you may do, tasks you may draft for review, and decisions you must escalate. Ask the client to agree on that matrix. A helpful VA reduces surprises without creating new ones.",
        example:
          "Three orders this week need addresses, and Friday dispatch is approaching. You prepare a list and approved reminder drafts, then ask the owner to authorize sending. You do not change the dispatch date or promise delivery.",
        steps: [
          "Review the tracker for deadlines and repeated exceptions.",
          "Write the evidence and impact in one sentence.",
          "Check your authority before acting.",
          "Prepare a small proposed action and name the approval needed.",
        ],
        exercise:
          "Create a proactive support note for three fictional issues: missing addresses, an overdue supplier reply, and a calendar conflict. Separate approved actions from decisions.",
        portfolio: "A proactive support brief and an action-authority matrix.",
        mistake:
          "Assuming a useful idea is automatically authorized can create unwanted commitments. Confirm the boundary.",
        question:
          "What is appropriate before an unapproved customer message is sent?",
        options: [
          "Send it because you are helping",
          "Prepare the draft and seek the required approval",
          "Change the policy yourself",
        ],
        answer: 1,
        explanation:
          "Proactive preparation can proceed while the actual action stays within the agreed authority.",
        ready: [
          "Identify a risk from evidence",
          "Separate observation from assumption",
          "Propose an owned action",
          "Respect approval boundaries",
        ],
        tools: "Existing client tracker and Docs",
      },
      {
        title: "Prepare a decision-ready executive brief",
        goal: "Give a busy client the information needed for a decision.",
        prereq: "Executive assistance and report writing.",
        teach:
          "A decision brief puts the required decision first. Include the deadline, context, options, costs or tradeoffs, recommendation, and unresolved facts. Keep supporting detail available without burying the decision. Separate verified facts, assumptions, and your interpretation. A recommendation should explain why an option fits the client’s priorities. If the decision owner has not approved it, label it proposed. Check how much review time the owner has and tailor the length. The brief is complete when the recipient knows what to decide, by when, and what happens if the decision waits.",
        example:
          "Decision needed by Thursday noon: choose one of two fictional delivery options. A costs 100 and meets the deadline; B costs 90 but timing is unconfirmed. Recommend A if certainty matters more than the 10 saving, while flagging that B needs confirmation.",
        steps: [
          "Write the decision and deadline at the top.",
          "List two realistic options using the same criteria.",
          "State the tradeoff and recommendation with evidence.",
          "Identify the owner and next action after approval.",
        ],
        exercise:
          "Write a brief of no more than 200 words comparing two fictional event venues, including total cost, capacity, date availability, and cancellation uncertainty.",
        portfolio:
          "A concise decision brief with a supporting comparison table.",
        mistake:
          "A long information dump transfers the analysis back to the client. Make the actual decision clear.",
        question: "Which item should be prominent in a decision brief?",
        options: [
          "Every fact you found",
          "The decision needed, owner, and deadline",
          "An unexplained recommendation",
        ],
        answer: 1,
        explanation:
          "A clear decision and timing help the client act on the supporting evidence.",
        ready: [
          "Name the decision and owner",
          "Compare consistent criteria",
          "Label uncertainty",
          "Explain a recommendation",
        ],
        tools: "Docs and an existing comparison tracker",
      },
      {
        title: "Coordinate stakeholders and handoffs",
        goal: "Keep a multi-person task moving with clear ownership.",
        prereq: "Meetings, task coordination, and dependencies.",
        teach:
          "A stakeholder is a person affected by the work or needed to complete it. Coordination requires knowing who does the task, who approves it, who provides input, and who needs an update. A handoff transfers an output with enough context for the next person to use it. Include the latest version, status, required next action, due date, and known exceptions. For critical handoffs, confirm receipt rather than assuming that sending a message is enough. Escalate stalled dependencies before they threaten delivery. Avoid sending every detail to everyone; share what each person needs within the client’s permissions.",
        example:
          "The designer provides menu graphics, the owner approves prices, and the VA prepares captions. The VA’s handoff names the approved price version and missing photo permission. Publishing waits until both dependencies are resolved.",
        steps: [
          "Map task owners, approvers, and input providers.",
          "Identify what each handoff must contain.",
          "Set a confirmation and follow-up time.",
          "Escalate a late dependency with its delivery impact.",
        ],
        exercise:
          "Build a six-task launch plan involving an owner, designer, supplier, and VA. Write two handoff messages and a stalled-dependency escalation.",
        portfolio: "Stakeholder map, dependency tracker, and handoff samples.",
        mistake:
          "Everyone being responsible can mean no one is responsible. Name one owner per action.",
        question: "What confirms a critical handoff is usable?",
        options: [
          "The message was sent",
          "The recipient confirms receipt and has the required information",
          "The file has a colorful name",
        ],
        answer: 1,
        explanation:
          "Receipt and usable context reduce the risk of a silent stall.",
        ready: [
          "Assign clear ownership",
          "Map dependencies",
          "Package usable handoffs",
          "Set follow-up dates",
        ],
        tools: "Client task tracker and agreed communication channel",
      },
      {
        title: "Plan an event without missing dependencies",
        goal: "Build a practical event checklist with approvals and contingencies.",
        prereq: "Research, scheduling, and stakeholder coordination.",
        teach:
          "Event support brings together time, people, venue or meeting platform, materials, and communication. Work backward from the event date. Confirm the purpose, audience, attendance estimate, budget authority, accessibility needs, and approval owner. A run of show is a timed list of what happens, who leads it, and what materials are needed. Prepare a contingency for likely failures such as a missing speaker or broken meeting link. Keep attendee information private and share it only as agreed. Research options and prepare bookings, but obtain explicit authority before purchases or commitments.",
        example:
          "For a 30-minute online workshop, schedule a five-minute introduction, 15-minute demonstration, and ten-minute questions. Confirm the presenter, test the link, assign a backup host, and send approved joining instructions.",
        steps: [
          "Confirm objectives, timing, owners, and constraints.",
          "Build a backward checklist and approval deadlines.",
          "Create a run of show and technical test plan.",
          "Write a contingency and attendee follow-up plan.",
        ],
        exercise:
          "Plan a fictional 30-minute workshop for 12 attendees. Include invitations, run of show, access checks, a backup plan, and follow-up ownership.",
        portfolio: "An event support pack with a tested checklist.",
        mistake:
          "A venue or platform reservation is not the whole event plan. People, materials, and contingencies still need owners.",
        question: "Before paying for an event booking, what is needed?",
        options: [
          "A reasonable guess at the budget",
          "The required purchasing authorization and verified terms",
          "Only a draft agenda",
        ],
        answer: 1,
        explanation:
          "Purchasing authority and confirmed terms protect the client’s commitments.",
        ready: [
          "Plan backward from the event",
          "Assign run-of-show owners",
          "Define contingencies",
          "Separate preparation from purchasing",
        ],
        tools: "Calendar, Docs, and the client’s existing meeting platform",
      },
    ],
  ],
  [
    "Reliability under pressure",
    "Check your work, handle failures, and improve the process.",
    "Advanced practice",
    [
      {
        title: "Build a quality checklist from the client’s standard",
        goal: "Verify the things that matter without checking randomly.",
        prereq: "Quality checks and scope of work.",
        teach:
          "A quality checklist starts with acceptance criteria: what must be true for the client to accept the work. Translate each criterion into a visible check and identify its source. Prioritize checks according to the impact of an error. Names, payment amounts, recipients, permissions, and deadlines may require every-record review. Formatting may be checked with a smaller sample when that is appropriate and agreed. Sampling cannot establish that every record is correct. Separate “checked,” “not checked,” and “exception found.” Deliver a clear exception list rather than hiding unresolved issues behind a claim of completion.",
        example:
          "A 20-order tracker requires unique IDs, correct amounts, and no private information in the shared report. Check all IDs and amounts against the source, verify the total independently, and inspect sharing permissions. A spelling spot-check does not replace amount verification.",
        steps: [
          "List the agreed acceptance criteria.",
          "Map each criterion to a source and check.",
          "Choose full review or justified sampling for each item.",
          "Log exceptions and complete a final delivery check.",
        ],
        exercise:
          "Create a QA checklist for a 20-record order tracker and three customer reply drafts. Explain which checks cover every record and why.",
        portfolio: "A risk-based QA checklist with an exception log.",
        mistake:
          "Checking only the total can miss offsetting errors. Validate important individual records as well.",
        question:
          "Two incorrect amounts cancel out in the total. Is the data accurate?",
        options: [
          "Yes, because the total matches",
          "No, individual values still need correction",
          "Yes, if nobody notices",
        ],
        answer: 1,
        explanation:
          "Matching totals do not prove that the underlying records are correct.",
        ready: [
          "Translate scope into checks",
          "Identify high-impact errors",
          "Explain sampling limits",
          "Keep an exception log",
        ],
        tools: "Source records, tracker, and Docs",
      },
      {
        title: "Version control and recovering a bad change",
        goal: "Restore work carefully while preserving useful updates.",
        prereq: "File organization and spreadsheets.",
        teach:
          "Version control tracks changes so you can identify and recover earlier work. In ordinary VA tools, version history, dated copies, and change logs may be enough. Before a risky edit, preserve the source or confirm that version history is available. If a change goes wrong, stop further edits, identify the affected range or file, and determine which later changes are valid. Restoring an entire file can erase someone else’s updates. Coordinate with collaborators before restoring and verify the recovered result. Record what was changed, why, and which version is current. Do not promise recovery when you have not checked the available history.",
        example:
          "A status cleanup accidentally changes 12 rows. Another teammate has added five valid orders since the error. Rather than restoring the whole sheet blindly, compare versions and recover the affected statuses while preserving the new orders.",
        steps: [
          "Preserve a practice copy before changing it.",
          "Make a deliberate small error and identify its scope.",
          "Compare old and current versions for valid later edits.",
          "Recover carefully and verify both affected and preserved records.",
        ],
        exercise:
          "Create a fictional tracker, change three values incorrectly, then add two valid rows. Document a recovery plan that preserves the new rows.",
        portfolio: "Version log and a controlled recovery case study.",
        mistake:
          "Restoring everything may undo valid collaborative work. Check the scope first.",
        question: "What should you check before restoring an old shared file?",
        options: [
          "Only the filename",
          "Whether valid later edits would be lost",
          "The background color",
        ],
        answer: 1,
        explanation:
          "A restoration must account for useful updates made after the older version.",
        ready: [
          "Preserve a recoverable source",
          "Identify the affected scope",
          "Protect valid later changes",
          "Verify the recovered version",
        ],
        tools: "Existing document or spreadsheet version history",
      },
      {
        title: "Triage an incident and communicate clearly",
        goal: "Contain a problem, report its impact, and coordinate recovery.",
        prereq: "Mistake recovery, privacy, and account security.",
        teach:
          "An incident is a problem that disrupts work or may expose information. Examples include a wrong-recipient email, a broken automation, or lost account access. Follow the client’s incident policy. Stop the affected workflow when you are authorized to do so, preserve relevant evidence, and contact the designated owner through a trusted channel. Report confirmed facts, affected items, actions taken, unresolved questions, and the next update time. Do not speculate or conceal the problem. Attempts to fix access or delete records can make recovery harder; act within your authority. After containment, verify recovery and document a prevention step.",
        example:
          "A fictional order report was shared with the wrong practice account. You identify the file and access setting, restrict access if authorized, notify the owner, and record what is known. You do not claim no one viewed it unless evidence establishes that.",
        steps: [
          "Identify the affected data and workflow.",
          "Check the agreed containment and escalation rules.",
          "Write a factual incident update with knowns and unknowns.",
          "Plan verification and a post-incident review.",
        ],
        exercise:
          "Draft an incident report for an automation that created duplicate reminder drafts. Include containment, affected IDs, a recovery proposal, and a follow-up time.",
        portfolio: "Incident response checklist and factual status report.",
        mistake:
          "Confidence without evidence can mislead the owner. Distinguish confirmed impact from possible impact.",
        question: "What belongs in the first incident update?",
        options: [
          "Unverified blame",
          "Confirmed facts, actions taken, unknowns, and next update",
          "A guarantee of zero impact",
        ],
        answer: 1,
        explanation:
          "A factual update helps the authorized owner respond while uncertainty remains visible.",
        ready: [
          "Contain within authority",
          "Escalate to the right owner",
          "Preserve evidence",
          "Report knowns and unknowns",
        ],
        tools:
          "Client incident policy, tracker, and trusted communication channel",
      },
      {
        title: "Find the cause and improve the process",
        goal: "Prevent recurring errors with a targeted change.",
        prereq: "QA and incident triage.",
        teach:
          "Root-cause analysis asks why a problem happened so a process can be improved. Start with a factual timeline and distinguish a symptom from a cause. A late report may result from missing input, unclear ownership, or unrealistic capacity. Repeatedly asking “why” can help, but do not invent answers. Verify a suspected cause with evidence. Choose a prevention step connected to that cause, assign an owner, and define how you will assess the change. Avoid adding a large checklist for every small mistake. A useful improvement reduces the problem without creating unnecessary work.",
        example:
          "Reminder drafts duplicate because the workflow has no unique-order check. “Be more careful” does not fix the cause. Add a draft-exists check using Order ID, test repeated triggers, and measure whether duplicate drafts recur.",
        steps: [
          "Write the factual sequence of events.",
          "Identify a likely cause and supporting evidence.",
          "Choose a proportionate prevention step.",
          "Assign ownership and define a follow-up measure.",
        ],
        exercise:
          "Analyze a late delivery report caused by an approval request sent too late. Propose a deadline rule, escalation trigger, and review measure.",
        portfolio:
          "A short process improvement report with before/after checks.",
        mistake:
          "Blaming a person without examining the process may leave the same failure in place.",
        question: "What is the strongest prevention step for duplicate drafts?",
        options: [
          "Tell everyone to focus harder",
          "Check whether a draft already exists for the unique Order ID",
          "Use a prettier template",
        ],
        answer: 1,
        explanation:
          "The check directly addresses the duplicate trigger rather than merely describing the symptom.",
        ready: [
          "Separate symptoms from causes",
          "Verify a cause with evidence",
          "Define a targeted improvement",
          "Measure whether it helps",
        ],
        tools: "Existing workflow records and tracker",
      },
    ],
  ],
  [
    "Earn trust and grow professionally",
    "Demonstrate value, handle review conversations, and build a focused specialty.",
    "Career mastery",
    [
      {
        title: "Show value without inventing results",
        goal: "Explain your contribution using honest evidence.",
        prereq: "Reports, portfolio, and client updates.",
        teach:
          "Clients value reliable work and useful outcomes. Track what you deliver, the quality standard met, unresolved issues, and observable changes. To report time saved, define the previous process and measurement method; an estimate is not a measured result. Do not attribute sales growth to your work when other factors may explain it. Useful evidence may be fewer missing records, faster response handling, clearer approval tracking, or a documented process. Report limitations and use the client’s agreed metrics. For a practice portfolio, label every dataset and result as fictional.",
        example:
          "“Checked 40 records; corrected six documented format issues; flagged two missing amounts” is supported by a change log. “Saved 10 hours and doubled revenue” is unsupported unless those outcomes were measured appropriately.",
        steps: [
          "Choose one result tied to the client’s goal.",
          "Define its source and measurement method.",
          "Collect a before/after comparison using consistent rules.",
          "Write a contribution statement with limitations.",
        ],
        exercise:
          "Write a weekly value summary from a fictional change log with 40 checks, six corrections, and two unresolved amounts. Separate facts from possible benefits.",
        portfolio:
          "An evidence-based case study with clearly labeled practice results.",
        mistake:
          "Big claims can damage credibility when you cannot support them. Specific evidence is stronger.",
        question: "Which claim is supported by the example?",
        options: [
          "Revenue doubled",
          "Six documented format issues were corrected",
          "Ten hours were definitely saved",
        ],
        answer: 1,
        explanation:
          "The change log supports the corrections; it does not establish revenue or time effects.",
        ready: [
          "Define a useful measure",
          "Cite supporting evidence",
          "Label estimates",
          "Avoid unsupported attribution",
        ],
        tools: "Change log and reporting document",
      },
      {
        title: "Run a client review and renewal conversation",
        goal: "Discuss results, unresolved needs, and a realistic next scope.",
        prereq: "Scope, service packages, and value reporting.",
        teach:
          "A client review compares the work with agreed goals and invites specific feedback. Prepare delivered results, outstanding items, capacity, and proposed changes. Ask what is most useful, what needs improvement, and whether priorities have changed. A renewal is a new or continuing agreement, not automatic permission for unlimited work. Update scope, volume, turnaround, pricing terms, and approval rules as needed. If a client declines, hand over professionally and respect their decision. A review should help both sides decide whether the arrangement still works.",
        example:
          "The bakery now receives twice as many orders. In the review, you show the current volume limit and workload data, then propose either a higher-capacity package or a narrower service with the original capacity. The client chooses before the new scope begins.",
        steps: [
          "Prepare results and unresolved items.",
          "Ask for specific feedback on the agreed service.",
          "Compare new needs with current capacity and scope.",
          "Summarize the agreed next period in writing.",
        ],
        exercise:
          "Create a 15-minute client-review agenda and two renewal options for a fictional client whose weekly order volume grows from 20 to 40.",
        portfolio:
          "Client-review brief and renewal proposal with defined limits.",
        mistake:
          "Treating goodwill as approval for extra work can cause overload. Agree on changed terms.",
        question: "If work volume doubles, what should happen?",
        options: [
          "Silently absorb it indefinitely",
          "Review capacity and agree on updated scope or priorities",
          "Stop communicating",
        ],
        answer: 1,
        explanation:
          "A clear review makes the change manageable and gives the client realistic options.",
        ready: [
          "Prepare evidence for review",
          "Request specific feedback",
          "Offer feasible scope options",
          "Confirm changes in writing",
        ],
        tools: "Scope document, tracker, and meeting agenda",
      },
      {
        title: "Build a credible specialty",
        goal: "Develop proof of skill in one service area.",
        prereq: "Specialization lessons and at least three practice samples.",
        teach:
          "Specialization develops deeper skill in a narrow problem, rather than adding a long tool list. Choose a service and a client type you understand. Map the recurring tasks, common exceptions, quality standard, privacy needs, and required permissions. Practice progressively harder scenarios and get feedback on your deliverables. Study the client’s actual workflow and current official tool guidance when needed. Build samples that show judgment, not just attractive formatting. Describe exactly what you can do today and which tasks require supervision or more training.",
        example:
          "A customer-support specialty might include ticket triage, policy-based reply drafting, exception escalation, and weekly issue reporting. It does not automatically include refund authority or the ability to configure every ticketing system.",
        steps: [
          "Choose one service and a target business type.",
          "Map routine tasks, exceptions, and boundaries.",
          "Build three increasingly difficult samples.",
          "Write a service description grounded in demonstrated skill.",
        ],
        exercise:
          "Create a specialty plan for inbox support, e-commerce administration, or executive coordination. Include five competencies, three sample projects, and two boundaries.",
        portfolio: "Specialty service page and evidence map.",
        mistake:
          "Calling yourself an expert before demonstrating the skill creates an expectation you may not meet.",
        question: "What makes a specialty claim credible?",
        options: [
          "A long list of tool names",
          "Relevant deliverables, explained checks, and clear boundaries",
          "An impressive title alone",
        ],
        answer: 1,
        explanation:
          "Evidence and honest limits help a client assess the service you can actually deliver.",
        ready: [
          "Define a narrow client problem",
          "Map required competencies",
          "Demonstrate difficult cases",
          "State honest service boundaries",
        ],
        tools:
          "Portfolio files, client workflow references, and existing practice tools",
      },
      {
        title: "Create a feedback loop and mastery plan",
        goal: "Improve based on evidence from practice and delivery.",
        prereq: "Complete the core capstone and advanced practice modules.",
        teach:
          "Mastery is ongoing improvement in accuracy, judgment, communication, and reliability. More completed lessons do not automatically mean better work. Keep an error log, note feedback, and identify one high-impact skill to practice next. Use timed simulations after you can complete the task accurately without rushing. Compare your result with explicit acceptance criteria, then revise it. Seek feedback from a reviewer and record what changed. Track repeated weaknesses so the next practice session addresses a real gap. Update your portfolio when the sample becomes stronger, and keep a realistic view of what you can deliver independently.",
        example:
          "Your first tracker has two missing exception notes. You add an exception check and repeat a new dataset. The next tracker is accurate, but your handoff is vague. Your next practice target becomes a clear, actionable delivery message.",
        steps: [
          "Review three recent samples against a shared rubric.",
          "Identify the most important recurring weakness.",
          "Practice one new scenario focused on that weakness.",
          "Get feedback, revise, and record the next training goal.",
        ],
        exercise:
          "Assess a tracker, a support reply, and a client update. Score accuracy, completeness, communication, and authority/privacy from 0–2 each. Write a two-week practice plan for the weakest area.",
        portfolio:
          "Mastery scorecard, revision evidence, and a focused improvement plan.",
        mistake:
          "Repeatedly practicing only what feels easy hides gaps. Use evidence to choose the next challenge.",
        question: "What should determine the next practice task?",
        options: [
          "Only what is most comfortable",
          "A demonstrated gap from checks or feedback",
          "The number of lessons left",
        ],
        answer: 1,
        explanation:
          "Targeted practice addresses the weakness most likely to affect real client work.",
        ready: [
          "Assess samples honestly",
          "Identify a recurring gap",
          "Revise using feedback",
          "Define the next practice goal",
        ],
        tools: "Portfolio, feedback notes, and a simple scorecard",
      },
    ],
  ],
];
masteryModules.forEach((m) => {
  const mi = modules.length;
  modules.push(m);
  m[3].forEach((l, li) => lessons.push({ ...l, id: `${mi}-${li}`, mi, li }));
});
scenarios.push(
  [
    "06",
    "The decision and dependency challenge",
    "Advanced",
    "A fictional workshop is scheduled for Friday. Venue A costs 100 with confirmed availability; B costs 90 but availability is unknown. The owner must approve by Wednesday noon. The designer needs approved venue details before finishing invitations. No booking or invitation may be issued without approval.",
    "Prepare a 150-word decision brief, dependency tracker, and a Wednesday-morning escalation.",
    "Brief names the decision, owner, and deadline. Total costs and uncertainty stay visible. The designer’s dependency is tracked. No approval, booking, or availability is invented.",
  ],
  [
    "07",
    "Recover the tracker without losing new work",
    "Advanced",
    "The original records are 201/Ana/10/Paid; 202/Bo/20/Pending; 203/Cam/15/Paid. A mistaken change sets all statuses to Paid. A teammate then adds 204/Dee/5/Pending. Assume your practice source copy is available.",
    "Produce the recovered four-row tracker, a factual incident update, and a prevention check.",
    "Restore 202 to Pending and preserve 204 as Pending. Total amounts remain 50. Confirm the source and scope; record the correction without losing the new row.",
  ],
  [
    "08",
    "Renewal and capacity assessment",
    "Advanced",
    "Your fictional agreement covers 20 orders weekly at five minutes each plus 30 minutes review. The client now needs 40 orders. You have 180 minutes available for this service each week. No extra capacity or changed deadline is yet agreed.",
    "Calculate effort, write a client-review agenda, and offer two feasible scope options with approval boundaries.",
    "The old work takes 130 minutes; the new volume takes 230, exceeding capacity by 50. Offer a reduced volume or revised capacity/turnaround agreement. Do not promise 40 within 180 minutes at the stated effort.",
  ],
);
