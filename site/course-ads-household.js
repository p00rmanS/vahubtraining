/** Paid-ads reporting, time tracking, household admin, and decision briefs. Append IDs to preserve existing progress. */
const adsTimeLessons = [
  {
    title: "Support paid ad campaigns with tracking links and honest reporting",
    goal: "Help a client run ad campaigns by organizing assets, building tagged links, and reporting results truthfully, without spending money unless approved.",
    prereq: "Social media, spreadsheet, and honest-metrics lessons.",
    teach:
      "Paid ads can bring customers, but they also spend real money fast, so a VA's role is careful support, not free control of the budget. Agree in writing what you may do: prepare creative and copy, build the tracking sheet, and report, while the client or an approved specialist sets budgets and approves launches. Start from the goal: what action counts as a result, such as an order, a booking, or a sign-up, and what the client considers a fair cost for it. Prepare ad assets in the platform's required sizes with approved wording, and check claims, prices, and dates against the approved source; many platforms reject misleading claims and some products and topics have special rules. Build tagged links so you can tell which campaign sent each visit: add UTM parameters for source, medium, and campaign using a consistent naming pattern kept in a sheet, for example 'source=facebook, medium=paid, campaign=holiday-box'. Test every link on a phone before launch. Keep a campaign calendar with start and end dates, budget approved, owner, and creative versions. When reporting, use the platform numbers and the client's own sales data together, define terms in plain words, and list the period, spend, results, and cost per result. Do not hide poor results or credit sales that the ads did not cause; note that platforms and analytics can count differently and say so. Look for patterns, such as which creative performed best, but avoid strong conclusions from tiny numbers. Never change budgets, targeting, or payment methods without written approval, and never share the client's ad account login; use the platform's role-based access. Flag sudden spend or policy warnings to the client immediately.",
    example:
      "A fictional bakery runs a holiday-box promotion with a 200 approved budget. The VA prepares three approved creatives in the right sizes and checks the price and pickup dates. She builds tagged links 'source=facebook, medium=paid, campaign=holiday-box' and tests each on her phone. After a week the platform shows 6 orders for 120 spent, but the shop's sales sheet shows 4 orders with the campaign tag. She reports both numbers, explains the difference, shows cost per order using the shop's figure, notes that results are small, and asks the owner whether to continue. She changes nothing without written approval.",
    steps: [
      "Agree in writing what you may do and who approves budgets and launches.",
      "Define the result that counts and the client's fair cost per result.",
      "Prepare assets, verify claims against the approved source, and build consistently tagged links.",
      "Keep a campaign calendar with dates, approved budget, owner, and creative versions.",
      "Report spend, results, and cost per result from both platform and client data, and flag problems immediately.",
    ],
    exercise:
      "Build the tagged links and campaign sheet for the practice promotion and write a one-page honest report from the practice numbers.",
    portfolio:
      "A campaign tracking sheet with tagged links and a one-page honest results report.",
    mistake:
      "Changing the budget or targeting without approval can spend the client's money on results they never agreed to.",
    question:
      "The ad platform shows 6 orders but the shop's records show 4. What should you do?",
    options: [
      "Report both numbers, explain the difference, and use the shop's records for cost per order",
      "Report only the higher number",
      "Delete the platform data",
    ],
    answer: 0,
    explanation:
      "Platforms and shop records can count differently. Showing both with an explanation keeps the report honest and useful.",
    ready: [
      "Agree scope and approvals before touching a campaign",
      "Verify claims and use consistent tagged links",
      "Report from both platform and client data",
      "Never change spend without written approval",
    ],
    tools:
      "A tracking spreadsheet, the ad platform with role-based access, and a link builder.",
    taglish:
      "Puwedeng magdala ng customer ang bayad na ads, pero mabilis din silang gumastos ng totoong pera, kaya ang papel ng VA ay maingat na suporta, hindi malayang kontrol sa budget. Pagkasunduan nang nakasulat kung ano ang puwede mong gawin: maghanda ng creative at copy, bumuo ng tracking sheet, at mag-ulat, habang ang client o aprubadong espesyalista ang nagtatakda ng budget at nag-aaprub ng launch. Magsimula sa layunin: anong aksyon ang itinuturing na resulta, tulad ng order, booking, o sign-up, at ano ang patas na gastos para dito sa tingin ng client. Ihanda ang ad assets sa tamang sukat na may aprubadong salita, at i-check ang claim, presyo, at petsa sa aprubadong source; tinatanggihan ng maraming platform ang nakaliligaw na claim at may espesyal na patakaran ang ilang produkto. Bumuo ng tagged na link para malaman kung aling campaign ang nagpadala ng bawat bisita: magdagdag ng UTM parameters para sa source, medium, at campaign na may pare-parehong pangalan na nakalista sa sheet. Subukan ang bawat link sa phone bago mag-launch. Magtago ng campaign calendar na may petsa, aprubadong budget, owner, at bersyon ng creative. Sa pag-uulat, gamitin ang numero ng platform at benta ng client nang magkasama, ipaliwanag ang mga termino, at ilista ang panahon, gastos, resulta, at gastos kada resulta. Huwag itago ang mahinang resulta o ipagmalaki ang benta na hindi galing sa ads; sabihin kung magkaiba ang bilang ng platform at analytics. Maghanap ng pattern pero iwasan ang matinding konklusyon sa maliit na numero. Huwag baguhin ang budget, targeting, o payment method nang walang nakasulat na approval, at huwag ibahagi ang login ng ad account; gamitin ang role-based access. I-flag agad ang biglang gastos o policy warning.",
    proTips: [
      "Name campaigns with date and offer, such as '2026-12-holiday-box'. In a year you will still know what each one was.",
      "Ask the client for the 'stop number' before launch: the cost per result at which they would pause. It prevents arguments later.",
    ],
    deepDive: [
      [
        "Scope and approvals",
        "Write what you may do, such as assets, links, and reports, and who approves budgets and launches. Use role-based access, never the client's login. Flag any sudden spend or policy warning to the client right away.",
      ],
      [
        "Verify and tag",
        "Check every claim, price, and date against the approved source, and follow the platform's rules. Tag links with a consistent source, medium, and campaign pattern kept in a sheet. Test every link on a phone before launch.",
      ],
      [
        "Report honestly",
        "Show spend, results, and cost per result from both the platform and the client's records, and explain differences. Do not hide poor results or draw strong conclusions from small numbers. Ask for approval before any change.",
      ],
    ],
    practiceData:
      "Fictional campaign: holiday box, approved budget 200, run for seven days. Platform: 120 spent, 6 orders. Shop sales sheet: 4 orders with the campaign link tag, 2 orders with no tag. Three creatives: A (3 orders), B (2 orders), C (1 order). Claim in draft: 'Free delivery' but the shop offers pickup only.",
    modelAnswer:
      "Fix the claim: remove 'Free delivery' because the shop offers pickup only. Links: source=facebook, medium=paid, campaign=2026-12-holiday-box, tested on a phone. Report: period seven days, spend 120 of 200 approved; platform results 6 orders (cost 20 per order); shop records 4 tagged orders (cost 30 per order), 2 untagged orders that may or may not come from ads. Creative A leads with 3 but numbers are small so no strong conclusion. Ask the owner whether to continue and change nothing without written approval.",
  },
  {
    title: "Track time, estimate work, and bill hours accurately",
    goal: "Record your time honestly, give realistic estimates, and bill clearly so both sides trust the numbers.",
    prereq: "Rate-setting, invoicing, and weekly planning lessons.",
    teach:
      "When you bill by the hour or by package, accurate time records protect both you and the client. Use a simple time tracker or a sheet, and record the date, client, task, and minutes as you work, not from memory at the end of the week. Use consistent task names so a report is easy to read, such as 'Inbox triage' or 'Order sheet check'. Decide with the client how time is rounded, such as to the nearest 15 minutes, and whether short tasks count. Do not bill for time you did not work, for personal breaks, or for learning that the client did not agree to pay for, and be open if a task takes longer than expected. Warn the client early when you approach the agreed hours, for example at 80 percent, and ask whether to continue, rather than surprising them with an overrun. To estimate, break the work into small steps, estimate each, add a buffer for review and questions, and give a range, such as 4 to 6 hours, not one exact number. Compare your estimates with the real time you recorded and adjust next time, because most people underestimate. For packages, track time anyway to confirm the price is fair to you. Send an invoice or report with a short summary of what the hours covered, grouped by task, and keep the detailed log available on request. Keep records for the period your local rules require. Never change past entries to make the totals look better; add a note and an adjustment if you made a mistake. If a client disputes hours, share the log calmly and agree on a fair solution.",
    example:
      "A fictional VA agrees 10 hours a week at a fixed rate and tracks time per task in a sheet. By Thursday she has logged 8.5 hours, so she messages the owner: 'I have used 8.5 of 10 hours; the remaining work is the supplier emails and the Friday summary, about 1.5 hours. Shall I continue?' For a new request, she breaks it into steps, estimates 4 to 6 hours with a buffer, and later compares: it took 5.25. Her invoice lists hours grouped by task with a one-line summary, and the owner has no questions.",
    steps: [
      "Record date, client, task, and minutes as you work using consistent task names.",
      "Agree rounding and what counts as billable with the client.",
      "Warn early, such as at 80 percent of agreed hours, and ask before going over.",
      "Estimate by steps with a buffer and give a range; compare to actual time afterward.",
      "Invoice with a task-grouped summary, keep the log, and never edit past entries to fit totals.",
    ],
    exercise:
      "Log a practice week of tasks, estimate a new task as a range, and write the warning message at 80 percent of hours.",
    portfolio:
      "A weekly time log, an estimate with a range, and a sample task-grouped invoice summary.",
    mistake:
      "Reconstructing hours from memory at week's end leads to guesses that either cheat you or overcharge the client.",
    question:
      "You have used 80 percent of the agreed hours and work remains. What should you do?",
    options: [
      "Tell the client now, show what is left, and ask whether to continue",
      "Keep working and bill the extra hours later",
      "Stop and say nothing",
    ],
    answer: 0,
    explanation:
      "Warning early avoids surprise bills and lets the client choose priorities.",
    ready: [
      "Track time as you work with consistent task names",
      "Agree rounding and billable rules",
      "Warn at 80 percent and estimate with a range",
      "Invoice clearly and never edit past entries",
    ],
    tools:
      "A time tracker or spreadsheet, an invoice template, and a weekly summary.",
    taglish:
      "Kapag oras o package ang singil mo, pinoprotektahan ka at ang client ng tumpak na talaan ng oras. Gumamit ng simpleng time tracker o sheet at itala ang petsa, client, gawain, at minuto habang nagtatrabaho, hindi mula sa alaala sa katapusan ng linggo. Gumamit ng pare-parehong pangalan ng gawain para madaling basahin ang report, tulad ng 'Inbox triage' o 'Order sheet check'. Pagkasunduan sa client kung paano i-round ang oras, tulad ng sa pinakamalapit na 15 minuto, at kung bilang ba ang maiikling gawain. Huwag singilin ang oras na hindi mo ginawa, ang personal na pahinga, o pag-aaral na hindi pumayag bayaran ng client, at maging tapat kung mas matagal ang gawain kaysa inaasahan. Magbabala nang maaga kapag papalapit sa napagkasunduang oras, halimbawa sa 80 porsiyento, at itanong kung magpapatuloy, sa halip na sorpresahin sila ng sobra. Sa pag-estimate, hatiin ang trabaho sa maliliit na hakbang, tantiyahin ang bawat isa, magdagdag ng buffer para sa review at tanong, at magbigay ng saklaw, tulad ng 4 hanggang 6 na oras, hindi isang eksaktong numero. Ihambing ang estimate sa totoong oras na itinala mo at ayusin sa susunod, dahil madalas kulang ang tantiya ng tao. Para sa package, magtala pa rin ng oras para tiyaking patas ang presyo sa iyo. Magpadala ng invoice o report na may maikling buod ng sinaklaw ng oras, nakagrupo ayon sa gawain, at ibigay ang detalyadong log kapag hiniling. Itago ang talaan ayon sa hinihingi ng lokal na patakaran. Huwag baguhin ang lumang entry para gumanda ang kabuuan; magdagdag ng tala at adjustment kung nagkamali. Kung may dispute sa oras, ibahagi nang kalmado ang log at maghanap ng patas na solusyon.",
    proTips: [
      "Start the timer before you open the task, not after. The first minutes are the ones people forget.",
      "Add 25 percent to your first estimate, then give a range. Most tasks hide a question or a review you forgot.",
    ],
    deepDive: [
      [
        "Record as you work",
        "Log the date, client, task, and minutes in real time with consistent task names. Memory at the end of the week produces guesses. Agree on rounding and what counts as billable so there are no surprises.",
      ],
      [
        "Estimate like a professional",
        "Break work into steps, estimate each, add a buffer for review and questions, and give a range. After the task, compare the estimate with the logged time and adjust. Over time your estimates become reliable.",
      ],
      [
        "Warn early, bill clearly",
        "Message the client at about 80 percent of agreed hours with what remains and ask whether to continue. Invoice with a task-grouped summary and keep the log available. Never edit past entries; add a note and an adjustment instead.",
      ],
    ],
    practiceData:
      "Fictional week: agreed 10 hours per week. Logged: Monday inbox 1.5 h, order sheet 1 h; Tuesday inbox 1 h, social scheduling 1.5 h; Wednesday supplier emails 1 h, order sheet 0.75 h; Thursday inbox 1.25 h, summary draft 0.5 h. A new request: build a reply template set for five common questions.",
    modelAnswer:
      "Total logged: 1.5+1+1+1.5+1+0.75+1.25+0.5 = 8.5 hours, which is 85 percent of 10. Message the client now: 'I have used 8.5 of 10 hours; remaining work is the Friday summary, about 1.5 hours. Shall I continue?' Estimate for the template set: five templates at about 45 minutes each (3.75 h) plus 1 h for review and questions, so about 4 to 6 hours. After finishing, compare with the log and adjust. Invoice grouped by task: inbox, order sheet, social scheduling, supplier emails, summary.",
  },
];

