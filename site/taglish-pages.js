// Taglish companions for simulations, templates, roadmap weeks, glossary, and mock trials.

// Extra glossary terms for the later chapters.
Object.assign(glossary, {
  Kanban:
    "A board that shows work as cards moving through columns such as To do, Doing, Waiting, and Done.",
  "WIP limit":
    "Work-in-progress limit: the most tasks allowed in Doing at once, so work gets finished.",
  "Least privilege":
    "Giving a tool or person only the minimum access needed for the task.",
  Retention:
    "How long a type of record must be kept before it may be archived or destroyed.",
  Async:
    "Asynchronous work: nobody needs to reply right away, so messages must stand alone.",
  "Case study":
    "A short, honest story of one problem you solved, with evidence of the result.",
  Variance:
    "The difference between what you counted and what you expected, such as counted minus expected.",
  Consent:
    "A person's clear agreement to receive messages or have their data used.",
  Exception:
    "An item that does not fit the normal path and needs a person's judgment.",
  Handoff:
    "Passing work, context, and access to another person with everything they need.",
});

const glossaryTaglish = {
  VA: "Virtual assistant: taong nagbibigay ng business support nang remote.",
  Deliverable: "Ang tiyak na resulta o file na ipinangakong ihahatid.",
  Scope: "Ang trabaho, dami, limitasyon, at kondisyong kasama sa kasunduan.",
  SOP: "Standard operating procedure: paulit-ulit na hakbang para sa isang task.",
  CRM: "Sistema para sa contacts at pakikipag-ugnayan sa customers.",
  Lead: "Posibleng customer; hindi pa ito pahintulot na kontakin siya.",
  Triage: "Pag-uuri ng mga item ayon sa prayoridad at susunod na aksyon.",
  KPI: "Key performance indicator: sukatang nakatali sa isang layunin.",
  Retainer: "Kasunduan para sa regular na serbisyo o nakareserbang oras.",
  Onboarding: "Paghahanda ng impormasyon, expectations, at access sa simula.",
  Offboarding: "Paglilipat ng trabaho at pag-alis ng access sa dulo.",
  MFA: "Multi-factor authentication: higit sa isang patunay na ikaw nga iyon.",
  Phishing:
    "Mapanlinlang na mensaheng nagnanakaw ng impormasyon o nagpapagawa ng hindi ligtas na aksyon.",
  Dependency: "Bagay na kailangan ng isang task bago ito makapagpatuloy.",
  Reconciliation:
    "Paghahambing ng records at pagpapaliwanag ng mga pagkakaiba.",
  Escalation: "Pagpapasa ng isyu sa taong may awtoridad na magpasya.",
  QA: "Quality assurance: pag-check ng gawa laban sa napagkasunduang pamantayan.",
  Prompt: "Utos o tanong na ibinibigay sa AI tool.",
  Automation:
    "Tiyak na aksyong tumatakbo kapag may trigger o kondisyong natugunan.",
  Invoice: "Kahilingan ng bayad na may detalye ng serbisyo at pagbabayad.",
  Kanban:
    "Board na nagpapakita ng trabaho bilang cards na lumilipat sa To do, Doing, Waiting, at Done.",
  "WIP limit":
    "Pinakamaraming task na puwede sa Doing nang sabay, para may natatapos talaga.",
  "Least privilege":
    "Pagbibigay lang ng pinakamababang access na kailangan ng tool o tao para sa task.",
  Retention:
    "Gaano katagal dapat itago ang isang uri ng record bago ito puwedeng i-archive o sirain.",
  Async:
    "Hindi kailangang sabay online ang lahat, kaya dapat kumpleto ang bawat mensahe.",
  "Case study":
    "Maikli at tapat na kuwento ng problemang nalutas mo, may ebidensya ng resulta.",
  Variance:
    "Pagkakaiba ng binilang at inaasahan, halimbawa counted minus expected.",
  Consent:
    "Malinaw na pahintulot ng tao na tumanggap ng mensahe o gamitin ang data niya.",
  Exception:
    "Item na hindi pasok sa normal na daan at kailangan ng judgment ng tao.",
  Handoff:
    "Paglilipat ng trabaho, context, at access sa ibang tao kasama ang lahat ng kailangan niya.",
};

