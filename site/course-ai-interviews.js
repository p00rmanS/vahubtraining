/** AI work you can defend, interview skills, and the first 30 days. Append IDs to preserve existing progress. */
const aiDefendLessons = [
  {
    title: "Build a tested prompt library for repeat tasks",
    goal: "Turn your best prompts into reusable, tested templates with clear inputs, so AI saves time without lowering quality.",
    prereq: "AI and prompt-writing lessons and the verify-AI-output lesson.",
    teach:
      "Writing a new prompt for every task wastes time and gives uneven results. A prompt library holds tested templates for tasks you repeat: summarizing a thread, drafting a polite reply, cleaning a list, or turning notes into a checklist. Create each template with six parts: the task, the role or point of view, the context, the rules, the output format, and a check step. Use clear placeholders such as [NAME], [GOAL], and [TEXT] so you know exactly what to fill in. Put the rules that protect people into the template itself: never include real passwords, customer names, or private details unless the client's policy allows the tool, and ask the tool to mark anything uncertain instead of guessing. Test every template on fictional examples at least three times, including a tricky one, and note what went wrong and how you fixed the wording. Give each template a name, a version, the date last tested, and an example of good output. Store the library in a shared document the client can see, grouped by task. Measure what you gain: time with and without the template, and how many corrections the output needed. Retire templates that do not save time. Keep a short note beside each one about the review step you must always do, because AI can sound confident and still be wrong. Review the library every month, since tools and policies change, and never present AI output as final without checking facts, tone, and numbers.",
    example:
      "A fictional VA writes the same customer reply for the bakery daily. She builds a template: task 'draft a reply', context [ORDER DETAILS], rules 'friendly, under 80 words, no promises about delivery dates, mark anything unknown with [CHECK]', format 'subject plus body'. She tests it on three fictional cases, including an angry one, and fixes a rule that let the tool promise a date. She logs v2, the test date, and a sample. Replies drop from eight minutes to three, and she always checks the order number and tone before sending for approval.",
    steps: [
      "List the tasks you repeat and pick one to template.",
      "Write the template with task, role, context, rules, format, and a check step, using placeholders.",
      "Build privacy and no-guessing rules into the template.",
      "Test on at least three fictional cases and record fixes, version, date, and a sample.",
      "Store it in a shared library, measure time saved, and review monthly.",
    ],
    exercise:
      "Create one template for a repeat task, test it on three fictional cases, and record the version and time saved.",
    portfolio:
      "A prompt library page with two tested templates, their versions, and test notes.",
    mistake:
      "Using a prompt once without testing and trusting the output means errors repeat every time you reuse it.",
    question: "What is the best way to confirm a new prompt template works?",
    options: [
      "Test it on several fictional cases, including a tricky one, and record fixes",
      "Use it once on a real client task",
      "Copy it from a stranger's post",
    ],
    answer: 0,
    explanation:
      "Testing on varied fictional cases finds weaknesses before real work is affected, and the notes make the template better.",
    ready: [
      "Template the tasks you repeat",
      "Build safety and no-guessing rules into prompts",
      "Test on fictional cases and version the template",
      "Measure time saved and review monthly",
    ],
    tools:
      "An approved AI tool, a shared document for the library, and fictional test cases.",
    taglish:
      "Sayang ng oras ang pagsusulat ng bagong prompt para sa bawat gawain at hindi pantay ang resulta. Ang prompt library ay may mga nasubukang template para sa paulit-ulit mong gawain: pagbubuod ng thread, pagsulat ng magalang na sagot, paglilinis ng listahan, o paggawa ng checklist mula sa notes. Gumawa ng template na may anim na bahagi: gawain, papel o pananaw, konteksto, tuntunin, anyo ng output, at hakbang ng pag-check. Gumamit ng malinaw na placeholder tulad ng [NAME], [GOAL], at [TEXT]. Ilagay sa template ang mga tuntuning nagpoprotekta sa tao: huwag maglagay ng totoong password, pangalan ng customer, o pribadong detalye maliban kung pinapayagan ng patakaran ng client ang tool, at ipamarka sa tool ang hindi sigurado sa halip na manghula. Subukan ang bawat template sa fictional na halimbawa nang hindi bababa sa tatlong beses, kasama ang mahirap na kaso, at itala ang pumalpak at paano inayos. Bigyan ng pangalan, version, petsa ng huling test, at halimbawa ng magandang output. Itago ang library sa shared na dokumentong nakikita ng client. Sukatin ang natipid: oras na may template at wala, at ilang pagwawasto ang kailangan. Alisin ang template na hindi nakakatipid. Maglagay ng tala sa tabi ng bawat isa tungkol sa review na laging gagawin, dahil ang AI ay puwedeng mukhang tiyak pero mali. I-review ang library kada buwan at huwag ituring na pinal ang AI output nang hindi chine-check ang facts, tono, at numero.",
    proTips: [
      "Add one rule to every template: 'If you are not sure, write [CHECK] instead of guessing.' It turns silent errors into visible flags.",
      "Keep a 'bad output' folder. The failures teach you more about the tool than the successes do.",
    ],
    deepDive: [
      [
        "Six parts of a good template",
        "State the task, the role, the context, the rules, the output format, and a check step. Use placeholders so the fill-in is obvious and nothing private is pasted by accident. A template that is clear to you in six months is clear to a colleague today.",
      ],
      [
        "Test like a skeptic",
        "Run each template on at least three fictional cases, including an awkward one. Write down what failed and how you changed the wording. Record the version and date so you know which version produced which result.",
      ],
      [
        "Measure and maintain",
        "Compare time with and without the template and count corrections. Retire templates that do not help. Review monthly, because tools change and client policies change, and always check facts, tone, and numbers before anything goes out.",
      ],
    ],
    practiceData:
      "Fictional task: reply to bakery customers about order questions. Order details field is [ORDER DETAILS]. Policy: no promises about delivery dates; refunds decided by the owner. Test cases: a friendly question about pickup hours; an angry message about a late order; a question about a refund. Current manual time: eight minutes per reply.",
    modelAnswer:
      "Template v1: Task: draft a reply to a customer. Role: friendly bakery assistant. Context: [ORDER DETAILS] and the customer's message [TEXT]. Rules: under 80 words, warm tone, no promises about delivery dates, never decide refunds, write [CHECK] where unsure, no private data. Format: subject line plus body. Check: confirm order number, names, and tone. Test on the three cases; if the angry case promises a date, add a stronger rule and record v2. Log version, date, sample output, and time saved (eight minutes to about three).",
  },
  {
    title:
      "Review AI output with a rubric and set an AI-use policy with clients",
    goal: "Check AI-assisted work for accuracy, privacy, and tone with a repeatable rubric, and agree clearly with each client how AI will be used.",
    prereq: "Prompt library, confidentiality, and quality-check lessons.",
    teach:
      "Clients increasingly ask whether you use AI, and some forbid it for sensitive work. Being open and careful sets you apart. Start by asking each client for their rules, and write a short AI-use policy that you both agree to: which tools you may use, which tasks AI may help with, what data may never be entered, and whether you will tell them when AI helped. If you handle confidential or regulated data, use only tools the client approves and follow their settings, such as turning off training on your data where the tool allows it. Never paste passwords, financial account numbers, health details, or private customer data into an unapproved tool. Treat all AI output as a draft from a fast junior colleague: it can be wrong, invent sources, and miss context. Use a rubric before anything goes out: facts and numbers checked against the source, names and dates correct, no invented quotes or links, tone matches the brand, nothing private leaked, nothing in it that you could not explain yourself, and the format is right. Score each item pass or fix, and fix before sending. Keep a record of what the tool produced and what you changed for important work. If you cannot verify a claim, remove it or flag it for the client. Disclose AI use as agreed, in plain words, such as 'drafted with AI and reviewed by me'. Do not claim AI work as entirely your own hand if the client asked to be told, and never use AI to pretend to be a person or to fake reviews. Take responsibility for the final work: the client hired you, not the tool. Update the policy when the tools or the client's rules change.",
    example:
      "A fictional bakery owner asks if the VA uses AI. The VA proposes a one-page policy: AI may help draft emails and summarize public information; no customer names, payment details, or recipes may be entered; every item is reviewed before it goes out; and she will say 'drafted with AI, reviewed by me' on content. The owner agrees. A draft promotion claims 'voted best in the city'. Using her rubric, she cannot verify it, so she removes the claim, corrects a date, and fixes the tone. She logs what she changed and sends it for approval.",
    steps: [
      "Ask the client for their AI rules and agree a short written policy.",
      "Use only approved tools and never enter passwords, account numbers, health, or private customer data.",
      "Treat output as a draft and run a rubric for facts, names, dates, links, tone, and privacy.",
      "Remove or flag anything you cannot verify and log changes on important work.",
      "Disclose AI use as agreed and update the policy when things change.",
    ],
    exercise:
      "Write a one-page AI-use policy for the practice client and review a practice AI draft using the rubric.",
    portfolio:
      "A one-page AI-use policy and a completed review rubric on a practice draft.",
    mistake:
      "Sending AI-generated text without checking it can publish invented facts, wrong numbers, or private details under the client's name.",
    question:
      "An AI draft contains a claim you cannot verify. What should you do?",
    options: [
      "Remove it or flag it for the client instead of publishing it",
      "Keep it because it sounds convincing",
      "Ask the AI to confirm it is true",
    ],
    answer: 0,
    explanation:
      "AI can invent facts that sound convincing. If you cannot verify a claim from a real source, it should not go out.",
    ready: [
      "Agree an AI-use policy in writing",
      "Never enter private data into unapproved tools",
      "Review every output with a rubric",
      "Disclose as agreed and take responsibility",
    ],
    tools: "A one-page policy template, a review rubric, and a change log.",
    taglish:
      "Palaki nang palaki ang mga client na nagtatanong kung gumagamit ka ng AI, at ang ilan ay ipinagbabawal ito sa sensitibong trabaho. Ang pagiging bukas at maingat ang nagpapaiba sa iyo. Magsimula sa pagtatanong ng patakaran ng client at sumulat ng maikling nakasulat na AI-use policy na parehong sinang-ayunan: aling tool ang puwede, aling gawain ang puwedeng tulungan ng AI, anong data ang hindi dapat ilagay kailanman, at kung sasabihin mo ba kapag ginamit ang AI. Kung may hawak kang kumpidensyal o regulated na data, gamitin lang ang tool na aprubado ng client at sundin ang setting nila, tulad ng pag-off ng training sa data mo kung puwede. Huwag maglagay ng password, account number, detalye ng kalusugan, o pribadong data ng customer sa hindi aprubadong tool. Ituring ang lahat ng AI output bilang draft ng mabilis na junior na kasamahan: puwedeng mali, mag-imbento ng source, at makaligtaan ang konteksto. Gumamit ng rubric bago lumabas ang anuman: facts at numero na chine-check sa source, tamang pangalan at petsa, walang imbentong quote o link, akma ang tono sa brand, walang na-leak na pribado, at kaya mong ipaliwanag ang bawat nilalaman. Markahan ang bawat item na pass o fix at ayusin bago ipadala. Magtago ng tala kung ano ang ginawa ng tool at ano ang binago mo sa mahahalagang trabaho. Kung hindi mo ma-verify ang claim, alisin o i-flag sa client. Sabihin ang paggamit ng AI ayon sa napagkasunduan, tulad ng 'drafted with AI and reviewed by me'. Huwag ipagpanggap ang AI bilang tao o gamitin sa pekeng review. Ikaw ang mananagot sa final na trabaho, hindi ang tool.",
    proTips: [
      "Read the AI draft aloud before reviewing it. Awkward phrasing and invented-sounding claims jump out when you hear them.",
      "If a client's rules ban AI, say 'understood' and keep a note. Respecting that rule builds more trust than any time saved.",
    ],
    deepDive: [
      [
        "Agree the rules first",
        "Ask what tools are approved, what tasks AI may help with, and what data may never be entered. Write it on one page and have the client confirm. For confidential data, use only approved tools and follow the client's settings.",
      ],
      [
        "A rubric for every output",
        "Check facts and numbers against sources, names and dates, links and quotes for invention, tone, and privacy. Mark each pass or fix and correct before sending. Anything you cannot verify gets removed or flagged.",
      ],
      [
        "Disclose and own the result",
        "Tell the client about AI use as agreed, in plain words, and keep a log of changes on important work. Never fake reviews or pass AI off as a person. You are accountable for the final work.",
      ],
    ],
    practiceData:
      "Fictional AI draft for a bakery promotion: 'Voted best bakery in the city! Order by Friday the 15th (a Monday) for 20 percent off.' The owner said no customer names or recipes may go into AI tools and wants to be told when AI is used. The calendar shows the 15th is a Sunday.",
    modelAnswer:
      "Policy: approved tool only; AI may draft emails and summarize public information; never enter customer names, payment details, or recipes; every output reviewed; disclose as 'drafted with AI, reviewed by me'. Rubric: 'voted best bakery' cannot be verified, so remove it or flag it for the owner; the date is wrong (the 15th is a Sunday, not a Monday), so correct it against the calendar and confirm the deadline with the owner; check the 20 percent figure against the approved offer; fix the tone to the brand. Log the changes and send for approval.",
  },
];