const householdDecisionLessons = [
  {
    title: "Manage household and family-office admin with privacy",
    goal: "Handle bills, renewals, documents, and home vendors for a busy executive or family safely, with clear limits on money and access.",
    prereq:
      "Security basics, document management, and confidentiality lessons.",
    teach:
      "Some clients need help with personal and household life as well as business: paying bills on time, tracking renewals, organizing documents, and coordinating home services. This work is highly private, so the way you work matters as much as the tasks. Begin with a written agreement on scope, limits, and approvals: what you may do alone, what needs a yes, and spending limits. For money, prepare payments for approval; do not hold the client's banking passwords, cards, or signing authority unless a proper legal arrangement exists, and prefer approval inside the bank's own tools. Build a simple calendar of recurring items such as utilities, insurance, subscriptions, school fees, vehicle registration, and passport or ID renewals, with reminders well ahead of due dates. Keep an index of important documents, using a secure, access-controlled storage and sharing links rather than copies in email. Record where originals are kept, but do not copy ID numbers or account numbers into chat or plain sheets. Coordinate vendors such as plumbers, cleaners, and drivers by getting two quotes for larger jobs, confirming the address and access arrangements in writing, and sharing the minimum details. Protect family privacy: never discuss the client's household, children, health, or finances outside the work, and ask before contacting schools, doctors, or banks. Handle emergencies by following the client's written contact list. Use separate, client-owned accounts, with a password manager and two-step verification. Keep a log of what you did and the amounts, and report monthly. If you ever feel pressured to do something that is outside the agreement or looks unusual, such as an urgent transfer, stop and verify with the client by a known channel.",
    example:
      "A fictional executive asks the VA to manage household bills and renewals. They agree in writing: she may prepare payments up to 200 for approval but never pay on her own, and she holds no banking passwords. She builds a renewals calendar with reminders 30 days ahead, notes that the car registration is due in five weeks, and indexes documents in the executive's secure storage by link. For a leaking roof, she gets two quotes and confirms access times in writing. An email appears to be from the executive asking for an urgent 900 transfer; she does not act and verifies by calling the known number, and it was fake.",
    steps: [
      "Agree scope, approvals, and spending limits in writing and hold no banking credentials.",
      "Build a renewals calendar with reminders well ahead of due dates.",
      "Index documents in secure, access-controlled storage and share by link, not by email copies.",
      "Coordinate vendors with quotes, written access arrangements, and minimum details.",
      "Verify any unusual or urgent request through a known channel and log actions monthly.",
    ],
    exercise:
      "Write the scope agreement, a renewals calendar for six items, and your response to a suspicious urgent transfer request.",
    portfolio:
      "A scope agreement, a renewals calendar, and a short verification procedure.",
    mistake:
      "Acting on an urgent payment request received only by email can send the client's money to a fraudster.",
    question:
      "An email appears to come from your client asking for an urgent 900 transfer. What should you do?",
    options: [
      "Do not act; verify through a known phone number or channel first",
      "Make the transfer to avoid delay",
      "Reply asking them to confirm by email",
    ],
    answer: 0,
    explanation:
      "Urgent payment requests are a common scam. Verify through a channel you already trust, not the one the message came through.",
    ready: [
      "Agree scope and limits and hold no bank credentials",
      "Calendar renewals with early reminders",
      "Keep documents in secure storage with minimum sharing",
      "Verify unusual requests and keep a log",
    ],
    tools:
      "A calendar, secure document storage, a password manager, and a monthly report template.",
    taglish:
      "May mga client na kailangan ng tulong hindi lang sa negosyo kundi pati sa personal at household na buhay: pagbayad ng bill sa oras, pagsubaybay ng renewal, pag-aayos ng dokumento, at pag-coordinate ng home services. Napakapribado ng gawaing ito, kaya kasinghalaga ng paraan ng pagtatrabaho ang mismong gawain. Magsimula sa nakasulat na kasunduan sa saklaw, limitasyon, at approval: ano ang puwede mong gawin mag-isa, ano ang kailangan ng oo, at limitasyon sa gastos. Sa pera, maghanda ng bayad para sa approval; huwag hawakan ang banking password, card, o signing authority ng client maliban kung may tamang legal na kasunduan, at mas mabuting gawin ang approval sa mismong tool ng bangko. Gumawa ng simpleng calendar ng paulit-ulit tulad ng kuryente at tubig, insurance, subscription, bayarin sa paaralan, rehistro ng sasakyan, at renewal ng passport o ID, na may paalala nang maaga. Magtago ng index ng mahahalagang dokumento sa secure at may kontrol na storage at gumamit ng link sa halip na kopya sa email. Itala kung saan itinatago ang orihinal, pero huwag kopyahin ang ID o account number sa chat o payak na sheet. Sa vendor tulad ng tubero, naglilinis, at driver, kumuha ng dalawang quote para sa malalaking trabaho, kumpirmahin nang nakasulat ang address at access, at ibahagi ang pinakakaunting detalye. Protektahan ang privacy ng pamilya: huwag pag-usapan ang sambahayan, anak, kalusugan, o pera ng client sa labas ng trabaho, at magtanong bago kumontak sa paaralan, doktor, o bangko. Sa emergency, sundin ang nakasulat na contact list. Gumamit ng hiwalay na account na pag-aari ng client, password manager, at two-step verification. Magtago ng log ng ginawa at halaga, at mag-ulat buwan-buwan. Kung may pressure na gumawa ng labas sa kasunduan o kakaiba, tulad ng agarang transfer, huminto at i-verify sa client sa kilalang channel.",
    proTips: [
      "Agree a verbal 'code phrase' with the client for payment requests. A scammer cannot fake what was never written down.",
      "Put the renewal reminder at 30 days and again at 7. The first is for planning, the second is for panic prevention.",
    ],
    deepDive: [
      [
        "Scope, limits, and money",
        "Agree in writing what you may do alone, what needs approval, and spending limits. Prepare payments for approval and hold no banking passwords or signing authority unless a proper legal arrangement exists. Use the bank's own approval tools where possible.",
      ],
      [
        "Documents and renewals",
        "Keep a calendar of recurring items with reminders ahead of the due date. Index documents in secure, access-controlled storage and share links instead of copies. Do not paste ID or account numbers into chat or plain sheets.",
      ],
      [
        "Privacy and verification",
        "Never discuss the client's household, children, health, or finances outside the work. Verify unusual or urgent requests through a channel you already trust. Log actions and report monthly.",
      ],
    ],
    practiceData:
      "Fictional client: an executive with a family household. Recurring items: electricity monthly (due the 20th), car registration due in five weeks, health insurance annual renewal in 60 days, school fees quarterly, passport expires in seven months, internet monthly. A leaking roof needs repair. An email 'from the executive' asks for an urgent 900 transfer to a new account.",
    modelAnswer:
      "Scope agreement: prepare payments up to 200 for approval, never pay alone, no banking passwords. Calendar with reminders 30 and 7 days ahead for electricity, internet, school fees, car registration (five weeks), insurance (60 days), and passport (start the renewal plan well ahead of seven months). Index documents by secure link, not email copies. For the roof, get two quotes and confirm access times in writing. For the 900 transfer, do not act; verify by calling the executive's known number and report the suspicious email. Log actions monthly.",
  },
  {
    title: "Triage a busy client's inbox and write decision briefs",
    goal: "Protect a busy client's attention by sorting incoming items by urgency and presenting decisions in one clear page.",
    prereq: "Inbox management, prioritization, and summary-writing lessons.",
    teach:
      "Busy clients lose time not because they lack ability but because every message looks equally urgent. A VA can protect their attention in two ways: triage and decision briefs. Start by agreeing triage rules in writing with the client: which senders are always important, which topics you may answer alone, which need a draft for approval, and which need an immediate alert. Set up labels or folders such as Act today, Needs decision, Waiting, and Reference, and process the inbox at fixed times. Draft replies in the client's voice for approval, and do not send anything on their behalf unless they have explicitly allowed that category. For anything that needs a decision, write a decision brief that fits on one page: the question in one sentence, the deadline, the options with pros, cons, and cost, your neutral summary of the facts with sources, a recommendation only if the client asks for one, and what happens next once they choose. Make the choice easy, for example 'Reply A, B, or C'. Keep facts separate from opinions, and state what you do not know. Group similar decisions and send them in a batch once or twice a day, unless something is truly urgent. Use a simple urgency scale and explain it: urgent means a real deadline or a financial or safety impact within a day. Avoid crying wolf, because too many alerts teach the client to ignore you. Protect confidentiality, flag suspicious emails and possible scams, and never click unknown links. At the end of each week, send a short summary of what was handled, what is waiting on others, and what is coming, and ask whether the rules need changing.",
    example:
      "A fictional executive gets 120 emails a day. The VA agrees rules: the CEO and the bank are always flagged; supplier scheduling she may answer; invoices go to a Needs decision label. She triages at 9 and 2. For a venue offer, she writes a one-page decision brief: question 'Which venue for the March event?', deadline Friday, options A (cost 1,200, fits 60), B (1,500, fits 80), C (cost not yet confirmed), facts with sources, and 'Reply A, B, or C'. The executive replies 'B' in 20 seconds. On Friday she sends a weekly summary and asks to adjust the rules.",
    steps: [
      "Agree triage rules in writing: always-important senders, solo answers, drafts, and alerts.",
      "Use clear labels and process at fixed times; draft replies for approval.",
      "Write one-page decision briefs with the question, deadline, options, facts, and next step.",
      "Batch similar decisions and reserve urgent alerts for real deadlines or impact.",
      "Flag suspicious messages and send a weekly summary asking whether rules need changing.",
    ],
    exercise:
      "Write triage rules for the practice inbox and one decision brief from the practice facts.",
    portfolio: "A set of triage rules and a one-page decision brief.",
    mistake:
      "Marking everything urgent teaches the client to ignore your alerts, including the one that really matters.",
    question: "What should a decision brief contain?",
    options: [
      "The question, deadline, options with facts, and an easy way to choose",
      "A long forwarded email thread",
      "Only your personal opinion",
    ],
    answer: 0,
    explanation:
      "A good brief makes the decision quick: a clear question, a deadline, options, facts, and a simple reply format.",
    ready: [
      "Agree triage rules and what you may answer alone",
      "Use labels and fixed processing times",
      "Write one-page briefs with an easy choice",
      "Reserve urgent alerts and send a weekly summary",
    ],
    tools:
      "The client's inbox with delegate access, labels, and a one-page brief template.",
    taglish:
      "Nawawalan ng oras ang abalang client hindi dahil kulang sila sa kakayahan kundi dahil magkapareho ang dating ng lahat ng mensahe bilang urgent. Puwedeng protektahan ng VA ang atensyon nila sa dalawang paraan: triage at decision brief. Magsimula sa pagkasunduan nang nakasulat ang tuntunin ng triage: aling sender ang laging mahalaga, anong paksa ang puwede mong sagutin mag-isa, alin ang kailangan ng draft para sa approval, at alin ang nangangailangan ng agarang alerto. Mag-set up ng label o folder tulad ng Act today, Needs decision, Waiting, at Reference, at iproseso ang inbox sa takdang oras. Gumawa ng draft ng sagot sa boses ng client para sa approval, at huwag magpadala sa ngalan nila maliban kung tahasang pinahintulutan ang kategorya. Para sa anumang kailangan ng desisyon, sumulat ng decision brief na kasya sa isang pahina: ang tanong sa isang pangungusap, deadline, mga opsyon na may pros, cons, at gastos, neutral na buod ng facts na may source, rekomendasyon kung hiniling lang ng client, at ang susunod na mangyayari pagkapili. Gawing madali ang pagpili, halimbawa 'Reply A, B, o C'. Ihiwalay ang facts sa opinyon at sabihin ang hindi mo alam. Pagsamahin ang magkakatulad na desisyon at ipadala nang isa o dalawang beses sa isang araw, maliban kung talagang urgent. Gumamit ng simpleng sukatan ng urgency at ipaliwanag: urgent ang may tunay na deadline o epekto sa pera o kaligtasan sa loob ng isang araw. Iwasan ang paulit-ulit na maling alarma, dahil tinuturuan nito ang client na balewalain ka. Protektahan ang kumpidensyalidad, i-flag ang kahina-hinalang email at posibleng scam, at huwag mag-click ng hindi kilalang link. Kada katapusan ng linggo, magpadala ng maikling buod ng nagawa, naghihintay sa iba, at paparating, at itanong kung kailangang baguhin ang mga tuntunin.",
    proTips: [
      "End every brief with the exact reply you need, such as 'Reply B to approve'. A decision that takes ten seconds gets made.",
      "Time your batches to the client's habits. If they read email at 8 and 4, deliver briefs at 7:45 and 3:45.",
    ],
    deepDive: [
      [
        "Rules before sorting",
        "Agree in writing which senders are always flagged, what you may answer alone, what you draft for approval, and what needs an immediate alert. Use a few clear labels and process at fixed times. Never send on the client's behalf without explicit permission.",
      ],
      [
        "The one-page brief",
        "State the question in one sentence, the deadline, the options with pros, cons, and cost, and the facts with sources. Add a recommendation only if asked. End with the exact reply format so the client can decide in seconds.",
      ],
      [
        "Alerts and rhythm",
        "Batch similar decisions and keep urgent alerts for real deadlines or impact within a day. Flag scams and never click unknown links. Send a weekly summary and ask whether the rules still fit.",
      ],
    ],
    practiceData:
      "Fictional inbox of an executive: a bank notice about a limit change, a supplier asking to reschedule a delivery, an invoice for 1,500 from an unknown company, a venue offer needing a choice by Friday (A cost 1,200 fits 60; B cost 1,500 fits 80; C cost unconfirmed), a newsletter, and a message from the CEO. Agreed rules: the CEO and the bank are always flagged.",
    modelAnswer:
      "Triage: CEO message and bank notice go to Act today with an alert; supplier reschedule can be answered by the VA within the rules; the unknown invoice goes to Needs decision with a scam flag, no links clicked; the newsletter goes to Reference; the venue offer needs a decision brief. Brief: question 'Which venue for the March event?', deadline Friday, options A, B, C with cost and capacity, facts with sources, C cost unconfirmed, 'Reply A, B, or C'. Batch and send at the client's usual reading time. Weekly summary and ask about rule changes.",
  },
];

const adsTimeModuleIndex = modules.length;
modules.push([
  "Ads reporting and time you can defend",
  "Support paid campaigns honestly and track, estimate, and bill your time with trust.",
  "Advanced workflow",
  adsTimeLessons,
]);
adsTimeLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${adsTimeModuleIndex}-${index}`,
    mi: adsTimeModuleIndex,
    li: index,
  });
});

const householdDecisionModuleIndex = modules.length;
modules.push([
  "Household admin and decision support",
  "Handle private household admin safely and give busy clients one-page decisions.",
  "Specialization",
  householdDecisionLessons,
]);
householdDecisionLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${householdDecisionModuleIndex}-${index}`,
    mi: householdDecisionModuleIndex,
    li: index,
  });
});
