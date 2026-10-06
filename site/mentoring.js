// Each explanation and tip is specific to the lesson, not a generic fallback.
const mentoring = {
  "0-0": [
    "Ang VA ay remote support na tumutulong sa negosyo. Ang binabayaran ng client ay malinaw na output, tulad ng organized tracker o maayos na follow-up. Hindi kailangang alam mo agad lahat. Pumili muna ng isang service na kaya mong gawin nang tama, at linawin kung aling decisions ang kailangan ng approval.",
    "Describe the deliverable before naming your tools.",
    "Keep a written list of decisions only the client can approve.",
  ],
  "0-1": [
    "Kailangan ng maayos na workspace at consistent na work routine. Hindi ibig sabihin ng remote work ay available ka buong araw. Sabihin ang working hours, response time, at backup plan. Kapag may deadline, ilagay ang date, oras, at time zone para pareho kayo ng understanding ng client.",
    "Test your microphone and file upload before the first client call.",
    "Put your backup connection and outage message in one easy-to-find note.",
  ],
  "0-2": [
    "Piliin ang unang service base sa strengths mo at sa problemang kaya mong solusyunan. Kung maingat ka sa details, puwedeng data cleanup; kung malinaw ka magsulat, puwedeng reply drafting. Huwag earnings claims lang ang basehan. Mas mahalaga ang service na may sample ka at kaya mong i-deliver consistently.",
    "Time a practice project before estimating real work.",
    "Choose a service you can demonstrate with a concrete before/after sample.",
  ],
  "1-0": [
    "Ang magandang file system ay madaling hanapin at malinaw kung alin ang latest. Gumamit ng consistent filenames at iisang agreed source of truth. I-export ang PDF; hindi sapat na palitan ang extension. Bago mag-share, tingnan kung tamang tao lang ang may access at kung viewer o editor ang kailangan.",
    "Include the date and version in deliverable filenames.",
    "Open the exported PDF and inspect its layout before sending.",
  ],
  "1-1": [
    "Sa email, sabihin agad kung bakit ka nagsusulat at ano ang next action. Sa meeting, siguraduhin ang availability, time zone, duration, at link. Huwag basta mag-send: check muna ang recipients at attachment. Ang malinaw na invitation ay mas valuable kaysa invitation na kulang ang details.",
    "Put the requested action and deadline near the start of an email.",
    "Leave a calendar buffer when preparation or travel is needed.",
  ],
  "1-2": [
    "Sa spreadsheet, isang row ay isang record at bawat column ay isang field. I-check ang formula gamit ang manual calculation. Kapag nagsort, isama ang buong table para hindi magkahalo ang names at amounts. Bago mag-delete ng duplicates, linawin kung anong rule ang nagsasabing duplicate talaga sila.",
    "Test formulas on a small dataset with a known answer.",
    "Preserve the source before cleanup and log each substantive change.",
  ],
  "1-3": [
    "Sa research, may source link, date checked, at note kung hindi pa confirmed. Huwag manghula sa missing information. Sa accounts, limited access lang ang hingin at gumamit ng MFA. Hindi porke may access ka ay puwede nang ilagay ang private client data sa anumang AI tool.",
    "Record the exact source for each important finding.",
    "Verify unusual password or payment requests through an established channel.",
  ],
  "2-0": [
    "Inbox triage ang pag-sort ng messages ayon sa priority at next action. Dapat agreed kung ano ang urgent at kailan mag-escalate. Puwedeng mag-draft ng reply, pero huwag mag-approve ng refund o magbago ng commitment kung wala kang authority. Ilista ang pending decisions sa daily summary.",
    "Agree on two or three concrete examples of urgent messages.",
    "Include an owner and follow-up date for every waiting item.",
  ],
  "2-1": [
    "Sa customer support, unawain muna ang issue, i-check ang facts, at ibigay ang authorized next step. Hindi kailangang defensive kapag galit ang customer. Mas okay ang calm at specific na reply. Kung hindi confirmed ang delivery, mag-promise ng update na kaya mong sundin, hindi ng arrival na hindi mo kontrolado.",
    "Check order identity using the client’s approved process.",
    "Use templates as a starting point, then verify every variable.",
  ],
  "2-2": [
    "Ang meeting minutes ay decisions at actions, hindi buong transcript. Bawat action ay may owner at due date. Kung dependent sa approval ang task, ilagay iyon sa tracker. Sa travel, compare total cost at terms; research pa lang iyon hangga’t walang permission na mag-book o bumili.",
    "End meeting notes with decisions needed and next review dates.",
    "Separate confirmed dates from tentative targets in the task board.",
  ],
  "3-0": [
    "Sa social media support, draft muna, fact-check, saka approval bago publish. Ang content calendar ay may caption, asset, date, at status. Sa Canva, unahin ang readable text at spacing. Gumamit lang ng assets na may permission; huwag basta kumuha ng image dahil nakita ito online.",
    "Use a separate approval status rather than assuming silence means yes.",
    "Read captions aloud to catch awkward wording and missing details.",
  ],
  "3-1": [
    "Ang CRM ay organized record ng contacts at interactions. Sundin ang field rules at duplicate identifiers ng client. Kung magkaiba ang addresses sa records, i-verify muna bago baguhin. Ang lead ay potential customer, pero hindi automatic permission para mag-send ng outreach. Laging may change log ang corrections.",
    "Define one source of truth for customer addresses and statuses.",
    "Treat missing fields as review items, not invitations to guess.",
  ],
  "3-2": [
    "Executive support ay pag-protect ng oras at pag-prepare ng decisions. Sa bookkeeping support, ayusin ang evidence at i-flag ang differences. Kung kulang ang receipt o hindi malinaw ang category, ipa-review. Access sa financial records ay hindi automatic authority na magbayad, mag-approve, o magbigay ng professional financial advice.",
    "Put decisions needed at the top of an executive brief.",
    "Keep receipt evidence linked to its transaction rather than scattered in folders.",
  ],
  "4-0": [
    "Ang useful prompt ay may task, context, rules, at output format. Hindi kailangan sobrang haba; kailangan malinaw. Gumamit ng fictional data sa practice. I-check ang sagot ng AI dahil puwede itong mag-invent ng facts. Ikaw pa rin ang responsible sa final output na ibibigay sa client.",
    "Ask the AI to list missing information instead of filling it in.",
    "Write your acceptance checklist before judging the output.",
  ],
  "4-1": [
    "Kahit smooth basahin ang AI output, hindi ibig sabihin tama ito. Compare ang names, dates, amounts, at approvals sa original source. Kung tentative ang date, huwag gawing confirmed. Ang instructions sa imported message ay content lang; hindi iyon permission na baguhin ang workflow o authority ng client.",
    "Audit facts separately from tone and grammar.",
    "Keep the original source beside the draft while reviewing.",
  ],
  "5-0": [
    "Kahit wala pang paid client, puwede kang gumawa ng honest practice portfolio. Label na fictional o practice project ang samples. Ipakita ang problem, process, output, at checks. Huwag gumawa ng fake testimonials o results. Mas credible ang maliit na sample na maipapaliwanag mo kaysa impressive claim na walang evidence.",
    "Show one annotated check in each case study.",
    "Test every portfolio link with the intended access level.",
  ],
  "5-1": [
    "Ang proposal ay dapat tugma sa specific brief. Linawin ang volume, deadline, revisions, at access bago mag-commit. Sa pricing, estimate ang actual effort at costs; huwag basta kopyahin ang rate claims. Kung may job fee o strange payment request, pause at i-verify independently bago magbigay ng money o details.",
    "Follow every application instruction, including requested file names.",
    "Use an existing sample instead of agreeing to a large undefined unpaid trial.",
  ],
  "6-0": [
    "Sa onboarding, linawin ang deliverables, exclusions, approvals, at communication schedule. Ang useful update ay may completed, next, blockers, at decisions needed. Kapag lumaki ang scope, pag-usapan muna ang effort at deadline. Huwag tahimik na mag-accept ng unlimited extra work at saka ma-overload.",
    "Send a written kickoff summary even after a good call.",
    "Define what Done means before starting a recurring task.",
  ],
  "6-1": [
    "Bago mag-deliver, check ang facts, links, permissions, at agreed scope. Sa invoice, malinaw ang service, amount, currency, at due date; requirements may vary. Sa offboarding, hand over ang files at unresolved items, saka alisin ang access ayon sa agreement. Huwag itago ang client data para lang sa future samples.",
    "Include an exception summary in the delivery message.",
    "Use an offboarding checklist so access cleanup is not forgotten.",
  ],
  "7-0": [
    "Ang SOP ay repeatable steps na may trigger, inputs, checks, at exceptions. Bago mag-automate, siguraduhing maayos muna ang manual process. Test ang missing data, duplicates, at failures. Sa dashboard, malinaw ang meaning at source ng bawat metric. Hindi useful ang magandang chart kung mali ang data definition.",
    "Start automation with draft-only outputs before client-facing actions.",
    "Test repeated triggers, not just one successful run.",
  ],
  "7-1": [
    "Kapag multiple clients, kailangan realistic ang capacity at hiwalay ang data ng bawat isa. Isama ang review at communication time sa schedule. Ang service package ay may volume at limits. Bago mag-delegate, kailangan ang required authorization at privacy rules; hindi sapat na busy ka lang.",
    "Reserve a capacity buffer for review and unexpected rework.",
    "Keep a separate access and offboarding checklist for each client.",
  ],
  "8-0": [
    "Ang SUMIF ay nag-a-add ng matching values; COUNTIF ay nagbibilang ng matching records. Magkaiba iyon. Intindihin ang formula at range bago kopyahin. Kung may missing data o error, gawing visible para ma-review. Huwag itago lahat ng error gamit ang blank result dahil puwedeng magmukhang complete ang incomplete data.",
    "Predict the expected answer before entering a formula.",
    "Retest formulas when rows or categories are added.",
  ],
  "8-1": [
    "Data validation helps keep entries consistent, tulad ng status dropdown. Pero kailangan pa ring i-review ang pasted data. Ang blank ay unknown, hindi automatic zero. Ang ID na 00124 ay identifier, kaya dapat preserved ang leading zeros. Bago cleanup, may original copy at malinaw na change log.",
    "Document each column’s allowed values in a data dictionary.",
    "Test whether copy/paste bypasses validation in the chosen tool.",
  ],
  "8-2": [
    "Ang report ay sumasagot sa client question, hindi basta list ng numbers. May reporting period, metric definition, at source. Kung 4 sa 20 ang late, 20% ang rate. Sabihin ang limitations at next action. Huwag i-claim na dahil sa work mo tumaas ang sales kung walang supporting evidence.",
    "Put the result and requested decision before supporting detail.",
    "Check the denominator whenever you report a percentage.",
  ],
  "8-3": [
    "Sa comparison, pare-parehong criteria ang gamitin sa lahat ng options. Isama ang total cost at mandatory requirements. Kung unknown ang timing, markahan bilang unconfirmed. Ang recommendation ay interpretation mo ng evidence, hindi guaranteed fact. I-explain kung bakit iyon ang fit sa priority ng client.",
    "Mark must-have criteria before considering optional benefits.",
    "Date time-sensitive findings so the client knows when they were checked.",
  ],
  "9-0": [
    "Kapag vague ang task, gawing specific ang expected output. Magtanong ng pinakamahalagang unknowns, hindi lahat nang sabay-sabay. Puwedeng mag-prepare ng proposed structure habang waiting, pero huwag gumawa ng change na dependent sa unanswered decision. I-summarize ang agreed scope para pareho ang understanding ninyo.",
    "Offer a small example of the proposed deliverable.",
    "Separate confirmed requirements from working assumptions.",
  ],
  "9-1": [
    "Priority ay deadline, impact, dependencies, at commitments. Hindi lahat ng urgent-looking message ang dapat unahin. Estimate muna ang effort. Kapag blocked, sabihin kung ano ang kulang, epekto sa deadline, at decision na kailangan. Huwag hintayin ang due time bago magsabi na walang access o approval.",
    "Use a Waiting status with an owner and follow-up date.",
    "Give the client two feasible options when capacity is tight.",
  ],
  "9-2": [
    "Sa feedback, alamin kung preference, missed requirement, o actual error. Kapag may mistake, contain muna ang impact, sabihin ang facts, at ibigay ang corrected version. Huwag defensive o mag-delete ng evidence. Magdagdag ng useful prevention check para hindi paulit-ulit ang parehong issue.",
    "Identify the current version explicitly after a correction.",
    "Keep a short correction log to spot repeated causes.",
  ],
  "9-3": [
    "Ang professional boundary ay malinaw na availability, response time, at scope. Hindi kailangang yes sa lahat. Magbigay ng feasible alternative at emergency route kung agreed. I-track ang commitments para hindi malimutan. Mas trusted ang realistic promise na natutupad kaysa mabilis na yes na hindi kayang gawin.",
    "Put your time zone in the availability statement.",
    "Update the tracker when a deadline changes, not just the chat.",
  ],
  "10-0": [
    "Sa reusable prompt, hiwalay ang fixed rules sa changing inputs. Lagyan ng malinaw na placeholders at instructions para sa missing data. Test sa dalawang magkaibang case. Kapag improved ang prompt, may version at change log para alam mo kung aling instruction ang nakatulong o nag-cause ng problema.",
    "Check for unreplaced placeholders before each run.",
    "Keep one representative failure case with the template.",
  ],
  "10-1": [
    "Meeting notes puwedeng may ideas, decisions, at unresolved questions. Huwag gawing commitment ang suggestion. Kung walang owner o date, Unknown muna. Compare bawat action sa source at panatilihin ang conditions tulad ng if approved. Ang conflict ay dapat visible, hindi pinipili lang ang convenient na version.",
    "Require supporting text for important assignments.",
    "Review tentative words separately before finalizing the tracker.",
  ],
  "10-2": [
    "Para i-test ang prompt, gumamit ng normal, missing-data, conflicting, at rule-breaking cases. Score ang accuracy, completeness, tone, at compliance. Hindi sapat ang isang magandang output. May must-pass rules: kung invented ang approval, fail iyon kahit friendly ang wording. Change one instruction, saka retest.",
    "Keep test cases stable when comparing prompt versions.",
    "Treat unauthorized commitments as delivery-blocking failures.",
  ],
  "10-3": [
    "Sa AI workflow, may drafting, checking, approval, at delivery na may assigned owner. Ang review gate ay pause bago sensitive action. Kapag missing ang source, stop for clarification. Hindi security control ang prompt lang. Magsimula sa manual workflow bago automation, at i-log lang ang necessary information.",
    "Name the approval owner at every client-facing gate.",
    "Define how a failed step resumes without creating duplicates.",
  ],
  "11-0": [
    "Proactive means napapansin mo ang risk bago maging urgent. Pero hindi ito permission na mag-overstep. Ipakita ang evidence, impact, at proposed action. Puwedeng mag-prepare ng reminder draft habang waiting for approval. Dapat malinaw kung ano ang puwede mong gawin, i-draft, at ipa-decide sa client.",
    "Agree on a do/draft/escalate action matrix.",
    "Keep recommendations small enough for the client to decide quickly.",
  ],
  "11-1": [
    "Ang decision brief ay nagsisimula sa decision na kailangan at deadline nito. Ipakita ang options, tradeoffs, evidence, at unknowns. Kung recommendation pa lang, label iyon. Huwag ibaon ang decision sa mahabang research dump. Dapat alam ng client kung ano ang kailangan niyang i-approve at ano ang susunod.",
    "Lead with Decision needed by [date/time/zone].",
    "Keep detailed evidence in a linked appendix when appropriate.",
  ],
  "11-2": [
    "Sa coordination, may gumagawa, approver, input provider, at taong kailangan lang ng update. Bawat action ay may clear owner. Ang handoff ay may latest file, status, next step, deadline, at exceptions. Sa critical handoff, confirm receipt; hindi automatic na nakita dahil na-send mo na.",
    "Ask the receiver to confirm a critical handoff.",
    "Escalate dependencies based on impact, not frustration.",
  ],
  "11-3": [
    "Event support needs people, timing, materials, approvals, at backup plan. Mag-work backward mula sa event date. Ang run of show ay timed sequence na may owners. I-test ang link at assign backup host. Bago booking o payment, kailangan authorization at confirmed terms; planning pa lang ay hindi approval.",
    "Test the joining experience before sending instructions.",
    "Assign a backup owner for the most important event step.",
  ],
  "12-0": [
    "QA checklist galing sa acceptance criteria ng client. I-check ang high-impact details tulad ng amounts, recipients, at permissions. Matching total ay hindi proof na tama bawat row dahil puwedeng mag-cancel ang errors. Sabihin kung full review o sample lang ang ginawa, at ilista ang unresolved exceptions.",
    "Use independent checks for critical totals.",
    "Do not call sampled work fully verified.",
  ],
  "12-1": [
    "Version history helps recover mistakes, pero restoring the whole file can erase valid later edits. Stop muna, alamin ang affected scope, at compare versions. Preserve ang correct changes ng teammates. Pagkatapos ng recovery, verify ang records at sabihin kung alin ang current version.",
    "Check collaborator activity before restoring a shared file.",
    "Record exactly which fields were recovered and which were preserved.",
  ],
  "12-2": [
    "Incident ay issue na puwedeng maka-disrupt o expose ng information. Sundin ang policy at contain within your authority. Report confirmed facts, actions taken, unknowns, at next update. Huwag mang-blame o mag-guarantee na walang impact kung wala pang evidence. Preserve details na kailangan sa recovery.",
    "Keep a trusted escalation contact outside the affected system.",
    "Separate confirmed impact from possible exposure.",
  ],
  "12-3": [
    "Root cause ang dahilan kung bakit nangyari ang error, hindi lang symptom. Gumamit ng timeline at evidence. Kung duplicate draft dahil walang unique-ID check, fix iyon; hindi sapat ang be careful. May prevention owner at follow-up measure para makita kung talagang nabawasan ang problema.",
    "Test the prevention step against the original failure.",
    "Choose the smallest change that directly addresses the cause.",
  ],
  "13-0": [
    "Ipakita ang value gamit ang verified output at observable results. Kung estimate ang time saved, sabihin na estimate. Huwag mag-claim ng sales growth na walang evidence ng connection sa work mo. Sa practice portfolio, fictional din ang results. Mas trusted ang specific change log kaysa malaking unsupported claim.",
    "Keep consistent before/after measurement definitions.",
    "Label simulated results prominently in portfolio samples.",
  ],
  "13-1": [
    "Client review compares actual work sa agreed goals. Humingi ng specific feedback at alamin kung nagbago ang priorities. Kung dumoble ang volume, kailangan review ng capacity at scope. Renewal ay updated agreement, hindi unlimited permission. I-confirm in writing ang bagong limits at timing bago simulan.",
    "Prepare two workable renewal options instead of one vague upsell.",
    "Include unresolved items in the review, not just achievements.",
  ],
  "13-2": [
    "Specialization ay deeper skill sa isang client problem. Hindi lang mahabang tool list. Gumawa ng samples na may difficult cases at explain ang checks. Sabihin ang kaya mong gawin independently at kung saan kailangan supervision. Credible ang specialty kapag may evidence, boundaries, at consistent delivery.",
    "Build one exception-heavy sample for the chosen specialty.",
    "Describe the business problem before the software you use.",
  ],
  "13-3": [
    "Mastery ay continuous improvement, hindi lesson count lang. Review ang samples, errors, at feedback. Piliin ang recurring weakness bilang next practice target. Timed practice comes after accuracy. I-revise ang output at i-record ang natutunan. Mas valuable ang corrected work kaysa checkbox na complete pero hindi pa reliable.",
    "Practice a new dataset so you are not memorizing an old answer.",
    "Keep the first version and revision to demonstrate improvement.",
  ],
  "14-0": [
    "Basahin ang job brief bilang requirements na kailangan mong patunayan. I-match ang bawat task sa honest sample o transferable experience. Kung may gap, sabihin at gumawa ng learning plan. Huwag expert claim dahil nanood lang ng tutorial. Sundin pati maliit na application instruction at ilagay ang totoong availability mo.",
    "Create a requirement/evidence/gap table before writing the proposal.",
    "Choose the most relevant sample rather than sending your whole portfolio.",
  ],
  "14-1": [
    "Independent work ay kaya mong sundin ang agreed routine nang hindi laging hinahabol. Confirm ang goal at definition of done. Mag-update ayon sa cadence, at kapag blocked, may facts, impact, at options. Hindi independence ang paggawa ng unauthorized decision. Close the loop sa final delivery.",
    "Use received / in progress / waiting / delivered consistently.",
    "Acknowledge the request without promising an unrealistic deadline.",
  ],
  "14-2": [
    "Sa vendor call, ihanda ang questions at sabihin nang truthful kung sino ka. Ask one question at a time. Kung hindi malinaw, ipa-repeat; huwag basta yes. Read back ang price, date, at conditions. I-log ang confirmed at unknown details, at humingi ng written confirmation kung appropriate.",
    "Practice a calm clarification phrase: Could you repeat the total?",
    "Write notes immediately after the call while details are fresh.",
  ],
  "14-3": [
    "AI skill ay useful kapag checked ang output, hindi raw draft lang. Confirm ang data policy at permitted tool. Verify ang facts, promises, at tone. Kung time savings ang claim, isama ang prep, review, at correction. Ang client-ready output ay accountable at accurate kahit may AI na tumulong.",
    "Measure review time as well as drafting time.",
    "Ask about the client’s AI policy before using sensitive inputs.",
  ],
  "14-4": [
    "Kapag unfamiliar ang tool, focus muna sa exact task. Hingin ang SOP at limited access. Practice sa approved sandbox o fictional case gamit ang current official help. Huwag live customer database ang testing ground. Be honest na learning ka pa, at i-check ang output bago dagdagan ang responsibility.",
    "Document one complete task instead of trying every feature.",
    "Clarify which actions are irreversible before practicing.",
  ],
  "14-5": [
    "Sa trial, malinaw dapat ang scope, timing, payment terms kung paid, at assessment. Practice sa fictional data at i-record ang oras honestly. I-deliver ang files, handoff, at exceptions. Huwag mag-invent para mukhang mabilis. I-revise ang weak areas bago gamitin bilang portfolio proof.",
    "Include a one-paragraph handoff with completed and unresolved items.",
    "Do a final recipient, attachment, and permission check before delivery.",
  ],
};
for (const lesson of lessons) {
  const entry = mentoring[lesson.id];
  if (!entry) throw new Error("Missing mentoring content: " + lesson.id);
  lesson.taglish = entry[0];
  lesson.proTips = entry.slice(1);
}