const interviewsLessons = [
  {
    title:
      "Answer interview questions with clear stories and a Taglish-to-English warm-up",
    goal: "Prepare short, truthful stories for common interview questions and practice delivering them confidently in clear English.",
    prereq: "Portfolio, communication, and trial-task lessons.",
    teach:
      "A client interview is a chance to show how you think and behave, not just what you know. Many questions start with 'Tell me about a time when' because past behavior shows how you will work. Prepare five short stories from your real experience, including school, volunteer, or practice projects if you are new, and make each one truthful. Use a simple structure: situation (one or two sentences), task (what you were responsible for), action (what you did, step by step), and result (what changed, with a number if you have one), plus what you learned. Keep each story under two minutes. Choose stories that show reliability, accuracy, learning quickly, handling a mistake, and working with feedback. Never invent experience or exaggerate; clients often test details, and a trial task shows what you can really do. If you are comfortable thinking in Taglish, first outline your story in Taglish, then say it again in clear English using short sentences and common words; speaking slowly and plainly is better than using difficult words. Prepare for practical questions too: your availability and time zone, your tools, your rate, how you handle confidential data, and how you would handle a mistake. Practice aloud with a timer, record yourself once, and fix filler words and long pauses. Prepare two questions to ask the client, such as how success is measured in the first month and who approves work. Test your audio and camera before the call, and send a short thank-you message afterward that mentions one specific thing from the conversation.",
    example:
      "A fictional new VA prepares five stories. For 'Tell me about a time you made a mistake', she outlines in Taglish, then says in English: 'In a practice project, I sent a draft with the wrong date. I noticed within ten minutes, told my mentor, and corrected it. Since then I check dates against the calendar before sending.' It lasts 45 seconds and includes a result and a lesson. She records herself, trims filler words, prepares two questions, and sends a thank-you message that mentions the client's weekly report.",
    steps: [
      "Choose five truthful stories showing reliability, accuracy, learning, mistake handling, and feedback.",
      "Structure each as situation, task, action, result, and what you learned, under two minutes.",
      "Outline in Taglish first if helpful, then practice in short, clear English aloud with a timer.",
      "Prepare answers on availability, tools, rate, confidentiality, and mistakes, and two questions to ask.",
      "Test audio and camera and send a specific thank-you message afterward.",
    ],
    exercise:
      "Write three practice stories in the situation-task-action-result format, record one aloud, and write two questions to ask.",
    portfolio:
      "A one-page interview prep sheet with three stories and two questions.",
    mistake:
      "Inventing or exaggerating experience can be exposed by a follow-up question or a trial task and ends the opportunity.",
    question:
      "You are new and have no client experience. What should you use for your stories?",
    options: [
      "Real examples from practice projects, school, or volunteer work, told honestly",
      "Invented client projects",
      "Nothing; skip the question",
    ],
    answer: 0,
    explanation:
      "Truthful practice and volunteer examples show real behavior. Invented stories fall apart under simple follow-up questions.",
    ready: [
      "Prepare five truthful stories with results",
      "Practice aloud in clear, short English",
      "Prepare practical answers and your own questions",
      "Send a specific thank-you afterward",
    ],
    tools:
      "A notes sheet, a timer, a recording app, and the practice project folder.",
    taglish:
      "Ang interview ay pagkakataon para ipakita kung paano ka mag-isip at kumilos, hindi lang kung ano ang alam mo. Maraming tanong ang nagsisimula sa 'Tell me about a time when' dahil ang nakaraang kilos ang nagpapakita kung paano ka magtatrabaho. Maghanda ng limang maikling kuwento mula sa totoong karanasan, kasama ang eskwela, volunteer, o practice project kung baguhan ka, at gawing totoo ang bawat isa. Gumamit ng simpleng istruktura: situation (isa o dalawang pangungusap), task (ano ang responsibilidad mo), action (ano ang ginawa mo, hakbang-hakbang), at result (ano ang nagbago, may numero kung meron), kasama ang natutunan. Panatilihing wala pang dalawang minuto bawat kuwento. Pumili ng kuwentong nagpapakita ng pagiging maaasahan, katumpakan, mabilis na pagkatuto, paghawak ng pagkakamali, at pagtanggap ng feedback. Huwag mag-imbento o magpalaki ng karanasan; madalas sinusubok ng client ang detalye, at ang trial task ang magpapakita ng totoong kaya mo. Kung komportable kang mag-isip sa Taglish, i-outline muna ang kuwento sa Taglish, saka sabihin muli sa malinaw na English gamit ang maiikling pangungusap at karaniwang salita; mas mabuti ang mabagal at simple kaysa mahihirap na salita. Maghanda rin sa praktikal na tanong: availability at time zone, tools, rate, paghawak ng kumpidensyal na data, at paano hahawakan ang pagkakamali. Mag-practice nang malakas na may timer, mag-record nang isang beses, at ayusin ang filler words at mahabang pause. Maghanda ng dalawang tanong sa client, tulad ng paano sinusukat ang tagumpay sa unang buwan at sino ang nag-aaprub. Subukan ang audio at camera bago ang tawag, at magpadala ng maikling thank-you na may binanggit na tiyak na bagay mula sa usapan.",
    proTips: [
      "Say the result first in your practice run, then tell the story. Interviewers remember outcomes, not the order of events.",
      "Practice with a friend who interrupts you. Real interviews have interruptions, and recovering smoothly is a skill.",
    ],
    deepDive: [
      [
        "Build five honest stories",
        "Pick moments that show reliability, accuracy, quick learning, handling a mistake, and using feedback. Outline them as situation, task, action, result, and lesson. If you lack client work, practice projects and volunteering count when told honestly.",
      ],
      [
        "Speak clearly, not fancy",
        "Outline in Taglish if it helps you think, then practice aloud in short, plain English with a timer. Record yourself once and trim filler words and long pauses. Clear and slow beats impressive and rushed.",
      ],
      [
        "Practical questions and follow-up",
        "Prepare answers about availability, time zone, tools, rate, confidentiality, and mistakes. Ask two questions of your own about success in the first month and approvals. Send a thank-you that mentions something specific.",
      ],
    ],
    practiceData:
      "Fictional situation: you are applying to a bakery owner for a part-time VA role. You have no client experience but completed three practice projects (an inbox plan, a data entry set with a 2 percent error rate, and a simple booking page). Typical questions: Tell me about a mistake; How do you handle confidential data; What is your availability; What would you do in your first week?",
    modelAnswer:
      "Mistake story: Situation: in a practice project I sent a draft with the wrong date. Task: send accurate drafts. Action: I noticed within ten minutes, told my mentor, corrected it, and added a calendar check. Result: no further date errors in the next two projects. Lesson: verify before sending. Confidential data: I use approved tools, never share passwords, and ask before using AI. Availability: state hours and time zone. First week: learn the routine, read the playbook, complete one supervised task, check in daily. Ask: how is success measured in the first month, and who approves work? Send a thank-you referencing one specific topic.",
  },
  {
    title: "Agree terms and plan your first 30 days with a new client",
    goal: "Start a new engagement with clear terms, a written first-month plan, and early wins that build trust.",
    prereq:
      "Agreements, rate-setting, onboarding, and client playbook lessons.",
    teach:
      "The first month sets the pattern for the whole relationship. Before you start, agree the terms in writing: the scope, hours or deliverables, rate, how and when you are paid, working hours and time zone, communication channels, how quickly you respond, what is confidential, how either side ends the agreement, and who owns the work. Ask what the client needs most urgently and what success looks like at 30 days. Offer a short plan with four parts. Week one: get access with least privilege, read the existing documents, meet the key people, and complete one small supervised task. Week two: take over one recurring task with a checklist, and begin a client playbook. Week three: improve one process, such as a template or a tracker, and show the client the time it saved. Week four: review together, collect feedback, and agree the next month's priorities. Give a short update at a set time each week with what was done, what is next, what you need, and any risks. Show early wins that matter to the client, not just your effort. Ask about preferences instead of guessing, and write down their answers. Do not overpromise: it is better to deliver a smaller thing early than a large thing late. If you notice problems in the existing setup, report them calmly and with facts, not blame. Keep a log of hours and tasks if you bill by the hour. Hold a 30-day review and either confirm the arrangement, adjust the scope, or end it respectfully. If the agreement is verbal only, confirm it in a short written message so you both remember the same terms.",
    example:
      "A fictional bakery owner hires the VA for 10 hours a week. Before starting, they confirm in writing: scope (inbox, orders sheet, social scheduling), rate and payment date, hours 9 to 1 Manila time, replies within one business day, confidentiality, and 14 days notice. Week one: access and one supervised task. Week two: the VA takes over the order-sheet check with a checklist and starts a playbook. Week three: a reply template cuts daily time by 30 minutes. Each Friday she sends a four-line update. At the 30-day review, the owner adds the supplier emails to the scope.",
    steps: [
      "Agree scope, hours, rate, payment, channels, response time, confidentiality, and ending terms in writing.",
      "Ask what is most urgent and how success looks at 30 days.",
      "Plan four weeks: access and a small task, a recurring task and playbook, one process improvement, and a review.",
      "Send a short weekly update with done, next, needs, and risks.",
      "Hold a 30-day review to confirm, adjust, or end respectfully.",
    ],
    exercise:
      "Write the terms message and a four-week plan for the practice client, plus the first weekly update.",
    portfolio:
      "A terms confirmation message, a 30-day plan, and a weekly update template.",
    mistake:
      "Starting work on a verbal agreement leaves each side remembering different terms, which causes disputes later.",
    question:
      "A client agrees on a call to your rate and hours. What should you do next?",
    options: [
      "Confirm the terms in a short written message before starting",
      "Start without writing anything down",
      "Wait for them to send a contract",
    ],
    answer: 0,
    explanation:
      "A written confirmation makes sure both sides remember the same terms and protects you both.",
    ready: [
      "Confirm terms in writing before starting",
      "Plan the first four weeks with an early win",
      "Send a short weekly update",
      "Hold a 30-day review and adjust",
    ],
    tools:
      "A terms message template, a 30-day plan, and a weekly update template.",
    taglish:
      "Ang unang buwan ang nagtatakda ng pattern ng buong relasyon. Bago magsimula, pagkasunduan nang nakasulat ang saklaw, oras o deliverable, rate, kailan at paano ang bayad, oras ng trabaho at time zone, channel ng komunikasyon, bilis ng sagot, kumpidensyalidad, paano tatapusin ng alinmang panig ang kasunduan, at sino ang may-ari ng trabaho. Itanong kung ano ang pinakamadalian at ano ang itsura ng tagumpay sa 30 araw. Mag-alok ng maikling plano na may apat na bahagi. Unang linggo: kumuha ng access na least privilege, basahin ang mga dokumento, makilala ang mahahalagang tao, at gumawa ng isang maliit na supervised na gawain. Ikalawang linggo: kunin ang isang paulit-ulit na gawain na may checklist at simulan ang client playbook. Ikatlong linggo: pagbutihin ang isang proseso, tulad ng template o tracker, at ipakita ang natipid na oras. Ikaapat na linggo: mag-review nang magkasama, kumuha ng feedback, at pagkasunduan ang prayoridad sa susunod na buwan. Magbigay ng maikling update sa takdang oras kada linggo: ano ang nagawa, ano ang susunod, ano ang kailangan, at anumang panganib. Ipakita ang maagang panalong mahalaga sa client, hindi lang ang pagod mo. Magtanong tungkol sa kagustuhan sa halip na manghula at isulat ang sagot. Huwag mag-overpromise: mas mabuti ang maliit na maagang resulta kaysa malaking huli. Kung may nakitang problema sa kasalukuyang setup, ipaalam nang kalmado at may datos, hindi sisihan. Magtago ng log ng oras kung oras ang singil. Magdaos ng 30-day review at kumpirmahin, ayusin ang saklaw, o tapusin nang magalang. Kung berbal lang ang kasunduan, kumpirmahin sa maikling sulat para pareho ang tandaan ninyo.",
    proTips: [
      "Pick one early win the owner will feel within a week, even a small one. A felt win in week one buys patience for everything else.",
      "Put the 30-day review in the calendar on day one. A booked review gets done; a planned review gets forgotten.",
    ],
    deepDive: [
      [
        "Terms in writing",
        "Confirm scope, hours or deliverables, rate, payment date, working hours, channels, response time, confidentiality, ending terms, and ownership in a short message or agreement. If the deal was verbal, confirm it in writing so you both recall the same thing.",
      ],
      [
        "A four-week plan",
        "Week one: access and one supervised task. Week two: take over a recurring task and start a playbook. Week three: improve one process and show the time saved. Week four: review together and agree priorities. Deliver early wins the client can feel.",
      ],
      [
        "Updates and review",
        "Send a short weekly update with done, next, needs, and risks. Report problems calmly with facts. Hold a 30-day review to confirm, adjust, or end respectfully, and book it in the calendar from day one.",
      ],
    ],
    practiceData:
      "Fictional hire: bakery owner, 10 hours a week, rate agreed on a call, payment on the 5th, hours 9 AM to 1 PM Manila time. Most urgent need: stop missing customer emails. Scope: inbox, orders sheet, social scheduling. Nothing is in writing yet. The existing orders sheet has duplicate rows.",
    modelAnswer:
      "Terms message: scope (inbox, orders sheet, social scheduling), 10 hours a week, the agreed rate, payment on the 5th, hours 9 AM to 1 PM Manila time, replies within one business day, confidentiality, notice period, and ownership of work; ask the owner to reply 'confirmed'. 30-day plan: week one access and a supervised inbox task; week two take over the orders-sheet check with a checklist and start a playbook; week three a reply template and report the duplicate rows calmly; week four review and priorities. Send a four-line update each Friday and book the 30-day review.",
  },
];

const aiDefendModuleIndex = modules.length;
modules.push([
  "AI work you can defend",
  "Reusable, tested prompts and a review habit that clients can trust.",
  "Advanced workflow",
  aiDefendLessons,
]);
aiDefendLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${aiDefendModuleIndex}-${index}`,
    mi: aiDefendModuleIndex,
    li: index,
  });
});

const interviewsModuleIndex = modules.length;
modules.push([
  "Interviews and your first 30 days",
  "Tell honest stories in clear English and start new clients well.",
  "Career",
  interviewsLessons,
]);
interviewsLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${interviewsModuleIndex}-${index}`,
    mi: interviewsModuleIndex,
    li: index,
  });
});
