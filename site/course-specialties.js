/** Specialty services clients pay for. Append IDs to preserve existing progress. */
const specialtyLessons = [
  {
    title: "Score support replies against a quality rubric",
    goal: "Review customer replies fairly and give feedback that improves the next response.",
    prereq: "Customer support, knowledge base, and quality checklist lessons.",
    teach:
      "Support quality assurance means reviewing real replies against a written standard so quality does not depend on opinion. Start with a rubric of four to six criteria, each with a plain definition: accuracy against policy, a clear next step, tone, completeness, privacy handling, and correct escalation. Score each criterion with a small scale, for example 0 missing, 1 partly met, 2 fully met, and write one sentence of evidence for any score below 2. Review a sample large enough to show a pattern, not only the worst cases, and use the same rubric for everyone so the comparison is fair. Separate a one-off slip from a repeated pattern; patterns point to a missing policy, article, or template rather than a careless person. Give feedback that names the behavior and shows a better wording, and keep names out of broad reports. Never score a reply on style alone when the facts are wrong, and flag any privacy or policy breach to the client immediately instead of waiting for the weekly summary. Summarize findings as scores, the top two patterns, and the changes you recommend, and let the client decide what to change.",
    example:
      "The VA reviews ten fictional bakery replies. Seven are friendly but four promise delivery, which the policy does not offer. Scores are high on tone and low on accuracy. The report points out the repeated pattern, suggests an article that states pickup only, and shows a corrected sentence for the owner to approve.",
    steps: [
      "Write the rubric with a definition and a 0 to 2 scale for each criterion.",
      "Select a sample that includes easy, typical, and difficult replies.",
      "Score each reply and write evidence for any score below 2.",
      "Group findings into one-off slips and repeated patterns.",
      "Write a summary with scores, two patterns, and recommended fixes for the client to approve.",
    ],
    exercise:
      "Score the three practice replies using the rubric in the source data. Write evidence for every score below 2, name one repeated pattern, and draft one piece of feedback with a better wording.",
    portfolio:
      "A support quality rubric and a sample scored review with a pattern summary.",
    mistake:
      "Scoring tone and speed but ignoring accuracy rewards friendly replies that give customers wrong information.",
    question:
      "Four of ten replies repeat the same wrong delivery promise. What does this most likely show?",
    options: [
      "A repeated pattern pointing to a missing or unclear policy answer",
      "Four careless team members who need warnings",
      "That the rubric is unnecessary",
    ],
    answer: 0,
    explanation:
      "Repeated errors usually signal a gap in the source material or training, so fixing the answer helps everyone.",
    ready: [
      "Build a rubric with clear definitions",
      "Score with evidence",
      "Separate patterns from one-off slips",
      "Recommend fixes and leave decisions to the client",
    ],
    tools: "Spreadsheet or the client's helpdesk review tool.",
    taglish:
      "Ang support QA ay pag-review ng mga sagot gamit ang nakasulat na rubric, hindi base sa kutob. Bigyan ng score ang accuracy, next step, tone, completeness, privacy, at escalation, at maglagay ng ebidensya kapag mababa ang score. Kapag paulit-ulit ang mali, malamang kulang ang policy o article, kaya ayusin ang source, hindi lang sisihin ang tao. Ang client ang magdedesisyon ng pagbabago.",
    proTips: [
      "Score accuracy first; a polite wrong answer is still wrong.",
      "Pair every criticism with a rewritten example the person can copy.",
    ],
    deepDive: [
      [
        "Design criteria that can be scored",
        "A criterion such as 'good tone' is vague. Write what it looks like: greets by name, acknowledges the problem, avoids blame, and uses plain words. Test the rubric by having a second reviewer score two replies and discuss differences until the definitions agree.",
      ],
      [
        "Sample and score fairly",
        "Include replies from different days, channels, and issue types. Score each reply on its own before looking at the person or trend. Record the evidence at the time so you can explain any score later.",
      ],
      [
        "Turn findings into improvements",
        "Rank patterns by customer impact and frequency. Recommend the smallest fix that helps, such as a new article, a saved reply, or a checklist step. Offer to draft it and make clear that the client approves the final wording.",
      ],
    ],
    practiceData:
      "Fictional rubric: Accuracy, Next step, Tone, Privacy, each 0–2. Reply A: 'Sure, we deliver to your area!' (policy: pickup only). Reply B: 'Your order is ready Saturday 9–11 AM at the shop. Reply here if you need to change it.' Reply C: 'Refund approved!' sent by the VA (only the owner approves refunds); it also quotes the customer's full address.",
    modelAnswer:
      "Reply A scores 0 on accuracy because it promises delivery; tone and next step may be 1. Reply B scores 2 on accuracy, next step, and tone. Reply C scores 0 on accuracy or authority, since refunds need owner approval, and 0 on privacy because it repeats the full address. The pattern is unclear delivery and refund-authority guidance. Feedback for A: 'We offer pickup Saturday 9–11 AM at the shop.' Reply C is flagged to the owner immediately.",
  },
  {
    title: "Support bookkeeping with careful categories and reconciliation",
    goal: "Categorize transactions consistently and match records without giving accounting advice.",
    prereq:
      "Spreadsheet, data validation, bookkeeping support, and privacy lessons.",
    teach:
      "Bookkeeping support means keeping financial records organized so the client or their accountant can rely on them. A VA usually follows the client's chart of accounts, which is the approved list of categories, and does not invent new ones. Record each transaction with a date, amount, payee, category, and a link to the receipt or invoice. Use the same category for the same type of spending every time. Reconciliation compares your records with the bank or card statement so every difference is explained: a missing receipt, a timing gap, a duplicate, or an error. Match totals first, then investigate individual lines. Never force a balance by adding a plug entry; an unexplained difference is a finding to report. Do not decide tax treatment, give advice on what is deductible, or move money; those belong to the client or a qualified accountant. Protect bank details by using view-only access where possible and never save login details in notes. Keep a log of questions for the client and the answers you receive, and mark uncertain items rather than guessing.",
    example:
      "The fictional bakery's sheet shows 62 flour purchases, but the card statement shows 63. The VA finds a charge with no receipt, marks it 'needs receipt', and asks the owner what it was. It was a replacement mixer part, which the owner categorizes as equipment. The reconciliation shows a zero difference after the entry is recorded and approved.",
    steps: [
      "Obtain the chart of accounts and the statement period to reconcile.",
      "Enter or review each transaction with date, amount, payee, category, and receipt link.",
      "Compare totals with the statement and list every difference.",
      "Investigate each difference and mark items that need the client's answer.",
      "Prepare a short reconciliation note and a question list for the client or accountant.",
    ],
    exercise:
      "Reconcile the practice ledger with the statement. List each difference, propose the likely cause as a question rather than a fact, and write the note you would send.",
    portfolio:
      "A sample reconciliation sheet with a difference log and client question list.",
    mistake:
      "Adding a made-up adjustment to make the totals match hides a real error and can mislead the client.",
    question:
      "Your ledger is 18.50 lower than the statement and you cannot find why. What do you do?",
    options: [
      "Add an 18.50 miscellaneous entry so it balances",
      "Delete the statement line",
      "Report the unexplained difference, list what you checked, and ask the client",
    ],
    answer: 2,
    explanation:
      "An unexplained difference must be reported. Forcing a balance conceals the problem.",
    ready: [
      "Use the client's categories consistently",
      "Match records to statements and explain differences",
      "Avoid plug entries and tax advice",
      "Protect financial access and keep a question log",
    ],
    tools: "Spreadsheet or the client's bookkeeping software with view access.",
    taglish:
      "Sa bookkeeping support, sundin ang chart of accounts ng client at gamitin ang parehong category sa parehong klase ng gastos. I-reconcile ang records sa bank statement at ipaliwanag ang bawat pagkakaiba. Huwag maglagay ng pekeng entry para lang mag-balance. Hindi ikaw ang magpapasya tungkol sa buwis; accountant o client iyon. Gumamit ng view-only access at huwag i-save ang password sa notes.",
    proTips: [
      "Attach the receipt link to the transaction the moment you categorize it.",
      "Phrase uncertain items as questions: 'Was this the mixer part?' not 'This is equipment.'",
    ],
    deepDive: [
      [
        "Stay inside your role",
        "Follow the categories you were given and ask before creating a new one. If a transaction does not fit, mark it for the client or accountant. Avoid statements such as 'this is deductible' because tax rules depend on the client's situation and location.",
      ],
      [
        "Reconcile in a repeatable order",
        "Confirm the opening balance, match total deposits and total payments, then check line by line. Common causes of difference are timing, duplicates, transposed digits, missing receipts, and fees. Record what you checked even when you did not find the cause.",
      ],
      [
        "Protect the money trail",
        "Request the least access needed and prefer view-only. Never share statements by chat. Store exports in the client's agreed folder and delete local copies you no longer need. Report anything that looks like fraud, such as an unknown payee, to the client at once.",
      ],
    ],
    practiceData:
      "Fictional statement total payments: 1,284.50. Ledger total: 1,266.00. Statement shows a bank fee of 12.50 not in the ledger. One statement charge of 6.00 has no receipt. Chart of accounts: Ingredients, Equipment, Bank fees, Packaging, Other (owner approval).",
    modelAnswer:
      "The difference is 18.50. A bank fee of 12.50 is missing from the ledger and should be recorded under Bank fees after confirming it on the statement. The 6.00 charge has no receipt and goes to the owner as a question, tentatively under Other. Together these explain 18.50. The note reports the steps, the questions, and that nothing was forced.",
  },
  {
    title: "Coordinate a project with milestones and clear roles",
    goal: "Plan a small project so everyone knows deliverables, owners, dates, and decisions.",
    prereq:
      "Kanban, task coordination, stakeholder, and event planning lessons.",
    teach:
      "A project is a set of tasks with a goal, a deadline, and a limited set of people. Coordination means making the plan visible and keeping it current. Begin with a kickoff note: the goal, the deliverables, the deadline, the people involved, and what is out of scope. Break the work into milestones, each with a clear done condition, and list the tasks under each. Assign every task one owner, because tasks owned by 'everyone' are owned by no one. A simple responsibility chart names who does the work, who approves it, who must be consulted, and who is only informed. List dependencies, meaning tasks that cannot start until another finishes, and risks with a planned response. Hold short, regular check-ins focused on progress, blockers, and decisions, and send written notes afterward. Track changes: when scope, date, or cost shifts, record who approved it and why. Report status honestly using plain labels such as on track, at risk, and late, with the reason and the help needed. Close the project with a handoff of final files, open items, and lessons learned.",
    example:
      "The fictional bakery plans a holiday pre-order launch in three weeks. The VA writes a kickoff note, sets milestones for menu approval, order form, announcement, and pickup schedule, and assigns owners. When the owner's menu approval slips two days, the VA marks the launch 'at risk', shows which tasks depend on it, and asks for a decision date.",
    steps: [
      "Write a kickoff note with goal, deliverables, deadline, people, and exclusions.",
      "Split the work into milestones with done conditions and list tasks under each.",
      "Assign one owner per task and build a simple responsibility chart.",
      "List dependencies and the top three risks with a response for each.",
      "Run short check-ins, send written notes, and report status as on track, at risk, or late.",
    ],
    exercise:
      "Create a one-page plan for the practice project: kickoff note, milestones with owners and dates, two dependencies, two risks, and a status line for today with the help you need.",
    portfolio:
      "A one-page project plan and a sample status update for a fictional launch.",
    mistake:
      "Reporting 'on track' while a dependency is already late hides the problem until it is expensive to fix.",
    question:
      "Menu approval is two days late and three tasks depend on it. What status should you report?",
    options: [
      "On track, to avoid worrying the owner",
      "At risk, naming the dependent tasks and the decision needed by a date",
      "Late for the entire project with no details",
    ],
    answer: 1,
    explanation:
      "An honest at-risk report with the cause and the needed decision lets the owner act before the deadline slips.",
    ready: [
      "Write a kickoff note and define done",
      "Assign single owners and map dependencies",
      "Track changes and approvals",
      "Report status honestly with the help needed",
    ],
    tools: "Docs, spreadsheet, or a project tool such as Asana or Notion.",
    taglish:
      "Sa project coordination, magsimula sa kickoff note: goal, deliverables, deadline, mga tao, at ano ang hindi kasama. Hatiin sa milestones at bigyan ng iisang owner ang bawat task. Isulat ang dependencies at risks. Sa status report, maging tapat: on track, at risk, o late, kasama ang dahilan at tulong na kailangan. Itala ang bawat pagbabago at kung sino ang nag-approve.",
    proTips: [
      "Define each milestone with 'done means...' so nobody argues about completion.",
      "Raise a risk when it is a worry, not when it becomes a problem.",
    ],
    deepDive: [
      [
        "Plan backward from the deadline",
        "Start with the date the result is needed, then list the last step before it and work backward. Add time for review and approvals, because they are the usual cause of delay. If the dates do not fit, show the options such as reducing scope or moving the date, and let the client choose.",
      ],
      [
        "Keep roles and decisions clear",
        "For each deliverable name the doer, the approver, who is consulted, and who is informed. Put decision deadlines in the plan. When a decision is made, record the date, the decision, and who made it.",
      ],
      [
        "Close the project properly",
        "Deliver final files in an agreed folder, list unfinished items with owners, and write three lessons learned. Ask the client what to repeat and what to change. This turns one project into reusable process and shows professional follow-through.",
      ],
    ],
    practiceData:
      "Fictional project: Holiday pre-order launch in 21 days. Tasks: approve menu (owner), build order form (VA), write announcement (VA, owner approves), set pickup schedule (owner), test form with five fake orders (VA), post announcement (VA). Menu approval is due day 5 but not received on day 7. Form cannot be built until the menu is final.",
    modelAnswer:
      "The plan sets milestones for menu approval, order form built and tested, announcement approved, and launch. The form build, test, and announcement depend on menu approval. Status today is at risk because approval is two days late and three tasks are blocked. The update asks the owner to approve by day 9, offers a fallback of launching a smaller menu, and records that any date change needs the owner's approval.",
  },
  {
    title: "Support podcast and webinar operations",
    goal: "Run the behind-the-scenes checklist so recorded and live sessions go smoothly.",
    prereq: "Event planning, content approval, and AI verification lessons.",
    teach:
      "Podcasts and webinars rely on many small tasks that the host should not have to remember. A VA can manage the pipeline before, during, and after a session. Before: confirm the guest, topic, date and time with the time zone, and send a briefing with the link, audio advice, and the agreed topics. Test the recording tool and send reminders. During: check the link works, recording has started, and notes are being taken if that is your task. After: save and name the files consistently, request edits or transcripts, draft show notes, titles, and descriptions for approval, and prepare short clips or quotes for promotion. Always get the guest's permission to record and to use their name and words, and follow the host's rules on consent. Check every fact, name, and link in show notes against the recording, and mark anything you could not verify. Keep a master tracker with each episode's status, files, approval, and publish date. Store raw files securely and never share unreleased content outside the agreed group. Use AI for rough transcripts or summaries only as a draft, and verify quotes before they are published.",
    example:
      "The fictional bakery owner hosts a short monthly show with local suppliers. The VA sends the guest a briefing and a reminder, confirms the recording starts, and afterward saves the audio with a standard file name. The VA drafts show notes and finds that an AI summary says the guest has 'ten years' of experience when the recording says 'two'. The VA fixes it and sends the notes for approval.",
    steps: [
      "Create an episode tracker with guest, date and time zone, files, approvals, and publish date.",
      "Send the guest a briefing with the link, time, topics, and a request for recording consent.",
      "Test the recording tool and confirm that recording has started during the session.",
      "Save files with a standard name and draft show notes, title, and clips for approval.",
      "Verify quotes and facts against the recording before publishing.",
    ],
    exercise:
      "For the practice episode, write the guest briefing, a day-of checklist, and draft show notes with two items marked 'needs verification'. Include a consent line.",
    portfolio:
      "An episode tracker, guest briefing, and sample show notes with verification marks.",
    mistake:
      "Publishing an AI-generated summary without checking it against the recording can put wrong claims in a guest's mouth.",
    question:
      "An AI transcript quotes a guest saying a number you cannot find in the recording. What should you do?",
    options: [
      "Check the recording, correct or remove the number, and mark it verified or removed",
      "Publish it because the tool produced it",
      "Round it to a similar number",
    ],
    answer: 0,
    explanation:
      "Quotes must match what was said. Unverified AI output should be checked or removed before release.",
    ready: [
      "Manage an episode pipeline with a tracker",
      "Brief guests and obtain consent",
      "Name and store files consistently",
      "Verify quotes and facts before publishing",
    ],
    tools:
      "Zoom, Riverside, or Descript; a spreadsheet tracker; cloud storage.",
    taglish:
      "Sa podcast o webinar, ikaw ang bahala sa checklist: guest briefing, reminders, test ng recording, at pag-save ng files na may pare-parehong pangalan. Humingi ng consent ng guest para sa recording. Pagkatapos, gumawa ng show notes at ipa-approve. Laging i-verify ang quotes at facts sa mismong recording; huwag basta magtiwala sa AI summary. I-secure ang raw files at huwag ibahagi ang hindi pa labas.",
    proTips: [
      "Send the guest a short test link a day early to catch microphone problems.",
      "Name files as date, show, episode, and version so nothing is overwritten.",
    ],
    deepDive: [
      [
        "Brief the guest well",
        "Include the date and time in the guest's own time zone, the link, how long it will run, the topics, and simple audio tips such as a quiet room and headphones. Ask for consent to record and say how the recording will be used. Confirm contact details for urgent issues on the day.",
      ],
      [
        "Run the day-of checklist",
        "Open the session early, test sound, start the recording, and confirm it is running with a visible indicator. Keep a note of timestamps for good moments and for any statements you will need to check. After the session, save the files before doing anything else.",
      ],
      [
        "Turn one recording into several assets carefully",
        "Draft a title, description, show notes, a few quotable lines, and short clip ideas. Every quote must match the recording and be approved. Keep a record of the approved wording and the publish date in your tracker.",
      ],
    ],
    practiceData:
      "Fictional episode: guest is a local flour supplier, session Thursday 2 PM Pacific. Recording said the mill opened 'two years ago' and delivers 'twice a week'. AI summary says 'ten years' and 'daily'. Guest has not yet confirmed recording consent in writing.",
    modelAnswer:
      "The briefing states Thursday 2 PM Pacific (with the guest's local time), the link, topics, audio tips, and asks for written consent to record. The checklist covers test, start recording, confirm, save files. Show notes use 'two years ago' and 'twice a week' from the recording and flag the AI's 'ten years' and 'daily' as incorrect. The VA does not record or publish until consent is confirmed in writing.",
  },
  {
    title: "Handle candidate scheduling and hiring admin with privacy",
    goal: "Support interviews and hiring paperwork while protecting candidate information.",
    prereq: "Calendar, privacy, executive assistance, and scheduling lessons.",
    teach:
      "Recruiting support helps a client hire without losing track of people. Typical tasks include posting an approved job description, sorting applications against criteria the client wrote, scheduling interviews, sending reminders, collecting forms, and keeping a tracker. Candidates trust you with personal details such as résumés, phone numbers, and sometimes sensitive information. Share it only with the people the client names, store it in the agreed place, and delete or archive it according to the client's policy. Screen against the client's job-related criteria, not your own preferences, and never guess or note a candidate's age, health, family status, religion, or other protected characteristics; if a candidate shares such details, do not record them in the tracker. Hiring decisions belong to the client, so present facts and let them decide. Be fast and kind with candidates: confirm receipt, give honest timelines, and send rejection messages the client approves. When scheduling, state the time zone, send a calendar invite with the link, and confirm the interviewers' availability first. Keep a record of each stage and date so the client can see where every candidate stands.",
    example:
      "The fictional bakery hires a weekend helper. The VA sorts twelve applications against the owner's three written criteria, schedules four interviews, and sends each candidate a confirmation with the time zone and address. A candidate mentions a medical issue in the cover letter, and the VA leaves it out of the tracker and notes only the job-related facts.",
    steps: [
      "Get the written job criteria and the process the client wants for each stage.",
      "Screen applications against the criteria and record only job-related facts.",
      "Check interviewer availability, then offer candidates times with the time zone stated.",
      "Send confirmations and reminders, and update the tracker after each stage.",
      "Store files in the agreed folder and follow the retention rule the client sets.",
    ],
    exercise:
      "Using the practice data, build a candidate tracker with only job-related fields, propose three interview slots, and write a confirmation message and a client-approved rejection draft.",
    portfolio:
      "A candidate tracker template and sample scheduling and rejection messages using fictional people.",
    mistake:
      "Recording personal details unrelated to the job in a shared tracker exposes candidates and can create fairness problems for the client.",
    question:
      "A candidate's cover letter mentions a family situation. What goes in the tracker?",
    options: [
      "A note about the family situation in case it matters",
      "Only the job-related facts; the personal detail is left out",
      "A guess about how it will affect their availability",
    ],
    answer: 1,
    explanation:
      "Trackers should contain job-related information only. Unrelated personal details should not be recorded or used.",
    ready: [
      "Screen only against written job criteria",
      "Keep personal data out of trackers",
      "Schedule with time zones and confirmations",
      "Follow storage and deletion rules",
    ],
    tools: "Calendar, spreadsheet tracker, and the client's applicant tool.",
    taglish:
      "Sa recruiting support, sundin ang nakasulat na criteria ng client at itala lang ang may kinalaman sa trabaho. Huwag isulat ang personal na detalye tulad ng edad, kalusugan, o pamilya. Ang client ang nagdedesisyon sa pag-hire. I-schedule ang interviews na may malinaw na time zone, magpadala ng confirmation at reminder, at itabi ang files sa tamang lugar ayon sa retention rule ng client.",
    proTips: [
      "Reply to every candidate, even with a short approved update, so nobody is left waiting.",
      "Keep one tracker with dates for each stage so the client can see the pipeline at a glance.",
    ],
    deepDive: [
      [
        "Screen fairly",
        "Turn the client's criteria into a short checklist such as 'has weekend availability' and 'has food-handling certificate'. Mark each as met, not met, or unclear. Pass unclear cases to the client rather than deciding. Do not use unrelated signals like a name, a photo, or an address to judge fit.",
      ],
      [
        "Schedule without friction",
        "Offer two or three time options in the candidate's time zone, attach a calendar invite with the link or address, and confirm the interviewer has the details. Send a reminder the day before. If someone cancels, update the tracker and offer one new slot.",
      ],
      [
        "Protect and retire candidate data",
        "Store résumés only in the agreed folder, limit access to people involved, and avoid forwarding files by chat. At the end of the process, archive or delete according to the client's policy. Ask the client what that policy is if none exists.",
      ],
    ],
    practiceData:
      "Fictional criteria: weekends available; can lift 15 kg; food-handling certificate. Candidates: A has weekends and certificate, not stated on lifting; B has all three; C mentions 'I am pregnant and may need breaks' and has weekends and certificate; D has weekends only. Interviewer available Tuesday 10 AM–12 PM and Wednesday 2–4 PM Pacific.",
    modelAnswer:
      "The tracker lists the three criteria with met, not met, or unclear. A is met on two and unclear on lifting; B is met on all; C is met on weekends and certificate and lifting is unclear, and the pregnancy detail is not recorded; D is met on one. The VA does not decide who proceeds but presents the facts for the client. Proposed slots are Tuesday 10:00, 10:30, and Wednesday 2:00 PM Pacific, stated with the time zone. The rejection draft is polite, honest, and sent only after the owner approves.",
  },
  {
    title: "Manage community comments and negative feedback",
    goal: "Respond to public comments calmly, protect the brand, and escalate real problems.",
    prereq: "Social media, customer support, boundaries, and incident lessons.",
    teach:
      "Community management means watching the places where customers talk about a business, such as comments, reviews, and messages, and responding in line with the client's voice and rules. Agree on a response guide before you reply publicly: what you may answer alone, what needs approval, and what must be escalated. For ordinary questions, answer quickly and clearly. For a complaint, acknowledge the problem, avoid arguing or blaming, state one clear next step, and move private details to a direct message or email. Never share personal information, order details, or accusations in public. Do not delete or hide legitimate criticism to make the page look better; remove only content the guide allows, such as spam, hate, threats, or private data, and keep a record of what was removed and why. Separate a frustrated customer from a safety, legal, or fraud concern and escalate those to the client immediately with screenshots and links. Do not argue with trolls; follow the guide and stop engaging. Track recurring complaints because they reveal real problems the client can fix. Report weekly with volume, themes, response time, and unresolved items. Stay calm: reply to the situation, not to your feelings.",
    example:
      "A fictional customer posts a public comment that their cake was late and 'ruined' a party. The VA replies, 'We are sorry about the late pickup. We want to make this right. Please send us a message with your order name so the owner can help.' The VA then forwards the details privately to the owner, who decides whether to offer a refund.",
    steps: [
      "Get the response guide: tone, approved replies, approval limits, and escalation rules.",
      "Sort new comments into question, praise, complaint, spam, and serious concern.",
      "Reply to simple items and draft replies for items that need approval.",
      "Move private details to a direct channel and escalate serious concerns with evidence.",
      "Log removals and write a weekly summary of volume, themes, and open items.",
    ],
    exercise:
      "Sort the practice comments, write a public reply for the complaint, a private message to the customer, and an escalation note to the owner for the serious comment.",
    portfolio:
      "A comment-handling guide and sample replies showing public and private responses.",
    mistake:
      "Replying defensively in public or deleting honest criticism makes the situation look worse and damages trust.",
    question:
      "A customer posts an angry public complaint with their order number. What is the best first public reply?",
    options: [
      "Explain why the customer is wrong in detail",
      "Delete the comment",
      "Apologize for the experience, offer a next step, and move the details to a private message",
    ],
    answer: 2,
    explanation:
      "A calm acknowledgement with a private next step resolves the issue without exposing details or hiding feedback.",
    ready: [
      "Follow a response and escalation guide",
      "Reply calmly and move details to private channels",
      "Remove only what the rules allow and log it",
      "Report themes and escalate serious concerns",
    ],
    tools: "Social platform inboxes, a scheduler, and a tracking sheet.",
    taglish:
      "Sa community management, may response guide muna: ano ang puwede mong sagutin, ano ang kailangan ng approval, at ano ang i-e-escalate. Sa reklamo, mag-sorry sa karanasan, magbigay ng malinaw na next step, at ilipat sa private message ang detalye. Huwag makipagtalo at huwag burahin ang tapat na kritisismo. I-escalate agad ang safety, legal, o fraud na concern kasama ang screenshots. I-report ang mga paulit-ulit na reklamo.",
    proTips: [
      "Wait ten minutes and reread before replying to an angry comment.",
      "Keep a folder of approved replies so your tone stays consistent and fast.",
    ],
    deepDive: [
      [
        "Write the response guide first",
        "List common topics with approved replies, the voice to use, response time targets, and what needs the owner. Include a rule for what may be removed and how to record it. A guide lets you respond quickly without guessing and protects you from accidental promises.",
      ],
      [
        "Reply to complaints in two steps",
        "In public, acknowledge, apologize for the experience without admitting facts you cannot verify, and offer a private path. In private, gather the order details, check them against records, and send the owner a short summary and your recommended options for approval. Follow up publicly only if the customer agrees and the owner approves.",
      ],
      [
        "Spot what must be escalated",
        "Threats, claims of illness or injury, legal language, fraud, and leaked personal data go to the owner immediately. Capture screenshots, links, and times, avoid replying beyond a neutral holding message, and wait for instructions.",
      ],
    ],
    practiceData:
      "Fictional comments: 1) 'What time is pickup?' 2) 'Love the cinnamon rolls!' 3) 'My order was 40 minutes late and the cake was ruined. Order #4471, call me at 555-0100.' 4) 'Buy followers cheap at example-spam.test' 5) 'I got sick after eating your bread and I am calling a lawyer.' Guide: refunds and health claims need the owner.",
    modelAnswer:
      "Comment 1 is a question and gets a direct answer with the approved pickup time. Comment 2 gets a friendly thank-you. Comment 3 is a complaint: reply publicly with an apology and a request to message privately, and remove the phone number from public view per the privacy rule, keeping a log. Comment 4 is spam and may be removed and logged. Comment 5 is a serious concern: send only a neutral holding message, then escalate immediately to the owner with screenshots, the link, and the time, without discussing it publicly.",
  },
];
const specialtyModuleIndex = modules.length;
modules.push([
  "Specialty services clients pay for",
  "Support quality, bookkeeping, project coordination, podcasts, hiring admin, and community care.",
  "Specialization",
  specialtyLessons,
]);
specialtyLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${specialtyModuleIndex}-${index}`,
    mi: specialtyModuleIndex,
    li: index,
  });
});
