// Detailed walkthroughs (with Taglish summaries). Part 2: 6-0 to 11-0.
Object.assign(deepDiveExtra, {
  "6-0": [
    [
      "Run a short onboarding call",
      "Cover five things: the outcome the client wants, the exact tasks, the tools and access needed, who approves what, and how you will communicate. Take notes in the client's words, then send them back as a one-page summary within a day. Most misunderstandings appear in that summary, and fixing them costs minutes instead of weeks.",
    ],
    [
      "Write a scope that survives a busy month",
      "List deliverables with volume and timing, such as 'weekly tracker for up to 50 orders, delivered Fridays by noon'. Add exclusions, number of revision rounds, and how extra requests are priced. Put acceptance criteria in plain words so both of you know when something is done. A scope is a kindness, because it removes guessing.",
    ],
    [
      "Updates and mistakes",
      "Use the same update shape every time: completed, next, blocked, and decision needed. If you make a mistake, say what happened, who or what is affected, what you did to contain it, the corrected result, and the check you added. A calm, specific account earns more trust than a perfect record that nobody believes.",
    ],
  ],
  "6-1": [
    [
      "Build a pre-delivery checklist",
      "Turn the scope into a checklist: facts verified against sources, totals checked a second way, names and dates correct, links open for the client, formatting clean, and exceptions listed. Run it every time, even when you are rushed, because rushed work is where mistakes hide. Send the checklist result in one line with the delivery.",
    ],
    [
      "Time tracking and invoicing",
      "Record time as you work with specific notes and separate your own learning from client work unless the agreement says otherwise. An invoice shows the parties, number, period, itemized services, amount, due date, and how to pay. Requirements differ by place, so ask a qualified professional about the rules that apply to you.",
    ],
    [
      "Offboarding without loose ends",
      "At the end, deliver final files, list unresolved items with owners, remove your access, return or delete client data as agreed, and ask the client to confirm acceptance. Offer a short handoff call. A tidy ending protects both sides and often leads to referrals.",
    ],
  ],
  "7-0": [
    [
      "Write an SOP someone else can follow",
      "Include purpose, owner, trigger, inputs, numbered steps, checks, exceptions, and escalation. Add a screenshot or example where a step is easy to misread. Test the SOP by having another person follow it without help; every question they ask shows a gap to fix.",
    ],
    [
      "Automate with care",
      "Choose a low-risk, repeated, rule-based task first, such as drafting a reminder. Keep human approval before anything is sent or any money record changes. Test normal cases, missing data, duplicates, permission errors, and recovery after a failure. Write down how to switch the automation off.",
    ],
    [
      "Dashboards that answer a question",
      "Start with the decision the dashboard supports, such as 'Are late orders increasing?' Define each metric and its data source, then choose the simplest chart. A dashboard full of numbers nobody uses is decoration; one clear measure with an owner is useful.",
    ],
  ],
  "7-1": [
    [
      "Calculate capacity honestly",
      "List recurring tasks with realistic times, then add communication, review, and revisions. Leave a buffer of roughly a fifth of your time for surprises. If the total passes your available hours, you have a conversation to have now, not a late night to endure later.",
    ],
    [
      "Keep clients separate",
      "Use separate folders, accounts, and notes for each client, and never reuse one client's material as a sample for another. Use a different password and a checklist for each client's tools. Mixing clients is how confidentiality breaches begin.",
    ],
    [
      "Packages and delegation",
      "A package states outputs, volume, turnaround, revisions, exclusions, and price approach. When delegating, get the client's permission first, share only what is needed, write a brief with acceptance criteria, and review the result. You stay accountable for the work.",
    ],
  ],
  "8-0": [
    [
      "Understand before you copy",
      "For each formula, say in one sentence what question it answers: 'SUMIF adds only the amounts where status equals Paid'. Predict the answer from the data before pressing Enter. If your prediction and the result disagree, find out why before moving on.",
    ],
    [
      "Common ways formulas fail",
      'Ranges that stop one row short, text that looks like numbers, extra spaces in labels, and mixed date formats are the usual causes. Make missing data visible with flags such as =IF(D2="","Review","Ready") instead of hiding errors, because a blank can mean a missing value you needed to know about.',
    ],
    [
      "Lookups and keys",
      "A lookup finds a value in a reference table using a key such as Order ID. Keys must be unique, and you must decide what happens when no match is found: show 'Not found' rather than a blank. Test with one key that exists and one that does not.",
    ],
  ],
  "8-1": [
    [
      "Define allowed values first",
      "For every column, write the allowed values and format: status is Pending, Paid, or Cancelled; dates are year-month-day; IDs are text. Build dropdowns from that list. Then paste a wrong value on purpose to see whether your rule holds, because pasted data can bypass validation.",
    ],
    [
      "Keep identifiers intact",
      "An ID such as 00124 is a label, not a number. Format the column as text so leading zeros survive. Never sum an ID column or convert it to a number. When you receive data from another tool, check the first and last IDs after import.",
    ],
    [
      "Blank, zero, and not applicable",
      "A blank may be unknown, zero is a real amount, and 'N/A' means it does not apply. Treating them as the same changes totals and decisions. Flag unknowns for the client instead of silently replacing them, and record each cleanup decision in the change log.",
    ],
  ],
  "8-2": [
    [
      "Start from the question",
      "Write the one question the report answers, such as 'How many orders are still unresolved and why?' Then choose only the numbers that answer it. Put the result in the first line, evidence below, limits after that, and a recommended action with an owner at the end.",
    ],
    [
      "Rates and samples",
      "A rate needs a numerator, denominator, and period: 4 late of 20 checked in the week ending Friday is 20 percent. Small samples swing wildly, so give the counts and avoid dramatic claims. Compare the same period and definition each time.",
    ],
    [
      "Avoid overclaiming",
      "Do not say your work caused sales to rise unless the evidence supports it. Say what you measured and what you could not measure. A modest, accurate report builds more trust than an impressive one that falls apart under one question.",
    ],
  ],
  "8-3": [
    [
      "Set criteria before looking at options",
      "Write must-haves, such as deadline, location, and budget, and nice-to-haves, such as extras. An option that fails a must-have is out, even if it looks attractive. Using the same criteria for every option keeps the comparison fair and shows the client how you decided.",
    ],
    [
      "Compare total cost",
      "Headline prices hide shipping, fees, taxes, minimum orders, and cancellation costs. Calculate the total for the same quantity and date across options, and mark anything unconfirmed. Date every figure and link the source, because prices change.",
    ],
    [
      "Recommend with humility",
      "State your recommendation, the reason, and what is still unverified. Make clear that the final choice belongs to the client. If one unknown could change the answer, say which one and offer to confirm it before the decision deadline.",
    ],
  ],
  "9-0": [
    [
      "Find the outcome behind the request",
      "'Organize everything' might mean find files faster, share with a team, or prepare for an audit. Ask what success looks like and who will use the result. Two good questions beat a dozen: usually the output, the source material, or the deadline.",
    ],
    [
      "Show an example",
      "Words can mean different things, so propose a small sample: a folder tree, a three-row table, or a draft reply. Clients react to examples faster than to descriptions, and a quick yes or no saves rework.",
    ],
    [
      "Work safely while you wait",
      "List files, draft a proposed structure, or prepare a template, but do not delete, move, or send anything that depends on the unanswered decision. Record what is confirmed, what is assumed, and what is pending so nothing is lost.",
    ],
  ],
  "9-1": [
    [
      "Rank tasks with four factors",
      "Consider deadline, impact if late, dependencies, and what you already promised. A new urgent-sounding request does not automatically beat a promised delivery. Estimate effort honestly before accepting a deadline, and compare the total to the time you have.",
    ],
    [
      "Write a useful blocker update",
      "State the task affected, what you tried, what is blocking it, the decision or access you need, and the impact on timing. Offer two options if you can. 'I am waiting' is a status; 'I need your approval by 3 PM to deliver Friday' is a request.",
    ],
    [
      "Follow up on a schedule",
      "Put a follow-up date on every blocked task and keep it. If the person is silent, escalate politely through the agreed route. Waiting without a plan quietly turns a small delay into a missed deadline.",
    ],
  ],
  "9-2": [
    [
      "Sort the feedback",
      "Ask whether it is an error, a missed requirement, or a preference. Check the scope and your records before answering. Thank the person for the specific point and restate what you will change. Avoid explaining why you did it; focus on the fix.",
    ],
    [
      "Contain, correct, communicate",
      "If your mistake touched customers or data, pause the workflow, preserve evidence, tell the authorized person, and fix what you can within your authority. Then deliver the corrected version and name it clearly so nobody uses the old one.",
    ],
    [
      "Learn from it",
      "Find the cause, add one check that would have caught it, and test that check on the original case. Record it in a personal mistake log. Over a few months this log becomes your most valuable checklist.",
    ],
  ],
  "9-3": [
    [
      "State your boundaries before they are tested",
      "Share working hours, time zone, response window, how urgent issues reach you, and what is outside your service. Put it in writing during onboarding. Clients accept clear boundaries much more easily than boundaries announced after a conflict.",
    ],
    [
      "Say no with an alternative",
      "Replace a flat refusal with a feasible option: 'I cannot do it tonight, but I can deliver by 10 AM tomorrow, or I can start tonight on the first half.' This keeps the client moving and protects your quality.",
    ],
    [
      "Track your promises",
      "Write every commitment with a date in a tracker and check it daily. When a date changes, tell the client early and update the tracker. Reliability is mostly boring: small promises kept, again and again.",
    ],
  ],
  "10-0": [
    [
      "Separate rules from inputs",
      "Rules stay the same each time: tone, privacy limits, approval needs, and format. Inputs change: the task, the facts, and the deadline. Mark placeholders clearly, such as [verified facts], and add a line telling the tool what to do when information is missing.",
    ],
    [
      "Add a checklist",
      "Write the acceptance checklist next to the template: facts match the source, no invented promises, correct tone, right length. Judge each output against it. This turns 'it looks good' into a repeatable decision.",
    ],
    [
      "Version and test",
      "Number your template and note what changed and why. Test it on at least two different fictional inputs, including one with missing details. Keep one failure example with the template so you remember what to guard against.",
    ],
  ],
  "10-1": [
    [
      "Sort notes into categories",
      "Ask the tool, or do it yourself, to separate decisions, ideas, actions, and open questions. A sentence like 'Maybe launch Saturday if photos arrive' is a conditional idea, not a decision. Mark conditions and dependencies so they survive into the tracker.",
    ],
    [
      "Check owners and dates",
      "An action needs a task, an owner, and a timing. If one is missing, write 'unknown' and add it to the questions list. Verify each assignment against the notes. AI often fills gaps with plausible names and dates that nobody agreed to.",
    ],
    [
      "Surface conflicts",
      "If two notes disagree, list both and ask. Do not pick the convenient version. Compare the final tracker with the source one more time before sending, and mention that it was drafted with AI and checked by you.",
    ],
  ],
  "10-2": [
    [
      "Build a small test set",
      "Create four fictional cases: a normal one, one with missing data, one with conflicting details, and one containing text that tells the tool to ignore your rules. These expose different weaknesses, and a prompt that passes only the normal case is not ready.",
    ],
    [
      "Score with must-pass rules",
      "Score accuracy, completeness, tone, and rule-following, but also set must-pass rules such as 'never claims an approval that is not in the input'. A high average cannot excuse failing a must-pass rule.",
    ],
    [
      "Change one thing at a time",
      "When you revise the prompt, change one instruction, rerun all cases, and note the effect. Several changes at once hide which one helped. Keep the failures and the fixes; they form a record of how your prompt improved.",
    ],
  ],
  "10-3": [
    [
      "Draw the workflow first",
      "Sketch stages: input, AI draft, your check, approval, delivery, and record. Put a name next to each stage. A diagram on paper reveals missing owners and missing checks long before any tool is involved.",
    ],
    [
      "Place review gates where it matters",
      "Put a pause before anything leaves the building: a message to a customer, a change to a record, or a commitment. The gate names who reviews and what they check. Design what happens when the source record is missing: the workflow should stop and ask, not guess.",
    ],
    [
      "Log and limit data",
      "Keep enough of a log to investigate an error, such as the ticket ID and the decision, but avoid storing unnecessary personal details. Remember that a prompt cannot enforce permissions; the system and the process must.",
    ],
  ],
  "11-0": [
    [
      "Notice from evidence",
      "Look for repeated questions, approaching deadlines, unanswered dependencies, and missing information in the tracker and inbox. Write one sentence: what you saw, why it matters, and by when. Evidence turns a hunch into something the client can act on.",
    ],
    [
      "Use an action matrix",
      "Agree with the client on three lists: things you may just do, things you may prepare for review, and things you must ask first. Put it in the client profile. A shared matrix lets you be proactive without anxiety on either side.",
    ],
    [
      "Prepare small, finished proposals",
      "Instead of 'we should do something about this', bring a ready draft: the list of orders missing addresses and the approved reminder text, with one question, 'May I send these today?' A small proposal is easy to approve and shows you think ahead.",
    ],
  ],
});

