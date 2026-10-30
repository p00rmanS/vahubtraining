/** Data entry and transcription, front-desk and live-chat support, CRM and email marketing in practice. Append IDs to preserve existing progress. */
const dataEntryLessons = [
  {
    title: "Build accurate data-entry habits and measure your error rate",
    goal: "Enter data quickly without sacrificing accuracy, and prove your quality with numbers.",
    prereq: "Spreadsheets, data validation, and quality check lessons.",
    teach:
      "Data entry looks simple, but clients pay for accuracy, and a single wrong digit can cause a wrong invoice or a lost customer. Speed without accuracy is not a skill; accuracy at a steady pace is. Begin by understanding the source and the destination: what the fields mean, which formats are required, and what to do with unreadable or missing items. Prepare your workspace with good lighting, a comfortable posture, and the source document placed so your eyes travel the least. Use consistent formats, and use validation or drop-downs where the destination allows them. Work in small batches and check each batch before moving on. Do not guess unreadable values; flag them with a standard marker such as 'UNCLEAR' and a note. Use verification methods that catch different errors: compare totals with the source, check a sample of records against the original, and for critical fields use double entry, where a second pass or a second person enters the same data and a comparison highlights differences. Measure your quality by counting errors found in a sample and dividing by the number of fields checked, for example 4 errors in 200 fields is a 2 percent error rate, or 98 percent accuracy. Track the rate over time, look at the types of errors such as transposed digits or skipped lines, and adjust your method. Take regular breaks, since fatigue raises errors. Keep a log of questions for the client and never change the source. Protect sensitive data and follow the client's rules for storage.",
    example:
      "A fictional VA enters 200 fields from handwritten order slips. A sample check against the slips finds 4 errors, all transposed digits in phone numbers, giving a 2 percent error rate. She adds a second-pass check for phone numbers only. The next batch of 200 fields shows 1 error, a 0.5 percent rate, and the client approves the method.",
    steps: [
      "Learn the fields, formats, and rules for unclear or missing values.",
      "Set up the workspace and work in small batches with a consistent format.",
      "Flag unreadable values with a standard marker instead of guessing.",
      "Verify with totals, sample checks, and double entry for critical fields.",
      "Count errors per fields checked, find patterns, and adjust your method.",
    ],
    exercise:
      "Enter the practice records, flag the unclear ones, calculate your error rate from a checked sample, and write one change to your method based on the error pattern.",
    portfolio:
      "A data-entry quality log with error rate calculation and method notes.",
    mistake:
      "Guessing an unreadable value to keep the pace creates errors that look like real data and are very hard to find later.",
    question: "A phone number on a slip is smudged. What should you enter?",
    options: [
      "Your best guess",
      "Leave the whole record out silently",
      "A standard UNCLEAR marker with a note, and ask the client to verify",
    ],
    answer: 2,
    explanation:
      "A visible marker keeps the record honest and lets the client fix it, while a guess hides the uncertainty.",
    ready: [
      "Work in checked batches with consistent formats",
      "Flag unclear values instead of guessing",
      "Verify with totals, samples, and double entry",
      "Calculate and track an error rate",
    ],
    tools:
      "A spreadsheet with validation, the source documents, and a quality log.",
    taglish:
      "Mukhang simple ang data entry, pero ang binabayaran ng client ay katumpakan, at ang isang maling numero ay puwedeng magdulot ng maling invoice o nawalang customer. Hindi kasanayan ang bilis na walang katumpakan; ang katumpakan sa tuloy-tuloy na bilis ang kasanayan. Unawain ang source at destination, gumamit ng pare-parehong format, at gumamit ng validation. Huwag manghula ng malabong value; lagyan ng UNCLEAR at tala. Mag-verify sa total, sample check, at double entry para sa kritikal na field. Sukatin ang error rate: ilang error bawat dami ng field na chineck. Magpahinga nang regular.",
    proTips: [
      "Read each source value aloud in your head before typing it; it slows you just enough to catch digits.",
      "Check the end of every batch against the source total before starting the next one.",
    ],
    deepDive: [
      [
        "Choose checks that catch different errors",
        "Totals catch missing or extra rows, sample checks catch typing mistakes, and double entry catches errors in critical fields. Using more than one method is far more reliable than a single check.",
      ],
      [
        "Understand your error patterns",
        "Count not only how many errors you make but what kind: transposed digits, skipped lines, wrong columns. Patterns tell you which habit to change, such as adding a pause before copying numbers.",
      ],
      [
        "Protect yourself from fatigue",
        "Errors rise as you tire. Short breaks, good lighting, and batch limits keep accuracy steady. If your error rate climbs late in the day, change the schedule instead of pushing harder.",
      ],
    ],
    practiceData:
      "Fictional batch: 50 order slips with 4 fields each (200 fields). A check of all 200 fields against the slips finds 4 errors: three transposed digits in phone numbers and one skipped line. Two slips have smudged phone numbers. After adding a second pass for phone numbers, a new 200-field batch has 1 error.",
    modelAnswer:
      "First batch error rate: 4 / 200 = 2 percent (98 percent accuracy). The pattern is transposed digits in phone numbers, so a second pass on phone numbers is added. The second batch: 1 / 200 = 0.5 percent. The two smudged phone numbers are entered as UNCLEAR with a note and sent to the client for verification. The quality log records dates, counts, patterns, and the change in method.",
  },
  {
    title: "Transcribe and clean notes or audio accurately",
    goal: "Turn recordings and rough notes into clear text with a consistent style, verified against the source.",
    prereq:
      "Data entry accuracy, AI meeting notes, and document control lessons.",
    teach:
      "Transcription turns spoken words into written text, and it is a service many clients need for meetings, interviews, and voice notes. The goal is a faithful, readable record, and the first step is agreeing on a style. Decide whether the client wants a verbatim transcript, which keeps every word and filler, or a clean transcript, which removes fillers and false starts but keeps the meaning. Agree on how to mark speakers, timestamps, unclear audio, and names that need checking. Protect confidentiality: recordings can contain private details, so use the client's approved tools and storage and delete working copies when finished. Listen in short segments, type or correct what you hear, and replay unclear parts at a slower speed. Do not guess unclear words; mark them with a standard marker and the timestamp so they can be checked. Names, numbers, dates, and technical terms need extra care, so verify spellings against the client's materials. If you use automatic transcription as a first draft, treat it as a draft: listen while you read and correct errors, since automatic tools often mishear names and numbers. Read the final text once without audio for flow, and once against the audio for the high-risk items. Keep a glossary of the client's names and terms. Deliver in the agreed format with a short note about any unclear sections. Track the time you spend, since the work usually takes much longer than the length of the recording.",
    example:
      "A fictional client sends a ten-minute voice note. The VA agrees on a clean transcript with timestamps. An automatic first draft misheard 'Pine Street' as 'Fine Street' and a price as '15' instead of '50'. She corrects both while listening, marks one unclear name at 04:12, builds a glossary, and delivers in 45 minutes with a note about the unclear section.",
    steps: [
      "Agree on style: verbatim or clean, speaker labels, timestamps, and unclear markers.",
      "Use approved tools and storage and listen in short segments.",
      "Correct or type each segment and mark unclear parts with timestamps.",
      "Verify names, numbers, dates, and terms against the client's materials.",
      "Review for flow and against audio, deliver with notes, and delete working copies.",
    ],
    exercise:
      "Correct the practice automatic draft against the practice notes, mark the unclear item, build a small glossary, and write the delivery note.",
    portfolio:
      "A cleaned transcript sample with a glossary and unclear-section notes.",
    mistake:
      "Trusting an automatic transcript without listening can leave wrong names and numbers in a document the client will rely on.",
    question: "You cannot make out a word at 04:12. What should you do?",
    options: [
      "Mark it as unclear with the timestamp and note it in the delivery",
      "Guess the most likely word",
      "Delete the sentence",
    ],
    answer: 0,
    explanation:
      "A marked unclear section is honest and lets the client check it, while a guess may be wrong.",
    ready: [
      "Agree on the transcript style first",
      "Verify names, numbers, and dates",
      "Mark unclear audio with timestamps",
      "Protect and delete recordings as agreed",
    ],
    tools:
      "An approved transcription or audio player tool and a glossary sheet.",
    taglish:
      "Ang transcription ay pagbabago ng sinabi sa nakasulat na teksto, at maraming client ang nangangailangan nito para sa meeting, interview, at voice note. Magkasundo muna sa estilo: verbatim (lahat ng salita) o clean (walang filler pero buo ang kahulugan), pati ang speaker label, timestamp, at marka ng hindi malinaw. Gumamit ng aprubadong tool at itago nang ligtas ang recording. Makinig sa maiikling bahagi at huwag manghula ng malabong salita; markahan at lagyan ng timestamp. Pag-ingatan ang pangalan, numero, petsa, at terminong teknikal. Kung awtomatiko ang unang draft, ituring itong draft at pakinggan habang binabasa.",
    proTips: [
      "Build the glossary as you go; the second half of the job is much faster.",
      "Slow the audio to 75 percent for unclear sections; it often fixes them.",
    ],
    deepDive: [
      [
        "Decide the style in advance",
        "Verbatim keeps fillers and false starts and suits legal or research needs. Clean removes them for readability. Agree on speaker labels and timestamps so every transcript from you looks the same.",
      ],
      [
        "Verify high-risk items",
        "Names, numbers, dates, and technical terms are where errors do the most harm. Check each against the client's materials, and listen again to every number. Do not rely on how right it sounds.",
      ],
      [
        "Handle sensitive recordings",
        "Use only approved tools and storage, avoid sharing recordings over chat, and delete working copies when you finish. If a recording contains something that looks unlawful or alarming, tell the client and ask how to proceed.",
      ],
    ],
    practiceData:
      "Fictional voice note (10 minutes). Automatic draft: 'Please deliver to Fine Street at noon, the total is 15 for the cookie boxes, and call Maria.' Notes from the client's materials: address 12 Pine Street, cookie box price 50 for the large order, contact Mariah Cruz. At 04:12 a word is unclear. Agreed style: clean transcript with timestamps.",
    modelAnswer:
      "Corrected text: 'Please deliver to Pine Street at noon, the total is 50 for the cookie boxes, and call Mariah.' Verify 'Pine Street' against 12 Pine Street, '50' against the order, and 'Mariah' with the contact list. The unclear word at 04:12 is marked [unclear 04:12]. A glossary lists Pine Street, Mariah Cruz, and cookie box. The delivery note says the style used, what was verified, and the unclear section, and the working audio copy is deleted after delivery.",
  },
];

