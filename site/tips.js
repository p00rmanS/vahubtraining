/** Real-life tips from day-to-day VA work. Each has English and Taglish text. */
const tipCategories = [
  "Clients",
  "Communication",
  "Money",
  "Quality",
  "Tools and security",
  "Career and mindset",
];

const tips = [
  // Clients
  {
    cat: "Clients",
    title: "Say the scope back to them",
    tip: "After every new request, reply with one line: 'To confirm, I will do X by Y, and Z is not included.' Most scope arguments disappear when the limit is written down early.",
    taglish:
      'Pagkatapos ng bawat bagong request, magreply ng isang linya: "Para makumpirma, gagawin ko ang X bago ang Y, at hindi kasama ang Z." Halos mawawala ang away sa scope kapag nakasulat na ang limitasyon.',
  },
  {
    cat: "Clients",
    title: "Learn how they like to be updated",
    tip: "Ask in week one whether they prefer a short daily message, a weekly summary, or only exceptions. Match it. A client who hears from you the way they like rarely worries.",
    taglish:
      "Itanong sa unang linggo kung gusto nila ng maikling daily message, weekly summary, o exceptions lang. Sundin ito. Bihirang mag-alala ang client na naaabisuhan sa paraang gusto nila.",
  },
  {
    cat: "Clients",
    title: "Never let a client be the first to find your mistake",
    tip: "If you spot an error after delivery, tell them first with the fix: 'I found a wrong date in the file I sent, here is the corrected one.' Owning it early builds more trust than being perfect.",
    taglish:
      'Kung may nakita kang mali pagkatapos mag-deliver, ikaw ang unang magsabi kasama ang ayos: "May nakita akong maling petsa sa file na ipinadala ko, narito ang tama." Mas nagpapatibay ng tiwala ang maagang pag-amin kaysa sa pagiging perpekto.',
  },
  {
    cat: "Clients",
    title: "Keep a one-page client profile",
    tip: "For each client keep preferences, tools, approvers, time zone, tone, and 'never do' rules in one page. Re-reading it before a busy week saves many small mistakes.",
    taglish:
      'Para sa bawat client, magtago ng isang pahina ng kagustuhan, tools, approvers, time zone, tono, at mga "huwag gawin". Ang pagbabasa nito bago ang abalang linggo ay umiiwas sa maraming maliit na pagkakamali.',
  },
  {
    cat: "Clients",
    title: "Trust grows in small deliveries",
    tip: "Early in a relationship, finish small tasks a little before the deadline and say what you checked. Reliability on small things earns bigger responsibility.",
    taglish:
      "Sa simula ng relasyon, tapusin ang maliliit na task nang bahagyang mas maaga sa deadline at sabihin kung ano ang chineck mo. Ang pagiging maaasahan sa maliit ay nagdadala ng mas malaking responsibilidad.",
  },
  {
    cat: "Clients",
    title: "It is fine to say 'not my skill yet'",
    tip: "If a task is outside your skills, say so and offer what you can do or a timeline to learn it safely. Clients remember honesty longer than a rushed, wrong result.",
    taglish:
      "Kung labas sa skills mo ang task, sabihin ito at ialok kung ano ang kaya mo o ang oras para matutunan ito nang ligtas. Mas matagal tandaan ng clients ang katapatan kaysa sa nagmamadali at maling resulta.",
  },
  // Communication
  {
    cat: "Communication",
    title: "Put the ask in the first line",
    tip: "Busy people read the first line. Start with 'Decision needed by Thursday 3 PM:' and then give details. Put the deadline and the time zone in the same sentence.",
    taglish:
      'Ang abalang tao ay unang linya lang ang binabasa. Simulan sa "Kailangan ng desisyon bago mag-Thursday 3 PM:" saka ang detalye. Ilagay ang deadline at time zone sa iisang pangungusap.',
  },
  {
    cat: "Communication",
    title: "Offer two options, not an open question",
    tip: "Instead of 'What should I do?', write 'Option A is faster, option B is cheaper. I recommend A. Reply A or B.' It turns a chore into a ten-second decision.",
    taglish:
      'Sa halip na "Ano ang gagawin ko?", isulat ang "Ang A ay mas mabilis, ang B ay mas mura. Inirerekomenda ko ang A. Sagot lang ng A o B." Nagiging sampung segundong desisyon ang dating mabigat na gawain.',
  },
  {
    cat: "Communication",
    title: "Read it once as the receiver",
    tip: "Before sending an important message, ask: could someone act on this with no other context? Add the link, the date, and the next step if the answer is no.",
    taglish:
      "Bago magpadala ng mahalagang mensahe, itanong: may magagawa ba ang tao rito kahit walang ibang context? Kung wala, idagdag ang link, petsa, at susunod na hakbang.",
  },
  {
    cat: "Communication",
    title: "Tone is lost in text",
    tip: "A short 'Thanks, this helps!' or 'Got it, on it now' prevents the cold read that short messages can have. Warmth costs three seconds.",
    taglish:
      'Ang maikling "Salamat, nakatulong ito!" o "Nakuha ko, ginagawa ko na" ay pumipigil sa malamig na dating ng maiikling mensahe. Tatlong segundo lang ang halaga ng init.',
  },
  {
    cat: "Communication",
    title: "Write decisions where everyone can find them",
    tip: "After a call, post the decisions and owners in one shared place the same day. Chat scrollback is a terrible filing system.",
    taglish:
      "Pagkatapos ng call, i-post ang mga desisyon at owners sa iisang shared na lugar sa parehong araw. Napakasamang filing system ang chat scrollback.",
  },
  {
    cat: "Communication",
    title: "Give your delay early",
    tip: "If you will miss a deadline, say so as soon as you know, with a new realistic time and what you need. An early warning is a courtesy; a late one is a crisis.",
    taglish:
      "Kung hindi mo maaabot ang deadline, sabihin agad kapag alam mo na, kasama ang bagong makatotohanang oras at ang kailangan mo. Ang maagang babala ay paggalang; ang huli ay krisis.",
  },
  // Money
  {
    cat: "Money",
    title: "Price the whole job, not the visible part",
    tip: "Add review, communication, revisions, and a small buffer to every estimate. If a task is 80 minutes of typing, it is rarely 80 minutes of work.",
    taglish:
      "Idagdag sa bawat estimate ang review, komunikasyon, revision, at maliit na buffer. Kung ang task ay 80 minutong pag-type, bihira itong 80 minutong trabaho lang.",
  },
  {
    cat: "Money",
    title: "Invoice on a fixed day",
    tip: "Pick one invoicing day each week or month and keep it. A steady rhythm gets you paid on time and makes late payments easy to spot.",
    taglish:
      "Pumili ng isang araw ng pag-invoice kada linggo o buwan at panatilihin ito. Ang tuloy-tuloy na ritmo ay nagpapabayad sa oras at nagpapadaling makita ang huling bayad.",
  },
  {
    cat: "Money",
    title: "Keep money for taxes and slow months",
    tip: "Move a share of every payment into a separate account for taxes and quiet months, and ask a local accountant what share is right. Freelance income is bumpy.",
    taglish:
      "Maglipat ng bahagi ng bawat bayad sa hiwalay na account para sa buwis at tahimik na buwan, at itanong sa lokal na accountant kung magkano ang tama. Pabago-bago ang kita ng freelancer.",
  },
  {
    cat: "Money",
    title: "Know your real hourly cost",
    tip: "Divide your monthly needs plus tools, internet, and downtime by the hours you can truly bill. That number is the floor of your rate, not the ceiling.",
    taglish:
      "Hatiin ang buwanang pangangailangan mo kasama ang tools, internet, at downtime sa oras na talagang masisingil mo. Ang numerong iyon ang sahig ng rate mo, hindi ang kisame.",
  },
  {
    cat: "Money",
    title: "Be wary of rush and overpayment",
    tip: "Pressure to start now, pay in odd ways, or send back extra money is the shape of most scams. Real clients can wait while you verify.",
    taglish:
      "Ang pressure na magsimula agad, magbayad sa kakaibang paraan, o magpadala pabalik ng sobrang pera ang hugis ng karamihan sa scam. Makakahintay ang totoong client habang nagve-verify ka.",
  },
  {
    cat: "Money",
    title: "Raise rates with a date",
    tip: "Tell clients about a rate change well ahead, give the effective date, and apply it to new work first. Surprise increases feel like betrayals.",
    taglish:
      "Sabihin sa clients ang pagbabago ng rate nang maaga, ibigay ang petsa ng simula, at ilapat muna sa bagong trabaho. Ang biglaang pagtaas ay parang pagtataksil.",
  },
  // Quality
  {
    cat: "Quality",
    title: "Check with a different method",
    tip: "Verify totals a second way, such as a manual sum or filtering the list, instead of rereading the same formula. A second method catches what staring cannot.",
    taglish:
      "I-verify ang total sa pangalawang paraan, tulad ng manual na sum o pag-filter, sa halip na basahing muli ang parehong formula. Nahuhuli ng pangalawang paraan ang hindi nakikita ng pagtitig.",
  },
  {
    cat: "Quality",
    title: "Check dates against a calendar",
    tip: "Dates and days of the week are the most common silent errors. Confirm that 'Friday the 14th' really is a Friday in that month.",
    taglish:
      'Ang petsa at araw ng linggo ang pinakakaraniwang tahimik na mali. Tiyaking ang "Friday the 14th" ay talagang Friday sa buwang iyon.',
  },
  {
    cat: "Quality",
    title: "Do a last-minute recipient check",
    tip: "Before pressing send, read the recipient, subject, and attachment names out loud. It takes ten seconds and prevents the worst mistakes.",
    taglish:
      "Bago pindutin ang send, basahin nang malakas ang recipient, subject, at pangalan ng attachment. Sampung segundo lang ito at pumipigil sa pinakamasamang pagkakamali.",
  },
  {
    cat: "Quality",
    title: "Keep a personal mistake log",
    tip: "Write each mistake in one line with its cause and the check that would have caught it. After a month, your own list becomes your best checklist.",
    taglish:
      "Isulat ang bawat pagkakamali sa isang linya kasama ang sanhi at ang check na sana ay nakahuli rito. Pagkalipas ng isang buwan, ang sarili mong listahan ang pinakamahusay mong checklist.",
  },
  {
    cat: "Quality",
    title: "Never trust an unreviewed AI draft",
    tip: "AI writes fluently, including wrong facts. Check every name, number, date, and promise against the source before anything reaches a client.",
    taglish:
      "Mahusay magsulat ang AI, pati ng maling facts. I-check ang bawat pangalan, numero, petsa, at pangako laban sa source bago ito umabot sa client.",
  },
  {
    cat: "Quality",
    title: "Done means checked and explained",
    tip: "Deliver with one line on what you checked and what remains open. A short honest note beats a silent 'done'.",
    taglish:
      'Mag-deliver na may isang linya kung ano ang chineck mo at ano ang bukas pa. Mas mabuti ang maikli at tapat na tala kaysa sa tahimik na "tapos na".',
  },
  // Tools and security
  {
    cat: "Tools and security",
    title: "Use a password manager and MFA from day one",
    tip: "Unique passwords and a second factor stop the most common account takeovers. Never share passwords in chat; use shared vaults.",
    taglish:
      "Ang natatanging password at pangalawang factor ang pumipigil sa karaniwang pagkakakuha ng account. Huwag magbahagi ng password sa chat; gumamit ng shared vault.",
  },
  {
    cat: "Tools and security",
    title: "Test links and attachments as the client",
    tip: "Open every link in a private window or another account to confirm the client can actually view it. 'Request access' emails waste everyone's day.",
    taglish:
      'Buksan ang bawat link sa private window o ibang account para matiyak na makikita ito ng client. Nakakaabala sa lahat ang mga "request access" na email.',
  },
  {
    cat: "Tools and security",
    title: "Name files so they sort",
    tip: "Use Client_Document_2026-10-22_v2 patterns. Year-month-day sorts correctly, and 'final_FINAL' never stays final.",
    taglish:
      'Gamitin ang pattern na Client_Document_2026-10-22_v2. Tama ang pagkakasunod ng taon-buwan-araw, at hindi nananatiling final ang "final_FINAL".',
  },
  {
    cat: "Tools and security",
    title: "Back up what you build",
    tip: "Keep your own templates, SOPs, and notes in a second place. Loss of a laptop or account should never cost you your work system.",
    taglish:
      "Itago ang sarili mong templates, SOP, at notes sa pangalawang lugar. Ang pagkawala ng laptop o account ay hindi dapat magpawala ng work system mo.",
  },
  {
    cat: "Tools and security",
    title: "Learn one tool deeply before collecting many",
    tip: "Master the spreadsheet, the calendar, and the inbox first. Depth in everyday tools earns more trust than shallow knowledge of twenty apps.",
    taglish:
      "Pagbutihin muna ang spreadsheet, calendar, at inbox. Mas nagpapatibay ng tiwala ang lalim sa pang-araw-araw na tools kaysa mababaw na kaalaman sa dalawampung app.",
  },
  {
    cat: "Tools and security",
    title: "Treat phishing as a daily risk",
    tip: "Hover over links, check the sender address, and verify any request for money or logins through a second channel. Slow down when a message creates panic.",
    taglish:
      "I-hover ang links, i-check ang address ng nagpadala, at i-verify sa pangalawang channel ang anumang hiling para sa pera o login. Magdahan-dahan kapag nagdudulot ng panic ang mensahe.",
  },
  // Career and mindset
  {
    cat: "Career and mindset",
    title: "Build proof, not just claims",
    tip: "Three honest case studies with checks and results beat a long list of skills. Make each one easy to open and easy to understand.",
    taglish:
      "Mas matimbang ang tatlong tapat na case study na may checks at resulta kaysa sa mahabang listahan ng skills. Gawing madaling buksan at unawain ang bawat isa.",
  },
  {
    cat: "Career and mindset",
    title: "Specialize after you earn trust",
    tip: "Start broad enough to get work, then notice what clients keep asking you for and what you do best. A clear specialty lets you charge more and compete less.",
    taglish:
      "Magsimula sa sapat na lawak para makakuha ng trabaho, tapos pansinin kung ano ang paulit-ulit na hinihingi sa iyo at ano ang pinakamahusay mong gawin. Ang malinaw na specialty ay nagpapataas ng rate at nagbabawas ng kalaban.",
  },
  {
    cat: "Career and mindset",
    title: "Protect your rest",
    tip: "Set working hours and a day off, and tell clients. Tired work becomes careless work, and careless work costs you clients.",
    taglish:
      "Magtakda ng oras ng trabaho at araw ng pahinga, at sabihin sa clients. Ang pagod na trabaho ay nagiging pabayang trabaho, at ang pabayang trabaho ay nagpapawala ng clients.",
  },
  {
    cat: "Career and mindset",
    title: "Learn on purpose each quarter",
    tip: "Pick one skill, one practice project, and one way to measure progress. Add the result to your portfolio. Small deliberate steps beat random course hopping.",
    taglish:
      "Pumili ng isang skill, isang practice project, at isang paraan para sukatin ang pag-unlad. Idagdag ang resulta sa portfolio. Mas mabisa ang maliliit na sinadyang hakbang kaysa sa pagpapalit-palit ng kurso.",
  },
  {
    cat: "Career and mindset",
    title: "Ask for feedback after a project",
    tip: "Ask two questions: what should I keep doing and what should I change? Record the answers. Feedback you ask for is feedback you can use.",
    taglish:
      "Magtanong ng dalawa: ano ang dapat kong ipagpatuloy at ano ang dapat kong baguhin? Itala ang mga sagot. Ang feedback na hiniling mo ay feedback na magagamit mo.",
  },
  {
    cat: "Career and mindset",
    title: "Compare yourself to last month's you",
    tip: "Other VAs have different clients, hours, and luck. Track your own accuracy, speed, and confidence over time and celebrate that line going up.",
    taglish:
      "Iba-iba ang clients, oras, at swerte ng ibang VA. Subaybayan ang sarili mong katumpakan, bilis, at kumpiyansa sa paglipas ng panahon at ipagdiwang ang pag-angat ng linyang iyon.",
  },
];
