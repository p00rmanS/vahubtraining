/** Practical support operations. Append IDs to preserve existing progress. */
const operationsLessons = [
  {
    title: "Turn repeat questions into a reliable knowledge base",
    goal: "Create help articles that answer real questions without inventing policy.",
    prereq:
      "Customer support, source verification, and content approval lessons.",
    teach:
      "A knowledge base is a collection of approved answers and procedures that people can find and reuse. Start with actual recurring questions and the policy that supports each answer. Define the audience: a customer needs different detail from an internal support teammate. Use one clear question or task per article. Put the answer or next action first, then explain conditions, exceptions, and escalation. Record the source policy, article owner, approval status, and review date. An article with attractive formatting can still be harmful if it contains an outdated promise. When the source is missing or contradictory, flag the gap rather than writing a confident answer. Keep internal instructions, private customer examples, and access details out of public articles. Test an article by asking another person to find and apply the answer using a realistic scenario.",
    example:
      "Customers often ask whether delivery is available. The fictional policy says pickup only. A customer article can say where and when to collect an order. An internal article can also explain how to escalate a request for an exception. Neither should imply that delivery can be arranged without approval.",
    steps: [
      "Group repeated questions by topic and audience.",
      "Link each answer to an approved source.",
      "Draft concise articles with conditions and next actions.",
      "Record owner, version, approval, and review date.",
      "Test searchability and revise confusing answers.",
    ],
    exercise:
      "Create three customer FAQs and one internal escalation article from the practice policy. Include a metadata table and identify one unanswered question that needs client clarification.",
    portfolio:
      "A four-article practice knowledge base with source links and a review log.",
    mistake:
      "Turning an agent's guess into a public FAQ spreads the same error to many people.",
    question:
      "The policy does not specify how long refunds take. What belongs in the FAQ?",
    options: [
      "A typical timeline guessed from another business",
      "A flagged policy gap for owner clarification",
      "A guarantee of same-day payment",
    ],
    answer: 1,
    explanation:
      "An absent policy detail must be clarified before it becomes an approved customer-facing claim.",
    ready: [
      "Separate public and internal content",
      "Support answers with approved sources",
      "Track versions and review owners",
      "Test whether a reader can use the answer",
    ],
    tools: "Docs or the client's existing help-center editor.",
    taglish:
      "Ang knowledge base ay reusable at approved answers, hindi collection ng guesses. Bawat FAQ may policy source, owner, at review date. Ihiwalay ang customer-facing answer sa internal instructions. Kung walang refund timeline sa source, ipa-clarify muna; huwag maglagay ng promise para lang mukhang complete.",
    proTips: [
      "Use the words customers actually use in article titles.",
      "Keep a policy-to-article index so a policy change reveals every answer needing review.",
    ],
    deepDive: [
      [
        "Choose the article structure",
        "Use Title, Short answer, Conditions, Next step, and Last reviewed. Internal articles may also include evidence requirements and escalation owner. Avoid copying whole chat transcripts into articles; extract the verified rule and remove personal details.",
      ],
      [
        "Manage approval and freshness",
        "Keep Draft, Approved, and Needs review distinct. When a policy changes, mark affected articles for review before reusing them. Have the designated owner resolve contradictory rules. A review date is a reminder to check, not proof that the article is current.",
      ],
      [
        "Test the reader's experience",
        "Give a reviewer a question without pointing to the answer. Check whether they find the right article and understand the next action. If they cannot, revise the title, structure, or wording. Record the ambiguity and your correction.",
      ],
    ],
    practiceData:
      "Fictional policy K1: Pickup Saturday 9–11 AM; no delivery. Orders close Thursday 5 PM, Bakery local time. Only owner approves refunds. Refund processing time is not specified. No private order records may appear in public articles.",
    modelAnswer:
      "Customer FAQs can cover ordering deadline, pickup window, and delivery availability. Answers must preserve Thursday 5 PM and Saturday 9–11 AM and say pickup only. Internal refund article records the request, checks approved evidence rules, and escalates to the owner. Refund processing time remains a policy gap. Each article has a source K1, owner, Draft status, and review date; no customer information is included.",
  },
  {
    title: "Reconcile inventory without hiding discrepancies",
    goal: "Compare expected stock with counts and prepare an auditable discrepancy report.",
    prereq: "Spreadsheet, data validation, and e-commerce support lessons.",
    teach:
      "Inventory reconciliation compares the recorded quantity with an observed count and explains differences. Define the unit and item identifier before calculating: boxes and individual pieces are not interchangeable. Expected closing stock equals opening stock plus receipts minus recorded usage, sales, or other approved outgoing movements. Avoid counting the same transaction twice. A difference does not automatically reveal theft, waste, or a data-entry error; it is a discrepancy to investigate. Preserve the original records, identify supporting evidence, and get the required approval before adjusting live stock. Label counts with their time because stock can move during counting. A useful report contains expected quantity, counted quantity, variance, evidence gaps, next action, and decision owner.",
    example:
      "A fictional item starts at 30 boxes, receives 10, and records 12 outgoing. Expected stock is 28. A count of 26 gives a variance of minus two boxes. The count alone does not explain the reason or authorize a stock adjustment.",
    steps: [
      "Confirm item IDs, units, counting time, and movement period.",
      "Preserve source records and check movement duplicates.",
      "Calculate expected closing quantity.",
      "Compare counts and document positive or negative differences.",
      "Escalate discrepancies and propose evidence checks before adjustments.",
    ],
    exercise:
      "Build an inventory report for the three practice items. Calculate expected closing stock and variance, then draft an owner review note that avoids unsupported explanations.",
    portfolio: "An inventory reconciliation worksheet and discrepancy handoff.",
    mistake:
      "Changing the expected quantity to match a count can erase the evidence needed to find the cause.",
    question:
      "Expected stock is 28 boxes and counted stock is 26. What is the variance, using counted minus expected?",
    options: [
      "Plus two boxes",
      "Minus two boxes",
      "Zero because the count replaces the record",
    ],
    answer: 1,
    explanation:
      "26 minus 28 equals minus two; its cause still needs investigation.",
    ready: [
      "Use consistent units",
      "Verify movement totals",
      "Calculate variance correctly",
      "Keep reasons and adjustments subject to evidence and authority",
    ],
    tools: "Spreadsheet and approved stock records.",
    taglish:
      "Inventory reconciliation ay comparison ng expected stock at actual count. Dapat pareho ang unit: boxes sa boxes, hindi pieces sa boxes. Kapag may difference, i-report muna at hanapin ang evidence. Hindi automatic na theft o waste ang cause, at hindi puwedeng baguhin ang live stock para lang mag-match.",
    proTips: [
      "Record count time and movement cutoff so later transactions do not create false discrepancies.",
      "Use an explicit variance definition in the column heading: counted minus expected.",
    ],
    deepDive: [
      [
        "Calculate from a defined period",
        "List Opening, Receipts, Outgoing, Expected closing, Counted, and Variance. The formula is Opening + Receipts − Outgoing. Confirm that opening and movement data cover the same period. If a movement is missing, flag the expected figure as provisional.",
      ],
      [
        "Investigate without accusing",
        "Compare receiving notes, order movements, returns, and count instructions. Check whether a unit conversion, duplicate movement, or timing difference explains the variance. Document verified findings separately from hypotheses. Do not name a cause without evidence.",
      ],
      [
        "Prepare an approved correction",
        "If the client authorizes an adjustment, record the item, old value, new value, reason, evidence, approver, and date. Recheck the report afterward. For practice, write the proposed change and approval field rather than changing a live system.",
      ],
    ],
    practiceData:
      "All fictional items use boxes and one shared cutoff.\nI01: Opening 30, Receipts 10, Outgoing 12, Counted 26.\nI02: Opening 20, Receipts 5, Outgoing 8, Counted 17.\nI03: Opening 15, Receipts 0, Outgoing 4, Counted 12.\nNo adjustments are authorized and no cause is provided.",
    modelAnswer:
      "I01 expected 28, variance -2. I02 expected 17, variance 0. I03 expected 11, variance +1. Flag I01 and I03 for evidence review; I02 reconciles. The total net variance of -1 box does not mean all items reconcile, because differences are item-specific. Do not invent a cause or adjust stock without approval.",
  },
  {
    title: "Manage an intake queue and triage competing requests",
    goal: "Create a consistent request process with priorities, owners, and escalation.",
    prereq: "Task coordination, capacity, and blocker communication.",
    teach:
      "An intake queue collects requests in one agreed place so work does not disappear across messages. Each request needs an ID, desired result, requester, received time, due time, effort estimate, owner, status, and dependencies. Define priority rules with the client. Impact and a genuine deadline matter more than the word urgent in a message. A due time does not automatically make a task feasible; compare the required effort with available capacity and existing commitments. Record requests that need clarification instead of pretending they are ready. Acknowledge receipt with an honest plan, route exceptions to the right owner, and update status when the work is delivered. Use an escalation threshold for overdue inputs or likely deadline misses.",
    example:
      "A delivery failure requires action before today's dispatch. A cosmetic formatting request calls itself urgent but is due tomorrow. Under an agreed operational-impact policy, the delivery issue comes first. If it needs approval, prepare the facts and escalate rather than silently waiting.",
    steps: [
      "Define intake fields and priority rules.",
      "Classify each request using deadline, impact, and dependencies.",
      "Estimate effort and compare it with capacity.",
      "Assign owners and acknowledge the proposed plan.",
      "Track blockers and escalate threatened commitments early.",
    ],
    exercise:
      "Create a queue and a feasible plan from the four practice requests. Write one acknowledgment and one deadline-risk update. State the capacity constraint instead of promising all work today.",
    portfolio: "Request queue, priority policy, and two operational updates.",
    mistake:
      "Treating every request as equally urgent hides the tradeoffs and makes missed commitments more likely.",
    question: "What makes a request ready to execute?",
    options: [
      "The requester says urgent",
      "A clear result, required inputs, authority, and a feasible plan",
      "It has the newest message timestamp",
    ],
    answer: 1,
    explanation:
      "Readiness depends on sufficient information and authorized, feasible work, not just urgency language.",
    ready: [
      "Capture clear request fields",
      "Apply agreed priorities",
      "Check capacity and dependencies",
      "Escalate risk before the deadline",
    ],
    tools: "Client request tracker and calendar.",
    taglish:
      "Ang intake queue ay iisang place para hindi mawala ang requests. Bawat item may output, deadline, owner, effort, at status. Hindi porke may urgent sa message ay iyon na agad ang priority. Compare ang impact at commitments, at kung hindi kasya sa capacity, sabihin ang tradeoff at humingi ng decision.",
    proTips: [
      "Make Waiting on approval different from In progress so the blocker is visible.",
      "Log requests before promising a deadline, then check the actual remaining capacity.",
    ],
    deepDive: [
      [
        "Set an operational priority policy",
        "For this exercise, a same-day dispatch problem outranks tomorrow's formatting work. Existing approved commitments still matter. Use a small number of priority levels with examples. Let the client define which events qualify for emergency escalation.",
      ],
      [
        "Plan the queue",
        "Sum the work that is actually ready and account for approval delays. An estimate does not reserve capacity until agreed. If the total is too large, offer a smaller deliverable or revised deadline. Keep unscheduled work visible with a next review time.",
      ],
      [
        "Measure the process honestly",
        "Track open requests, overdue requests, and waiting items using consistent definitions. Received does not mean started; delivered does not mean accepted. If you report response or completion time, define the start and end events and do not reset timestamps to make results look better.",
      ],
    ],
    practiceData:
      "Fictional available work time: 90 minutes.\nR01: dispatch failure today, 30 minutes, ready.\nR02: approved order report due today, 40 minutes, ready.\nR03: formatting request due tomorrow, 30 minutes, ready.\nR04: refund exception, 15 minutes preparation, owner approval required.\nPolicy: same-day dispatch first, then today's approved commitments; no VA refund approval.",
    modelAnswer:
      "A feasible plan is R01 (30), R02 (40), and R04 preparation (15): total 85 minutes, with only five minutes remaining. R03 needs another time slot or revised agreement. R04 is prepared for owner decision, not completed as a refund. Other plans may be valid if their changed priorities are explicitly approved. All four require visible status and ownership.",
  },
  {
    title: "Create an operational risk register and weekly review",
    goal: "Surface likely delivery problems early and assign useful prevention actions.",
    prereq: "Proactive support, incident response, and process improvement.",
    teach:
      "A risk is a possible future problem; an issue is already happening. Keep those categories distinct so your response fits the situation. A risk register records the possible event, supporting evidence, impact, likelihood judgment, owner, prevention action, trigger, and review date. Use a small agreed rating scale and explain why each rating was chosen. Scores help prioritize discussion, but they are not objective probabilities or guarantees. Prefer practical prevention steps to vague warnings. If the trigger occurs, move the item into the issue process and follow the escalation policy. Review the register regularly, closing obsolete risks and updating evidence instead of letting it become a permanent list of worries.",
    example:
      "A supplier has not confirmed event materials. Before the confirmation deadline, that is a delivery risk. When the deadline passes without confirmation and the task is blocked, it is an active issue. The owner needs a decision about follow-up or an approved alternative.",
    steps: [
      "Separate potential risks from current issues.",
      "Describe each risk with evidence and a likely impact.",
      "Assign owner, prevention action, trigger, and review date.",
      "Use an agreed scale without presenting scores as probabilities.",
      "Run a weekly review and escalate items whose triggers occur.",
    ],
    exercise:
      "Build a risk register for the three fictional events below. Create a weekly review agenda and a status update after one trigger occurs. Do not spend money or contact vendors during practice.",
    portfolio: "Risk register, issue handoff, and a weekly operational review.",
    mistake:
      "Giving a risk a numeric score without explaining the evidence can create a false sense of precision.",
    question:
      "A supplier confirmation deadline has passed and work is blocked. How should it be treated?",
    options: [
      "Only as a distant possibility",
      "As an active issue with an owner and escalation",
      "As resolved because it is on the register",
    ],
    answer: 1,
    explanation:
      "The problem has happened, so the workflow needs issue handling rather than only future-risk monitoring.",
    ready: [
      "Distinguish risk from issue",
      "Support ratings with evidence",
      "Assign a useful prevention action",
      "Define triggers and review ownership",
    ],
    tools: "Spreadsheet and an agreed review agenda.",
    taglish:
      "Risk ay posibleng future problem; issue ay nangyayari na. Sa register, may evidence, impact, owner, prevention, at trigger. Ang score ay guide sa discussion, hindi guaranteed probability. Kapag nangyari ang trigger, ilipat sa issue handling at ipa-decide sa tamang owner. Huwag basta listahan ng worries na walang action.",
    proTips: [
      "Give every risk a trigger someone can actually observe.",
      "Review and retire obsolete risks so current priorities remain easy to see.",
    ],
    deepDive: [
      [
        "Describe the event clearly",
        "Use Cause or evidence → possible event → impact. For example: unconfirmed materials may prevent invitation preparation by Friday. Avoid blaming a person or claiming a failure is certain. Record the source of your concern and what would change your judgment.",
      ],
      [
        "Choose a proportionate action",
        "Possible responses include verifying information, preparing a backup proposal, adding a review checkpoint, or asking the owner to accept a known tradeoff. A backup proposal does not authorize booking or spending. Each action needs an owner and date.",
      ],
      [
        "Run the weekly review",
        "Review new evidence, changed ratings, approaching triggers, active issues, and decisions needed. Close items only with a reason. Record the agreed action and next review date. Measure whether actions were completed rather than treating a filled-out register as prevention itself.",
      ],
    ],
    practiceData:
      "Fictional event launch Friday. Supplier confirmation due Wednesday noon, not yet received. Designer needs approved prices Thursday noon; owner review is scheduled Thursday morning. Presenter has tested the meeting link, but no backup host is assigned. Update: Wednesday noon passes without supplier confirmation.",
    modelAnswer:
      "Before Wednesday noon: supplier delay is a risk with a follow-up owner and a confirmation-deadline trigger. After the deadline: log an active issue, identify affected tasks, and ask the authorized owner about next action or an alternative. Price approval is a dependency risk with Thursday noon trigger. Missing backup host is a continuity risk with an assigned preparation action. Ratings can vary if their reasoning is explicit; none establishes a statistical probability.",
  },
];
const operationsModuleIndex = modules.length;
modules.push([
  "Support operations lab",
  "Build a knowledge base, reconcile stock, manage requests, and review risks.",
  "Comprehensive workshop",
  operationsLessons,
]);
operationsLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${operationsModuleIndex}-${index}`,
    mi: operationsModuleIndex,
    li: index,
  });
});