const frontdeskLessons = [
  {
    title: "Handle calls as a virtual receptionist",
    goal: "Answer, route, and record calls so every caller feels helped and nothing important is lost.",
    prereq: "Call triage, confidentiality, and boundaries lessons.",
    teach:
      "A virtual receptionist is often the first voice of a business, so tone and accuracy matter from the first second. Prepare before taking calls: learn the business name, hours, services, approved answers to common questions, who handles what, and the escalation rules for urgent or sensitive calls. Use a greeting with the business name and your name, speak clearly and calmly, and smile; it changes your voice. Listen without interrupting, repeat the key details back, and ask permission before placing someone on hold. Collect the information the business needs: caller name, contact details, reason, and urgency. Do not guess answers; if you do not know, say you will find out and offer a callback time you can keep. Route calls according to the guide: connect to the right person, take a message, or book an appointment with the approved booking method. Keep messages accurate and complete, with the date and time, and deliver them through the agreed channel right away for urgent items. Protect privacy: do not share information about other customers or staff schedules beyond what the business allows, and verify identity where required. Handle difficult callers with calm acknowledgment and a clear next step. Keep a call log of the caller, reason, action, and follow-up. Take short breaks, because call work is mentally tiring, and review a few calls each week with the owner to improve.",
    example:
      "A fictional caller to the bakery asks whether cakes can be ordered for tomorrow. The VA greets with the business name, listens, and says, 'Orders close Thursday at 5 PM, so tomorrow is not available. I can take your details for the next pickup.' She records the name, number, and request in the call log and sends the message to the owner the same day.",
    steps: [
      "Learn the business, approved answers, routing rules, and escalation guide.",
      "Greet clearly, listen, repeat key details, and ask before placing on hold.",
      "Collect name, contact, reason, and urgency without guessing answers.",
      "Route, take a message, or book using the approved method and log the call.",
      "Deliver urgent messages immediately and review calls with the owner weekly.",
    ],
    exercise:
      "Write your greeting and a call script for three practice callers, a message template, and the log entries you would make.",
    portfolio:
      "A receptionist greeting, three call scripts, and a message template.",
    mistake:
      "Making up an answer to avoid saying 'I do not know' creates false promises the business must then fix.",
    question:
      "A caller asks something outside your approved answers. What should you do?",
    options: [
      "Make up a likely answer",
      "End the call quickly",
      "Say you will find out, offer a callback time, and record the question",
    ],
    answer: 2,
    explanation:
      "An honest promise to find out, with a time you can keep, protects the business and keeps the caller's trust.",
    ready: [
      "Prepare approved answers and routing rules",
      "Listen, repeat back, and record accurately",
      "Avoid guessing and offer a callback",
      "Log calls and deliver urgent messages immediately",
    ],
    tools: "A phone or VoIP system, a call log, and the business's call guide.",
    taglish:
      "Ang virtual receptionist ay madalas ang unang boses ng negosyo, kaya mahalaga ang tono at katumpakan mula sa unang segundo. Maghanda: alamin ang pangalan ng negosyo, oras, serbisyo, aprubadong sagot, sino ang humahawak ng ano, at ang escalation rules. Bumati nang malinaw at kalmado, makinig nang hindi pinuputol, ulitin ang mahahalagang detalye, at magtanong bago maglagay ng caller sa hold. Kunin ang pangalan, contact, dahilan, at urgency. Huwag manghula ng sagot; sabihing aalamin mo at mag-alok ng callback time na matutupad mo. Itala ang tawag at ihatid agad ang urgent na mensahe.",
    proTips: [
      "Keep the approved answers on one page next to you, so you never improvise on facts.",
      "End every call with the next step and when it will happen.",
    ],
    deepDive: [
      [
        "Sound helpful from the first second",
        "A clear greeting with the business name and your name sets the tone. Speak slightly slower than usual, keep a friendly tone, and avoid jargon. Callers judge the whole business by the first thirty seconds.",
      ],
      [
        "Capture what the business needs",
        "Always get the caller's name, a callback number, the reason in their words, and the urgency. Read the number back. An incomplete message creates extra work and lost customers.",
      ],
      [
        "Review and improve",
        "Once a week, review three calls with the owner. Note what worked, which questions came up that you could not answer, and add them to the approved answers. The guide gets better every week.",
      ],
    ],
    practiceData:
      "Fictional bakery calls: 1) 'Can I order a cake for tomorrow?' (orders close Thursday 5 PM; today is Wednesday). 2) 'Do you have anything nut-free?' (approved answer: products contain nuts; ask the owner). 3) 'My order was wrong! I want to speak to the manager.' Callback time you can keep: 3 PM today.",
    modelAnswer:
      "Call 1: tomorrow is not available because orders close Thursday at 5 PM; offer the next pickup and take details. Call 2: do not guess; state the approved answer that products contain nuts, offer to take the question to the owner, and promise a callback by 3 PM today. Call 3: apologize for the experience, take name, number, and details, and say the manager will call by 3 PM today. All three are logged and the messages sent to the owner right away.",
  },
  {
    title: "Run live chat support with speed and accuracy",
    goal: "Handle several chats at once with friendly, accurate replies and proper escalation.",
    prereq:
      "Customer support, difficult conversations, and knowledge base lessons.",
    teach:
      "Live chat gives customers quick help, but speed can tempt you into errors. Start with the tools and the guide: the macros or saved replies, the knowledge base, the policies, and the escalation rules. Know what response time the business expects, such as an opening reply within a minute and an update every few minutes during longer issues. Greet by name, confirm the problem in your own words, and then give the answer or the next step. Keep messages short, clear, and friendly, and avoid walls of text. Use saved replies as a base and always personalize and check the details before sending, since a template with the wrong name or policy is worse than none. Verify identity with the approved method before sharing order or account information. When handling more than one chat at once, which is called concurrency, use notes to keep each case straight, and reduce the number if quality drops. Never promise refunds, exceptions, or delivery dates you cannot authorize. If you must look something up, tell the customer what you are doing and for how long. When an issue is outside your authority or you cannot solve it, escalate with a clear summary so the customer does not have to repeat themselves. Close the chat with a recap, a next step, and a polite goodbye, and write a short ticket note. Review transcripts regularly for accuracy and tone.",
    example:
      "A fictional customer chats about a late order. The VA greets by name, repeats the problem, checks the record, and replies, 'I see your order left the shop Tuesday. I am checking the tracking and will update you in two minutes.' She finds no movement, escalates with a summary to the owner, and tells the customer the owner will reply by 3 PM. The customer does not need to repeat the story.",
    steps: [
      "Learn the guide, saved replies, knowledge base, policies, and response-time targets.",
      "Greet by name, confirm the problem, and answer in short, clear messages.",
      "Personalize and check saved replies and verify identity before sharing details.",
      "Use notes for concurrent chats and reduce load if quality drops.",
      "Escalate with a clear summary, close with a recap, and write a ticket note.",
    ],
    exercise:
      "Write replies for the three practice chats, the escalation summary for one, and the ticket notes.",
    portfolio:
      "Sample live-chat replies, an escalation summary, and ticket notes.",
    mistake:
      "Sending a saved reply without checking the details can give the wrong name, price, or policy to a customer.",
    question:
      "A chat needs a refund decision you cannot make. What should you do?",
    options: [
      "Promise the refund to calm the customer",
      "Explain who decides, escalate with a clear summary, and give a realistic time for the reply",
      "Close the chat",
    ],
    answer: 1,
    explanation:
      "Be honest about authority and escalate with a summary so the customer is helped without false promises.",
    ready: [
      "Reply quickly with short, accurate messages",
      "Check saved replies before sending",
      "Escalate with a clear summary",
      "Write ticket notes and review transcripts",
    ],
    tools: "A live-chat platform, saved replies, and the knowledge base.",
    taglish:
      "Mabilis ang tulong ng live chat, pero ang bilis ay puwedeng humantong sa mali. Alamin ang guide, saved replies, knowledge base, patakaran, at inaasahang response time. Bumati gamit ang pangalan, ulitin ang problema, at magbigay ng sagot o susunod na hakbang sa maikli at malinaw na mensahe. Gamitin ang saved reply bilang batayan pero i-personalize at i-check ang detalye bago ipadala. I-verify ang pagkakakilanlan bago magbahagi ng impormasyon. Kapag higit sa isang chat, gumamit ng tala at bawasan ang bilang kung bumababa ang kalidad. Huwag mangako ng refund na hindi mo awtorisado; i-escalate na may malinaw na buod.",
    proTips: [
      "Type the customer's name and order number in your notes before you reply; it prevents mix-ups between chats.",
      "Send a short 'checking now, back in two minutes' message so silence never feels like abandonment.",
    ],
    deepDive: [
      [
        "Write chat replies that read quickly",
        "Use two or three short sentences, one idea each. Lead with the answer or next step. Replace long explanations with a link or a follow-up question. People read chats on phones while doing something else.",
      ],
      [
        "Manage several chats",
        "Keep a note for each chat with name, issue, and next action. If response times grow or you mix up details, reduce the number of chats you handle. Quality is worth more than a high count.",
      ],
      [
        "Escalate well",
        "Write the customer's issue, what you checked, the evidence, what the customer wants, and the policy. The next person should be able to act without asking the customer again.",
      ],
    ],
    practiceData:
      "Fictional chats for the bakery: 1) Late order #104; tracking shows no movement for 4 days. 2) 'Can I change my pickup time to Sunday?' (policy: pickup Saturday 9–11 AM only). 3) A customer shares a full card number in chat. Targets: first reply within 60 seconds; update every 3 minutes.",
    modelAnswer:
      "Chat 1: greet, confirm the order, say tracking shows no movement and you are escalating, give a time for the next update, and send the owner a summary with order, evidence, and request. Chat 2: explain pickup is Saturday 9–11 AM only and offer the options the policy allows; do not promise Sunday. Chat 3: tell the customer not to share card details in chat, avoid repeating the number, and direct them to the approved payment method; remove or mask the number in notes per policy. All chats get ticket notes.",
  },
  {
    title: "Write escalations and ticket notes that save everyone time",
    goal: "Pass cases to the right person with a clear summary, honest timing, and a complete record.",
    prereq: "Customer support, live chat, and handoff lessons.",
    teach:
      "Support work often depends on handing a case to someone with more authority or expertise, and the quality of that handoff decides whether the customer waits longer or gets help quickly. An escalation is a transfer of a case with everything the next person needs. A good escalation includes the customer reference, the issue in one sentence, what happened and when, what you already checked and found, the evidence such as screenshots or tracking, what the customer is asking for, the relevant policy, the urgency and why, and what you told the customer about timing. Write it so the next person never needs to ask the customer to repeat anything. Choose the right person based on the guide, and use the agreed channel. Be factual: avoid opinions about the customer, and separate what is confirmed from what is suspected. Mention deadlines honestly, such as an event date, rather than labeling every case urgent. Keep the customer informed with a short message stating who has the case and when they should expect an update, and then keep that promise or update early. Ticket notes should be short but complete: the date, what was done, what was promised, and the next step with an owner and a date, so anyone opening the ticket can continue. Close tickets only when the customer's issue is resolved or the case is handed off with a clear owner. Review escalations regularly to spot patterns, such as repeated policy gaps, and suggest fixes.",
    example:
      "A fictional customer says a cake was damaged. The VA writes: 'Order 104, damaged cake, reported Saturday 11:20 by phone. Photo attached. Customer wants a replacement before Sunday's party. Policy: owner approves refunds and replacements. Urgency: event Sunday. Customer told the owner will reply by 3 PM.' The owner reads it once, approves a replacement, and replies by 2:30.",
    steps: [
      "Gather the reference, issue, timeline, checks, evidence, request, policy, urgency, and promised timing.",
      "Write a factual summary that separates confirmed facts from suspicions.",
      "Send it through the agreed channel to the right person.",
      "Tell the customer who has the case and when to expect an update.",
      "Write short ticket notes with next step, owner, and date and review escalation patterns.",
    ],
    exercise:
      "Write the escalation for the practice case and the customer message, plus the ticket note, and name one pattern you would report.",
    portfolio:
      "An escalation template, a sample ticket note, and a customer holding message.",
    mistake:
      "Passing on a case with only 'customer is angry' forces the next person to start over and keeps the customer waiting.",
    question: "What makes an escalation useful?",
    options: [
      "A complete summary with evidence, request, policy, urgency, and promised timing",
      "A strong opinion about the customer",
      "Just the customer's name",
    ],
    answer: 0,
    explanation:
      "A complete, factual summary lets the next person act immediately without asking the customer again.",
    ready: [
      "Write complete, factual escalations",
      "Choose the right owner and channel",
      "Keep the customer informed with honest timing",
      "Write short, useful ticket notes",
    ],
    tools:
      "A helpdesk or tracker, an escalation template, and a ticket note format.",
    taglish:
      "Madalas nakadepende ang support sa paglilipat ng kaso sa may mas mataas na awtoridad o kaalaman, at ang kalidad ng handoff ang nagpapasya kung maghihintay nang matagal ang customer o mabilis na matutulungan. Isama sa escalation ang reference ng customer, isyu sa isang pangungusap, nangyari at kailan, ano ang chineck mo, ebidensya, hiling ng customer, patakaran, urgency at dahilan, at ipinangako mong oras. Isulat ito para hindi na kailangang ulitin ng customer ang kuwento. Maging factual at ihiwalay ang kumpirmado sa hinala. Sabihan ang customer kung sino ang may hawak at kailan ang update. Sumulat ng maikling ticket note na may susunod na hakbang, owner, at petsa.",
    proTips: [
      "Read your escalation as if you were the owner on a phone; if it takes more than a minute, shorten it.",
      "Put the customer's deadline in the first line only when it is real; labeling everything urgent hides true emergencies.",
    ],
    deepDive: [
      [
        "Include what the next person needs",
        "Reference, one-sentence issue, timeline, checks done, evidence, the customer's request, the policy, urgency, and what the customer was told. A checklist in your template keeps you from forgetting any of these.",
      ],
      [
        "Stay factual",
        "Write 'customer states the box was crushed; photo attached' instead of 'customer is exaggerating'. Facts are easier to act on, and they protect you if the case is reviewed later.",
      ],
      [
        "Close the loop",
        "After escalation, check that the case moved. If you promised an update, deliver it on time even if the news is that you are still waiting. Review patterns monthly and suggest fixes for repeated causes.",
      ],
    ],
    practiceData:
      "Fictional case: order #104, customer Maya, reports a crushed cake box at 11:20 Saturday by phone, photo received, wants a replacement before Sunday's party. Policy: only the owner approves replacements or refunds. You told Maya an update would come by 3 PM. Tracking and the order sheet show the cake was picked up at 10:30.",
    modelAnswer:
      "Escalation: 'Order 104, Maya, crushed cake box reported Saturday 11:20 by phone; photo attached; picked up at 10:30 per order sheet. Maya asks for a replacement before Sunday's party. Policy: owner approves replacements. Urgency: event Sunday. Maya was told the owner will reply by 3 PM.' Customer message: 'Thank you for the photo. I have passed your case to the owner, who will reply by 3 PM today.' Ticket note: date, summary, promise of 3 PM, owner as the next step. Pattern to report: damage after pickup, perhaps a packaging issue.",
  },
];