const scenarioTaglish = {
  "01": "May limang mensahe ang bakery at kailangan mong i-label ang bawat isa. Ang refund ay sa owner lang, urgent ang delivery failure ngayon, at hindi alam ang opening hours. Mag-draft ng reply para sa M2 at M3, at gumawa ng daily digest na nagfa-flag ng hindi alam na oras at terms ng discount.",
  "02": "Maliit na order tracker na magulo: may duplicate, blangkong amount, at status na magkakaiba ang pagkakasulat. Itabi muna ang orihinal, alisin ang eksaktong duplicate, gawing pare-pareho ang status, i-flag ang order 103, at i-total ang kilalang unique amounts.",
  "03": "Sabado ang target ng launch pero hinihintay pa ang approval ng presyo at photos. Walang post na lalabas bago ang approval ng owner. Gumawa ng agenda, action tracker, tatlong draft caption, at approval calendar, kasama ang fallback kapag late ang presyo.",
  "04": "Dalawang client ang humihingi ng end-of-day delivery pero apat na oras lang ang meron ka. Kuwentahin ang capacity, magprayoridad ayon sa napagkasunduan, at mag-draft ng hiling na bagong deadline na may mga opsyon.",
  "05": "Gagawa ang automation ng reminder draft at review task kapag Missing address ang order; ang awtorisadong tao lang ang magpapadala. Sumulat ng SOP at i-test ang normal, paulit-ulit na trigger, kulang na email, pagkabigo ng permission, at nabawing error.",
  "06": "Venue A ay 100 at kumpirmado; ang B ay 90 pero hindi pa alam kung available. Kailangan ng approval ng owner bago Wednesday noon at walang booking o invitation na ilalabas nang wala ito. Maghanda ng 150-word na decision brief, dependency tracker, at escalation sa umaga ng Wednesday.",
  "07": "Maling nabago ang lahat ng status at may bagong row na idinagdag ang teammate. Buuin ang naibalik na apat-na-row na tracker nang hindi nawawala ang bagong gawa, sumulat ng factual na incident update, at magdagdag ng prevention check.",
  "08": "Lumaki mula 20 patungong 40 ang orders pero 180 minuto lang ang available kada linggo at wala pang napagkasunduang dagdag. Kuwentahin ang effort, gumawa ng client-review agenda, at mag-alok ng dalawang kayang scope option na may hangganan ng approval.",
};

const templateTaglish = [
  "Panimulang mensahe sa prospect. Palitan ang bawat bracket ng totoong detalye at isang tapat na sample.",
  "Mga tanong para sa discovery call. Gamitin bago mag-quote para malinaw ang problema, deliverables, at source ng data.",
  "Saklaw ng trabaho. Isulat ang serbisyo, limitasyon, exclusions, at kailangan mo sa client para walang scope creep.",
  "Lingguhang update. Tapos, ginagawa, naghihintay, at mga desisyong kailangan, para laging malinaw ang estado.",
  "Reply sa customer. I-verify muna ang facts at huwag mangako ng hindi awtorisado.",
  "Agenda at minutes ng meeting. Laging may desisyon, action, owner, at petsa.",
  "Standard operating procedure. Isulat ang hakbang para maulit ito ng iba, kasama ang exceptions at escalation.",
  "Beginner na AI prompt. Maikli at malinaw; siguraduhing punan ang lahat ng bracket bago patakbuhin.",
  "Intermediate na AI prompt. Magbigay ng context at rules para mas madaling suriin ang output.",
  "Advanced na AI prompt. Gamit lang ang ibinigay na notes, kasama ang owner at due date sa bawat action.",
  "Quality at handoff checklist. Gamitin bago mag-deliver: tama ang detalye, bukas ang links, at tama ang permissions.",
  "Invoice at paalala ng bayad. Sample lang ito; i-check ang lokal na requirements bago gamitin nang totoo.",
  "Offboarding checklist. Tiyaking nailipat ang trabaho, naalis ang access, at nakatala ang tinanggap ng client.",
  "Interview practice. Ipaliwanag ang sitwasyon, ang epekto, ang ginawa mong pagkontrol, at ang natutunan mo.",
];

const weekTaglish = [
  "Unawain ang papel ng VA, pumili ng serbisyo, at gumawa ng workspace at availability guide.",
  "Matuto ng digital basics: maayos na folders, naka-format na dokumento, at na-verify na meeting invite.",
  "Gumawa ng tumpak na trackers: na-check na spreadsheet, source log, at security checklist.",
  "Mag-practice ng araw-araw na support: inbox triage, customer replies, at meeting actions.",
  "Mag-explore ng specialization: pumili ng isang landas at tapusin ang sample project nito.",
  "Gumamit ng AI nang responsable: prompt pack at na-audit na AI output.",
  "Buuin ang portfolio: tatlong may-label na practice case study at profile.",
  "Maghanda para sa oportunidad: angkop na proposal, interview practice, at pricing worksheet.",
  "I-set up ang client delivery: scope, onboarding, at lingguhang update.",
  "Tapusin nang propesyonal ang trabaho: na-check na delivery, sample invoice, at offboarding pack.",
  "Pagbutihin ang systems: SOP, draft-only na automation plan, at capacity plan.",
  "Tapusin ang capstone: i-deliver ang fictional bakery project at suriin ang mga puwang.",
];