Object.assign(deepTaglishExtra, {
  "6-0":
    "Sa onboarding call, saklawin ang layunin, gawain, tools at access, sino ang nag-aaprub, at paraan ng komunikasyon, tapos magpadala ng isang-pahinang buod sa loob ng isang araw. Isulat ang scope na may volume, oras, exclusions, at acceptance criteria. Kapag nagkamali, sabihin ang nangyari, saklaw, ayos, at bagong check.",
  "6-1":
    "Gawing checklist ang scope at patakbuhin ito bago ang bawat delivery. Itala ang oras habang nagtatrabaho at ihiwalay ang sariling pag-aaral. Sa offboarding, ihatid ang final files, ilista ang bukas na item, alisin ang access, at kumpirmahin ang tinanggap ng client.",
  "7-0":
    "Ang SOP ay dapat masunod ng ibang tao nang walang tulong; subukan ito sa kanya. Mag-automate ng mababang-risk na paulit-ulit na gawain at panatilihin ang approval ng tao bago magpadala. Ang dashboard ay para sa isang tanong na may may-ari.",
  "7-1":
    "Kuwentahin ang capacity gamit ang totoong oras at mag-iwan ng humigit-kumulang isang-kalimang buffer. Ihiwalay ang folder at account ng bawat client at huwag gamitin ang materyal ng isa bilang sample ng iba. Sa delegation, humingi muna ng permiso; ikaw pa rin ang accountable.",
  "8-0":
    "Sabihin sa isang pangungusap kung anong tanong ang sinasagot ng formula at hulaan muna ang sagot. Karaniwang sanhi ng mali ang range na kulang, teksto na mukhang numero, dagdag na espasyo, at magkakaibang petsa. Sa lookup, magpasya kung ano ang mangyayari kapag walang tugma.",
  "8-1":
    "Isulat muna ang pinapayagang values at format ng bawat column at subukan ang maling value. Panatilihing text ang ID para hindi mawala ang leading zero. Magkaiba ang blank, zero, at N/A; i-flag ang hindi alam sa halip na palitan nang tahimik.",
  "8-2":
    "Magsimula sa tanong ng report, ilagay ang resulta sa unang linya, at tapusin sa rekomendasyon na may owner. Ang rate ay may numerator, denominator, at panahon, at mag-ingat sa maliit na sample. Huwag mag-angkin na ikaw ang dahilan ng pagtaas ng benta kung walang ebidensya.",
  "8-3":
    "Isulat muna ang must-have at nice-to-have bago tingnan ang opsyon. Ihambing ang kabuuang gastos, hindi lang ang unang presyo, at lagyan ng petsa at link. Ang rekomendasyon mo ay interpretasyon; sabihin kung ano ang hindi pa na-verify.",
  "9-0":
    'Hanapin ang tunay na resulta sa likod ng "ayusin lahat" gamit ang dalawang magandang tanong. Magmungkahi ng maliit na halimbawa dahil mas mabilis sumagot ang client sa sample. Habang naghihintay, maghanda lang; huwag magbura o magpadala ng nakadepende sa hindi pa nasasagot.',
  "9-1":
    "I-rank ang gawain ayon sa deadline, epekto, dependency, at nauna nang pangako. Sa blocker update, sabihin ang apektadong task, ginawa mo na, kailangan mo, at epekto sa oras. Maglagay ng follow-up date at sundin ito.",
  "9-2":
    "Alamin kung error, kulang na requirement, o kagustuhan ang feedback. Kung may pinsala, i-contain muna, sabihin sa awtorisadong tao, ayusin, at pangalanan ang tamang bersyon. Magdagdag ng isang check at itala sa mistake log.",
  "9-3":
    "Sabihin ang oras, time zone, at paraan ng urgent bago pa ito masubok. Mag-alok ng alternatibo sa halip na tuwirang hindi. Isulat ang bawat pangako na may petsa at tuparin ito; ang pagiging maaasahan ay maliliit na pangakong natupad.",
  "10-0":
    "Ihiwalay ang patakaran (tono, privacy, approval, format) sa input (gawain, facts, deadline). Magdagdag ng acceptance checklist at i-test sa hindi bababa sa dalawang halimbawa. Lagyan ng version number at itago ang isang halimbawa ng pagkabigo.",
  "10-1":
    'Ihiwalay ang desisyon, ideya, action, at bukas na tanong; ang "baka" ay conditional, hindi desisyon. Isulat ang "unknown" kapag kulang ang owner o petsa. Ilabas ang magkasalungat na tala sa halip na pumili ng madali.',
  "10-2":
    "Gumawa ng apat na test case: normal, kulang ang data, magkasalungat, at may utos na lampasan ang patakaran. I-score pero maglagay ng must-pass na patakaran. Isang pagbabago lang bawat ulit para makita ang epekto.",
  "10-3":
    "Iguhit muna ang workflow: input, AI draft, check mo, approval, delivery, at tala, na may pangalan sa bawat yugto. Maglagay ng review gate bago ang anumang lalabas sa labas. Hindi napipilit ng prompt ang permiso; ang sistema at proseso ang gumagawa nito.",
  "11-0":
    "Magsimula sa ebidensya: ano ang nakita, bakit mahalaga, at kailan. Gumamit ng action matrix: puwedeng gawin, puwedeng i-draft, at kailangang itanong muna. Magdala ng maliit at tapos nang panukala na madaling aprubahan.",
});