const crmLessons = [
  {
    title: "Keep a CRM pipeline clean and moving",
    goal: "Track leads and customers through clear stages with next steps and honest data.",
    prereq:
      "E-commerce and CRM support, lead tracker, and data validation lessons.",
    teach:
      "A CRM, or customer relationship management system, helps a business remember who it is talking to, what was said, and what happens next. A pipeline shows each lead or opportunity moving through stages, such as New, Contacted, Qualified, Proposal sent, and Won or Lost. The system is only useful when the data is accurate and current, so your job is hygiene. Agree on stage definitions with the client so that everyone uses them the same way: what exactly makes a lead 'Qualified'? Every record should have an owner, a status, a last-contact date, and a next step with a date. Update records right after interactions, not weeks later. Avoid duplicates by searching before adding, and merge them carefully. Record only facts and approved notes, not opinions about people, and avoid collecting sensitive data that is not needed. Respect consent and the client's contact rules: a lead in the CRM is not permission to send unsolicited messages. Set up a follow-up cadence that the client approves, such as days 2, 5, and 10, and use reminders so no lead is forgotten. Review the pipeline weekly: stale records with no next step, deals stuck in a stage, and leads with missing information. Mark lost deals with a reason, since reasons help the client improve. Report the pipeline honestly with counts by stage and next steps, and do not move records forward to make numbers look better. Keep a change log for bulk updates.",
    example:
      "A fictional catering business has 12 leads. In the weekly review, the VA finds four with no next step, one duplicate, and two stuck at 'Proposal sent' for three weeks. She adds next steps with dates, merges the duplicate, drafts approved follow-ups for the two stuck leads, and reports counts by stage. The owner sends the follow-ups, and one lead is marked Won.",
    steps: [
      "Agree on stage definitions and required fields with the client.",
      "Update records right after interactions with owner, status, last contact, and next step.",
      "Search before adding to avoid duplicates and merge carefully with a log.",
      "Use an approved follow-up cadence with reminders and respect contact rules.",
      "Review weekly for stale records, report honestly by stage, and record lost reasons.",
    ],
    exercise:
      "Clean the practice pipeline: add next steps, flag the duplicate and stale records, and write the weekly report with counts by stage.",
    portfolio: "A cleaned CRM pipeline sample and a weekly pipeline report.",
    mistake:
      "Moving a lead forward a stage to make the numbers look better makes the whole pipeline untrustworthy.",
    question:
      "A lead has had no contact for three weeks and no next step. What should you do?",
    options: [
      "Leave it; it will sort itself out",
      "Flag it, propose an approved follow-up with a date, and update the record after it happens",
      "Mark it Won",
    ],
    answer: 1,
    explanation:
      "Stale records need a next step and a date. Honest status and follow-up keep the pipeline reliable.",
    ready: [
      "Use agreed stage definitions",
      "Keep owner, status, and next step current",
      "Prevent duplicates and log merges",
      "Report the pipeline honestly",
    ],
    tools: "The client's CRM such as HubSpot or a spreadsheet pipeline.",
    taglish:
      "Tinutulungan ng CRM ang negosyo na tandaan kung sino ang kausap, ano ang sinabi, at ano ang susunod. Ang pipeline ay nagpapakita ng bawat lead na dumadaan sa mga yugto tulad ng New, Contacted, Qualified, Proposal sent, at Won o Lost. Magiging kapaki-pakinabang lang ito kung tumpak at kasalukuyan ang data. Magkasundo sa depinisyon ng bawat yugto. Bawat record ay may owner, status, petsa ng huling kontak, at susunod na hakbang na may petsa. Mag-update agad pagkatapos ng interaksyon at iwasan ang duplicate. Ang lead sa CRM ay hindi pahintulot na padalhan ng mensahe. I-review lingguhan at iulat nang tapat ang bilang kada yugto.",
    proTips: [
      "Add a 'next step date' column and sort by it every Monday.",
      "Record the reason for every lost deal; the patterns will teach the owner more than the wins.",
    ],
    deepDive: [
      [
        "Define stages together",
        "Write one sentence for each stage, such as 'Qualified means the lead has the need, the budget, and the authority to decide'. When everyone uses the same definition, counts mean something.",
      ],
      [
        "Hygiene routine",
        "Weekly, look for records with no next step, no owner, old last-contact dates, duplicate names, and missing contact details. Fix or flag them. Ten minutes weekly beats a huge cleanup once a year.",
      ],
      [
        "Respect consent and privacy",
        "Store only what the client needs, mark how and when each contact agreed to be contacted, and honor opt-outs immediately. Never use purchased lists or add people to messaging without consent.",
      ],
    ],
    practiceData:
      "Fictional pipeline (12 leads): New 3, Contacted 3, Qualified 2, Proposal sent 3, Won 1. Four records have no next step; two records are the same company under different spellings; two Proposal-sent leads have had no contact for 21 days. Client's follow-up cadence: days 2, 5, and 10 after a proposal; approved messages only.",
    modelAnswer:
      "Add next steps with dates to the four records; flag the possible duplicate for review and merge only with the client's approval, keeping a log; draft approved follow-ups for the two stale proposals, since they are past the day-10 mark; update records after the follow-ups. The weekly report lists counts by stage (New 3, Contacted 3, Qualified 2, Proposal sent 3, Won 1, with the duplicate noted), the stale items, and the actions taken. Nothing is moved forward without evidence.",
  },
  {
    title: "Plan and measure email marketing beyond the basics",
    goal: "Segment audiences, test subject lines fairly, and read results honestly.",
    prereq: "Email newsletters, social analytics, and honest metrics lessons.",
    teach:
      "Email marketing works best when the right message reaches the right people. Segmentation means dividing a list into groups based on information such as past purchases, interests, or sign-up source, and sending each group something relevant. Only use data people have agreed to share and that the client's policy allows. Plan each campaign with one goal, such as getting orders for the weekend pickup, one main call to action, and a clear audience. Write a subject line that is honest and specific; misleading subjects harm trust and may break rules. To compare two subject lines, run an A/B test: split a comparable part of the list into two groups, send each a version, and compare a result tied to the goal, such as clicks. Change only one thing at a time. Be careful with small numbers: if each group has 100 people and one version gets 6 clicks while the other gets 11, the difference may be chance, so repeat the test before drawing a firm conclusion. Remember that open counts can be unreliable because of privacy features in email apps, so clicks, replies, and orders are better measures. Check deliverability basics: use the client's verified sender, include an unsubscribe link, and honor opt-outs quickly. Send tests, check links, and get approval before sending. After the send, report delivered, clicks, orders linked to the campaign, unsubscribes, and complaints, and record what you learned for the next campaign. Do not promise results.",
    example:
      "A fictional bakery splits 200 subscribers into two groups of 100 for a subject-line test. Version A gets 6 clicks and version B gets 11. The VA reports the numbers, notes that the groups are small, and recommends repeating the test with the next campaign. She also segments past pickup customers from new subscribers and sends them different messages.",
    steps: [
      "Define one goal, one call to action, and a segment based on permitted data.",
      "Write an honest, specific subject line and include an unsubscribe link.",
      "Run a fair A/B test, changing one element with comparable groups.",
      "Send tests, check links, and get approval before sending.",
      "Report clicks, orders, unsubscribes, and complaints with limits and plan the next test.",
    ],
    exercise:
      "Plan the practice campaign with segment, goal, and two subject lines, then analyze the practice A/B results and write the cautious conclusion.",
    portfolio: "An email campaign plan with an A/B test and result analysis.",
    mistake:
      "Declaring a winner from a tiny difference in small groups can lead to false lessons.",
    question:
      "Version A got 6 clicks and version B got 11 from 100 recipients each. What is the best conclusion?",
    options: [
      "B definitely wins forever",
      "The test is meaningless",
      "B did better in this test, but the groups are small, so repeat the test before relying on it",
    ],
    answer: 2,
    explanation:
      "Small samples can produce differences by chance. Report the result and test again before acting on it.",
    ready: [
      "Segment with permitted data",
      "Run fair, single-change tests",
      "Measure clicks and orders, not only opens",
      "Report limits honestly",
    ],
    tools: "The client's email platform and a results sheet.",
    taglish:
      "Pinakamabisa ang email marketing kapag ang tamang mensahe ay napupunta sa tamang tao. Ang segmentation ay paghahati ng listahan ayon sa impormasyon tulad ng nakaraang bili o interes, gamit lang ang data na pinayagan ng tao at ng patakaran ng client. Magplano ng isang layunin, isang call to action, at malinaw na audience. Gawing tapat at tiyak ang subject line. Sa A/B test, hatiin ang magkatulad na grupo, isang bagay lang ang baguhin, at ihambing ang resulta na tugma sa layunin, tulad ng clicks. Mag-ingat sa maliit na numero; ulitin ang test bago magtiwala. Hindi laging maaasahan ang open count, kaya mas mahalaga ang clicks at orders.",
    proTips: [
      "Send yourself the test email and tap every link on your phone before the real send.",
      "Keep a 'test log' with what you changed and what happened; patterns appear after five or six tests.",
    ],
    deepDive: [
      [
        "Segment with care",
        "Use groups such as past customers, new subscribers, and people who clicked recently. Check that you only use information people agreed to share. Smaller, relevant groups usually perform better than one message to everyone.",
      ],
      [
        "Test fairly",
        "Compare similar groups, change one thing, and decide in advance which number decides the winner. Avoid peeking and stopping the test early when you see a favorable number.",
      ],
      [
        "Report with limits",
        "State the numbers, the sample size, and what could explain the difference. Recommend a next test, not a certainty. Honest reporting makes clients trust your recommendations more over time.",
      ],
    ],
    practiceData:
      "Fictional list: 200 subscribers, split into two groups of 100. Subject A: 'Saturday cookie boxes are here'. Subject B: 'Order by Thursday 5 PM for Saturday pickup'. Results: A 6 clicks, B 11 clicks; orders from the campaign: 3 from A, 5 from B; 1 unsubscribe overall. Segments available: past pickup customers (60), new subscribers (140).",
    modelAnswer:
      "Click rates: A 6 percent, B 11 percent; orders A 3 and B 5. The conclusion: B performed better in this test, but with 100 recipients per group the difference could be chance, so repeat the test in the next campaign. The campaign plan segments past pickup customers (60) and new subscribers (140) with relevant messages, one goal of weekend orders, a clear call to order by Thursday 5 PM, an unsubscribe link, and approval before sending.",
  },
  {
    title: "Design a consent-based nurture sequence",
    goal: "Plan a short series of helpful emails that respects consent, timing, and the reader's attention.",
    prereq: "CRM hygiene, email newsletters, and consent lessons.",
    teach:
      "A nurture sequence is a short series of messages sent after someone shows interest, such as signing up for a guide or asking about a service. Its purpose is to be useful, not to pressure. Start with consent: people should have agreed to receive messages, and you should honor opt-outs immediately. Define the goal of the sequence, for example helping new subscribers understand how to order, and the audience that receives it. Plan three to five messages spaced sensibly, such as day 0, day 2, day 5, and day 10. Each message has one purpose: a welcome and what to expect, a useful tip or answer to a common question, a customer story used with permission, and a gentle invitation to take the next step. Write in the client's voice, keep facts verified, avoid pressure tactics and false urgency, and include a clear unsubscribe link and the business's contact details. Set rules for exit: stop the sequence when someone buys, replies, or unsubscribes. Test the entire sequence with a test contact, check timing, links, and that the exit rules work. Get written approval for every message before activating. After launch, monitor results such as clicks, replies, orders, unsubscribes, and complaints, and improve one message at a time. If unsubscribes rise, shorten or soften the sequence. Do not buy lists or add people without consent, and keep records of how each contact joined. Review the sequence regularly, since facts such as prices and dates change.",
    example:
      "A fictional bakery plans a four-message welcome sequence: day 0 a welcome with the pickup window, day 2 how to order, day 5 an approved customer story, and day 10 an invitation to try a cookie box. Test contacts show that a buyer on day 3 still receives day 5, so the VA fixes the exit rule before the owner approves and activates it.",
    steps: [
      "Confirm consent and record how each contact joined.",
      "Define the goal and audience and plan three to five spaced messages with one purpose each.",
      "Write verified, honest messages with an unsubscribe link and contact details.",
      "Set exit rules and test the full sequence with a test contact.",
      "Get approval, activate, monitor results, and improve one message at a time.",
    ],
    exercise:
      "Plan the practice four-message sequence with purposes and timing, write the first message, and define the exit rules.",
    portfolio:
      "A four-message nurture sequence plan with exit rules and a first message.",
    mistake:
      "Keeping sending the 'buy now' message to someone who already bought annoys customers and damages trust.",
    question: "Someone buys on day 3 of the sequence. What should happen?",
    options: [
      "They exit the sequence according to the exit rule",
      "They keep receiving every message",
      "They are unsubscribed from all emails",
    ],
    answer: 0,
    explanation:
      "Exit rules prevent irrelevant or pushy messages. Buying, replying, or unsubscribing should stop the sequence.",
    ready: [
      "Confirm consent and honor opt-outs",
      "Plan spaced messages with single purposes",
      "Set and test exit rules",
      "Monitor results and improve gradually",
    ],
    tools: "The client's email automation tool and a test contact.",
    taglish:
      "Ang nurture sequence ay maikling serye ng mensahe pagkatapos magpakita ng interes ang tao, halimbawa nag-sign up para sa gabay. Layunin nitong maging kapaki-pakinabang, hindi mamilit. Magsimula sa consent at agad igalang ang opt-out. Tukuyin ang layunin at audience at magplano ng tatlo hanggang limang mensahe na may sapat na pagitan, bawat isa ay may isang layunin. Isulat sa boses ng client, gumamit ng na-verify na facts, iwasan ang pekeng urgency, at maglagay ng unsubscribe link. Magtakda ng exit rule: ihinto kapag bumili, sumagot, o nag-unsubscribe. I-test gamit ang test contact at kumuha ng approval bago i-activate.",
    proTips: [
      "Add yourself as a test contact and run the whole sequence once before activating it.",
      "Review every message's prices and dates each quarter; sequences quietly go out of date.",
    ],
    deepDive: [
      [
        "Plan one purpose per message",
        "Welcome and expectations first, then value, then proof, then an invitation. If a message has two or three goals, readers will do none of them. Short, focused messages are easier to write and to approve.",
      ],
      [
        "Build exit rules first",
        "Decide what stops the sequence before you write it. Buying, replying, unsubscribing, or changing status all exit the contact. Testing exit rules is as important as testing the messages.",
      ],
      [
        "Keep the sequence fresh",
        "Facts, prices, and offers change. Put a review date in the calendar for each sequence, and turn off any sequence you cannot keep accurate. An outdated automatic message can do more harm than no message.",
      ],
    ],
    practiceData:
      "Fictional sequence: new subscribers from the website form (consent recorded). Messages: day 0 welcome, day 2 how to order, day 5 customer story (permission recorded), day 10 invitation. Facts: pickup Saturday 9–11 AM; orders close Thursday 5 PM; Cookie Box 12 costs 18. A test contact who purchased on day 3 still received day 5.",
    modelAnswer:
      "Message 1 (day 0): welcome and what to expect with the pickup window. Message 2 (day 2): how to order and the Thursday 5 PM deadline. Message 3 (day 5): an approved customer story. Message 4 (day 10): a gentle invitation to try a Cookie Box 12 at 18. Exit rules stop the sequence when someone buys, replies, or unsubscribes; the test failure means the purchase exit rule must be fixed and retested. All messages include an unsubscribe link and contact details, verified facts, and written approval before activation.",
  },
];

const dataEntryModuleIndex = modules.length;
modules.push([
  "Data entry and transcription",
  "Accurate entry with a measured error rate, and clean, verified transcription.",
  "Foundations plus",
  dataEntryLessons,
]);
dataEntryLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${dataEntryModuleIndex}-${index}`,
    mi: dataEntryModuleIndex,
    li: index,
  });
});

const frontdeskModuleIndex = modules.length;
modules.push([
  "Front-desk and live-chat support",
  "Receptionist calls, live chat, and escalations with ticket notes.",
  "Specialization",
  frontdeskLessons,
]);
frontdeskLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${frontdeskModuleIndex}-${index}`,
    mi: frontdeskModuleIndex,
    li: index,
  });
});

const crmModuleIndex = modules.length;
modules.push([
  "CRM and email marketing in practice",
  "A clean pipeline, fair email tests, and consent-based nurture sequences.",
  "Specialization",
  crmLessons,
]);
crmLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${crmModuleIndex}-${index}`,
    mi: crmModuleIndex,
    li: index,
  });
});
