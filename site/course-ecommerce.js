/** E-commerce operations. Append IDs to preserve existing progress. */
const ecommerceLessons = [
  {
    title: "Keep product listings accurate and consistent",
    goal: "Create and maintain listings where title, price, options, and policies always match the source.",
    prereq:
      "E-commerce support, data validation, and content approval lessons.",
    teach:
      "A product listing is a promise to the customer, so accuracy matters more than clever wording. Maintain one source of truth, usually a spreadsheet or catalog, that holds each product's name, description, price, options, stock status, images, and policy notes. Every channel such as a website, marketplace, or social shop should be updated from that source, and changes should be made there first. Use a consistent title pattern, for example brand, product, size, and key feature, and keep a controlled list of option names so a size is never 'Large' in one place and 'L' in another. Check that descriptions state only facts the supplier or client has confirmed, including materials, dimensions, allergens or warnings where relevant, and delivery or pickup limits. Do not copy a competitor's text or images; use content the client owns or has permission to use. Verify prices and discounts against the approved list and check that sale dates end on time. Review images for correct product, quality, and alt text. After each update, inspect the live page as a customer would and note the date and approver. Keep a change log so an error can be traced and reversed. Never publish a claim about health, safety, or performance unless the client provides evidence.",
    example:
      "The fictional bakery sells cookie boxes online and on social media. The sheet shows a price of 18 for a box of 12, but the social shop says 16 because an old sale was never removed. The VA corrects the channel from the source sheet, checks the live page, and adds an end date field to the sheet so sales expire visibly.",
    steps: [
      "Create or confirm one source sheet with required fields for every product.",
      "Standardize titles and option names using a controlled list.",
      "Verify descriptions, prices, and claims against approved sources.",
      "Update each channel from the source and inspect the live listing.",
      "Record the change, date, and approver in a log.",
    ],
    exercise:
      "Audit the practice listings against the source sheet. List every mismatch, write the corrected title and description for one product, and note which claims need client evidence.",
    portfolio:
      "A product source sheet template and a before-and-after listing audit.",
    mistake:
      "Editing each channel by hand without a source of truth lets prices and details drift apart.",
    question:
      "Two channels show different prices for the same product. What should you do first?",
    options: [
      "Choose the lower price to be safe",
      "Ask customers which price is right",
      "Check the approved source sheet and correct the channel that differs",
    ],
    answer: 2,
    explanation:
      "The approved source defines the correct price. Fix channels from it and record the change.",
    ready: [
      "Maintain a single source of truth",
      "Use consistent titles and options",
      "Verify claims and prices before publishing",
      "Check the live page and log changes",
    ],
    tools: "Spreadsheet catalog, store admin, and image editor.",
    taglish:
      "Ang product listing ay pangako sa customer, kaya dapat tama. Gumamit ng isang source sheet at doon laging mag-update bago ang ibang channel. Gawing pare-pareho ang titulo at option names. I-verify ang presyo, laki, at claims sa approved source. Pagkatapos mag-update, tingnan ang live page na parang customer at itala ang pagbabago.",
    proTips: [
      "Add a 'sale ends' column to the source so discounts cannot linger.",
      "Screenshot the live page after each update as proof of what customers saw.",
    ],
    deepDive: [
      [
        "Standardize names and options",
        "Create a short style guide: title order, size abbreviations, and capitalization. Use drop-downs in the sheet for options so typos cannot appear. Consistent data makes filters, reports, and imports work.",
      ],
      [
        "Handle claims carefully",
        "Words like 'organic', 'allergen-free', or 'fastest' are claims. Publish them only with evidence from the client or supplier, and note where the evidence is stored. When unsure, remove the claim and ask.",
      ],
    ],
    practiceData:
      "Fictional source: Cookie Box 12 — price 18 — pickup only — contains wheat, milk, eggs, nuts. Website title: 'cookie box (large)' price 18, description 'nut-free'. Social shop: 'Cookies 12pc' price 16 (sale ended last month), 'ships nationwide'.",
    modelAnswer:
      "Mismatches: the website says nut-free while the source says it contains nuts, which is a serious safety error to correct and report immediately; the social shop shows 16 though the sale ended and claims shipping though the product is pickup only; titles are inconsistent. The corrected title is 'Cookie Box 12 pc' with price 18, pickup only, and allergens listed. The 'nut-free' claim is removed and flagged for the owner.",
  },
  {
    title: "Track fulfillment exceptions and carrier problems",
    goal: "Spot late, lost, and damaged orders early and handle them with clear records.",
    prereq: "Customer support, order handling, and incident lessons.",
    teach:
      "Most orders go smoothly, but a few create most of the customer pain. A fulfillment exception is any order that is late, stuck, lost, damaged, incomplete, or sent to the wrong place. Build a daily check of open orders against promised dates and tracking status. Flag any order with no movement for the number of days the client defines, a delivery marked complete that the customer says did not arrive, or a customer report of damage. For each exception, record the order, the problem, the date found, the evidence such as tracking history or photos, the action taken, and the owner. Contact the carrier or the fulfillment partner through the official channel and keep the claim reference. Tell the customer promptly and honestly what you know, what happens next, and when you will update them; do not blame others or promise an outcome you cannot guarantee. Only the client or the approved policy decides refunds, replacements, and compensation, so present the facts and the options. Track patterns such as repeated damage on one route or a slow carrier, because patterns point to a fix. Keep private customer details out of shared channels and follow the client's retention rules for photos. Report the exceptions in the weekly summary with counts, causes, and recommendations.",
    example:
      "A fictional customer says a parcel shows delivered but it never arrived. The VA checks the tracking history, records the evidence, contacts the carrier to open a claim, and tells the customer that the case is open with an update in two days. The owner then decides whether to reship under the policy.",
    steps: [
      "Compare open orders with promised dates and tracking status every day.",
      "Log each exception with evidence, date found, action, and owner.",
      "Open a claim through the official carrier or partner channel and save the reference.",
      "Update the customer honestly with what happens next and when.",
      "Summarize counts, causes, and patterns weekly with recommendations.",
    ],
    exercise:
      "Review the practice order list, identify the exceptions, build an exception log, and draft a customer message and an owner decision request for one case.",
    portfolio: "An exception log template and a sample customer update.",
    mistake:
      "Promising a refund or reshipment before the owner or policy approves it creates costs and confusion.",
    question:
      "A parcel is marked delivered but the customer says it is missing. What is the right first move?",
    options: [
      "Tell the customer a refund is coming",
      "Record the evidence, open a carrier claim, update the customer, and ask the owner to decide the remedy",
      "Ignore it until the customer writes again",
    ],
    answer: 1,
    explanation:
      "Gather evidence, start the official claim, keep the customer informed, and leave the remedy decision to the owner or policy.",
    ready: [
      "Detect exceptions early",
      "Log evidence and ownership",
      "Communicate honestly and promptly",
      "Report patterns and recommend fixes",
    ],
    tools: "Order sheet, carrier tracking pages, and the helpdesk.",
    taglish:
      "Ang fulfillment exception ay anumang order na late, nawala, nasira, kulang, o napunta sa maling lugar. Mag-check araw-araw ng open orders laban sa promised date at tracking. Itala ang ebidensya, aksyon, at owner. Mag-claim sa opisyal na channel ng carrier. Sabihin sa customer ang totoo at kung kailan ang susunod na update. Ang owner o policy ang magpapasya sa refund o replacement. I-report ang mga pattern sa weekly summary.",
    proTips: [
      "Ask customers for photos of damage and packaging right away; claims often require them.",
      "Add a 'next update due' date to every exception so none is forgotten.",
    ],
    deepDive: [
      [
        "Define exception rules with the client",
        "Agree on thresholds: how many days without tracking movement count as stuck, which values need a signature, and which orders are priority. Written rules let you act without waiting for approval each time.",
      ],
      [
        "Write the customer update",
        "State what you know, what you are doing, and when the next update is. Avoid blame and avoid guessing. Example: 'The tracking shows delivery on Tuesday. We have opened a claim and will update you by Thursday.'",
      ],
    ],
    practiceData:
      "Fictional orders: #101 shipped 3 days ago, no tracking movement for 3 days (rule: stuck at 3 days). #102 delivered Monday, customer says nothing arrived. #103 customer sent photo of crushed box, cookies broken. #104 on schedule. Policy: only the owner approves refunds or reships.",
    modelAnswer:
      "Exceptions are #101 (stuck), #102 (marked delivered but missing), and #103 (damaged); #104 is fine. The log records evidence, date, action, and owner for each. For #102 the VA opens a carrier claim and tells the customer an update comes in two days. For #103 the VA gathers photos and asks the owner to choose reship or refund under policy. A weekly note records three exceptions and asks about carrier performance.",
  },
  {
    title: "Protect marketplace account health and policy compliance",
    goal: "Keep a seller account in good standing by following platform rules and responding to warnings.",
    prereq: "E-commerce support, policy, and incident lessons.",
    teach:
      "Marketplaces and payment platforms enforce rules about listings, shipping times, customer service, and prohibited items. A seller account that breaks them can lose features or be suspended, which can stop the client's income. A VA who monitors account health protects the business. Start by reading the platform's current seller policies and performance metrics, such as late shipments, cancellations, response time, and customer complaints, and note the targets. Check the dashboard on a schedule and record the numbers. When a warning or notice arrives, read it carefully, save a copy, and tell the client at once. Do not ignore it or reply emotionally. Prepare facts: what the notice says, which listing or order is involved, the evidence, and the correction. Fix the cause when the notice is correct, and appeal respectfully with evidence only when you believe it is wrong and the client approves. Never try to get around a rule, create duplicate accounts, buy reviews, or ask customers to change feedback in return for rewards; these can cause permanent bans. Keep policy changes in a log and update listings and templates when rules change. Follow the platform's official channels only, and be careful with messages that imitate the platform to steal logins.",
    example:
      "A fictional marketplace notice says a listing may violate a rule about unsupported health claims. The VA saves the notice, tells the owner, and finds that the description says the cookies are 'good for digestion'. With the owner's approval the VA removes the claim, documents the correction, and submits a short factual response through the official portal.",
    steps: [
      "Read current platform policies and list the performance targets that matter.",
      "Record account metrics on a regular schedule.",
      "Save and report every warning or notice to the client immediately.",
      "Gather facts and evidence, correct the cause, and appeal only with approval.",
      "Update listings and templates when policies change and log the change.",
    ],
    exercise:
      "Review the practice notice and metrics. Identify the likely cause, draft a message to the owner, and write a short factual response for the platform.",
    portfolio: "An account-health checklist and a sample notice response.",
    mistake:
      "Trying to bypass a rule or ignoring a warning can turn a small issue into a suspended account.",
    question:
      "A platform warns about an unsupported health claim in a listing. What is the best step?",
    options: [
      "Save the notice, tell the owner, remove or support the claim, and respond through official channels",
      "Ignore it because it is only a warning",
      "Create a second account to keep selling",
    ],
    answer: 0,
    explanation:
      "Act promptly, correct the cause, and use official channels. Workarounds can lead to permanent bans.",
    ready: [
      "Know the platform's rules and metrics",
      "Report notices immediately",
      "Respond with evidence through official channels",
      "Never bypass or manipulate rules",
    ],
    tools: "The marketplace's seller dashboard and policy pages.",
    taglish:
      "May mga patakaran ang marketplace tungkol sa listings, shipping, at serbisyo. Kung lalabag, puwedeng masuspinde ang account ng client. Regular na i-check ang metrics, at kapag may warning, i-save, sabihin agad sa client, ayusin ang sanhi, at sumagot sa opisyal na channel. Huwag mag-bypass, huwag gumawa ng pekeng account o bumili ng reviews. Mag-ingat sa pekeng mensahe na nagpapanggap na platform.",
    proTips: [
      "Check the official policy page before every major listing change.",
      "Never click login links inside a message; go to the platform directly.",
    ],
    deepDive: [
      [
        "Track what the platform tracks",
        "Write down each metric, its target, and the current value. A downward trend gives you time to act before a limit is crossed. Review the numbers weekly and note what changed.",
      ],
      [
        "Respond to notices well",
        "State the facts briefly, own any real error, describe the fix, and describe how you will prevent it. Avoid blaming the platform or customers. Keep the tone calm and professional.",
      ],
    ],
    practiceData:
      "Fictional notice: 'Listing #55 may violate our rule on unsupported health claims. Fix within 7 days.' Listing text: 'Our oat cookies are good for digestion.' Metrics: late shipment rate 4% (target under 4%), response time 22 hours (target under 24 hours), cancellations 1%.",
    modelAnswer:
      "The likely cause is the digestion claim, which has no supporting evidence. The owner message includes the notice, the listing, the deadline, and the proposal to remove the claim. The platform response is short and factual: the claim was removed on the date, and the VA will check descriptions before publishing. The VA also flags that the late shipment rate is at the 4% limit and recommends reviewing carrier timing.",
  },
  {
    title: "Report e-commerce performance with honest metrics",
    goal: "Summarize sales and operations numbers clearly without overstating what they mean.",
    prereq: "Reports, spreadsheets, and decision brief lessons.",
    teach:
      "A good performance report helps the owner make decisions, not just see numbers. Pick a small set of metrics tied to decisions: orders, revenue, average order value, items returned, refund amounts, shipping exceptions, and repeat customers. Use the same period each time and compare like with like, such as this week with the same week last month, and note unusual events like a holiday or a stock-out. Calculate carefully from a clear source, and show the formula or definition so another person can check it. Revenue is not profit; do not call it profit unless costs are included and the client provides them. Be careful with percentages from small numbers, because going from one order to two is a 100% increase that means little. Separate facts from interpretation: 'Orders fell from 40 to 31' is a fact, while 'because of the new price' is a guess unless evidence supports it. Show a chart only when it clarifies; label axes and periods, and do not cut the scale to exaggerate change. End with two or three observations, one risk, and a recommended next step for the owner to decide. Keep customer names out of reports and store them in the agreed place. Check totals against the source before sending.",
    example:
      "The VA reports that fictional bakery orders fell from 40 to 31 week over week while average order value rose from 22 to 26. Revenue moved from 880 to 806. The note says the drop coincided with a stock-out of one flavor on two days, and recommends the owner review the reorder level, without claiming that was the only cause.",
    steps: [
      "Choose five to seven metrics tied to decisions and write their definitions.",
      "Calculate from the source and verify totals before building any chart.",
      "Compare like periods and note unusual events.",
      "Separate facts from interpretations and avoid claims the data cannot support.",
      "End with observations, a risk, and a recommended decision.",
    ],
    exercise:
      "Prepare a one-page report from the practice numbers. Calculate revenue and average order value, state two facts, one cautious interpretation, and a recommendation.",
    portfolio: "A one-page weekly e-commerce report with definitions.",
    mistake:
      "Calling revenue profit or explaining a change with certainty can lead the owner to a wrong decision.",
    question:
      "Orders fell from 40 to 31 during a two-day stock-out. How should you describe the cause?",
    options: [
      "State that the stock-out caused the entire drop",
      "State the fact, mention the stock-out as a possible contributor, and recommend checking",
      "Leave out the stock-out",
    ],
    answer: 1,
    explanation:
      "Report facts, note plausible factors as possibilities, and avoid claiming certainty the data cannot provide.",
    ready: [
      "Choose decision-focused metrics",
      "Calculate and verify from the source",
      "Separate fact from interpretation",
      "Recommend a clear next step",
    ],
    tools: "Spreadsheet and the store's reporting dashboard.",
    taglish:
      "Ang magandang report ay tumutulong sa desisyon ng owner. Pumili ng ilang metrics na may kinalaman sa desisyon at ipaliwanag kung paano kinuwenta. Ihambing ang magkatulad na panahon. Hindi profit ang revenue. Ihiwalay ang facts sa hula, at huwag sabihing sigurado ang dahilan kung walang ebidensya. Magtapos sa rekomendasyon at i-check ang totals bago ipadala.",
    proTips: [
      "Put the definition of each metric in a small note at the bottom of the report.",
      "Include the number behind every percentage so small samples are visible.",
    ],
    deepDive: [
      [
        "Calculate the basics correctly",
        "Revenue is orders times price after discounts, average order value is revenue divided by orders, and a return rate is returned orders divided by total orders. Write these formulas down and apply them the same way every week.",
      ],
      [
        "Avoid misleading visuals",
        "Start bar charts at zero, label the period, and avoid decorations that hide the data. If a chart does not change the reader's decision, use a short table.",
      ],
    ],
    practiceData:
      "Fictional weeks: Week A — 40 orders, revenue 880, 2 refunds totaling 36, 1 shipping exception. Week B — 31 orders, revenue 806, 3 refunds totaling 78, 3 shipping exceptions. One flavor out of stock Wednesday and Thursday of Week B.",
    modelAnswer:
      "Average order value is 880/40 = 22 for week A and 806/31 = 26 for week B. Facts: orders fell from 40 to 31, revenue from 880 to 806, refunds rose from 36 to 78, and shipping exceptions rose from 1 to 3. A cautious interpretation notes the stock-out as a possible factor in fewer orders but not proof. The recommendation asks the owner to review reorder levels and the three shipping exceptions with the carrier.",
  },
];
const ecommerceModuleIndex = modules.length;
modules.push([
  "E-commerce operations",
  "Accurate listings, fulfillment exceptions, marketplace compliance, and honest reporting.",
  "Specialization",
  ecommerceLessons,
]);
ecommerceLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${ecommerceModuleIndex}-${index}`,
    mi: ecommerceModuleIndex,
    li: index,
  });
});
