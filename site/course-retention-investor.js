/** Customer retention emails and founder investor updates. Append IDs to preserve existing progress. */
const retentionInvestorLessons = [
  {
    title: "Support customer retention and win-back emails with consent",
    goal: "Help a small business bring back lapsed customers with respectful, approved emails, using only people who agreed to hear from the business.",
    prereq: "Email newsletter, consent, and honest-metrics lessons.",
    teach:
      "Keeping an existing customer is usually cheaper than finding a new one, so many small businesses send retention and win-back emails. A VA's job is to prepare the list, the draft, and the report, while the owner approves the message and the offer. Start with consent: only email people who agreed to marketing, honor every unsubscribe at once, and include the business name, a real address, and a working unsubscribe link as local rules require. Never buy or scrape lists. Define the segment in plain words, for example customers who bought at least once but not in the last 90 days, and check the count and a few sample rows against the sales record. Remove anyone who unsubscribed, complained, or is marked do-not-contact. Draft a short sequence, such as a friendly check-in, a helpful reminder of what is new, and a final optional offer, with one clear action in each. Keep the subject line honest, because misleading subjects damage trust and may break rules. Never invent urgency, such as a fake countdown, or claim a discount the owner did not approve. Personalize lightly with approved fields like first name, and test with fictional data so you do not send a blank or wrong name. Send a test to yourself and the owner, check links on a phone, and schedule only after written approval. After sending, report opens, clicks, orders, and unsubscribes in plain words, noting that open counts can be unreliable because of privacy features. Compare with the segment size and avoid big conclusions from small numbers. Keep a suppression list and update it every send.",
    example:
      "A fictional bakery wants to reach customers who ordered before but not in 90 days. The VA exports the list, keeps only people marked as agreeing to marketing, removes 14 unsubscribes, and finds 212 people. She drafts three short emails with honest subjects and one link each, tests with fictional names, and sends a test to the owner. After written approval she schedules them a week apart. The report shows 212 sent, 31 clicks, 9 orders, and 3 unsubscribes, which she adds to the suppression list. She notes that open counts are unreliable and that the numbers are small.",
    steps: [
      "Confirm consent, unsubscribe handling, and the owner's approval rules first.",
      "Define the segment in plain words and verify the count against sales records.",
      "Remove unsubscribes, complaints, and do-not-contact entries.",
      "Draft a short honest sequence with one action each, test with fictional data, and get written approval.",
      "Send, report in plain words, and update the suppression list.",
    ],
    exercise:
      "Define a segment from the practice sheet, remove the excluded rows, and draft a three-email win-back sequence for approval.",
    portfolio:
      "A segment definition, a cleaned list count, and an approved three-email win-back sequence with a results report.",
    mistake:
      "Emailing people who never agreed to marketing, or ignoring an unsubscribe, harms trust and may break the rules.",
    question:
      "Your list has 14 people who unsubscribed last month. What should you do before sending?",
    options: [
      "Remove them and add them to the suppression list",
      "Keep them because they bought before",
      "Email them once more with a discount",
    ],
    answer: 0,
    explanation:
      "An unsubscribe must be honored at once, and a suppression list keeps them from being emailed again by mistake.",
    ready: [
      "Email only people who agreed to marketing",
      "Verify the segment against sales records",
      "Keep subjects honest and offers approved",
      "Report plainly and update the suppression list",
    ],
    tools:
      "An email platform, a spreadsheet for the segment and suppression list, and the client's sales export.",
    taglish:
      "Mas mura kadalasan ang panatilihin ang dating customer kaysa maghanap ng bago, kaya maraming maliit na negosyo ang nagpapadala ng retention at win-back emails. Ang trabaho ng VA ay ihanda ang listahan, draft, at report, habang ang owner ang nag-aaprub ng mensahe at alok. Magsimula sa consent: mag-email lang sa mga pumayag sa marketing, sundin agad ang bawat unsubscribe, at ilagay ang pangalan ng negosyo, totoong address, at gumaganang unsubscribe link ayon sa lokal na patakaran. Huwag bumili o mag-scrape ng listahan. Tukuyin ang segment sa simpleng salita, halimbawa mga customer na bumili na pero hindi sa nakaraang 90 araw, at i-check ang bilang at ilang sample na row laban sa sales record. Alisin ang nag-unsubscribe, nag-complain, o markadong do-not-contact. Gumawa ng maikling sunod-sunod na email: friendly na check-in, paalala ng bago, at huling opsyonal na alok, na may isang malinaw na aksyon bawat isa. Gawing tapat ang subject line. Huwag mag-imbento ng pagmamadali, tulad ng pekeng countdown, o mag-claim ng discount na hindi inaprubahan. Gumamit ng bahagyang personalization gaya ng first name at subukan gamit ang fictional na data para walang blangko o maling pangalan. Magpadala ng test sa sarili at sa owner, i-check ang link sa phone, at mag-schedule lang pagkatapos ng nakasulat na approval. Pagkatapos magpadala, iulat ang opens, clicks, orders, at unsubscribes sa simpleng salita, at tandaang hindi laging maaasahan ang opens. Ikumpara sa laki ng segment at iwasan ang malaking konklusyon sa maliit na numero. Panatilihin at i-update ang suppression list sa bawat padala.",
    proTips: [
      "Keep one master suppression list across all tools. A person who unsubscribed in one place should never be emailed from another.",
      "Send the owner the three emails on one page before scheduling. Reading them together shows if the tone or offers conflict.",
    ],
    deepDive: [
      [
        "Consent first",
        "Email only people who agreed to marketing and honor unsubscribes at once. Include the business name, address, and a working unsubscribe link. Never buy or scrape a list.",
      ],
      [
        "Segment and clean",
        "Describe the segment in plain words and verify its count against sales records. Remove unsubscribes, complaints, and do-not-contact entries. Test with fictional data before sending.",
      ],
      [
        "Honest sequence and report",
        "Write short emails with honest subjects, one action each, and only approved offers. Report clicks, orders, and unsubscribes plainly and avoid big conclusions from small numbers.",
      ],
    ],
    practiceData:
      "Fictional list: 260 past customers. 226 agreed to marketing; 14 of those unsubscribed last month; 14 of the 226 bought in the last 90 days and are not lapsed. Owner-approved offer: free cookie with any box, valid until the 30th. Draft subject: 'Last chance!!! 80% off everything'.",
    modelAnswer:
      "Segment: agreed to marketing (226), minus 14 unsubscribed, minus 14 bought within 90 days = 198 lapsed customers; add the 14 unsubscribes to the suppression list. Fix the subject: the 80 percent claim is not approved and the urgency is invented; use 'We miss you: a free cookie with any box until the 30th'. Draft three short emails a week apart, each with one link, test with fictional names, send a test to the owner, and schedule only after written approval.",
  },
  {
    title: "Prepare a founder's investor update and keep records tidy",
    goal: "Help a founder send a clear, accurate monthly investor update and keep supporting files organized, without giving financial advice or exposing private data.",
    prereq: "Bookkeeping support, honest-metrics, and confidentiality lessons.",
    teach:
      "Founders often send investors a short monthly update, and a VA can prepare it so it is accurate, on time, and easy to read. Agree what you may touch: you collect numbers and draft, while the founder reviews, owns every claim, and sends. Use a repeatable format: a one-line headline, key numbers compared to last month, wins, challenges, and specific asks such as an introduction or advice. Pull each number from its source, such as the accounting system or sales report, write the source and date next to it, and never round in a flattering direction or hide a bad month. Distinguish actual results from forecasts and label them clearly. If a figure does not match between two sources, flag it for the founder rather than choosing the nicer one. Keep the tone plain and honest; avoid hype and vague claims. Organize supporting files in a tidy folder with consistent names, such as the cap table, contracts, and monthly reports, with access limited to the people the founder names, and share by link with permission, not by email attachment. Never share documents, bank details, or personal data with anyone the founder did not approve. Keep a calendar of update dates, board or investor meetings, and renewal deadlines. You do not give investment or legal advice, and you do not decide what to disclose; ask the founder or their advisor. Send nothing until the founder approves in writing, and keep the sent version and its sources on file so numbers can be traced later.",
    example:
      "A fictional founder asks her VA to prepare the monthly update. The VA pulls revenue and customer counts from the accounting report, writes the source and date beside each, and compares them with last month. Two sources disagree on customer count, 41 versus 43, so she flags it instead of choosing. She drafts a headline, numbers, two wins, one challenge, and one ask for an introduction. The founder corrects the count to 41, approves in writing, and sends it. The VA saves the sent version with its sources in the shared folder and adds next month's due date to the calendar.",
    steps: [
      "Agree what you may touch and that the founder owns and approves every claim.",
      "Pull each number from its source and note the source and date.",
      "Flag mismatches for the founder and label actuals versus forecasts.",
      "Draft in a repeatable format with a headline, numbers, wins, challenges, and asks.",
      "Keep sent versions and sources in a permissioned folder and track the update calendar.",
    ],
    exercise:
      "Turn the practice numbers into a one-page investor update draft, flag the mismatch, and list the folder structure and calendar you would keep.",
    portfolio:
      "A one-page investor update template filled with practice data, a source list, and a folder and calendar plan.",
    mistake:
      "Choosing the more flattering of two conflicting numbers can mislead investors and damage the founder's credibility.",
    question: "Two reports show 41 and 43 customers. What should you do?",
    options: [
      "Flag the difference for the founder and ask which source is correct",
      "Use 43 because it looks better",
      "Average them to 42",
    ],
    answer: 0,
    explanation:
      "The founder owns every claim. A mismatch should be flagged and resolved against the source, not decided by whichever number looks best.",
    ready: [
      "Founder reviews, owns, and sends the update",
      "Every number has a source and date",
      "Mismatches are flagged, not smoothed over",
      "Files are permissioned and the calendar is kept",
    ],
    tools:
      "A shared document template, the accounting and sales reports, and a permissioned cloud folder.",
    taglish:
      "Madalas nagpapadala ang mga founder ng maikling buwanang update sa investors, at puwedeng ihanda ito ng VA para tumpak, nasa oras, at madaling basahin. Pagkasunduan kung ano ang puwede mong hawakan: ikaw ang magkokolekta ng numero at gagawa ng draft, habang ang founder ang magre-review, may-ari ng bawat claim, at magpapadala. Gumamit ng paulit-ulit na format: isang linyang headline, mahahalagang numero kumpara sa nakaraang buwan, panalo, hamon, at tiyak na hiling tulad ng introduction o payo. Kunin ang bawat numero sa source nito, tulad ng accounting system o sales report, at isulat ang source at petsa sa tabi; huwag i-round pabor sa mas magandang tingnan o itago ang masamang buwan. Ihiwalay ang aktuwal na resulta sa forecast at lagyan ng malinaw na label. Kung magkaiba ang bilang sa dalawang source, i-flag sa founder sa halip na piliin ang mas maganda. Gawing simple at tapat ang tono; iwasan ang hype at malabong claim. Ayusin ang mga file sa malinis na folder na may pare-parehong pangalan, tulad ng cap table, kontrata, at buwanang report, na limitado ang access sa mga taong pinangalanan ng founder, at magbahagi gamit ang link na may permiso, hindi email attachment. Huwag magbahagi ng dokumento, bank details, o personal na data sa hindi inaprubahan ng founder. Magtago ng calendar ng petsa ng update, meeting, at renewal deadline. Hindi ka nagbibigay ng investment o legal advice at hindi ikaw ang magpapasya kung ano ang ilalahad; magtanong sa founder o advisor. Walang ipapadala hangga't hindi nag-aaprub ang founder nang nakasulat, at itago ang ipinadalang bersyon at mga source para masundan ang numero.",
    proTips: [
      "Keep a one-page 'definitions' note, such as what counts as an active customer. The same word must mean the same thing every month.",
      "Draft next month's update skeleton on the first day of the month. Collecting numbers as you go beats a last-day scramble.",
    ],
    deepDive: [
      [
        "Roles and approval",
        "You collect and draft; the founder reviews, owns every claim, and sends. Put approval in writing and keep the sent version with its sources on file.",
      ],
      [
        "Accurate numbers",
        "Take each number from its source and write the source and date beside it. Label actuals versus forecasts, and flag any mismatch instead of choosing the nicer figure.",
      ],
      [
        "Tidy and private files",
        "Use consistent folder and file names, limit access to named people, and share by permissioned link. Track update dates and deadlines in a calendar, and never give financial or legal advice.",
      ],
    ],
    practiceData:
      "Fictional startup: revenue this month 12,400 (accounting report), last month 11,000. Customers 41 per accounting report, 43 per sales sheet. Forecast for next month: 13,500, not yet confirmed. One challenge: a supplier delay. One ask: an introduction to a logistics advisor.",
    modelAnswer:
      "Headline: revenue up from 11,000 to 12,400 (accounting report, month end). Customers: flag 41 versus 43 for the founder to resolve before sending. Label 13,500 as an unconfirmed forecast, not an actual. Wins: revenue growth and one more fact from the founder. Challenge: supplier delay, stated plainly. Ask: introduction to a logistics advisor. Keep the sent version and sources in a permissioned folder and add next month's date to the calendar. Send nothing until the founder approves in writing.",
  },
];

const retentionInvestorModuleIndex = modules.length;
modules.push([
  "Retention emails and founder support",
  "Win back lapsed customers with consent and prepare accurate investor updates for a founder.",
  "Specialization",
  retentionInvestorLessons,
]);
retentionInvestorLessons.forEach((lesson, index) => {
  lessons.push({
    ...lesson,
    id: `${retentionInvestorModuleIndex}-${index}`,
    mi: retentionInvestorModuleIndex,
    li: index,
  });
});
