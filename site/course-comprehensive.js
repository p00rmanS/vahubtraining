const comprehensiveModules = [
  [
    "Business support projects",
    "Complete detailed CRM, content, and order-support workflows.",
    "Comprehensive workshop",
    [
      {
        title: "Build and audit a lead qualification tracker",
        goal: "Turn a research brief into a checked, decision-ready contact list.",
        prereq: "Research, CRM, data validation, and privacy lessons.",
        teach:
          "Lead research starts with the client’s definition of a suitable business. Qualification means checking an organization against that definition, not deciding whether it is definitely interested in buying. Agree on required fields, acceptable sources, exclusion rules, and how to handle missing information. Keep business facts separate from personal contact details. A public contact address is not blanket permission for outreach; follow the client’s approved process and applicable rules before anyone sends messages. Use a unique business identifier, preserve source links, and record when each fact was checked. Deliver qualified, excluded, and review-needed records with reasons. A useful tracker helps the client decide what to do next without repeating all your research.",
        example:
          "The fictional brief requires bakeries in Area A that accept online orders. Oak Bakery meets both conditions; Pine Bakery is in Area B; Elm Bakery is in Area A but its ordering method is unknown. Oak is qualified, Pine excluded, and Elm needs review. Unknown is not the same as no.",
        steps: [
          "Convert the brief into required criteria and exclusion rules.",
          "Create fields for business ID, name, area, ordering method, source, checked date, status, reason, and next action.",
          "Enter facts from approved sources; mark absent facts Unknown.",
          "Check duplicate IDs, source support, and status consistency.",
          "Deliver a summary of qualified, excluded, and review-needed records.",
        ],
        exercise:
          "Using the fictional data below, build a five-row tracker, apply the qualification rules, and write a handoff under 120 words. Do not contact real businesses.",
        portfolio:
          "A qualification tracker, criteria sheet, source log, and checked handoff.",
        mistake:
          "Filling a target list quota by guessing missing facts makes the list harder to trust.",
        question:
          "A required qualification fact is unavailable. How should the record be classified?",
        options: [
          "Qualified to meet the target count",
          "Review needed, with the missing fact identified",
          "Excluded without explanation",
        ],
        answer: 1,
        explanation:
          "A review status preserves the uncertainty and tells the client what must be verified.",
        ready: [
          "Define qualification criteria",
          "Apply rules consistently",
          "Separate unknown from false",
          "Provide evidence and next actions",
        ],
        tools: "Spreadsheet and approved research sources",
        taglish:
          "Lead qualification ay pag-check kung pasok ang business sa agreed criteria. Hindi ito proof na interested na silang bumili. Kapag kulang ang required fact, Review needed muna, hindi hula. Dapat may source at reason ang status. Ang public email ay hindi automatic permission para mag-outreach.",
        proTips: [
          "Write the qualification rules before searching so your decisions stay consistent.",
          "Review every record near the qualification boundary rather than forcing a yes/no answer.",
        ],
        deepDive: [
          [
            "Design the rules",
            "Use a rule table: Criterion, Required value, Acceptable evidence, and Failure action. For this practice, both Area A and online ordering are mandatory. An explicit Area B result means Excluded. An unknown ordering method means Review needed. A record that satisfies both is Qualified.",
          ],
          [
            "Prevent duplicates",
            "Define duplicate identity before cleanup. In this practice, identical Business ID means the same business record. If two rows have the same ID but conflicting facts, preserve the source rows and flag the conflict instead of choosing one silently.",
          ],
          [
            "Audit and hand off",
            "For a small list, review every status against the criteria. Count each status and check that their sum equals the unique-record count. State that the data is fictional. List unresolved fields and who should verify them before outreach or other action.",
          ],
        ],
        practiceData:
          "Qualification rule: Area A AND online orders accepted.\nB01 | Oak Bakery | Area A | Online: Yes\nB02 | Pine Bakery | Area B | Online: Yes\nB03 | Elm Bakery | Area A | Online: Unknown\nB04 | Cedar Bakery | Area A | Online: No\nB05 | Ash Bakery | Area A | Online: Yes\nAll records are fictional; the table is the practice source.",
        modelAnswer:
          "Qualified: B01 and B05 (2). Excluded: B02, wrong area; B04, no online ordering (2). Review needed: B03, ordering method unknown (1). Unique records: 5; 2 + 2 + 1 = 5. Handoff: “Checked five fictional businesses against the agreed criteria. Two qualify, two are excluded with reasons, and one needs verification of online ordering. No outreach was sent.”",
      },
      {
        title: "Repurpose approved content into a checked campaign",
        goal: "Create multiple useful assets without changing the original facts.",
        prereq: "Social media, Canva, AI review, and client approvals.",
        teach:
          "Repurposing means adapting approved material for a different audience or format. Begin with a source-of-truth document and list the facts that must remain exact: product names, dates, prices, conditions, and links. Decide the purpose of each asset, such as informing, reminding, or answering a question. Different formats need different lengths, but the claim must remain consistent. A short post must not remove a limitation that changes the offer. Keep each asset’s version, owner, approval status, and publish destination in a tracker. AI can draft alternatives, but you still compare them with the source. Verify permissions for images and quotes, and get the required approval before publication.",
        example:
          "A source says pickup is Saturday 9–11 AM and orders close Thursday 5 PM. A reminder may shorten the description but must preserve both deadlines. “Available all weekend” changes the offer and must be removed.",
        steps: [
          "List approved facts and prohibited or unsupported claims.",
          "Define three assets with distinct purposes.",
          "Draft each asset using only approved facts.",
          "Review accuracy, tone, accessibility, and permitted assets.",
          "Package drafts with an approval tracker; do not publish during practice.",
        ],
        exercise:
          "Use the source below to draft an announcement, a short reminder, and a two-question FAQ. Create an approval table and explain one claim you deliberately avoided.",
        portfolio:
          "A three-asset campaign with a source checklist and approval record.",
        mistake:
          "Removing an important condition to make a caption shorter can misrepresent the offer.",
        question: "Which draft is inconsistent with the practice source?",
        options: [
          "Orders close Thursday at 5 PM",
          "Pickup is Saturday from 9 to 11 AM",
          "Pickup is available all weekend",
        ],
        answer: 2,
        explanation:
          "The source provides only a two-hour Saturday pickup window.",
        ready: [
          "Preserve source facts",
          "Adapt purpose and length",
          "Track approvals and versions",
          "Avoid unsupported claims",
        ],
        tools: "Docs, existing graphics tools, and an approval tracker",
        taglish:
          "Repurposing ay pag-adapt ng approved content, hindi paggawa ng bagong promises. Puwedeng mas maikli ang caption pero dapat exact pa rin ang deadline, price, at conditions. Gumawa ng source checklist at approval tracker. Kapag AI ang nag-draft, i-check pa rin bawat claim bago ibigay sa client.",
        proTips: [
          "Keep dates and conditions in a locked source checklist while drafting.",
          "Review the shortest asset carefully: important limitations are easiest to lose there.",
        ],
        deepDive: [
          [
            "Plan the assets",
            "Give each asset one job. Announcement explains the offer; reminder emphasizes the ordering deadline; FAQ removes common confusion. Record intended audience and format before drafting. Do not add a sales or urgency claim unless it exists in the approved source.",
          ],
          [
            "Check accessibility and rights",
            "For practice graphics, use original or permitted assets and readable contrast. Write useful alternative text that describes the essential information. Verify that the asset contains no confidential data. Check current destination requirements when doing real platform work.",
          ],
          [
            "Deliver for approval",
            "Provide source version, draft version, intended destination, reviewer, and status. A date in a content calendar is a proposed schedule, not permission to publish. Require a clear Approved status before the authorized publishing step.",
          ],
        ],
        practiceData:
          "Fictional approved offer: Mini bread box, 12 pieces, price 15 practice currency units. Orders close Thursday 5 PM, Bakery local time. Pickup Saturday 9–11 AM. Pickup only; no delivery. No health, scarcity, or guaranteed-outcome claims are approved.",
        modelAnswer:
          "Announcement: “Mini bread box: 12 pieces for 15. Place your order by Thursday at 5 PM, Bakery local time. Pickup is Saturday, 9–11 AM. Pickup only.” Reminder: “Reminder: mini bread box orders close Thursday at 5 PM, Bakery local time. Saturday pickup, 9–11 AM; no delivery.” FAQ: “Is delivery available? No, pickup only. When is pickup? Saturday, 9–11 AM.” All three remain Draft until approval.",
      },
      {
        title: "Handle returns and order exceptions with a policy matrix",
        goal: "Apply an approved policy and escalate exceptions without guessing.",
        prereq: "Customer support, order tracking, and approval boundaries.",
        teach:
          "An exception is a request that cannot be handled by the routine process. Create a policy matrix with issue type, evidence required, permitted action, approval owner, and follow-up timing. Read the current client policy rather than relying on memory. Check identity through the approved process before sharing order details. A refund request, replacement request, and delivery complaint may need different evidence and authority. Document the request accurately, including what is confirmed and what is still unknown. Draft an empathetic response that states the next authorized step. Acknowledge the issue without guaranteeing a remedy you cannot approve. Keep the ticket open until the outcome or next owner is recorded.",
        example:
          "The practice policy allows the VA to request a photo for a damaged item, while the owner approves refunds. You can request evidence and prepare a summary. You cannot tell the customer that a refund is approved merely because damage seems likely.",
        steps: [
          "Build the policy matrix from the provided rules.",
          "Classify each ticket and identify missing evidence.",
          "Choose the permitted action and escalation owner.",
          "Draft replies without unsupported remedy promises.",
          "Record status, next action, and follow-up time.",
        ],
        exercise:
          "Process the three fictional tickets below. Produce a ticket tracker, one response per ticket, and a short owner decision brief.",
        portfolio:
          "Policy matrix, exception tracker, and customer reply samples.",
        mistake:
          "Applying a policy from a different client or an outdated version can authorize the wrong action.",
        question: "Who approves refunds under the practice policy?",
        options: [
          "The VA whenever a customer is upset",
          "The owner",
          "The AI drafting the reply",
        ],
        answer: 1,
        explanation:
          "The policy assigns refund authority to the owner regardless of who drafts the response.",
        ready: [
          "Use the correct policy version",
          "Separate evidence from claims",
          "Apply permitted actions",
          "Escalate and follow up",
        ],
        tools: "Approved policy, support tracker, and email drafts",
        taglish:
          "Sa returns at exceptions, policy muna bago promise. Alamin kung anong evidence ang kailangan at sino ang may authority. Kung owner ang refund approver, hindi puwedeng ikaw o AI ang mag-confirm ng refund. Mag-draft ng calm reply na may next step at follow-up, tapos i-track ang decision.",
        proTips: [
          "Put the policy version and review date on your matrix.",
          "Use “I’m requesting review” when approval is pending, rather than “Your refund is approved.”",
        ],
        deepDive: [
          [
            "Extract authority rules",
            "Write each rule separately. “VA may request photos” does not imply “VA may approve refunds.” Identify actions you can complete, drafts you can prepare, and decisions that must be escalated. Resolve contradictory policy wording with the designated owner.",
          ],
          [
            "Capture a useful case summary",
            "Include Ticket ID, Order ID, verified issue, customer request, evidence status, relevant policy, proposed next step, and decision owner. Exclude unnecessary personal details. State missing evidence explicitly and avoid writing your suspicion as a confirmed fact.",
          ],
          [
            "Close the loop",
            "Set a follow-up based on the agreed service window; do not invent a policy deadline. After the authorized decision, draft or send the outcome according to access rules, then log what happened. A ticket marked Done must have a recorded outcome or an explicit handoff.",
          ],
        ],
        practiceData:
          "Fictional policy P1: VA may request a damage photo and verify order status; only owner approves refunds or replacements. No response deadline is provided.\nT01 | Order 301 | Customer reports damage; no photo.\nT02 | Order 302 | Customer asks for refund after changing their mind.\nT03 | Order 303 | Customer asks where delivery is; current status unknown.",
        modelAnswer:
          "T01: request photo, prepare owner review, do not approve remedy. T02: escalate refund request to owner, with reason and policy reference. T03: check the approved order source; mark status unknown until verified. For all tickets, agree on follow-up timing instead of inventing a deadline. Example reply: “Thank you for letting us know. Please provide a photo through our approved support channel so the owner can review the damaged-item request. I will confirm the next update time once it is agreed.”",
      },
    ],
  ],
  [
    "Design a dependable client service",
    "Plan capacity, establish a kickoff, and transfer a repeatable process.",
    "Comprehensive workshop",
    [
      {
        title: "Design an executive calendar with decision rules",
        goal: "Resolve scheduling conflicts while protecting priorities and authority.",
        prereq: "Calendar essentials, executive support, and boundaries.",
        teach:
          "An executive calendar reflects priorities, constraints, and commitments. Agree on meeting categories, protected work periods, preparation buffers, travel needs, and who may approve exceptions. Collect the required details before proposing a slot: purpose, attendees, duration, named time zones, deadline, and location or link. A free-looking slot may still be unavailable because preparation or travel is missing. Keep tentative holds distinguishable from confirmed meetings. Resolve conflicts by the agreed priority rules and communicate options rather than silently cancelling an existing commitment. Verify the final invitation and attendee responses. When a rule is unclear, prepare a recommendation and ask the authorized person.",
        example:
          "An executive protects 9–11 AM for focused work. An external request asks for 10 AM, but the policy permits moving that block only with approval. Offer a valid afternoon slot or request an exception; do not erase the block yourself.",
        steps: [
          "Write calendar rules and exception authority.",
          "List meeting requirements and time-zone assumptions.",
          "Identify feasible slots including preparation buffers.",
          "Present options and resolve tentative holds.",
          "Check the final invitation and follow-up responsibilities.",
        ],
        exercise:
          "Use the fictional day below to propose two meeting options and draft a scheduling response. Explain why the requested 10 AM slot cannot be confirmed independently.",
        portfolio:
          "Calendar decision matrix, scheduling response, and verification checklist.",
        mistake:
          "A visually empty calendar space is not proof that a meeting fits all constraints.",
        question:
          "A request conflicts with a protected block that requires approval to move. What should you do?",
        options: [
          "Delete the block",
          "Offer valid alternatives or seek the authorized exception",
          "Confirm the request and ask later",
        ],
        answer: 1,
        explanation:
          "Alternatives can move the task forward without overriding the agreed calendar authority.",
        ready: [
          "Apply priority rules",
          "Include buffers",
          "Verify time zones",
          "Escalate protected-block exceptions",
        ],
        tools: "Client calendar and a scheduling checklist",
        taglish:
          "Calendar management ay pag-protect ng priorities, hindi paghanap lang ng bakanteng slot. Isama ang prep time, time zone, at approval rules. Kapag protected ang block, huwag basta burahin para mag-fit ang request. Mag-offer ng valid options o humingi ng exception approval.",
        proTips: [
          "Distinguish tentative holds visually and give them an expiry or review time.",
          "Check the invitation details again after any reschedule.",
        ],
        deepDive: [
          [
            "Create the rules",
            "Use Category, Priority, Duration, Buffer, Allowed hours, and Exception approver. Clarify whether the buffer is before, after, or both. Named time zones and date are required for real cross-zone meetings; offsets alone can become misleading when local clock rules change.",
          ],
          [
            "Test feasibility",
            "Check every constraint: attendees, protected blocks, existing events, buffers, and location changes. If you cannot establish external availability, propose a slot rather than claiming it is confirmed. Avoid moving someone else’s event without the agreed authority.",
          ],
          [
            "Confirm and follow up",
            "An agreed time is followed by a verified invite with agenda and link. Check responses according to the client’s process. After a change, update the source calendar and affected task deadlines so the old commitment does not remain in another tracker.",
          ],
        ],
        practiceData:
          "Fictional day, all times in the same Bakery local time: availability 9 AM–5 PM. Protected focus 9–11 AM, owner approval required to move. Existing meeting 11 AM–noon. Lunch noon–1 PM. Existing meeting 3–4 PM. Requested call: 30 minutes with 15-minute preparation immediately before. Caller requests 10 AM but has not confirmed alternatives.",
        modelAnswer:
          "Two feasible proposed call times: 1:15–1:45 PM with prep 1–1:15 PM; 4:15–4:45 PM with prep 4–4:15 PM. Other valid slots may also fit. The 10 AM request conflicts with protected focus and needs owner approval. Reply: “The requested 10 AM slot conflicts with a protected work block. Would 1:15 PM or 4:15 PM work? Each option includes preparation time. I can also ask the owner to review an exception.” No alternative is confirmed until accepted.",
      },
      {
        title: "Estimate a service package using full delivery effort",
        goal: "Price and schedule a defined service from measured work rather than guesses.",
        prereq: "Pricing, scope, and capacity lessons.",
        teach:
          "Estimate the whole delivery process: intake, task execution, quality review, communication, and likely revisions. Separate your measured practice time from assumptions about future client work. A package should specify unit volume, outputs, turnaround, revision allowance, client inputs, exclusions, and how extra work is handled. Fixed fees work best when those boundaries are clear. Use an internal cost and time model to assess sustainability, but do not present a guessed estimate as guaranteed profit. Include capacity reserved for unexpected work. Rates, taxes, contracts, and payment rules depend on the situation; this lesson uses fictional units for planning rather than market-rate advice.",
        example:
          "Checking 20 records at four minutes each takes 80 minutes. Add 20 minutes review, ten minutes communication, and 15 minutes revision allowance: 125 minutes planned. A 100-minute capacity window does not fit even though the data-entry portion alone does.",
        steps: [
          "Define one package and its volume limits.",
          "Measure task time on a fictional sample.",
          "Add review, communication, and revision effort.",
          "Compare total effort with available capacity.",
          "Write terms for extra volume and missing inputs.",
        ],
        exercise:
          "Calculate the package effort from the data below. Propose a feasible delivery window and write a one-page scope with clear exclusions. Explain how you would revise the estimate after a paid trial.",
        portfolio:
          "A package scope, effort worksheet, and estimate assumptions.",
        mistake:
          "Billing or planning only the visible task ignores review and communication that are necessary to deliver it.",
        question: "What is the planned effort in the example?",
        options: ["80 minutes", "100 minutes", "125 minutes"],
        answer: 2,
        explanation:
          "80 + 20 + 10 + 15 = 125 minutes for the complete planned delivery.",
        ready: [
          "Measure the task",
          "Include full delivery effort",
          "Check capacity",
          "Define scope and change rules",
        ],
        tools: "Time log, spreadsheet, and scope document",
        taglish:
          "Sa service package, isama ang intake, actual task, QA, updates, at revisions. Hindi sapat na data entry time lang ang estimate. Kung 125 minutes ang full work at 100 lang ang available, hindi kasya. Linawin ang volume limits at extra-work terms bago mag-commit sa fee o deadline.",
        proTips: [
          "Keep estimate versus actual time for each delivery stage.",
          "Use a clearly stated volume unit, such as records checked, rather than vague unlimited support.",
        ],
        deepDive: [
          [
            "Build the effort model",
            "Columns can include Stage, Units, Minutes per unit, Fixed minutes, Assumption, and Evidence. Multiply only where the unit relationship makes sense. A fixed review allowance is different from per-record review. Explain whether your estimate includes known rework and contingency.",
          ],
          [
            "Check sustainability",
            "Convert minutes to hours when comparing with your availability or internal rate model. Add agreed direct costs separately. If the work does not fit, reduce volume, change turnaround, or negotiate capacity. Do not erase the review allowance just to make the estimate look feasible.",
          ],
          [
            "Set boundaries",
            "Name the required input quality and what happens if the client provides incomplete records. Specify included revision rounds, approval timing, and exclusions. A request that exceeds the unit limit requires a new effort and timing agreement. Revisit assumptions after real measured deliveries.",
          ],
        ],
        practiceData:
          "Fictional package: 20 records, four minutes each; review 20 minutes; communication ten minutes; included revision allowance 15 minutes. Available capacity this afternoon: 100 minutes. All pricing, if added to your practice, must be labeled fictional.",
        modelAnswer:
          "Planned effort: 20 × 4 + 20 + 10 + 15 = 125 minutes, or about 2.08 hours. This exceeds 100-minute capacity by 25 minutes. Feasible choices include a later delivery window or a reduced volume agreed in advance. A complete scope includes 20 checked records, exception log, one defined revision allowance, required source file, approval owner, and agreed deadline. Re-estimate after comparing measured trial time for each stage.",
      },
      {
        title: "Build a complete onboarding and SOP transfer pack",
        goal: "Set up a recurring service another authorized person can understand and review.",
        prereq: "Onboarding, SOPs, privacy, and handoffs.",
        teach:
          "A transfer pack connects the service agreement to daily execution. It includes the goal, scope, source-of-truth files, access roles, routine, quality checks, exception rules, communication cadence, and offboarding instructions. The SOP should be executable by a suitably trained and authorized person without relying on your memory. Show exact decision rules, examples of exceptions, and where evidence is recorded. Do not include passwords in the document. Review the SOP with a fictional scenario before calling it complete. When transferring live work, obtain required authorization and confidentiality arrangements, then verify the receiver can use the workflow. A written document alone does not prove a successful handoff.",
        example:
          "An order-tracker SOP says to flag missing amounts, use Pending only when the source supports it, and escalate refund decisions to the owner. The handoff includes a five-record practice case and review key. The receiver’s trial run reveals whether the rules are clear.",
        steps: [
          "Translate the agreed service into a kickoff summary.",
          "Map files, roles, and least-privilege access.",
          "Write the SOP with normal and exception paths.",
          "Create a test case and acceptance checklist.",
          "Review the receiver’s output and resolve unclear steps.",
          "Document handoff acceptance and access cleanup.",
        ],
        exercise:
          "Create an onboarding and transfer pack for weekly order tracking. Include intake questions, scope, SOP, escalation matrix, QA checklist, and a receiver practice test using the records below.",
        portfolio: "A complete recurring-service pack with trial-run feedback.",
        mistake:
          "“Ask me if unsure” is not a substitute for documenting predictable exception rules.",
        question: "What establishes a useful SOP handoff?",
        options: [
          "The SOP file was sent",
          "An authorized receiver can complete and verify a representative task",
          "The document is very long",
        ],
        answer: 1,
        explanation:
          "A representative trial and review establish whether the procedure is understandable and usable.",
        ready: [
          "Link scope to daily steps",
          "Define exceptions and owners",
          "Keep secrets out of SOPs",
          "Test the receiver workflow",
          "Record handoff acceptance",
        ],
        tools: "Docs, approved file storage, and a practice tracker",
        taglish:
          "Ang transfer pack ay gabay mula agreement hanggang daily work. Dapat may scope, access roles, SOP, checks, exceptions, at handoff. Hindi kasama ang passwords. I-test sa fictional case para makita kung kayang sundin ng authorized receiver. Hindi proof ng successful handoff ang na-send lang ang file.",
        proTips: [
          "Include one normal case and at least two exceptions in the SOP test.",
          "Make the escalation contact and stop conditions easy to find.",
        ],
        deepDive: [
          [
            "Create the intake and scope",
            "Ask about outcome, weekly volume, source files, turnaround, approver, allowed actions, and data-retention rules. Convert answers into a short scope and kickoff summary. Mark unanswered items as pending rather than assuming authority.",
          ],
          [
            "Write the execution and exception paths",
            "For each step, specify input, action, result, check, and stop condition. Missing amount: flag and request verification. Conflicting duplicate: preserve both sources and escalate. Refund request: record and send to the owner. Identify where completed actions and corrections are logged.",
          ],
          [
            "Verify transfer and close access",
            "Give the authorized receiver a representative case, check the output, and record ambiguities. Revise the SOP, then confirm acceptance. For a live transfer, retain necessary access until the agreed handoff is complete and remove it according to the client’s process. Keep confidential examples out of the public portfolio.",
          ],
        ],
        practiceData:
          "Fictional test records:\n401 | Ana | 10 | Paid\n402 | Bo | Amount unknown | Pending\n403 | Cam | 15 | Refund requested\nPolicy: VA updates the tracker from supplied facts; owner approves refunds; unknown amounts must stay flagged. No customer contact is authorized.",
        modelAnswer:
          "Expected receiver output: keep 401 at 10/Paid; flag 402 amount as unknown without converting to zero; record 403 refund request and escalate to owner without changing it to Refunded. Known amounts total 25, but this is not a complete revenue total because one amount is unknown and transaction statuses differ. No customer contact occurs. Handoff acceptance requires correct records, visible exceptions, authorized next actions, and a verified source reference.",
      },
    ],
  ],
];
comprehensiveModules.forEach((m) => {
  const mi = modules.length;
  modules.push(m);
  m[3].forEach((l, li) => lessons.push({ ...l, id: `${mi}-${li}`, mi, li }));
});
