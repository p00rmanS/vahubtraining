/** Owning mistakes, client preference playbooks, and ethical feedback and testimonials. Append IDs to preserve existing progress. */
const recoveryTrustLessons = [
  {
    title: "Own a mistake and write a short incident report",
    goal: "Report an error quickly and honestly, limit the damage, and show the client how it will not happen again.",
    prereq: "Communication, quality-check, and risk-register lessons.",
    teach:
      "Every VA makes mistakes: a wrong date, a message sent to the wrong person, a file deleted, a payment entered twice. Clients rarely leave over a mistake; they leave over hiding it or handling it badly. When you notice an error, act in this order. First, stop the damage: pause the process, recall or correct what you can, and do not make further changes that could hide the evidence. Second, tell the right person quickly, ideally within the hour for anything that affects money, privacy, customers, or deadlines. Do not wait until you have a perfect fix. Third, write a short, factual message: what happened, when you found it, who or what is affected, what you have done already, and what you suggest next. Avoid excuses, blame, and heavy self-criticism; one sentence of apology is enough. Fourth, fix what is in your control, and check that the fix worked. If personal data went to the wrong person, tell the client immediately because they may have legal duties to report it; do not decide that on your own. Fifth, find the cause. Ask what allowed the mistake: a missing checklist, unclear instruction, rush, or a confusing tool. Sixth, write a brief incident note with the timeline, the cause, the fix, and the change you will make, such as a checklist step or a second check. Update the checklist or SOP so the change actually happens. Keep a log of incidents to spot patterns. Share the note with the client in a calm tone, and offer to review the change at the next meeting.",
    example:
      "A fictional VA sends the weekly order summary, which includes customer phone numbers, to a supplier's address that autofilled by mistake. She notices within ten minutes, asks the email system to recall it, and messages the owner right away: what was sent, to whom, when she noticed, and what she has done. She asks the supplier to delete the email and confirm in writing. The owner decides on next steps. She writes a short incident note, turns off autofill for that thread, and adds a 'check recipients' line to her send checklist.",
    steps: [
      "Stop the damage and avoid changes that hide what happened.",
      "Tell the right person quickly with a short, factual message.",
      "Fix what is in your control and confirm the fix worked.",
      "Find the cause and write a brief incident note with the change you will make.",
      "Update the checklist or SOP and log the incident.",
    ],
    exercise:
      "Write the first message and the incident note for the practice mistake, and name one checklist change that would prevent it.",
    portfolio:
      "A sample incident message and a one-page incident note with a prevention change.",
    mistake:
      "Hiding an error and hoping nobody notices turns a small problem into a breach of trust that is hard to repair.",
    question:
      "You sent customer details to the wrong address ten minutes ago. What should you do first?",
    options: [
      "Try to recall the message, tell the client right away, and describe what happened and what you did",
      "Wait to see if the recipient replies",
      "Fix it quietly and tell nobody",
    ],
    answer: 0,
    explanation:
      "Speed and honesty limit harm and let the client meet any duties they have. Do not decide alone whether a report is required.",
    ready: [
      "Stop the damage and keep the evidence",
      "Tell the right person quickly and factually",
      "Fix, verify, and find the cause",
      "Change the checklist so it does not repeat",
    ],
    tools:
      "The client's message channel, an incident log, and the team's checklists.",
    taglish:
      "Lahat ng VA ay nagkakamali: maling petsa, mensaheng napunta sa maling tao, nabura na file, o bayad na dalawang beses naipasok. Bihirang umalis ang client dahil sa pagkakamali; umaalis sila dahil sa pagtatago o maling paghawak nito. Kapag napansin mo ang error, sundin ang ayos. Una, pigilan ang pinsala: ihinto ang proseso, bawiin o itama ang kaya, at huwag gumawa ng pagbabagong magtatago ng ebidensya. Pangalawa, sabihin agad sa tamang tao, perpekto sa loob ng isang oras kung may kinalaman sa pera, privacy, customer, o deadline; huwag hintaying perpekto ang solusyon. Pangatlo, sumulat ng maikli at factual na mensahe: ano ang nangyari, kailan mo nalaman, sino o ano ang apektado, ano ang nagawa mo na, at ano ang mungkahi. Iwasan ang palusot, sisihan, at sobrang pagpaparusa sa sarili; sapat ang isang pangungusap na paumanhin. Pang-apat, ayusin ang nasa kontrol mo at tiyaking gumana. Kung napunta sa maling tao ang personal na data, sabihin agad sa client dahil baka may legal na tungkulin silang mag-ulat; huwag kang magpasya mag-isa. Panglima, hanapin ang sanhi: kulang na checklist, malabong utos, pagmamadali, o nakalilitong tool. Pang-anim, sumulat ng maikling incident note na may timeline, sanhi, ayos, at pagbabagong gagawin. I-update ang checklist o SOP para mangyari talaga ang pagbabago. Magtago ng log para makita ang pattern. Ibahagi ang note sa calm na tono.",
    proTips: [
      "Write the message in this order: what happened, what you did, what you suggest. A calm client reads three short lines and replies fast.",
      "Keep a 'near misses' list too. Catching a mistake before it lands is the cheapest lesson you will ever get.",
    ],
    deepDive: [
      [
        "Speed beats polish",
        "Tell the right person quickly, even before you have a complete fix. Stop the process, recall what you can, and preserve what you cannot undo. A short honest message in the first hour limits harm and keeps trust.",
      ],
      [
        "Facts, not blame",
        "State what happened, when you found it, who or what is affected, and what you have done. One sentence of apology is enough. When personal data is involved, the client decides about reporting; your job is to tell them promptly and accurately.",
      ],
      [
        "Fix the system",
        "Ask what allowed the error: unclear instructions, rush, no checklist, or a confusing tool. Write the cause and one concrete change, then put the change into the checklist or SOP so it actually happens next time.",
      ],
    ],
    practiceData:
      "Fictional incident: the VA emailed the weekly order summary with customer phone numbers to a supplier because the address autofilled. She noticed after ten minutes. The email system allows recall. The owner is online. No similar mistakes have occurred before. The VA's current send routine has no recipient check step.",
    modelAnswer:
      "Recall the email, then message the owner within the hour: 'I sent the weekly order summary with customer phone numbers to the wrong address (supplier) at 10:05 because of autofill. I noticed at 10:15, recalled it, and asked the supplier to delete it and confirm. Please tell me whether you want to notify anyone.' Verify the recall and get the supplier's written confirmation. Cause: autofill and no recipient check. Incident note: timeline, cause, fix, change. Prevention: turn off autofill for these threads and add a 'check recipients and attachments' step to the send checklist. Log the incident.",
  },
  {
    title: "Build a client playbook so you anticipate needs",
    goal: "Record each client's preferences, rules, and routines in one place so work is consistent and nothing depends on memory.",
    prereq: "Knowledge base, SOP, and communication lessons.",
    teach:
      "The best VAs seem to read their client's mind. Usually it is not magic, it is a client playbook: a short, living document that records how this client likes things done. A playbook saves repeated questions, keeps work consistent, and makes it easy for a backup or replacement to step in. Create one document per client, kept in the client's own shared space, and keep it brief. Include the basics: who to contact for what, working hours and time zone, response expectations, and preferred channels for urgent and non-urgent matters. Add communication preferences: tone, how they sign emails, words to use or avoid, and how much detail they want in updates. Record approval rules: what you may do alone, what needs a yes first, and spending or sending limits. List recurring tasks with timing and links to the SOPs. Add the brand notes: logo, colors, and where the assets live. Note key people and their roles, important dates, and regular events. Include a short 'never do' list, such as never promise delivery dates or never reply to a certain contact without asking. Record decisions as they happen with a date, so the playbook shows why things are done a certain way. Never put passwords or private personal data in the playbook; point to the password manager. Review it every quarter with the client and remove outdated entries. Mark anything you assumed instead of confirmed, and ask at the next chance. A playbook helps you anticipate needs, but it never replaces asking when something is new, unclear, or high-risk.",
    example:
      "A fictional bakery owner always rewrites the VA's customer emails to be warmer and shorter. The VA starts a playbook and records: tone is friendly and short, sign off with 'Warmly, Maria', never promise same-day delivery, refunds need the owner's yes, quiet hours after 6 PM Manila time. After two weeks the owner stops rewriting the emails. When the VA takes a week off, the backup follows the playbook and nobody has to explain the basics.",
    steps: [
      "Create one short playbook per client in the client's own shared space.",
      "Record contacts, hours, channels, tone, and approval rules.",
      "Link recurring tasks to their SOPs and note key dates and people.",
      "Add a 'never do' list and date-stamped decisions, with no passwords or private data.",
      "Review it with the client every quarter and mark assumptions to confirm.",
    ],
    exercise:
      "Write a one-page playbook for the practice client, including approval rules, tone notes, and a never-do list.",
    portfolio:
      "A one-page client playbook with sections for contacts, preferences, approvals, and recurring tasks.",
    mistake:
      "Treating the playbook as permission to stop asking questions leads to confident mistakes when something has changed.",
    question: "Which item does NOT belong in a client playbook?",
    options: [
      "The client's account passwords",
      "Preferred tone and email sign-off",
      "Rules about what needs approval first",
    ],
    answer: 0,
    explanation:
      "Passwords belong in a password manager. The playbook should point to the manager, not store secrets.",
    ready: [
      "Keep the playbook short and in the client's space",
      "Record preferences, approvals, and never-do rules",
      "Date-stamp decisions and mark assumptions",
      "Review it with the client every quarter",
    ],
    tools:
      "A shared document in the client's space, the SOP folder, and the password manager.",
    taglish:
      "Parang nababasa ng pinakamahusay na VA ang isip ng client. Karaniwan, hindi ito mahika kundi client playbook: maikli at buhay na dokumento ng kung paano gusto ng client ang mga bagay. Nakakatipid ito sa paulit-ulit na tanong, pinapanatiling pare-pareho ang trabaho, at pinapadali ang pagpasok ng backup. Gumawa ng isang dokumento kada client sa sariling shared space ng client, at panatilihing maikli. Isama ang mga batayan: sino ang kokontakin para sa ano, oras at time zone, inaasahang bilis ng sagot, at gustong channel para sa urgent at hindi urgent. Idagdag ang kagustuhan sa komunikasyon: tono, paano pumirma, mga salitang gagamitin o iiwasan, at gaano karaming detalye ang gusto sa update. Itala ang mga patakaran sa approval: ano ang puwede mong gawin mag-isa, ano ang kailangan ng oo muna, at limitasyon sa gastos o pagpapadala. Ilista ang paulit-ulit na gawain na may timing at link sa SOP. Idagdag ang brand notes at kung nasaan ang assets. Itala ang mahahalagang tao, petsa, at regular na event. Maglagay ng maikling 'never do' list, tulad ng huwag mangako ng petsa ng delivery. Itala ang mga desisyon na may petsa. Huwag maglagay ng password o pribadong data; ituro ang password manager. I-review kada quarter at alisin ang luma. Markahan ang inakala mo lang at itanong sa susunod. Hindi pinapalitan ng playbook ang pagtatanong kapag bago, malabo, o mataas ang panganib.",
    proTips: [
      "After every correction a client makes to your work, ask yourself what rule it reveals and add one line to the playbook. Corrections are free training.",
      "Open the playbook at the start of every work session for a week. If you keep finding gaps, you are using it, and that is what makes it improve.",
    ],
    deepDive: [
      [
        "Capture what clients keep correcting",
        "Every correction hides a preference: tone, length, timing, or who gets copied. Write each one as a short rule with the date. Over a few weeks the playbook describes exactly how the client likes things done.",
      ],
      [
        "Approval rules and limits",
        "Spell out what you may do alone, what needs a yes, and any spending or sending limits. A never-do list prevents the costly mistakes, such as promising delivery times or contacting certain people without asking.",
      ],
      [
        "Keep it alive and safe",
        "Store the playbook in the client's own space, with no passwords or private personal data. Review it each quarter, remove outdated entries, and mark assumptions to confirm. It supports your judgment but never replaces asking.",
      ],
    ],
    practiceData:
      "Fictional client notes: the owner rewrites emails to be warmer and shorter; signs 'Warmly, Maria'; refunds always need her yes; never promise same-day delivery; does not want messages after 6 PM Manila time; urgent matters by phone call, others by chat; supplier orders go out every Wednesday; the logo files are in the Brand folder; the owner shared a bank login in chat once.",
    modelAnswer:
      "Sections: Contacts and hours (no messages after 6 PM Manila time; urgent by phone, others by chat). Tone: warm and short, sign 'Warmly, Maria'. Approvals: refunds need Maria's yes first. Never do: never promise same-day delivery. Recurring: supplier orders every Wednesday (link to SOP). Brand: logo in Brand folder. Decisions: dated list. Do not store the bank login; move it to the password manager, advise the owner to change it, and point to the manager in the playbook. Mark assumptions and review quarterly.",
  },
  {
    title: "Ask for feedback and testimonials the right way",
    goal: "Collect honest client feedback and ethical testimonials without breaking confidentiality or pressuring anyone.",
    prereq: "Portfolio, referral, and confidentiality lessons.",
    teach:
      "Feedback helps you improve, and testimonials help you win new clients, but both need care. Start with feedback, not praise. Ask at natural moments, such as after a project, at a month-end review, or after a quarter. Keep the request short and specific: ask two or three questions such as what has helped the most, what could be better, and what you should start or stop doing. Offer an easy way to answer, like a reply or a five-minute call, and thank them either way. Take criticism calmly: do not argue, ask for an example if unclear, and say what you will change. Record the feedback and the action you took. After a good result, when the client is happy, you can ask if they would be willing to give a short testimonial. Make it easy by offering a few prompts rather than writing it for them. Never write a fake testimonial, invent a client, or edit a quote in a way that changes its meaning. Always get written permission to use the words, the name, the company name, and any photo or logo, and agree where it will appear. Confidentiality comes first: many clients do not want to be named, and you must not share private details of their business, customers, or finances. Offer anonymous options such as 'a bakery owner in Cebu' with their approval. Do not offer discounts or gifts in exchange for positive words in a way that could mislead readers, and follow the platform rules on reviews. Keep permission records and honor requests to remove a testimonial. Use the real words with the date, and update your portfolio only with approved material.",
    example:
      "After the fictional bakery's best month, the VA asks the owner three questions by message: what helped the most, what could be better, and what to start or stop. The owner says weekly summaries helped most and asks for faster replies on weekends. The VA records both and adjusts her weekend check. Later she asks for a short testimonial with three prompts. The owner writes two sentences and agrees in writing to use her first name and 'bakery owner' but not the shop name. The VA saves the permission and uses the exact words.",
    steps: [
      "Ask for feedback first at natural moments with two or three specific questions.",
      "Listen without arguing, record it, and act on one change.",
      "Ask for a testimonial only after a good result, with prompts and no ghostwriting.",
      "Get written permission for the words, name, company, and any photo or logo.",
      "Use the exact words, respect confidentiality, and keep records of permission.",
    ],
    exercise:
      "Write the feedback request, the testimonial request with prompts, and the permission message for the practice client.",
    portfolio:
      "A feedback request template, a testimonial request, and a permission record template.",
    mistake:
      "Polishing a client's words into something they did not say, or naming them without permission, can break trust and rules.",
    question:
      "A client gives you a good quote but says nothing about naming them. What should you do?",
    options: [
      "Ask for written permission about the name, company, and where it will appear",
      "Use their full name since the quote was positive",
      "Remove the quote and never ask again",
    ],
    answer: 0,
    explanation:
      "Written permission covers the exact use. Without it, use no name or detail beyond what was agreed.",
    ready: [
      "Ask for feedback before praise",
      "Never fake or reshape a testimonial",
      "Get written permission for names and logos",
      "Protect confidential client details",
    ],
    tools:
      "A short feedback form or message template and a permissions record.",
    taglish:
      "Tinutulungan ka ng feedback na gumaling at tinutulungan ka ng testimonial na makakuha ng bagong client, pero pareho silang nangangailangan ng ingat. Magsimula sa feedback, hindi papuri. Magtanong sa natural na sandali, tulad ng pagkatapos ng proyekto, sa buwanang review, o pagkatapos ng quarter. Panatilihing maikli at tiyak: dalawa o tatlong tanong, tulad ng ano ang pinakanakatulong, ano ang puwedeng gumanda, at ano ang dapat simulan o ihinto. Magbigay ng madaling paraan ng pagsagot at magpasalamat. Tanggapin ang puna nang kalmado: huwag makipagtalo, humingi ng halimbawa kung malabo, at sabihin kung ano ang babaguhin mo. Itala ang feedback at ang ginawa mo. Pagkatapos ng magandang resulta, puwede kang humingi ng maikling testimonial. Padaliin sa pamamagitan ng ilang prompt, hindi sa pagsusulat para sa kanila. Huwag gumawa ng pekeng testimonial, mag-imbento ng client, o baguhin ang quote para mabago ang kahulugan. Laging kumuha ng nakasulat na pahintulot para sa mga salita, pangalan, kumpanya, at anumang larawan o logo, at kung saan ito ilalabas. Una ang confidentiality: maraming client ang ayaw pangalanan, at hindi mo dapat ibahagi ang pribadong detalye ng negosyo, customer, o pera. Mag-alok ng anonymous na opsyon, tulad ng 'bakery owner sa Cebu', kung aprubado nila. Huwag mag-alok ng diskwento o regalo kapalit ng positibong salita sa paraang nakaliligaw, at sundin ang patakaran ng platform sa review. Itago ang rekord ng pahintulot at igalang ang hiling na alisin ang testimonial.",
    proTips: [
      "Ask for feedback after delivering a clear win, within a week while the result is fresh. Memory fades faster than clients expect.",
      "Offer two sentence starters, like 'Before working with her...' and 'Now...'. Prompts get honest, specific testimonials without putting words in anyone's mouth.",
    ],
    deepDive: [
      [
        "Feedback before testimonials",
        "Ask two or three specific questions at natural moments and make replying easy. Receive criticism calmly, ask for an example when it is unclear, and record what you will change. A client who sees you act on feedback is far more likely to recommend you.",
      ],
      [
        "Ethical testimonials",
        "Offer prompts but let the client write in their own words. Never invent, ghostwrite, or edit a quote so its meaning changes. Do not exchange incentives for positive reviews in ways that mislead readers, and follow platform rules.",
      ],
      [
        "Permission and confidentiality",
        "Get written permission for the exact words, name, company, and any photo or logo, and for where it will appear. Offer anonymous wording. Never reveal private business, customer, or financial details, and keep a record so you can remove a testimonial on request.",
      ],
    ],
    practiceData:
      "Fictional situation: the bakery owner is happy after the best sales month. She said in a call that weekly summaries helped most and weekends are slow for replies. She wrote a two-sentence praise message but did not mention whether you can use it publicly. Another client who prefers privacy asked not to be named anywhere.",
    modelAnswer:
      "Feedback message: ask what helped most, what could be better, and what to start or stop; record 'weekly summaries help; weekend replies are slow' and act by adding a weekend check. Testimonial request with two prompts after the win. Permission message: 'May I use your two sentences on my portfolio with your first name and the title bakery owner? I will not name the shop unless you say so. Please reply yes, and tell me if you want it removed later.' Save the written reply. For the private client, use no name and no detail, anonymous wording only if they approve in writing.",
  },
];

const recoveryTrustModuleIndex = modules.length;
modules.push([
  "Trust, playbooks, and feedback",
  "Own mistakes, keep a client playbook, and collect feedback and testimonials ethically.",
  "Advanced workflow",
  recoveryTrustLessons,
]);
recoveryTrustLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${recoveryTrustModuleIndex}-${index}`,
    mi: recoveryTrustModuleIndex,
    li: index,
  });
});
